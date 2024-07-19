import React from 'react';

const CartItem = ({ item, onRemoveFromCart }) => (
  <div className="cart-item">
    <img src={item.image} alt={item.name} />
    <h3>{item.name}</h3>
    <p>${item.price}</p>
    <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
  </div>
);

export default CartItem;
