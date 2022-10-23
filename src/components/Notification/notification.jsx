import PropTypes from 'prop-types';

export const Notification = ({ message }) => <div>{message}</div>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
