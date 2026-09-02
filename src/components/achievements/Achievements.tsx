"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Server,
  ShieldCheck,
  Layers,
  Trophy,
  GitBranch,
  Award,
  Shield,
  Cloud,
  Zap,
  Target,
  Code2,
} from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/portfolio";

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
  const hackathons = achievements.filter((a) => a.category === "Hackathon");
  const certifications = achievements.filter((a) => a.category === "Certification");
  const otherAchievements = achievements.filter(
    (a) => a.category === "Achievement" || a.category === "Skill"
  );

  const featuredHackathon = hackathons.find((h) => h.highlight);
  const otherHackathons = hackathons.filter((h) => !h.highlight);

  return (
    <section id="achievements" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="ACCOMPLISHMENTS"
        title="Achievements & Certifications"
        description="Hackathon wins, industry certifications, and milestones earned by building and shipping."
      />

      {/* Featured: Hackathon Win */}
      {featuredHackathon && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <GlassPanel accent="bright" className="relative overflow-hidden p-8">
            {/* Background decoration */}
            <div className="absolute right-0 top-0 h-64 w-64 -translate-y-16 translate-x-16 opacity-5">
              <Trophy size={256} className="text-white" />
            </div>

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center">
              {/* Trophy Icon */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-white/30 bg-gradient-to-br from-white/20 to-white/5">
                <Trophy size={40} className="text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    🏆 Hackathon Winner
                  </span>
                  {featuredHackathon.date && (
                    <span className="text-xs text-muted">{featuredHackathon.date}</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {featuredHackathon.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {featuredHackathon.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featuredHackathon.project && (
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
                      {featuredHackathon.project}
                    </span>
                  )}
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
                    Team Omen
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
                    48 Hours
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
                    Low-Hallucination
                  </span>
                </div>
                {featuredHackathon.certificateUrl && (
                  <a
                    href={featuredHackathon.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/20"
                  >
                    <Award size={16} />
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      )}

      {/* Other Hackathons */}
      {otherHackathons.length > 0 && (
        <div className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-white">
            <Trophy size={16} />
            Hackathon Participations
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {otherHackathons.map((hackathon, i) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <GlassPanel interactive accent="silver" className="flex h-full flex-col p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ffa116]/30 bg-[#ffa116]/10 text-[#ffa116]">
                      <Trophy size={20} />
                    </div>
                    {hackathon.date && (
                      <span className="text-xs font-mono text-muted">{hackathon.date}</span>
                    )}
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-white">
                    {hackathon.title}
                  </h4>
                  <p className="mb-3 flex-1 text-sm leading-relaxed text-muted">
                    {hackathon.description}
                  </p>
                  {hackathon.project && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70">
                        Project: {hackathon.project}
                      </span>
                    </div>
                  )}
                  {hackathon.certificateUrl && (
                    <a
                      href={hackathon.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-silver transition-colors hover:text-white"
                    >
                      View Certificate
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications Grid */}
      {certifications.length > 0 && (
        <div className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-white">
            <Award size={16} />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => {
              const Icon = CATEGORY_ICONS[cert.category] || Award;
              let iconColor = "text-accent-silver";
              
              // Special colors for different cert providers
              if (cert.title.includes("Palo Alto")) {
                iconColor = "text-[#ff6700]"; // Palo Alto orange
              } else if (cert.title.includes("Google")) {
                iconColor = "text-[#4285f4]"; // Google blue
              } else if (cert.title.includes("Oracle")) {
                iconColor = "text-[#f80000]"; // Oracle red
              }

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <GlassPanel interactive accent="silver" className="flex h-full flex-col p-5">
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 ${iconColor}`}>
                      <Icon size={20} />
                    </div>
                    <h4 className="mb-2 text-sm font-semibold leading-snug text-white">
                      {cert.title}
                    </h4>
                    <p className="mb-3 flex-1 text-xs leading-relaxed text-muted">
                      {cert.description}
                    </p>
                    {cert.date && (
                      <span className="mb-3 block text-xs font-mono text-muted">{cert.date}</span>
                    )}
                    {cert.certificateUrl && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-silver transition-colors hover:text-white"
                      >
                        View Certificate
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
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
          <h3 className="mb-4 flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-white">
            <Sparkles size={16} />
            Skills & Milestones
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherAchievements.map((achievement, i) => {
              const Icon = SKILL_ICONS[achievement.id] || CATEGORY_ICONS[achievement.category] || Sparkles;
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassPanel interactive accent="silver" className="flex h-full items-start gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-accent-silver">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      {achievement.category && (
                        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                          {achievement.category}
                        </p>
                      )}
                      <h4 className="text-sm font-semibold text-white">{achievement.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {achievement.description}
                      </p>
                      {achievement.date && (
                        <span className="mt-2 block text-xs font-mono text-muted">
                          {achievement.date}
                        </span>
                      )}
                      {achievement.certificateUrl && (
                        <a
                          href={achievement.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent-silver transition-colors hover:text-white"
                        >
                          View Certificate
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
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
