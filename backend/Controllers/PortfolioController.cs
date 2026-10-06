using Microsoft.AspNetCore.Mvc;
using Mounika.Portfolio.Api.Models;
using Mounika.Portfolio.Api.Services;

namespace Mounika.Portfolio.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class PortfolioController : ControllerBase
    {
        private readonly IPortfolioService _portfolioService;
        private readonly ILogger<PortfolioController> _logger;

        public PortfolioController(IPortfolioService portfolioService, ILogger<PortfolioController> logger)
        {
            _portfolioService = portfolioService;
            _logger = logger;
        }

        [HttpGet("profile")]
        public ActionResult<UserProfile> GetProfile()
        {
            return Ok(_portfolioService.GetProfile());
        }

        [HttpGet("skills")]
        public ActionResult<List<SkillCategory>> GetSkills()
        {
            return Ok(_portfolioService.GetSkills());
        }

        [HttpGet("experience")]
        public ActionResult<List<ExperienceItem>> GetExperience()
        {
            return Ok(_portfolioService.GetExperience());
        }

        [HttpGet("projects")]
        public ActionResult<List<ProjectItem>> GetProjects()
        {
            return Ok(_portfolioService.GetProjects());
        }

        [HttpGet("projects/{key}")]
        public ActionResult<ProjectItem> GetProject(string key)
        {
            var project = _portfolioService.GetProjectByKey(key);
            if (project == null)
            {
                return NotFound(new { message = $"Project '{key}' was not found." });
            }
            return Ok(project);
        }

        [HttpGet("education")]
        public ActionResult<List<EducationItem>> GetEducation()
        {
            return Ok(_portfolioService.GetEducation());
        }

        [HttpPost("contact")]
        public async Task<ActionResult<ContactResponse>> PostContactMessage([FromBody] ContactMessage message)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var response = await _portfolioService.ProcessContactMessageAsync(message);
            return Ok(response);
        }
    }
}
