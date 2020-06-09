import React from 'react';
import './App.css';
import Subject from './subject.js';

function App() {
  return (
    <div className="App">
      <Subject subjectName='Algorithms' semester='1st' />
      <hr/>
      <Subject subjectName='Data Structures' semester='2nd' />
      <hr/>
      <Subject subjectName='React' semester='3rd' />
      <hr/>
      <Subject subjectName='NodeJS' semester='4th' />
    </div>
  );
}

export default App;
