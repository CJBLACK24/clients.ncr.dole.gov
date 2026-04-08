"use client";

import React from "react";
import { motion } from "framer-motion";
import { DotBackground } from "@/components/ui/dot-background";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function HeroSection() {
  return (
    <DotBackground
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background"
      id="home"
    >
      <BackgroundBeams className="z-0 opacity-[0.08] dark:opacity-[0.15]" />

      <div className="z-10 flex flex-col items-center justify-center space-y-8 pt-20 px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-primary"
        >
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
          </div>
          Official Client Portal
        </motion.div>

        {/* Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10 w-full max-w-4xl"
        >
          <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-[1.15]">
            Welcome to{" "}
            <span className="text-primary">DOLE-NCR Client Portal</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto max-w-3xl text-pretty text-base text-muted-foreground md:text-lg leading-relaxed"
        >
          Delivering simple and improved technology solutions for easier and faster transactions.
          <br className="hidden md:block" />
          Your unified hub for e-SEnA requests, SSS certifications, and labor
          compliance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#services"
            className="group inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
          >
            Get Started
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Status dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {[
            { color: "bg-emerald-500", label: "24/7 Digital Hub Support" },
            { color: "bg-primary", label: "Secure e-Filing Portal" },
            { color: "bg-amber-500", label: "Real-time status tracking" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <span className={`h-2 w-2 rounded-full ${item.color}`} />
              <span className="text-xs font-medium text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </DotBackground>
  );
}
