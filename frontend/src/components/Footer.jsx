import React from 'react';
import { Mail, ArrowUp, MapPin } from 'lucide-react';

export default function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Brand & Summary */}
        <div className="footer-brand">
          <a href="#hero" className="brand-logo">
            <span className="logo-name">Mounika N</span>
          </a>
          <p className="footer-tagline">
            Full-Stack Software Developer building clean, maintainable web applications using C#, .NET Core, Angular, React &amp; PostgreSQL.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="footer-nav-col">
          <h4>Navigation</h4>
          <ul className="footer-nav">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Links */}
        <div className="footer-connect-col">
          <h4>Contact</h4>
          <div className="footer-contact-links">
            <a href={`mailto:${profile.email}`} className="footer-link-item">
              <Mail size={15} />
              <span>{profile.email}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              <i className="fa-brands fa-linkedin-in"></i>
              <span>LinkedIn Profile</span>
            </a>
            <div className="footer-link-item location-item">
              <MapPin size={15} />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <button className="back-to-top-clean" onClick={scrollToTop} aria-label="Scroll to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
