import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies } from "@/content/case-studies";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) return {};

  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  return (
    <>
      <Section className="pt-20 pb-0 sm:pt-28">
        <Container>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            ← Back to portfolio
          </Link>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Badge className="mx-auto">{study.industry}</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {study.title}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {study.summary}
            </p>
            <div className="mt-8">
              <Button href={study.liveUrl} target="_blank" rel="noopener noreferrer" size="lg">
                Visit Live Site ↗
              </Button>
            </div>
          </div>

          <div
            className={cn(
              "mt-14 aspect-[21/9] rounded-3xl bg-gradient-to-br",
              study.gradient,
              "flex items-end p-8",
            )}
          >
            <span className="rounded-full bg-black/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              Live Project
            </span>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <div>
                <h2 className="text-xl font-semibold">The Challenge</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {study.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">My Approach</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {study.approach}
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">The Outcome</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {study.outcome}
                </p>
              </div>
            </div>

            <div className="space-y-8 rounded-2xl border border-border bg-muted/40 p-8 lg:col-span-1">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Live Site
                </h3>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-medium text-brand hover:text-brand-dark"
                >
                  {study.liveUrl.replace("https://", "")} ↗
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Services
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {study.services.map((service) => (
                    <li key={service} className="font-medium">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Focus Areas
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {study.focusAreas.map((area) => (
                    <li key={area} className="font-medium">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Want a site like this for your business?"
        description="Tell me about your project and I'll get back to you within one business day."
      />
    </>
  );
}
