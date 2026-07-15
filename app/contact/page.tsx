import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site-config";
import {
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  QuoteBubbleIcon,
} from "@/components/illustrations/ContactIcons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — tell me about your business and I'll get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <Section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Badge>Contact</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance">
              Let&apos;s talk about your project
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Have a question, or not quite ready to send a full quote request?
              Send a message and I&apos;ll get back to you within one business day.
            </p>

            <div className="mt-10 space-y-6 border-t border-border pt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <MailIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block font-medium text-brand"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone
                  </h3>
                  <a
                    href={`tel:+1${siteConfig.phone}`}
                    className="mt-1 block font-medium text-brand"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <FacebookIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Facebook
                  </h3>
                  <a
                    href={siteConfig.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-medium text-brand"
                  >
                    Summit Creative ↗
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <QuoteBubbleIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Ready to get a quote?
                  </h3>
                  <a href="/quote" className="mt-1 block font-medium text-brand">
                    Use the quote form instead →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-background p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
