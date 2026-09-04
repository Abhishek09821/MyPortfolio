"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target, Rocket, Flag } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutCards } from "@/data/portfolio";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  location: MapPin,
  education: GraduationCap,
  focus: Target,
  mission: Rocket,
  goals: Flag,
};

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="OPERATOR PROFILE"
        title="About"
        description="A quick systems check — who's behind the console, and what they're optimizing for."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aboutCards.map((card, i) => {
          const Icon = ICONS[card.id] ?? Target;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={card.id === "goals" ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <GlassPanel interactive accent="silver" className="h-full p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[2px] border border-accent-silver/30 bg-accent-silver/[0.06] text-accent-silver">
                  <Icon size={18} />
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {card.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-text">{card.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.detail}</p>
              </GlassPanel>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
