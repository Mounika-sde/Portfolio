/**
 * MOUNIKA N - PROFESSIONAL PORTFOLIO JAVASCRIPT
 * Features: Ambient Particle Canvas, Dynamic Typing, Project Filters & Modals,
 * Resume Viewer & PDF Print, Copy-to-Clipboard Toasts, ScrollSpy, Stats Counter.
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initTypingEffect();
  initThemeToggle();
  initNavigation();
  initStatsCounter();
  initSkillsSearch();
  initProjectFilters();
  initModals();
  initClipboardUtils();
  initContactForm();
  initBackToTop();
  updateCurrentYear();
});

/* ==========================================================================
   1. AMBIENT PARTICLE CANVAS
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  const particleCount = Math.min(Math.floor(window.innerWidth / 25), 45);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 2 + 1;
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = isDark
        ? `rgba(99, 102, 241, ${this.alpha})`
        : `rgba(99, 102, 241, ${this.alpha * 0.5})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const lineColor = isDark ? 'rgba(56, 189, 248, 0.08)' : 'rgba(99, 102, 241, 0.05)';

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1 - dist / 130;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. DYNAMIC TYPING EFFECT
   ========================================================================== */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-role');
  if (!typingElement) return;

  const roles = [
    'Full-Stack Software Developer',
    'C# & .NET Core Engineer',
    'Angular & React Developer',
    'PostgreSQL & REST API Specialist',
    'Microservices & Agile Practitioner'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   3. THEME TOGGLE (DARK / LIGHT)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('mn_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('mn_theme', newTheme);
    showToast(`Switched to ${newTheme} mode`, 'info');
  });
}

/* ==========================================================================
   4. NAVIGATION & SCROLLSPY
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Header background blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateScrollSpy();
  });

  // Mobile drawer toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileToggle.classList.toggle('active');
      mobileDrawer.classList.toggle('open');
      mobileDrawer.setAttribute('aria-hidden', isExpanded);
    });

    // Close mobile drawer when clicking a link
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // ScrollSpy function
  function updateScrollSpy() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(`.nav-link[href*="${sectionId}"]`).forEach(link => {
          navLinks.forEach(nl => nl.classList.remove('active'));
          link.classList.add('active');
        });
      }
    });
  }
}

/* ==========================================================================
   5. STATS COUNTER ANIMATION
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'), 10);
          const duration = 1500;
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              stat.textContent = target;
              clearInterval(timer);
            } else {
              stat.textContent = Math.ceil(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsStrip = document.querySelector('.stats-strip');
  if (statsStrip) observer.observe(statsStrip);
}

/* ==========================================================================
   6. SKILLS SEARCH & HIGHLIGHT
   ========================================================================== */
function initSkillsSearch() {
  const searchInput = document.getElementById('skill-filter-input');
  const clearBtn = document.getElementById('clear-skill-search');
  const skillTags = document.querySelectorAll('.skill-tag');
  const categoryCards = document.querySelectorAll('.skill-category-card');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (query.length > 0) {
      clearBtn.style.display = 'block';
    } else {
      clearBtn.style.display = 'none';
    }

    let matchCount = 0;

    skillTags.forEach(tag => {
      const text = tag.textContent.toLowerCase();
      if (query && text.includes(query)) {
        tag.classList.add('search-match');
        matchCount++;
      } else {
        tag.classList.remove('search-match');
      }
    });

    // Dim category cards that don't have matching tags when searching
    if (query) {
      categoryCards.forEach(card => {
        const hasMatch = card.querySelectorAll('.skill-tag.search-match').length > 0;
        card.style.opacity = hasMatch ? '1' : '0.35';
        card.style.transform = hasMatch ? 'scale(1.02)' : 'scale(0.98)';
      });
    } else {
      categoryCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'none';
      });
    }
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    skillTags.forEach(tag => tag.classList.remove('search-match'));
    categoryCards.forEach(card => {
      card.style.opacity = '1';
      card.style.transform = 'none';
    });
    searchInput.focus();
  });
}

/* ==========================================================================
   7. PROJECT FILTERING
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        if (filterValue === 'all' || (categories && categories.includes(filterValue))) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   8. MODALS (Resume & Project Deep-Dive)
   ========================================================================== */
