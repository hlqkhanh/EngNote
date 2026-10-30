const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const webRoot = path.resolve(__dirname, "..");
const storage = {};
const listeners = {};
const classList = () => ({ add() {}, remove() {}, toggle() {} });
const element = id => ({
  id, value: "", innerHTML: "", textContent: "", dataset: {}, style: {}, files: [], classList: classList(),
  addEventListener(type, handler) { listeners[`${id}:${type}`] = handler; },
  appendChild() {}, click() {}, remove() {}, focus() {}, scrollIntoView() {}
});
const elements = Object.fromEntries(["app", "searchInput", "sidebar", "toast", "menuBtn", "pageName", "masteredText", "masteredBar", "studyImportInput"].map(id => [id, element(id)]));
const searchBox = element("searchBox");
const document = {
  body: element("body"),
  getElementById(id) { return elements[id] || null; },
  querySelector(selector) { return selector === ".search-box" ? searchBox : null; },
  querySelectorAll() { return []; },
  createElement(tag) { return element(tag); },
  addEventListener(type, handler) { listeners[`document:${type}`] = handler; }
};

const context = {
  console, document, localStorage: { getItem: key => storage[key] ?? null, setItem: (key, value) => { storage[key] = value; } },
  Date, Math, JSON, Set, Map, Intl, Blob, URL, setTimeout, clearTimeout,
  requestAnimationFrame: callback => callback(), confirm: () => true, scrollY: 0,
  scrollTo() {}, addEventListener() {}
};
context.window = context;
context.globalThis = context;
vm.createContext(context);

[
  "vendor/ts-fsrs-5.4.2.umd.js", "data/tests.js", "data/errors.js", "data/weak-topics.js",
  "data/theory.js", "data/vocabulary.js", "data/quiz.js", "data/study.js", "study-engine.js"
].forEach(file => vm.runInContext(fs.readFileSync(path.join(webRoot, file), "utf8"), context, { filename: file }));
context.part5SupabaseConfig = { url: "", publishableKey: "", recordId: "primary" };
["cloud-sync.js", "app.js"].forEach(file => vm.runInContext(fs.readFileSync(path.join(webRoot, file), "utf8"), context, { filename: file }));

const data = context.part5Data;
assert(data.flashcards.length >= 50, "Không được mất các flashcard đã có");
assert.strictEqual(data.topicQuizzes.length, data.weakTopics.length * 10);
assert.strictEqual(new Set(data.flashcards.map(item => item.id)).size, data.flashcards.length);
assert.strictEqual(new Set(data.topicQuizzes.map(item => item.id)).size, data.topicQuizzes.length);
data.weakTopics.forEach(topic => assert.strictEqual(data.topicQuizzes.filter(item => item.topicId === topic.id).length, 10));
assert.match(elements.app.innerHTML, /data-study-topic="weak-prepositions"/);

vm.runInContext('navigate("progress")', context);
assert.match(elements.app.innerHTML, /Đang lưu trên thiết bị/);
assert.match(elements.app.innerHTML, /data-cloud-sync/);
assert.match(elements.app.innerHTML, /Tiến trình theo chủ đề/);
assert.match(elements.app.innerHTML, /Xuất JSON/);

vm.runInContext('openStudy("weak-prepositions")', context);
assert.match(elements.app.innerHTML, /Flashcard FSRS/);
assert.match(elements.app.innerHTML, /Trắc nghiệm chủ đề/);

vm.runInContext("startFlashSession()", context);
assert.match(elements.app.innerHTML, /Hiện đáp án/);
vm.runInContext("state.flashRevealed = true; render()", context);
assert.match(elements.app.innerHTML, /data-rate-card="3"/);
vm.runInContext("rateCurrentFlashcard(3)", context);
const progress = context.part5StudyEngine.getProgress();
assert.strictEqual(Object.keys(progress.cards).length, 1);
assert.strictEqual(progress.reviewLogs.length, 1);

vm.runInContext("state.studyMode = 'home'; startTopicQuiz()", context);
assert.match(elements.app.innerHTML, /Câu 1\/10/);
assert.strictEqual(context.part5StudyEngine.getProgress().quizAttempts.length, 0);
const activeQuiz = vm.runInContext("({ id: state.topicQuizItems[0].id, answerId: state.topicQuizItems[0].answerId })", context);
const beforeQuiz = context.part5StudyEngine.getProgress();
context.part5StudyEngine.recordQuizAttempt(activeQuiz.id, activeQuiz.answerId, new Date("2026-09-29T09:00:00Z"));
const afterQuiz = context.part5StudyEngine.getProgress();
assert.strictEqual(afterQuiz.quizAttempts.length, 1);
assert.deepStrictEqual(afterQuiz.cards, beforeQuiz.cards);
assert.deepStrictEqual(afterQuiz.reviewLogs, beforeQuiz.reviewLogs);

const backup = { schemaVersion: 1, exportedAt: new Date().toISOString(), study: afterQuiz, mastered: [], testFilter: ["c1t2"] };
context.__backup = backup;
assert.strictEqual(vm.runInContext("validateBackup(__backup)", context), true);
context.__backup.schemaVersion = 99;
assert.strictEqual(vm.runInContext("validateBackup(__backup)", context), false);

