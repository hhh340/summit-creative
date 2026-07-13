"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { caseStudies } from "@/content/case-studies";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const categories = useMemo(() => {
    const set = new Set<string>();
    caseStudies.forEach((s) => s.categories.forEach((c) => set.add(c)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return caseStudies;
    return caseStudies.filter((s) => s.categories.includes(active));
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === category
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((study) => (
            <motion.div
              key={study.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-14 text-center text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
