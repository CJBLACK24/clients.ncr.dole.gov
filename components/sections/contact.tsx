"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/constants";
import { Phone, Mail, MapPin, CalendarCheck, AlertCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-surface px-6 py-24 text-foreground"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Reach Our Team
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
              Connect with DOLE-NCR
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              For general inquiries, technical support on portals, or labor
              assistance, our regional and field offices are integrated into our
              digital ecosystem.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: <Phone className="h-4 w-4" />,
                  label: "Regional Hotline",
                  value: CONTACT_INFO.phone,
                },
                {
                  icon: <Mail className="h-4 w-4" />,
                  label: "Official Email",
                  value: CONTACT_INFO.email,
                },
                {
                  icon: <MapPin className="h-4 w-4" />,
                  label: "Regional Office",
                  value: CONTACT_INFO.address,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                      {item.label}
                    </h4>
                    <p className="text-sm mt-0.5 text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Advisory */}
            <div className="mt-10 rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 max-w-lg">
              <div className="flex items-center gap-2 mb-3 text-amber-600 dark:text-amber-400">
                <AlertCircle className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Mandatory Advisory
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Face-to-face transactions for simple inquiries and document
                submissions are strictly restricted. All visitors must secure a
                confirmed schedule via our Online Appointment System.
              </p>
              <a
                href="https://clients.ncr.dole.gov.ph/aep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-primary hover:underline"
              >
                Go to Appointment System →
              </a>
            </div>
          </motion.div>

          {/* Right - CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative h-full w-full flex flex-col items-center justify-center p-10 text-center min-h-[400px]">
                <div className="mb-5 rounded-xl bg-primary/10 p-4 text-primary">
                  <CalendarCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  Secure Your Appointment
                </h3>
                <p className="text-muted-foreground mt-3 max-w-xs text-sm leading-relaxed">
                  Avoid long queues by scheduling your visit in advance for
                  permit collections and technical consultations.
                </p>
                <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
                  >
                    Book Online Now
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg border border-border bg-card py-3 text-sm font-medium text-foreground transition-all hover:bg-muted"
                  >
                    Digital Guides
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <span className="text-[10px] font-medium uppercase tracking-widest text-primary">
                  Online Support
                </span>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  24/7 Digital Hub
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Chat and email support always active.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <span className="text-[10px] font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Response Rate
                </span>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  &lt; 48 Hours
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Average response time for digital inquiries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
