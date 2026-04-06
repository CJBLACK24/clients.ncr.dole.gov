"use client";

import { motion } from "framer-motion";
import { FIELD_OFFICES } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export function FieldOfficesSection() {
  return (
    <section id="field-offices" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Regional Network
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl italic">
            Field Offices
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/60 font-medium leading-relaxed">
            Serving the National Capital Region through our strategically located field offices.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FIELD_OFFICES.map((office, i) => (
            <motion.div
              key={office.shortName}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative flex flex-col overflow-hidden rounded-[40px] border border-border bg-surface p-8 transition-all hover:border-primary/30 hover:bg-surface/80 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="mb-6 flex flex-col items-center text-center">
                <span className="text-4xl font-black tracking-tighter text-primary group-hover:scale-110 transition-transform duration-500 italic">
                  {office.shortName}
                </span>
                <h3 className="mt-2 text-xl font-black text-foreground uppercase tracking-tight italic">
                  {office.name.split(' ')[0]}
                </h3>
                <p className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] mt-2">
                  ({office.coverage})
                </p>
              </div>

              <div className="space-y-4 text-xs font-medium">
                <div className="flex gap-3 text-foreground/60 leading-relaxed italic">
                  <MapPin className="h-4 w-4 shrink-0 text-primary/60" />
                  <p>{office.address}</p>
                </div>
                <div className="flex items-center gap-3 text-foreground/60 leading-tight">
                  <Mail className="h-4 w-4 shrink-0 text-primary/60" />
                  <p className="truncate">{office.email}</p>
                </div>
                <div className="flex items-center gap-3 text-foreground/60 leading-tight">
                  <Phone className="h-4 w-4 shrink-0 text-primary/60" />
                  <p>{office.phone}</p>
                </div>
              </div>

              {/* Subtle background glow */}
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
