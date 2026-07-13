import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { industries } from "@/content/industries-data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Summit Creative designs websites tailored to restaurants, medical practices, law firms, real estate, fitness studios, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">Industries</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Built around how your industry actually works
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Every industry has different customers, different buying
              decisions, and different must-have features. We design around
              yours.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.slug}
                className="flex flex-col rounded-2xl border border-border bg-background p-8"
              >
                <h3 className="text-lg font-semibold">{industry.name}</h3>
                <p className="mt-2 text-sm font-medium text-brand">
                  {industry.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {industry.painPoint}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {industry.whatWeBuild.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/quote?type=${encodeURIComponent(industry.name)}`}
                  className="mt-6 text-sm font-semibold text-foreground hover:text-brand"
                >
                  Get a quote for your {industry.name.split(" ")[0].toLowerCase()} →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
