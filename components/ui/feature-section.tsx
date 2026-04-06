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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "flex flex-col items-center gap-8 md:flex-row",
        isReversed && "md:flex-row-reverse",
        className
      )}
    >
      {/* Icon block */}
      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-[#010488]/5 text-[#010488] transition-colors duration-300 hover:bg-[#010488]/10">
        {icon}
      </div>

      {/* Text */}
      <div className={cn("text-center md:text-left", isReversed && "md:text-right")}>
        <h3 className="text-xl font-bold text-[#010351]">{title}</h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
