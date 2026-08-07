import { QUIZ_ACTIONS } from './actions';
import initialState from './initialState';

const QuizReducer = (state, action) => {
  switch (action.type) {
    case QUIZ_ACTIONS.START_EXAM:
      return {
        ...state,

        isRunning: true,

        selectedExam: action.payload.exam,

        questions: action.payload.questions,

        timerDuration: action.payload.timer,

        timeRemaining: action.payload.timer,
      };

    case QUIZ_ACTIONS.SET_TIMER:
      return {
        ...state,

        timerDuration: action.payload,
      };

    case QUIZ_ACTIONS.SET_QUESTION_COUNT:
      return {
        ...state,

        questionCount: action.payload,
      };

    case QUIZ_ACTIONS.RESET_EXAM:
      return initialState;

    case QUIZ_ACTIONS.SELECT_ANSWER:
      return {
        ...state,

        answers: {
          ...state.answers,

          [action.payload.questionId]: action.payload.answer,
        },
      };

    case QUIZ_ACTIONS.NEXT_QUESTION:
      return {
        ...state,

        currentQuestionIndex: Math.min(
          state.currentQuestionIndex + 1,

          state.questions.length - 1,
        ),
      };

    case QUIZ_ACTIONS.PREVIOUS_QUESTION:
      return {
        ...state,

        currentQuestionIndex: Math.max(
          state.currentQuestionIndex - 1,

          0,
        ),
      };

    case QUIZ_ACTIONS.GO_TO_QUESTION:
      return {
        ...state,

        currentQuestionIndex: action.payload,
      };

    case QUIZ_ACTIONS.TICK_TIMER:
      return {
        ...state,

        timeRemaining: Math.max(0, state.timeRemaining - 1),
      };

    case QUIZ_ACTIONS.SUBMIT_EXAM:
      return {
        ...state,

        isRunning: false,

        isSubmitted: true,

        timerPaused: false,
      };

    case QUIZ_ACTIONS.SET_RESULT:
      return {
        ...state,

        result: action.payload,
      };

    case QUIZ_ACTIONS.SET_REVIEW_INDEX:
      return {
        ...state,

        reviewQuestionIndex: action.payload,
      };

    case QUIZ_ACTIONS.NEXT_REVIEW:
      return {
        ...state,
        reviewQuestionIndex: Math.min(
          state.reviewQuestionIndex + 1,
          state.questions.length - 1,
        ),
      };

    case QUIZ_ACTIONS.PREVIOUS_REVIEW:
      return {
        ...state,
        reviewQuestionIndex: Math.max(state.reviewQuestionIndex - 1, 0),
      };

    case QUIZ_ACTIONS.PAUSE_TIMER:
      return {
        ...state,
        timerPaused: true,
      };

    case QUIZ_ACTIONS.RESUME_TIMER:
      return {
        ...state,
        timerPaused: false,
      };

    default:
      return state;
  }
};

export default QuizReducer;
