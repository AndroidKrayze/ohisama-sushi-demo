"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/site.config";
import { withBase } from "@/lib/paths";
import { HeroMotion } from "@/components/Reveal";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      aria-label="Hero"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${withBase("/assets/hero-uramaki.jpg")})`,
        }}
        role="img"
        aria-label="Premium uramaki plated at Ohisama Sushi, Marylebone"
        initial={reduce ? false : { scale: 1.1 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 14, ease: "linear" }}
      />
      <div className="opacity-wash absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(200,16,46,0.28),transparent_42%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(18,18,18,0.85)_0%,transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-28 pt-32 sm:px-8 sm:pb-36">
        <HeroMotion>
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-[var(--rice)]/20 bg-[var(--sumi)]/45 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--vermillion)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--rice)]/90">
              Google {siteConfig.ratings.score} · FHRS {siteConfig.fhrs.rating} ·
              Marylebone
            </span>
          </div>
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[var(--hinoki)]">
            {siteConfig.japanese} · Paddington Street
          </p>
          <p className="font-display text-[clamp(2.8rem,9vw,5.8rem)] leading-[0.94] text-[var(--rice)]">
            {siteConfig.name}
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-2xl leading-snug text-[var(--rice)]/95 sm:text-3xl md:text-[2.4rem]">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--rice)]/85 sm:text-lg">
            Itamae at the counter. Precise nigiri, chef rolls, omakase, and
            black-cod lacquer — a quiet rising sun steps from Baker Street.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center rounded-sm bg-[var(--vermillion)] px-6 py-3.5 text-sm font-semibold tracking-wide text-[var(--rice)] shadow-[0_12px_40px_rgba(200,16,46,0.42)] transition hover:brightness-110"
            >
              Call {siteConfig.phone.display}
            </a>
            <a
              href={siteConfig.booking.opentable}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-[var(--rice)]/45 px-6 py-3.5 text-sm font-medium text-[var(--rice)] transition hover:border-[var(--hinoki)] hover:bg-white/10"
            >
              Book on OpenTable
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-sm px-4 py-3.5 text-sm font-medium text-[var(--rice)]/85 transition hover:text-[var(--hinoki)]"
            >
              View the menu
            </a>
          </div>
        </HeroMotion>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        aria-hidden
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 0.85, y: [0, 6, 0] }}
        transition={{
          y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="h-10 w-px bg-[var(--hinoki)]/80" />
      </motion.div>
    </section>
  );
}
