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
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="relative cursor-pointer overflow-hidden rounded-xl"
    >
      <DirectionAwareHover
        className="w-full h-[280px]"
        overlay={
          <div className="flex flex-col gap-2 text-center">
            <p className="text-lg font-semibold text-foreground">{image.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed truncate">
              {image.description}
            </p>
          </div>
        }
      >
        <Image
          src={image.src}
          alt={image.title}
          fill
          className="object-cover"
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl bg-card border border-border shadow-xl"
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
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground">{image.title}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
            {image.description}
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-background/60 text-foreground border border-border backdrop-blur-sm transition-all hover:bg-background"
          aria-label="Close"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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
    <section
      id="gallery"
      className="bg-background px-6 py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Visual Showcase
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            DOLE-NCR Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed">
            Highlights from our events, programs, and daily operations serving
            the workers and businesses of the National Capital Region.
          </p>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-primary" />
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
