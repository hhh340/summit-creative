import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Business Websites",
    description:
      "Professional, credible sites for service businesses that need to win trust fast.",
  },
  {
    title: "Ecommerce Stores",
    description:
      "Custom storefronts built to convert — from product pages to checkout.",
  },
  {
    title: "Booking & Appointments",
    description:
      "Scheduling built in, so visitors become booked clients without a phone call.",
  },
  {
    title: "Restaurant & Hospitality",
    description:
      "Menus, reservations, and online ordering, designed to make food the hero.",
  },
  {
    title: "Real Estate & Directories",
    description: "Searchable listings, filtering, and map views buyers expect.",
  },
  {
    title: "Custom Web Applications",
    description:
      "Client portals, dashboards, and tools tailored to how your business runs.",
  },
];

export function ServicesOverview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="What we build"
          title="One team, every kind of website"
          description="Whatever your business does, we build the site that helps it grow — matched to your industry, not a generic template."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
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
            Explore all services and features →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
