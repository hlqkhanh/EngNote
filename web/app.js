const { errors, testCatalog, weakTopics, weakKnowledgeSources, theory, vocabGroups, quiz, flashcards, topicQuizzes } = window.part5Data;
const studyEngine = window.part5StudyEngine;

// Thứ tự hiển thị cố định: đề mới nhất trước, đề cũ nhất sau.
const testRank = new Map(testCatalog.map((test, index) => [test.id, index]));
const errorTestId = error => error.id.slice(0, error.id.lastIndexOf("-"));

// Gắn từng dòng kiến thức và ví dụ với đề đã tạo ra kiến thức đó.
// Khi lọc đề, metadata này ngăn lý thuyết từ bài khác xuất hiện cùng kết quả.
function knowledgeRowKey(topic, row) {
  return topic.id === "weak-prepositions" ? `${row[0]}|${row[2]}` : row[0];
}

function belongsToAppliedTests(sourceIds = []) {
  return sourceIds.some(testId => state.appliedTests.has(testId));
}

function scopeTopicKnowledge(topic) {
  const sourceMap = weakKnowledgeSources[topic.id] || { rows: {}, examples: {} };
  return {
    ...topic,
    rows: topic.rows.filter(row => belongsToAppliedTests(sourceMap.rows[knowledgeRowKey(topic, row)])),
    examples: topic.examples.filter(example => belongsToAppliedTests(sourceMap.examples[example]))
  };
}

function readMastered() {
  try {
    return JSON.parse(localStorage.getItem("part5-mastered") || "[]")
      .map(value => typeof value === "number" ? `c1t2-${value}` : value)
      .filter(id => errors.some(error => error.id === id));
  } catch { return []; }
}
function saveMastered(set) {
  try { localStorage.setItem("part5-mastered", JSON.stringify([...set])); } catch {}
  window.part5NotifyChange?.();
}

function readTestFilter() {
  const all = testCatalog.map(test => test.id);
  try {
    const saved = JSON.parse(localStorage.getItem("part5-test-filter") || "null");
    const valid = Array.isArray(saved) ? saved.filter(id => all.includes(id)) : [];
    return new Set(valid.length ? valid : all);
  } catch { return new Set(all); }
}
function saveTestFilter(set) {
  try { localStorage.setItem("part5-test-filter", JSON.stringify([...set])); } catch {}
  window.part5NotifyChange?.();
}

const initialTestFilter = readTestFilter();
const state = {
  page: "mistakes", query: "", mastered: new Set(readMastered()), appliedTests: initialTestFilter,
  draftTests: new Set(initialTestFilter), quizIndex: 0, score: 0, answered: false, finished: false,
  studyTopicId: null, studyMode: "home", studyReturnY: 0,
  flashQueue: [], flashIndex: 0, flashRevealed: false,
  topicQuizItems: [], topicQuizIndex: 0, topicQuizSelected: null, topicQuizScore: 0,
  topicQuizMissed: [], topicQuizFinished: false
};
const app = document.getElementById("app");
const searchInput = document.getElementById("searchInput");
const sidebar = document.getElementById("sidebar");

const esc = value => String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
function highlight(value) {
  const safe = esc(value);
  if (!state.query.trim()) return safe;
  const term = state.query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safe.replace(new RegExp(`(${term})`, "gi"), "<mark>$1</mark>");
}
function questionHTML(text) { return highlight(text).replace("_____", '<span class="blank">_____</span>'); }
function heading(kicker, title, text) { return `<header class="page-heading"><p class="page-kicker">${kicker}</p><h1>${title}</h1><p>${text}</p></header>`; }

function selectedTestLabel() {
  if (state.appliedTests.size === testCatalog.length) return "Tất cả đề";
  if (state.appliedTests.size === 1) return testCatalog.find(test => state.appliedTests.has(test.id))?.label || "1 đề đã chọn";
  return `${state.appliedTests.size} đề đã chọn`;
}

function renderTestFilter() {
  const allDraftSelected = state.draftTests.size === testCatalog.length;
  return `<section class="test-filter-bar" aria-label="Lọc điểm yếu theo bài thi">
    <div class="test-filter-copy"><span>Lọc theo bài thi</span><strong>${selectedTestLabel()}</strong></div>
    <details class="test-filter-menu" id="testFilterMenu">
      <summary><span>${selectedTestLabel()}</span><span class="filter-chevron" aria-hidden="true">⌄</span></summary>
      <div class="test-filter-popover">
        <div class="test-filter-heading"><strong>Chọn bài muốn xem</strong><span>Mới nhất → cũ nhất</span></div>
        <label class="test-choice test-choice-all"><input type="checkbox" data-test-all ${allDraftSelected ? "checked" : ""}><span><b>Tất cả đề</b><small>${errors.length} câu sai</small></span></label>
        <div class="test-choice-list">${testCatalog.map(test => {
          const count = errors.filter(error => errorTestId(error) === test.id).length;
          return `<label class="test-choice"><input type="checkbox" data-test-choice="${test.id}" ${state.draftTests.has(test.id) ? "checked" : ""}><span><b>${test.label}</b><small>${test.date} · ${count} câu sai</small></span></label>`;
        }).join("")}</div>
        <div class="test-filter-actions"><button class="secondary-btn" type="button" data-test-reset>Chọn tất cả</button><button class="primary-btn" type="button" data-test-apply>Áp dụng</button></div>
      </div>
    </details>
  </section>`;
}

