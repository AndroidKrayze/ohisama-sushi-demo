import { siteConfig } from "@/site.config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--sumi)] pb-24 pt-14 text-[var(--rice)] md:pb-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-display text-2xl md:text-3xl">{siteConfig.legalName}</p>
        <p className="mt-1 text-sm tracking-[0.18em] text-[var(--hinoki)]">
          {siteConfig.japaneseFull}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--rice)]/75">
          {siteConfig.address.line1}
          <br />
          {siteConfig.address.line2}
        </p>
        <p className="mt-3">
          <a
            href={siteConfig.phone.href}
            className="text-sm font-semibold text-[var(--hinoki)] hover:underline"
          >
            {siteConfig.phone.display}
          </a>
        </p>
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rice)]/45">
            Suggested domains
          </p>
          <ul className="mt-3 space-y-1 text-sm text-[var(--rice)]/80">
            {siteConfig.suggestedDomains.map((domain) => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
        </div>
        <p className="mt-10 border-t border-white/10 pt-5 text-xs text-[var(--rice)]/40">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
