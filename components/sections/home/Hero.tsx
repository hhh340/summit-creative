"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BrowserMockup } from "@/components/illustrations/BrowserMockup";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="glow-blob pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2"
        aria-hidden="true"
      />
      <Container className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge className="mx-auto">Websites for small businesses</Badge>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Built to impress.{" "}
            <span className="text-gradient-brand">Designed to convert.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Summit Creative designs and builds professional websites for small
            businesses — the kind that make visitors trust you before they
            even read a word.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/quote" size="lg">
              Request a Quote
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg">
              View My Work
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <BrowserMockup className="w-full drop-shadow-xl" />
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-6 border-t border-border pt-10"
        >
          {[
            { value: "2 days", label: "Turnaround time" },
            { value: "$250", label: "Flat price, no surprises" },
            { value: "100%", label: "Custom-built, no templates" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.dl>
      </Container>
    </div>
  );
}