function updateChrome() {
  const topic = weakTopics.find(item => item.id === state.studyTopicId);
  const names = { mistakes: "Sổ tay điểm yếu", theory: "Lý thuyết đầy đủ", vocabulary: "Từ vựng", practice: "Luyện nhanh", progress: "Tiến trình", study: topic ? `Học · ${topic.title}` : "Chế độ học" };
  document.getElementById("pageName").textContent = names[state.page];
  document.querySelectorAll("[data-page]").forEach(el => el.classList.toggle("is-active", el.dataset.page === state.page));
  document.getElementById("masteredText").textContent = `${state.mastered.size} / ${errors.length}`;
  document.getElementById("masteredBar").style.width = `${errors.length ? state.mastered.size / errors.length * 100 : 0}%`;
  const navMeta = document.getElementById("mistakeNavMeta");
  if (navMeta) navMeta.textContent = `${errors.length} câu sai · ${weakTopics.length} chủ đề`;
  document.querySelector(".search-box")?.classList.toggle("is-hidden", ["study", "progress"].includes(state.page));
}

function renderMistakes() {
  const q = state.query.toLowerCase();
  const filteredErrors = errors.filter(error => state.appliedTests.has(errorTestId(error)));
  const visibleIds = new Set(filteredErrors.map(error => error.id));
  const topics = weakTopics
    .map(topic => scopeTopicKnowledge({...topic, errorIds: topic.errorIds.filter(id => visibleIds.has(id))}))
    .filter(topic => topic.errorIds.length)
    .filter(topic => !q || JSON.stringify(topic).toLowerCase().includes(q) || topic.errorIds.some(id => JSON.stringify(errors.find(error => error.id === id)).toLowerCase().includes(q)));
  const priority = topics.map(topic => ({topic, count: topic.errorIds.length})).sort((a,b) => b.count - a.count)[0];
  return `${heading("Sổ tay điểm yếu", "Học lý thuyết trước, chữa lỗi sau.", "Mỗi chương bắt đầu bằng kiến thức tổng quát và bảng cách dùng. Sau khi đọc ví dụ, mở mục cuối chương để xem lại những câu bạn đã làm sai.")}
    <div class="notice"><strong>Cách dùng sổ tay:</strong> đọc phần lý thuyết và tự đặt một ví dụ mới trước. Chỉ sau đó mới mở “Các câu đã làm sai” để kiểm tra cách áp dụng.</div>
    ${renderTestFilter()}
    <section class="weak-summary"><div class="weak-stat"><span>Chủ đề yếu</span><strong>${topics.length} chủ đề</strong></div><div class="weak-stat"><span>Câu sai đang xem</span><strong>${filteredErrors.length} câu</strong></div><div class="weak-stat"><span>Ưu tiên cao nhất</span><strong>${priority ? `${priority.topic.title} · ${priority.count} câu` : "—"}</strong></div></section>
    ${topics.length ? topics.map((topic,index) => renderWeakTopic(topic,index)).join("") : '<div class="empty">Không tìm thấy chủ đề phù hợp.</div>'}`;
}

function renderWeakTopic(topic, index) {
  // Lọc phòng thủ lần cuối ngay trước khi render để không một thẻ lỗi ngoài đề đã chọn có thể lọt vào drawer.
  const related = topic.errorIds
    .map(id => errors.find(error => error.id === id))
    .filter(error => error && state.appliedTests.has(errorTestId(error)))
    .sort((a,b) => (testRank.get(errorTestId(a)) - testRank.get(errorTestId(b))) || a.q - b.q);
  const subtitle = topic.subtitle.replace(/ · \d+ câu sai$/, "");
  const isScoped = state.appliedTests.size < testCatalog.length;
  return `<article class="topic-notebook" id="${topic.id}">
    <header class="topic-header"><div class="topic-heading"><span class="topic-index">${String(index+1).padStart(2,"0")}</span><div><h2>${highlight(topic.title)}</h2><p>${subtitle} · ${related.length} câu sai</p></div></div><div class="topic-actions"><button class="study-topic-btn" type="button" data-study-topic="${topic.id}">Học chủ đề</button><span class="error-count">${related.length} câu sai</span></div></header>
    <div class="topic-content">
      <div class="block-label">Lý thuyết tổng quát</div>
      <div class="theory-intro"><p>${highlight(topic.intro)}</p><ol>${topic.steps.map(step => `<li>${highlight(step)}</li>`).join("")}</ol></div>
      <div class="block-label">${isScoped ? "Cấu trúc và cách dùng trong đề đã chọn" : "Cấu trúc và cách dùng cần nắm"}</div>
      <div class="knowledge-wrap"><table class="knowledge-table"><thead><tr>${topic.columns.map(c => `<th>${c}</th>`).join("")}</tr></thead><tbody>${renderKnowledgeRows(topic)}</tbody></table></div>
      ${topic.examples.length ? `<section class="sample-block"><h3>${isScoped ? "Ví dụ từ đề đã chọn" : "Ví dụ mẫu"}</h3><ul>${topic.examples.map(example => `<li>${highlight(example)}</li>`).join("")}</ul></section>` : ""}
      <details class="wrong-drawer"><summary>Các câu đã làm sai (${related.length}) — mở để xem lời giải</summary><div class="wrong-drawer-content">${related.map(renderErrorCard).join("")}</div></details>
    </div>
  </article>`;
}

function renderKnowledgeRows(topic) {
  if (topic.id !== "weak-wordclass") {
    return topic.rows.map(row => `<tr>${row.map(cell => `<td>${highlight(cell)}</td>`).join("")}</tr>`).join("");
  }

  const families = [];
  topic.rows.forEach(row => {
    let family = families.find(group => group.name === row[0]);
    if (!family) {
      family = { name: row[0], rows: [] };
      families.push(family);
    }
    family.rows.push(row);
  });

  return families.map((family, familyIndex) => family.rows.map((row, rowIndex) => `
    <tr class="${familyIndex > 0 && rowIndex === 0 ? "family-start" : ""}">
      ${rowIndex === 0 ? `<td class="family-cell" rowspan="${family.rows.length}">${highlight(family.name)}</td>` : ""}
      ${row.slice(1).map((cell, cellIndex) => `<td class="${cellIndex === 0 ? "word-cell" : ""}">${highlight(cell)}</td>`).join("")}
    </tr>`).join("")).join("");
}

