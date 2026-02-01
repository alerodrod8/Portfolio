import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="section-content">
      <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Let's connect!</p>
      <div className="contact-info">
        <p>Email: rr.alejandrorodriguez@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/alejandro-rodriguez-b49932343/" target="_blank">Alejandro Rodríguez</a></p>
        <p>Instagram: <a href="https://www.instagram.com/Arodriguez.rr" target="_blank">@Arodriguez.rr</a></p>
      </div>
      </div>
    </div>
  );
};

export default Contact;