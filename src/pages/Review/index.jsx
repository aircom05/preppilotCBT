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
  return (
    <PageContainer size="sm">
      <div id="question-top" className="review-page">
        <ReviewQuestion />

        <ReviewExplanation />

        <ReviewNavigation />

        <ReviewPalette />
      </div>
    </PageContainer>
  );
};

export default Review;
