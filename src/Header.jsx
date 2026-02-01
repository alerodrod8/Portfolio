import React from 'react';
import './Header.css';

const Header = ({ onSectionChange, isDarkMode, onToggleDarkMode }) => {
  const handleNavClick = (sectionId) => {
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
  };

  return (
    <>
      <button className="theme-toggle" onClick={onToggleDarkMode}>
        {isDarkMode ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="4"/>
            <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        )}
        <span className="text">Change Appearance</span>
      </button>
      <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
              <span className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
              <span className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </span>
              <span className="text">About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#upcoming-projects" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('upcoming-projects'); }}>
              <span className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  <circle cx="16" cy="6" r="3" fill="none" stroke="currentColor" stroke-width="1"/>
                  <line x1="16" y1="6" x2="16" y2="4" stroke="currentColor" stroke-width="1"/>
                  <line x1="16" y1="6" x2="17.5" y2="6" stroke="currentColor" stroke-width="1"/>
                </svg>
              </span>
              <span className="text">Upcoming Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#gallery" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }}>
              <span className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="4" width="6" height="6"/>
                  <rect x="12" y="4" width="6" height="6"/>
                  <rect x="4" y="12" width="6" height="6"/>
                  <rect x="12" y="12" width="6" height="6"/>
                </svg>
              </span>
              <span className="text">Gallery</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
              <span className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </span>
              <span className="text">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;