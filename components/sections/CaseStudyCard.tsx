import Link from "next/link";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
    >
      <div
        className={cn(
          "aspect-[16/10] bg-gradient-to-br",
          study.gradient,
          "relative flex items-end p-6",
        )}
      >
        <span className="rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Concept Project
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {study.industry}
        </p>
        <h3 className="mt-2 text-lg font-semibold">{study.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {study.summary}
        </p>
        <span className="mt-4 inline-block text-sm font-semibold text-foreground group-hover:text-brand">
          View project →
        </span>
      </div>
    </Link>
  );
}
