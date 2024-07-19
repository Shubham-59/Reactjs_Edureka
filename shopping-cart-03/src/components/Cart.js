import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} onRemoveFromCart={handleRemoveFromCart} />
      ))}
      <h3>Total Amount: 💰₹{totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
