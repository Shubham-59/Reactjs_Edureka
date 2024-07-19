// src/components/MovieItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToSaveForLater } from '../redux/actions/saveForLaterActions';
// import './MovieItem.css';

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();

  const handleSaveForLater = () => {
    dispatch(addToSaveForLater(movie));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-5">
          <img src={movie.thumbnail} alt={movie.title} className="img-thumbnail" />
        </div>
        <div className="col-md-7">
          <h5>{movie.title}</h5>
          <p>{movie.description}</p>
          <p>Price: ${movie.price}</p>
          <button className="btn btn-primary" onClick={handleSaveForLater}>Save for Later</button>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;
