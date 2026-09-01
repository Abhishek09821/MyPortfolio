"use client";

import { motion } from "framer-motion";
import { Terminal, GitFork, Star, Users, ExternalLink, Code2, Trophy, Target, Zap } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGithubStats } from "@/hooks/useGithubStats";
import { profile, socials } from "@/data/portfolio";
import { formatStat } from "@/lib/utils";

const GITHUB_STAT_ICONS = [Terminal, Star, Users, GitFork];

export function GitHubPanel() {
  const state = useGithubStats();

  return (
    <section id="github" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="LIVE CODING STATS"
        title="GitHub & LeetCode"
        description="Live stats from GitHub API and LeetCode profile — real-time activity, contributions, and problem-solving journey."
      />

      {/* GitHub Section */}
      <div className="mb-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-white">
            <Terminal size={16} />
            GitHub Profile
          </h3>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-accent-silver transition-colors hover:text-white"
          >
            View Profile <ExternalLink size={12} />
          </a>
        </div>

        {state.status === "error" && (
          <GlassPanel accent="warning" className="p-6 text-sm text-muted">
            Live GitHub data is unavailable right now. View the profile directly on{" "}
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-silver underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </GlassPanel>
        )}

        {state.status === "loading" && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4" aria-busy="true" aria-live="polite">
            {Array.from({ length: 4 }).map((_, i) => (
              <GlassPanel key={i} className="h-24 animate-pulse-glow p-6" />
            ))}
            <span className="sr-only">Loading GitHub stats…</span>
          </div>
        )}

        {state.status === "ready" && (
          <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Public Repos", value: state.data.publicRepos },
                { label: "Total Stars", value: state.data.totalStars },
                { label: "Followers", value: state.data.followers },
                { label: "Following", value: state.data.following },
              ].map((stat, i) => {
                const Icon = GITHUB_STAT_ICONS[i];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <GlassPanel accent="silver" className="flex flex-col items-center gap-2 p-6 text-center">
                      <Icon size={18} className="text-accent-silver" aria-hidden />
                      <span className="font-mono text-2xl font-semibold text-text">
                        {formatStat(stat.value)}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                        {stat.label}
                      </span>
                    </GlassPanel>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
              <GlassPanel accent="bright" className="p-6 lg:col-span-2">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white">
                  Contribution Graph
                </p>
                <div className="overflow-x-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://ghchart.rshah.org/c0c0c0/${profile.github}`}
                    alt={`${profile.name}'s GitHub contribution graph`}
                    className="min-w-[600px]"
                    loading="lazy"
                  />
                </div>
              </GlassPanel>

              <GlassPanel accent="silver" className="p-6">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-silver">
                  Language Mix
                </p>
                <div className="flex flex-col gap-3">
                  {state.data.topLanguages.length === 0 && (
                    <p className="text-sm text-muted">No public language data yet.</p>
                  )}
                  {state.data.topLanguages.map((lang) => {
                    const max = state.data.topLanguages[0]?.count || 1;
                    const pct = Math.round((lang.count / max) * 100);
                    return (
                      <div key={lang.name}>
                        <div className="mb-1 flex justify-between font-mono text-xs text-muted">
                          <span>{lang.name}</span>
                          <span>{lang.count} repos</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                          <motion.div
                            className="h-full rounded-full bg-accent-silver"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {state.data.latestRepo && (
                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      Latest Activity
                    </p>
                    <a
                      href={state.data.latestRepo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-2 text-sm text-text hover:text-white"
                    >
                      <span className="truncate font-medium">{state.data.latestRepo.name}</span>
                      <ExternalLink
                        size={14}
                        className="shrink-0 text-muted group-hover:text-white"
                        aria-hidden
                      />
                    </a>
                    <p className="mt-1 font-mono text-[11px] text-muted">
                      Last push:{" "}
                      {new Date(state.data.latestRepo.pushed_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                )}
              </GlassPanel>
            </div>
          </>
        )}
      </div>

      {/* LeetCode Section */}
      <div className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-white">
            <Code2 size={16} />
            LeetCode Profile
          </h3>
          <a
            href={socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-accent-silver transition-colors hover:text-white"
          >
            View Profile <ExternalLink size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Problems Solved", value: "Active", icon: Target, color: "white" },
            { label: "Easy", value: "Working", icon: Zap, color: "white" },
            { label: "Medium", value: "Learning", icon: Trophy, color: "white" },
            { label: "Hard", value: "Growing", icon: Code2, color: "white" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassPanel accent="silver" className="flex flex-col items-center gap-3 p-6 text-center">
                <stat.icon size={20} className="text-accent-silver" aria-hidden />
                <span className="font-mono text-2xl font-semibold text-white">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </span>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        {/* LeetCode Card/Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5"
        >
          <GlassPanel accent="bright" className="overflow-hidden p-6">
            <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-white/5">
                <Code2 size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Competitive Programming Journey
                </p>
                <h4 className="text-lg font-semibold text-white">
                  Actively solving DSA problems on LeetCode
                </h4>
                <p className="mt-2 text-sm text-muted">
                  Continuously improving problem-solving skills through consistent practice and learning.
                </p>
              </div>
              <a
                href={socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/20"
              >
                View Solutions
              </a>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
