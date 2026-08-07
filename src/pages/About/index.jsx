import './About.css';
import { Link } from 'react-router-dom';
import {
  FaBookOpen,
  FaLaptopCode,
  FaBullseye,
  FaArrowLeft,
  FaCheckCircle,
} from 'react-icons/fa';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'ℹ️ About • PrepPilot';
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-page">
      <div className="about-card">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back Home
        </Link>

        <div className="about-header">
          <h1 className="about-head-title">PrepPilot</h1>
          <p className="tagline">Prepare • Practice • Prevail</p>

          <span className="version">Version 1.0.0</span>
        </div>

        <section className="about-section">
          <h2>
            <FaBookOpen /> About PrepPilot
          </h2>

          <p>
            PrepPilot is an offline-first Computer-Based Testing (CBT)
            application designed to help students, public servants, and
            government promotional examination candidates as a study tool
            prepare confidently through realistic practice tests, timed
            examinations and detailed answer reviews.
          </p>

          <p>
            Whether you're preparing for APOCE, or promotional exams, PrepPilot
            provides a fast, responsive and distraction-free learning
            experience.
          </p>
        </section>

        <section className="about-section">
          <h2>
            <FaCheckCircle /> Current Features
          </h2>

          <ul className="feature-list">
            <li>Timed & Practice Modes</li>
            <li>Random Question Generation</li>
            <li>Previous & Next Navigation</li>
            <li>Question Palette Navigation</li>
            <li>Review with Correct Answers</li>
            <li>Auto Submit when Time Expires</li>
            <li>Performance Summary</li>
            <li>Responsive Mobile & Desktop Layout</li>
            <li>Dark Mode</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>
            <FaBullseye /> Mission
          </h2>

          <p>
            To make exam preparation smarter, simpler and accessible by
            delivering an intuitive testing experience that encourages
            consistent practice and measurable improvement.
          </p>
        </section>

        <section className="about-section developer-card">
          <h2>
            <FaLaptopCode /> Developer
          </h2>

          <p>Designed and developed by</p>
          <h3>Ekom</h3>

          {/* <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <FaGithub /> View Project on GitHub
          </a> */}
        </section>

        <footer className="about-footer">
          <small>
            © {new Date().getFullYear()} PrepPilot. All rights reserved.
          </small>
        </footer>
      </div>
    </div>
  );
};

export default About;
