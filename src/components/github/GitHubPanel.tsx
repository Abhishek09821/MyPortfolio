"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, GitFork, Star, Users, ExternalLink, Code2, Trophy, Target, Zap, Activity } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGithubStats } from "@/hooks/useGithubStats";
import { profile, socials } from "@/data/portfolio";
import { formatStat, cn } from "@/lib/utils";

const GITHUB_STAT_ICONS = [Terminal, Star, Users, GitFork];

type Tab = "github" | "leetcode";

export function GitHubPanel() {
  const [activeTab, setActiveTab] = useState<Tab>("github");
  const githubState = useGithubStats();

  return (
    <section id="github" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="LIVE CODING STATS"
        title="GitHub & LeetCode"
        description="Real-time contributions, problem-solving stats, and coding activity from both platforms."
      />

      {/* Tab Switcher */}
      <div className="mb-8 flex items-center justify-center">
        <GlassPanel className="flex w-full max-w-xs gap-1 p-1.5 sm:w-auto">
          <button
            onClick={() => setActiveTab("github")}
            className={cn(
              "relative flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 sm:flex-none sm:px-6",
              activeTab === "github"
                ? "text-white"
                : "text-white/60 hover:text-white/80"
            )}
          >
            {activeTab === "github" && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-md bg-white/10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative flex items-center justify-center gap-2">
              <Terminal size={16} />
              GitHub
            </span>
          </button>
          <button
            onClick={() => setActiveTab("leetcode")}
            className={cn(
              "relative flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 sm:flex-none sm:px-6",
              activeTab === "leetcode"
                ? "text-white"
                : "text-white/60 hover:text-white/80"
            )}
          >
            {activeTab === "leetcode" && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-md bg-white/10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative flex items-center justify-center gap-2">
              <Code2 size={16} />
              LeetCode
            </span>
          </button>
        </GlassPanel>
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        {activeTab === "github" && (
          <motion.div
            key="github"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* GitHub Stats Header */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <h3 className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-white">
                <Activity size={16} />
                Live GitHub Stats
              </h3>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-accent-silver transition-colors hover:text-white"
              >
                View Full Profile <ExternalLink size={12} />
              </a>
            </div>

            {githubState.status === "error" && (
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

            {githubState.status === "loading" && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4" aria-busy="true" aria-live="polite">
                {Array.from({ length: 4 }).map((_, i) => (
                  <GlassPanel key={i} className="h-24 animate-pulse p-6" />
                ))}
                <span className="sr-only">Loading GitHub stats…</span>
              </div>
            )}

            {githubState.status === "ready" && (
              <>
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { label: "Public Repos", value: githubState.data.publicRepos },
                    { label: "Total Stars", value: githubState.data.totalStars },
                    { label: "Followers", value: githubState.data.followers },
                    { label: "Following", value: githubState.data.following },
                  ].map((stat, i) => {
                    const Icon = GITHUB_STAT_ICONS[i];
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
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

                {/* Contribution Graph & Language Mix */}
                <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
                  <GlassPanel accent="bright" className="p-6 lg:col-span-2">
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white">
                      GitHub Contributions (365 Days)
                    </p>
                    <div className="overflow-x-auto rounded-lg bg-[#0d1117] p-3 sm:p-4">
                      {/* GitHub-style contribution graph using GitHub's green color */}
                      <img
                        src={`https://ghchart.rshah.org/39d353/${profile.github}`}
                        alt={`${profile.name}'s GitHub contribution graph`}
                        className="w-full"
                        style={{ minWidth: "320px" }}
                        loading="lazy"
                      />
                    </div>
                  </GlassPanel>

                  <GlassPanel accent="silver" className="p-6">
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-silver">
                      Top Languages
                    </p>
                    <div className="flex flex-col gap-3">
                      {githubState.data.topLanguages.length === 0 && (
                        <p className="text-sm text-muted">No public language data yet.</p>
                      )}
                      {githubState.data.topLanguages.map((lang) => {
                        const max = githubState.data.topLanguages[0]?.count || 1;
                        const pct = Math.round((lang.count / max) * 100);
                        return (
                          <div key={lang.name}>
                            <div className="mb-1 flex justify-between font-mono text-xs text-muted">
                              <span>{lang.name}</span>
                              <span>{lang.count} repos</span>
                            </div>
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                              <motion.div
                                className="h-full rounded-full bg-[#39d353]"
                                initial={{ width: 0 }}
                                animate={{ width: `${pct}%` }}
                                transition={{ duration: 0.7 }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {githubState.data.latestRepo && (
                      <div className="mt-6 border-t border-white/[0.06] pt-4">
                        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                          Latest Activity
                        </p>
                        <a
                          href={githubState.data.latestRepo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-2 text-sm text-text hover:text-white"
                        >
                          <span className="truncate font-medium">{githubState.data.latestRepo.name}</span>
                          <ExternalLink
                            size={14}
                            className="shrink-0 text-muted group-hover:text-white"
                            aria-hidden
                          />
                        </a>
                        <p className="mt-1 font-mono text-[11px] text-muted">
                          Last push:{" "}
                          {new Date(githubState.data.latestRepo.pushed_at).toLocaleDateString("en-IN", {
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
          </motion.div>
        )}

        {activeTab === "leetcode" && (
          <motion.div
            key="leetcode"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* LeetCode Stats Header */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <h3 className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-white">
                <Activity size={16} />
                Live LeetCode Stats
              </h3>
              <a
                href={socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-accent-silver transition-colors hover:text-white"
              >
                View Full Profile <ExternalLink size={12} />
              </a>
            </div>

            {/* LeetCode Stats - Using real badges/images */}
            <div className="space-y-6">
              {/* LeetCode Stats Card - Using actual LeetCode API/Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <GlassPanel accent="bright" className="overflow-hidden p-6">
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white">
                    LeetCode Stats Card
                  </p>
                  <div className="overflow-x-auto rounded-lg bg-[#282828] p-4">
                    <img
                      src={`https://leetcard.jacoblin.cool/${profile.leetcode}?theme=dark&font=Ubuntu&ext=heatmap`}
                      alt={`${profile.name}'s LeetCode Stats`}
                      className="w-full"
                      style={{ minWidth: "280px" }}
                      loading="lazy"
                    />
                  </div>
                </GlassPanel>
              </motion.div>

              {/* Recent Submissions / Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <GlassPanel accent="silver" className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-silver">
                      Problem Solving Journey
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#ffa116]/30 bg-[#ffa116]/10">
                        <Code2 size={24} className="text-[#ffa116]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">Continuously Learning</h4>
                        <p className="mt-1 text-sm text-muted">
                          Actively solving Data Structures & Algorithms problems on LeetCode to strengthen problem-solving skills.
                        </p>
                        <a
                          href={socials.leetcode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#ffa116] transition-colors hover:text-[#ffb84d]"
                        >
                          View All Solutions <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
