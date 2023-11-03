
import PropTypes from 'prop-types';

export const LoadingQuote = ({ text }) => {
  return (
    <div  className="alert alert-info text-center">
      { text }
    </div>
  )
}

LoadingQuote.propTypes = {
  text: PropTypes.string.isRequired,
};
