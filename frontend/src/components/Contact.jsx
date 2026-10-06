import React, { useState, useRef } from 'react';
import { Mail, ExternalLink, MapPin, Copy, Check, FileText, Lock, CheckCircle2, RotateCcw } from 'lucide-react';

export default function Contact({ profile, isResumeUnlocked, onUnlockResume, onOpenResume, showToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showFormAgain, setShowFormAgain] = useState(false);
  const [iframeLoadedCount, setIframeLoadedCount] = useState(0);
  const iframeRef = useRef(null);

  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfOuPY7NXRGLnM4S-HWkpiP7sgnyrBI9bAFZOUlq9tTU5rx0g/viewform?embedded=true";
  const googleFormDirectUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfOuPY7NXRGLnM4S-HWkpiP7sgnyrBI9bAFZOUlq9tTU5rx0g/viewform";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    showToast('Email address copied to clipboard', 'success');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleIframeLoad = () => {
    setIframeLoadedCount((prev) => {
      const next = prev + 1;
      // When Google Form is submitted, the iframe reloads (load count >= 2)
      if (next >= 2 && !isResumeUnlocked) {
        setTimeout(() => {
          onUnlockResume();
          showToast('Form submitted! Resume access is now unlocked.', 'success');
        }, 50);
      }
      return next;
    });
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="section-subtitle">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-desc">
            Feel free to reach out directly via email or LinkedIn, or fill out the form to request complete resume access.
          </p>
        </div>

        <div className="contact-grid-clean">
          {/* Left Column: Direct Contact Info & Status */}
          <div className="contact-info-panel">
            <h3>Direct Contact</h3>
            <p className="contact-intro-text">
              I am open to full-time Software Developer roles, full-stack .NET &amp; Angular/React positions, and technical collaborations.
            </p>

            <div className="contact-channels">
              {/* Email */}
              <div className="channel-item">
                <div className="channel-icon">
                  <Mail size={16} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Email</span>
                  <a href={`mailto:${profile.email}`} className="channel-value">
                    {profile.email}
                  </a>
                </div>
                <button
                  className="channel-action-btn"
                  onClick={handleCopyEmail}
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={15} className="icon-success" /> : <Copy size={15} />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="channel-item">
                <div className="channel-icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="channel-details">
                  <span className="channel-label">LinkedIn</span>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    {profile.linkedinDisplay}
                  </a>
                </div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-action-btn"
                  title="Open LinkedIn profile"
                  aria-label="Open LinkedIn"
                >
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* Location */}
              <div className="channel-item">
                <div className="channel-icon">
                  <MapPin size={16} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Location</span>
                  <span className="channel-value">{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Resume Access Status Card */}
            <div className={`resume-status-card ${isResumeUnlocked ? 'unlocked' : 'locked'}`}>
              <div className="status-header">
                <div className="status-icon-wrap">
                  {isResumeUnlocked ? <CheckCircle2 size={18} className="text-emerald" /> : <Lock size={16} className="text-muted" />}
                </div>
                <div>
                  <h4 className="status-title">
                    {isResumeUnlocked ? 'Resume Access Granted' : 'Resume Access Locked'}
                  </h4>
                  <p className="status-desc">
                    {isResumeUnlocked
                      ? 'Form verified for this session. You have full access to view, print, and save the resume.'
                      : 'Please fill out and submit the on-screen form to unlock the complete resume.'}
                  </p>
                </div>
              </div>

              {isResumeUnlocked ? (
                <button className="btn btn-primary btn-sm mt-3" onClick={onOpenResume}>
                  <FileText size={14} />
                  <span>View &amp; Print Resume</span>
                </button>
              ) : (
                <button
                  className="btn btn-secondary btn-sm mt-3"
                  onClick={() => {
                    onUnlockResume();
                    showToast('Resume access unlocked!', 'success');
                  }}
                  title="Click to unlock resume access"
                >
                  <Check size={13} />
                  <span>I've Submitted the Form &rarr; Unlock Access</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Embedded Google Form or Unlocked Confirmation */}
          <div className="contact-form-panel google-form-wrapper">
            {isResumeUnlocked && !showFormAgain ? (
              <div className="unlocked-confirmation-view">
                <div className="unlocked-badge-icon">
                  <CheckCircle2 size={32} className="text-emerald" />
                </div>
                <h3>Form Verified &amp; Resume Unlocked</h3>
                <p className="unlocked-text">
                  Thank you for reaching out. Your contact submission has been noted, and full access to my professional resume is active for this session.
                </p>

                <div className="unlocked-actions">
                  <button className="btn btn-primary" onClick={onOpenResume}>
                    <FileText size={15} />
                    <span>Open &amp; Print Full Resume</span>
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setShowFormAgain(true)}>
                    <RotateCcw size={13} />
                    <span>Submit Another Response</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="form-panel-header">
                  <div>
                    <h3>Contact &amp; Resume Access Form</h3>
                    <p className="form-helper-text">Please fill out this form on-screen:</p>
                  </div>
                  <a
                    href={googleFormDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link-external"
                    title="Open form in new tab"
                  >
                    <span>New Tab</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div className="iframe-container">
                  <iframe
                    ref={iframeRef}
                    src={googleFormEmbedUrl}
                    title="Contact Form"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    onLoad={handleIframeLoad}
                    className="google-form-iframe"
                  >
                    Loading form...
                  </iframe>
                </div>

                <div className="form-panel-footer">
                  <span className="footer-notice">
                    Submit the form above to automatically unlock full resume access.
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
