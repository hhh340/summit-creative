import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { websiteTypes, featureCategories } from "@/content/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business websites, ecommerce, booking platforms, and custom web apps — built with the exact features your business needs.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">Services</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Any type of website. Any feature you need.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We don&apos;t sell fixed packages. Tell us what your business does
              and what it needs to do online — we&apos;ll design and build exactly
              that.
            </p>
            <div className="mt-8">
              <Button href="/quote" size="lg">
                Build Your Website — Get a Quote
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Website types"
            title="Built for your kind of business"
            description="A sample of the types of websites we design and build — if yours isn't listed, ask us anyway."
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
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Every feature modern businesses need"
            description="Mix and match — every project is scoped around the exact features that matter for your business."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featureCategories.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <h3 className="text-base font-semibold">{group.category}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                        className="shrink-0 text-brand"
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
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Not sure what you need?"
        description="Use our project builder to select your website type and features — we'll turn it into a clear proposal within one business day."
        primaryLabel="Start the Website Builder"
        primaryHref="/quote"
      />
    </>
  );
}
