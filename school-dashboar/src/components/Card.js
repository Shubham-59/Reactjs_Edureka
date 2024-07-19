import React from 'react';
import './Card.css';

const Card = ({ icon, title }) => {
  return (
    <div className="card">
      <div className="card-body">
        <i className={icon}></i>
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default Card;