const projectData = {
  civet: {
    title: 'Civet – Talent Acquisition & Recruitment Management Platform',
    category: 'Enterprise SaaS & Microservices',
    tech: ['.NET Core', 'ASP.NET', 'Angular', 'PostgreSQL', 'Entity Framework Core', 'Microsoft Graph API', 'MS Teams', 'Microservices'],
    content: `
      <div class="modal-project-content">
        <h4>System Overview</h4>
        <p>Civet is a comprehensive talent acquisition and recruitment management SaaS platform designed to streamline hiring operations across medium-to-large enterprise organizations. It covers every stage of the talent lifecycle from requisition to onboarding.</p>

        <h4>Key Responsibilities &amp; Implementations</h4>
        <ul>
          <li><strong>End-to-End Recruitment Pipeline:</strong> Architected workflows for job requisition creation, multi-board postings, candidate resume ingestion, interview round coordination, formal offer generation, and background check handoffs.</li>
          <li><strong>RESTful Microservices Backend:</strong> Developed resilient ASP.NET Core Web APIs backed by Entity Framework Core and PostgreSQL, incorporating clean domain-driven architecture and dependency injection.</li>
          <li><strong>Recruiter UI in Angular:</strong> Built responsive, interactive recruitment dashboards, kanban boards for applicant tracking, and dynamic candidate evaluation forms with state management.</li>
          <li><strong>Enterprise Third-Party Integrations:</strong> Seamlessly integrated <strong>Microsoft Graph API</strong>, <strong>Outlook Calendar</strong>, and <strong>Microsoft Teams</strong> for automated multi-interviewer schedule coordination, invite dispatching, and video room generation.</li>
          <li><strong>Analytics &amp; KPI Dashboards:</strong> Designed real-time recruitment metric trackers (Time-to-Hire, Cost-per-Hire, Funnel Conversion, and Diversity metrics) for talent leaders.</li>
        </ul>

        <h4>Architecture Highlights</h4>
        <div class="modal-arch-badge-grid">
          <span class="chip">ASP.NET Core 8</span>
          <span class="chip">Angular SPA</span>
          <span class="chip">PostgreSQL</span>
          <span class="chip">EF Core LINQ</span>
          <span class="chip">MS Graph API</span>
          <span class="chip">REST Microservices</span>
        </div>
      </div>
    `
  },
  cmi: {
    title: 'CMI Connect – Healthcare Analytics & Reimbursement Platform',
    category: 'Healthcare FinTech & Analytics',
    tech: ['.NET', 'LinqDB', 'PostgreSQL', 'Angular', 'Rule Engines', 'PDPM / RUG Logic'],
    content: `
      <div class="modal-project-content">
        <h4>System Overview</h4>
        <p>CMI Connect is a healthcare business intelligence and analytics application that enables healthcare institutions to optimize reimbursements by analyzing Case Mix Index (CMI) metrics while strictly adhering to Medicare/Medicaid regulatory requirements.</p>

        <h4>Key Responsibilities &amp; Implementations</h4>
        <ul>
          <li><strong>Automated Rule Evaluation Engine:</strong> Implemented sophisticated algorithmic rule engines in .NET to evaluate complex <strong>PDPM (Patient-Driven Payment Model)</strong> and <strong>RUG (Resource Utilization Group)</strong> rules, preventing claim denials and maximizing compliant revenue capture.</li>
          <li><strong>Dynamic Summary Reports &amp; Dashboards:</strong> Engineered Angular-powered visual reports displaying real-time CMI trends, patient classification shifts, and projected facility reimbursements.</li>
          <li><strong>Configurable Alert &amp; Logic Engine:</strong> Built flexible database schemas in PostgreSQL &amp; LinqDB allowing administrators to customize client-specific reimbursement parameters, threshold warnings, and discrepancy alerts.</li>
          <li><strong>High Performance Data Processing:</strong> Optimized complex LINQ data access queries and relational joins to handle high-volume healthcare claims data with sub-second response times.</li>
        </ul>

        <h4>Architecture Highlights</h4>
        <div class="modal-arch-badge-grid">
          <span class="chip">.NET Framework & Core</span>
          <span class="chip">LinqDB</span>
          <span class="chip">PostgreSQL</span>
          <span class="chip">Angular UI</span>
          <span class="chip">Rule Evaluation Engine</span>
        </div>
      </div>
    `
  },
  scraper: {
    title: 'LinkedIn Smart Lead Scraper & CRM Sync',
    category: 'Browser Tool & Lead Generation Engine',
    tech: ['JavaScript (ES6+)', 'React', '.NET Backend', 'SQL', 'Chrome Extension APIs', 'CRM Integration'],
    content: `
      <div class="modal-project-content">
        <h4>System Overview</h4>
        <p>A specialized productivity browser extension engineered to extract public business and candidate profiles from LinkedIn and Sales Navigator, syncing actionable intelligence straight into Funnel CRM pipelines in real-time.</p>

        <h4>Key Responsibilities &amp; Implementations</h4>
        <ul>
          <li><strong>Automated Profile Parsing:</strong> Engineered lightweight DOM parsing algorithms in modern JavaScript (ES6+) that reliably capture names, job designations, current/past companies, location, and Sales Navigator IDs with high accuracy.</li>
          <li><strong>One-Click "Copy ID" &amp; Quick Export:</strong> Created instant clipboard utilities and batch export mechanisms to accelerate sales prospecting workflows by 40%.</li>
          <li><strong>Funnel CRM Direct Sync:</strong> Built .NET REST services and SQL database bridges to instantly push captured leads into sales funnels without manual data entry.</li>
          <li><strong>React-Powered Popup Interface:</strong> Developed an intuitive, fast-loading popup UI with React to configure capture settings, preview parsed fields, and inspect synchronization status.</li>
        </ul>

        <h4>Architecture Highlights</h4>
        <div class="modal-arch-badge-grid">
          <span class="chip">Chrome Extension API</span>
          <span class="chip">React Popup</span>
          <span class="chip">JavaScript DOM Parser</span>
          <span class="chip">.NET API</span>
          <span class="chip">SQL Database</span>
        </div>
      </div>
    `
  }
};

