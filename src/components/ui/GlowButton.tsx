"use client";

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-[2px] px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-40";

const variants = {
  primary:
    "border border-white/60 bg-white/10 text-white shadow-[0_0_0_0_rgba(255,255,255,0)] hover:bg-white/20 hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.55)]",
  secondary:
    "border border-white/20 bg-white/[0.03] text-white hover:border-white/40 hover:bg-white/[0.08]",
  ghost: "border border-transparent text-muted hover:text-white hover:border-white/10",
};

type Variant = keyof typeof variants;

interface CommonProps {
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}

interface ButtonProps extends CommonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
}

interface AnchorProps extends CommonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
}

type GlowButtonProps = ButtonProps | AnchorProps;

function isAnchor(props: GlowButtonProps): props is AnchorProps {
  return props.as === "a";
}

export function GlowButton(props: GlowButtonProps) {
  const { children, variant = "primary", className, icon } = props;
  const classes = cn(base, variants[variant], className);

  if (isAnchor(props)) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, children: c, variant: v, className: cn2, icon: i, ...anchorRest } = props;
    return (
      <a className={classes} {...anchorRest}>
        {icon}
        {children}
      </a>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, children: c, variant: v, className: cn2, icon: i, ...buttonRest } = props;
  return (
    <button className={classes} {...buttonRest}>
      {icon}
      {children}
    </button>
  );
}
