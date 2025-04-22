// src/About.js
import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About XYZ Security Services</h1>
        <p>Providing top-tier security solutions for your business, people, and assets.</p>
      </header>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          At XYZ Security, our mission is simple: to offer trusted, professional security services tailored to your
          needs. We aim to provide peace of mind to businesses, ensuring a safe environment for both employees and
          customers. Our security guards are highly trained and dedicated to maintaining safety at all times.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>Professionalism: We pride ourselves on providing highly trained, reliable security staff.</li>
          <li>Integrity: We operate with transparency and honesty, ensuring trust with our clients.</li>
          <li>Responsibility: Our team takes its duty to protect very seriously, ensuring your safety comes first.</li>
        </ul>

        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
            <p>John founded XYZ Security with the goal of providing top-quality security services for businesses. With over 20 years of experience in the security industry, John leads the company with a strong vision and dedication to excellence.</p>
          </div>
          <div className="team-member">
            <h3>Jane Smith</h3>
            <p>Operations Manager</p>
            <p>Jane ensures that our security operations run smoothly and efficiently, overseeing the day-to-day activities of our security personnel and coordinating with clients to meet their needs.</p>
          </div>
          <div className="team-member">
            <h3>Michael Brown</h3>
            <p>Security Expert</p>
            <p>With a background in law enforcement and security management, Michael is an expert in assessing risks and creating security strategies tailored to the unique needs of each client.</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>Want to learn more? <a href="/contact">Contact us</a> for more information.</p>
      </footer>
    </div>
  );
};

export default About;
