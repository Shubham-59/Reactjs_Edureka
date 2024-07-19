import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listProducts } from './redux/actions';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const products = [
      { id: 1, name: 'Samsung m 24', price: 80000, image: '/images/images samsung 9.jpg' },
      { id: 2, name: 'Macbook2', price: 100000, image: '/images/jbl.jpg' },
      { id: 3, name: 'Watch', price: 30000, image: '/images/earphone.jpg' },
      { id: 4, name: 'Airpod', price: 20000, image: '/images/watch.jpg' },
     
    ];
    dispatch(listProducts(products));
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Product Store</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
