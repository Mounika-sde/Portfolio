using Microsoft.EntityFrameworkCore;
using Mounika.Portfolio.Api.Data;
using Mounika.Portfolio.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// Add Controllers
builder.Services.AddControllers();

// Configure EF Core with PostgreSQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") 
    ?? "Host=localhost;Database=MounikaPortfolioDb;Username=postgres;Password=postgres";

builder.Services.AddDbContext<PortfolioDbContext>(options =>
{
    options.UseNpgsql(connectionString);
});

// Register Portfolio Domain Services
builder.Services.AddScoped<IPortfolioService, PortfolioService>();

// Add Health Checks
builder.Services.AddHealthChecks();

// Configure CORS for Frontend React/Angular clients
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
                "http://localhost:5173",
                "http://localhost:3000",
                "http://localhost:4200",
                "https://mounika-sde.github.io",
                "https://mounika-n-portfolio.netlify.app"
              )
              .SetIsOriginAllowed(origin => 
                  origin.EndsWith(".web.app") || 
                  origin.EndsWith(".firebaseapp.com") || 
                  origin.EndsWith(".github.io") ||
                  origin.EndsWith(".netlify.app") ||
                  origin.EndsWith(".vercel.app") ||
                  origin.StartsWith("http://localhost:")
              )
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Configure OpenAPI / Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "Mounika N - Portfolio Web API",
        Version = "v1",
        Description = "ASP.NET Core 8 Web API powering Mounika N's professional developer portfolio.",
        Contact = new Microsoft.OpenApi.Models.OpenApiContact
        {
            Name = "Mounika N",
            Email = "nmounika.sde@gmail.com",
            Url = new Uri("https://linkedin.com/in/mounika-22w85a0502")
        }
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment() || true)
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Mounika N Portfolio API v1");
        c.RoutePrefix = "swagger";
    });
}

app.UseHttpsRedirection();
app.UseCors("AllowFrontend");
app.UseAuthorization();
app.MapControllers();
app.MapHealthChecks("/health");

// Root route redirect/info
app.MapGet("/", () => Results.Ok(new
{
    Application = "Mounika N - Portfolio API (.NET 8 & PostgreSQL)",
    Status = "Healthy & Online",
    Swagger = "/swagger",
    Endpoints = new[]
    {
        "/api/portfolio/profile",
        "/api/portfolio/skills",
        "/api/portfolio/experience",
        "/api/portfolio/projects",
        "/api/portfolio/education"
    }
}));

app.Run();
