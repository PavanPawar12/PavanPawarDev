/**
 * Every project object below feeds both the Projects section (cards/grid/
 * featured) and its own /projects/:slug detail page — no duplicated data.
 *
 * Fields marked "detail-only" are only rendered on ProjectDetails.jsx.
 */
export const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"];
import job_portal from '../assets/projectImages/jobportal/portal1.png'

import portal1 from "../assets/projectImages/jobportal/portal1.png";
import portal2 from "../assets/projectImages/jobportal/portal2.png";
import portal3 from "../assets/projectImages/jobportal/portal3.png";
import steelpage from "../assets/projectImages/stell/steelpage.png"
import portfolio from "../assets/projectImages/portfolio/homeport.png"

export const projects = [
  {
    id: "proj-1",
    slug: "job-portal",
    title: "Job Portal",
    subtitle: "A hiring platform connecting candidates with recruiters in real time",
    description:
      "Full-stack job board with role-based dashboards, resume parsing, and a recommendation engine that ranks openings against a candidate's profile.",
    category: "Full-Stack",
    accent: "var(--accent)",
    //heroImage: "/projects/job-portal/cover.jpg",
    heroImage: job_portal,
    gallery: [
      portal1,
      portal2,
      portal3,
      
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS S3"],
    featured: true,
    github: "https://github.com/PavanPawar12/TalentForge",
    live: "https://talentforge.pavanpawar.in",

    // detail-only
    problemStatement:
      "Small companies were relying on spreadsheets and email threads to track applicants, which meant strong candidates routinely fell through the cracks between first contact and interview.",
    whyBuilt:
      "I wanted hands-on experience with role-based access control and a recommendation system, and a job board gave both a real, testable problem to solve rather than a toy dataset.",
    features: [
      "Role-based dashboards for candidates, recruiters, and admins",
      "Resume upload with automatic skill extraction",
      "Ranked job recommendations based on profile match score",
      "In-app messaging between recruiters and applicants",
      "Application status tracking with email notifications",
    ],
    challenges: [
      "Matching candidates to jobs fairly without an obvious ground-truth to train against",
      "Keeping recruiter dashboards responsive with thousands of applications per posting",
      "Preventing duplicate applications and spam postings at scale",
    ],
    solutions: [
      "Built a weighted scoring model on structured skill/experience fields instead of a black-box ML model, so recruiters could see why a match was ranked the way it was",
      "Paginated and indexed the applications table, and moved heavy aggregate queries to a Redis-backed cache refreshed on a schedule",
      "Added rate limiting per account and a lightweight heuristic filter on posting content before it goes live",
    ],
    folderStructure: `src/
├── api/            # route handlers, grouped by resource
├── components/
├── features/       # dashboard, auth, messaging, search
├── hooks/
├── lib/            # scoring engine, email templates
└── server/
    ├── controllers/
    ├── models/
    └── middleware/`,
    codeHighlights: [
      {
        title: "Match score calculation",
        code: `function scoreCandidate(candidate, job) {
  const skillOverlap = intersection(candidate.skills, job.skills).length;
  const seniorityFit = 1 - Math.abs(candidate.years - job.minYears) / 10;
  return skillOverlap * 0.7 + seniorityFit * 0.3;
}`,
      },
    ],
    performance: [
      "Cut initial dashboard load from 2.8s to 640ms by moving list rendering to virtualized scroll",
      "Cached recommendation results per candidate for 15 minutes to avoid recomputation on every visit",
    ],
    security: [
      "JWT access + refresh token rotation with short-lived access tokens",
      "Row-level authorization checks on every recruiter query, not just at the route layer",
      "File-type and size validation on resume uploads before they touch storage",
    ],
    authFlow:
      "Email/password with JWT access tokens (15 min) and rotating refresh tokens (7 days) stored as httpOnly cookies. OAuth via Google is supported as a secondary flow for candidates.",
    responsiveDetails:
      "Dashboards collapse from a three-column layout to a single-column, tab-based view under 768px, with the applicant list becoming a swipeable card stack on mobile.",
    lessons: [
      "Row-level authorization is easy to forget when adding a new query — worth writing a shared query wrapper early rather than retrofitting it",
      "A transparent, explainable scoring model built more recruiter trust than a marginally more accurate opaque one would have",
    ],
    futureScope: [
      "Add interview scheduling with calendar sync",
      "Support team-based recruiter workspaces with shared candidate pools",
    ],
  },
  {
    id: "proj-2",
    slug: "future-farming",
    title: "Future Farming",
    subtitle: "IoT dashboard for monitoring soil and irrigation data on small farms",
    description:
      "Sensor-fed dashboard that visualizes soil moisture, temperature, and irrigation cycles, with automated alerts when readings drift outside safe ranges.",
    category: "Full-Stack",
    accent: "var(--accent-2)",
    heroImage: "/projects/future-farming/cover.jpg",
    gallery: [
      "/projects/future-farming/shot-1.jpg",
      "/projects/future-farming/shot-2.jpg",
    ],
    technologies: ["React", "MongoDB", "MQTT", "Express", "Chart.js"],
    featured: false,
    github: "https://github.com/yourhandle/future-farming",
    live: "https://future-farming.example.com",

    problemStatement:
      "Smallholder farmers I spoke with were checking soil conditions by hand once a day, which meant irrigation decisions lagged behind what the soil actually needed.",
    whyBuilt:
      "A friend's family farm needed a low-cost way to monitor a few plots without buying an expensive commercial system, so I built one around $15 sensors and a Raspberry Pi gateway.",
    features: [
      "Live soil moisture, temperature, and humidity charts per plot",
      "Threshold-based SMS/email alerts",
      "Historical trend view for irrigation planning",
      "Multi-plot support with per-plot configuration",
    ],
    challenges: [
      "Sensor readings were noisy and occasionally dropped out entirely",
      "MQTT messages arrived out of order under poor rural connectivity",
    ],
    solutions: [
      "Applied a rolling median filter before charting or alerting on any reading",
      "Added message sequence numbers and buffered out-of-order packets for up to 30 seconds before discarding",
    ],
    folderStructure: `src/
├── dashboard/
├── ingest/         # MQTT listener, sensor normalization
├── alerts/
└── charts/`,
    codeHighlights: [
      {
        title: "Rolling median smoothing",
        code: `function rollingMedian(readings, windowSize = 5) {
  const window = readings.slice(-windowSize).sort((a, b) => a - b);
  return window[Math.floor(window.length / 2)];
}`,
      },
    ],
    performance: [
      "Downsampled historical charts to hourly averages beyond a 48-hour window to keep render times fast",
    ],
    security: [
      "Sensor gateways authenticate with per-device MQTT credentials, rotated quarterly",
    ],
    authFlow: "Farm owner accounts use email/password auth; gateways use separate device tokens, never user credentials.",
    responsiveDetails:
      "Chart grid drops from 3 columns to 1 under 640px, with touch-friendly time-range pickers replacing the desktop date inputs.",
    lessons: [
      "Real-world sensor data needs filtering before it's trustworthy enough to alert on — I underestimated this at first",
    ],
    futureScope: ["Add automated irrigation valve control, not just alerting"],
  },
  {
  id: "proj-3",
  slug: "gasani-local-business",
  title: "Gasani Local Business",
  subtitle: "A Marathi-first digital platform for local businesses in Gasani, Beed",
  description:
    "A frontend-focused platform built to help small local businesses in Gasani village, Beed, Maharashtra, create an online presence and make their services easier to discover. The application uses Marathi as the primary language to make the platform simple and accessible for local users.",

  category: "Frontend",
  accent: "var(--accent)",
  heroImage: steelpage,

  gallery: [
    // gasani1,
    // gasani2,
    // gasani3,
  ],

  technologies: [
    "React",
    "JavaScript",
    "CSS",
    "React Router",
  ],

  featured: true,

  github: "https://github.com/PavanPawar12/adhunik-steel-ghasani",
  live: "https://adhunik-steel-ghasani.vercel.app",

  // detail-only
  problemStatement:
    "Many small businesses in villages rely mainly on word-of-mouth and local customers. They often do not have a simple digital platform where people can discover their business, understand the services they provide, and contact them easily.",

  whyBuilt:
    "I built this project to explore how technology can be used to support small local businesses and make digital information more accessible to people in my own region. I also wanted to build the interface in Marathi so that local users could interact with the platform comfortably.",

  features: [
    "Marathi-first user interface designed for local users",
    "Simple authentication flow for users and business owners",
    "Business listing and service information",
    "Business-focused homepage for discovering local services",
    "Responsive design for mobile and desktop users",
    "Simple navigation designed for users with limited technical experience",
  ],

  challenges: [
    "Designing a simple interface that could be easily understood by local users",
    "Building the application primarily in Marathi while maintaining a clean user experience",
    "Creating a responsive layout that works well on mobile devices",
    "Keeping the application simple enough for small business owners to manage",
  ],

  solutions: [
    "Used a clean and minimal React interface with simple navigation and clearly visible actions",
    "Used Marathi throughout the main user-facing interface to improve accessibility for local users",
    "Designed mobile-first layouts because many users are expected to access the platform through smartphones",
    "Separated authentication and business-related components to keep the application maintainable",
  ],

  folderStructure: `src/
├── assets/
├── components/
├── pages/
│   ├── Home/
│   ├── Login/
│   ├── Register/
│   └── Business/
├── hooks/
├── routes/
├── services/
└── App.jsx`,

  codeHighlights: [
    {
      title: "React Authentication Flow",
      code: `const handleLogin = async (formData) => {
  try {
    const response = await loginUser(formData);

    if (response.success) {
      navigate("/home");
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
};`,
    },
  ],

  performance: [
    "Used reusable React components to reduce duplicated UI code",
    "Optimized images and assets to improve page loading performance",
    "Designed responsive layouts for mobile-first usage",
  ],

  security: [
    "Implemented protected routes for authenticated users",
    "Validated authentication-related form inputs",
    "Kept authentication logic separated from presentation components",
  ],

  authFlow:
    "Users can create an account and log in through a simple authentication flow. Protected routes prevent unauthenticated users from accessing restricted sections of the application.",

  responsiveDetails:
    "The interface is designed primarily for mobile users and adapts to larger screens using responsive layouts. Business information and navigation remain easy to access across different screen sizes.",

  lessons: [
    "A simple interface can be more effective than a feature-heavy design when building for local users",
    "Using the user's native language can make a digital product much more approachable",
    "Building for a specific local community helped me think more carefully about accessibility and usability",
    "React component-based architecture makes it easier to scale a project as more businesses and features are added",
  ],

  futureScope: [
    "Add Google Maps integration for business locations",
    "Allow business owners to create and manage their own business profiles",
    "Add business search and category-based filtering",
    "Add WhatsApp and direct calling integration",
    "Add reviews and ratings for local businesses",
    "Support multiple villages across Beed district",
    "Add Marathi and English language switching",
  ],
  },
  {
  id: "proj-3",
  slug: "personal-portfolio",
  title: "Personal Portfolio",
  subtitle: "A modern developer portfolio showcasing projects, skills, and experience",
  description:
    "A responsive personal portfolio designed to showcase my development projects, technical skills, experience, and achievements with a clean and interactive user experience.",

  category: "Frontend",
  accent: "var(--accent)",

  heroImage: portfolio,
  gallery: [
    // portfolio1,
    // portfolio2,
    // portfolio3,
  ],

  technologies: [
    "React",
    "Vite",
    "Tailwind CSS",
    "JavaScript",
    "Framer Motion",
    "Vercel",
  ],

  featured: true,

  github: "https://github.com/PavanPawar12/PavanPawarDev",
  live: "https://pavanpawar.in",

  // detail-only
  problemStatement:
    "A developer portfolio needs to communicate technical skills and project experience quickly while remaining visually engaging, responsive, and easy to navigate across different devices.",

  whyBuilt:
    "I built this portfolio to create a professional online presence where recruiters and companies can quickly understand my technical skills, projects, experience, and development journey.",

  features: [
    "Responsive design for desktop, tablet, and mobile",
    "Interactive project showcase with detailed project pages",
    "Dedicated sections for skills, experience, education, and projects",
    "Smooth animations and page transitions",
    "Project filtering based on technology and category",
    "Contact section for recruiter and professional inquiries",
    "SEO-friendly structure and optimized page loading",
  ],

  challenges: [
    "Creating a visually impressive interface without sacrificing usability",
    "Making complex project information easy to explore",
    "Maintaining consistent responsiveness across different screen sizes",
    "Optimizing animations and assets for faster page loading",
  ],

  solutions: [
    "Created reusable React components for sections and project cards",
    "Implemented responsive layouts using Tailwind CSS",
    "Used lazy loading and optimized assets to improve performance",
    "Separated project data from UI components to make the portfolio easier to maintain",
    "Added reusable animations and transitions for consistent interactions",
  ],


  codeHighlights: [
    {
      title: "Reusable project data structure",
      code: `const project = {
  title: "Personal Portfolio",
  category: "Frontend",
  technologies: [
    "React",
    "Vite",
    "Tailwind CSS"
  ],
  live: "https://pavanpawar.in"
};`,
    },
  ],

  performance: [
    "Used optimized assets and lazy loading to reduce unnecessary page loads",
    "Built reusable components to reduce duplicated UI code",
    "Designed responsive layouts that adapt across desktop, tablet, and mobile devices",
  ],

  security: [
    "External links use safe target and rel attributes",
    "Sensitive credentials and API keys are kept outside the frontend source code",
    "Form inputs are validated before submission",
  ],

  authFlow:
    "The portfolio is primarily a public-facing application and does not require user authentication. Contact functionality can use a secure backend or third-party email service without exposing private credentials.",

  responsiveDetails:
    "The layout adapts from multi-column desktop sections to stacked mobile layouts. Navigation, project cards, typography, images, and interactive elements are optimized for smaller screens.",

  lessons: [
    "Good component architecture makes a portfolio much easier to maintain as the number of projects grows",
    "Performance and responsiveness are just as important as visual design",
    "A portfolio should communicate technical ability through the implementation itself rather than only listing technologies",
  ],

  futureScope: [
    "Add an AI-powered portfolio assistant for recruiters",
    "Add a downloadable resume generation feature",
    "Add analytics to understand which projects recruiters interact with most",
    "Add a blog section for technical articles and learning notes",
  ],
},
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject() {
  return projects.find((p) => p.featured) ?? projects[0];
}

export function getRelatedProjects(slug, count = 3) {
  const current = getProjectBySlug(slug);
  if (!current) return [];
  return projects
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === current.category ? -1 : 1) - (b.category === current.category ? -1 : 1))
    .slice(0, count);
}
