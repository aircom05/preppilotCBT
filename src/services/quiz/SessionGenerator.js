import { shuffleArray } from './Randomizer';

export function generateSession(bank, count) {
  const selectedQuestions = shuffleArray(bank).slice(0, count);

  return selectedQuestions.map((question) => {
    const correctOption = question.options[question.correctAnswer];

    const shuffledOptions = shuffleArray(question.options);

    const newCorrectAnswer = shuffledOptions.indexOf(correctOption);

    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswer,
    };
  });
}
