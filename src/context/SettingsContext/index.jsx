import { createContext, useContext, useEffect, useReducer } from 'react';

import SettingsReducer from './SettingsReducer';
import initialState from './initialState';
import storage from '../../services/storage';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SettingsReducer, initialState);

  useEffect(() => {
    storage.set('theme', state.theme);

    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  useEffect(() => {
    storage.set('accent', state.accent);

    document.documentElement.setAttribute('data-accent', state.accent);
  }, [state.accent]);

  useEffect(() => {
    storage.set('timer', state.timer);
  }, [state.timer]);

  useEffect(() => {
    storage.set('questionCount', state.questionCount);
  }, [state.questionCount]);

  const setTheme = (theme) =>
    dispatch({
      type: 'SET_THEME',
      payload: theme,
    });

  const setAccent = (accent) =>
    dispatch({
      type: 'SET_ACCENT',
      payload: accent,
    });

  const setTimer = (timer) =>
    dispatch({
      type: 'SET_TIMER',
      payload: timer,
    });

  const setQuestionCount = (count) =>
    dispatch({
      type: 'SET_QUESTION_COUNT',
      payload: count,
    });

  return (
    <SettingsContext.Provider
      value={{
        state,

        setTheme,

        setAccent,

        setTimer,

        setQuestionCount,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
