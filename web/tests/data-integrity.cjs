const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const webRoot = path.resolve(__dirname, "..");
const context = { window: {} };
context.window = context;
vm.createContext(context);

["tests", "errors", "weak-topics", "theory", "vocabulary", "quiz", "study"].forEach(name => {
  vm.runInContext(fs.readFileSync(path.join(webRoot, "data", `${name}.js`), "utf8"), context, { filename: `${name}.js` });
});

const data = context.part5Data;
const testIds = new Set(data.testCatalog.map(item => item.id));
const topicIds = new Set(data.weakTopics.map(item => item.id));
const errorIds = data.errors.map(item => item.id);
const rowKey = (topic, row) => topic.id === "weak-prepositions" ? `${row[0]}|${row[2]}` : row[0];
const validSources = (ids, label) => {
  assert(Array.isArray(ids) && ids.length > 0, `${label}: thiếu sourceTestIds`);
  ids.forEach(id => assert(testIds.has(id), `${label}: nguồn không hợp lệ ${id}`));
};

assert.strictEqual(new Set(errorIds).size, errorIds.length, "ID câu sai bị trùng");
assert.strictEqual(new Set(data.testCatalog.map(item => item.id)).size, data.testCatalog.length, "ID đề bị trùng");
assert.strictEqual(topicIds.size, data.weakTopics.length, "ID chủ đề bị trùng");

const assigned = new Map(errorIds.map(id => [id, 0]));
data.weakTopics.forEach(topic => {
  topic.errorIds.forEach(id => {
    assert(assigned.has(id), `${topic.id}: tham chiếu câu sai không tồn tại ${id}`);
    assigned.set(id, assigned.get(id) + 1);
  });
  const sourceMap = data.weakKnowledgeSources[topic.id];
  assert(sourceMap, `${topic.id}: thiếu weakKnowledgeSources`);
  topic.rows.forEach(row => validSources(sourceMap.rows[rowKey(topic, row)], `${topic.id} / dòng ${rowKey(topic, row)}`));
  topic.examples.forEach(example => validSources(sourceMap.examples[example], `${topic.id} / ví dụ ${example}`));
});
assigned.forEach((count, id) => assert.strictEqual(count, 1, `${id}: phải thuộc đúng một chủ đề chính`));

data.errors.forEach(error => {
  const separator = error.id.lastIndexOf("-");
  assert(separator > 0, `${error.id}: ID không chứa mã đề`);
  assert(testIds.has(error.id.slice(0, separator)), `${error.id}: mã đề không hợp lệ`);
  assert(error.answer && error.options.some(option => option[0] === error.answer), `${error.id}: đáp án không có trong lựa chọn`);
});

const expectedTheory = ["Thì", "To V và V-ing", "Động từ khiếm khuyết", "So sánh", "Câu bị động", "Hòa hợp chủ ngữ–động từ", "Câu điều kiện", "Từ loại", "Phân từ", "Mệnh đề"];
assert.strictEqual(data.theory.length, expectedTheory.length, "Tab lý thuyết phải có đúng 10 nhóm ổn định");
data.theory.forEach((section, index) => assert(section.title.startsWith(expectedTheory[index]), `Sai thứ tự nhóm lý thuyết tại vị trí ${index + 1}`));

assert.strictEqual(new Set(data.flashcards.map(item => item.id)).size, data.flashcards.length, "ID flashcard bị trùng");
data.flashcards.forEach(card => {
  assert(topicIds.has(card.topicId), `${card.id}: topicId không hợp lệ`);
  validSources(card.sourceTestIds, card.id);
});

assert.strictEqual(new Set(data.topicQuizzes.map(item => item.id)).size, data.topicQuizzes.length, "ID quiz chủ đề bị trùng");
data.topicQuizzes.forEach(item => {
  assert(topicIds.has(item.topicId), `${item.id}: topicId không hợp lệ`);
  validSources(item.sourceTestIds, item.id);
  assert.strictEqual(new Set(item.choices.map(choice => choice.id)).size, item.choices.length, `${item.id}: ID lựa chọn bị trùng`);
  assert(item.choices.some(choice => choice.id === item.answerId), `${item.id}: answerId không hợp lệ`);
});
data.weakTopics.forEach(topic => {
  assert.strictEqual(data.topicQuizzes.filter(item => item.topicId === topic.id).length, 10, `${topic.id}: phải có đúng 10 câu quiz`);
});

const serviceWorker = fs.readFileSync(path.join(webRoot, "sw.js"), "utf8");
const cachedPaths = [...serviceWorker.matchAll(/"\.\/(.*?)"/g)].map(match => match[1]).filter(Boolean);
cachedPaths.forEach(relativePath => assert(fs.existsSync(path.join(webRoot, relativePath)), `Service worker tham chiếu file không tồn tại: ${relativePath}`));

console.log(`data-integrity: ok (${data.errors.length} lỗi, ${data.weakTopics.length} chủ đề, ${data.flashcards.length} flashcard, ${data.topicQuizzes.length} quiz)`);
