import React, {useState } from "react";

function Item({ name, category }) {
const [isInCart, setInCart] = useState(false);

function toggleAddToCart() {
  setInCart((isInCart) => !isInCart);

}

  return (
    <li className= {isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= {isInCart ? "remove" : "add"}  
      onClick = {toggleAddToCart}
      >
      {isInCart ? "Remove from" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
