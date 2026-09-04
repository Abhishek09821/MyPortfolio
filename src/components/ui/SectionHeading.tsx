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
        "mb-8 flex flex-col gap-2 sm:mb-10 lg:mb-12",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-accent-silver">
        <span className="h-px w-6 bg-accent-silver/60" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="text-balance text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-pretty text-sm text-muted sm:text-base">{description}</p>
      )}
    </motion.div>
  );
}
