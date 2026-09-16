"use client";

import { siteConfig } from "@/site.config";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--hinoki)]/25 bg-[var(--sumi)]/95 px-3 py-3 backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <a
          href={siteConfig.phone.href}
          className="flex flex-1 items-center justify-center rounded-sm bg-[var(--vermillion)] py-3.5 text-sm font-semibold text-[var(--rice)]"
        >
          Call {siteConfig.phone.display}
        </a>
        <a
          href={siteConfig.booking.opentable}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-sm border border-[var(--hinoki)]/50 px-4 py-3.5 text-sm font-medium text-[var(--rice)]"
        >
          Book
        </a>
      </div>
    </div>
  );
}
