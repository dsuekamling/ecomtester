import React from 'react';
import summerPic from '../../../assets/img/homeSummer.jpg' // Import the image

function Banner() {
  return (
    <div className="Banner">
      {/* Display the image with the specified source */}
      <img className="Banner__image" src={summerPic} alt="Two people lounging at the beach" />
      {/* Display the banner text */}
      <p className="Banner__text">POP Around.</p>
    </div>
  );
}

export default Banner;
