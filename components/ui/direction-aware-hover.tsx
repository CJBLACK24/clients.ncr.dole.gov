"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function DirectionAwareHover({
  children,
  overlay,
  className,
}: {
  children: React.ReactNode;
  overlay: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("top");
  const [isHovered, setIsHovered] = useState(false);

  function getDirection(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return "top";
    const { width, height, top, left } = ref.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return (["top", "right", "bottom", "left"] as const)[d];
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setDirection(getDirection(e));
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setDirection(getDirection(e));
    setIsHovered(false);
  };

  const variants = {
    initial: (dir: string) => {
      const map: Record<string, { x: string; y: string }> = {
        top: { x: "0%", y: "-100%" },
        bottom: { x: "0%", y: "100%" },
        left: { x: "-100%", y: "0%" },
        right: { x: "100%", y: "0%" },
      };
      return map[dir] || map.top;
    },
    hover: { x: "0%", y: "0%" },
    exit: (dir: string) => {
      const map: Record<string, { x: string; y: string }> = {
        top: { x: "0%", y: "-100%" },
        bottom: { x: "0%", y: "100%" },
        left: { x: "-100%", y: "0%" },
        right: { x: "100%", y: "0%" },
      };
      return map[dir] || map.top;
    },
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-sm",
        className,
      )}
    >
      {children}
      <motion.div
        initial="initial"
        animate={isHovered ? "hover" : "exit"}
        variants={variants}
        custom={direction}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="absolute inset-0 z-20 flex items-center justify-center bg-background/90 p-6 backdrop-blur-sm"
      >
        <div className="relative z-30">{overlay}</div>
      </motion.div>
    </div>
  );
}
