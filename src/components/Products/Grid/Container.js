// import axios from 'axios'; // importing axios library to make HTTP requests
import ItemCard from "./ItemCard/ItemCard"; // importing ItemCard component
import { productarray } from './prodarray'; // importing product array data
import React, { useState } from "react";

const ProductGrid = () => {
  //database filter
  const [searchTerm, setSearchTerm] = useState(""); // creating state for search term and initializing it as an empty string
  const [searchPrice, setSearchPrice] = useState(""); // creating state for search price and initializing it as an empty string
  
  // filtering the product array based on search term and price
  const filteredproductarray = productarray.filter((product) => {
    return (
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) && // checking if the product name includes the search term
      (searchPrice === "" || product.price <= parseInt(searchPrice)) // checking if the product price is less than or equal to the search price
    );
  });
  
  return (
    <div className="Filter">
      <h1 className="Filter__header">Products Page</h1>
      <div className="Filter__filters">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // updating the search term state on change of input value
        />
        <input
          type="number"
          placeholder="Search by Maximum Price"
          value={searchPrice}
          onChange={(e) => setSearchPrice(e.target.value)} // updating the search price state on change of input value
        />
      </div>
      <div className="ProductGrid">
        {filteredproductarray.map((product) => (
          <ItemCard
            key={product.productName} // assigning the key as product name
            src={require(`../../../assets/img${product.productURL}`)} // using require to load the image dynamically
            alt={product.productName}
            name={product.productName}
            price={product.price}
            desc={product.productDesc}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;


// function mapStateToProps(state) { // mapping the state to props
//   return {
//     items: state.items,
//     products: state.products
//   };
// }

// function mapDispatchToProps(dispatch) { // mapping the dispatch to props
//   return {
//     updateState: data => dispatch({ type: actionTypes.UPDATESTATE, data }) // dispatching the action with type UPDATESTATE and data as argument
//   };
// }

// exporting the component with the state and dispatch mapped to props
// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )