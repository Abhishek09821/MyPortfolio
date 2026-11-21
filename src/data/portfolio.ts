// ============================================================================
// PORTFOLIO DATA — single source of truth.
// Edit this file to update every section of the site. Nothing below is
// wired to any AI/LLM provider; the assistant answers from this file only.
// ============================================================================

export const profile = {
  name: "Abhishek Tiwari",
  callsign: "Abhee",
  roles: ["Software Engineer", "Full Stack Developer", "Python Backend Developer", "Software Developer"],
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
    value: "Ai Web Applications & Full-Stack Systems",
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
  { name: "C++", level: 3, xp: 58, category: "Backend" },
  { name: "React", level: 4, xp: 80, category: "Frontend" },
  { name: "TypeScript", level: 3, xp: 62, category: "Frontend" },
  { name: "Full Stack Developer", level: 4, xp: 75, category: "Backend" },
  { name: "Flask", level: 4, xp: 78, category: "Backend" },
  { name: "PostgreSQL", level: 3, xp: 60, category: "Data" },
  { name: "MySQL", level: 4, xp: 72, category: "Data" },
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
    id: "arena-sports-quiz",
    codename: "MISSION // ARENA",
    name: "Arena Sports Quiz Game",
    tagline: "Interactive sports quiz platform with AI-generated questions",
    description:
      "An interactive sports quiz platform featuring AI-generated questions, multiple difficulty levels, and customizable gameplay. Built with React for a responsive user experience and dynamic question generation.",
    tech: ["React", "AI", "JavaScript", "CSS"],
    features: [
      "AI-generated sports quiz questions",
      "Multiple difficulty selection",
      "Customizable gameplay experience",
    ],
    github: "https://github.com/Abhishek09821/Arena",
    demo: null,
    status: "Active development",
  },

  {
    id: "anything-convertable",
    codename: "MISSION // CONVERTABLE",
    name: "Anything Convertable",
    tagline: "A document-converting concept for PDFs and Word files",
    description:
      "A document-converting application focused on converting PDFs and Word files easier to work with beyond traditional OCR workflows. Simplifies document transformation and text extraction.",
    tech: ["Python", "Document Processing", "AI"],
    features: [
      "PDF to Word conversion",
      "Enhanced OCR capabilities",
      "Streamlined document workflow",
    ],
    github: "https://github.com/Abhishek09821/anything-convertable",
    demo: null,
    status: "Active development",
  },
  {
    id: "ur-cv",
    codename: "MISSION // UR-CV",
    name: "ur-CV",
    tagline: "Mobile resume builder without AI",
    description:
      "A mobile-friendly resume builder application that allows users to create professional resumes directly from their phones without requiring any AI assistance. Simple, straightforward, and user-controlled.",
    tech: ["JavaScript", "HTML", "CSS"],
    features: [
      "Mobile-first resume creation",
      "No AI dependencies - full user control",
      "Clean and professional templates",
    ],
    github: "https://github.com/Abhishek09821/ur-CV",
    demo: null,
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
    id: "leetcode-200-days",
    title: "LeetCode 200 Days Badge 2026",
    description: "Achieved 200+ consecutive days of solving problems on LeetCode in 2026.",
    date: "2026",
    category: "Achievement",
    certificateUrl: "/certificates/leetcode-100-days.png",
  },
  {
    id: "AI Application-builder",
    title: "AI Application Builder",
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
    id: "software-developer",
    title: "Software Developer",
    description: "Built production-grade software systems and applications across multiple domains.",
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
