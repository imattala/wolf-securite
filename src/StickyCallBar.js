import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './StickyCallBar.css';

const StickyCallBar = () => (
  <a href="tel:+33784707152" className="sticky-call-bar">
    <FaPhoneAlt />
    <span>Appeler maintenant</span>
  </a>
);

export default StickyCallBar;
