import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection({
  title = "Ready to build something worth showing off?",
  description = "Tell us about your project and we'll come back with a clear plan, timeline, and price — usually within one business day.",
  primaryLabel = "Request a Quote",
  primaryHref = "/quote",
  secondaryLabel = "Talk to Us",
  secondaryHref = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-night py-24 sm:py-32">
      <div
        className="glow-blob pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2"
        aria-hidden="true"
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-night-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-night-muted">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryHref} variant="night" size="lg">
            {primaryLabel}
          </Button>
          <Button
            href={secondaryHref}
            variant="ghost"
            size="lg"
            className="text-night-foreground hover:bg-white/10"
          >
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
