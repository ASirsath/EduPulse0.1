import React from 'react';
import CollegeFinder from './pages/CollegeFinder';

const App = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 text-primary display-4 fw-bold animate__animated animate__fadeInDown">EduPulse - Smart College Finder</h1>
      <CollegeFinder />
    </div>
  );
};

export default App;