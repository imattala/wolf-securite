// src/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { FaAward, FaHandshake, FaShieldAlt } from 'react-icons/fa';

import defaultAvatar from './assets/default-avatar.svg';

const values = [
  {
    icon: <FaAward />,
    title: 'Professionnalisme',
    text: "Nous sommes fiers de fournir des agents de sécurité hautement formés et fiables.",
  },
  {
    icon: <FaHandshake />,
    title: 'Intégrité',
    text: "Nous agissons avec transparence et honnêteté, pour construire une relation de confiance durable avec nos clients.",
  },
  {
    icon: <FaShieldAlt />,
    title: 'Responsabilité',
    text: "Notre équipe prend sa mission de protection très au sérieux : votre sécurité est notre priorité absolue.",
  },
];

const team = [
  {
    photo: defaultAvatar,
    name: 'Faical ATTALA',
    role: 'Fondateur & Directeur Général',
    bio: "Faical a fondé Wolf Sécurité avec l'ambition d'offrir des services de sécurité de premier ordre aux entreprises. Fort de plus de 20 ans d'expérience dans le secteur, il dirige l'entreprise avec une vision forte et une exigence constante d'excellence.",
  },
  {
    photo: defaultAvatar,
    name: 'Ibrahim ATTALA',
    role: 'Responsable des Opérations',
    bio: "Ibrahim veille au bon déroulement des opérations de sécurité au quotidien, supervise les équipes sur le terrain et coordonne les échanges avec les clients pour répondre au mieux à leurs besoins.",
  },
  {
    photo: defaultAvatar,
    name: 'Amin BAHMANI',
    role: 'Expert en Sécurité',
    bio: "Fort d'une expérience dans les forces de l'ordre et la gestion de la sécurité, Amin est spécialiste de l'évaluation des risques et conçoit des stratégies de sécurité adaptées aux besoins spécifiques de chaque client.",
  },
];

const About = () => {
  return (
    <div className="about-page">
      <header className="page-hero">
        <div className="container">
          <span className="section-eyebrow hero-eyebrow">Wolf Sécurité</span>
          <h1>À propos de nous</h1>
          <p>Fournir des solutions de sécurité de premier ordre pour votre entreprise, vos collaborateurs et vos biens.</p>
        </div>
      </header>

      <section className="about-section">
        <div className="container narrow">
          <span className="section-eyebrow">Notre mission</span>
          <h2>Une tranquillité d'esprit, à chaque instant</h2>
          <p>Chez Wolf Sécurité, notre mission est simple : offrir des services de sécurité fiables et professionnels, adaptés à vos besoins. Nous visons à assurer la tranquillité d'esprit des entreprises, en garantissant un environnement sûr pour vos collaborateurs et vos clients. Nos agents de sécurité sont hautement qualifiés et dévoués à maintenir la sécurité en toutes circonstances.</p>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <span className="section-eyebrow">Nos valeurs</span>
          <h2>Ce qui nous définit</h2>
          <div className="values-grid">
            {values.map((value) => (
              <div className="value-card" key={value.title}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <span className="section-eyebrow">L'équipe</span>
          <h2>Rencontrez notre équipe</h2>
          <div className="team-members">
            {team.map((member) => (
              <div className="team-member" key={member.name}>
                <img src={member.photo} alt={member.name} className="team-photo" />
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <p>Envie d'en savoir plus ? <Link to="/contact">Contactez-nous</Link> pour plus d'informations.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
