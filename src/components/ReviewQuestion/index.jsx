import { useQuiz } from '../../context/QuizContext';
import './ReviewQuestion.css';

const ReviewQuestion = () => {
  const { state } = useQuiz();

  const question = state.questions[state.reviewQuestionIndex];

  if (!question) {
    return null;
  }

  const selectedAnswer = state.answers[question.id];

  return (
    <div className="review-question">
      <h2>
        Question {state.reviewQuestionIndex + 1} of {state.questions.length}
      </h2>

      <div className="review-progress">
        <div
          className="review-progress-fill"
          style={{
            width: `${
              ((state.reviewQuestionIndex + 1) / state.questions.length) * 100
            }%`,
          }}
        />
      </div>

      <h3 className="review-question-text">{question.question}</h3>

      <div className="review-options">
        {question.options.map((option, index) => {
          let className = 'review-option';

          if (index === question.correctAnswer) {
            className += ' correct';
          }

          if (
            index === selectedAnswer &&
            selectedAnswer !== question.correctAnswer
          ) {
            className += ' wrong';
          }

          return (
            <div key={index} className={className}>
              <span className="option-text">{option}</span>

              {index === question.correctAnswer && (
                <span className="option-badge">✓ Correct Answer</span>
              )}

              {index === selectedAnswer &&
                selectedAnswer !== question.correctAnswer && (
                  <span className="option-badge">✗ Your Answer</span>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewQuestion;
