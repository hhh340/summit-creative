import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { websiteTypes } from "@/content/services-data";
import { packageFeatures } from "@/content/pricing-data";

export const metadata: Metadata = {
  title: "Services",
  description: "A simple, honest website package for small businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">Services</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              A great website, built simply
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I build clean, professional websites for small businesses.
              One package, one price, no confusing add-ons.
            </p>
            <div className="mt-8">
              <Button href="/quote" size="lg">
                Get a Quote
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Who this is for"
            title="Built for small businesses"
            description="If you run a small business and need a website that looks professional, this is for you."
          />
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {websiteTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="What's included" title="Everything you need to get online" />

          <ul className="mt-12 space-y-4">
            {packageFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-base">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-brand"
                >
                  <path
                    d="M2 7.5L5.5 11L12 3.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTASection
        title="Ready to get your website?"
        description="Tell me about your business — I'll get back to you within one business day."
      />
    </>
  );
}
