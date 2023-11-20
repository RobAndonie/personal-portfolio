import React from 'react';
import { Link } from 'react-scroll';

function NavItem(props) {
  return (
    <button>
      <Link
        className="font-roboto font-medium text-white transition-all duration-500 hover:text-lg hover:ease-in-out"
        to={props.to}
        smooth={true}
        duration={750}
      >
        {props.text}
      </Link>
    </button>
  );
}

export default NavItem;
