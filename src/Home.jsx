import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="section-content">
      <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Alejandro Rodríguez, an electronics enthusiast specializing in IoT and DIY projects.
      This portfolio showcases my work in embedded systems, circuit design, and innovative tech solutions.</p>
      <div className="tech-stack">
        <h3>Technologies and Tools I Work With:</h3>
        <div className="tech-icons">
          <span>Arduino</span>
          <span>KiCad</span>
          <span>STMicroelectronics</span>
          <span>Espressif</span>
          <span>Python</span>
          <span>C/C++</span>
          <span>Java</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;