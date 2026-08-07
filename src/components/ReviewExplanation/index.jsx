import { useQuiz } from '../../context/QuizContext';
import './ReviewExplanation.css';

const ReviewExplanation = () => {
  const { state } = useQuiz();

  const question = state.questions[state.reviewQuestionIndex];

  if (!question) return null;

  return (
    <div className="review-explanation">
      <h3>📘 Explanation</h3>

      <p>{question.explanation}</p>
    </div>
  );
};

export default ReviewExplanation;
