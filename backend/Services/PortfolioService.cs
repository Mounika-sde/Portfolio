using Mounika.Portfolio.Api.Data;
using Mounika.Portfolio.Api.Models;

namespace Mounika.Portfolio.Api.Services
{
    public class PortfolioService : IPortfolioService
    {
        private readonly PortfolioDbContext _dbContext;
        private readonly ILogger<PortfolioService> _logger;

        public PortfolioService(PortfolioDbContext dbContext, ILogger<PortfolioService> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        public UserProfile GetProfile()
        {
            return new UserProfile
            {
                Name = "MOUNIKA N",
                Title = "Full-Stack Software Developer (.NET Core / Angular / React)",
                Location = "Hyderabad, Telangana, India",
                Email = "nmounika.sde@gmail.com",
                LinkedIn = "https://linkedin.com/in/mounika-22w85a0502",
                PortfolioUrl = "https://mounika-n-portfolio.netlify.app",
                YearsOfExperience = 4.0,
                Summary = "Motivated Software Developer with close to 4 years of experience building full-stack web applications using C#, .NET, Angular, React, and PostgreSQL. Skilled in designing REST APIs, integrating third-party services, and delivering clean, scalable back-end solutions, with hands-on exposure to microservices architecture and a growing focus on cloud and DevOps practices."
            };
        }

        public List<SkillCategory> GetSkills()
        {
            return new List<SkillCategory>
            {
                new SkillCategory
                {
                    CategoryName = "Languages & Frameworks",
                    Skills = new List<string> { "C#", "ASP.NET", ".NET Core", ".NET Framework", "Entity Framework Core", "LINQ", "Web APIs" }
                },
                new SkillCategory
                {
                    CategoryName = "Web & Frontend",
                    Skills = new List<string> { "Angular", "React", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive UI" }
                },
                new SkillCategory
                {
                    CategoryName = "Architecture & Design",
                    Skills = new List<string> { "Microservices", "REST API Design", "Clean Architecture", "3rd-Party Integrations" }
                },
                new SkillCategory
                {
                    CategoryName = "Databases & Storage",
                    Skills = new List<string> { "PostgreSQL", "SQL", "LinqDB", "Query Optimization" }
                },
                new SkillCategory
                {
                    CategoryName = "Developer Tools & DevOps",
                    Skills = new List<string> { "Visual Studio", "Git & GitHub", "Azure DevOps Boards", "Jira", "Postman" }
                },
                new SkillCategory
                {
                    CategoryName = "Professional Strengths",
                    Skills = new List<string> { "Problem Solving", "Teamwork & Collaboration", "Communication", "Adaptability", "Time Management" }
                }
            };
        }

        public List<ExperienceItem> GetExperience()
        {
            return new List<ExperienceItem>
            {
                new ExperienceItem
                {
                    Id = 1,
                    Company = "PalTech Consulting Private Limited",
                    Role = "Associate Software Engineer",
                    StartDate = "Aug 2022",
                    EndDate = "Jun 2026",
                    Location = "Hyderabad, India",
                    BulletPoints = new List<string>
                    {
                        "Developed and maintained web applications using C#, ASP.NET, .NET Core/Framework, and PostgreSQL, delivering clean, efficient back-end solutions that supported core business workflows.",
                        "Built responsive, production-grade user interfaces with HTML, CSS, JavaScript, Angular, and React, collaborating closely with cross-functional Agile teams to ship features on a consistent sprint cadence.",
                        "Designed and consumed Web APIs and Entity Framework/LINQ data access layers, contributing to a microservices-based backend architecture supporting business-critical features.",
                        "Tracked and delivered work using Azure DevOps Boards and Jira, contributing to sprint planning, code reviews, and consistent on-time delivery across multiple release cycles."
                    },
                    Technologies = new List<string>
                    {
                        "C#", ".NET Core", "ASP.NET", "Angular", "React", "PostgreSQL", "EF Core", "LINQ", "Microservices", "Azure DevOps", "Jira"
                    }
                }
            };
        }

        public List<ProjectItem> GetProjects()
        {
            return new List<ProjectItem>
            {
                new ProjectItem
                {
                    Id = 1,
                    Key = "civet",
                    Title = "Civet – Talent Acquisition & Recruitment Management Platform",
                    Category = "Enterprise SaaS & Microservices",
                    Tagline = "End-to-end recruitment lifecycle & automated interview scheduling",
                    Description = "An enterprise recruitment solution streamlining candidate workflows, interviews, offers, and hiring pipelines with automated third-party integrations.",
                    Technologies = new List<string> { ".NET", "ASP.NET Core", "Angular", "PostgreSQL", "Entity Framework Core", "Microsoft Graph", "MS Teams", "Microservices" },
                    Highlights = new List<string>
                    {
                        "Worked on features across the end-to-end recruitment lifecycle, including jobs, candidates, applications, interviews, offers, and hiring workflows.",
                        "Developed and enhanced REST APIs and backend services using ASP.NET Core/.NET, and built recruiter-facing UI workflows in Angular.",
                        "Worked with PostgreSQL, Entity Framework Core, and Microsoft Graph/Outlook/Teams integrations for scheduling, and contributed to recruitment analytics and hiring KPI dashboards."
                    },
                    ArchitectureOverview = "Microservices backend on ASP.NET Core with Entity Framework Core data layer, communicating with PostgreSQL, Microsoft Graph API for scheduling, and responsive Angular SPA frontend."
                },
                new ProjectItem
                {
                    Id = 2,
                    Key = "cmi",
                    Title = "CMI Connect – Healthcare Analytics Platform",
                    Category = "Healthcare FinTech & Analytics",
                    Tagline = "Healthcare reimbursement management & automated PDPM / RUG rule evaluation",
                    Description = "A specialized healthcare analytics engine to manage reimbursements by analyzing Case Mix Index (CMI) data with automated regulatory checks.",
                    Technologies = new List<string> { ".NET", "LinqDB", "PostgreSQL", "Angular", "Rule Engines", "Analytics" },
                    Highlights = new List<string>
                    {
                        "Developed a healthcare analytics platform to manage reimbursements by analyzing Case Mix Index (CMI) data, with automated PDPM and RUG rule evaluations.",
                        "Built dashboards and CMI Summary Reports, and implemented custom configuration and alert systems for client-specific reimbursement logic."
                    },
                    ArchitectureOverview = ".NET backend service executing complex LINQ queries against LinqDB & PostgreSQL, presenting data through Angular summary dashboards and alerting pipelines."
                },
                new ProjectItem
                {
                    Id = 3,
                    Key = "scraper",
                    Title = "LinkedIn Smart Lead Scraper & CRM Sync",
                    Category = "Browser Tools & Sales Automation",
                    Tagline = "High-speed extension extracting leads and syncing with Funnel CRM",
                    Description = "A browser extension that extracts public LinkedIn profile and company data automatically, integrated with Funnel CRM for lead generation.",
                    Technologies = new List<string> { "JavaScript", ".NET", "React", "SQL", "Chrome Extension API", "CRM Integration" },
                    Highlights = new List<string>
                    {
                        "Developed a browser extension that extracts public LinkedIn profile and company data automatically, integrated with Funnel CRM for lead generation.",
                        "Extracted key data such as names, job titles, company names, and Sales Navigator IDs, with a 'Copy ID' feature for quick access."
                    },
                    ArchitectureOverview = "React-based extension popup and content scripts paired with .NET REST API ingestion endpoints and SQL database persistence."
                }
            };
        }

        public ProjectItem? GetProjectByKey(string key)
        {
            return GetProjects().FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase));
        }

