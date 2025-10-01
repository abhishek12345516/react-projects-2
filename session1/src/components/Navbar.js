import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ mode, toggleMode }) {
  const location = useLocation();

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        {/* 🔗 Brand */}
        <Link className="navbar-brand fw-bold" to="/">Words Counter</Link>

        {/* 📱 Navbar toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 🧭 Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          {/* 🌗 Dark Mode Toggle */}
          <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="modeSwitch"
              onChange={toggleMode}
              checked={mode === 'dark'}
            />
            <label className="form-check-label ms-2" htmlFor="modeSwitch">
              {mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
