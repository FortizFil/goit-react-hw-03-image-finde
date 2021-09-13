import PropTypes from 'prop-types';
const Button = ({ onClickLoadMore }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  return (
    <button
      type="button"
      className="Button"
      onClick={() => {
        onClickLoadMore();
      }}
    >
      <span>Load More</span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
