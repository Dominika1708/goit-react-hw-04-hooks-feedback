import PropTypes from 'prop-types';
import styles from './notification.module.css';

export const Notification = ({ message }) => <div className={styles.notification}>{message}</div>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
