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
  "data/theory.js", "data/vocabulary.js", "data/quiz.js", "data/study.js", "study-engine.js", "app.js"
].forEach(file => vm.runInContext(fs.readFileSync(path.join(webRoot, file), "utf8"), context, { filename: file }));

const data = context.part5Data;
assert.strictEqual(data.flashcards.length, 50);
assert.strictEqual(data.topicQuizzes.length, 70);
assert.strictEqual(new Set(data.flashcards.map(item => item.id)).size, data.flashcards.length);
assert.strictEqual(new Set(data.topicQuizzes.map(item => item.id)).size, data.topicQuizzes.length);
data.weakTopics.forEach(topic => assert.strictEqual(data.topicQuizzes.filter(item => item.topicId === topic.id).length, 10));
assert.match(elements.app.innerHTML, /data-study-topic="weak-prepositions"/);

vm.runInContext('navigate("progress")', context);
assert.match(elements.app.innerHTML, /Tự động lưu đang bật/);
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

console.log("study-smoke: ok");
