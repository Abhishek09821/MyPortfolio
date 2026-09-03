"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Briefcase, FileText } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";
import { ParticleField } from "@/components/ui/ParticleField";
import { GlowButton } from "@/components/ui/GlowButton";
import { profile, socials } from "@/data/portfolio";
import { MissionHUD } from "@/components/home/MissionHUD";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-14"
      aria-label="Introduction"
    >
      <GridBackground />
      <ParticleField />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6 sm:py-24">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex max-w-full items-center gap-2 rounded-full border border-white/30 bg-white/[0.06] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white sm:px-4 sm:text-xs sm:tracking-[0.25em]"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
          <span className="truncate">{profile.status}</span>
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-bold tracking-tight text-white text-glow-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <div className="mt-5 h-8 sm:h-9">
          <AnimatePresence mode="wait">
            <motion.p
              key={profile.roles[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-lg text-accent-silver sm:text-xl"
            >
              {profile.roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-pretty text-base text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 px-2 sm:flex-row sm:flex-wrap sm:items-center sm:px-0"
        >
          <GlowButton
            as="a"
            href="#projects"
            variant="primary"
            icon={<ArrowRight size={16} aria-hidden />}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Projects
          </GlowButton>
          <GlowButton
            as="a"
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={<FileText size={16} aria-hidden />}
          >
            Resume
          </GlowButton>
          <GlowButton
            as="a"
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            icon={<Terminal size={16} aria-hidden />}
          >
            GitHub
          </GlowButton>
          <GlowButton
            as="a"
            href={socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            icon={<Terminal size={16} aria-hidden />}
          >
            LeetCode
          </GlowButton>
          <GlowButton
            as="a"
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            icon={<Briefcase size={16} aria-hidden />}
          >
            LinkedIn
          </GlowButton>
        </motion.div>
      </div>

      <MissionHUD />
    </section>
  );
}
