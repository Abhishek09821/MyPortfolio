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
        className="grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        {missionStatus.map((item, i) => (
          <GlassPanel
            key={item.label}
            accent={i % 2 === 0 ? "blue" : "green"}
            className="flex flex-col items-center gap-1 px-4 py-4 text-center"
          >
            <span className="font-mono text-lg font-semibold text-text sm:text-xl">
              {item.value}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:text-xs">
              {item.label}
            </span>
          </GlassPanel>
        ))}
      </motion.div>
    </div>
  );
}
