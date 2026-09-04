"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillTree } from "@/data/portfolio";

const MAX_LEVEL = 5;

export function SkillTree() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="SKILL TREE"
        title="Skills"
        description="Every skill here has been leveled up on a real, shipped project — not a tutorial."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillTree.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassPanel interactive accent="silver" className="group h-full p-5">
              <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {skill.category}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-text sm:text-lg">
                    {skill.name}
                  </h3>
                </div>
                <span className="whitespace-nowrap rounded-[2px] border border-white/30 bg-white/[0.06] px-2 py-1 font-mono text-[10px] font-semibold text-white">
                  LV.{skill.level}
                </span>
              </div>

              <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] text-muted">
                <span>XP</span>
                <span className="font-tabular">{skill.xp}/100</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent-silver to-white"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.xp}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <div className="mt-3 flex gap-1" aria-hidden>
                {Array.from({ length: MAX_LEVEL }).map((_, dot) => (
                  <span
                    key={dot}
                    className={`h-1 flex-1 rounded-full ${
                      dot < skill.level ? "bg-accent-silver" : "bg-white/[0.08]"
                    }`}
                  />
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
