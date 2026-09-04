"use client";

import { Terminal, Briefcase, Mail, Code2, FileText, ChevronUp } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-surface-2/60">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-white" aria-hidden />
              <h3 className="text-lg font-semibold tracking-tight text-white">{profile.callsign}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {profile.tagline}
            </p>
            <p className="text-xs text-muted/80">
              {profile.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="#projects" 
                  className="text-sm text-muted transition-colors hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-sm text-muted transition-colors hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#achievements" 
                  className="text-sm text-muted transition-colors hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Achievements
                </a>
              </li>
              <li>
                <a 
                  href={socials.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-white"
                >
                  <FileText size={14} />
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Connect</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                <Terminal size={18} />
              </a>
              <a
                href={socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode profile"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                <Code2 size={18} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                <Briefcase size={18} />
              </a>
              <a
                href={socials.email}
                aria-label="Send an email"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} {profile.name}. Crafted with precision.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-xs text-muted transition-colors hover:text-white"
          >
            Back to top
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-white/30 group-hover:bg-white/5">
              <ChevronUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
