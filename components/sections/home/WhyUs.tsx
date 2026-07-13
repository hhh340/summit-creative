import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Premium design, not templates",
    description:
      "Every site is designed from scratch around your brand — never a recycled theme with your logo swapped in.",
  },
  {
    title: "Built to convert",
    description:
      "Clean layouts and clear calls-to-action turn visitors into inquiries, bookings, and sales — not just page views.",
  },
  {
    title: "Fast, transparent process",
    description:
      "A clear timeline and price up front, with regular check-ins — no disappearing for six weeks.",
  },
  {
    title: "Built to scale with you",
    description:
      "Modern, maintainable code that can grow from a landing page into a full platform when you're ready.",
  },
];

export function WhyUs() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="Why Summit Creative"
          title="Design that earns trust. Engineering that holds up."
          description="We treat your website like a product, not a project — because it's the first impression most of your customers will ever have of you."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-sm font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-semibold">{pillar.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
