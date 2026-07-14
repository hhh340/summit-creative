export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Tell me about your business",
    description:
      "Fill out a short form about your business and what you want your website to do.",
  },
  {
    number: "02",
    title: "I design your site",
    description: "I put together a homepage design based on what you told me.",
  },
  {
    number: "03",
    title: "You review it",
    description: "You look it over and tell me what you'd like changed.",
  },
  {
    number: "04",
    title: "It goes live",
    description: "Once you're happy with it, your website goes live.",
  },
];
