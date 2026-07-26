"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

export type GithubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

export type GithubStats = {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  topLanguages: { name: string; count: number }[];
  latestRepo: GithubRepo | null;
  avatarUrl: string | null;
};

type FetchState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; data: GithubStats };

const GITHUB_API = "https://api.github.com";
const CACHE_KEY = `gh-stats-${profile.github}`;
const CACHE_TTL_MS = 1000 * 60 * 15; // 15 minutes

export function useGithubStats(): FetchState {
  const [state, setState] = useState<FetchState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        // Serve from a short-lived in-memory/session cache to stay well
        // under GitHub's unauthenticated rate limit.
        const cached = typeof window !== "undefined" ? sessionStorage.getItem(CACHE_KEY) : null;
        if (cached) {
          const parsed = JSON.parse(cached) as { ts: number; data: GithubStats };
          if (Date.now() - parsed.ts < CACHE_TTL_MS) {
            if (!cancelled) setState({ status: "ready", data: parsed.data });
            return;
          }
        }

        const [userRes, reposRes] = await Promise.all([
          fetch(`${GITHUB_API}/users/${profile.github}`),
          fetch(`${GITHUB_API}/users/${profile.github}/repos?per_page=100&sort=pushed`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error("GitHub API unavailable");
        }

        const user = await userRes.json();
        const repos: GithubRepo[] = await reposRes.json();

        const nonForks = repos.filter((r) => !r.fork);
        const totalStars = nonForks.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

        const langCounts = new Map<string, number>();
        for (const r of nonForks) {
          if (!r.language) continue;
          langCounts.set(r.language, (langCounts.get(r.language) || 0) + 1);
        }
        const topLanguages = [...langCounts.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, count }));

        const latestRepo = nonForks.length > 0 ? nonForks[0] : null;

        const data: GithubStats = {
          publicRepos: user.public_repos ?? 0,
          followers: user.followers ?? 0,
          following: user.following ?? 0,
          totalStars,
          topLanguages,
          latestRepo,
          avatarUrl: user.avatar_url ?? null,
        };

        if (typeof window !== "undefined") {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
        }

        if (!cancelled) setState({ status: "ready", data });
      } catch (err) {
        if (!cancelled) {
          setState({
            status: "error",
            message: err instanceof Error ? err.message : "Failed to load GitHub data",
          });
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
