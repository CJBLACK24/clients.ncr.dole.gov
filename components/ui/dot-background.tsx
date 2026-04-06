"use client";

import { cn } from "@/lib/cn";
import React from "react";

export function DotBackground({
  children,
  className,
  id,
  dotColor = "var(--border)",
  dotSize = 1.2,
  gap = 22,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dotColor?: string;
  dotSize?: number;
  gap?: number;
  [key: string]: unknown;
}) {
  return (
    <div
      id={id}
      className={cn("relative w-full overflow-hidden transition-colors duration-500", className)}
      {...props}
      style={{
        backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${gap}px ${gap}px`,
      } as React.CSSProperties}
    >
      {/* Radial fade mask so dots fade out toward edges (now using background color) */}
      <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
