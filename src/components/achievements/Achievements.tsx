"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Server,
  ShieldCheck,
  Layers,
  Trophy,
  GitBranch,
} from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/portfolio";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "ai-builder": Sparkles,
  "backend-engineer": Server,
  "security-minded": ShieldCheck,
  "full-stack-shipper": Layers,
  "hackathon-builder": Trophy,
  "open-source": GitBranch,
};

export function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="UNLOCKED"
        title="Achievements"
        description="Milestones earned by shipping, not by studying for them."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = ICONS[a.id] ?? Sparkles;
          return (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassPanel interactive accent="warning" className="flex h-full items-start gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] border border-warning/40 bg-warning/[0.08] text-warning">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-warning">
                    Achievement Unlocked
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-text">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{a.description}</p>
                </div>
              </GlassPanel>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
