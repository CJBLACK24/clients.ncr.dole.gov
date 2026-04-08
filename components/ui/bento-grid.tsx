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
        className,
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
        "group/bento flex flex-col justify-between space-y-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-sm",
        className,
      )}
    >
      {header && (
        <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-lg bg-surface overflow-hidden">
          {header}
        </div>
      )}
      <div className="px-1">
        {icon && (
          <div className="mb-3 text-primary">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="mb-1.5 text-base font-semibold text-foreground">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
