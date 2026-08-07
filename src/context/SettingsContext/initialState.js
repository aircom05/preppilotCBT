import storage from '../../services/storage';

const initialState = {
  theme: storage.get('theme', 'light'),

  accent: storage.get('accent', 'blue'),

  timer: storage.get('timer', 40),

  questionCount: storage.get('questionCount', 60),
};

export default initialState;
