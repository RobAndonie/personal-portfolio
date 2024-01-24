import PropTypes from 'prop-types';

function SmallTag({ text }) {
  return (
    <span className="rounded-full border border-white px-2.5 py-0.5 text-xs font-light text-white">
      {text}
    </span>
  );
}

SmallTag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SmallTag;
