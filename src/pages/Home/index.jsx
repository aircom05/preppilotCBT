import { HeroCard, ExamCard } from '../../components';
import PageContainer from '../../layouts/PageContainer';
import AppLayout from '../../layouts/AppLayout';
import exams from '../../data/exams';
import getGreeting from '../../utils/getGreeting';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  useEffect(() => {
    document.title = '🏠 Home • PrepPilot';
    window.scrollTo(0, 0);
  }, []);
  const greeting = getGreeting();
  return (
    <AppLayout>
      <PageContainer size="lg">
        <div className="home-dashboard">
          <HeroCard>
            <div className="hero-content">
              <h3 className="hero-greeting">
                👋 {greeting.emoji} {greeting.text}
              </h3>

              <h1 className="hero-title">PrepPilot CBT</h1>

              <p className="hero-subtitle">Prepare • Practice • Prevail</p>
            </div>
          </HeroCard>
          <section id="exam-courses">
            {exams.map((exam) => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </section>
        </div>
        <footer className="home-footer">
          <p className="footer-tagline">Prepare • Practice • Prevail</p>

          <div className="footer-links">
            <Link to="/about">About</Link>

            <span aria-hidden="true">|</span>

            <Link to="/references">References</Link>
          </div>

          <p className="footer-copyright">
            © {new Date().getFullYear()} PrepPilot. All rights reserved.
          </p>
        </footer>
      </PageContainer>
    </AppLayout>
  );
};

export default Home;
