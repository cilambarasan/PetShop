
import React from 'react';
import './Contact.css';

const Contact = () => (
  <div id="contact" className="contact">
    <h2>Contact Us</h2>
    <p>Email: info@petshop.com</p>
    <p>Phone: +123 456 7890</p>
    <div className="map-container">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?..."
        className="map"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default Contact;
