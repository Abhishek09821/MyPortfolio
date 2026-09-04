// ============================================================================
// PORTFOLIO DATA — single source of truth.
// Edit this file to update every section of the site. Nothing below is
// wired to any AI/LLM provider; the assistant answers from this file only.
// ============================================================================

export const profile = {
  name: "Abhishek Tiwari",
  callsign: "Abhee",
  roles: ["Software Engineer", "AI Developer", "Python Backend Developer"],
  tagline: "Building intelligent software that solves real-world problems.",
  location: "Gwalior, Madhya Pradesh, India",
  education: "B.Tech, Computer Science & Engineering — Amity University Madhya Pradesh",
  focus: "AI-driven products, agentic systems, and full-stack engineering",
  mission: "Ship complete, production-quality software — not prototypes.",
  currentGoal: "Trainee Software Engineer roles in Python / AI-ML / SaaS product teams",
  status: "Open to opportunities",
  github: "Abhishek09821",
  leetcode: "abhishektiwari9821",
  email: "abhishek.tiwarii9821@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhishek-tiwari-3a3594300/",
  resumeUrl: "/resume/Abhishek_Tiwari_Resume.pdf",
};

export const socials = {
  github: `https://github.com/${profile.github}`,
  leetcode: `https://leetcode.com/u/${profile.leetcode}/`,
  linkedin: profile.linkedin,
  email: `mailto:${profile.email}`,
  resume: profile.resumeUrl,
};

export const missionStatus = [
  { label: "Projects Shipped", value: "5+" },
  { label: "GitHub", value: "Connected" },
  { label: "AI Systems", value: "Online" },
  { label: "Availability", value: "Open" },
];

export const aboutCards = [
  {
    id: "location",
    label: "Location",
    value: "Gwalior, Madhya Pradesh, India",
    detail: "Building remotely, shipping globally.",
  },
  {
    id: "education",
    label: "Education",
    value: "B.Tech CSE, Amity University Madhya Pradesh",
    detail: "Coursework in data structures, systems, and AI — applied immediately to real projects.",
  },
  {
    id: "focus",
    label: "Focus",
    value: "AI Applications & Full-Stack Systems",
    detail: "Python backends, agentic AI, and interfaces that feel finished.",
  },
  {
    id: "mission",
    label: "Mission",
    value: "Ship complete products",
    detail: "Every build goes from idea to a working, end-to-end system — no throwaway demos.",
  },
  {
    id: "goals",
    label: "Current Goals",
    value: "Trainee Software Engineer",
    detail: "Looking to join a team building serious software at scale.",
  },
] as const;

export const careerLevels = [
  {
    level: 1,
    title: "Started Programming",
    period: "Foundations",
    description:
      "Picked up C, C++, and core data structures & algorithms — the groundwork for everything after.",
  },
  {
    level: 2,
    title: "Built First Python App",
    period: "Early builds",
    description:
      "Moved from syntax to systems — scripting, automation, and first real Python applications.",
  },
  {
    level: 3,
    title: "Learned Full-Stack Development",
    period: "Expansion",
    description:
      "Picked up React, Flask, and database design — started shipping complete web applications end to end.",
  },
  {
    level: 4,
    title: "Built AI Products",
    period: "Current arc",
    description:
      "Shipped agentic AI systems, a fintech platform, and a security tool — FinMate AI, APPLE, and Canary-File.",
  },
  {
    level: 5,
    title: "Current Mission",
    period: "Now",
    description:
      "Interviewing for Trainee Software Engineer roles while continuing to build production-grade AI systems.",
  },
] as const;

export const skillTree = [
  { name: "Python", level: 5, xp: 92, category: "Backend" },
  { name: "Java", level: 3, xp: 58, category: "Backend" },
  { name: "React", level: 4, xp: 80, category: "Frontend" },
  { name: "TypeScript", level: 3, xp: 62, category: "Frontend" },
  { name: "FastAPI", level: 4, xp: 75, category: "Backend" },
  { name: "Flask", level: 4, xp: 78, category: "Backend" },
  { name: "PostgreSQL", level: 3, xp: 60, category: "Data" },
  { name: "SQLite", level: 4, xp: 72, category: "Data" },
  { name: "AI / LLM Integration", level: 5, xp: 90, category: "AI" },
  { name: "Docker", level: 2, xp: 45, category: "Infra" },
  { name: "Git & GitHub", level: 4, xp: 82, category: "Tooling" },
] as const;

