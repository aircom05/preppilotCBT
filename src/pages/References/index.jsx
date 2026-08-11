import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { useEffect } from 'react';
import './References.css';

const references = [
  {
    id: 1,
    iconColor: '#e7800af5',
    title: '2022 Akwa Ibom State Public Service Rules',
    questionBank: 'Akwa Ibom Public Service Rules',
    type: 'Official Reference Material',
  },

  // Add future question banks here
  {
    id: 2,
    iconColor: '#2563eb',
    title: 'LAW PAPER I (General Principles of Common Law)',
    questionBank: '2025 Pre-Examination Seminar for APOCE on Law Paper 1',
    type: 'Study Material',
  },

  {
    id: 3,
    iconColor: '#16a34a',
    title: 'LAW PAPER II (Statute Law)',
    questionBank: '2025 Pre-Examination Seminar for APOCE on Law Paper II',
    type: 'Study Material',
  },
  {
    id: 4,
    iconColor: '#91305c',
    title: 'Financial Management in      Government',
    questionBank:
      '2025 Pre-Examination   Seminar for APOCE on Financial Management',
    type: 'Study Material',
  },
];

const References = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="references-page">
      <div className="references-container">
        {/* Back to Home */}
        <Link to="/" className="references-back-link">
          ← Back to Home
        </Link>

        {/* Header */}
        <header className="references-header">
          <div className="references-icon" aria-hidden="true">
            📚
          </div>

          <p className="references-eyebrow">PrepPilot Resources</p>

          <h2>References &amp; Study Materials</h2>

          <p className="references-intro">
            The question banks available on PrepPilot are based on the following
            reference materials and study resources.
          </p>
        </header>

        {/* Important Note */}
        <section className="references-notice">
          <span className="notice-icon" aria-hidden="true">
            ℹ️
          </span>

          <p>
            <strong>Important:</strong> PrepPilot is an educational practice
            tool. Users should consult the original source materials for
            authoritative information.
          </p>
        </section>

        {/* References */}
        <section className="references-section">
          <div className="section-title">
            <span aria-hidden="true">📖</span>

            <div>
              <h2>Reference Materials</h2>

              <p>Sources used for the available question banks.</p>
            </div>
          </div>

          <div className="references-list">
            {references.map((reference) => (
              <article className="reference-card" key={reference.id}>
                <div
                  className="reference-book-icon"
                  style={{ '--icon-color': reference.iconColor }}
                >
                  <BookOpen size={28} strokeWidth={2} />
                </div>

                <div className="reference-content">
                  <p className="reference-type">{reference.type}</p>

                  <h3>{reference.title}</h3>

                  <div className="question-bank">
                    <span className="question-bank-label">Question Bank</span>

                    <span className="question-bank-name">
                      {reference.questionBank}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="references-footer">
          <p>© {new Date().getFullYear()} PrepPilot</p>

          <div className="references-footer-links">
            <Link to="/">Home</Link>

            <span aria-hidden="true">|</span>

            <Link to="/about">About</Link>
          </div>

          <small>Prepare. Practice. Prevail.</small>
        </footer>
      </div>
    </main>
  );
};

export default References;
