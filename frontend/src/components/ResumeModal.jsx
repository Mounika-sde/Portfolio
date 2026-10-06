import React from 'react';
import { X, Printer, FileText, MapPin, Mail, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-title">
            <FileText size={18} />
            <h3>Resume — {data.profile.name}</h3>
          </div>
          <div className="modal-header-actions">
            <button className="btn btn-primary btn-sm" onClick={handlePrint} title="Print or Save as PDF">
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="modal-body resume-printable-body" id="printable-resume">
          {/* Header */}
          <header className="resume-header">
            <h1 className="resume-name">{data.profile.name}</h1>
            <div className="resume-contact-line">
              <span><MapPin size={12} className="inline mr-1" /> {data.profile.location}</span>
              <span className="sep">•</span>
              <a href={`mailto:${data.profile.email}`}><Mail size={12} className="inline mr-1" /> {data.profile.email}</a>
              <span className="sep">•</span>
              <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={12} className="inline mr-1" /> {data.profile.linkedinDisplay}
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="resume-section">
            <h2 className="resume-section-title">PROFESSIONAL SUMMARY</h2>
            <p className="resume-text">{data.profile.summary}</p>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h2 className="resume-section-title">TECHNICAL SKILLS</h2>
            <div className="resume-skills-grid">
              <div><strong>Languages &amp; Frameworks:</strong> C#, ASP.NET, .NET Core, .NET Framework, Entity Framework, LINQ, Web APIs</div>
              <div><strong>Architecture:</strong> Microservices, REST API Design</div>
              <div><strong>Web Development:</strong> HTML, CSS, JavaScript, React, Angular</div>
              <div><strong>Databases:</strong> SQL, PostgreSQL</div>
              <div><strong>Tools:</strong> Visual Studio, Git, Azure DevOps Boards, Jira</div>
              <div><strong>Soft Skills:</strong> Problem Solving, Teamwork &amp; Collaboration, Communication, Adaptability, Time Management</div>
            </div>
          </section>

          {/* Experience */}
          <section className="resume-section">
            <h2 className="resume-section-title">PROFESSIONAL EXPERIENCE</h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <strong className="resume-company">{exp.company}</strong>
                    <div className="resume-role">{exp.role}</div>
                  </div>
                  <div className="resume-dates">{exp.period}</div>
                </div>
                <ul className="resume-bullets">
                  {exp.bulletPoints.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="resume-section">
            <h2 className="resume-section-title">PROJECTS</h2>
            {data.projects.map((proj) => (
              <div key={proj.id} className="resume-project-item">
                <div className="resume-item-header">
                  <div>
                    <strong>{proj.title}</strong>
                    <div className="resume-tech">Technology: {proj.technologies.join(', ')}</div>
                  </div>
                </div>
                <ul className="resume-bullets">
                  {proj.bulletPoints.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2 className="resume-section-title">EDUCATION</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="resume-item" style={{ marginBottom: '8px' }}>
                <div className="resume-item-header">
                  <div>
                    <strong className="resume-institution">{edu.institution}</strong>
                    <div>{edu.degree} — {edu.grade}</div>
                  </div>
                  <div className="resume-dates">{edu.period}</div>
                </div>
              </div>
            ))}
          </section>

          {/* Portfolio Link */}
          <section className="resume-section">
            <h2 className="resume-section-title">PORTFOLIO</h2>
            <p>
              <a href={data.profile.portfolioUrl} target="_blank" rel="noopener noreferrer">
                {data.profile.portfolioUrl}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
