"use client";

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-[2px] px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue disabled:pointer-events-none disabled:opacity-40";

const variants = {
  primary:
    "border border-accent-blue/60 bg-accent-blue/10 text-text shadow-[0_0_0_0_rgba(0,229,255,0)] hover:bg-accent-blue/20 hover:shadow-[0_0_24px_-4px_rgba(0,229,255,0.55)]",
  secondary:
    "border border-white/15 bg-white/[0.03] text-text hover:border-white/30 hover:bg-white/[0.06]",
  ghost: "border border-transparent text-muted hover:text-text hover:border-white/10",
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