// The new source must filter errors, family rows, examples and study cards together.
vm.runInContext('state.appliedTests = new Set(["practice20261030"]); navigate("mistakes")', context);
assert.match(elements.app.innerHTML, /120|30 câu/);
assert.match(elements.app.innerHTML, /5 câu/);
assert.match(elements.app.innerHTML, /rowspan="7"/);
assert.match(elements.app.innerHTML, /auditions/);
assert.doesNotMatch(elements.app.innerHTML, /data-master="c1t/);
assert.doesNotMatch(elements.app.innerHTML, /data-master="parroto1/);
vm.runInContext('state.query = "hastily"; render()', context);
assert.match(elements.app.innerHTML, /practice20261030-128/);
assert.doesNotMatch(elements.app.innerHTML, /data-master="practice20261030-111"/);
vm.runInContext('state.query = ""; state.mastered.add("practice20261030-128"); saveMastered(state.mastered); render()', context);
assert.match(elements.app.innerHTML, /data-master="practice20261030-128">✓ Đã nắm chắc/);
vm.runInContext('openStudy("weak-wordclass"); startFlashSession()', context);
const newQueue = vm.runInContext('state.flashQueue.slice()', context);
assert(newQueue.length > 0 && newQueue.length <= 5);
newQueue.forEach(id => assert(data.flashcards.find(card => card.id === id).sourceTestIds.includes("practice20261030")));

// Reload the engine from localStorage and verify the exact FSRS schedule/log.
const savedSchedule = context.part5StudyEngine.getProgress();
vm.runInContext(fs.readFileSync(path.join(webRoot, "study-engine.js"), "utf8"), context);
assert.deepStrictEqual(context.part5StudyEngine.getProgress(), savedSchedule);
const invalidSchedule = JSON.parse(JSON.stringify(savedSchedule));
Object.values(invalidSchedule.cards)[0].due = "invalid-date";
assert.strictEqual(context.part5StudyEngine.validateProgress(invalidSchedule), false);
assert.throws(() => context.part5StudyEngine.replaceProgress(invalidSchedule));
context.part5StudyEngine.replaceProgress(savedSchedule);
assert.deepStrictEqual(context.part5StudyEngine.getProgress(), savedSchedule);

vm.runInContext('navigate("theory")', context);
assert.match(elements.app.innerHTML, /had revised/);
vm.runInContext('navigate("vocabulary")', context);
assert.match(elements.app.innerHTML, /auditions/);
vm.runInContext('navigate("practice")', context);
assert.match(elements.app.innerHTML, /quiz/);

// Mature cards must stay within the chosen two-week cadence, including backups
// created before the limit was introduced. The import must not mutate its input.
const engine = context.part5StudyEngine;
const mature = JSON.parse(JSON.stringify(savedSchedule));
const matureId = Object.keys(mature.cards)[0];
const reviewedAt = new Date("2026-09-01T12:00:00Z");
const twoWeeks = 14 * 86400000;
Object.assign(mature.cards[matureId], {
  last_review: reviewedAt.toISOString(), due: "2026-11-01T12:00:00Z",
  scheduled_days: 61, state: 2, stability: 500, reps: 20
});
engine.replaceProgress(mature);
const limited = engine.getProgress();
assert.strictEqual(new Date(limited.cards[matureId].due).getTime(), reviewedAt.getTime() + twoWeeks);
assert.strictEqual(limited.cards[matureId].scheduled_days, 14);
assert.strictEqual(limited.cards[matureId].stability, 500);
assert.strictEqual(limited.cards[matureId].reps, 20);
assert.deepStrictEqual(limited.reviewLogs, mature.reviewLogs);
assert.strictEqual(mature.cards[matureId].scheduled_days, 61);
assert(engine.createSession("weak-prepositions", new Set(["c1t2"]), new Date("2026-10-30T12:00:00Z")).includes(matureId));
const reviewTime = new Date("2026-10-30T12:00:00Z");
const previews = engine.preview(matureId, reviewTime);
for (const rating of [1, 2, 3, 4]) {
  assert(new Date(previews[rating].due).getTime() <= reviewTime.getTime() + twoWeeks, `Preview ${rating} exceeds 14 days`);
  assert(new Date(previews[rating].due).getTime() > reviewTime.getTime());
}
engine.review(matureId, 4, reviewTime);
assert(new Date(engine.getProgress().cards[matureId].due).getTime() <= reviewTime.getTime() + twoWeeks);

// Existing on-device schedules migrate on startup, not only on JSON import.
storage["part5-study-v1"] = JSON.stringify(mature);
vm.runInContext(fs.readFileSync(path.join(webRoot, "study-engine.js"), "utf8"), context);
assert.deepStrictEqual(context.part5StudyEngine.getProgress(), limited);
assert.deepStrictEqual(JSON.parse(storage["part5-study-v1"]), JSON.parse(JSON.stringify(limited)));
vm.runInContext('navigate("progress")', context);
assert.match(elements.app.innerHTML, /tối đa <strong>14 ngày/);

console.log("study-smoke: ok");
