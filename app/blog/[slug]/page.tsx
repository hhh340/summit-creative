import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BlogBody } from "@/components/sections/BlogBody";
import { CTASection } from "@/components/sections/CTASection";
import { blogPosts } from "@/content/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <Section className="pt-20 pb-0 sm:pt-28">
        <Container className="max-w-2xl">
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            ← Back to blog
          </Link>

          <div className="mt-8 flex items-center gap-3 text-xs font-medium text-muted-foreground">
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

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {post.title}
          </h1>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-2xl">
          <BlogBody body={post.body} />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
