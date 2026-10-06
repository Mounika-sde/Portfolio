import React from 'react';
import { Server, Layout, Database, GitBranch, Check } from 'lucide-react';

export default function About({ profile }) {
  const pillars = [
    {
      title: 'Backend Engineering',
      desc: 'Robust C# & .NET Core services with LINQ, Entity Framework Core, dependency injection, and microservices design.',
      icon: <Server size={20} />
    },
    {
      title: 'Frontend Development',
      desc: 'Responsive, component-driven web interfaces built with Angular, React, modern JavaScript, and clean CSS.',
      icon: <Layout size={20} />
    },
    {
      title: 'Database Architecture',
      desc: 'Relational schema design, optimized SQL queries, indexing, and PostgreSQL data persistence with EF Core.',
      icon: <Database size={20} />
    },
    {
      title: 'Agile & DevOps Workflows',
      desc: 'Active sprint execution using Azure DevOps Boards, Jira, Git version control, and continuous delivery.',
      icon: <GitBranch size={20} />
    }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="section-subtitle">Overview</span>
          <h2 className="section-title">Professional Summary</h2>
        </div>

        <div className="about-grid">
          {/* Main Card */}
          <div className="about-card main-summary-card">
            <h3 className="about-card-title">Background &amp; Experience</h3>
            <p className="summary-paragraph">
              Motivated <strong>Software Developer</strong> with close to <strong>4 years</strong> of experience building full-stack web applications using{' '}
              <strong>C#</strong>, <strong>.NET</strong>, <strong>Angular</strong>, <strong>React</strong>, and <strong>PostgreSQL</strong>.
            </p>
            <p className="summary-paragraph">
              Skilled in designing high-throughput REST APIs, integrating third-party enterprise services (such as Microsoft Graph, Outlook, Teams, and CRMs), and delivering clean, scalable back-end solutions with hands-on exposure to <strong>microservices architecture</strong> and a growing focus on <strong>cloud and DevOps practices</strong>.
            </p>
            <p className="summary-paragraph">
              Proven track record collaborating within cross-functional Agile teams, driving sprint planning, participating in peer code reviews, and shipping production-grade features on a consistent cadence.
            </p>

            <div className="key-highlights-list">
              <div className="highlight-item">
                <Check size={16} className="highlight-check" />
                <span>Deep expertise in .NET Core &amp; ASP.NET Web APIs</span>
              </div>
              <div className="highlight-item">
                <Check size={16} className="highlight-check" />
                <span>Modern SPA development with Angular &amp; React</span>
              </div>
              <div className="highlight-item">
                <Check size={16} className="highlight-check" />
                <span>Database architecture with PostgreSQL &amp; Entity Framework</span>
              </div>
              <div className="highlight-item">
                <Check size={16} className="highlight-check" />
                <span>Microservices patterns &amp; Azure DevOps Agile release flows</span>
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="about-pillars-grid">
            {pillars.map((p, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-box">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
