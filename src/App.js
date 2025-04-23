import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Link } from 'react-router-dom'; // Add Link here
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import './Nav.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null); // Create a ref for the nav menu

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu if the click is outside of it
      }
    };

    // Add the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div>
        <nav className="navbar" ref={navRef}>
          <div className="nav-container">
            {/* Wrap the logo with a Link component to navigate to the home page */}
            <Link to="/" onClick={() => setMenuOpen(false)} className="logo">
              XYZ
            </Link>
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
