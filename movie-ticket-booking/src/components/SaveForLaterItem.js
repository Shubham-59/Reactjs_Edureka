// src/components/SaveForLaterItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromSaveForLater } from '../redux/actions/saveForLaterActions';
// import './SaveForLaterItem.css';

const SaveForLaterItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromSaveForLater(item.id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-5">
          <img src={item.thumbnail} alt={item.title} className="img-thumbnail" />
        </div>
        <div className="col-md-7">
          <h5>{item.title}</h5>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <button className="btn btn-danger" onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </li>
  );
};

export default SaveForLaterItem;
