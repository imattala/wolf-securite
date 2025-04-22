// src/Services.js
import React from 'react';
import './Services.css'; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Our Security Services</h1>
        <p>Professional security solutions tailored to your needs.</p>
      </header>

      <section className="services-content">
        <h2>Our Expertise</h2>
        <p>
          At XYZ Security, we offer a range of security services designed to keep your property, people, and assets safe.
          Whether you need security for a shopping mall, warehouse, or private property, our team is ready to provide the
          highest level of service.
        </p>

        <div className="service-cards">
          <div className="service-card">
            <h3>On-Site Security Guards</h3>
            <p>
              Our trained security guards are available for on-site services, providing a visible and effective deterrent to
              criminal activity, ensuring the safety of your staff, customers, and assets.
            </p>
          </div>

          <div className="service-card">
            <h3>Mobile Patrols</h3>
            <p>
              Our mobile patrols offer security for larger areas, providing random checks and regular surveillance at your
              premises. This service helps to prevent theft, vandalism, and other security threats.
            </p>
          </div>

          <div className="service-card">
            <h3>Event Security</h3>
            <p>
              Ensure your event is safe and secure with our experienced event security personnel. We manage crowd control,
              monitor entrances, and ensure the safety of your attendees.
            </p>
          </div>

          <div className="service-card">
            <h3>24/7 Alarm Monitoring</h3>
            <p>
              With our 24/7 alarm monitoring service, we ensure that your property is constantly monitored, and any alerts are
              promptly responded to by our security team.
            </p>
          </div>

          <div className="service-card">
            <h3>Risk Assessment</h3>
            <p>
              We offer professional security risk assessments to evaluate your property's vulnerabilities. Based on our findings,
              we provide customized recommendations to improve your security systems.
            </p>
          </div>

          <div className="service-card">
            <h3>Surveillance Systems</h3>
            <p>
              Our team can help you install and maintain advanced CCTV systems that provide continuous surveillance of your
              property to ensure round-the-clock security.
            </p>
          </div>
        </div>
      </section>

      <footer className="services-footer">
        <p>Interested in our services? <a href="/contact">Contact us</a> to discuss your security needs.</p>
      </footer>
    </div>
  );
};

export default Services;
