"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { careerLevels } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function CareerJourney() {
  return (
    <section id="journey" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="PROGRESSION LOG"
        title="Career Journey"
        description="Every stage unlocked the next. Here's the run so far, level by level."
      />

      <div className="relative">
        {/* connecting line */}
        <div
          className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-blue/60 via-accent-blue/20 to-transparent sm:block"
          aria-hidden
        />

        <ol className="flex flex-col gap-8">
          {careerLevels.map((item, i) => {
            const isCurrent = i === careerLevels.length - 1;
            return (
              <motion.li
                key={item.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-5 sm:pl-0"
              >
                <div className="relative z-10 hidden shrink-0 sm:block">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full border font-mono text-xs font-semibold",
                      isCurrent
                        ? "border-accent-green bg-accent-green/10 text-accent-green shadow-[0_0_20px_-4px_rgba(0,255,136,0.6)]"
                        : "border-accent-blue/50 bg-bg text-accent-blue",
                    )}
                  >
                    {String(item.level).padStart(2, "0")}
                  </div>
                </div>

                <GlassPanel
                  accent={isCurrent ? "green" : "blue"}
                  interactive
                  className="flex-1 p-6"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue sm:hidden">
                      LVL {String(item.level).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                      {item.period}
                    </span>
                    {isCurrent && (
                      <span className="rounded-full border border-accent-green/40 bg-accent-green/[0.08] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent-green">
                        In progress
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-text sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {item.description}
                  </p>
                </GlassPanel>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
