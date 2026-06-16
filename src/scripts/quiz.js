import {
  concernAlertResult,
  concernSensitiveQuestionIndexes,
  quizOptions,
  quizQuestions,
  quizResults,
  quizToneLabels,
} from '../data/quiz-data.js';
import { qs } from './helpers.js';
import { trackEvent } from './tracking.js';

export function initQuiz() {
  const wrapper = qs('#quiz-steps-wrapper');
  const fill = qs('#quiz-fill');
  const backButton = qs('#btn-quiz-back');
  const resetButton = qs('#btn-quiz-reset');
  const result = qs('#quiz-result');
  const resultSignal = qs('#result-signal');
  const resultTitle = qs('#result-title');
  const resultDesc = qs('#result-desc');

  if (!wrapper || !fill || !backButton || !result || !resultTitle || !resultDesc) return;

  let currentQuestion = 0;
  let answers = [];
  let quizStarted = false;

  function currentProgress() {
    return `${(currentQuestion / quizQuestions.length) * 100}%`;
  }

  function renderQuestion() {
    fill.style.width = currentProgress();
    backButton.hidden = currentQuestion === 0;
    result.hidden = true;
    wrapper.hidden = false;

    const options = quizOptions
      .map(
        (option, index) => `
          <button class="quiz-option" type="button" data-option-index="${index}">
            ${option.label}
          </button>
        `,
      )
      .join('');

    wrapper.innerHTML = `
      <div class="quiz-step">
        <span class="quiz-meta">Pergunta ${currentQuestion + 1} de ${quizQuestions.length}</span>
        <h3>${quizQuestions[currentQuestion]}</h3>
        <div class="quiz-options">${options}</div>
      </div>
    `;
  }

  function showResult() {
    const total = answers.reduce((sum, score) => sum + score, 0);
    const hasPriorityConcern = concernSensitiveQuestionIndexes.some((questionIndex) => answers[questionIndex] > 2);
    const data = hasPriorityConcern
      ? concernAlertResult
      : quizResults.find((item) => total >= item.min && total <= item.max) || quizResults[0];

    fill.style.width = '100%';
    wrapper.hidden = true;
    backButton.hidden = true;
    result.hidden = false;
    result.dataset.tone = data.tone;
    resultSignal.textContent = quizToneLabels[data.tone] || 'Seu resultado';
    resultTitle.textContent = data.title;
    resultDesc.textContent = data.description;
    trackEvent('quiz_complete', { score: total, result: data.tone, hasPriorityConcern });
  }

  function selectAnswer(index) {
    if (!quizStarted) {
      quizStarted = true;
      trackEvent('quiz_start', { source: 'quiz' });
    }

    answers[currentQuestion] = quizOptions[index].score;
    currentQuestion += 1;

    if (currentQuestion >= quizQuestions.length) {
      showResult();
      return;
    }

    renderQuestion();
  }

  wrapper.addEventListener('click', (event) => {
    const option = event.target.closest('[data-option-index]');
    if (!option) return;
    selectAnswer(Number(option.dataset.optionIndex));
  });

  backButton.addEventListener('click', () => {
    if (currentQuestion === 0) return;
    currentQuestion -= 1;
    answers = answers.slice(0, currentQuestion);
    renderQuestion();
  });

  resetButton?.addEventListener('click', () => {
    currentQuestion = 0;
    answers = [];
    quizStarted = false;
    renderQuestion();
  });

  renderQuestion();
}
