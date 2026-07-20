// src/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import {
  FaHardHat,
  FaCalendarAlt,
  FaBuilding,
  FaCar,
  FaBell,
  FaClipboardCheck,
  FaVideo,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaHardHat />,
    title: 'Protection de chantiers',
    text: "Nous assurons la sécurité complète de vos chantiers grâce à des agents qualifiés et des dispositifs de surveillance adaptés, pour prévenir le vol, le vandalisme et tout incident.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Sécurisation d'événements",
    text: "Concerts, salons ou conférences : nos équipes professionnelles et nos dispositifs de contrôle garantissent la sécurité de vos invités et de vos installations.",
  },
  {
    icon: <FaBuilding />,
    title: 'Protection des bureaux et entrepôts',
    text: "Des agents formés et des systèmes de surveillance performants pour prévenir les intrusions, vols et incidents dans vos locaux professionnels.",
  },
  {
    icon: <FaCar />,
    title: 'Rondes de surveillance',
    text: "Nos rondes mobiles couvrent de grandes surfaces avec des passages aléatoires et une surveillance régulière, pour dissuader le vol et le vandalisme.",
  },
  {
    icon: <FaBell />,
    title: 'Télésurveillance 24h/24',
    text: "Votre site est surveillé en continu et toute alerte est traitée immédiatement par notre équipe de sécurité.",
  },
  {
    icon: <FaClipboardCheck />,
    title: 'Évaluation des risques',
    text: "Un audit complet des vulnérabilités de votre site, suivi de recommandations concrètes pour renforcer votre dispositif de sécurité.",
  },
  {
    icon: <FaVideo />,
    title: 'Systèmes de vidéosurveillance',
    text: "Installation et maintenance de systèmes de vidéosurveillance avancés pour une protection continue de vos locaux.",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <header className="page-hero">
        <div className="container">
          <span className="section-eyebrow hero-eyebrow">Wolf Sécurité</span>
          <h1>Nos services de sécurité</h1>
          <p>Des solutions de sécurité professionnelles, adaptées à vos besoins.</p>
        </div>
      </header>

      <section className="services-section">
        <div className="container">
          <div className="container narrow">
            <span className="section-eyebrow">Notre expertise</span>
            <h2>Une protection complète, sur tous les fronts</h2>
            <p className="section-intro">
              Chez Wolf Sécurité, nous proposons une gamme complète de services pour assurer la sécurité de vos biens,
              de vos équipes et de vos visiteurs. Que ce soit pour un chantier, un entrepôt ou un événement, notre
              équipe est prête à offrir le plus haut niveau de service.
            </p>
          </div>

          <div className="service-cards">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <p>Intéressé par nos services ? <Link to="/contact">Contactez-nous</Link> pour discuter de vos besoins en sécurité.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
