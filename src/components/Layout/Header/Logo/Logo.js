import React from 'react';
import { Link } from 'react-router-dom';

function Logo () {
  return(
    // Link to the home page when clicked on the logo
    <Link to="/" className="Logo">
      <p className="Logo__title">POP Shop</p>
    </Link>
  )
}

export default Logo;
