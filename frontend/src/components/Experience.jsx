import React from 'react';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Experience({ experienceData }) {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-heading">
          <span className="section-subtitle">Experience</span>
          <h2 className="section-title">Work History</h2>
          <p className="section-desc">Engineering experience delivering scalable full-stack web applications within Agile release cycles.</p>
        </div>

        <div className="timeline-wrapper">
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>

              <div className="timeline-content">
                <div className="exp-header">
                  <div className="exp-company-info">
                    <div className="company-logo-placeholder">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <h4 className="exp-company">{exp.company}</h4>
                    </div>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period-badge">
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span className="exp-location">
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="exp-body">
                  <ul className="exp-bullet-points">
                    {exp.bulletPoints.map((point, idx) => (
                      <li key={idx}>
                        <ChevronRight size={15} className="bullet-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="exp-tech-stack">
                    <span className="tech-stack-title">Technologies</span>
                    <div className="tech-chips">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
