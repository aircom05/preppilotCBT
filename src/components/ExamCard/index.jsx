import { Card, Button } from '../../components';
import { FaPlay, FaClock, FaListOl } from 'react-icons/fa';
import './ExamCard.css';
import { useQuiz } from '../../context/QuizContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ExamHeader from '../ExamHeader';
import ConfigCard from '../ConfigCard';
import SummaryCard from '../SummaryCard';
const ExamCard = ({ exam }) => {
  const [timer, setTimer] = useState(40 * 60);

  const [questionCount, setQuestionCount] = useState(60);
  const { startExam } = useQuiz();
  const navigate = useNavigate();

  const handleStartExam = async () => {
    await startExam({
      exam,
      timer,
      questionCount,
    });

    navigate('/exam');
  };
  return (
    <Card>
      <div className="exam-home">
        <ExamHeader
          title={exam.title}
          totalQuestions={exam.totalQuestions}
          chapters={exam.chapters}
          icon={exam.icon}
        />
        <div className="exam-settings">
          <ConfigCard title="Exam Duration" icon={<FaClock />}>
            <div className="setting-options">
              <button
                className={timer === 20 * 60 ? 'active' : ''}
                onClick={() => setTimer(20 * 60)}
              >
                20 min
              </button>

              <button
                className={timer === 30 * 60 ? 'active' : ''}
                onClick={() => setTimer(30 * 60)}
              >
                30 min
              </button>

              <button
                className={timer === 40 * 60 ? 'active' : ''}
                onClick={() => setTimer(40 * 60)}
              >
                40 min
              </button>

              <button
                className={timer === null ? 'active' : ''}
                onClick={() => setTimer(null)}
              >
                No Timer
              </button>
            </div>
          </ConfigCard>

          <ConfigCard title="Questions" icon={<FaListOl />}>
            <div className="setting-options">
              <button
                className={questionCount === 20 ? 'active' : ''}
                onClick={() => setQuestionCount(20)}
              >
                20
              </button>

              <button
                className={questionCount === 40 ? 'active' : ''}
                onClick={() => setQuestionCount(40)}
              >
                40
              </button>

              <button
                className={questionCount === 60 ? 'active' : ''}
                onClick={() => setQuestionCount(60)}
              >
                60
              </button>
            </div>
          </ConfigCard>
        </div>
        <SummaryCard timer={timer} questionCount={questionCount} />
        <div className="exam-info">
          <div className="exam-info-item">
            <span className="info-label">Estimated Time</span>
            <span className="info-value">
              {timer === 0 ? 'Practice Mode' : `${timer / 60} Minutes`}
            </span>
          </div>
        </div>

        <div className="exam-card-actions">
          <Button onClick={handleStartExam}>
            <FaPlay className="fa-play" />

            {timer === null
              ? 'Start Practice Session'
              : `Start ${questionCount}-Question Timed Exam`}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ExamCard;
