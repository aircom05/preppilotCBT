const initialState = {
  selectedExam: null,

  questions: [],

  currentQuestionIndex: 0,

  answers: {},

  bookmarkedQuestions: [],

  questionCount: 60,

  timerDuration: 0,

  timeRemaining: 0,

  isRunning: false,

  isFinished: false,

  score: 0,

  result: null,

  reviewQuestionIndex: 0,

  timerPaused: false,
};

export default initialState;
