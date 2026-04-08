"use client";

import { motion } from "framer-motion";
import { FIELD_OFFICES } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export function FieldOfficesSection() {
  return (
    <section id="field-offices" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Regional Network
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            Field Offices
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            Serving the National Capital Region through our strategically
            located field offices.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FIELD_OFFICES.map((office, i) => (
            <motion.div
              key={office.shortName}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl font-bold text-primary">
                  {office.shortName}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {office.name.split(" ")[0]}
                  </h3>
                  <p className="text-[10px] text-muted-foreground">
                    {office.coverage}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex gap-2.5 text-muted-foreground leading-relaxed">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/60 mt-0.5" />
                  <p>{office.address}</p>
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-primary/60" />
                  <p className="truncate">{office.email}</p>
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-primary/60" />
                  <p>{office.phone}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
