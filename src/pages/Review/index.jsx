import { useQuiz } from '../../context/QuizContext';
import ReviewQuestion from '../../components/ReviewQuestion';
import ReviewExplanation from '../../components/ReviewExplanation';
import ReviewNavigation from '../../components/ReviewNavigation';
import ReviewPalette from '../../components/ReviewPalette';
import PageContainer from '../../layouts/PageContainer';
import { useEffect } from 'react';
import './Review.css';

const Review = () => {
  useEffect(() => {
    document.title = '✅ Review • PrepPilot';
    window.scrollTo(0, 0);
  }, []);

  const { state } = useQuiz();

  const courseTitle = state.selectedExam?.title || 'PrepPilot CBT';

  return (
    <PageContainer size="sm">
      <div id="question-top" className="review-page">
        <div className="review-course-header">
          <h1 className="review-course-title"> Review — {courseTitle}</h1>
        </div>
        <ReviewQuestion />

        <ReviewExplanation />

        <ReviewNavigation />

        <ReviewPalette />
      </div>
    </PageContainer>
  );
};

export default Review;
