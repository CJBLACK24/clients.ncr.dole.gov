"use client";

import React from "react";
import { cn } from "@/lib/cn";

export function BrutalButton({
  children,
  className,
  as: Component = "button",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl border-2 border-[#010351] bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#010351] shadow-[4px_4px_0px_0px_#010351] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#010351] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function BrutalButtonFilled({
  children,
  className,
  as: Component = "button",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl border-2 border-[#010351] bg-[#010488] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[4px_4px_0px_0px_#010351] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#010351] hover:bg-[#010351] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
