const SettingsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };

    case 'SET_ACCENT':
      return {
        ...state,
        accent: action.payload,
      };

    case 'SET_TIMER':
      return {
        ...state,
        timer: action.payload,
      };

    case 'SET_QUESTION_COUNT':
      return {
        ...state,
        questionCount: action.payload,
      };

    default:
      return state;
  }
};

export default SettingsReducer;
