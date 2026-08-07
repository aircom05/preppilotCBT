const calculateResult = (questions, answers) => {
  let correct = 0;

  let wrong = 0;

  let unanswered = 0;

  questions.forEach((question) => {
    const answer = answers[question.id];

    if (answer === undefined) {
      unanswered++;
    } else if (answer === question.correctAnswer) {
      correct++;
    } else {
      wrong++;
    }
  });

  const percentage = Math.round((correct / questions.length) * 100);

  return {
    total: questions.length,

    correct,

    wrong,

    unanswered,

    percentage,

    passed: percentage >= 50,
  };
};

export default calculateResult;
