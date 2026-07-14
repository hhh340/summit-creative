import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Payment",
  robots: { index: false, follow: false },
};

export default function PaymentPage() {
  return (
    <Section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Container className="max-w-xl text-center">
        <Badge className="mx-auto">Payment</Badge>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Payment coming soon
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          This page will let you pay for your website online. It&apos;s not
          connected to a payment processor yet — for now, payment details will
          be arranged directly.
        </p>
      </Container>
    </Section>
  );
}
