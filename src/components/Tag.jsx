import React from 'react';

function Tag({ text }) {
  return (
    <span className="rounded-full border border-white px-2.5 py-0.5 text-sm font-light text-white">
      {text}
    </span>
  );
}

export default Tag;
