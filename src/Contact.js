// src/Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Get in touch with us for more information.</p>
      </header>

      <section className="contact-content">
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>If you have any questions or need more information, feel free to reach out to us.</p>
          <ul>
            <li><strong>Email:</strong> info@xyzsecurity.com</li>
            <li><strong>Phone:</strong> +1 (123) 456-7890</li>
            <li><strong>Address:</strong> 123 Security St, City, Country</li>
          </ul>
        </div>
      </section>

      <footer className="contact-footer">
        <p>Looking forward to hearing from you!</p>
      </footer>
    </div>
  );
};

export default Contact;
