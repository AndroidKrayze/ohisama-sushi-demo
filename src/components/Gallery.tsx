"use client";

import Image from "next/image";
import { siteConfig } from "@/site.config";
import { withBase } from "@/lib/paths";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-[var(--sumi)] py-20 sm:py-28"
      aria-label="Gallery"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--uni)]">
            From the bar
          </p>
          <h2 className="mt-3 font-display text-3xl text-[var(--rice)] sm:text-5xl">
            Real plates. Real counter.
          </h2>
          <p className="mt-4 max-w-xl text-base text-[var(--rice)]/70">
            Venue photography from this Paddington Street sushi bar — food,
            interior, and the rising-sun sign on Kenrick Place.
          </p>
        </Reveal>

        <Stagger
          className="mt-12 columns-1 gap-3 sm:columns-2 lg:columns-3"
          stagger={0.04}
        >
          {siteConfig.gallery.map((shot) => (
            <StaggerItem key={shot.src} className="mb-3 break-inside-avoid">
              <div
                className={`group relative overflow-hidden rounded-sm border border-white/10 ${
                  shot.span === "wide"
                    ? "aspect-[16/10]"
                    : shot.span === "tall"
                      ? "aspect-[3/4]"
                      : "aspect-square"
                }`}
              >
                <Image
                  src={withBase(shot.src)}
                  alt={shot.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
