import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/TextForm'; // 👈 Your text utility page
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // 🌍 Apply background to entire page
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#042743' : 'white';
    document.body.style.color = mode === 'dark' ? 'white' : '#042743';
  }, [mode]);

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
