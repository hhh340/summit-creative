import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { pricingTiers } from "@/content/pricing-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent starting prices for Summit Creative websites — from focused landing pages to full ecommerce platforms.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">Pricing</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Clear starting prices. No surprises.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Every project is scoped around your exact needs, so these are
              starting points, not fixed packages. Use the project builder for
              an exact quote.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "flex flex-col rounded-3xl border p-8",
                  tier.highlighted
                    ? "border-brand bg-brand-light/40 shadow-xl shadow-brand/10"
                    : "border-border bg-background",
                )}
              >
                {tier.highlighted && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-4 text-3xl font-semibold tracking-tight">
                  {tier.startingPrice}
                  <span className="text-base font-normal text-muted-foreground">
                    {" "}
                    starting
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Best for
                </p>
                <p className="mt-1 text-sm">{tier.bestFor}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
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

                <Button
                  href={`/quote?tier=${encodeURIComponent(tier.name)}`}
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  Get an exact quote
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Need something more custom? Every price above is a starting point
            — <a href="/contact" className="font-medium text-brand">talk to us</a> about your specific project.
          </p>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
