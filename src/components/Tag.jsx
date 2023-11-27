import React from 'react';

function Tag({ text }) {
  return (
    <span className="rounded-full border border-white px-2.5 py-0.5 text-xs font-light text-white md:text-sm">
      {text}
    </span>
  );
}

export default Tag;
