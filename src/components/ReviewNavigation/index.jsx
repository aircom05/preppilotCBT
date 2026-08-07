import './ReviewNavigation.css';
import { Button } from '../';
import { useQuiz } from '../../context/QuizContext';
import { useNavigate } from 'react-router-dom';

const ReviewNavigation = () => {
  const navigate = useNavigate();
  const { state, nextReview, previousReview } = useQuiz();

  return (
    <div className="review-navigation">
      <Button
        className="review-nav-btn"
        onClick={previousReview}
        disabled={state.reviewQuestionIndex === 0}
      >
        ← Previous
      </Button>

      <Button
        className="review-nav-btn"
        onClick={() => {
          if (state.reviewQuestionIndex === state.questions.length - 1) {
            navigate('/result');
          } else {
            nextReview();
          }
        }}
      >
        {state.reviewQuestionIndex === state.questions.length - 1
          ? 'Back to Results'
          : 'Next →'}
      </Button>
    </div>
  );
};

export default ReviewNavigation;
