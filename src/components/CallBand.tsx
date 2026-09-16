"use client";

import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function CallBand() {
  return (
    <section
      className="relative overflow-hidden border-t border-[var(--vermillion)]/30 bg-[var(--vermillion)] py-16 sm:py-20"
      aria-label="Call or book"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(244,239,230,0.18),transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--rice)]/80">
            {siteConfig.japanese} · Walk-in · OpenTable
          </p>
          <h2 className="mt-4 font-display text-3xl text-[var(--rice)] sm:text-5xl">
            Counter seats fill. Call ahead.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[var(--rice)]/85">
            Phone for takeaway or a quick table check — or reserve on OpenTable.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex rounded-sm bg-[var(--sumi)] px-7 py-3.5 text-sm font-semibold text-[var(--rice)] transition hover:bg-[var(--ink)]"
            >
              Call {siteConfig.phone.display}
            </a>
            <a
              href={siteConfig.booking.opentable}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-sm border border-[var(--rice)]/55 px-7 py-3.5 text-sm font-medium text-[var(--rice)] transition hover:bg-white/10"
            >
              Book on OpenTable
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
