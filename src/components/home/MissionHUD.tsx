"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { missionStatus } from "@/data/portfolio";

export function MissionHUD() {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-4 pb-10 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
      >
        {missionStatus.map((item, i) => (
          <GlassPanel
            key={item.label}
            accent={i % 2 === 0 ? "silver" : "bright"}
            className="flex flex-col items-center gap-1 px-3 py-3 text-center sm:px-4 sm:py-4"
          >
            <span className="font-mono text-base font-semibold text-text sm:text-xl">
              {item.value}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted sm:text-[10px] sm:tracking-[0.2em]">
              {item.label}
            </span>
          </GlassPanel>
        ))}
      </motion.div>
    </div>
  );
}
