import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education({ educationData }) {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-heading">
          <span className="section-subtitle">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-desc">Academic degrees in Computer Science and Electronics Engineering.</p>
        </div>

        <div className="education-grid">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="edu-icon-wrap">
                <GraduationCap size={22} />
              </div>
              <div className="edu-meta">
                <span className="edu-badge">
                  <Calendar size={13} /> {edu.period}
                </span>
                <span className="edu-grade">
                  <Award size={13} /> {edu.grade}
                </span>
              </div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <p className="edu-desc">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
