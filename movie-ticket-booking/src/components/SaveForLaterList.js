// src/components/SaveForLaterList.js
import React from 'react';
import { useSelector } from 'react-redux';
import SaveForLaterItem from './SaveForLaterItem';
// import './SaveForLaterList.css';

const SaveForLaterList = () => {
  const saveForLater = useSelector((state) => state.saveForLater);

  return (
    <div className="save-for-later-list">
      <h3>Save For Later</h3>
      <ul className="list-group">
        {saveForLater.map((item) => (
          <SaveForLaterItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default SaveForLaterList;