function initModals() {
  // Resume Modal
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtns = [
    document.getElementById('open-resume-btn'),
    document.getElementById('hero-resume-btn'),
    document.getElementById('mobile-resume-btn')
  ];
  const closeResumeBtn = document.getElementById('close-resume-modal');
  const printResumeBtn = document.getElementById('print-resume-btn');

  openResumeBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        openModal(resumeModal);
      });
    }
  });

  if (closeResumeBtn) {
    closeResumeBtn.addEventListener('click', () => closeModal(resumeModal));
  }

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Project Modal
  const projectModal = document.getElementById('project-modal');
  const projectModalBody = document.getElementById('project-modal-body');
  const modalProjectTitle = document.getElementById('modal-project-title');
  const closeProjectBtn = document.getElementById('close-project-modal');

  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectKey = btn.getAttribute('data-project');
      const data = projectData[projectKey];

      if (data) {
        modalProjectTitle.textContent = data.title;
        projectModalBody.innerHTML = data.content;
        openModal(projectModal);
      }
    });
  });

  if (closeProjectBtn) {
    closeProjectBtn.addEventListener('click', () => closeModal(projectModal));
  }

  // Close modals when clicking backdrop or pressing ESC
  [resumeModal, projectModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(resumeModal);
      closeModal(projectModal);
    }
  });

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   9. CLIPBOARD UTILITIES & TOAST NOTIFICATIONS
   ========================================================================== */
function initClipboardUtils() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: "${textToCopy}"`, 'success');
      }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied to clipboard: "${textToCopy}"`, 'success');
      });
    });
  });
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const iconClass = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-info';
  toast.innerHTML = `<i class="${iconClass}"></i><span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3200);
}

/* ==========================================================================
   10. CONTACT FORM VALIDATION & HANDLING
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('sender-name');
    const emailInput = document.getElementById('sender-email');
    const subjectInput = document.getElementById('message-subject');
    const messageInput = document.getElementById('message-body');

    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

    if (!nameInput.value.trim()) {
      document.getElementById('name-error').textContent = 'Please enter your name.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      document.getElementById('email-error').textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!subjectInput.value.trim()) {
      document.getElementById('subject-error').textContent = 'Please provide a subject.';
      isValid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      document.getElementById('body-error').textContent = 'Please enter a message with at least 10 characters.';
      isValid = false;
    }

    if (isValid) {
      const recipient = 'nmounika.sde@gmail.com';
      const subject = encodeURIComponent(`[Portfolio Contact] ${subjectInput.value.trim()} - from ${nameInput.value.trim()}`);
      const body = encodeURIComponent(
        `Hi Mounika,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
      );

      // Trigger mailto link
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

      showToast('Opening your email client to send message...', 'success');
      form.reset();
    }
  });
}

/* ==========================================================================
   11. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   12. FOOTER YEAR UPDATE
   ========================================================================== */
function updateCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
