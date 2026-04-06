"use client";

import { motion } from "framer-motion";
import { DIGITAL_PORTALS, COMPLIANCE_DEADLINES } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { ExternalLink, Calendar, ShieldCheck, Zap } from "lucide-react";

export function PortalsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Decorative background grid */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: Portals Grid */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur-sm">
                <Zap className="h-3 w-3" />
                Digital Gateways
              </div>
              <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl italic">
                Integrated Access Portals
              </h2>
              <p className="mt-4 text-foreground/60 font-medium leading-relaxed">
                Direct access to DOLE-NCR&apos;s specialized management systems. A unified entry point for all digital labor services.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {DIGITAL_PORTALS.map((portal, i) => (
                <motion.a
                  key={portal.name}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-all hover:border-primary/30 hover:bg-surface dark:bg-surface/20"
                >
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center justify-between">
                      <div className={cn(
                        "rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-wider",
                        portal.category === 'employer' ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" :
                        portal.category === 'worker' ? "bg-primary/10 text-primary" :
                        "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                      )}>
                        {portal.category}
                      </div>
                      <ExternalLink className="h-4 w-4 text-foreground/30 transition-colors group-hover:text-primary" />
                    </div>
                    <h3 className="text-lg font-black text-foreground group-hover:text-primary transition-colors italic">
                      {portal.name}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/50 font-medium leading-relaxed">
                      {portal.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-black text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 uppercase tracking-wider">
                    Access Portal <Zap className="h-3 w-3 fill-current" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Compliance Calendar */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full rounded-3xl border border-border bg-gradient-to-b from-surface/80 to-transparent p-8 shadow-sm backdrop-blur-sm"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    <Calendar className="h-4 w-4" />
                    2025 Calendar
                  </div>
                  <h3 className="text-2xl font-black text-foreground italic">Compliance Milestones</h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>

              <div className="space-y-6">
                {COMPLIANCE_DEADLINES.map((deadline, i) => (
                  <motion.div
                    key={deadline.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-surface border border-border text-center shadow-sm">
                        <span className="text-[10px] font-bold uppercase text-foreground/40">{deadline.month.slice(0, 3)}</span>
                        <span className="text-xl font-black text-primary">{deadline.day}</span>
                      </div>
                      {i < COMPLIANCE_DEADLINES.length - 1 && (
                        <div className="mt-2 h-full w-px bg-gradient-to-b from-border to-transparent" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h4 className="text-base font-black text-foreground">{deadline.title}</h4>
                      <p className="mt-1 text-sm text-foreground/50 font-medium leading-relaxed">
                        {deadline.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-surface/50 p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                   <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-wider text-foreground">Strategic Roadmap: eServe 2025</span>
                </div>
                <p className="text-[11px] font-medium text-foreground/50 leading-relaxed italic">
                  DOLE-NCR is currently migrating towards the <strong className="text-foreground">eServe Portal</strong>—a high-performance, unified compliance engine scheduled for full release in late 2025.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
