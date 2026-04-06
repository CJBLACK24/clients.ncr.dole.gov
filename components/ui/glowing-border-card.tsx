"use client";

import { cn } from "@/lib/cn";
import React from "react";

export const GlowingBorderCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("group relative rounded-2xl p-[1px]", className)}>
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#010488]/0 via-[#010488]/0 to-[#010351]/0 opacity-0 blur-sm transition-all duration-500 group-hover:from-[#010488]/40 group-hover:via-[#010488]/60 group-hover:to-[#010351]/40 group-hover:opacity-100" />
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#010488]/0 via-[#010488]/0 to-[#010351]/0 opacity-0 transition-all duration-500 group-hover:from-[#010488]/20 group-hover:via-[#010488]/40 group-hover:to-[#010351]/20 group-hover:opacity-100" />
      {/* Card content */}
      <div className="relative rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
        {children}
      </div>
    </div>
  );
};
