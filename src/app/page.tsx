import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Menu } from "@/components/Menu";
import { Story } from "@/components/Story";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Visit } from "@/components/Visit";
import { CallBand } from "@/components/CallBand";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCallBar } from "@/components/StickyCallBar";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Menu />
        <Story />
        <Gallery />
        <Reviews />
        <Visit />
        <CallBand />
      </main>
      <SiteFooter />
      <StickyCallBar />
    </>
  );
}
