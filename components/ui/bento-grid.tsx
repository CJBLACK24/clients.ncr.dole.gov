"use client";

import { cn } from "@/lib/cn";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento flex flex-col justify-between space-y-4 rounded-[40px] border border-border bg-surface/40 p-8 shadow-sm transition-all duration-500 hover:border-primary/40 hover:bg-surface hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 backdrop-blur-md dark:bg-surface/20",
        className
      )}
    >
      {header && (
        <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-[32px] bg-gradient-to-br from-surface to-transparent transition-all duration-500 group-hover/bento:from-primary/10 group-hover/bento:to-transparent overflow-hidden border border-border/50">
          {header}
        </div>
      )}
      <div className="transition-all duration-500 group-hover/bento:translate-x-2 px-2">
        {icon && (
          <div className="mb-4 text-primary transition-transform duration-500 group-hover/bento:scale-110">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="mb-2 text-xl font-black tracking-tight text-foreground uppercase italic decoration-primary decoration-2">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm leading-relaxed text-foreground/60 font-medium italic">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
