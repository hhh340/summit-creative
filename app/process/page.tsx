import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Process",
  description: "A simple, four-step process — website delivered in 2 days.",
};

export default function ProcessPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">Our Process</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Simple, fast, and easy to follow
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              No confusing steps. Your website, delivered in 2 days.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-3xl">
          <ProcessTimeline />
        </Container>
      </Section>

      <CTASection
        title="Ready to get started?"
        description="Tell me about your business and I'll get back to you within one business day."
      />
    </>
  );
}
