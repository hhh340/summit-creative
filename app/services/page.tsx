import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { websiteTypes } from "@/content/services-data";
import { packageFeatures } from "@/content/pricing-data";
import {
  BusinessIcon,
  PortfolioIcon,
  BlogIcon,
  LandingPageIcon,
} from "@/components/illustrations/ServiceIcons";
import { TagIcon } from "@/components/illustrations/MiscIcons";

export const metadata: Metadata = {
  title: "Services",
  description: "A simple, honest website package for small businesses.",
};

const typeIcons = [BusinessIcon, PortfolioIcon, BlogIcon, LandingPageIcon];

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
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {websiteTypes.map((type, i) => {
              const Icon = typeIcons[i % typeIcons.length];
              return (
                <div
                  key={type}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-background p-6 text-center"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">{type}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-2xl">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand">
            <TagIcon className="h-6 w-6" />
          </div>
          <SectionHeading
            eyebrow="What's included"
            title="Everything you need to get online"
            className="mt-6"
          />

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
