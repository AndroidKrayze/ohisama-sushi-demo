"use client";

import { siteConfig } from "@/site.config";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative border-y border-[var(--hinoki)]/20 bg-[var(--rice)] py-20 text-[var(--ink)] sm:py-28"
      aria-label="Guest themes"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--vermillion)]">
            Google {siteConfig.ratings.score} · {siteConfig.ratings.count} reviews
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight sm:text-5xl">
            What guests come back for.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--ink)]/70">
            Themes paraphrased from public Google reviews — not invented named
            quotes.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.06}>
          {siteConfig.reviewThemes.map((theme) => (
            <StaggerItem key={theme.title}>
              <article className="h-full rounded-sm border border-[var(--hinoki)]/30 bg-white/50 p-6 sm:p-7">
                <div className="mb-4 flex gap-1" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-sm text-[var(--uni)]"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl text-[var(--ink)]">
                  {theme.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/70 sm:text-base">
                  {theme.copy}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
