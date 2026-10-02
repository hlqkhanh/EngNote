(function () {
  "use strict";

  const STORAGE_KEY = "part5-study-v1";
  const VERSION = 1;
  const PACKAGE_VERSION = "5.4.2";
  const REQUEST_RETENTION = 0.9;
  const MAX_NEW_PER_SESSION = 5;
  const RATINGS = [1, 2, 3, 4];
  const params = {
    request_retention: REQUEST_RETENTION,
    maximum_interval: 3650,
    enable_fuzz: true,
    enable_short_term: true,
    learning_steps: ["1m", "10m"],
    relearning_steps: ["10m"]
  };

  if (!window.FSRS?.fsrs || !window.FSRS?.createEmptyCard) {
    throw new Error("Không tải được thư viện ts-fsrs 5.4.2.");
  }

  const scheduler = window.FSRS.fsrs(params);
  const cardDefinitions = () => window.part5Data?.flashcards || [];
  const quizDefinitions = () => window.part5Data?.topicQuizzes || [];
  const emptyProgress = () => ({
    version: VERSION,
    algorithm: { name: "fsrs", packageVersion: PACKAGE_VERSION, requestRetention: REQUEST_RETENTION },
    cards: {},
    reviewLogs: [],
    quizAttempts: []
  });
  const validDate = value => value != null && Number.isFinite(new Date(value).getTime());
  const finiteNumber = value => typeof value === "number" && Number.isFinite(value);

  function serializeCard(card) {
    return {
      due: new Date(card.due).toISOString(),
      stability: card.stability,
      difficulty: card.difficulty,
      elapsed_days: card.elapsed_days,
      scheduled_days: card.scheduled_days,
      learning_steps: card.learning_steps,
      reps: card.reps,
      lapses: card.lapses,
      state: card.state,
      last_review: card.last_review ? new Date(card.last_review).toISOString() : null
    };
  }

  function serializeLog(cardId, log) {
    return {
      cardId,
      rating: log.rating,
      state: log.state,
      due: new Date(log.due).toISOString(),
      stability: log.stability,
      difficulty: log.difficulty,
      elapsed_days: log.elapsed_days,
      last_elapsed_days: log.last_elapsed_days,
      scheduled_days: log.scheduled_days,
      learning_steps: log.learning_steps,
      reviewedAt: new Date(log.review).toISOString()
    };
  }

  function isValidCard(card) {
    if (!card || !validDate(card.due) || ![0, 1, 2, 3].includes(card.state)) return false;
    if (card.last_review != null && !validDate(card.last_review)) return false;
    return ["stability", "difficulty", "elapsed_days", "scheduled_days", "learning_steps", "reps", "lapses"]
      .every(key => finiteNumber(card[key]) && card[key] >= 0);
  }

  function validateProgress(candidate) {
    const cardIds = new Set(cardDefinitions().map(item => item.id));
    const quizzes = new Map(quizDefinitions().map(item => [item.id, item]));
    if (!candidate || candidate.version !== VERSION || candidate.algorithm?.name !== "fsrs") return false;
    if (candidate.algorithm.packageVersion !== PACKAGE_VERSION || candidate.algorithm.requestRetention !== REQUEST_RETENTION) return false;
    if (!candidate.cards || Array.isArray(candidate.cards) || !Array.isArray(candidate.reviewLogs) || !Array.isArray(candidate.quizAttempts)) return false;
    if (!Object.entries(candidate.cards).every(([id, value]) => cardIds.has(id) && isValidCard(value))) return false;
    if (!candidate.reviewLogs.every(log => cardIds.has(log.cardId) && RATINGS.includes(log.rating) && validDate(log.due) && validDate(log.reviewedAt))) return false;
    return candidate.quizAttempts.every(attempt => {
      const item = quizzes.get(attempt.quizId);
      return item && item.choices.some(choice => choice.id === attempt.selectedAnswerId) && typeof attempt.correct === "boolean" && validDate(attempt.at);
    });
  }

  function loadProgress() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      return validateProgress(parsed) ? parsed : emptyProgress();
    } catch {
      return emptyProgress();
    }
  }

  let progress = loadProgress();

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch {}
  }

  function sourceMatches(item, selectedTestIds) {
    const selected = selectedTestIds instanceof Set ? selectedTestIds : new Set(selectedTestIds);
    return item.sourceTestIds.some(id => selected.has(id));
  }

  function cardsForTopic(topicId, selectedTestIds) {
    return cardDefinitions().filter(item => item.topicId === topicId && sourceMatches(item, selectedTestIds));
  }

  function quizzesForTopic(topicId, selectedTestIds) {
    return quizDefinitions().filter(item => item.topicId === topicId && sourceMatches(item, selectedTestIds));
  }

  function stats(topicId, selectedTestIds, now = new Date()) {
    const definitions = cardsForTopic(topicId, selectedTestIds);
    const currentTime = new Date(now).getTime();
    let due = 0;
    let fresh = 0;
    let nextDue = null;
    definitions.forEach(item => {
      const saved = progress.cards[item.id];
      if (!saved) return void fresh++;
      const dueTime = new Date(saved.due).getTime();
      if (dueTime <= currentTime) due++;
      else if (nextDue == null || dueTime < nextDue) nextDue = dueTime;
    });
    return { total: definitions.length, due, fresh, nextDue: nextDue ? new Date(nextDue).toISOString() : null };
  }

  function createSession(topicId, selectedTestIds, now = new Date()) {
    const currentTime = new Date(now).getTime();
    const definitions = cardsForTopic(topicId, selectedTestIds);
    const due = definitions
      .filter(item => progress.cards[item.id] && new Date(progress.cards[item.id].due).getTime() <= currentTime)
      .sort((a, b) => new Date(progress.cards[a.id].due) - new Date(progress.cards[b.id].due));
    const fresh = definitions.filter(item => !progress.cards[item.id]).slice(0, MAX_NEW_PER_SESSION);
    return [...due, ...fresh].map(item => item.id);
  }

  function getCard(cardId) {
    return cardDefinitions().find(item => item.id === cardId) || null;
  }

  function currentFsrsCard(cardId, now) {
    return progress.cards[cardId] || window.FSRS.createEmptyCard(now);
  }

  function preview(cardId, now = new Date()) {
    if (!getCard(cardId)) throw new Error("Flashcard không tồn tại.");
    const outcomes = scheduler.repeat(currentFsrsCard(cardId, now), now);
    return Object.fromEntries(RATINGS.map(rating => [rating, serializeCard(outcomes[rating].card)]));
  }

  function review(cardId, rating, now = new Date()) {
    if (!getCard(cardId) || !RATINGS.includes(rating)) throw new Error("Dữ liệu đánh giá flashcard không hợp lệ.");
    const result = scheduler.next(currentFsrsCard(cardId, now), now, rating);
    progress.cards[cardId] = serializeCard(result.card);
    progress.reviewLogs.push(serializeLog(cardId, result.log));
    saveProgress();
    return progress.cards[cardId];
  }

  function recordQuizAttempt(quizId, selectedAnswerId, at = new Date()) {
    const item = quizDefinitions().find(entry => entry.id === quizId);
    if (!item || !item.choices.some(choice => choice.id === selectedAnswerId)) throw new Error("Câu trả lời không hợp lệ.");
    const attempt = { quizId, selectedAnswerId, correct: selectedAnswerId === item.answerId, at: new Date(at).toISOString() };
    progress.quizAttempts.push(attempt);
    saveProgress();
    return attempt;
  }

  function getProgress() {
    return JSON.parse(JSON.stringify(progress));
  }

  function replaceProgress(candidate) {
    if (!validateProgress(candidate)) throw new Error("Dữ liệu tiến độ học không đúng định dạng hoặc không tương thích.");
    progress = JSON.parse(JSON.stringify(candidate));
    saveProgress();
  }

  window.part5StudyEngine = {
    VERSION,
    PACKAGE_VERSION,
    REQUEST_RETENTION,
    MAX_NEW_PER_SESSION,
    Rating: window.FSRS.Rating,
    State: window.FSRS.State,
    cardsForTopic,
    quizzesForTopic,
    stats,
    createSession,
    getCard,
    preview,
    review,
    recordQuizAttempt,
    getProgress,
    validateProgress,
    replaceProgress
  };
})();
