import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Projects({ projectsData, onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category.includes(filter);
  });

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">Key enterprise systems, SaaS platforms, and browser tools engineered end-to-end.</p>
        </div>

        {/* Filters */}
        <div className="project-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({projectsData.length})
          </button>
          <button
            className={`filter-btn ${filter === 'enterprise' ? 'active' : ''}`}
            onClick={() => setFilter('enterprise')}
          >
            Enterprise Platforms
          </button>
          <button
            className={`filter-btn ${filter === 'angular' ? 'active' : ''}`}
            onClick={() => setFilter('angular')}
          >
            Angular &amp; .NET
          </button>
          <button
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
            onClick={() => setFilter('react')}
          >
            React &amp; Tools
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-header">
                <span className="project-badge">{project.badge}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.description}</p>

                <ul className="project-bullet-list">
                  {project.bulletPoints.map((bullet, idx) => (
                    <li key={idx}>
                      <Check size={14} className="bullet-check" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => onSelectProject(project)}
                  >
                    <span>View Architecture Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
