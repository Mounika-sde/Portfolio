using System.ComponentModel.DataAnnotations;

namespace Mounika.Portfolio.Api.Models
{
    public class UserProfile
    {
        public string Name { get; set; } = "MOUNIKA N";
        public string Title { get; set; } = "Full-Stack Software Developer (.NET Core / Angular / React)";
        public string Location { get; set; } = "Hyderabad, Telangana, India";
        public string Email { get; set; } = "nmounika.sde@gmail.com";
        public string LinkedIn { get; set; } = "https://linkedin.com/in/mounika-22w85a0502";
        public string PortfolioUrl { get; set; } = "https://mounika-n-portfolio.netlify.app";
        public double YearsOfExperience { get; set; } = 4.0;
        public string Summary { get; set; } = string.Empty;
    }

    public class SkillCategory
    {
        public string CategoryName { get; set; } = string.Empty;
        public List<string> Skills { get; set; } = new();
    }

    public class ExperienceItem
    {
        public int Id { get; set; }
        public string Company { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string StartDate { get; set; } = string.Empty;
        public string EndDate { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public List<string> BulletPoints { get; set; } = new();
        public List<string> Technologies { get; set; } = new();
    }

    public class ProjectItem
    {
        public int Id { get; set; }
        public string Key { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Tagline { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<string> Technologies { get; set; } = new();
        public List<string> Highlights { get; set; } = new();
        public string ArchitectureOverview { get; set; } = string.Empty;
    }

    public class EducationItem
    {
        public int Id { get; set; }
        public string Degree { get; set; } = string.Empty;
        public string Institution { get; set; } = string.Empty;
        public string Timeline { get; set; } = string.Empty;
        public string Grade { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }

    public class ContactMessage
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string SenderName { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string SenderEmail { get; set; } = string.Empty;

        [Required]
        [MaxLength(200)]
        public string Subject { get; set; } = string.Empty;

        [Required]
        [MinLength(10)]
        public string Message { get; set; } = string.Empty;

        public DateTime CreatedAtUtc { get; set; } = DateTime.UtcNow;
    }

    public class ContactResponse
    {
        public bool Success { get; set; }
        public string Message { get; set; } = string.Empty;
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;
    }
}
