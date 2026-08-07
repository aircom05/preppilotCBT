import './SummaryCard.css';

const SummaryCard = ({
  timer,
  questionCount,
}) => {

  const isPracticeMode = timer === 0;

  return (

    <div className="selected-config">

      <h4>

        ✓ Ready

      </h4>

      <p>

        {isPracticeMode
          ? 'Practice Session'
          : `${timer / 60} Minutes`}

        {' • '}

        {questionCount} Questions

      </p>

    </div>

  );

};

export default SummaryCard;