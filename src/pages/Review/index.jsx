import ReviewQuestion from '../../components/ReviewQuestion';
import ReviewExplanation from '../../components/ReviewExplanation';
import ReviewNavigation from '../../components/ReviewNavigation';
import ReviewPalette from '../../components/ReviewPalette';
import PageContainer from '../../layouts/PageContainer';

import './Review.css';

const Review = () => {
  return (
    <PageContainer size="sm">
      <div className="review-page">
        <ReviewQuestion />

        <ReviewExplanation />

        <ReviewNavigation />

        <ReviewPalette />
      </div>
    </PageContainer>
  );
};

export default Review;
