import './SubmitModal.css';
import { FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

const SubmitModal = ({
  answered,
  remaining,
  onClose,
  onSubmit,
  isSubmitting,
}) => {
  return (
    <div className="submit-modal-overlay">
      <div className="submit-modal">
        <h2>Submit Exam?</h2>

        <p>
          You have answered
          <strong> {answered}</strong> questions.
        </p>

        <div>
          <p>
            Remaining:
            <strong>
              {' '}
              {remaining} Question{remaining !== 1 ? 's' : ''}
            </strong>
          </p>
        </div>

        <div
          className={
            remaining > 0 ? 'submit-warning warning' : 'submit-warning success'
          }
        >
          {remaining > 0 ? (
            <>
              <FaExclamationTriangle className="warning-icon" />

              <div>
                <strong>
                  You still have {remaining} unanswered question
                  {remaining > 1 ? 's' : ''}.
                </strong>

                <p>
                  Submitting now will end your examination. You will not be able
                  to make further changes.
                </p>
              </div>
            </>
          ) : (
            <>
              <FaCheckCircle className="success-icon" />

              <div>
                <strong>All questions have been answered.</strong>

                <p>You are ready to submit your examination.</p>
              </div>
            </>
          )}
        </div>

        <div className="submit-modal-actions">
          <button className="continue-btn" onClick={onClose}>
            Continue Exam
          </button>

          <button
            className="submit-btn"
            onClick={onSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Exam'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;
