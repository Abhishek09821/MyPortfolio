"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Server,
  ShieldCheck,
  Layers,
  Trophy,
  GitBranch,
  Award,
  Shield,
  Zap,
  Target,
  Code2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Hackathon: Trophy,
  Certification: Award,
  Achievement: Target,
  Skill: Sparkles,
};

const SKILL_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "ai-builder": Sparkles,
  "backend-engineer": Server,
  "security-minded": ShieldCheck,
  "full-stack-shipper": Layers,
  "open-source": GitBranch,
};

export function Achievements() {
  const [journeyOpen, setJourneyOpen] = useState(false);

  const hackathons = achievements
    .filter((a) => a.category === "Hackathon")
    .sort((a, b) => ("journeyStep" in a ? a.journeyStep : 0) - ("journeyStep" in b ? b.journeyStep : 0));

  const certifications = achievements.filter((a) => a.category === "Certification");
  const otherAchievements = achievements.filter(
    (a) => a.category === "Achievement" || a.category === "Skill"
  );

  return (
    <section id="achievements" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="ACCOMPLISHMENTS"
        title="Achievements & Certifications"
        description="Hackathon wins, industry certifications, and milestones earned by building and shipping."
      />

      {/* Hackathon Journey Collapsible Section */}
      {hackathons.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          {/* Section Header with Dropdown Toggle */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute inset-0 rounded-lg bg-accent-silver/10 blur-md opacity-50" aria-hidden />
                <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-accent-silver/40 bg-surface/80">
                  <Trophy size={16} className="text-accent-silver" />
                </div>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-text">
                  Hackathon Journey
                </h3>
                <p className="mt-0.5 text-xs text-muted">
                  {hackathons.length} events · Participant → Winner
                </p>
              </div>
            </div>

            {/* Dropdown Toggle Button — matches site HUD aesthetic */}
            <button
              type="button"
              onClick={() => setJourneyOpen((v) => !v)}
              aria-expanded={journeyOpen}
              aria-controls="hackathon-journey-panel"
              className="group flex shrink-0 items-center gap-2 rounded-[2px] border border-accent-silver/40 bg-surface/60 px-3 py-2 backdrop-blur-md font-mono text-[10px] uppercase tracking-[0.2em] text-accent-silver transition-all duration-300 hover:border-accent-silver/60 hover:bg-surface/80 hover:text-text focus:outline-none focus:ring-1 focus:ring-accent-silver/50"
            >
              <span>{journeyOpen ? "Collapse" : "Expand"}</span>
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  journeyOpen ? "rotate-180" : "rotate-0",
                  !journeyOpen && "group-hover:translate-y-0.5"
                )}
              >
                {journeyOpen ? (
                  <ChevronUp size={14} className="text-text" />
                ) : (
                  <ChevronDown size={14} className="text-accent-silver transition-colors group-hover:text-text" />
                )}
              </span>
            </button>
          </div>

          {/* Expand / Collapse Panel */}
          <AnimatePresence initial={false}>
            {journeyOpen && (
              <motion.div
                id="hackathon-journey-panel"
                key="journey-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.25, delay: 0.05 },
                }}
                className="overflow-hidden"
              >
                <div className="relative">
                  {/* Connecting timeline line — matches CareerJourney style */}
                  <div
                    className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-silver/60 via-accent-silver/20 to-transparent sm:block"
                    aria-hidden
                  />

                  <ol className="flex flex-col gap-8">
                    {hackathons.map((hackathon, i) => {
                      const isLatest = i === hackathons.length - 1;
                      const isWinner = "highlight" in hackathon && hackathon.highlight;
                      return (
                        <motion.li
                          key={hackathon.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{
                            duration: 0.45,
                            delay: 0.05 + i * 0.06,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="relative flex gap-5 sm:pl-0"
                        >
                          {/* Level Badge */}
                          <div className="relative z-10 hidden shrink-0 sm:block">
                            <div
                              className={cn(
                                "flex h-12 w-12 items-center justify-center rounded-full border font-mono text-xs font-semibold",
                                isWinner
                                  ? "border-accent-bright/70 bg-white/5 text-accent-bright shadow-[0_0_20px_-4px_rgba(140,212,255,0.5)]"
                                  : "border-accent-silver/50 bg-bg text-accent-silver"
                              )}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </div>
                          </div>

                          <GlassPanel
                            interactive
                            accent={isWinner ? "bright" : "silver"}
                            className="flex-1 p-6"
                          >
                            <div className="mb-3 flex flex-wrap items-center gap-3">
                              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-silver sm:hidden">
                                STEP {String(i + 1).padStart(2, "0")}
                              </span>
                              {"date" in hackathon && hackathon.date && (
                                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                                  {hackathon.date}
                                </span>
                              )}
                              {"achievement" in hackathon && hackathon.achievement && (
                                <span
                                  className={cn(
                                    "rounded-[2px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest border",
                                    isWinner
                                      ? "border-accent-bright/50 bg-accent-bright/10 text-accent-bright"
                                      : "border-white/20 bg-white/[0.05] text-white/70"
                                  )}
                                >
                                  {hackathon.achievement}
                                </span>
                              )}
                              {isLatest && !isWinner && (
                                <span className="rounded-[2px] border border-accent-bright/50 bg-accent-bright/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent-bright">
                                  Latest
                                </span>
                              )}
                            </div>

                            <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start">
                              <div
                                className={cn(
                                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border",
                                  isWinner
                                    ? "border-accent-bright/50 bg-accent-bright/5 text-accent-bright"
                                    : "border-accent-silver/40 bg-surface/60 text-accent-silver"
                                )}
                              >
                                <Trophy size={20} />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-text sm:text-xl">
                                  {hackathon.title.replace("🏆 ", "")}
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-muted">
                                  {hackathon.description}
                                </p>

                                {"project" in hackathon && hackathon.project && (
                                  <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="rounded-[2px] border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70 font-mono tracking-wide">
                                      PROJECT · {hackathon.project.toUpperCase()}
                                    </span>
                                  </div>
                                )}

                                {"certificateUrl" in hackathon && hackathon.certificateUrl && (
                                  <div className="mt-4">
                                    <a
                                      href={hackathon.certificateUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 rounded-[2px] border border-accent-silver/40 bg-surface/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-silver transition-all duration-300 hover:border-accent-silver/60 hover:bg-surface/80 hover:text-text"
                                    >
                                      <Award size={12} />
                                      View Certificate
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </GlassPanel>
                        </motion.li>
                      );
                    })}
                  </ol>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Collapsed state summary bar (only when journey is closed) */}
          <AnimatePresence initial={false}>
            {!journeyOpen && (
              <motion.div
                key="journey-summary"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassPanel className="p-4 sm:p-5" accent="silver">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      {hackathons.map((h, i) => {
                        const isWinner = "highlight" in h && h.highlight;
                        return (
                          <div
                            key={h.id}
                            className={cn(
                              "flex items-center gap-2 rounded-[2px] border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em]",
                              isWinner
                                ? "border-accent-bright/40 bg-accent-bright/10 text-accent-bright"
                                : "border-white/10 bg-white/[0.03] text-white/60"
                            )}
                            title={h.title}
                          >
                            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-current/40 bg-bg text-[9px]">
                              {i + 1}
                            </span>
                            <span className="hidden sm:inline">
                              {("achievement" in h && h.achievement) || "Participant"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <button
                      type="button"
                      onClick={() => setJourneyOpen(true)}
                      className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-silver transition-colors hover:text-text inline-flex items-center gap-1"
                    >
                      Open full timeline
                      <ChevronDown size={12} className="animate-bounce" />
                    </button>
                  </div>
                </GlassPanel>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Certifications Grid */}
      {certifications.length > 0 && (
        <div className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="relative">
              <span className="absolute inset-0 rounded-lg bg-accent-silver/10 blur-md opacity-50" aria-hidden />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-accent-silver/40 bg-surface/80">
                <Shield size={16} className="text-accent-silver" />
              </div>
            </div>
            <div>
              <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-text">
                Professional Certifications
              </h3>
              <p className="mt-0.5 text-xs text-muted">
                Verified credentials across security and AI domains
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => {
              const Icon =
                cert.title.includes("Cybersecurity")
                  ? ShieldCheck
                  : cert.title.includes("Network")
                  ? Shield
                  : cert.title.includes("Google") || cert.title.includes("Cloud")
                  ? Zap
                  : CATEGORY_ICONS[cert.category] || Award;
              const hasAccent =
                cert.title.includes("Cybersecurity") ||
                cert.title.includes("Network") ||
                cert.title.includes("Google");
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassPanel interactive accent="silver" className="flex h-full flex-col p-6 group">
                    <div className="mb-4 flex items-start justify-between">
                      <div
                        className={cn(
                          "flex h-11 w-11 items-center justify-center rounded-lg border bg-surface/60",
                          hasAccent
                            ? "border-accent-silver/50 text-accent-silver"
                            : "border-white/15 text-white/70"
                        )}
                      >
                        <Icon size={20} />
                      </div>
                      <Code2
                        size={14}
                        className="text-white/5 transition-colors group-hover:text-accent-silver/40"
                      />
                    </div>
                    <h4 className="mb-2 text-sm font-semibold leading-snug text-text">
                      {cert.title}
                    </h4>
                    <p className="mb-4 flex-1 text-xs leading-relaxed text-muted">
                      {cert.description}
                    </p>
                    <div className="mt-auto space-y-3">
                      {"date" in cert && cert.date && (
                        <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                          {cert.date}
                        </span>
                      )}
                      {"certificateUrl" in cert && cert.certificateUrl && (
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-[2px] border border-accent-silver/40 bg-surface/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-silver transition-all duration-300 hover:border-accent-silver/60 hover:bg-surface/80 hover:text-text"
                        >
                          <Award size={12} />
                          View Certificate
                        </a>
                      )}
                    </div>
                  </GlassPanel>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Other Achievements & Skills */}
      {otherAchievements.length > 0 && (
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="relative">
              <span className="absolute inset-0 rounded-lg bg-accent-silver/10 blur-md opacity-50" aria-hidden />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-accent-silver/40 bg-surface/80">
                <Sparkles size={16} className="text-accent-silver" />
              </div>
            </div>
            <div>
              <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-text">
                Skills & Milestones
              </h3>
              <p className="mt-0.5 text-xs text-muted">
                Track record of building, shipping, and consistent practice
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherAchievements.map((achievement, i) => {
              const Icon =
                SKILL_ICONS[achievement.id] ||
                CATEGORY_ICONS[achievement.category] ||
                Sparkles;
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <GlassPanel interactive accent="silver" className="flex h-full items-start gap-4 p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent-silver/40 bg-surface/60 text-accent-silver">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      {achievement.category && (
                        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                          {achievement.category}
                        </p>
                      )}
                      <h4 className="text-sm font-semibold text-text">
                        {achievement.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {achievement.description}
                      </p>
                      {"date" in achievement && achievement.date && (
                        <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                          {achievement.date}
                        </span>
                      )}
                      {"certificateUrl" in achievement && achievement.certificateUrl && (
                        <a
                          href={achievement.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-silver transition-colors hover:text-text"
                        >
                          View Certificate
                          <ChevronDown size={11} className="-rotate-90" />
                        </a>
                      )}
                    </div>
                  </GlassPanel>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
