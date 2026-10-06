import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function Skills({ skillsData }) {
  const [searchQuery, setSearchQuery] = useState('');
  const query = searchQuery.toLowerCase().trim();

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="section-subtitle">Technical Stack</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-desc">Languages, frameworks, database systems, and developer tools used across production environments.</p>
        </div>

        {/* Skills Search */}
        <div className="skills-search-bar">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search skills (e.g. C#, .NET, Angular, PostgreSQL, Microservices)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search skills"
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')} aria-label="Clear search">
              <X size={15} />
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="skills-category-grid">
          {skillsData.map((cat, idx) => {
            const hasMatch = cat.items.some(item => !query || item.toLowerCase().includes(query));

            return (
              <div
                key={idx}
                className="skill-category-card"
                style={{
                  opacity: query && !hasMatch ? 0.3 : 1
                }}
              >
                <div className="category-header">
                  <h3 className="cat-title">{cat.category}</h3>
                  <span className="cat-count">{cat.items.length}</span>
                </div>

                <div className="skill-tags-list">
                  {cat.items.map((item, itemIdx) => {
                    const isMatch = query && item.toLowerCase().includes(query);
                    return (
                      <span
                        key={itemIdx}
                        className={`skill-tag ${isMatch ? 'search-match' : ''}`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
