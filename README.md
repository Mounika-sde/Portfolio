# Mounika N - Full-Stack Developer Portfolio

A professional, modern portfolio for **Mounika N**, Full-Stack Software Developer (~4 years experience in C#, .NET Core, Angular, React, PostgreSQL, Microservices, and REST APIs).

Live Deployment URL: **[https://mounika-n-portfolio.netlify.app](https://mounika-n-portfolio.netlify.app)**

---

## 🏛️ Architecture & Full-Stack Monorepo

```
d:\V\M\Portfolio\
├── backend/                  # ASP.NET Core 8 Web API & Clean Architecture
│   ├── Controllers/          # PortfolioController.cs, REST API endpoints
│   ├── Data/                 # PortfolioDbContext.cs (Entity Framework Core & PostgreSQL)
│   ├── Models/               # C# Domain Models (UserProfile, Projects, Experience, Skills, Messages)
│   ├── Services/             # IPortfolioService.cs & PortfolioService.cs
│   ├── Program.cs            # .NET 8 DI, CORS, Swagger OpenAPI setup
│   ├── appsettings.json      # PostgreSQL Connection string & configuration
│   └── Portfolio.Api.csproj  # .NET 8 project with Npgsql, EF Core, Swashbuckle
│
├── frontend/                 # Modern React 18 + Vite SPA Frontend
│   ├── src/
│   │   ├── components/       # Hero, About, Skills, Experience, Projects, Education, Contact, Modals
│   │   ├── data/             # Centralized portfolio data
│   │   ├── services/         # apiService.js with resilient fallback
│   │   ├── App.jsx           # Main React component & state management
│   │   └── index.css         # Complete glassmorphic CSS design system & print stylesheet
│   └── package.json          # React, Vite, Lucide Icons, Canvas utilities
│
└── package.json              # Monorepo developer scripts
```

---

## 🌟 Key Features

- 🌓 **Theme Switcher:** Dark mode (default sleek cyan/indigo glassmorphism) and clean high-contrast Light mode with localStorage persistence.
- ⚡ **Interactive Particle Canvas:** Ambient animated nodes and connections on the background.
- ⌨️ **Dynamic Typing Animation:** Highlighting core engineering competencies and backend/frontend roles.
- 🔍 **Live Technical Skills Filter:** Real-time search to instantly highlight matching technologies across categories.
- 🚀 **Projects Portfolio Filter & Deep-Dive Modals:** Filter by categories (*Enterprise*, *Angular & .NET*, *React & Tools*) and view architectural deep-dives for:
  - **Civet** – Talent Acquisition & Recruitment Management Platform (.NET Core, Angular, PostgreSQL, MS Graph/Teams)
  - **CMI Connect** – Healthcare Analytics & Reimbursement Platform (.NET, LinqDB, PostgreSQL, Angular)
  - **LinkedIn Scraper** – Smart Browser Lead Extractor & Funnel CRM Sync (JavaScript, React, .NET, SQL)
- 📄 **Interactive Resume Modal & ATS Print System:** Built-in modal resume with `@media print` CSS optimization for 1-click printing or saving as PDF.
- 📋 **1-Click Copy-to-Clipboard & Toasts:** Instant copy for Email (`nmounika.sde@gmail.com`) and LinkedIn.
- ✉️ **Interactive Contact Form:** Validated client-side form with direct `mailto:` and API endpoints.
- 📱 **100% Responsive Design:** Smooth layouts optimized across 4K displays, desktops, tablets, and mobile phones.

---

## 🚀 How to Run Locally

### Frontend (React + Vite)
```bash
# From workspace root (D:\V\M\Portfolio)
npm run dev

# Or directly from frontend folder
cd frontend
npm run dev
```
Then visit `http://localhost:5173`.

### Backend (ASP.NET Core Web API)
```bash
cd backend
dotnet run
```
Then explore the interactive Swagger documentation at `http://localhost:5000/swagger`.

---

## 🌐 Deploy to Netlify / Production

### Option 1: Netlify CLI or Git CI/CD
- **Base directory:** `frontend`
- **Build command:** `npm run build`
- **Publish directory:** `frontend/dist`

### Option 2: Netlify Drop
Run `npm run build --prefix frontend` and drag & drop the `frontend/dist` folder directly onto [Netlify Drop](https://app.netlify.com/drop).
