import './QuestionPalette.css';
import scrollToTop from '../../utils/scrollToTop';
import { useQuiz } from '../../context/QuizContext';

const QuestionPalette = () => {
  const {
    state,

    goToQuestion,
  } = useQuiz();

  const handleGoToQuestion = (index) => {
    goToQuestion(index);
    scrollToTop();
  };

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
            onClick={() => handleGoToQuestion(index)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionPalette;
