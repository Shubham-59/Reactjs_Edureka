// src/components/Header.js
import React from 'react';
// import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="nav-logo">
        <img src="./images/logo.jpg" alt="Logo" className="logo" />
      </div>
      <div className="nav-search">
        <input type="text" placeholder="Search movies..." className="search-input" />
        <button type="submit" className="search-button">
          <i className="fa-solid fa-search"></i>
        </button>
      </div>
      <div className="nav-links">
        <div className="nav-link">Sign in</div>
        <div className="nav-link">My Bookings</div>
        <div className="nav-link">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
