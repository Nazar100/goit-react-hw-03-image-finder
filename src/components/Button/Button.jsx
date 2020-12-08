import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <button onClick={onClick} className="Button" type="button">
      Load More
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
