import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { packagePrice, packageFeatures } from "@/content/pricing-data";
import { TagIcon } from "@/components/illustrations/MiscIcons";

export const metadata: Metadata = {
  title: "Pricing",
  description: "One simple, flat-rate website package for small businesses.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">Pricing</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              One simple price. No surprises.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Small businesses shouldn&apos;t need a confusing pricing page.
              Here&apos;s exactly what you get.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-md">
          <div className="flex flex-col rounded-3xl border border-brand bg-brand-light/40 p-8 shadow-xl shadow-brand/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
              <TagIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">Website Package</h3>
            <p className="mt-4 text-4xl font-semibold tracking-tight">
              {packagePrice}
              <span className="text-base font-normal text-muted-foreground">
                {" "}
                flat rate
              </span>
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {packageFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-brand"
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

            <Button href="/quote" className="mt-8 w-full">
              Get Started
            </Button>
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Have something a little different in mind?{" "}
            <a href="/contact" className="font-medium text-brand">
              Let&apos;s talk
            </a>
            .
          </p>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
