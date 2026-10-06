using Mounika.Portfolio.Api.Models;

namespace Mounika.Portfolio.Api.Services
{
    public interface IPortfolioService
    {
        UserProfile GetProfile();
        List<SkillCategory> GetSkills();
        List<ExperienceItem> GetExperience();
        List<ProjectItem> GetProjects();
        ProjectItem? GetProjectByKey(string key);
        List<EducationItem> GetEducation();
        Task<ContactResponse> ProcessContactMessageAsync(ContactMessage message);
    }
}
