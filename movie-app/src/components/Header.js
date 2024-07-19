import React from 'react';
import './Header.css';

const Header = () => (
    <header className="header">
        <div className="navbar">
            <div className="nav-logo">
                <img src="images/movie.png" alt="Logo" className="logo" />
            </div>
            <div className="nav-title">
                <h1 className="site-title">BookMyMovie</h1>
                <span className="site-tagline">Discover & Book Your Favorite Movies</span>
            </div>
            <div className="search-input-wrapper">
                    <input type="text" placeholder="Search for movies..." className="search-input" />
                    <button type="submit" className="search-button">
                        <i className="fa-solid fa-search"></i>
                    </button>
                </div>
            <div className="nav-search">
                <div className="search-category">
                    <select className="search-select">
                        <option>All Movies</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Comedy</option>
                       
                    </select>
                </div>
                
            </div>
            <div className="nav-links">
                <div className="nav-link">
                    <span className="link-text">Hello, Sign in</span>
                    <span className="link-subtext">My Account</span>
                </div>
                <div className="nav-link">
                    <span className="link-text">Bookings</span>
                    <span className="link-subtext">My Tickets</span>
                </div>
                <div className="nav-link">
                    <span className="link-icon">
                        <i className="fa-solid fa-heart"></i>
                    </span>
                    <span className="link-text">Favorites</span>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
