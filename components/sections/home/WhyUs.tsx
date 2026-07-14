import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Custom design, not templates",
    description:
      "Your site is designed around your business — never a recycled theme with your logo swapped in.",
  },
  {
    title: "Built to convert",
    description:
      "Clean layouts and clear calls-to-action turn visitors into inquiries and customers — not just page views.",
  },
  {
    title: "Fast and transparent",
    description: "One flat price up front, and your site delivered in 2 days.",
  },
  {
    title: "Priced for small business",
    description:
      "No agency price tag. Just one honest, flat price built for small business budgets.",
  },
];

export function WhyUs() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="Why work with me"
          title="A great website shouldn't be complicated"
          description="Your website is the first impression most of your customers will ever have of you. It should look the part."
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
