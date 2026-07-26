"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-12 flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-accent-blue">
        <span className="h-px w-8 bg-accent-blue/60" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-pretty text-base text-muted sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
