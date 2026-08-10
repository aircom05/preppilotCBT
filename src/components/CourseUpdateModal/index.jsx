import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseUpdateModal.css';

const ANNOUNCEMENT_ID = 'course-update-2026-08-10';

const newCourses = [
  {
    id: 1,
    icon: '📘',
    name: 'Law II (Statute Law)',
  },
  {
    id: 2,
    icon: '📗',
    name: 'Financial Management in Government',
  },
];

const CourseUpdateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const announcementSeen = localStorage.getItem(ANNOUNCEMENT_ID);

    if (!announcementSeen) {
      setIsOpen(true);
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem(ANNOUNCEMENT_ID, 'seen');
    setIsOpen(false);
  };

  const viewCourses = () => {
    localStorage.setItem(ANNOUNCEMENT_ID, 'seen');
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

        <div className="course-update-icon">🎉</div>

        <p className="course-update-eyebrow">PrepPilot Update</p>

        <h2 id="course-update-title">Two New Courses!</h2>

        <p className="course-update-message">
          Two new question banks have been added to PrepPilot. More courses,
          more practice.
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

        <button
          type="button"
          className="course-update-view"
          onClick={viewCourses}
        >
          View Courses
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
