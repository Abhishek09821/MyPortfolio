import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Subtle animated grid backdrop */}
      <div className="hud-grid hud-scan pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      {/* Scanlines overlay */}
      <div className="hud-scanlines pointer-events-none absolute inset-0 opacity-20" aria-hidden />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Error code */}
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-white" aria-hidden />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            System Error
          </p>
        </div>

        <h1 className="font-display text-[clamp(6rem,20vw,12rem)] font-bold leading-none tracking-tight text-white text-glow-white select-none">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-text sm:text-2xl">
            Page Not Found
          </h2>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted sm:text-base">
            The coordinates you entered don&apos;t match any known sector. The page may have
            been moved, deleted, or never existed.
          </p>
        </div>

        {/* HUD status line */}
        <div className="flex items-center gap-2 rounded-[2px] border border-white/10 bg-white/[0.03] px-4 py-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Status
          </span>
          <span className="h-px flex-1 bg-white/10" aria-hidden />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
            404 — Not Found
          </span>
        </div>

        {/* Actions */}
        <div className="mt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Return Home
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Report Issue
          </Link>
        </div>

        {/* Bottom decoration */}
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted/50">
          Mission aborted · Sector unknown
        </p>
      </div>
    </div>
  );
}
