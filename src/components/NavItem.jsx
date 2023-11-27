import React from 'react';
import { Link } from 'react-scroll';

function NavItem(props) {
  return (
    <button className="font-roboto font-medium text-white transition-all duration-500 hover:scale-125 hover:ease-in-out">
      <Link to={props.to} smooth={true} duration={750}>
        {props.text}
      </Link>
    </button>
  );
}

export default NavItem;
