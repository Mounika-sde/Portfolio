import React from 'react';
import { X, Layers, CheckCircle2, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container project-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-title">
            <Layers size={20} className="text-cyan" />
            <h3>Project Deep-Dive: {project.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-project-content">
            <h4>System Overview</h4>
            <p>{project.description}</p>

            <h4>Architecture &amp; Engineering Design</h4>
            <p>{project.deepDive?.architecture}</p>

            <h4>Key Production Implementations</h4>
            <ul>
              {project.bulletPoints.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h4>Technologies &amp; Protocols</h4>
            <div className="modal-arch-badge-grid">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="chip">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
