import React from 'react';
import { Link } from 'react-router-dom';

function BannerCard(props) {
  return (
    <div className="BannerCard">
      {/* Display the image passed in as a prop */}
      <img className="BannerCard__image" src={props.image} alt={props.descr} />
      <div className="BannerCard__content">
        {/* Display the title passed in as a prop */}
        <p className="BannerCard__header">{props.title}</p>
        <div className="BannerCard__links">
          {/* Create a link to the products page with the text "SELECT OPTIONS" */}
          <Link to="/products" className="BannerCard__button--left">SELECT OPTIONS</Link>
          {/* Create a link to the products page with the text "MORE INFO" */}
          <Link to="/products" className="BannerCard__button--right">MORE INFO</Link>
        </div>
      </div>
    </div>
  );
}

export default BannerCard;
