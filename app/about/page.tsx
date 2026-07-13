import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Summit Creative is a boutique web design studio building premium, conversion-focused websites for ambitious businesses.",
};

const values = [
  {
    title: "Craft over templates",
    description:
      "Every site is designed around your brand and your customers — never a recycled theme with a new logo.",
  },
  {
    title: "Clarity, always",
    description:
      "You'll always know your timeline, your price, and what happens next. No jargon, no surprises.",
  },
  {
    title: "Built to perform",
    description:
      "Beautiful design means nothing if it doesn't load fast, rank well, and turn visitors into customers.",
  },
  {
    title: "A real partnership",
    description:
      "We treat your project like our own business is on the line — because your growth is our track record.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">About Summit Creative</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              We build websites like it&apos;s our own business on the line.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Summit Creative exists because too many businesses are stuck with
              websites that look dated, load slowly, or simply don&apos;t
              convert. We started this studio to build the kind of sites we&apos;d
              want for our own business — premium, fast, and designed with one
              goal: turning visitors into customers.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="Principles we don't compromise on"
            align="left"
          />
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="How we're structured"
              title="A small, senior team — not a junior queue"
              align="left"
              className="mx-0"
            />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Summit Creative is run as a focused studio, not a volume agency.
              That means every project gets direct attention from senior
              designers and engineers — not handed off to whoever&apos;s free.
              You&apos;ll talk to the people actually building your site, from the
              first call to launch day and beyond.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Let's build something worth showing off."
        description="Tell us about your business and what you're trying to achieve — we'll tell you exactly how we'd approach it."
      />
    </>
  );
}
