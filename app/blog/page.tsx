import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { blogPosts } from "@/content/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical advice on websites, pricing, and conversion for business owners — from the Summit Creative team.",
};

export default function BlogPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">Blog</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Practical advice, not fluff
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Straight answers on pricing, conversion, and building a website
              that actually grows your business.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-3xl">
          <div className="divide-y divide-border border-y border-border">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block py-8"
              >
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                  <span className="text-brand">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold group-hover:text-brand">
                  {post.title}
                </h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
