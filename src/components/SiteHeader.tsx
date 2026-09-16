"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[var(--sumi)]/92 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-lg tracking-wide text-[var(--rice)] sm:text-xl">
            {siteConfig.name}
          </span>
          <span className="hidden text-xs tracking-[0.2em] text-[var(--hinoki)] sm:inline">
            {siteConfig.japanese}
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--rice)]/80 transition hover:text-[var(--rice)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.booking.opentable}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-[var(--hinoki)]/50 px-3 py-1.5 text-sm text-[var(--rice)] transition hover:border-[var(--vermillion)] hover:text-[var(--rice)]"
          >
            Book
          </a>
          <a
            href={siteConfig.phone.href}
            className="rounded-sm bg-[var(--vermillion)] px-3.5 py-1.5 text-sm font-semibold text-[var(--rice)] shadow-[0_8px_24px_rgba(200,16,46,0.35)] transition hover:brightness-110"
          >
            Call
          </a>
        </nav>
        <a
          href={siteConfig.phone.href}
          className="rounded-sm bg-[var(--vermillion)] px-3 py-1.5 text-sm font-semibold text-[var(--rice)] md:hidden"
        >
          Call
        </a>
      </div>
    </header>
  );
}