export const projects = [
  {
    id: "finmate-ai",
    codename: "MISSION // FINMATE",
    name: "FinMate AI",
    tagline: "AI-powered personal finance platform for Indian users",
    description:
      "A full-stack fintech application combining a React front end with a Flask/Node backend and Supabase/Firebase persistence. Includes an AI financial advisor, hardened auth architecture, and IDOR-resistant API design.",
    tech: ["React", "Flask", "Node.js", "Supabase", "Firebase", "MongoDB"],
    features: [
      "AI-driven financial advisor and insights engine",
      "Secure auth architecture with access-control fixes",
      "Modular schema across Firestore and relational stores",
    ],
    github: "https://github.com/AnshumanSinghTomar/FINMATE-AI",
    demo: null,
    status: "Active development",
  },
  {
    id: "apple-assistant",
    codename: "MISSION // APPLE",
    name: "APPLE",
    tagline: "A Jarvis-style AI assistant for macOS",
    description:
      "An agentic macOS assistant with a three-layer architecture — intent parsing, a tool registry, and persistent SQLite memory. Automates the desktop via AppleScript and Playwright, and is gaining hybrid screen vision using cloud and local multimodal models.",
    tech: ["Python", "AppleScript", "Playwright", "SQLite", "APScheduler"],
    features: [
      "Three-layer agentic architecture with long-term memory",
      "Hybrid screen vision — cloud multimodal with an on-device fallback",
      "Desktop and WhatsApp automation workflows",
    ],
    github: "https://github.com/Abhishek09821/APPLE",
    demo: null,
    status: "Active development",
  },
  {
    id: "canary-ai-files",
    codename: "MISSION // CANARY",
    name: "Canary AI Files",
    tagline: "Deception-based file monitoring & intrusion alerting",
    description:
      "A Python/Flask honeypot system that watches decoy files, captures webcam snapshots on tripwire events, and pushes alerts over Telegram, email, and WhatsApp — with encrypted storage and IP geolocation.",
    tech: ["Python", "Flask", "Watchdog", "Twilio", "Fernet Encryption"],
    features: [
      "Real-time file-system tripwires with webcam capture on trigger",
      "Multi-channel alerting: Telegram, email, and WhatsApp",
      "Encrypted event storage with IP geolocation lookups",
    ],
    github: "https://github.com/Abhishek09821/CANARY-AI-FILES",
    demo: null,
    status: "Complete",
  },
  {
    id: "vdown",
    codename: "MISSION // VDOWN",
    name: "VDown",
    tagline: "A fast, clean media downloader web app",
    description:
      "A media-downloader web application rebuilt with a dark, cyberpunk interface — including a custom animated logo system and motion-graphic intros rendered with Python/PIL and ffmpeg.",
    tech: ["React", "Flask", "PIL", "ffmpeg"],
    features: [
      "Dark, cyberpunk UI overhaul",
      "Custom animated logo and brand system",
      "Rendered motion-graphic intros and outros",
    ],
    github: "https://github.com/Abhishek09821/Youtube-Video-Downloader",
    demo: null,
    status: "Active development",
  },
  {
    id: "reversex",
    codename: "MISSION // REVERSEX",
    name: "ReverseX",
    tagline: "Evidence-first website technical intelligence analyzer",
    description:
      "A full-stack web intelligence platform that analyzes publicly accessible websites through deterministic, evidence-backed methods. Uses real browser automation with Playwright to collect observable data across design, technology stack, security, performance, accessibility, SEO, and architecture — without guessing or assumptions.",
    tech: ["Python", "FastAPI", "Playwright", "TypeScript", "Vite", "Tailwind CSS", "IndexedDB"],
    features: [
      "Evidence-driven deterministic detection across 8 analysis domains",
      "Real browser-powered collection with Chromium and Playwright",
      "Client-side report generation with IndexedDB persistence",
      "Optional AI explanation layer that never invents facts",
    ],
    github: "https://github.com/Abhishek09821/weblens",
    demo: "https://reversex-weblens.vercel.app",
    status: "Active development",
  },
] as const;

