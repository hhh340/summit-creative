import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A look at the kind of simple, clean websites I build.",
};

export default function PortfolioPage() {
  return (
    <>
      <Section className="pt-20 pb-0 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">Portfolio</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              A glimpse of what I build
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A few real, live projects showing the kind of clean, professional
              sites I design. Filter by category to see work closest to yours.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <PortfolioGrid />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
