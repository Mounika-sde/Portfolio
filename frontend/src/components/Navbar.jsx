import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Send, Menu, X, Lock } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, isResumeUnlocked, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollY = window.pageYOffset;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand */}
        <a href="#hero" className="brand-logo" aria-label="Mounika Homepage">
          <span className="brand-name">Mounika N</span>
          <span className="brand-role">Software Developer</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="main-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}>
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="theme-btn" 
            aria-label="Toggle theme" 
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Resume */}
          <button onClick={onOpenResume} className="btn btn-outline btn-sm">
            {isResumeUnlocked ? <FileText size={14} /> : <Lock size={13} />}
            <span>{isResumeUnlocked ? 'Resume' : 'Resume'}</span>
          </button>

          {/* Contact */}
          <a href="#contact" className="btn btn-primary btn-sm">
            <Send size={13} />
            <span>Contact</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div id="mobile-navigation-drawer" className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li><a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="mobile-drawer-actions">
          <button 
            className="btn btn-outline btn-full" 
            onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
          >
            <FileText size={15} /> {isResumeUnlocked ? 'View Resume' : 'Unlock Resume'}
          </button>
          <a 
            href="#contact" 
            className="btn btn-primary btn-full" 
            onClick={() => setMobileMenuOpen(false)}
          >
            <Send size={15} /> Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
