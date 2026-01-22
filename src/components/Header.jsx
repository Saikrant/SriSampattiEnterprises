import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /* 🔹 IN-PAGE NAVIGATION INTELLIGENCE */
  useEffect(() => {
    const sections = ['home', 'products', 'features', 'process', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // offset for fixed header

      for (let section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo">
          <span className="logo-text" style={{ fontSize: '1.2rem' }}>
            Sri Sampatti Enterprises
          </span>
        </a>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => handleNavClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#products"
                className={activeSection === 'products' ? 'active' : ''}
                onClick={() => handleNavClick('products')}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#features"
                className={activeSection === 'features' ? 'active' : ''}
                onClick={() => handleNavClick('features')}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#process"
                className={activeSection === 'process' ? 'active' : ''}
                onClick={() => handleNavClick('process')}
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary">
          Get Quote
        </a>

        <button
          className="mobile-menu-btn"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
