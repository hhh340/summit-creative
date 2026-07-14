import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BusinessIcon,
  PortfolioIcon,
  BlogIcon,
  LandingPageIcon,
} from "@/components/illustrations/ServiceIcons";

const services = [
  {
    title: "Business Websites",
    description:
      "A clean, professional site that tells customers who you are and how to reach you.",
    Icon: BusinessIcon,
  },
  {
    title: "Portfolio & Personal Sites",
    description: "Show off your work with a simple site that puts it front and center.",
    Icon: PortfolioIcon,
  },
  {
    title: "Blogs",
    description: "A place to share updates, posts, or your story, built to look sharp.",
    Icon: BlogIcon,
  },
  {
    title: "Landing Pages",
    description: "One focused page to introduce something new and get people to act.",
    Icon: LandingPageIcon,
  },
];

export function ServicesOverview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="What I build"
          title="Simple websites, done well"
          description="One flat price, one focused package — built around what small businesses actually need."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand">
                <service.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-brand hover:text-brand-dark"
          >
            See what&apos;s included →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
