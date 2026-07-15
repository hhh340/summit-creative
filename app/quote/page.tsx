import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { QuoteBubbleIcon } from "@/components/illustrations/ContactIcons";

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
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand">
            <QuoteBubbleIcon className="h-6 w-6" />
          </div>
          <Badge className="mx-auto mt-6">Request a Quote</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Let&apos;s talk about your website
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Fill this out and I&apos;ll get back to you within one business day.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-brand-light/50">
          <Image
            src="https://images.unsplash.com/photo-1752159400890-d906038f1b35?q=80&w=1200&auto=format&fit=crop"
            alt="Two business partners shaking hands in agreement"
            width={1200}
            height={400}
            className="h-40 w-full object-cover sm:h-52"
            priority
          />
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-background p-8 sm:p-10">
          <QuoteForm />
        </div>
      </Container>
    </Section>
  );
}
