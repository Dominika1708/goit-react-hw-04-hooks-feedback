import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.buttons}>
    {options.map(option => (
      <button className={styles.button} onClick={() => onLeaveFeedback(option.name)} key={option.id}>
        {option.name}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
