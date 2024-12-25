import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';

const WeddingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && 
          !navRef.current.contains(event.target) && 
          isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="nav-brand">
        <h1>Sagar and Priya</h1>
      </div>
      
      <button 
        className="mobile-menu-button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a onClick={() => scrollToSection('home')}>Home</a>
        <a onClick={() => scrollToSection('gallery')}>Gallery</a>
        <a onClick={() => scrollToSection('event')}>Events</a>
        <a onClick={() => scrollToSection('highlights')}>Highlights</a>
      </div>
    </nav>
  );
};

export default WeddingNavbar;