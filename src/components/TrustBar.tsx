"use client";

import { siteConfig } from "@/site.config";
import { Stagger, StaggerItem } from "@/components/Reveal";

const items = [
  {
    title: `Google ${siteConfig.ratings.score}`,
    copy: `From ${siteConfig.ratings.count} reviews — fresh fish, kind service, intimate bar.`,
  },
  {
    title: `FHRS ${siteConfig.fhrs.rating} / 5`,
    copy: `Very Good — inspected ${siteConfig.fhrs.date}.`,
  },
  {
    title: "Open daily",
    copy: `${siteConfig.hours.weekdays} · ${siteConfig.hours.sunday}`,
  },
] as const;

export function TrustBar() {
  return (
    <section
      className="relative border-b border-[var(--hinoki)]/20 bg-[var(--wave)]"
      aria-label="Trust"
    >
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 md:py-12">
        <Stagger className="grid gap-8 md:grid-cols-3 md:gap-6" stagger={0.06}>
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <p className="font-display text-2xl text-[var(--rice)] md:text-[1.65rem]">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-[var(--rice)]/70">{item.copy}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
