export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most business websites take 2–4 weeks from kickoff to launch. Larger builds with ecommerce or custom features usually take 4–6 weeks. You'll get a specific timeline before any work begins.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "It depends on scope — see our Pricing page for starting ranges. Every project is scoped individually; use our project builder for an exact quote based on your specific needs.",
  },
  {
    question: "Do you write the content and copy?",
    answer:
      "Yes — we can write persuasive, on-brand copy for your entire site, or work with content you already have. Just let us know what you need in your project request.",
  },
  {
    question: "Can you redesign or migrate my existing website?",
    answer:
      "Yes. We regularly redesign outdated sites and migrate existing content, so you don't lose what's already working — search rankings included.",
  },
  {
    question: "Do you build ecommerce and payment features?",
    answer:
      "Yes — from simple payment buttons to full storefronts with Stripe, PayPal, Apple Pay, and Google Pay, plus inventory and customer accounts.",
  },
  {
    question: "What happens after my site launches?",
    answer:
      "We offer ongoing support and update packages after launch, so your site keeps working as your business grows. Nothing is ever a one-and-done handoff.",
  },
  {
    question: "Who owns the website once it's built?",
    answer:
      "You do. You own the code, the content, and the domain — always.",
  },
  {
    question: "How does the quote process work?",
    answer:
      "Use our project builder to tell us about your business and what you need. We'll review it and come back with a clear plan, timeline, and price — usually within one business day.",
  },
];
