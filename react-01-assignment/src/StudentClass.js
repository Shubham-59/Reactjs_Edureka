import React, { Component } from 'react';

class StudentClass extends Component {
  render() {
    const { name, address, scores } = this.props;
    return (
      <div className="component-container">
        <h2>Student Information (Class Component)</h2>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>Scores: {scores.join(', ')}</p>
      </div>
    );
  }
}

export default StudentClass;
