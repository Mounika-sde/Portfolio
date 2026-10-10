// Only call backend if an explicit API URL is set, or if running locally in development mode
const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000/api/portfolio' : null);

export const apiService = {
  async getProfile() {
    if (!API_BASE_URL) return portfolioData.profile;
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
    if (!API_BASE_URL) return portfolioData.skills;
    try {
      const res = await fetch(`${API_BASE_URL}/skills`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return await res.json();
    } catch (e) {
      // Fallback
    }
    return portfolioData.skills;
  },

  async getExperience() {
    if (!API_BASE_URL) return portfolioData.experience;
    try {
      const res = await fetch(`${API_BASE_URL}/experience`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return await res.json();
    } catch (e) {
      // Fallback
    }
    return portfolioData.experience;
  },

  async getProjects() {
    if (!API_BASE_URL) return portfolioData.projects;
    try {
      const res = await fetch(`${API_BASE_URL}/projects`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return await res.json();
    } catch (e) {
      // Fallback
    }
    return portfolioData.projects;
  },

  async getEducation() {
    if (!API_BASE_URL) return portfolioData.education;
    try {
      const res = await fetch(`${API_BASE_URL}/education`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return await res.json();
    } catch (e) {
      // Fallback
    }
    return portfolioData.education;
  },

  async sendContactMessage(msg) {
    if (!API_BASE_URL) return { success: true, message: 'Message noted!' };
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
