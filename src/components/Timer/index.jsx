import { useEffect } from 'react';
import { useQuiz } from '../../context/QuizContext';

import { QUIZ_ACTIONS } from '../../context/QuizContext/actions';

import './Timer.css';

const Timer = () => {
  const { state, tickTimer, submitExam } = useQuiz();

  useEffect(() => {
    //  Don't start the timer if the exam isn't running
    if (!state.isRunning) return;

    // Pause countdown while a modal is open
    if (state.timerPaused) return;

    // Auto-submit when time runs out
    if (state.timeRemaining <= 0) {
      submitExam();
      return;
    }

    const interval = setInterval(() => {
      tickTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, [state.timeRemaining, state.timerPaused, state.isRunning]);

  const minutes = Math.floor(state.timeRemaining / 60);

  const seconds = state.timeRemaining % 60;

  return (
    <div className="timer">
      <div className="timer-label">Time Remaining</div>

      <div className="timer-value">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

export default Timer;
