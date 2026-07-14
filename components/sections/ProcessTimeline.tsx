"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/content/process-data";

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-border sm:block" />
      <div className="space-y-12">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="relative grid grid-cols-1 gap-6 sm:grid-cols-[3rem_1fr] sm:pl-0"
          >
            <div className="relative flex sm:justify-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold">
                {step.number}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8 sm:-mt-1">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
