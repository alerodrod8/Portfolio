import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="section-content">
      <h1>Project Gallery</h1>
      <p>Showcase of completed projects and prototypes.</p>
      <div className="gallery-grid">
        <div className="gallery-item">Project 1</div>
        <div className="gallery-item">Project 2</div>
        <div className="gallery-item">Project 3</div>
        <div className="gallery-item">Project 4</div>
      </div>
    </div>
  );
};

export default Gallery;