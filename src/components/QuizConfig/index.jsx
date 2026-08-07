import './QuizConfig.css';

const QuizConfig = ({
  options,
  value,
  onChange,
  formatter = (value) => value,
}) => {
  return (
    <div className="setting-options">
      {options.map((option) => (
        <button
          key={option}
          className={value === option ? 'active' : ''}
          onClick={() => onChange(option)}
        >
          {formatter(option)}
        </button>
      ))}
    </div>
  );
};

export default QuizConfig;
