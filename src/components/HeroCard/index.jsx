import { useSettings } from '../../context/SettingsContext';
import './HeroCard.css';

const HeroCard = ({ children }) => {
  const { state, setTheme } = useSettings();
  return (
    <section className="hero-card">
      {children}
      <button
        className="theme-toggle"
        onClick={() => setTheme(state.theme === 'light' ? 'dark' : 'light')}
      >
        {state.theme === 'light' ? '🌙' : '☀️'}
      </button>
    </section>
  );
};

export default HeroCard;