function renderErrorCard(e) {
  const mastered = state.mastered.has(e.id);
  return `<details class="error-card ${mastered ? "is-mastered" : ""}" id="error-${e.id}">
    <summary class="error-summary">
      <div class="question-id">${e.q}</div>
      <div class="error-title"><div class="error-source">${e.test}</div><h2>${highlight(e.title)}</h2><div class="tag-row"><span class="tag">${e.type}</span><span class="tag secondary">${e.topic}</span>${e.repeat ? '<span class="tag repeat">Lỗi lặp lại</span>' : ""}${mastered ? '<span class="tag mastered-tag">Đã nắm chắc</span>' : ""}</div></div>
      <span class="answer-badge">Đáp án ${e.answer}</span>
      <span class="expand-icon" aria-hidden="true">⌄</span>
    </summary>
    <div class="error-body">
      <section class="question-block">
        <div class="question-label">${e.test} · Câu ${e.q} · Đáp án đúng ${e.answer}</div>
        <div class="question-text">${questionHTML(e.question)}</div>
        <div class="options">${e.options.map(o => `<div class="option ${o[0] === e.answer ? "correct" : ""}"><span class="option-letter">${o[0]}</span><span class="option-text"><b>${highlight(o[1])}</b><small>${highlight(o[2])}</small></span></div>`).join("")}</div>
      </section>
      <div class="diagnosis-grid">
        <section class="diagnosis rule"><h3>Chẩn đoán loại lỗi</h3><p>${highlight(e.diagnosis)}</p></section>
        <section class="diagnosis trap"><h3>Manh mối phải nhìn thấy</h3><p>${highlight(e.clue)}</p></section>
      </div>
      <div class="formula"><span>QUY TẮC CHỐT → </span>${highlight(e.rule)}<br>${highlight(e.formula)}</div>
      <div class="master-row"><button class="master-btn ${mastered ? "is-active" : ""}" data-master="${e.id}">${mastered ? "✓ Đã nắm chắc" : "Đánh dấu đã hiểu"}</button></div>
    </div>
  </details>`;
}

function renderTheory() {
  const q = state.query.toLowerCase();
  const sections = theory.map(s => ({...s, lessons: s.lessons.filter(l => !q || JSON.stringify(l).toLowerCase().includes(q) || s.title.toLowerCase().includes(q))})).filter(s => s.lessons.length);
  return `${heading("Sổ tay lý thuyết", "Học theo hệ thống, không học từng câu rời rạc.", "Mỗi bài học được tách rõ thành định nghĩa, công thức, dấu hiệu nhận biết, bẫy và ví dụ thật từ đề đã luyện.")}
    <div class="theory-layout">
      <aside class="theory-toc"><h2>Mục lục</h2>${theory.map((s,i) => `<button class="toc-link" data-jump="${s.id}">${i+1}. ${s.title}</button>`).join("")}</aside>
      <div class="theory-content">${sections.length ? sections.map((s,i) => `<section class="theory-section" id="${s.id}">
        <header class="section-heading"><span class="section-number">${String(i+1).padStart(2,"0")}</span><h2>${s.title}</h2></header>
        <div class="lesson-list">${s.lessons.map(renderLesson).join("")}</div>
      </section>`).join("") : '<div class="empty">Không tìm thấy phần lý thuyết phù hợp.</div>'}</div>
    </div>`;
}

function renderLesson(l) {
  return `<article class="lesson">
    <header class="lesson-title"><h3>${highlight(l.title)}</h3><span class="source">Nguồn: ${l.source}</span></header>
    <div class="lesson-grid">
      <div class="lesson-main"><div class="block-label">Khái niệm</div><p class="definition">${highlight(l.definition)}</p><div class="block-label">Công thức / cấu trúc</div><div class="pattern">${highlight(l.pattern)}</div><div class="block-label">Dấu hiệu nhận biết</div><div class="signal-list">${l.signals.map(s => `<span class="signal">${highlight(s)}</span>`).join("")}</div></div>
      <aside class="lesson-side"><div class="block-label">Bẫy thường gặp</div><div class="trap-box">${highlight(l.trap)}</div><div class="example"><div class="block-label">Ví dụ từ bài luyện</div><strong>✓</strong> ${highlight(l.example)}</div></aside>
    </div>
  </article>`;
}

