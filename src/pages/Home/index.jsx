import { HeroCard, ExamCard } from '../../components';
import PageContainer from '../../layouts/PageContainer';
import AppLayout from '../../layouts/AppLayout';
import exams from '../../data/exams';
import getGreeting from '../../utils/getGreeting';

import './Home.css';

const Home = () => {
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
          {exams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
        <footer className="home-footer">
          <p className="footer-tagline">Prepare • Practice • Prevail</p>

          <div className="footer-links">
            <a href="/about">About</a>

            <span>•</span>

            <span>Version 1.0.0</span>
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
