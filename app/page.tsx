import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { ProcessTeaser } from "@/components/sections/home/ProcessTeaser";
import { PortfolioTeaser } from "@/components/sections/home/PortfolioTeaser";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyUs />
      <ProcessTeaser />
      <PortfolioTeaser />
      <CTASection />
    </>
  );
}
