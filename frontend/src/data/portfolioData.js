export const portfolioData = {
  profile: {
    name: "MOUNIKA N",
    title: "Full-Stack Software Developer",
    location: "Hyderabad, Telangana, India",
    email: "nmounika.sde@gmail.com",
    linkedin: "https://linkedin.com/in/mounika-22w85a0502",
    linkedinDisplay: "linkedin.com/in/mounika-22w85a0502",
    portfolioUrl: "https://mounika-n-portfolio.netlify.app",
    experienceYears: "4 Years",
    summary:
      "Motivated Software Developer with close to 4 years of experience building full-stack web applications using C#, .NET, Angular, React, and PostgreSQL. Skilled in designing REST APIs, integrating third-party services, and delivering clean, scalable back-end solutions, with hands-on exposure to microservices architecture and a growing focus on cloud and DevOps practices.",
    roles: [
      "Full-Stack Software Developer",
      "C# & .NET Core Developer",
      "Angular & React Engineer",
      "PostgreSQL & REST API Specialist"
    ],
    stats: [
      { number: "4", suffix: " Years", label: "Full-Stack Experience" },
      { number: "3", suffix: " Projects", label: "Enterprise Applications" },
      { number: ".NET & Angular", suffix: "", label: "Primary Core Stack" },
      { number: "PostgreSQL", suffix: "", label: "Database Management" }
    ]
  },

  skills: [
    {
      category: "Languages & Frameworks",
      items: [
        "C#",
        "ASP.NET",
        ".NET Core",
        ".NET Framework",
        "Entity Framework",
        "LINQ",
        "Web APIs"
      ]
    },
    {
      category: "Web & Frontend",
      items: [
        "Angular",
        "React",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Responsive UI"
      ]
    },
    {
      category: "Architecture & Design",
      items: [
        "Microservices",
        "REST API Design",
        "Clean Architecture",
        "3rd-Party Integrations"
      ]
    },
    {
      category: "Databases & Storage",
      items: [
        "PostgreSQL",
        "SQL",
        "LinqDB",
        "Query Optimization"
      ]
    },
    {
      category: "Developer Tools & DevOps",
      items: [
        "Visual Studio",
        "Git",
        "Azure DevOps Boards",
        "Jira",
        "Postman"
      ]
    },
    {
      category: "Professional Strengths",
      items: [
        "Problem Solving",
        "Teamwork & Collaboration",
        "Communication",
        "Adaptability",
        "Time Management"
      ]
    }
  ],

  experience: [
    {
      id: 1,
      company: "PalTech Consulting Private Limited",
      role: "Associate Software Engineer",
      period: "Aug 2022 – Jun 2026",
      location: "Hyderabad, India",
      bulletPoints: [
        "Developed and maintained web applications using C#, ASP.NET, .NET Core/Framework, and PostgreSQL, delivering clean, efficient back-end solutions that supported core business workflows.",
        "Built responsive, production-grade user interfaces with HTML, CSS, JavaScript, Angular, and React, collaborating closely with cross-functional Agile teams to ship features on a consistent sprint cadence.",
        "Designed and consumed Web APIs and Entity Framework/LINQ data access layers, contributing to a microservices-based backend architecture supporting business-critical features.",
        "Tracked and delivered work using Azure DevOps Boards and Jira, contributing to sprint planning, code reviews, and consistent on-time delivery across multiple release cycles."
      ],
      technologies: [
        "C#",
        ".NET Core",
        "ASP.NET",
        "Angular",
        "React",
        "PostgreSQL",
        "Entity Framework",
        "LINQ",
        "Microservices",
        "Azure DevOps Boards",
        "Jira",
        "Git"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      key: "civet",
      title: "Civet – Talent Acquisition & Recruitment Management Platform",
      category: "enterprise angular",
      badge: "Enterprise Platform",
      description:
        "An end-to-end recruitment lifecycle system managing jobs, candidate pipelines, interview workflows, offers, and hiring operations with automated third-party integrations.",
      bulletPoints: [
        "Worked on features across the end-to-end recruitment lifecycle, including jobs, candidates, applications, interviews, offers, and hiring workflows.",
        "Developed and enhanced REST APIs and backend services using ASP.NET Core/.NET, and built recruiter-facing UI workflows in Angular.",
        "Worked with PostgreSQL, Entity Framework Core, and Microsoft Graph/Outlook/Teams integrations for scheduling, and contributed to recruitment analytics and hiring KPI dashboards."
      ],
      technologies: [
        ".NET",
        "ASP.NET Core",
        "Angular",
        "PostgreSQL",
        "Entity Framework Core",
        "Microsoft Graph",
        "MS Teams",
        "Microservices"
      ],
      deepDive: {
        architecture:
          "Microservices backend built with ASP.NET Core and Entity Framework Core querying PostgreSQL. Implemented Microsoft Graph & Teams APIs for automated interview scheduling and synchronization, paired with a recruiter workflow UI in Angular.",
        keyAchievements: [
          "Developed end-to-end recruitment lifecycle modules from job postings to offer dispatch.",
          "Integrated Microsoft Graph API for automated multi-interviewer calendar scheduling.",
          "Built analytical KPI dashboards for hiring metrics and funnel conversion tracking."
        ]
      }
    },
    {
      id: 2,
      key: "cmi",
      title: "CMI Connect – Healthcare Analytics Platform",
      category: "enterprise angular",
      badge: "Healthcare Analytics",
      description:
        "A healthcare analytics platform to manage reimbursements by analyzing Case Mix Index (CMI) data, with automated PDPM and RUG rule evaluations.",
      bulletPoints: [
        "Developed a healthcare analytics platform to manage reimbursements by analyzing Case Mix Index (CMI) data, with automated PDPM and RUG rule evaluations.",
        "Built dashboards and CMI Summary Reports, and implemented custom configuration and alert systems for client-specific reimbursement logic."
      ],
      technologies: [
        ".NET",
        "LinqDB",
        "PostgreSQL",
        "Angular",
        "Rule Engines",
        "Healthcare Analytics"
      ],
      deepDive: {
        architecture:
          "Built on .NET and LinqDB with PostgreSQL for high-volume claims analysis. Engineered automated algorithmic evaluation for Medicare/Medicaid PDPM and RUG reimbursement policies, surfaced via Angular reporting dashboards.",
        keyAchievements: [
          "Automated PDPM and RUG healthcare reimbursement calculation rules.",
          "Delivered executive CMI summary reports and client-specific alert systems.",
          "Optimized relational query access patterns for rapid data aggregation."
        ]
      }
    },
    {
      id: 3,
      key: "scraper",
      title: "LinkedIn Scraper & Lead Generation Tool",
      category: "react",
      badge: "Browser Extension & CRM",
      description:
        "A browser extension that extracts public LinkedIn profile and company data automatically, integrated with Funnel CRM for lead generation.",
      bulletPoints: [
        "Developed a browser extension that extracts public LinkedIn profile and company data automatically, integrated with Funnel CRM for lead generation.",
        "Extracted key data such as names, job titles, company names, and Sales Navigator IDs, with a 'Copy ID' feature for quick access."
      ],
      technologies: [
        "JavaScript",
        ".NET",
        "React",
        "SQL",
        "Chrome Extension API",
        "CRM Integration"
      ],
      deepDive: {
        architecture:
          "Built with a React popup interface, JavaScript DOM extraction scripts, .NET REST APIs, and SQL persistence to automate lead enrichment into Funnel CRM.",
        keyAchievements: [
          "Automated data extraction for names, titles, organizations, and Sales Navigator IDs.",
          "Integrated 1-click clipboard utility to accelerate sales workflows.",
          "Connected directly with Funnel CRM APIs for lead synchronization."
        ]
      }
    }
  ],

  education: [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Arjun College of Technology and Science",
      period: "Oct 2022 – Jul 2025",
      grade: "CGPA 7.5",
      description:
        "Coursework in Data Structures, Algorithms, Relational Database Management, Object-Oriented Design, Operating Systems, and Software Engineering."
    },
    {
      id: 2,
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "Government Institute of Electronics, Secunderabad",
      period: "Jun 2019 – May 2022",
      grade: "85% Distinction",
      description:
        "Foundational coursework in Digital Electronics, Microprocessors, Embedded Systems, and Computer Architecture."
    }
  ]
};
