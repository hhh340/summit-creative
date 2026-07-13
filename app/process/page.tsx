import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From discovery to launch in a few weeks — a clear, transparent process with no disappearing acts.",
};

export default function ProcessPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">Our Process</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              From first call to launch, with total clarity
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              No black boxes. You&apos;ll always know what&apos;s happening, what&apos;s
              next, and when you&apos;ll launch.
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
        title="Ready to start the discovery call?"
        description="Tell us a bit about your project and we'll schedule a quick call to scope it out."
      />
    </>
  );
}
