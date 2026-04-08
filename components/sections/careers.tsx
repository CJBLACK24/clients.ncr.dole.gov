"use client";

import { motion } from "framer-motion";
import { CAREERS_CONTENT } from "@/lib/constants";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Monitor, Users, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function CareersSection() {
  const words = CAREERS_CONTENT.description.split("\n\n");
  const invitationWords = CAREERS_CONTENT.invitation.split("\n\n");

  return (
    <section
      id="careers"
      className="bg-background px-6 py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Join Our Mission
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Careers at DOLE-NCR
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-primary" />
        </motion.div>

        <BentoGrid className="md:auto-rows-[22rem]">
          {/* Card 1: Vision & Philosophy */}
          <BentoGridItem
            title="Our Vision & Philosophy"
            description={words[0]}
            icon={<ShieldCheck className="h-5 w-5" />}
            className="md:col-span-2"
            header={
              <div className="flex h-full w-full items-center justify-center p-10">
                <p className="text-lg font-semibold text-foreground leading-relaxed text-center">
                  &quot;Decent and productive employment for every Filipino
                  worker.&quot;
                </p>
              </div>
            }
          />

          {/* Card 2: Our Culture */}
          <BentoGridItem
            title="Our Culture"
            description="Like you, we are people-centered, values-driven, professional, responsive, and passionate about our work."
            icon={<Users className="h-5 w-5" />}
            className="md:col-span-1"
          />

          {/* Card 3: New Opportunities */}
          <BentoGridItem
            title="Invitation to Serve"
            description={invitationWords[0]}
            icon={<Zap className="h-5 w-5" />}
            className="md:col-span-1"
          />

          {/* Card 4: e-JAP Portal (Main CTA) */}
          <BentoGridItem
            title="e-JAP Digital Portal"
            description={
              invitationWords[1].length > 150
                ? invitationWords[1].slice(0, 150) + "..."
                : invitationWords[1]
            }
            icon={<Monitor className="h-5 w-5" />}
            className="md:col-span-2"
            header={
              <div className="flex flex-col items-center justify-center gap-6 p-8 h-full">
                <div className="text-center space-y-1">
                  <h4 className="text-2xl font-bold text-foreground">e-JAP</h4>
                  <p className="text-xs font-medium uppercase tracking-widest text-primary">
                    Job Application Portal
                  </p>
                </div>
                <a
                  href={CAREERS_CONTENT.ejapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            }
          />
        </BentoGrid>

        {/* Mandatory Warning */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 px-6 py-3.5">
            <span className="h-1.5 w-1.5 rounded-full bg-destructive animate-pulse" />
            <p className="text-xs font-medium text-destructive">
              {CAREERS_CONTENT.warning}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
