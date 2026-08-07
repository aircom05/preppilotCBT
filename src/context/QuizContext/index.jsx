import { createContext, useContext, useReducer } from 'react';

import QuizReducer from './QuizReducer';

import initialState from './initialState';

import { QUIZ_ACTIONS } from './actions';

import { loadQuestionBank, generateSession } from '../../services/quiz';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QuizReducer, initialState);

  /**
   * Starts a new exam session
   */
  const startExam = async ({ exam, timer, questionCount }) => {
    try {
      // Always begin from a clean state
      dispatch({
        type: QUIZ_ACTIONS.RESET_EXAM,
      });

      // Load the selected question bank
      const questionBank = await loadQuestionBank(exam.bank);

      const sessionQuestions = generateSession(
        questionBank.questions,
        questionCount,
      );

      dispatch({
        type: QUIZ_ACTIONS.START_EXAM,
        payload: {
          exam,
          questions: sessionQuestions,
          timer,
        },
      });
    } catch (error) {
      console.error('Failed to start exam:', error);
    }
  };

  const tickTimer = () => {
    dispatch({
      type: QUIZ_ACTIONS.TICK_TIMER,
    });
  };

  const submitExam = () => {
    dispatch({
      type: QUIZ_ACTIONS.SUBMIT_EXAM,
    });
  };

  const selectAnswer = (
    questionId,

    answer,
  ) => {
    dispatch({
      type: QUIZ_ACTIONS.SELECT_ANSWER,

      payload: {
        questionId,

        answer,
      },
    });
  };

  const nextQuestion = () => {
    dispatch({
      type: QUIZ_ACTIONS.NEXT_QUESTION,
    });
  };

  const previousQuestion = () => {
    dispatch({
      type: QUIZ_ACTIONS.PREVIOUS_QUESTION,
    });
  };

  const goToQuestion = (index) => {
    dispatch({
      type: QUIZ_ACTIONS.GO_TO_QUESTION,

      payload: index,
    });
  };

  const setResult = (result) => {
    dispatch({
      type: QUIZ_ACTIONS.SET_RESULT,

      payload: result,
    });
  };

  const nextReview = () => {
    dispatch({
      type: QUIZ_ACTIONS.NEXT_REVIEW,
    });
  };

  const previousReview = () => {
    dispatch({
      type: QUIZ_ACTIONS.PREVIOUS_REVIEW,
    });
  };

  const goToReviewQuestion = (index) => {
    dispatch({
      type: QUIZ_ACTIONS.SET_REVIEW_INDEX,
      payload: index,
    });
  };

  const resetExam = () => {
    dispatch({
      type: QUIZ_ACTIONS.RESET_EXAM,
    });
  };

  const pauseTimer = () => {
    dispatch({
      type: QUIZ_ACTIONS.PAUSE_TIMER,
    });
  };

  const resumeTimer = () => {
    dispatch({
      type: QUIZ_ACTIONS.RESUME_TIMER,
    });
  };

  return (
    <QuizContext.Provider
      value={{
        state,
        dispatch,
        startExam,
        selectAnswer,
        nextQuestion,
        previousQuestion,
        goToQuestion,
        tickTimer,
        submitExam,
        setResult,
        nextReview,
        previousReview,
        goToReviewQuestion,
        resetExam,
        pauseTimer,
        resumeTimer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
