import './ConfigCard.css';

const ConfigCard = ({ title, icon, children }) => {
  return (
    <section className="config-card">
      <div className="config-card-header">
        {icon}

        <h3>{title}</h3>
      </div>

      <div className="config-card-body">{children}</div>
    </section>
  );
};

export default ConfigCard;
