import PropTypes from 'prop-types';

function Tag({ text }) {
  return (
    <span className="text-2xs rounded-full border border-white px-2.5 py-0.5 font-light text-white md:text-sm">
      {text}
    </span>
  );
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
