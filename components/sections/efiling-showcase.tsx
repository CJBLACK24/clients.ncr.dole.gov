"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function EfilingShowcase() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 md:py-32 transition-colors duration-500" id="efiling">
      {/* Background Accents */}
      <div className="pointer-events-none absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm shadow-sm"
          >
            e-Services Portal
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl italic"
          >
            SERVICES
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-6 h-1 w-24 rounded-full bg-primary" 
          />
        </div>

        {/* 2-Column Minimalistic Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left - Visual Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative"
          >
            {/* Soft Glow behind image */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative overflow-hidden rounded-[40px] border border-border bg-surface p-10 md:p-16 backdrop-blur-md transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 dark:bg-surface/20">
              <Image
                src="/efiling_logo.png"
                alt="DOLE-NCR e-Filing Service Logo"
                width={500}
                height={400}
                className="h-auto w-full object-contain drop-shadow-sm transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />
              
              {/* Corner Accent */}
              <div className="absolute top-6 left-6 h-12 w-12 rounded-2xl border border-border/50 bg-surface/50 p-2.5 backdrop-blur-md">
                <div className="h-full w-full rounded-lg bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text Information */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col gap-8"
            >
      <h3 className="text-3xl font-black tracking-tight text-foreground md:text-4xl italic">
        The Official <span className="text-primary tracking-tighter">e-Filing</span> Portal
      </h3>
              
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-foreground/70 md:text-lg font-medium">
                  <strong className="font-black text-primary">DOLE-NCR e-Filing Service</strong>{" "}
                  is a free, online process for the submission of applications and
                  reports and other labor-related programs and services.
                </p>
                <p className="text-sm leading-relaxed text-foreground/50 md:text-base font-medium">
                  This free service powered by Google Forms allows clients to register, fill
                  out forms free of charge and submit applications and monitoring
                  reports, request necessary permits, certifications and documents
                  and perform a number of other interactions with DOLE-NCR in a
                  secure online environment.
                </p>
                <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
                  <p className="text-xs font-medium leading-relaxed text-foreground/60 italic">
                    Accessible to ALL clients with a valid email address. 
                    Certain programs require a <strong className="text-primary uppercase tracking-tight">Google Account</strong> for 
                    document uploads.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                <a 
                  href="#services-list" 
                  className="rounded-xl bg-primary px-8 py-4 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.03] active:scale-95"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
