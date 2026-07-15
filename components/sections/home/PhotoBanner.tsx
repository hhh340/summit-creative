import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function PhotoBanner() {
  return (
    <section className="bg-brand-light/50 py-20 sm:py-28">
      <Container>
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1753351052617-62818ffc9173?q=80&w=1200&auto=format&fit=crop"
              alt="Two small business owners standing proudly together in their shop"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Built for people like you
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Small businesses deserve a website they&apos;re proud of
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              You&apos;ve put real work into your business. Your website should
              reflect that — not look like an afterthought.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
