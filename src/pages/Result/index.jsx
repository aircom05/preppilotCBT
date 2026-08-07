import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../../context/QuizContext';
import PageContainer from '../../layouts/PageContainer';
import './Result.css';

import { useEffect } from 'react';

const Result = () => {
  useEffect(() => {
    document.title = '📊 Result • PrepPilot';
    window.scrollTo(0, 0);
  }, []);

  const { state } = useQuiz();

  const navigate = useNavigate();

  if (!state.result) {
    return <h2>No result available.</h2>;
  }

  const { total, correct, wrong, unanswered, percentage, passed } =
    state.result;

  return (
    <PageContainer size="sm">
      <div className="result-container">
        <div className="result-card">
          <h1 className="result-header">🏆 Exam Completed</h1>

          <h2>
            {correct} / {total}
          </h2>

          <h3>{percentage}%</h3>

          <span className={passed ? 'result-pass' : 'result-fail'}>
            {passed ? 'PASS' : 'FAIL'}
          </span>

          <div className="result-summary">
            <p className="correct-tick">✓ Correct: {correct}</p>

            <p className="wrong-tick">✗ Wrong: {wrong}</p>

            <p className="unanswered-tick">○ Unanswered: {unanswered}</p>
          </div>

          <div className="result-actions">
            <button onClick={() => navigate('/review')}>Review Answers</button>

            <button onClick={() => navigate('/')}>Return Home</button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Result;
