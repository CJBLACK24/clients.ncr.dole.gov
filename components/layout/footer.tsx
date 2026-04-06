"use client";

import Image from "next/image";
import { CONTACT_INFO, FIELD_OFFICES, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface text-foreground transition-colors duration-500">
      {/* Premium Horizontal Line with Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent dark:via-primary/30" />
      
      <div className="mx-auto w-full px-8 py-20 md:px-16 lg:px-24">
        <div className="grid gap-16 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/Department_of_Labor_and_Employment_(DOLE)_LOGO.svg"
                alt="DOLE Logo"
                width={48}
                height={48}
                className="h-auto object-contain filter drop-shadow-[0_0_8px_rgba(47,164,255,0.3)] transition-all"
              />
              <div className="flex flex-col">
                <span className="text-base font-black leading-tight tracking-wider text-foreground">
                  DOLE-NCR
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Digital Portal
                </span>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-foreground/60 font-medium">
              Department of Labor and Employment — National Capital Region.
              Serving Filipino workers and businesses through accessible digital
              governance and responsive technology.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-foreground italic">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.filter((l) => !l.external).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-foreground/50 transition-all hover:text-primary hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-foreground italic">
              Contact Support
            </h4>
            <ul className="space-y-4 text-sm text-foreground/50 font-medium">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">
                  Email
                </span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">
                  Phone
                </span>
                <span className="hover:text-primary transition-colors cursor-default">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">
                  Address
                </span>
                <span className="text-xs leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Field Offices */}
          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-foreground italic">
              Field Offices
            </h4>
            <ul className="grid grid-cols-1 gap-4 text-sm">
              {FIELD_OFFICES.slice(0, 4).map((office) => (
                <li key={office.name} className="flex flex-col gap-1">
                  <span className="text-[11px] font-black text-foreground uppercase tracking-tight">
                    {office.name}
                  </span>
                  <span className="text-xs font-medium text-foreground/50">{office.phone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-background border-t border-border">
        <div className="mx-auto flex w-full max-w-none px-8 py-8 md:px-16 lg:px-24 flex-col items-center justify-between gap-6 text-[11px] font-medium text-foreground/50 sm:flex-row">
          <p className="order-2 sm:order-1 tracking-wide">
            © {new Date().getFullYear()} Department of Labor and Employment —
            National Capital Region. All rights reserved.
          </p>
          <div className="flex gap-8 order-1 sm:order-2">
            <a href="#" className="transition-colors hover:text-primary hover:underline underline-offset-4">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary hover:underline underline-offset-4">
              Accessibility
            </a>
            <a href="#" className="transition-colors hover:text-primary hover:underline underline-offset-4">
              Data Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
