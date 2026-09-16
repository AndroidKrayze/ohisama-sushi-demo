"use client";

import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function Visit() {
  return (
    <section
      id="visit"
      className="relative bg-[var(--sumi)] py-20 sm:py-28"
      aria-label="Visit"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--hinoki)]">
            Find us
          </p>
          <h2 className="mt-3 font-display text-3xl text-[var(--rice)] sm:text-5xl">
            39 Paddington Street.
          </h2>
          <p className="mt-3 max-w-xl text-base text-[var(--rice)]/70">
            Marylebone W1 — Kenrick Place corner, a short walk from Baker Street
            and the Chiltern corridor. Not on Chiltern Street itself.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-sm border border-white/10">
              <iframe
                title="Map — Ohisama Sushi, Paddington Street"
                src="https://maps.google.com/maps?q=Ohisama%20Sushi%2039%20Paddington%20Street%20London%20W1U%204HH&z=16&output=embed"
                className="h-[280px] w-full border-0 sm:h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.06}>
            <div className="flex h-full flex-col rounded-sm border border-[var(--hinoki)]/35 bg-[var(--wave)]/40 p-6 sm:p-8">
              <p className="font-display text-xl text-[var(--rice)]">
                {siteConfig.address.full}
              </p>
              <p className="mt-2 text-sm text-[var(--rice)]/65">
                {siteConfig.address.note}
              </p>

              <div className="hinoki-rule my-6" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--hinoki)]">
                Hours
              </p>
              <p className="mt-2 text-base text-[var(--rice)]">
                {siteConfig.hours.weekdays}
              </p>
              <p className="text-base text-[var(--rice)]">
                {siteConfig.hours.sunday}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--rice)]/60">
                {siteConfig.hours.note}
              </p>

              <div className="hinoki-rule my-6" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--hinoki)]">
                Hygiene
              </p>
              <p className="mt-2 text-sm text-[var(--rice)]/85">
                FHRS {siteConfig.fhrs.rating} / 5 · inspected{" "}
                {siteConfig.fhrs.date}
              </p>
              <a
                href={siteConfig.fhrs.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-sm text-[var(--uni)] hover:underline"
              >
                View Food Standards rating
              </a>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href={siteConfig.phone.href}
                  className="inline-flex items-center justify-center rounded-sm bg-[var(--vermillion)] px-5 py-3.5 text-sm font-semibold text-[var(--rice)] transition hover:brightness-110"
                >
                  Call {siteConfig.phone.display}
                </a>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm border border-[var(--rice)]/35 px-5 py-3 text-sm font-medium text-[var(--rice)] transition hover:border-[var(--hinoki)]"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