function renderVocabulary() {
  const q = state.query.toLowerCase();
  const groups = vocabGroups.map(g => ({...g, items: g.items.filter(item => !q || item.join(" ").toLowerCase().includes(q) || g.title.toLowerCase().includes(q))})).filter(g => g.items.length);
  return `${heading("Từ vựng & collocation", "Học theo cụm để chọn đáp án nhanh hơn.", "Mỗi cụm có nghĩa tiếng Việt và mẫu kết hợp tự nhiên. Đây là những cụm đã thực sự xuất hiện trong 90 câu đã xử lý.")}
    <div class="vocab-groups">${groups.length ? groups.map(g => `<section class="vocab-section"><header class="vocab-heading"><h2>${g.title}</h2><span>${g.items.length} cụm</span></header><table class="vocab-table"><thead><tr><th>Cụm từ</th><th>Nghĩa</th><th>Cách kết hợp</th></tr></thead><tbody>${g.items.map(i => `<tr><td>${highlight(i[0])}</td><td>${highlight(i[1])}</td><td><code>${highlight(i[2])}</code></td></tr>`).join("")}</tbody></table></section>`).join("") : '<div class="empty">Không tìm thấy từ vựng phù hợp.</div>'}</div>`;
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function durationLabel(due, now = new Date()) {
  const minutes = Math.max(1, Math.round((new Date(due) - new Date(now)) / 60000));
  if (minutes < 60) return `${minutes} phút`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} giờ`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days} ngày`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months} tháng`;
  return `${Math.round(months / 12)} năm`;
}

function nextDueLabel(value) {
  if (!value) return "Chưa có lịch";
  return new Intl.DateTimeFormat("vi-VN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function openStudy(topicId) {
  if (!weakTopics.some(topic => topic.id === topicId)) return;
  state.studyReturnY = window.scrollY;
  state.studyTopicId = topicId;
  state.studyMode = "home";
  state.page = "study";
  state.query = "";
  searchInput.value = "";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeStudy() {
  const topicId = state.studyTopicId;
  state.page = "mistakes";
  state.studyMode = "home";
  render();
  requestAnimationFrame(() => {
    const topic = document.getElementById(topicId);
    if (topic) topic.scrollIntoView({ block: "start" });
    else window.scrollTo({ top: state.studyReturnY });
  });
}

function startFlashSession() {
  state.flashQueue = studyEngine.createSession(state.studyTopicId, state.appliedTests);
  state.flashIndex = 0;
  state.flashRevealed = false;
  state.studyMode = "flashcards";
  render();
}

function startTopicQuiz(onlyIds = null) {
  let items = studyEngine.quizzesForTopic(state.studyTopicId, state.appliedTests);
  if (onlyIds) items = items.filter(item => onlyIds.includes(item.id));
  state.topicQuizItems = shuffle(items).map(item => ({ ...item, choices: shuffle(item.choices) }));
  state.topicQuizIndex = 0;
  state.topicQuizSelected = null;
  state.topicQuizScore = 0;
  state.topicQuizMissed = [];
  state.topicQuizFinished = false;
  state.studyMode = "topic-quiz";
  render();
}

function rateCurrentFlashcard(rating) {
  if (state.studyMode !== "flashcards" || !state.flashRevealed) return;
  const cardId = state.flashQueue[state.flashIndex];
  if (!cardId) return;
  studyEngine.review(cardId, rating, new Date());
  state.flashIndex++;
  state.flashRevealed = false;
  render();
}

function renderStudyHome(topic) {
  const stats = studyEngine.stats(topic.id, state.appliedTests);
  const quizCount = studyEngine.quizzesForTopic(topic.id, state.appliedTests).length;
  return `<section class="study-dashboard">
    <div class="study-scope"><span>Phạm vi đang học</span><strong>${esc(selectedTestLabel())}</strong></div>
    <div class="study-stats">
      <article><span>Đến hạn</span><strong>${stats.due}</strong></article>
      <article><span>Thẻ mới</span><strong>${stats.fresh}</strong></article>
      <article><span>Tổng thẻ</span><strong>${stats.total}</strong></article>
      <article><span>Lần ôn kế tiếp</span><strong>${esc(nextDueLabel(stats.nextDue))}</strong></article>
    </div>
    <div class="study-mode-grid">
      <article class="study-mode-card"><span class="study-mode-icon">SRS</span><h2>Flashcard FSRS</h2><p>Ôn toàn bộ thẻ đến hạn và tối đa 5 thẻ mới. Mục tiêu ghi nhớ: 90%.</p><button class="primary-btn" type="button" data-start-flash ${stats.due + stats.fresh === 0 ? "disabled" : ""}>${stats.due + stats.fresh === 0 ? "Chưa có thẻ cần học" : "Bắt đầu flashcard"}</button></article>
      <article class="study-mode-card"><span class="study-mode-icon">10Q</span><h2>Trắc nghiệm chủ đề</h2><p>${quizCount} câu khả dụng trong phạm vi đề hiện tại. Kết quả được lưu riêng với FSRS.</p><button class="primary-btn" type="button" data-start-topic-quiz ${quizCount === 0 ? "disabled" : ""}>Bắt đầu trắc nghiệm</button></article>
    </div>
    <section class="study-backup"><div><h2>Sao lưu tiến độ</h2><p>Xuất hoặc khôi phục FSRS, lịch sử quiz, bộ lọc và các câu đã đánh dấu nắm chắc.</p></div><div class="study-backup-actions"><button class="secondary-btn" type="button" data-study-export>Xuất JSON</button><button class="secondary-btn" type="button" data-study-import>Nhập JSON</button></div></section>
  </section>`;
}

function renderFlashcards(topic) {
  if (!state.flashQueue.length) {
    return `<section class="study-empty"><h2>Hôm nay chưa có thẻ cần học</h2><p>Các thẻ đã học sẽ quay lại đúng ngày FSRS lên lịch.</p><button class="secondary-btn" data-study-home>Về tổng quan</button></section>`;
  }
  if (state.flashIndex >= state.flashQueue.length) {
    const stats = studyEngine.stats(topic.id, state.appliedTests);
    return `<section class="study-complete"><span class="complete-mark">✓</span><h2>Đã hoàn thành phiên flashcard</h2><p>Bạn đã xử lý ${state.flashQueue.length} thẻ. Lần ôn sắp tới: <strong>${esc(nextDueLabel(stats.nextDue))}</strong>.</p><div class="action-row"><button class="secondary-btn" data-study-home>Về tổng quan</button><button class="primary-btn" data-restart-flash>Kiểm tra phiên mới</button></div></section>`;
  }
  const cardId = state.flashQueue[state.flashIndex];
  const card = studyEngine.getCard(cardId);
  const previews = state.flashRevealed ? studyEngine.preview(cardId, new Date()) : null;
  const labels = [[1, "Lại", "again"], [2, "Khó", "hard"], [3, "Tốt", "good"], [4, "Dễ", "easy"]];
  return `<section class="flash-session" aria-live="polite">
    <div class="study-progress-row"><span>Thẻ ${state.flashIndex + 1}/${state.flashQueue.length}</span><div class="study-progress"><span style="width:${state.flashIndex / state.flashQueue.length * 100}%"></span></div></div>
    <article class="flashcard ${state.flashRevealed ? "is-revealed" : ""}">
      <div class="flash-label">Mặt trước · Tự nhớ trước khi lật</div><h2>${esc(card.front)}</h2>
      ${state.flashRevealed ? `<div class="flash-back"><div><span>Đáp án</span><strong>${esc(card.back.answer)}</strong></div><p>${esc(card.back.explanation)}</p><div class="flash-example"><b>Ví dụ:</b> ${esc(card.back.example)}</div><div class="flash-trap"><b>Bẫy:</b> ${esc(card.back.trap)}</div></div>` : `<button class="flip-btn" type="button" data-flip-card>Hiện đáp án <kbd>Space</kbd></button>`}
    </article>
    ${state.flashRevealed ? `<div class="rating-help">Bạn nhớ thẻ này ở mức nào?</div><div class="rating-grid">${labels.map(([rating, label, css]) => `<button class="rating-btn ${css}" type="button" data-rate-card="${rating}"><kbd>${rating}</kbd><b>${label}</b><span>${esc(durationLabel(previews[rating].due))}</span></button>`).join("")}</div>` : ""}
  </section>`;
}

function renderTopicQuiz() {
  const total = state.topicQuizItems.length;
  if (!total) return `<section class="study-empty"><h2>Không có câu hỏi trong phạm vi đề đã chọn</h2><p>Quay lại sổ tay và thay đổi bộ lọc đề để học thêm.</p><button class="secondary-btn" data-study-home>Về tổng quan</button></section>`;
  if (state.topicQuizFinished) {
    const percent = Math.round(state.topicQuizScore / total * 100);
    const missedIds = [...new Set(state.topicQuizMissed)];
    return `<section class="study-complete"><div class="result-score">${state.topicQuizScore}/${total}</div><h2>${percent >= 80 ? "Phản xạ khá tốt" : "Nên xem lại quy tắc và thử lần nữa"}</h2><p>${percent}% chính xác · ${missedIds.length} câu cần xem lại.</p><div class="action-row"><button class="secondary-btn" data-study-home>Về tổng quan</button>${missedIds.length ? `<button class="secondary-btn" data-retry-missed='${JSON.stringify(missedIds)}'>Làm lại câu sai</button>` : ""}<button class="primary-btn" data-start-topic-quiz>Làm lại toàn bộ</button></div></section>`;
  }
  const item = state.topicQuizItems[state.topicQuizIndex];
  const selected = state.topicQuizSelected;
  const answered = selected !== null;
  const correct = selected === item.answerId;
  return `<section class="topic-quiz-session">
    <div class="study-progress-row"><span>Câu ${state.topicQuizIndex + 1}/${total} · Điểm ${state.topicQuizScore}</span><div class="study-progress"><span style="width:${state.topicQuizIndex / total * 100}%"></span></div></div>
    <article class="quiz-card"><div class="quiz-question">${questionHTML(item.stem)}</div><div class="answer-list">${item.choices.map((choice, index) => `<button class="answer ${answered && choice.id === item.answerId ? "correct" : ""} ${answered && choice.id === selected && choice.id !== item.answerId ? "wrong" : ""}" data-study-answer="${choice.id}" ${answered ? "disabled" : ""}>${String.fromCharCode(65 + index)}. ${esc(choice.text)}</button>`).join("")}</div>${answered ? `<div class="feedback"><strong>${correct ? "Đúng." : "Sai."}</strong> ${esc(item.explanation)}</div><div class="action-row"><button class="primary-btn" data-topic-quiz-next>${state.topicQuizIndex === total - 1 ? "Xem kết quả" : "Câu tiếp theo →"}</button></div>` : ""}</article>
  </section>`;
}

function renderStudy() {
  const topic = weakTopics.find(item => item.id === state.studyTopicId);
  if (!topic) return `<div class="empty">Không tìm thấy chủ đề học.</div>`;
  const content = state.studyMode === "flashcards" ? renderFlashcards(topic) : state.studyMode === "topic-quiz" ? renderTopicQuiz(topic) : renderStudyHome(topic);
  return `<header class="study-header"><button class="study-back" type="button" data-close-study>← Quay lại sổ tay</button><div><p>CHẾ ĐỘ HỌC THEO CHỦ ĐỀ</p><h1>${esc(topic.title)}</h1><span>${esc(selectedTestLabel())}</span></div>${state.studyMode !== "home" ? `<button class="secondary-btn" type="button" data-study-home>Tổng quan</button>` : ""}</header>${content}`;
}

function renderPractice() {
  if (state.finished) {
    const percent = Math.round(state.score / quiz.length * 100);
    return `${heading("Kết quả ôn lại", "Một vòng kiểm tra đã hoàn thành.", "Kết quả này giúp bạn quyết định nên quay lại nhóm kiến thức nào.")}<section class="practice-wrap"><div class="quiz-card result"><div class="result-score">${state.score}/${quiz.length}</div><h2>${percent >= 80 ? "Đã hình thành phản xạ khá tốt" : "Cần ôn lại giới từ và cụm cố định"}</h2><p>${percent}% câu trả lời chính xác.</p><div class="action-row" style="justify-content:center"><button class="primary-btn" data-quiz-action="restart">Làm lại từ đầu</button></div></div></section>`;
  }
  const item = quiz[state.quizIndex];
  return `${heading("Luyện nhanh", "Kiểm tra lại đúng những lỗi đã gặp.", "Chọn một đáp án. Sau mỗi câu, hệ thống sẽ chỉ ra quy tắc quyết định đáp án.")}
    <section class="practice-wrap"><div class="quiz-progress">${quiz.map((_,i) => `<span class="${i < state.quizIndex ? "done" : i === state.quizIndex ? "current" : ""}"></span>`).join("")}</div><article class="quiz-card"><div class="quiz-meta">Câu ${state.quizIndex+1}/${quiz.length} · Điểm hiện tại: ${state.score}</div><div class="quiz-question">${questionHTML(item[0])}</div><div class="answer-list">${item[1].map((a,i) => `<button class="answer" data-answer="${i}">${String.fromCharCode(65+i)}. ${esc(a)}</button>`).join("")}</div><div id="feedback" aria-live="polite"></div></article></section>`;
}

function progressForTopic(topic) {
  const stats = studyEngine.stats(topic.id, state.appliedTests);
  const quizIds = new Set(studyEngine.quizzesForTopic(topic.id, state.appliedTests).map(item => item.id));
  const attempts = studyEngine.getProgress().quizAttempts.filter(item => quizIds.has(item.quizId));
  const correct = attempts.filter(item => item.correct).length;
  const scopedErrors = topic.errorIds.filter(id => state.appliedTests.has(errorTestId(errors.find(item => item.id === id))));
  const mastered = scopedErrors.filter(id => state.mastered.has(id)).length;
  return { ...stats, attempts: attempts.length, correct, errors: scopedErrors.length, mastered };
}

function cloudStatusMarkup() {
  const cloud = window.part5CloudSync;
  const status = cloud?.getStatus() || { state: "local", label: "Đang lưu trên thiết bị", detail: "Supabase chưa sẵn sàng." };
  return `<div class="save-status cloud-${esc(status.state)}" id="cloudSyncStatus"><span class="save-dot" aria-hidden="true"></span><div><strong>${esc(status.label)}</strong><small>${esc(status.detail)}</small></div><button class="secondary-btn" type="button" data-cloud-sync ${cloud?.configured ? "" : "disabled"}>Đồng bộ ngay</button></div>`;
}

function updateCloudStatus(status) {
  const box = document.getElementById("cloudSyncStatus");
  if (!box) return;
  box.className = `save-status cloud-${status.state}`;
  const label = box.querySelector("strong");
  const detail = box.querySelector("small");
  if (label) label.textContent = status.label;
  if (detail) detail.textContent = status.detail;
}

function renderProgress() {
  const rows = weakTopics
    .map(topic => ({ topic, stats: progressForTopic(topic) }))
    .filter(item => item.stats.total || item.stats.errors);
  const totals = rows.reduce((sum, item) => ({
    cards: sum.cards + item.stats.total,
    learned: sum.learned + item.stats.total - item.stats.fresh,
    due: sum.due + item.stats.due,
    attempts: sum.attempts + item.stats.attempts,
    correct: sum.correct + item.stats.correct,
    errors: sum.errors + item.stats.errors,
    mastered: sum.mastered + item.stats.mastered
  }), { cards: 0, learned: 0, due: 0, attempts: 0, correct: 0, errors: 0, mastered: 0 });
  const accuracy = totals.attempts ? Math.round(totals.correct / totals.attempts * 100) : 0;
  const mastery = totals.errors ? Math.round(totals.mastered / totals.errors * 100) : 0;
  return `${heading("Tiến trình học", "Tự động lưu và đồng bộ giữa các thiết bị.", "Theo dõi flashcard, quiz và các lỗi đã nắm chắc. localStorage vẫn giữ một bản dự phòng khi mất mạng.")}
    ${cloudStatusMarkup()}
    <section class="progress-overview">
      <article><span>Flashcard đã học</span><strong>${totals.learned}/${totals.cards}</strong><small>${totals.due} thẻ đang đến hạn</small></article>
      <article><span>Quiz đã trả lời</span><strong>${totals.attempts}</strong><small>${accuracy}% chính xác</small></article>
      <article><span>Câu sai đã nắm</span><strong>${totals.mastered}/${totals.errors}</strong><small>${mastery}% trong phạm vi đang lọc</small></article>
      <article><span>Kho kiến thức</span><strong>${theory.length} nhóm</strong><small>${vocabGroups.reduce((count, group) => count + group.items.length, 0)} cụm từ/collocation</small></article>
    </section>
    <section class="progress-topics">
      <header><div><h2>Tiến trình theo chủ đề</h2><p>${esc(selectedTestLabel())}</p></div><button class="secondary-btn" type="button" data-page="mistakes">Đổi bộ lọc đề</button></header>
      <div class="progress-topic-list">${rows.map(({ topic, stats }) => {
        const learned = stats.total - stats.fresh;
        const percent = stats.total ? Math.round(learned / stats.total * 100) : 0;
        const quizAccuracy = stats.attempts ? Math.round(stats.correct / stats.attempts * 100) : 0;
        return `<article class="progress-topic-card"><div class="progress-topic-title"><div><h3>${esc(topic.title)}</h3><p>${stats.due} đến hạn · ${stats.fresh} thẻ mới · ${stats.attempts} lượt quiz</p></div><strong>${percent}%</strong></div><div class="progress-meter"><span style="width:${percent}%"></span></div><div class="progress-topic-meta"><span>Flashcard ${learned}/${stats.total}</span><span>Quiz ${stats.attempts ? `${quizAccuracy}%` : "chưa làm"}</span><span>Nắm chắc ${stats.mastered}/${stats.errors}</span></div><button class="primary-btn" type="button" data-study-topic="${topic.id}">Học chủ đề</button></article>`;
      }).join("")}</div>
    </section>
    <section class="study-backup progress-backup"><div><h2>Sao lưu toàn bộ tiến trình</h2><p>File JSON chứa lịch FSRS, nhật ký ôn, kết quả quiz, bộ lọc và trạng thái nắm chắc. Kiến thức học nằm sẵn trong website.</p></div><div class="study-backup-actions"><button class="secondary-btn" type="button" data-study-export>Xuất JSON</button><button class="secondary-btn" type="button" data-study-import>Nhập JSON</button></div></section>`;
}

function render() {
  const pages = { mistakes: renderMistakes, theory: renderTheory, vocabulary: renderVocabulary, practice: renderPractice, progress: renderProgress, study: renderStudy };
  app.innerHTML = pages[state.page]();
  const allTestsInput = document.querySelector("[data-test-all]");
  if (allTestsInput) allTestsInput.indeterminate = state.draftTests.size > 0 && state.draftTests.size < testCatalog.length;
  updateChrome();
}

function navigate(page) {
  state.page = page;
  state.query = "";
  state.draftTests = new Set(state.appliedTests);
  searchInput.value = "";
  sidebar.classList.remove("is-open");
  render();
  window.scrollTo({top:0, behavior:"smooth"});
}

function toast(text) {
  const el = document.getElementById("toast");
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 1800);
}

function makeStudySnapshot() {
  return {
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    study: studyEngine.getProgress(),
    mastered: [...state.mastered],
    testFilter: [...state.appliedTests]
  };
}

function exportStudyBackup() {
  const backup = makeStudySnapshot();
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `part5-study-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast("Đã xuất bản sao lưu tiến độ học.");
}

