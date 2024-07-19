import React from 'react';
import './TopNav.css';

const TopNav = () => {
  return (
    <nav className="top-nav">
      <input type="text" placeholder="Search..." />
      <div className="user-profile">
        <img src="https://via.placeholder.com/40" alt="User" />
      </div>
    </nav>
  );
}

export default TopNav;
