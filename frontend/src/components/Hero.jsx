import React, { useState } from 'react';
import { Mail, FileText, ExternalLink, MapPin, Copy, Check, ArrowRight, Lock } from 'lucide-react';

export default function Hero({ profile, isResumeUnlocked, onOpenResume, showToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    showToast('Email address copied to clipboard', 'success');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        {/* Left: Bio & Professional Introduction */}
        <div className="hero-content">
          <div className="availability-badge">
            <span className="status-dot"></span>
            <span>Software Developer</span>
          </div>

          <h1 className="hero-title">
            Mounika N
          </h1>

          <p className="hero-subtitle">
            Full-Stack Software Developer specializing in <span className="highlight-text">C#</span>, <span className="highlight-text">ASP.NET Core</span>, <span className="highlight-text">Angular</span>, <span className="highlight-text">React</span>, and <span className="highlight-text">PostgreSQL</span>.
          </p>

          <p className="hero-description">
            With close to 4 years of experience, I build production-grade web applications, design clean RESTful APIs, and deliver scalable back-end solutions using microservices architecture and modern front-end frameworks.
          </p>

          {/* Clean Contact Row */}
          <div className="hero-contact-row">
            <button className="contact-chip" onClick={copyEmail} title="Copy Email">
              <Mail size={15} />
              <span>{profile.email}</span>
              {copiedEmail ? <Check size={14} className="icon-success" /> : <Copy size={13} className="icon-muted" />}
            </button>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-chip link-chip"
              title="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
              <ExternalLink size={13} className="icon-muted" />
            </a>

            <div className="contact-chip location-chip">
              <MapPin size={15} />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={15} />
            </a>
            <button onClick={onOpenResume} className="btn btn-secondary">
              {isResumeUnlocked ? <FileText size={15} /> : <Lock size={14} />}
              <span>{isResumeUnlocked ? 'View Resume' : 'Unlock Resume'}</span>
            </button>
            <a href="#contact" className="btn btn-tertiary">
              <Mail size={15} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Right: Clean Professional Engineering Highlights Card */}
        <div className="hero-profile-card">
          <div className="card-header-clean">
            <span className="card-tag">Technical Profile</span>
            <span className="card-experience">{profile.experienceYears} Exp</span>
          </div>

          <div className="card-body-clean">
            <div className="profile-spec-item">
              <span className="spec-label">Core Backend</span>
              <span className="spec-value">C#, ASP.NET Core, EF Core, LINQ, Web APIs</span>
            </div>

            <div className="profile-spec-item">
              <span className="spec-label">Front-End</span>
              <span className="spec-value">Angular, React, JavaScript (ES6+), HTML5, CSS3</span>
            </div>

            <div className="profile-spec-item">
              <span className="spec-label">Database</span>
              <span className="spec-value">PostgreSQL, SQL, LinqDB</span>
            </div>

            <div className="profile-spec-item">
              <span className="spec-label">Architecture</span>
              <span className="spec-value">Microservices, REST API Design, Clean Architecture</span>
            </div>

            <div className="profile-spec-item">
              <span className="spec-label">Workflow &amp; Tools</span>
              <span className="spec-value">Azure DevOps Boards, Jira, Git, Agile Cadence</span>
            </div>
          </div>

          <div className="card-footer-clean">
            <div className="footer-status-pill">
              <span className="dot-active"></span>
              <span>Available for full-stack engineering roles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="container metrics-strip">
        {profile.stats.map((stat, idx) => (
          <div key={idx} className="metric-box">
            <div className="metric-number-row">
              <span className="metric-value">{stat.number}</span>
              {stat.suffix && <span className="metric-suffix">{stat.suffix}</span>}
            </div>
            <span className="metric-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
