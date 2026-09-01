"use client";

import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Accent = "silver" | "bright" | "warning" | "muted";

const accentBorder: Record<Accent, string> = {
  silver: "before:border-accent-silver after:border-accent-silver",
  bright: "before:border-accent-bright after:border-accent-bright",
  warning: "before:border-warning after:border-warning",
  muted: "before:border-muted after:border-muted",
};

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  accent?: Accent;
  interactive?: boolean;
  brackets?: boolean;
  className?: string;
}

/**
 * The site's signature element: a glass panel framed by targeting-reticle
 * corner brackets. Used for every card, stat block, and content panel so the
 * HUD language stays consistent across sections.
 */
export function GlassPanel({
  children,
  accent = "silver",
  interactive = false,
  brackets = true,
  className,
  ...rest
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "hud-corner group relative rounded-[2px] border border-white/[0.06] bg-surface/60 backdrop-blur-md",
        brackets && "before:content-[''] after:content-['']",
        brackets &&
          "before:absolute before:left-[-1px] before:top-[-1px] before:h-3 before:w-3 before:border-l before:border-t before:opacity-70",
        brackets &&
          "after:absolute after:right-[-1px] after:bottom-[-1px] after:h-3 after:w-3 after:border-r after:border-b after:opacity-70",
        brackets && accentBorder[accent],
        interactive &&
          "transition-all duration-300 hover:border-white/[0.12] hover:bg-surface/80 focus-within:border-white/[0.16]",
        className,
      )}
      {...rest}
    >
      {/* secondary corners (top-right / bottom-left) via pseudo siblings using a wrapper */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute right-[-1px] top-[-1px] h-3 w-3 border-r border-t opacity-70",
          accent === "silver" && "border-accent-silver",
          accent === "bright" && "border-accent-bright",
          accent === "warning" && "border-warning",
          accent === "muted" && "border-muted",
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-[-1px] left-[-1px] h-3 w-3 border-b border-l opacity-70",
          accent === "silver" && "border-accent-silver",
          accent === "bright" && "border-accent-bright",
          accent === "warning" && "border-warning",
          accent === "muted" && "border-muted",
        )}
      />
      {children}
    </div>
  );
}
