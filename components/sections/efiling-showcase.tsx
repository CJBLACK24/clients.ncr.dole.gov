"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function EfilingShowcase() {
  return (
    <section
      className="relative overflow-hidden bg-background px-6 py-24 transition-colors duration-300"
      id="efiling"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-medium uppercase tracking-widest text-primary"
          >
            e-Services Portal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Services
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-4 h-0.5 w-16 rounded-full bg-primary"
          />
        </div>

        {/* 2-Column Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-10 md:p-14">
              <Image
                src="/efiling_logo.png"
                alt="DOLE-NCR e-Filing Service Logo"
                width={500}
                height={400}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              The Official <span className="text-primary">e-Filing</span> Portal
            </h3>

            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">DOLE-NCR e-Filing Service</strong>{" "}
                is a free, online process for the submission of applications and
                reports and other labor-related programs and services.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This free service powered by Google Forms allows clients to
                register, fill out forms free of charge and submit applications
                and monitoring reports, request necessary permits,
                certifications and documents and perform a number of other
                interactions with DOLE-NCR in a secure online environment.
              </p>
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Accessible to ALL clients with a valid email address. Certain
                  programs require a{" "}
                  <strong className="font-semibold text-primary">
                    Google Account
                  </strong>{" "}
                  for document uploads.
                </p>
              </div>
            </div>

            <div className="mt-2">
              <a
                href="#services-list"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
