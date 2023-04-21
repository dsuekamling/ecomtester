import React from 'react';

function Hamburger (props) {
  // This component renders a button with a hamburger icon and
  // receives a `handleNav` function as a prop that is executed when
  // the button is clicked.
  return(
    <button onClick={props.handleNav} className="hamburger hamburger--spin" type="button" aria-label="Hamburger-icon">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
