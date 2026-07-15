"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/content/process-data";
import {
  ClipboardIcon,
  PaletteIcon,
  ReviewIcon,
  RocketIcon,
} from "@/components/illustrations/ProcessIcons";

const icons = [ClipboardIcon, PaletteIcon, ReviewIcon, RocketIcon];

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-border sm:block" />
      <div className="space-y-12">
        {processSteps.map((step, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid grid-cols-1 gap-6 sm:grid-cols-[3rem_1fr] sm:pl-0"
            >
              <div className="relative flex sm:justify-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-brand">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-background p-8 sm:-mt-1">
                <span className="text-xs font-mono font-medium text-muted-foreground">
                  {step.number}
                </span>
                <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
