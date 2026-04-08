"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import { FileText, Shield, BarChart3 } from "lucide-react";

const CategoryIcons: Record<string, React.ReactNode> = {
  requests: <FileText className="h-5 w-5" />,
  permits: <Shield className="h-5 w-5" />,
  reports: <BarChart3 className="h-5 w-5" />,
};

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>(SERVICE_CATEGORIES[0].id);
  const activeCat = SERVICE_CATEGORIES.find((c) => c.id === activeTab)!;

  return (
    <section id="services" className="relative bg-surface px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-medium uppercase tracking-widest text-primary"
          >
            Portal Resources
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Service Categories
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 h-0.5 w-16 rounded-full bg-primary"
          />
        </div>

        {/* Tab Filters */}
        <div id="services-list" className="scroll-mt-24">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all",
                  activeTab === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground",
                )}
              >
                <span className={activeTab === cat.id ? "text-primary-foreground" : "text-muted-foreground"}>
                  {CategoryIcons[cat.id]}
                </span>
                {cat.label}
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-medium",
                    activeTab === cat.id
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {cat.services.length}
                </span>
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {activeCat.services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-sm"
              >
                {/* Icon Header */}
                <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {CategoryIcons[activeTab]}
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-foreground">
                    {service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-5 line-clamp-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <a
                    href={service.link || "#"}
                    target={service.link ? "_blank" : undefined}
                    rel={service.link ? "noopener noreferrer" : undefined}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                  >
                    File Now
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
