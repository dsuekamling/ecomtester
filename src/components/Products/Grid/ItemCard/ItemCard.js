import React from "react";

function ItemCard (props) {
	return(
	<div className="Item">
	  {/* // display the image passed as props */}
	  <img className="Item__image" src={props.src} alt={props.alt}/>
	  <div className="Item__card">
		<div className="Item__tag">
		  {/* // display the name and price of the item passed as props */}
		  <h3 className="Item__title">{props.name}</h3>
		  <p className="Item__price">${props.price}</p>
		</div>
		{/* // display the description of the item passed as props */}
		<p className="Item__desc">{props.desc}</p>
	  </div>
	</div>
  )};
  export default ItemCard;