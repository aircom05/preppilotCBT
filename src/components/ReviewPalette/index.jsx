import './ReviewPalette.css';
import scrollToTop from '../../utils/scrollToTop';
import { useQuiz } from '../../context/QuizContext';

const QuestionPalette = () => {
  const { state, goToReviewQuestion } = useQuiz();

  const handleReviewClick = (index) => {
    goToReviewQuestion(index);
    scrollToTop();
  };

  return (
    <div className="question-palette">
      {state.questions.map((question, index) => {
        const userAnswer = state.answers[question.id];

        const isAnswered = userAnswer !== undefined;

        const isCorrect = userAnswer === question.correctAnswer;

        const isCurrent = index === state.reviewQuestionIndex;

        let className = 'palette-btn';

        if (isCurrent) {
          className += ' current';
        } else if (!isAnswered) {
          className += ' unanswered';
        } else if (isCorrect) {
          className += ' correct';
        } else {
          className += ' wrong';
        }

        return (
          <button
            key={question.id}
            className={className}
            onClick={() => handleReviewClick(index)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionPalette;
