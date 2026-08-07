import './ExamHeader.css';

const ExamHeader = ({ title, totalQuestions, chapters, icon: Icon }) => {
  return (
    <>
      <div className="exam-title">
        <Icon className="exam-icon" />

        <h2>{title}</h2>
      </div>

      <p className="exam-description">
        {totalQuestions} Questions
        {chapters && (
          <>
            {' • '}
            {chapters} Chapters
          </>
        )}
      </p>
    </>
  );
};

export default ExamHeader;