function validateBackup(backup) {
  const errorIds = new Set(errors.map(item => item.id));
  const testIds = new Set(testCatalog.map(item => item.id));
  return backup?.schemaVersion === 1 && Number.isFinite(new Date(backup.exportedAt).getTime())
    && studyEngine.validateProgress(backup.study)
    && Array.isArray(backup.mastered) && backup.mastered.every(id => errorIds.has(id))
    && Array.isArray(backup.testFilter) && backup.testFilter.length > 0 && backup.testFilter.every(id => testIds.has(id));
}

function applyStudySnapshot(backup) {
  if (!validateBackup(backup)) throw new Error("Dữ liệu tiến độ không đúng schema hoặc chứa ID không hợp lệ.");
  studyEngine.replaceProgress(backup.study);
  state.mastered = new Set(backup.mastered);
  state.appliedTests = new Set(backup.testFilter);
  state.draftTests = new Set(backup.testFilter);
  saveMastered(state.mastered);
  saveTestFilter(state.appliedTests);
  state.studyMode = "home";
  render();
}

async function importStudyBackup(file) {
  try {
    const backup = JSON.parse(await file.text());
    if (!validateBackup(backup)) throw new Error("File không đúng schema hoặc chứa ID không hợp lệ.");
    if (!window.confirm("Nhập bản sao lưu sẽ thay thế toàn bộ tiến độ hiện tại. Tiếp tục?")) return;
    applyStudySnapshot(backup);
    toast("Đã khôi phục tiến độ từ bản sao lưu.");
  } catch (error) {
    toast(`Không thể nhập: ${error.message}`);
  }
}

