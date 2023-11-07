import React from 'react';

function NavItem(props) {
  return (
    <button className="font-roboto font-medium text-white">{props.text}</button>
  );
}

export default NavItem;