export const achievements = [
  {
    id: "hackathon-sih-2023",
    title: "Smart India Hackathon 2023",
    description: "Participated in Smart India Hackathon 2023 and developed Chikitsak - a healthcare solution at Amity University Madhya Pradesh.",
    date: "September 2023",
    category: "Hackathon",
    certificateUrl: "/certificates/hackathon-sih-2023.jpg",
    project: "Chikitsak",
    achievement: "Participant",
    journeyStep: 1,
  },
  {
    id: "hackathon-sih-2025",
    title: "Smart India Hackathon 2025",
    description: "Participated in Smart India Hackathon 2025 and built an Automatic Attendance System at Amity University Madhya Pradesh.",
    date: "September 2025",
    category: "Hackathon",
    certificateUrl: "/certificates/hackathon-sih-2025.jpg",
    project: "Automatic Attendance System",
    achievement: "Participant",
    journeyStep: 2,
  },
  {
    id: "hackathon-zynk-2026",
    title: "🏆 1st Place - Zynk Hackathon 2026",
    description: "Won first position with Team Omen for building FinMate AI - a Low-Hallucination Finance AI in 48 hours at Amity University Gwalior.",
    date: "April 2026",
    category: "Hackathon",
    highlight: true,
    certificateUrl: "/certificates/hackathon-certificate.pdf",
    project: "FinMate AI",
    achievement: "1st Place Winner",
    journeyStep: 3,
  },
  {
    id: "palo-alto-cybersecurity",
    title: "Palo Alto Networks - Cybersecurity Fundamentals",
    description: "Completed Palo Alto Networks Academy Cybersecurity Fundamentals certification covering core security concepts, threats, and defense mechanisms.",
    date: "December 2025",
    category: "Certification",
    certificateUrl: "/certificates/cybersecurity-certificate.png",
  },
  {
    id: "palo-alto-network",
    title: "Palo Alto Networks - Network Security Fundamentals",
    description: "Completed Palo Alto Networks Academy Network Security Fundamentals certification covering network architecture, firewalls, and secure network design.",
    date: "December 2025",
    category: "Certification",
    certificateUrl: "/certificates/network-security-certificate.png",
  },
  {
    id: "google-gen-ai",
    title: "Google Cloud - Introduction to Generative AI Studio",
    description: "Completed Google Cloud course on Generative AI Studio powered by Simplilearn.",
    date: "October 2025",
    category: "Certification",
    certificateUrl: "/certificates/google-gen-ai.png",
  },
  {
    id: "oracle-certified",
    title: "Oracle Certified Networking Professional",
    description: "Oracle Certified Professional credential validating expertise in networking and Oracle enterprise technologies.",
    category: "Certification",
    certificateUrl: "https://drive.google.com/file/d/1bPGtWNwTCwC1jtQy8mOO-Q0p0M0vLI-c/view",
  },
  {
    id: "web-dev-fundamentals",
    title: "IBM - Web Development Fundamentals",
    description: "IBM certification in core web development fundamentals covering HTML, CSS, JavaScript, and modern web technologies.",
    category: "Certification",
    certificateUrl: "https://drive.google.com/file/d/1kLxt3ezmECvd1D72rAOlJqNY41HOTWpt/view",
  },
  {
    id: "leetcode-100-days",
    title: "LeetCode 100 Days Badge 2026",
    description: "Achieved 100+ consecutive days of solving problems on LeetCode in 2026.",
    date: "2026",
    category: "Achievement",
    certificateUrl: "/certificates/leetcode-100-days.png",
  },
  {
    id: "ai-builder",
    title: "AI Builder",
    description: "Shipped multiple production AI systems — agentic assistants and an AI financial advisor.",
    category: "Skill",
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    description: "Designed and hardened APIs across Flask, FastAPI, and Node.js services.",
    category: "Skill",
  },
  {
    id: "security-minded",
    title: "Security Minded",
    description: "Built an intrusion-detection honeypot and fixed IDOR vulnerabilities in production auth flows.",
    category: "Skill",
  },
  {
    id: "full-stack-shipper",
    title: "Full-Stack Shipper",
    description: "Takes projects from idea to deployed, end-to-end product — never stops at a prototype.",
    category: "Skill",
  },
  {
    id: "open-source",
    title: "Open Source",
    description: "Maintains public repositories and ships in the open on GitHub.",
    category: "Skill",
  },
] as const;

// Lightweight knowledge base for the on-page assistant. No external AI calls —
// responses are matched from this structured data, kept in sync with the
// sections above.
export const assistantKnowledge = {
  greeting:
    "Systems online. Ask me about Abhishek's projects, skills, background, or how to get in touch.",
  suggestions: [
    "Tell me about FinMate AI",
    "What are his core skills?",
    "How do I contact him?",
    "Show me the resume",
  ],
} as const;
