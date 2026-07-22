// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import {
  FaHardHat,
  FaCalendarAlt,
  FaBuilding,
  FaClock,
  FaUserShield,
  FaBolt,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
} from 'react-icons/fa';

const stats = [
  { value: '10+', label: "Années d'expérience" },
  { value: '50+', label: 'Agents qualifiés' },
  { value: '200+', label: 'Clients protégés' },
  { value: '24/7', label: 'Disponibilité' },
];

const testimonials = [
  {
    quote: "Une équipe très professionnelle et réactive. Nos chantiers n'ont plus connu le moindre incident depuis que Wolf Sécurité assure la surveillance.",
    name: 'Responsable de chantier',
    role: 'Secteur BTP',
  },
  {
    quote: "Ils ont sécurisé notre événement de A à Z, avec un vrai sens du service et du contact client. Nous les recommandons sans hésiter.",
    name: 'Organisatrice d’événements',
    role: 'Secteur événementiel',
  },
  {
    quote: "Agents ponctuels, sérieux et à l'écoute. La tranquillité d'esprit qu'ils nous apportent au quotidien n'a pas de prix.",
    name: 'Directeur des opérations',
    role: 'Secteur tertiaire',
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="section-eyebrow hero-eyebrow">Sécurité privée &bull; Île-de-France</span>
          <h1>Votre partenaire de confiance en sécurité</h1>
          <p>
            Protection sur mesure pour chantiers, événements, bureaux et entrepôts.
            Nos agents qualifiés veillent sur vos biens 24h/24 et 7j/7.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Demander un devis</Link>
            <Link to="/services" className="btn btn-outline">Découvrir nos services</Link>
          </div>
        </div>
      </header>

      <section className="badges">
        <div className="container badges-grid">
          <div className="badge-item">
            <FaClock />
            <span>Disponible 24h/24 &amp; 7j/7</span>
          </div>
          <div className="badge-item">
            <FaUserShield />
            <span>Agents formés &amp; qualifiés</span>
          </div>
          <div className="badge-item">
            <FaBolt />
            <span>Intervention rapide</span>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-content">
        <div className="container">
          <span className="section-eyebrow">Nos domaines d'expertise</span>
          <h2>Une protection adaptée à chaque environnement</h2>
          <p className="section-intro">
            Protection sur mesure pour chantiers, événements, bureaux et entrepôts.
            Nos agents qualifiés veillent sur vos biens 24h/24 et 7j/7.
          </p>

          <div className="service-cards">
            <div className="service-card">
              <div className="service-icon"><FaHardHat /></div>
              <h3>Protection de chantiers</h3>
              <p>Nous assurons la sécurité complète de vos chantiers grâce à des agents qualifiés et des dispositifs de surveillance adaptés. Notre objectif est de prévenir le vol, le vandalisme et tout incident, pour que vos projets avancent en toute sérénité.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaCalendarAlt /></div>
              <h3>Sécurisation d'événements</h3>
              <p>Nous garantissons la sécurité de vos événements en mettant en place des équipes professionnelles et des dispositifs de contrôle adaptés. Qu'il s'agisse de concerts, salons ou conférences, nous veillons à ce que vos invités et vos installations soient protégés, pour un événement sûr et réussi.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaBuilding /></div>
              <h3>Protection des bureaux et entrepôts</h3>
              <p>Nous assurons la sécurité de vos locaux professionnels et entrepôts grâce à des agents formés et des systèmes de surveillance performants. Notre mission est de prévenir les intrusions, vols et incidents, afin que vos activités se déroulent en toute tranquillité.</p>
            </div>
          </div>

          <div className="services-more">
            <Link to="/services" className="link-arrow">
              Voir tous nos services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <span className="section-eyebrow">Ils nous font confiance</span>
          <h2>Ce que disent nos clients</h2>

          <div className="testimonial-cards">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.name}>
                <FaQuoteLeft className="testimonial-quote-icon" />
                <div className="testimonial-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="testimonial-text">{testimonial.quote}</p>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-content">
          <h2>Besoin d'une solution de sécurité fiable ?</h2>
          <p>Contactez notre équipe pour une évaluation gratuite de vos besoins.</p>
          <Link to="/contact" className="btn btn-primary">Nous contacter</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
