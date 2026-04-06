"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const GALLERY_IMAGES = [
  {
    src: "/about_images/img_03.jpg",
    title: "Community Outreach",
    description: "DOLE-NCR reaching out to local communities for labor awareness.",
  },
  {
    src: "/about_images/img_04.jpg",
    title: "Job Fair Events",
    description: "Connecting Filipino workers with employment opportunities.",
  },
  {
    src: "/about_images/img_05.jpg",
    title: "Workers' Rights Seminar",
    description: "Educating workers about their rights and labor standards.",
  },
  {
    src: "/about_images/img_06.jpg",
    title: "Office Operations",
    description: "Day-to-day operations serving the National Capital Region.",
  },
  {
    src: "/about_images/img_07.jpg",
    title: "Awards Ceremony",
    description: "Recognizing outstanding service and labor compliance.",
  },
  {
    src: "/about_images/img_13.jpg",
    title: "Training Programs",
    description: "Skills development and capacity-building initiatives.",
  },
  {
    src: "/about_images/img_14.jpg",
    title: "Partnership Events",
    description: "Collaborating with stakeholders for better labor governance.",
  },
  {
    src: "/about_images/img_16.jpg",
    title: "Government Service",
    description: "Delivering quality public service to all Filipinos.",
  },
];

function GalleryCard({
  image,
  index,
}: {
  image: (typeof GALLERY_IMAGES)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative cursor-pointer overflow-hidden rounded-3xl"
    >
      <DirectionAwareHover
        className="w-full h-[300px]"
        overlay={
          <div className="flex flex-col gap-2 text-center">
            <p className="text-xl font-black text-foreground italic uppercase tracking-tight">{image.title}</p>
            <p className="text-sm font-medium text-foreground/60 leading-relaxed truncate">{image.description}</p>
            <div className="mt-6 flex h-10 w-10 mx-auto items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:bg-primary group-hover:text-primary-foreground border border-primary/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 3h6v6" /><path d="M10 14L21 3" /></svg>
            </div>
          </div>
        }
      >
        <Image
          src={image.src}
          alt={image.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </DirectionAwareHover>
    </motion.div>
  );
}

function Lightbox({
  image,
  onClose,
}: {
  image: (typeof GALLERY_IMAGES)[0] | null;
  onClose: () => void;
}) {
  if (!image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-[40px] bg-background border border-border shadow-[0_0_50px_rgba(47,164,255,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[60vh] w-[80vw] max-w-4xl border-b border-border">
          <Image
            src={image.src}
            alt={image.title}
            fill
            className="object-cover"
            sizes="80vw"
          />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-black text-foreground italic uppercase tracking-tight">{image.title}</h3>
          <p className="mt-2 text-base text-foreground/50 font-medium leading-relaxed">{image.description}</p>
        </div>
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-background/50 text-foreground border border-border backdrop-blur-sm transition-all hover:bg-background hover:scale-110"
          aria-label="Close"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof GALLERY_IMAGES)[0] | null
  >(null);

  return (
    <section id="gallery" className="bg-background px-6 py-24 transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary italic">
            Visual Showcase
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl italic">
            DOLE-NCR Gallery
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base text-foreground/60 font-medium leading-relaxed">
            Highlights from our events, programs, and daily operations serving
            the workers and businesses of the National Capital Region.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid auto-rows-auto gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image, i) => (
            <div key={image.src} onClick={() => setSelectedImage(image)}>
              <GalleryCard image={image} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
