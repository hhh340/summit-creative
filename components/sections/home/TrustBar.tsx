import { Container } from "@/components/ui/Container";

const audiences = [
  "Local Shops",
  "Freelancers",
  "Personal Brands",
  "Startups",
  "Bloggers",
  "Creators",
];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-muted/50 py-10">
      <Container>
        <p className="text-center text-sm font-medium text-muted-foreground">
          Built for small businesses of every kind
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {audiences.map((audience) => (
            <span
              key={audience}
              className="text-sm font-medium tracking-wide text-foreground/70"
            >
              {audience}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
