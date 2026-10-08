import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { apiService } from './services/apiService';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';

export default function App() {
  const [data, setData] = useState(portfolioData);
  
  // Default UI theme is Light
  const [theme, setTheme] = useState(() => localStorage.getItem('mn_theme') || 'light');
  
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  
  // Page refresh always starts LOCKED by default (in-memory session state)
  const [isResumeUnlocked, setIsResumeUnlocked] = useState(false);
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    // Clear any persistent storage so page refresh strictly locks
    localStorage.removeItem('mn_resume_unlocked');
    sessionStorage.removeItem('mn_resume_unlocked');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mn_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    showToast(`Switched to ${nextTheme} mode`, 'info');
  };

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3600);
  };

  const handleUnlockResume = (autoOpen = false) => {
    setIsResumeUnlocked(true);
    if (autoOpen) {
      setIsResumeOpen(true);
    }
  };

  const handleResumeRequest = () => {
    if (isResumeUnlocked) {
      setIsResumeOpen(true);
    } else {
      // Smoothly scroll down to the contact form section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      showToast('Please submit the on-screen form below to unlock the complete resume.', 'info');
    }
  };

  // Resilient data loading with fallback
  useEffect(() => {
    async function loadBackendData() {
      try {
        const [profile, skills, exp, projs, edu] = await Promise.all([
          apiService.getProfile(),
          apiService.getSkills(),
          apiService.getExperience(),
          apiService.getProjects(),
          apiService.getEducation()
        ]);
        setData({
          profile: profile || portfolioData.profile,
          skills: skills || portfolioData.skills,
          experience: exp || portfolioData.experience,
          projects: projs || portfolioData.projects,
          education: edu || portfolioData.education
        });
      } catch (e) {
        // Static fallback active
      }
    }
    loadBackendData();
  }, []);

  return (
    <div className="portfolio-app">
      <div className="ambient-background" aria-hidden="true" />
      
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isResumeUnlocked={isResumeUnlocked}
        onOpenResume={handleResumeRequest}
      />

      <main>
        <Hero
          profile={data.profile}
          isResumeUnlocked={isResumeUnlocked}
          onOpenResume={handleResumeRequest}
          showToast={showToast}
        />

        <About profile={data.profile} />

        <Skills skillsData={data.skills} />

        <Experience experienceData={data.experience} />

        <Projects
          projectsData={data.projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <Education educationData={data.education} />

        <Contact
          profile={data.profile}
          isResumeUnlocked={isResumeUnlocked}
          onUnlockResume={() => handleUnlockResume(false)}
          onOpenResume={() => setIsResumeOpen(true)}
          showToast={showToast}
        />
      </main>

      <Footer profile={data.profile} />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        data={data}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Toast Feedback */}
      <Toast toast={toast} />
    </div>
  );
}
