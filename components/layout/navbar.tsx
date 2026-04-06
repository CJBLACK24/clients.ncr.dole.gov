"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/lib/constants";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "h-14 border-b border-border bg-background/95 shadow-lg shadow-primary/10 backdrop-blur-xl"
          : "h-20 bg-background/0",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/Department_of_Labor_and_Employment_(DOLE)_LOGO.svg"
            alt="DOLE Logo"
            width={scrolled ? 36 : 44}
            height={scrolled ? 36 : 44}
            className="h-auto object-contain transition-all duration-300"
            priority
            style={{ width: scrolled ? 36 : 44 }}
          />
          <div className="hidden flex-col sm:flex">
            <span
              className={cn(
                "font-extrabold leading-tight text-foreground transition-all duration-300 tracking-tight",
                scrolled ? "text-xs" : "text-sm",
              )}
            >
              Department of Labor and Employment
            </span>
            <span
              className={cn(
                "font-semibold leading-tight text-foreground/60 transition-all duration-300",
                scrolled ? "text-[10px]" : "text-xs",
              )}
            >
              National Capital Region (NCR)
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-semibold text-foreground/70 transition-all duration-200 hover:bg-surface hover:text-primary",
                link.label === "Home" && "text-primary",
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2 pl-2 border-l border-border">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile menu wrapper */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground/80 transition-colors hover:bg-surface md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-foreground/70 transition-colors hover:bg-surface hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
