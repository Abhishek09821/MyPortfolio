"use client";

import { Terminal, Briefcase, Mail, ArrowUp } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-surface-2/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="font-mono text-xs text-muted">
          © {year} {profile.name}. Built from scratch — no template.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-accent-blue"
          >
            <Terminal size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-accent-blue"
          >
            <Briefcase size={18} />
          </a>
          <a
            href={socials.email}
            aria-label="Send an email"
            className="text-muted transition-colors hover:text-accent-blue"
          >
            <Mail size={18} />
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="ml-2 rounded-full border border-white/10 p-2 text-muted transition-colors hover:border-accent-blue/50 hover:text-accent-blue"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
