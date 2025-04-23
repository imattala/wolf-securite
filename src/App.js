// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import './Nav.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div>
      <nav className="navbar">
            <div className="nav-container">
              <NavLink to="/" className="logo">
                XYZ
              </NavLink>
              <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
              </button>
              <ul className={menuOpen ? "nav-list open" : "nav-list"}>
                <li>
                  <NavLink exact="true" to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                </li>
              </ul>
            </div>
      </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
