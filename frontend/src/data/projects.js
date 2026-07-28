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
  {
    id: "proj-3",
    slug: "portfolio",
    title: "Developer Portfolio",
    subtitle: "This site — a component-driven portfolio built to a premium bar",
    description:
      "The site you're on right now: React 19, Tailwind v4, and Framer Motion, built section by section with a code-editor-inspired design system.",
    category: "Frontend",
    accent: "var(--accent-3)",
    heroImage: "/projects/portfolio/cover.jpg",
    gallery: ["/projects/portfolio/shot-1.jpg"],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    featured: false,
    github: "https://github.com/yourhandle/portfolio",
    live: "https://yourname.dev",

    problemStatement:
      "Most portfolio templates look identical, which makes it hard for a recruiter skimming dozens of them to remember any single one.",
    whyBuilt:
      "I wanted a portfolio that doubled as a demonstration of production-quality React architecture, not just a place to list projects.",
    features: [
      "Dark/light theme with zero flash on load",
      "⌘K command palette for jumping to any section or page",
      "Dynamic project detail pages generated from a single data source",
      "Full-screen animated mobile navigation",
    ],
    challenges: [
      "Keeping animation tasteful rather than overwhelming",
      "Making the design feel personal without real photography or brand assets yet",
    ],
    solutions: [
      "Limited motion to one orchestrated entrance per section plus small hover/tap feedback, and respected prefers-reduced-motion throughout",
      "Built graceful gradient fallbacks for every image slot so the site looks intentional even before real photos are added",
    ],
    folderStructure: `src/
├── components/     # grouped by feature (navbar, hero, projects, ...)
├── sections/
├── pages/
├── data/
├── hooks/
└── context/`,
    codeHighlights: [
      {
        title: "Theme persistence with no flash of wrong theme",
        code: `// inline script in index.html, runs before React mounts
const stored = localStorage.getItem("theme") || "dark";
document.documentElement.classList.toggle("dark", stored === "dark");`,
      },
    ],
    performance: [
      "Route-level code isn't split yet — planned once more pages are built out",
      "Images lazy-load and fall back to CSS gradients rather than blocking layout",
    ],
    security: ["No user data collected; contact form submits via mailto: with no backend to secure"],
    authFlow: "None — the site is fully public with no accounts.",
    responsiveDetails:
      "Built mobile-first from 320px up; verified at 320/375/425/640/768/1024/1280/1440 and 4K.",
    lessons: [
      "Writing the data layer (projects.js) before the UI made every card, grid, and detail page fall out almost for free",
    ],
    futureScope: ["Add a real blog backed by MDX", "Wire the contact form to an actual email service"],
  },
  {
    id: "proj-4",
    slug: "realtime-chat",
    title: "Realtime Chat Engine",
    subtitle: "A WebSocket-based messaging service supporting rooms and presence",
    description:
      "Backend-focused messaging service with room-based routing, typing indicators, and horizontal scaling across multiple socket servers via Redis pub/sub.",
    category: "Backend",
    accent: "var(--accent)",
    heroImage: "/projects/realtime-chat/cover.jpg",
    gallery: ["/projects/realtime-chat/shot-1.jpg"],
    technologies: ["Node.js", "Socket.IO", "Redis", "Docker"],
    featured: false,
    github: "https://github.com/yourhandle/realtime-chat",
    live: "",

    problemStatement:
      "Most chat tutorials only work on a single server instance, which doesn't reflect how these systems actually run in production.",
    whyBuilt:
      "I wanted to understand horizontal scaling for stateful, connection-based services rather than the usual stateless REST scaling story.",
    features: [
      "Room-based message routing",
      "Typing indicators and read receipts",
      "Presence tracking across multiple server instances",
      "Message backfill on reconnect",
    ],
    challenges: [
      "Keeping presence state consistent when a client's socket connects to a different server instance after a reconnect",
      "Avoiding message duplication during backfill",
    ],
    solutions: [
      "Used Redis pub/sub as a shared broadcast layer between server instances, with presence keys holding a short TTL refreshed on heartbeat",
      "Assigned monotonic message IDs per room and had clients report their last-seen ID on reconnect for exact backfill",
    ],
    folderStructure: `src/
├── gateway/        # socket connection handling
├── rooms/
├── presence/
└── redis/          # pub/sub adapter`,
    codeHighlights: [
      {
        title: "Cross-instance broadcast via Redis pub/sub",
        code: `redisSub.on("message", (channel, raw) => {
  const { roomId, payload } = JSON.parse(raw);
  io.to(roomId).emit("message", payload);
});`,
      },
    ],
    performance: ["Load-tested to ~8k concurrent connections across 3 instances before latency degraded"],
    security: ["Socket connections authenticate with a short-lived token issued by the main API, not raw credentials"],
    authFlow: "Clients fetch a signed, short-lived socket token from the REST API after normal login, then use it to open the socket connection.",
    responsiveDetails: "This is a backend service with a minimal test UI; the test client adapts down to a single-column layout on mobile.",
    lessons: ["Stateful services need a completely different scaling mental model than stateless REST APIs"],
    futureScope: ["Add end-to-end encryption for direct messages"],
  },
  {
    id: "proj-5",
    slug: "task-manager",
    title: "Task Manager",
    subtitle: "A keyboard-first task board with drag-and-drop and offline support",
    description:
      "A Kanban-style task manager focused on speed: full keyboard navigation, optimistic updates, and offline-first sync via IndexedDB.",
    category: "Frontend",
    accent: "var(--accent-2)",
    heroImage: "/projects/task-manager/cover.jpg",
    gallery: ["/projects/task-manager/shot-1.jpg", "/projects/task-manager/shot-2.jpg"],
    technologies: ["React", "IndexedDB", "Framer Motion", "Zustand"],
    featured: false,
    github: "https://github.com/yourhandle/task-manager",
    live: "https://tasks.example.com",

    problemStatement:
      "Popular task managers are mouse-heavy, which slows down anyone who wants to triage a large backlog quickly.",
    whyBuilt:
      "I use task boards daily and kept getting frustrated by how many clicks it took to do simple things, so I built the tool I actually wanted.",
    features: [
      "Full keyboard navigation and shortcuts for every action",
      "Drag-and-drop between columns with optimistic updates",
      "Offline-first — works with no connection, syncs when back online",
      "Command-palette style quick task creation",
    ],
    challenges: [
      "Reconciling local optimistic changes with server state after being offline for an extended period",
      "Making drag-and-drop feel instant while still keeping state consistent",
    ],
    solutions: [
      "Queued offline mutations with timestamps and replayed them in order on reconnect, resolving conflicts by last-write-wins per field",
      "Used optimistic local state updates immediately on drag, then reconciled silently with the server response",
    ],
    folderStructure: `src/
├── board/
├── store/          # zustand stores
├── sync/           # offline queue + IndexedDB
└── shortcuts/`,
    codeHighlights: [
      {
        title: "Offline mutation queue replay",
        code: `async function replayQueue(queue) {
  for (const mutation of queue.sort((a, b) => a.ts - b.ts)) {
    await applyMutation(mutation);
  }
}`,
      },
    ],
    performance: ["Board with 500+ cards stays under 16ms per frame using windowed rendering per column"],
    security: ["Task data is scoped per workspace with server-side ownership checks on every mutation"],
    authFlow: "Standard email/password login; sessions persist via httpOnly cookie.",
    responsiveDetails: "Columns become horizontally swipeable single-column views under 768px, with drag-and-drop replaced by a move-to-column menu on touch devices.",
    lessons: ["Offline-first is much easier to design in from day one than to retrofit later"],
    futureScope: ["Add real-time multiplayer cursors for shared boards"],
  },
  {
    id: "proj-6",
    slug: "expense-tracker",
    title: "Expense Tracker",
    subtitle: "Personal finance app with automatic categorization and budgets",
    description:
      "Full-stack expense tracker that imports bank CSV exports, auto-categorizes transactions, and visualizes spending against monthly budgets.",
    category: "Full-Stack",
    accent: "var(--accent-3)",
    heroImage: "/projects/expense-tracker/cover.jpg",
    gallery: ["/projects/expense-tracker/shot-1.jpg"],
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    featured: false,
    github: "https://github.com/yourhandle/expense-tracker",
    live: "https://expenses.example.com",

    problemStatement:
      "Manually categorizing every transaction in a spreadsheet each month was tedious enough that I kept abandoning budget tracking within a few weeks.",
    whyBuilt:
      "I wanted a tool that did the categorization work for me so budgeting would actually stick.",
    features: [
      "CSV import from major bank export formats",
      "Rule-based auto-categorization with manual override",
      "Monthly budget tracking with over/under indicators",
      "Spending trend charts by category",
    ],
    challenges: [
      "Bank CSV formats vary wildly between institutions",
      "Auto-categorization rules conflicting with each other on ambiguous merchant names",
    ],
    solutions: [
      "Built a small format-detection layer that maps each bank's column layout to a common internal schema before import",
      "Rules are ordered by specificity, and the first confident match wins; ambiguous transactions are queued for manual review instead of guessed",
    ],
    folderStructure: `src/
├── import/         # CSV parsers per bank format
├── categorize/      # rule engine
├── budgets/
└── charts/`,
    codeHighlights: [
      {
        title: "Rule-based categorization",
        code: `function categorize(transaction, rules) {
  const match = rules
    .sort((a, b) => b.specificity - a.specificity)
    .find((rule) => rule.test(transaction.description));
  return match ? match.category : "uncategorized";
}`,
      },
    ],
    performance: ["CSV imports of 5,000+ rows process in under 2 seconds using streamed parsing instead of loading the full file into memory"],
    security: ["Bank CSVs are parsed and discarded after import — raw files are never persisted to disk"],
    authFlow: "Email/password with JWT sessions; no bank credentials are ever collected, only user-exported CSV files.",
    responsiveDetails: "Budget charts reflow from a 2-column grid to a stacked single column under 640px, with tap-to-expand detail views replacing hover tooltips.",
    lessons: ["A simple, explainable rule engine beat an ML classifier for this use case — users trusted and corrected it more easily"],
    futureScope: ["Support direct bank API connections via Plaid instead of manual CSV export"],
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
