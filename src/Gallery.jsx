import React, { useRef, useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const velocityRef = useRef(0);
  const animationRef = useRef(null);

  // Generate random size for each project with better distribution
  const getRandomSize = (index) => {
    const sizes = ['size-1x1', 'size-1x2', 'size-2x1', 'size-2x2'];
    // Use a better hash function for more random-looking distribution
    const hash = Math.abs((index * 73856093) ^ (index * 19349663) ^ (index * 83492791));
    return sizes[hash % sizes.length];
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.pageY - galleryRef.current.offsetTop);
    setScrollTop(galleryRef.current.scrollTop);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    velocityRef.current = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.pageY - galleryRef.current.offsetTop;
    const walk = (y - startY);
    const newScrollTop = scrollTop - walk;
    galleryRef.current.scrollTop = newScrollTop;
    velocityRef.current = (scrollTop - newScrollTop) / 16; // Calculate velocity
  };

  React.useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="section-content">
      <div className="gallery-container-wrapper">
        <h1>Project Gallery</h1>
        <div
          className="gallery-grid"
          ref={galleryRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {Array.from({ length: 55 }, (_, i) => (
          <div
            key={i + 1}
            className={`gallery-item ${getRandomSize(i)}`}
          >
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Gallery;
