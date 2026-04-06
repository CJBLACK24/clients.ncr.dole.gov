"use client";

"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/constants";
import { Phone, Mail, MapPin, CalendarCheck, AlertCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background px-6 py-28 leading-relaxed text-foreground/60">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >                                          
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Reach Our Team
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl italic">
              Connect with DOLE-NCR
            </h2>
            <p className="mt-6 max-w-md text-base text-foreground/60 font-medium">
              For general inquiries, technical support on portals, or labor assistance, our regional and field offices are integrated into our digital ecosystem.
            </p>

            <div className="mt-12 space-y-8">
              {[
                {
                  icon: <Phone className="h-5 w-5" />,
                  label: "Regional Hotline",
                  value: CONTACT_INFO.phone,
                },
                {
                  icon: <Mail className="h-5 w-5" />,
                  label: "Official Email",
                  value: CONTACT_INFO.email,
                },
                {
                  icon: <MapPin className="h-5 w-5" />,
                  label: "Regional Office",
                  value: CONTACT_INFO.address,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-5 group">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-surface border border-border text-primary transition-all group-hover:bg-primary/10 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-foreground italic">
                      {item.label}
                    </h4>
                    <p className="text-sm mt-1 text-foreground/50 group-hover:text-foreground/80 font-medium transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Crucial Advisory */}
            <div className="mt-12 rounded-3xl border border-orange-500/20 bg-orange-500/[0.03] p-8 max-w-lg shadow-sm">
               <div className="flex items-center gap-3 mb-4 text-orange-600 dark:text-orange-400">
                 <AlertCircle className="h-5 w-5" />
                 <span className="text-xs font-black uppercase tracking-widest">Mandatory Advisory</span>
               </div>
               <p className="text-sm text-foreground/70 mb-6 leading-relaxed font-medium">
                 Face-to-face transactions for simple inquiries and document submissions are strictly restricted. All visitors must secure a confirmed schedule via our Online Appointment System.
               </p>
               <a 
                 href="https://clients.ncr.dole.gov.ph/aep" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-xs font-black text-primary hover:underline uppercase tracking-wider"
               >
                 Go to Appointment System →
               </a>
            </div>
          </motion.div>

          {/* Right - Visual / Map Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="relative h-[480px] overflow-hidden rounded-[40px] border border-border bg-surface shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop')] bg-cover opacity-[0.05] dark:opacity-10 mix-blend-overlay" />
              <div className="relative h-full w-full flex flex-col items-center justify-center p-12 text-center">
                 <div className="mb-6 rounded-3xl bg-primary/10 p-5 text-primary shadow-[0_0_30px_rgba(47,164,255,0.15)] border border-primary/20">
                    <CalendarCheck className="h-10 w-10 icon-glow" />
                 </div>
                 <h3 className="text-2xl font-black text-foreground italic leading-tight">Secure Your Appointment</h3>
                 <p className="text-foreground/50 mt-4 max-w-xs text-sm font-medium leading-relaxed">
                   Avoid long queues by scheduling your visit in advance for permit collections and technical consultations.
                 </p>
                 <div className="mt-10 flex flex-col gap-4 w-full max-w-xs">
                    <a 
                      href="#" 
                      className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-black text-primary-foreground transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20"
                    >
                      Book Online Now
                    </a>
                    <a 
                      href="#" 
                      className="inline-flex items-center justify-center rounded-xl border border-border bg-surface/50 py-4 text-sm font-black text-foreground transition-all hover:bg-surface"
                    >
                      Digital Guides
                    </a>
                 </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Online Support</span>
                  <p className="mt-1 text-sm font-black text-foreground uppercase tracking-tight">24/7 Digital Hub</p>
                  <p className="text-xs text-foreground/40 mt-1 font-medium italic">Chat and email support always active.</p>
               </div>
               <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Response Rate</span>
                  <p className="mt-1 text-sm font-black text-foreground uppercase tracking-tight">&lt; 48 Hours</p>
                  <p className="text-xs text-foreground/40 mt-1 font-medium italic">Average response time for digital inquiries.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
