import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="section-content">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Alejandro Rodríguez, an electronics enthusiast specializing in IoT and DIY projects.
      This portfolio showcases my work in embedded systems, circuit design, and innovative tech solutions.</p>
      <div className="tech-stack">
        <h3>Technologies I Work With:</h3>
        <div className="tech-icons">
          <span>Arduino</span>
          <span>Raspberry Pi</span>
          <span>ESP32</span>
          <span>Python</span>
          <span>C++</span>
          <span>React</span>
        </div>
      </div>
    </div>
  );
};

export default Home;