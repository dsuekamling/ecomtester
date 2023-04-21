import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';

function Nav (props) {
  return(
    // navigation bar with hamburger icon
    <nav className="Nav">
      <Hamburger handleNav={props.handleNav}/>
      <ul className="Nav__list">
        <li>
          {/* // home page link */}
          <Link to="/" className="Nav__link" onClick={props.handleNav}>Home</Link>
        </li>
        <li>
          {/* // shop page link */}
          <Link to="/products" className="Nav__link" onClick={props.handleNav}> Shop</Link>
        </li>
        <li>
          {/* // contact page link */}
          <Link to="/contact" className="Nav__link" onClick={props.handleNav}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
