import { Container } from "@/components/ui/Container";

const industries = [
  "Restaurants",
  "Medical & Dental",
  "Law Firms",
  "Real Estate",
  "Gyms & Studios",
  "Ecommerce",
  "Hospitality",
  "Construction",
];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-muted/50 py-10">
      <Container>
        <p className="text-center text-sm font-medium text-muted-foreground">
          Built for ambitious businesses across every industry
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="text-sm font-medium tracking-wide text-foreground/70"
            >
              {industry}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
