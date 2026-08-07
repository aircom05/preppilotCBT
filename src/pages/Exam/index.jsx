import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuiz } from '../../context/QuizContext';
import { Button } from '../../components';
import Timer from '../../components/Timer';
import SubmitModal from '../../components/SubmitModal';
import PageContainer from '../../layouts/PageContainer';
import QuestionPalette from '../../components/QuestionPalette';

import calculateResult from '../../utils/calculateResult';
import scrollToTop from '../../utils/scrollToTop';

import './Exam.css';

const Exam = () => {
  useEffect(() => {
    document.title = '📝 Exam • PrepPilot';
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const {
    state,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    setResult,
    pauseTimer,
    resumeTimer,
    submitExam,
  } = useQuiz();
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!state.questions.length) {
    return <h2>No active exam.</h2>;
  }

  const question = state.questions[state.currentQuestionIndex];

  const selectedAnswer = state.answers[question.id];

  const totalQuestions = state.questions.length;

  const currentQuestionNumber = state.currentQuestionIndex + 1;

  const answeredQuestions = Object.keys(state.answers).length;

  const remainingQuestions = totalQuestions - answeredQuestions;

  const progress = (currentQuestionNumber / totalQuestions) * 100;

  // const handleSubmit = async () => {
  //   submitExam(); // <-- Dispatch SUBMIT_EXAM first
  //   setIsSubmitting(true);

  //   const result = calculateResult(state.questions, state.answers);

  //   setResult(result);

  //   await new Promise((resolve) => setTimeout(resolve, 800));

  //   navigate('/result');
  // };

  const finishExam = () => {
    submitExam();

    setIsSubmitting(true);

    const result = calculateResult(state.questions, state.answers);

    setResult(result);

    setTimeout(() => {
      navigate('/result');
    }, 800);
  };

  const handleNext = () => {
    if (currentQuestionNumber === totalQuestions) {
      pauseTimer();
      setShowSubmitModal(true);
    } else {
      nextQuestion();
      scrollToTop();
    }
  };

  const handlePrevious = () => {
    previousQuestion();
    scrollToTop();
  };

  const handleSubmit = () => {
    finishExam();
  };

  useEffect(() => {
    if (!state.isRunning) return;

    if (state.timeRemaining === 0) {
      finishExam();
    }
  }, [state.timeRemaining, state.isRunning]);
  return (
    <PageContainer size="sm">
      <div id="question-top" className="exam-container">
        <div className="exam-header">
          <div className="exam-counter">
            <h2>
              Question {currentQuestionNumber} of {totalQuestions}
            </h2>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <p>
              Answered:
              {answeredQuestions} | Remaining:
              {remainingQuestions}
            </p>
          </div>
          <Timer />
        </div>

        <h3 className="exam-text">{question.question}</h3>

        <div className="exam-options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`exam-option ${
                selectedAnswer === index ? 'selected' : ''
              }`}
              onClick={() => selectAnswer(question.id, index)}
            >
              {option}
            </button>
          ))}
          <div className="exam-navigation">
            <Button onClick={handlePrevious}>← Previous</Button>

            <Button onClick={handleNext}>
              {currentQuestionNumber === totalQuestions ? 'Submit' : 'Next →'}
            </Button>
          </div>
        </div>

        <QuestionPalette />
        {showSubmitModal && (
          <SubmitModal
            answered={answeredQuestions}
            remaining={remainingQuestions}
            onClose={() => {
              resumeTimer();
              setShowSubmitModal(false);
            }}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </PageContainer>
  );
};

export default Exam;
