"use client";

import { motion } from "framer-motion";
import { CAREERS_CONTENT } from "@/lib/constants";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  Monitor, 
  Users, 
  Info, 
  ArrowRight, 
  ShieldCheck, 
  Zap
} from "lucide-react";

export function CareersSection() {
  const words = CAREERS_CONTENT.description.split('\n\n');
  const invitationWords = CAREERS_CONTENT.invitation.split('\n\n');

  return (
    <section id="careers" className="bg-background px-6 py-32 transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary italic">
            Join Our Mission
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl uppercase italic decoration-primary decoration-4 underline-offset-8">
            {CAREERS_CONTENT.title}
          </h2>
          <div className="mx-auto mt-8 h-1.5 w-24 rounded-full bg-primary" />
        </motion.div>

        <BentoGrid className="md:auto-rows-[25rem]">
          {/* Card 1: Vision & Philosophy */}
          <BentoGridItem
            title="Our Vision & Philosophy"
            description={words[0]}
            icon={<ShieldCheck className="h-6 w-6" />}
            className="md:col-span-2"
            header={
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-transparent p-12">
                <p className="text-xl font-black italic text-foreground leading-tight text-center">
                  &quot;Decent and productive employment for every Filipino worker.&quot;
                </p>
              </div>
            }
          />

          {/* Card 2: Our Culture */}
          <BentoGridItem
            title="Our Culture"
            description="Like you, we are people-centered, values-driven, professional, responsive, and passionate about our work."
            icon={<Users className="h-6 w-6" />}
            className="md:col-span-1"
          />

          {/* Card 3: New Opportunities */}
          <BentoGridItem
            title="Invitation to Serve"
            description={invitationWords[0]}
            icon={<Zap className="h-6 w-6" />}
            className="md:col-span-1"
          />

          {/* Card 4: e-JAP Portal (Main CTA) */}
          <BentoGridItem
            title="e-JAP Digital Portal"
            description={invitationWords[1].length > 150 ? invitationWords[1].slice(0, 150) + "..." : invitationWords[1]}
            icon={<Monitor className="h-6 w-6" />}
            className="md:col-span-2"
            header={
              <div className="flex flex-col items-center justify-center gap-8 p-10 bg-surface/50 h-full">
                <div className="text-center space-y-2">
                   <h4 className="text-3xl font-black text-foreground italic uppercase tracking-tighter">e-JAP</h4>
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Job Application Portal</p>
                </div>
                <a
                  href={CAREERS_CONTENT.ejapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-4 rounded-xl bg-primary px-10 py-5 text-sm font-black text-primary-foreground transition-all hover:scale-[1.05] active:scale-95 shadow-xl shadow-primary/20 uppercase tracking-widest"
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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
           transition={{ delay: 0.5 }}
           className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 rounded-[32px] border border-red-500/20 bg-red-500/5 px-10 py-5 shadow-sm">
             <div className="p-2 rounded-full bg-red-500/10">
                <Info className="h-5 w-5 text-red-600 dark:text-red-400 animate-pulse" />
             </div>
             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 dark:text-red-400 leading-relaxed italic">
               {CAREERS_CONTENT.warning}
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


