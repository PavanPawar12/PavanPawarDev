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
