import './QuestionPalette.css';

import { useQuiz } from '../../context/QuizContext';

const QuestionPalette = () => {
  const {
    state,

    goToQuestion,
  } = useQuiz();

  return (
    <div className="question-palette">
      {state.questions.map((question, index) => {
        const answered = state.answers[question.id] !== undefined;

        const current = index === state.currentQuestionIndex;

        return (
          <button
            key={question.id}
            className={`palette-btn

                                    ${answered ? 'answered' : ''}

                                    ${current ? 'current' : ''}`}
            onClick={() => goToQuestion(index)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionPalette;
