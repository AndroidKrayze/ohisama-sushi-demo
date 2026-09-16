"use client";

import Image from "next/image";
import { siteConfig } from "@/site.config";
import { withBase } from "@/lib/paths";
import { Reveal } from "@/components/Reveal";

export function Story() {
  return (
    <section
      id="story"
      className="wave-band relative overflow-hidden py-20 sm:py-28"
      aria-label="The sushi bar"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--hinoki)]">
            Itamae at the counter
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--rice)] sm:text-4xl md:text-5xl">
            Quiet theatre on Paddington Street.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--rice)]/80 sm:text-lg">
            A long hinoki-toned counter, wave-indigo walls, dark ceramic plates —
            intimate Marylebone sushi-bar energy, not Chiltern Firehouse gloss.
            Watch the knife work upstairs; settle downstairs when the bar fills.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--rice)]/75">
            {siteConfig.japaneseFull} — the sun at the sushi bar. Chef Indika and
            the team plate miso-glazed black cod beside precise nigiri. Walk in,
            book ahead, or call for takeaway.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.booking.opentable}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-sm bg-[var(--vermillion)] px-5 py-3 text-sm font-semibold text-[var(--rice)] transition hover:brightness-110"
            >
              Reserve a counter seat
            </a>
            <a
              href="#visit"
              className="inline-flex rounded-sm border border-[var(--rice)]/35 px-5 py-3 text-sm font-medium text-[var(--rice)] transition hover:border-[var(--hinoki)]"
            >
              Find us
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[var(--hinoki)]/30 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] sm:aspect-[5/6]">
            <Image
              src={withBase("/assets/story-sushi-bar.jpg")}
              alt="Ohisama Sushi bar counter with place settings and wave-pattern wall"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,18,18,0.55)] via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--rice)]">
              Sushi bar · Marylebone W1
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
