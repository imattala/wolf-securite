import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const address = '14 Place Claudel, 78180 Montigny-le-Bretonneux';

  return (
    <div className="contact-page">
      <header className="page-hero">
        <div className="container">
          <span className="section-eyebrow hero-eyebrow">Wolf Sécurité</span>
          <h1>Contactez-nous</h1>
          <p>Une question, un projet ? Notre équipe vous répond rapidement.</p>
        </div>
      </header>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <a className="contact-card" href="mailto:hamelwolfsecurite@gmail.com">
              <div className="contact-icon"><FaEnvelope /></div>
              <h3>Email</h3>
              <p>hamelwolfsecurite@gmail.com</p>
            </a>

            <a className="contact-card" href="tel:+33784707152">
              <div className="contact-icon"><FaPhoneAlt /></div>
              <h3>Téléphone</h3>
              <p>+33 7 84 70 71 52</p>
            </a>

            <a
              className="contact-card"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <h3>Adresse</h3>
              <p>{address}</p>
            </a>

            <div className="contact-card contact-card-static">
              <div className="contact-icon"><FaClock /></div>
              <h3>Disponibilité</h3>
              <p>24h/24 et 7j/7</p>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="Localisation Wolf Sécurité"
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