document.querySelectorAll("[data-page]").forEach(el => el.addEventListener("click", event => { event.preventDefault(); navigate(el.dataset.page); }));
document.getElementById("menuBtn").addEventListener("click", () => sidebar.classList.toggle("is-open"));
searchInput.addEventListener("input", event => { state.query = event.target.value; render(); });
document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k" && state.page !== "study") { event.preventDefault(); searchInput.focus(); }
  const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName);
  if (state.page === "study" && state.studyMode === "flashcards" && !typing) {
    if (event.code === "Space" && !state.flashRevealed) { event.preventDefault(); state.flashRevealed = true; return render(); }
    if (state.flashRevealed && ["1", "2", "3", "4"].includes(event.key)) { event.preventDefault(); return rateCurrentFlashcard(Number(event.key)); }
  }
  if (event.key === "Escape") {
    if (state.page === "study") return closeStudy();
    sidebar.classList.remove("is-open");
    const menu = document.getElementById("testFilterMenu");
    if (menu) menu.open = false;
  }
});

document.addEventListener("click", event => {
  const menu = document.getElementById("testFilterMenu");
  if (menu?.open && !event.target.closest("#testFilterMenu")) menu.open = false;
});

app.addEventListener("click", event => {
  const pageLink = event.target.closest("[data-page]");
  if (pageLink) return navigate(pageLink.dataset.page);
  const studyTopic = event.target.closest("[data-study-topic]");
  if (studyTopic) return openStudy(studyTopic.dataset.studyTopic);
  if (event.target.closest("[data-close-study]")) return closeStudy();
  if (event.target.closest("[data-study-home]")) { state.studyMode = "home"; return render(); }
  if (event.target.closest("[data-start-flash], [data-restart-flash]")) return startFlashSession();
  if (event.target.closest("[data-flip-card]")) { state.flashRevealed = true; return render(); }
  const rating = event.target.closest("[data-rate-card]");
  if (rating) return rateCurrentFlashcard(Number(rating.dataset.rateCard));
  if (event.target.closest("[data-start-topic-quiz]")) return startTopicQuiz();
  const retryMissed = event.target.closest("[data-retry-missed]");
  if (retryMissed) return startTopicQuiz(JSON.parse(retryMissed.dataset.retryMissed));
  const studyAnswer = event.target.closest("[data-study-answer]");
  if (studyAnswer && state.topicQuizSelected === null) {
    const item = state.topicQuizItems[state.topicQuizIndex];
    state.topicQuizSelected = studyAnswer.dataset.studyAnswer;
    const attempt = studyEngine.recordQuizAttempt(item.id, state.topicQuizSelected);
    if (attempt.correct) state.topicQuizScore++;
    else state.topicQuizMissed.push(item.id);
    return render();
  }
  if (event.target.closest("[data-topic-quiz-next]")) {
    if (state.topicQuizIndex === state.topicQuizItems.length - 1) state.topicQuizFinished = true;
    else state.topicQuizIndex++;
    state.topicQuizSelected = null;
    return render();
  }
  if (event.target.closest("[data-study-export]")) return exportStudyBackup();
  if (event.target.closest("[data-study-import]")) return document.getElementById("studyImportInput").click();
  if (event.target.closest("[data-cloud-sync]")) {
    window.part5CloudSync?.syncNow().then(ok => toast(ok ? "Đồng bộ Supabase hoàn tất." : "Chưa thể đồng bộ; dữ liệu vẫn an toàn trên thiết bị."));
    return;
  }

  const testAll = event.target.closest("[data-test-all]");
  if (testAll) {
    state.draftTests = testAll.checked ? new Set(testCatalog.map(test => test.id)) : new Set();
    document.querySelectorAll("[data-test-choice]").forEach(input => { input.checked = testAll.checked; });
    return;
  }

  const testChoice = event.target.closest("[data-test-choice]");
  if (testChoice) {
    testChoice.checked ? state.draftTests.add(testChoice.dataset.testChoice) : state.draftTests.delete(testChoice.dataset.testChoice);
    const allInput = document.querySelector("[data-test-all]");
    if (allInput) {
      allInput.checked = state.draftTests.size === testCatalog.length;
      allInput.indeterminate = state.draftTests.size > 0 && state.draftTests.size < testCatalog.length;
    }
    return;
  }

  if (event.target.closest("[data-test-reset]")) {
    state.draftTests = new Set(testCatalog.map(test => test.id));
    document.querySelectorAll("[data-test-choice], [data-test-all]").forEach(input => { input.checked = true; input.indeterminate = false; });
    return;
  }

  if (event.target.closest("[data-test-apply]")) {
    if (!state.draftTests.size) return toast("Hãy chọn ít nhất một bài thi trước khi áp dụng.");
    state.appliedTests = new Set(state.draftTests);
    saveTestFilter(state.appliedTests);
    return render();
  }

  const master = event.target.closest("[data-master]");
  if (master) {
    const id = master.dataset.master;
    state.mastered.has(id) ? state.mastered.delete(id) : state.mastered.add(id);
    saveMastered(state.mastered);
    const item = errors.find(e => e.id === id);
    toast(state.mastered.has(id) ? `${item.test}, câu ${item.q}: đã đánh dấu nắm chắc.` : `${item.test}, câu ${item.q}: đưa lại vào danh sách ôn.`);
    return render();
  }

  const jump = event.target.closest("[data-jump]");
  if (jump) return document.getElementById(jump.dataset.jump)?.scrollIntoView({behavior:"smooth", block:"start"});

  const answer = event.target.closest("[data-answer]");
  if (answer && !state.answered) {
    state.answered = true;
    const selected = Number(answer.dataset.answer);
    const item = quiz[state.quizIndex];
    if (selected === item[2]) state.score++;
    document.querySelectorAll("[data-answer]").forEach((btn,i) => { btn.disabled = true; if (i === item[2]) btn.classList.add("correct"); if (i === selected && i !== item[2]) btn.classList.add("wrong"); });
    document.getElementById("feedback").innerHTML = `<div class="feedback"><strong>${selected === item[2] ? "Đúng." : "Sai."}</strong> ${esc(item[3])}</div><div class="action-row"><button class="primary-btn" data-quiz-action="next">${state.quizIndex === quiz.length-1 ? "Xem kết quả" : "Câu tiếp theo →"}</button></div>`;
    return;
  }

  const action = event.target.closest("[data-quiz-action]");
  if (action?.dataset.quizAction === "next") { if (state.quizIndex === quiz.length-1) state.finished = true; else state.quizIndex++; state.answered = false; return render(); }
  if (action?.dataset.quizAction === "restart") { Object.assign(state, {quizIndex:0, score:0, answered:false, finished:false}); return render(); }
});

document.getElementById("studyImportInput").addEventListener("change", event => {
  const file = event.target.files?.[0];
  if (file) importStudyBackup(file);
  event.target.value = "";
});

render();
window.part5CloudSync?.init({
  getSnapshot: makeStudySnapshot,
  applySnapshot: async snapshot => applyStudySnapshot(snapshot),
  onStatus: updateCloudStatus
});

let installPrompt = null;
const installButton = document.getElementById("installBtn");
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  installButton?.classList.remove("is-hidden");
});
installButton?.addEventListener("click", async () => {
  if (!installPrompt) return;
  await installPrompt.prompt();
  installPrompt = null;
  installButton.classList.add("is-hidden");
});
window.addEventListener("appinstalled", () => {
  installPrompt = null;
  installButton?.classList.add("is-hidden");
  toast("Đã cài ứng dụng TOEIC Part 5.");
});
if (window.navigator?.serviceWorker) {
  window.addEventListener("load", () => window.navigator.serviceWorker.register("sw.js").catch(() => {}));
}
