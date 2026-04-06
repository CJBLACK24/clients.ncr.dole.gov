"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { SERVICE_CATEGORIES } from "@/lib/constants";

/* ─── Inline SVG icons for each service type ────────────── */
const CategoryIcons: Record<string, React.ReactNode> = {
  requests: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  permits: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  reports: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
};

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>(SERVICE_CATEGORIES[0].id);
  const activeCat = SERVICE_CATEGORIES.find((c) => c.id === activeTab)!;

  return (
    <section id="services" className="relative overflow-hidden bg-background px-6 py-32">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -top-[10%] -left-[5%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-[10%] -right-[5%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Modern Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-[0_0_15px_rgba(47,164,255,0.1)] backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Portal Resources
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-foreground sm:text-5xl"
          >
            Service Categories
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 h-1 w-24 rounded-full bg-primary" 
          />
        </div>

        {/* Categories Tab System */}
        <div id="services-list" className="scroll-mt-24">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200",
                  activeTab === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "border border-border bg-surface/50 text-foreground/70 hover:border-primary/50 hover:text-primary",
                )}
              >
                <span
                  className={
                    activeTab === cat.id ? "text-primary-foreground" : "text-foreground/70"
                  }
                >
                  {CategoryIcons[cat.id]}
                </span>
                {cat.label}
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold",
                    activeTab === cat.id
                      ? "bg-white/20 text-white"
                      : "bg-surface text-foreground/40 border border-border",
                  )}
                >
                  {cat.services.length}
                </span>
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {activeCat.services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/40 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg dark:bg-surface/20"
              >
                {/* Icon Header Area */}
                <div className="flex items-center justify-center bg-gradient-to-br from-primary/5 to-transparent px-6 py-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface/60 text-primary shadow-sm border border-border">
                    {CategoryIcons[activeTab]}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-base font-black leading-tight text-foreground italic">
                    {service.title}
                  </h3>
                  <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-foreground/60 font-medium">
                    {service.description}
                  </p>

                  {/* File Now Button */}
                  <a
                    href={service.link || "#"}
                    target={service.link ? "_blank" : undefined}
                    rel={service.link ? "noopener noreferrer" : undefined}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-black text-primary-foreground transition-all hover:brightness-110"
                  >
                    File Now
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
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
