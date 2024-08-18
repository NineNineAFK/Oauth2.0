// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OpenHomepage from './components/OpenHomepage';
import HomePage from './components/HomePage';
import GoogleAuth from './components/GoogleAuth';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<OpenHomepage />} />
          <Route path="/auth/google/callback" element={<GoogleAuth />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/open" element={<OpenHomepage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
