import React from 'react';
import './App.css';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import First1 from './First1';
import Second1 from './Second1';
import Third1 from './Third1';
import Fourth1 from './Fourth1';
import StudentFunction from './StudentFunction';
import StudentClass from './StudentClass';
import Display from './Display';
import Buttons from './Buttons';

function App() {
  const studentInfo = {
    name: 'Shubham',
    address: 'Pune',
    scores: [95, 85, 90]
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <First />
      <Second />
      <Third />
      <Fourth />
      <First1 />
      <Second1 />
      <Third1 />
      <Fourth1 />
      <StudentFunction {...studentInfo} />
      <StudentClass {...studentInfo} />
      <Display name={studentInfo.name} address={studentInfo.address} />
      <Buttons />
    </div>
  );
}

export default App;
