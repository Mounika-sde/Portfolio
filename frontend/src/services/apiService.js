import { portfolioData } from '../data/portfolioData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/portfolio';

export const apiService = {
  async getProfile() {
    try {
      const res = await fetch(`${API_BASE_URL}/profile`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) {
        const data = await res.json();
        return { ...portfolioData.profile, ...data };
      }
    } catch (e) {
      // Graceful fallback
    }
    return portfolioData.profile;
  },

  async getSkills() {
    try {
      const res = await fetch(`${API_BASE_URL}/skills`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return await res.json();
    } catch (e) {
      // Fallback
    }
    return portfolioData.skills;
  },

  async getExperience() {
    try {
      const res = await fetch(`${API_BASE_URL}/experience`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return await res.json();
    } catch (e) {
      // Fallback
    }
    return portfolioData.experience;
  },

  async getProjects() {
    try {
      const res = await fetch(`${API_BASE_URL}/projects`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return await res.json();
    } catch (e) {
      // Fallback
    }
    return portfolioData.projects;
  },

  async getEducation() {
    try {
      const res = await fetch(`${API_BASE_URL}/education`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return await res.json();
    } catch (e) {
      // Fallback
    }
    return portfolioData.education;
  },

  async sendContactMessage(msg) {
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(msg)
      });
      if (res.ok) return await res.json();
    } catch (e) {
      // Handled via client fallback
    }
    return { success: true, message: 'Message sent!' };
  }
};
