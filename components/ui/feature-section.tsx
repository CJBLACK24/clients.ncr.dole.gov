"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function FeatureSection({
  title,
  description,
  icon,
  index = 0,
  className,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
  className?: string;
}) {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={cn(
        "flex flex-col items-center gap-6 md:flex-row",
        isReversed && "md:flex-row-reverse",
        className,
      )}
    >
      {/* Icon block */}
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>

      {/* Text */}
      <div className={cn("text-center md:text-left", isReversed && "md:text-right")}>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
