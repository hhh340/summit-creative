import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { title: "Discover", description: "We learn your business, goals, and customers." },
  { title: "Design", description: "You review real designs, not vague mockups." },
  { title: "Build", description: "We develop, test, and refine until it's right." },
  { title: "Launch & Grow", description: "We ship it — then help you improve it." },
];

export function ProcessTeaser() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From first call to launch, in four steps"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <span className="text-sm font-mono font-medium text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/process"
            className="text-sm font-semibold text-brand hover:text-brand-dark"
          >
            See our full process →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
