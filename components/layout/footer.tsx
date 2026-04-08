"use client";

import Image from "next/image";
import { CONTACT_INFO, FIELD_OFFICES, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-foreground transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/Department_of_Labor_and_Employment_(DOLE)_LOGO.svg"
                alt="DOLE Logo"
                width={40}
                height={40}
                className="h-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-tight text-foreground">
                  DOLE-NCR
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-primary">
                  Digital Portal
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Department of Labor and Employment — National Capital Region.
              Serving Filipino workers and businesses through accessible digital
              governance.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.filter((l) => !l.external).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex flex-col gap-0.5">
                <span className="text-[10px] font-medium uppercase tracking-widest text-primary">
                  Email
                </span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-[10px] font-medium uppercase tracking-widest text-primary">
                  Phone
                </span>
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-[10px] font-medium uppercase tracking-widest text-primary">
                  Address
                </span>
                <span className="text-xs leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Field Offices */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Field Offices
            </h4>
            <ul className="space-y-3 text-sm">
              {FIELD_OFFICES.slice(0, 4).map((office) => (
                <li key={office.name} className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-foreground">
                    {office.name}
                  </span>
                  <span className="text-xs text-muted-foreground">{office.phone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl px-6 py-6 flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p className="order-2 sm:order-1">
            © {new Date().getFullYear()} Department of Labor and Employment —
            National Capital Region. All rights reserved.
          </p>
          <div className="flex gap-6 order-1 sm:order-2">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Accessibility
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Data Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
