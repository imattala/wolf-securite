// src/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <FaShieldAlt />
            <span>Wolf Sécurité</span>
          </div>
          <p>
            Protection sur mesure pour chantiers, événements, bureaux et entrepôts.
            Des agents qualifiés à votre service, 24h/24 et 7j/7.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <FaEnvelope />
              <a href="mailto:hamelwolfsecurite@gmail.com">hamelwolfsecurite@gmail.com</a>
            </li>
            <li>
              <FaPhoneAlt />
              <a href="tel:+33784707152">+33 7 84 70 71 52</a>
            </li>
            <li>
              <FaMapMarkerAlt />
              <span>14 Place Claudel, 78180 Montigny-le-Bretonneux</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Wolf Sécurité. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
