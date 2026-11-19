import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseUpdateModal.css';

const CURRENT_ANNOUNCEMENT_VERSION = 3;

const ANNOUNCEMENT_STORAGE_KEY = 'preppilot-announcement-version';

const newCourses = [
  {
    id: 1,
    icon: '📋',
    name: 'Office Routine / Practice',
  },
  {
    id: 2,
    icon: '👥',
    name: 'Personnel Management in Government',
  },
  {
    id: 3,
    icon: '📚',
    name: 'Public Service / Government Circulars',
  },
  {
    id: 4,
    icon: '🛡️',
    name: 'Security in Government',
  },
  {
    id: 5,
    icon: '💰',
    name: 'Financial Management in Government',
  },
];

const CourseUpdateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const seenVersion = Number(
      localStorage.getItem(ANNOUNCEMENT_STORAGE_KEY) || 0,
    );

    if (seenVersion < CURRENT_ANNOUNCEMENT_VERSION) {
      setIsOpen(true);
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem(
      ANNOUNCEMENT_STORAGE_KEY,
      String(CURRENT_ANNOUNCEMENT_VERSION),
    );

    setIsOpen(false);
  };

  const viewCourses = () => {
    localStorage.setItem(
      ANNOUNCEMENT_STORAGE_KEY,
      String(CURRENT_ANNOUNCEMENT_VERSION),
    );

    setIsOpen(false);

    navigate('/');

    setTimeout(() => {
      document.getElementById('exam-courses')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="course-update-overlay" onClick={closeModal}>
      <div
        className="course-update-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-update-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="course-update-close"
          onClick={closeModal}
          aria-label="Close announcement"
        >
          ×
        </button>

        <div className="course-update-icon">🚀</div>

        <p className="course-update-eyebrow">2027 PRE-PROMOTION EXAMINATION</p>

        <h2 id="course-update-title">
          The 2027 Promotion Prep Update Is Here!
        </h2>

        <p className="course-update-message">
          Five new question banks. More practice. Better preparation. We've
          expanded PrepPilot with five new question banks to give your 2027
          promotion preparation a major boost.
        </p>

        <div className="new-courses">
          {newCourses.map((course) => (
            <div className="new-course" key={course.id}>
              <span className="new-course-icon" aria-hidden="true">
                {course.icon}
              </span>

              <span className="new-course-name">{course.name}</span>
            </div>
          ))}
        </div>

        <p className="course-update-footer">
          Your next promotion starts with preparation.
        </p>

        <button
          type="button"
          className="course-update-view"
          onClick={viewCourses}
        >
          Explore New Courses
          <span aria-hidden="true">→</span>
        </button>

        <button
          type="button"
          className="course-update-dismiss"
          onClick={closeModal}
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default CourseUpdateModal;
