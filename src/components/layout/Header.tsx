"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile, socials } from "@/data/portfolio";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [activeId, setActiveId] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function goTo(id: string) {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-white/[0.06] bg-bg/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => goTo("home")}
          className="flex items-center gap-2 rounded-sm font-mono text-sm font-medium tracking-widest text-text"
          aria-label={`${profile.name} — go to top`}
        >
          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-accent-green" aria-hidden />
          AT{"//"}09821
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Section navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={cn(
                "relative rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors",
                activeId === item.id ? "text-accent-blue" : "text-muted hover:text-text",
              )}
              aria-current={activeId === item.id ? "true" : undefined}
            >
              {item.label}
              {activeId === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-[1px] h-px bg-accent-blue"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="flex items-center gap-2 font-mono text-xs text-accent-green">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green" aria-hidden />
            {profile.status}
          </span>
          <a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[2px] border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-accent-blue/60 hover:text-accent-blue"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="rounded-sm p-2 text-text lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Section navigation"
          className="border-t border-white/[0.06] bg-bg/95 px-4 pb-6 pt-2 backdrop-blur-md lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => goTo(item.id)}
                  className={cn(
                    "w-full rounded-sm py-3 text-left font-mono text-sm uppercase tracking-widest",
                    activeId === item.id ? "text-accent-blue" : "text-muted",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-[2px] border border-white/15 px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-text"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}
