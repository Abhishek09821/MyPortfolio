"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const LINES = [
  "Initializing system...",
  "Loading neural interface...",
  "Connecting AI modules...",
  "Portfolio online.",
];

interface BootScreenProps {
  onComplete: () => void;
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const prefersReduced = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      onComplete();
      return;
    }

    if (lineIndex >= LINES.length) {
      const exitTimer = setTimeout(() => setDone(true), 260);
      const completeTimer = setTimeout(onComplete, 700);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }

    const timer = setTimeout(() => setLineIndex((i) => i + 1), 620);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex, prefersReduced]);

  function skip() {
    onComplete();
  }

  if (prefersReduced) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg px-6"
        >
          <div className="hud-scanlines pointer-events-none absolute inset-0 opacity-40" aria-hidden />

          <div className="w-full max-w-md font-mono text-sm text-accent-blue sm:text-base">
            {LINES.slice(0, lineIndex).map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-2 flex items-center gap-2"
              >
                <span className="text-accent-green">{">"}</span>
                <span className={i === LINES.length - 1 ? "text-accent-green" : ""}>{line}</span>
              </motion.p>
            ))}
            {lineIndex < LINES.length && (
              <span className="inline-block h-4 w-2 animate-pulse bg-accent-blue align-middle" />
            )}
          </div>

          <div className="mt-10 h-px w-48 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-accent-blue"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(100, (lineIndex / LINES.length) * 100)}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <button
            type="button"
            onClick={skip}
            className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted underline-offset-4 hover:text-text hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blue"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
