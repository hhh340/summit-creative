import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { QuoteForm } from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell me about your project and I'll get back to you within one business day.",
};

export default function QuotePage() {
  return (
    <Section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Container className="max-w-xl">
        <div className="text-center">
          <Badge className="mx-auto">Request a Quote</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Let&apos;s talk about your website
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Fill this out and I&apos;ll get back to you within one business day.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-background p-8 sm:p-10">
          <QuoteForm />
        </div>
      </Container>
    </Section>
  );
}
