import React from "react";
import imageOne from "../../../assets/img/carousel-photoOne.jpg";
import imageTwo from "../../../assets/img/carousel-photoTwo.jpg";
import imageThree from "../../../assets/img/carousel-photoThree.jpg";
import leftArrow from "../../../assets/img/left.png";
import rightArrow from "../../../assets/img/right.png";

function Hero () {
  // Initialize index for current slide
  let i = 2;

  // Function to handle arrow clicks and transition between slides
  function handleClick (x) {
    if (x === -1) { // Left arrow clicked
      // Set current slide's opacity to 0
      let slide = document.querySelectorAll(".Carousel");
      slide[i].style.opacity = 0;

      // Update index for previous slide
      if (i === 0) {
        i = 3;
      }
      i--;

      // Set previous slide's opacity to 1
      slide[i].style.opacity = 1;
    } else if (x === 1) { // Right arrow clicked
      // Set current slide's opacity to 0
      let slide = document.querySelectorAll(".Carousel");
      slide[i].style.opacity = 0;

      // Update index for next slide
      if (i === 2) {
        i = -1;
      }
      i++;

      // Set next slide's opacity to 1
      slide[i].style.opacity = 1;
    }
  };

  return (
    <div className="Home__slider">
      {/* Image carousel container */}
      <div className="Carousel-container">
        {/* Third image */}
        <img className="Carousel" src={imageThree} alt="surfing" />
        {/* Second image */}
        <img className="Carousel" src={imageTwo} alt="crystal-blue-surfing" />
        {/* First image (starting slide) */}
        <img
          className="Carousel Carousel--starting"
          src={imageOne}
          alt="crystal-blue-surfing"
        />
      </div>

      {/* Slider text */}
      <div className="Slider__text">
        <p className="Slider__header">Explore The World Of POP</p>
        <p className="Slider__header">Differently with</p>
        <p className="Slider__header">POP Shop</p>
      </div>

      {/* Left arrow */}
      <img
        className="Slider__leftArrow"
        src={leftArrow}
        alt="left-arrow"
        onClick={() => handleClick(-1)}
      />

      {/* Right arrow */}
      <img
        className="Slider__rightArrow"
        src={rightArrow}
        alt="right-arrow"
        onClick={() => handleClick(1)}
      />
    </div>
  );
};

export default Hero;
