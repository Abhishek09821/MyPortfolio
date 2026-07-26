"use client";

import { useRef, useState, MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Terminal } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  const panelId = `project-detail-${project.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <GlassPanel
        accent="blue"
        interactive
        className="group/card relative overflow-hidden"
      >
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          className="relative p-6 sm:p-7"
          style={
            {
              "--spot-x": "50%",
              "--spot-y": "0px",
            } as React.CSSProperties
          }
        >
          {/* spotlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
            style={{
              background:
                "radial-gradient(320px circle at var(--spot-x) var(--spot-y), rgba(0,229,255,0.08), transparent 70%)",
            }}
          />

          <div className="relative flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-blue">
                {project.codename}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-text">{project.name}</h3>
              <p className="mt-1 text-sm text-muted">{project.tagline}</p>
            </div>
            <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
              {project.status}
            </span>
          </div>

          <p className="relative mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

          <div className="relative mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-[2px] border border-accent-green/25 bg-accent-green/[0.05] px-2.5 py-1 font-mono text-[11px] text-accent-green"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="relative mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[2px] border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-accent-blue/60 hover:text-accent-blue"
            >
              <Terminal size={14} aria-hidden />
              Source
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[2px] border border-accent-blue/40 bg-accent-blue/[0.06] px-4 py-2 font-mono text-xs uppercase tracking-widest text-accent-blue transition-colors hover:bg-accent-blue/[0.12]"
              >
                <ExternalLink size={14} aria-hidden />
                Live Demo
              </a>
            )}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-controls={panelId}
              className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-text"
            >
              {expanded ? "Hide" : "Case Study"}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={14} aria-hidden />
              </motion.span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={panelId}
                key="detail"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden"
              >
                <ul className="mt-5 flex flex-col gap-2 border-t border-white/[0.06] pt-5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-blue" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GlassPanel>
    </motion.div>
  );
}
