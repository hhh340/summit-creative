import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { caseStudies } from "@/content/case-studies";

export function PortfolioTeaser() {
  const featured = caseStudies.slice(0, 3);

  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="A glimpse of what we build"
          description="A few concept projects showing the range of industries and site types we design for."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-brand hover:text-brand-dark"
          >
            See the full portfolio →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
