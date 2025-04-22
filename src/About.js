// src/About.js
import React from 'react';
import './About.css'; // Import the CSS file for styling

// 📸 Import your images here:
import johnPhoto from './assets/member1.jpg';
import janePhoto from './assets/member2.jpg';
import michaelPhoto from './assets/member2.jpg';

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
          needs. We aim to provide peacee of mind to businesses, ensuring a safe environment for both employees and
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
            {/* 📸 Add photo for John Doe */}
            <img src={johnPhoto} alt="John Doe" className="team-photo" />
            <h3>Faical ATTALA</h3>
            <p>Founder & CEO</p>
            <p>Faical founded XYZ Security with the goal of providing top-quality security services for businesses. With over 20 years of experience in the security industry, John leads the company with a strong vision and dedication to excellence.</p>
          </div>

          <div className="team-member">
            {/* 📸 Add photo for Jane Smith */}
            <img src={janePhoto} alt="Jane Smith" className="team-photo" />
            <h3>Ibrahim ATTALA</h3>
            <p>Operations Manager</p>
            <p>Ibrahim ensures that our security operations run smoothly and efficiently, overseeing the day-to-day activities of our security personnel and coordinating with clients to meet their needs.</p>
          </div>

          <div className="team-member">
            {/* 📸 Add photo for Michael Brown */}
            <img src={michaelPhoto} alt="Michael Brown" className="team-photo" />
            <h3>Amin BAHMANI</h3>
            <p>Security Expert</p>
            <p>With a background in law enforcement and security management, Amin is an expert in assessing risks and creating security strategies tailored to the unique needs of each client.</p>
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
