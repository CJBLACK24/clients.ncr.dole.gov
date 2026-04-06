"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ABOUT_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { Meteors } from "@/components/ui/meteors";

const ABOUT_IMAGES = [
  "/about_images/img_03.jpg",
  "/about_images/img_04.jpg",
  "/about_images/img_05.jpg",
  "/about_images/img_06.jpg",
  "/about_images/img_07.jpg",
  "/about_images/img_13.jpg",
  "/about_images/img_14.jpg",
  "/about_images/img_16.jpg",
];

const aboutItems = [
  {
    title: "Our Vision",
    description: ABOUT_CONTENT.vision,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    accent: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Our Mission",
    description: ABOUT_CONTENT.mission,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    accent: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Quality Policy",
    description: ABOUT_CONTENT.qualityPolicy,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    accent: "from-emerald-500/20 to-teal-500/20",
  },
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % ABOUT_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={ABOUT_IMAGES[current]}
            alt={`DOLE-NCR Activities ${current + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {ABOUT_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === current
                ? "w-8 bg-primary"
                : "w-2 bg-foreground/30 hover:bg-foreground/50",
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Nav arrows */}
      <button
        onClick={() =>
          setCurrent(
            (prev) => (prev - 1 + ABOUT_IMAGES.length) % ABOUT_IMAGES.length,
          )
        }
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/20 text-foreground backdrop-blur-xl transition-all hover:bg-background/40 hover:scale-110 active:scale-95 border border-border"
        aria-label="Previous image"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/20 text-foreground backdrop-blur-xl transition-all hover:bg-background/40 hover:scale-110 active:scale-95 border border-border"
        aria-label="Next image"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background px-6 py-28 text-foreground transition-colors duration-500">
      <Meteors number={25} />
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 italic">
            Who We Are
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl italic">
            About DOLE-NCR
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-foreground/60 font-medium leading-relaxed">
            The Department of Labor and Employment — National Capital Region is
            committed to promoting gainful employment and protecting workers&apos;
            welfare.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary" />
        </motion.div>

        {/* Two-column layout: Image slider + Info cards */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left – Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ImageSlider />
          </motion.div>

          {/* Right – About items */}
          <div className="flex flex-col justify-center gap-6">
            {aboutItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group rounded-[32px] border border-border bg-surface/50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20 dark:bg-surface/20"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={cn(
                      "flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-surface border border-border text-primary transition-all duration-300 shadow-sm group-hover:bg-primary/10",
                      item.accent,
                    )}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground italic uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/50 font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
