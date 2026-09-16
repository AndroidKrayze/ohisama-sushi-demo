"use client";

import Image from "next/image";
import { siteConfig } from "@/site.config";
import { withBase } from "@/lib/paths";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

function PriceLine({ price }: { price: string | null | undefined }) {
  if (price) {
    return (
      <p className="mt-4 text-sm font-semibold tracking-wide text-[var(--vermillion)]">
        {price}
      </p>
    );
  }
  return (
    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--hinoki)]">
      Ask for today’s board
    </p>
  );
}

type Item = {
  name: string;
  blurb: string;
  price?: string | null;
};

function ItemCard({ item }: { item: Item }) {
  return (
    <article className="menu-card rice-panel h-full rounded-sm p-5 sm:p-6">
      <h5 className="font-display text-lg text-[var(--ink)]">{item.name}</h5>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/65">
        {item.blurb}
      </p>
      <PriceLine price={item.price} />
    </article>
  );
}

export function Menu() {
  return (
    <section id="menu" className="relative bg-[var(--rice)] py-20 text-[var(--ink)] sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--vermillion)]/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--vermillion)]">
            Decoded menu
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-[var(--ink)] sm:text-5xl">
            Nigiri. Rolls. Omakase. Bento.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink)]/70 sm:text-lg">
            From the printed nigiri board and aggregator highlights for this
            Paddington Street bar.{" "}
            <span className="font-medium text-[var(--ink)]">
              {siteConfig.menuNote}
            </span>
          </p>
        </Reveal>

        <Reveal className="mt-10" delay={0.05}>
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm border border-[var(--hinoki)]/25 sm:aspect-[2.6/1]">
            <Image
              src={withBase("/assets/menu-nigiri-board.jpg")}
              alt="Printed Nigiri and Sashimi à la carte board at Ohisama Sushi"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 1100px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(18,18,18,0.75)] to-transparent p-4 pt-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--rice)]">
                Printed nigiri · sashimi board
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 space-y-16">
          {siteConfig.menuSections.map((section) => (
            <div key={section.id} id={section.id}>
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--wave)]">
                  {section.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-2xl text-[var(--ink)] sm:text-3xl">
                  {section.label}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--ink)]/65 sm:text-base">
                  {section.intro}
                </p>
              </Reveal>
              <Stagger
                className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                stagger={0.045}
              >
                {section.items.map((item) => (
                  <StaggerItem key={item.name}>
                    <ItemCard item={item} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="rounded-sm border border-[var(--hinoki)]/35 bg-white/40 px-5 py-4 text-sm text-[var(--ink)]/75 sm:px-6">
            Board notes: seasonal items marked subject to availability · allergy
            questions welcome · call{" "}
            <a
              href={siteConfig.phone.href}
              className="font-semibold text-[var(--vermillion)] hover:underline"
            >
              {siteConfig.phone.display}
            </a>{" "}
            for today’s catch.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
