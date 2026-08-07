import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { SettingsProvider } from './context/SettingsContext';

import './assets/styles/globals.css';
import { QuizProvider } from './context/QuizContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </SettingsProvider>
  </React.StrictMode>,
);
