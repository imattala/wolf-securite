import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes, NavLink, Link, useLocation } from 'react-router-dom';
import { FaShieldAlt, FaBars, FaTimes } from 'react-icons/fa';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import StickyCallBar from './StickyCallBar';
import './Nav.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="site">
        <nav className="navbar" ref={navRef}>
          <div className="nav-container">
            <Link to="/" onClick={closeMenu} className="logo">
              <FaShieldAlt className="logo-icon" />
              Wolf Sécurité
            </Link>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul className={menuOpen ? "nav-list open" : "nav-list"}>
              <li>
                <NavLink end to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>À propos</NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <StickyCallBar />
      </div>
    </Router>
  );
};

export default App;
