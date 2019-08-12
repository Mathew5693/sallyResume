import React from 'react';
import './App.css';
import ContactInfo from './composition/resumeContact';
import Edu from './composition/resumeEducation';
import WorkExp from './composition/resumeWorkExp';

function App() {
  return (
    <div className="App">
      <ContactInfo />
      <Edu />
      <WorkExp />
    </div>
  );
}

export default App;
