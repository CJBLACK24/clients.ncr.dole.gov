"use client";

import { motion } from "framer-motion";
import { DIGITAL_PORTALS, COMPLIANCE_DEADLINES } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { ExternalLink, Calendar, ShieldCheck } from "lucide-react";

export function PortalsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: Portals Grid */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Digital Gateways
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                Integrated Access Portals
              </h2>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground leading-relaxed">
                Direct access to DOLE-NCR&apos;s specialized management systems.
                A unified entry point for all digital labor services.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {DIGITAL_PORTALS.map((portal, i) => (
                <motion.a
                  key={portal.name}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className={cn(
                          "rounded-md px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                          portal.category === "employer"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                            : portal.category === "worker"
                              ? "bg-primary/10 text-primary"
                              : "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                        )}
                      >
                        {portal.category}
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/40 transition-colors group-hover:text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {portal.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      {portal.description}
                    </p>
                  </div>
                  <span className="mt-4 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Access Portal →
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Compliance Calendar */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full rounded-2xl border border-border bg-card p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <div className="mb-1.5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
                    <Calendar className="h-3.5 w-3.5" />
                    2025 Calendar
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Compliance Milestones
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-5">
                {COMPLIANCE_DEADLINES.map((deadline, i) => (
                  <motion.div
                    key={deadline.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-surface border border-border text-center">
                        <span className="text-[9px] font-medium uppercase text-muted-foreground">
                          {deadline.month.slice(0, 3)}
                        </span>
                        <span className="text-lg font-bold text-primary">
                          {deadline.day}
                        </span>
                      </div>
                      {i < COMPLIANCE_DEADLINES.length - 1 && (
                        <div className="mt-1.5 h-full w-px bg-border" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h4 className="text-sm font-semibold text-foreground">
                        {deadline.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {deadline.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-surface p-5 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-medium uppercase tracking-wider text-foreground">
                    Strategic Roadmap: eServe 2025
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  DOLE-NCR is currently migrating towards the{" "}
                  <strong className="text-foreground">eServe Portal</strong>—a
                  high-performance, unified compliance engine scheduled for full
                  release in late 2025.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
