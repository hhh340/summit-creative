export type ProcessStep = {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    duration: "Days 1–2",
    description:
      "We start with a short call to understand your business, your customers, and what your site needs to achieve. No generic questionnaires.",
    deliverables: ["Project scope", "Sitemap", "Timeline & price"],
  },
  {
    number: "02",
    title: "Design",
    duration: "Days 3–8",
    description:
      "We design real, high-fidelity pages for your review — not vague moodboards. You give feedback directly until it feels right.",
    deliverables: ["Homepage concept", "Key page designs", "Mobile layouts"],
  },
  {
    number: "03",
    title: "Build",
    duration: "Days 9–18",
    description:
      "We develop the approved design into a fast, responsive, production-ready site, wiring up every feature you need along the way.",
    deliverables: ["Fully built site", "Forms & integrations", "QA across devices"],
  },
  {
    number: "04",
    title: "Launch",
    duration: "Days 19–21",
    description:
      "We handle deployment, domain connection, and final checks — then go live together, with you watching every step.",
    deliverables: ["Production deployment", "Analytics setup", "Launch checklist"],
  },
  {
    number: "05",
    title: "Grow",
    duration: "Ongoing",
    description:
      "Launch is the start, not the finish. We're available for updates, improvements, and support as your business grows.",
    deliverables: ["Post-launch support", "Performance monitoring", "Ongoing updates"],
  },
];
