import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { faqs } from "@/content/faq-data";
import { QuestionIcon } from "@/components/illustrations/MiscIcons";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about timelines, pricing, ownership, and what happens after your Summit Creative site launches.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section className="pt-20 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand">
              <QuestionIcon className="h-6 w-6" />
            </div>
            <Badge className="mx-auto mt-6">FAQ</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Questions, answered
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a href="/contact" className="font-medium text-brand">
                Reach out directly
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-2xl">
          <FaqAccordion />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
