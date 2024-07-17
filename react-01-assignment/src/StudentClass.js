import React from 'react';

const StudentFunction = ({ name, address, scores }) => {
  return (
    <div className="component-container">
      <h2>Student Information (Function Component)</h2>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Scores: {scores.join(', ')}</p>
    </div>
  );
};

export default StudentFunction;