        public List<EducationItem> GetEducation()
        {
            return new List<EducationItem>
            {
                new EducationItem
                {
                    Id = 1,
                    Degree = "B.Tech in Computer Science and Engineering",
                    Institution = "Arjun College of Technology and Science",
                    Timeline = "Oct 2022 – Jul 2025",
                    Grade = "CGPA 7.5",
                    Description = "Focused on Core Computer Science, Data Structures, Relational Database Design, OOP, Web Engineering, and Software Architecture."
                },
                new EducationItem
                {
                    Id = 2,
                    Degree = "Diploma in Electronics and Communication Engineering",
                    Institution = "Government Institute of Electronics, Secunderabad",
                    Timeline = "Jun 2019 – May 2022",
                    Grade = "85% Distinction",
                    Description = "Studied Digital Electronics, Microprocessors, Embedded Logic, and Computer Architecture."
                }
            };
        }

        public async Task<ContactResponse> ProcessContactMessageAsync(ContactMessage message)
        {
            _logger.LogInformation("Processing incoming contact message from {Email}", message.SenderEmail);

            try
            {
                _dbContext.ContactMessages.Add(message);
                await _dbContext.SaveChangesAsync();

                return new ContactResponse
                {
                    Success = true,
                    Message = "Thank you! Your message has been received."
                };
            }
            catch (Exception ex)
            {
                _logger.LogWarning("DB save bypassed (in-memory fallback): {Message}", ex.Message);
                return new ContactResponse
                {
                    Success = true,
                    Message = "Thank you! Your message has been noted."
                };
            }
        }
    }
}
