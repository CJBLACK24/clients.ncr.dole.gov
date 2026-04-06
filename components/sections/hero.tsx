"use client";

import React from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { DotBackground } from "@/components/ui/dot-background";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function HeroSection() {
  // We use Framer Motion to drive the animation of the beam's mask.
  const progress = useMotionValue(0);

  // Animates from 0 to 1 over 3 seconds continuously.
  useAnimationFrame((time) => {
    progress.set((time % 3000) / 3000);
  });

  // Calculate the offsets for the 4 stops that dictate the glowing beam mask.
  const stop1 = useTransform(progress, (p) => `${(p * 140 - 20).toFixed(2)}%`);
  const stop2 = useTransform(progress, (p) => `${(p * 140 - 15).toFixed(2)}%`);
  const stop3 = useTransform(progress, (p) => `${(p * 140 - 5).toFixed(2)}%`);
  const stop4 = useTransform(progress, (p) => `${(p * 140).toFixed(2)}%`);

  return (
    <DotBackground 
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background" 
      id="home"
    >
      <BackgroundBeams className="z-0 scale-[2.5] opacity-[0.25] dark:opacity-[0.4]" />
      {/* Enhanced Diagonal Grid Overlay */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-[0.05] dark:opacity-[0.1] bg-grid-pattern" 
      />

      <div className="z-10 flex flex-col items-center justify-center space-y-10 pt-20 px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative inline-flex items-center gap-2 rounded-full border border-border bg-surface py-1.5 pl-2 pr-4 backdrop-blur-sm transition-all hover:bg-surface/80"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-primary">
            Official Client Portal
          </span>
        </motion.div>

        {/* Hero Heading */}
        <div className="relative z-10 w-full max-w-7xl">
          <h1 className="text-pretty text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2]">
            Welcome to <span className="text-primary">DOLE-NCR Client Portal!</span>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mx-auto mt-6 max-w-4xl text-pretty text-lg text-foreground/70 md:text-xl font-medium leading-relaxed"
        >
          Delivering simple and improved technology solutions for easier and faster transactions.<br className="hidden md:block" />
          Your unified hub for e-SEnA requests, SSS certifications, and labor compliance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#services"
            className="group inline-flex items-center justify-center rounded-xl bg-primary px-10 py-4 text-[14px] font-black text-primary-foreground transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95 shadow-[0_0_30px_rgba(47,164,255,0.2)]"
          >
            Get Started
            <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-10 py-4 text-[14px] font-black text-foreground transition-all hover:bg-surface/80"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Status dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6"
        >
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" 
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">24/7 Digital Hub Support</span>
          </div>
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(47,164,255,0.8)]" 
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">Secure e-Filing Portal</span>
          </div>
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]" 
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">Real-time status tracking</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-0 flex items-center justify-center pointer-events-none w-full opacity-[0.1] dark:opacity-[0.15]">
        {/* Enormous Animated Beam UI */}
        <div className="flex w-full items-center justify-center [--beam-color-1:#2FA4FF] [--beam-color-2:#0128d9] [--beam-color-3:#2FA4FF] [--path-color:var(--border)]">
          <svg
            width="2000"
            height="600"
            viewBox="0 0 600 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto opacity-50"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="fadeMask" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="black"></stop>
                <stop offset="10%" stopColor="white"></stop>
                <stop offset="90%" stopColor="white"></stop>
                <stop offset="100%" stopColor="black"></stop>
              </linearGradient>

              <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent"></stop>
                <stop offset="30%" stopColor="var(--beam-color-1)"></stop>
                <stop offset="50%" stopColor="var(--beam-color-2)"></stop>
                <stop offset="70%" stopColor="var(--beam-color-3)"></stop>
                <stop offset="100%" stopColor="transparent"></stop>
              </linearGradient>

              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>

              <mask id="fadeEndsMask">
                <rect x="0" y="0" width="600" height="130" fill="url(#fadeMask)"></rect>
              </mask>

              <linearGradient
                id="beamFadeGradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="600"
                y2="0"
              >
                <motion.stop offset={stop1} stopColor="black"></motion.stop>
                <motion.stop offset={stop2} stopColor="white"></motion.stop>
                <motion.stop offset={stop3} stopColor="white"></motion.stop>
                <motion.stop offset={stop4} stopColor="black"></motion.stop>
              </linearGradient>

              <mask id="beamMask">
                <path
                  d="M 0 100 L 150 100 L 200 30 L 400 30 L 450 100 L 600 100"
                  stroke="url(#beamFadeGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                ></path>
              </mask>
            </defs>

            <g mask="url(#fadeEndsMask)">
              {/* The dashed background path */}
              <path
                d="M 0 100 L 150 100 L 200 30 L 400 30 L 450 100 L 600 100"
                stroke="var(--path-color)"
                strokeWidth="1.5"
                strokeDasharray="1 8"
                strokeLinecap="round"
                fill="none"
              ></path>

              {/* The glowing foreground beam */}
              <g filter="url(#glow)">
                <path
                  d="M 0 100 L 150 100 L 200 30 L 400 30 L 450 100 L 600 100"
                  stroke="url(#beamGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="1 10"
                  fill="none"
                  mask="url(#beamMask)"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </DotBackground>
  );
}
