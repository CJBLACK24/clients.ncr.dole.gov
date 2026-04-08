"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ABOUT_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { Eye, Target, CheckCircle } from "lucide-react";

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
    icon: <Eye className="h-5 w-5" />,
  },
  {
    title: "Our Mission",
    description: ABOUT_CONTENT.mission,
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: "Quality Policy",
    description: ABOUT_CONTENT.qualityPolicy,
    icon: <CheckCircle className="h-5 w-5" />,
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
    <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={ABOUT_IMAGES[current]}
            alt={`DOLE-NCR Activities ${current + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {ABOUT_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === current
                ? "w-6 bg-primary"
                : "w-1.5 bg-foreground/20 hover:bg-foreground/40",
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
        className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-background/60 text-foreground backdrop-blur-sm transition-all hover:bg-background/80 border border-border"
        aria-label="Previous image"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-background/60 text-foreground backdrop-blur-sm transition-all hover:bg-background/80 border border-border"
        aria-label="Next image"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-surface px-6 py-24 text-foreground transition-colors duration-300"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Who We Are
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            About DOLE-NCR
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed">
            The Department of Labor and Employment — National Capital Region is
            committed to promoting gainful employment and protecting
            workers&apos; welfare.
          </p>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-primary" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left – Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ImageSlider />
          </motion.div>

          {/* Right – About items */}
          <div className="flex flex-col justify-center gap-5">
            {aboutItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
