import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { QuoteWizard } from "@/components/sections/quote/QuoteWizard";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell us about your project in a few steps and get a clear plan, timeline, and price from Summit Creative.",
};

export default function QuotePage() {
  return (
    <Section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Badge className="mx-auto">Request a Quote</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Let&apos;s scope your project
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A few quick steps, then we&apos;ll come back with a clear plan,
            timeline, and price — usually within one business day.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-background p-8 sm:p-10">
          <Suspense fallback={null}>
            <QuoteWizard />
          </Suspense>
        </div>
      </Container>
    </Section>
  );
}
