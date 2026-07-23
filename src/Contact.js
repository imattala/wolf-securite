import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'Quels types de sites protégez-vous ?',
    answer: "Nous intervenons sur les chantiers, événements, bureaux et entrepôts, ainsi que sur tout site nécessitant une surveillance ou un gardiennage sur mesure.",
  },
  {
    question: 'Intervenez-vous en urgence, en dehors des horaires classiques ?',
    answer: "Oui, notre équipe est disponible 24h/24 et 7j/7, y compris les week-ends et jours fériés, pour toute intervention urgente.",
  },
  {
    question: 'Vos agents sont-ils qualifiés et certifiés ?',
    answer: "Tous nos agents sont formés, expérimentés et titulaires des cartes professionnelles requises par la réglementation en vigueur.",
  },
  {
    question: 'Comment obtenir un devis ?',
    answer: "Contactez-nous par téléphone, email ou via cette page : nous réalisons une évaluation gratuite de vos besoins avant de vous proposer une offre adaptée.",
  },
  {
    question: 'Dans quelles zones intervenez-vous ?',
    answer: "Nous couvrons l'Île-de-France dans son ensemble. Contactez-nous pour vérifier la disponibilité de nos équipes près de chez vous.",
  },
];

const Contact = () => {
  const address = '14 Place Claudel, 78180 Montigny-le-Bretonneux';
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

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

      <section className="faq-section">
        <div className="container narrow">
          <span className="section-eyebrow">Questions fréquentes</span>
          <h2>Vous avez des questions ?</h2>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div className={isOpen ? "faq-item open" : "faq-item"} key={faq.question}>
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown className="faq-chevron" />
                  </button>
                  {isOpen && <p className="faq-answer">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
