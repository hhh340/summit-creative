import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { SummitPath } from "@/components/illustrations/SummitPath";

export const metadata: Metadata = {
  title: "About",
  description:
    "Summit Creative is a one-person web design studio helping small businesses get a great website without the agency price tag.",
};

const values = [
  {
    title: "Real attention to your project",
    description:
      "You're not one of a hundred accounts. I work on a small number of sites at a time, so yours gets real attention.",
  },
  {
    title: "Clear and honest",
    description:
      "You'll always know what's happening and what it costs. No jargon, no confusing add-ons.",
  },
  {
    title: "Fast turnaround",
    description:
      "No months-long waiting. Most sites are designed and delivered within 2 days.",
  },
  {
    title: "Priced for small businesses",
    description:
      "One flat, honest price — built for small businesses, not enterprise budgets.",
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
              A student developer, helping small businesses grow online
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I&apos;m a 15-year-old student with real experience building
              websites, and I started Summit Creative to help small businesses
              get a website that actually looks professional — without paying
              agency prices. I care about doing good work, and I&apos;m eager to
              help your business make a great first impression online.
            </p>
          </div>

          <SummitPath className="mx-auto mt-14 w-full max-w-xl" />
        </Container>
      </Section>

      <Section className="bg-amber-50/60">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop"
                alt="A laptop and coffee on a desk, set up for focused design work"
                width={700}
                height={560}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="What you can expect"
                title="Why small businesses work with me"
                align="left"
                className="mx-0"
              />
              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                {values.map((value) => (
                  <div key={value.title}>
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Let's build your website."
        description="Tell me about your business and what you're looking for — I'll get back to you within one business day."
      />
    </>
  );
}
