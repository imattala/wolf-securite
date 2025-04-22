// src/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to XYZ Security Services</h1>
        <p>Your trusted security partner for supermarkets, malls, and more.</p>
      </header>

      <section className="home-content">
        <h2>About Us</h2>
        <p>
          We provide professional security guard services to ensure the safety and protection of your business. Our
          experienced security team is dedicated to offering top-notch service in a variety of environments, including
          retail stores, malls, and more.
        </p>

        <div className="service-cards">
          <div className="service-card">
            <h3>Supermarket Security</h3>
            <p>Ensure the safety of your customers and employees with our supermarket security services.</p>
          </div>
          <div className="service-card">
            <h3>Mall Security</h3>
            <p>Our guards are trained to handle high-traffic areas and provide a secure environment in shopping malls.</p>
          </div>
          <div className="service-card">
            <h3>Event Security</h3>
            <p>We offer security services for special events and gatherings, ensuring a safe atmosphere for all attendees.</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <h3>Contact Us</h3>
        <p>Email: contact@xyzsecurity.com</p>
        <p>Phone: +123-456-7890</p>
      </footer>
    </div>
  );
};

export default Home;
