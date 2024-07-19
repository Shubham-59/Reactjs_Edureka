import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import Product from './Product';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
