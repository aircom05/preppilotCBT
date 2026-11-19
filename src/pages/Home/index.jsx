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
            {/* 2027 Promotion Preparation */}
            <div className="course-category">
              <div className="course-category-heading">
                <span className="category-badge">NEW</span>
                <h2>2027 Pre-Promotion Preparation</h2>
                <p>
                  Prepare for your 2027 pre-promotion with these five dedicated
                  question banks extracted from the Pre-Promotion Examination
                  Seminar paper for Civil Servants GL. 06 - 16 2027.
                </p>
              </div>

              <div className="course-grid">
                {exams
                  .filter((exam) => exam.category === 'promotion-2027')
                  .map((exam) => (
                    <ExamCard key={exam.id} exam={exam} />
                  ))}
              </div>
            </div>

            {/* Other Practice Courses */}
            <div className="course-category">
              <div className="course-category-heading">
                <h2>Other Practice Courses</h2>
                <p>Explore additional courses and expand your knowledge.</p>
              </div>

              <div className="course-grid">
                {exams
                  .filter((exam) => exam.category === 'general')
                  .map((exam) => (
                    <ExamCard key={exam.id} exam={exam} />
                  ))}
              </div>
            </div>
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
