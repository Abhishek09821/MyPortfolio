"use client";

import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  intensity?: "subtle" | "normal";
}

/**
 * Pure-CSS animated perspective grid + radial glow. No canvas, no JS work —
 * cheap enough to run behind the hero at 60fps on low-end mobile.
 */
export function GridBackground({ className, intensity = "normal" }: GridBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {/* radial core glow */}
      <div
        className={cn(
          "absolute left-1/2 top-[-10%] h-[70vh] w-[70vh] -translate-x-1/2 rounded-full blur-[100px]",
          intensity === "normal" ? "bg-accent-blue/[0.10]" : "bg-accent-blue/[0.06]",
        )}
      />
      <div className="absolute bottom-[-20%] right-[10%] h-[50vh] w-[50vh] rounded-full bg-accent-green/[0.06] blur-[110px]" />

      {/* moving grid */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]">
        <div className="hud-grid absolute inset-0 opacity-[0.35] motion-reduce:animate-none" />
      </div>

      {/* scanline sweep */}
      <div className="hud-scan absolute inset-0 opacity-[0.5] motion-reduce:hidden" />
    </div>
  );
}
