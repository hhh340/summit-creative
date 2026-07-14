export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  categories: string[];
  summary: string;
  focusAreas: string[];
  gradient: string;
  timeline: string;
  services: string[];
  challenge: string;
  approach: string;
  outcome: string;
};

/**
 * Concept projects built to demonstrate style and range. These are
 * illustrative example brands, not real clients — replace with real case
 * studies as they become available.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "kettle-and-vine",
    title: "Kettle & Vine",
    industry: "Local Shop",
    categories: ["Business website"],
    summary:
      "A warm, simple site for a neighborhood coffee shop — hours, menu, and location, front and center.",
    focusAreas: ["Menu page", "Hours & location", "Contact form"],
    gradient: "from-amber-400 to-red-500",
    timeline: "2 days",
    services: ["Web Design", "Copywriting"],
    challenge:
      "Customers couldn't find hours or the menu online, so they'd call to ask or just go somewhere else.",
    approach:
      "A clean single-page site with the menu, hours, and location visible immediately — no digging required.",
    outcome:
      "A concept site built to answer the three questions every visitor has in the first five seconds.",
  },
  {
    slug: "marlow-photography",
    title: "Marlow Photography",
    industry: "Freelancer",
    categories: ["Portfolio / personal website"],
    summary:
      "A simple, image-forward portfolio for a freelance photographer to show off their work.",
    focusAreas: ["Photo gallery", "About section", "Contact form"],
    gradient: "from-slate-500 to-slate-800",
    timeline: "2 days",
    services: ["Web Design"],
    challenge:
      "A photographer's work deserves more than a social media grid — but a full custom site felt out of reach.",
    approach:
      "A clean, photo-first layout that lets the work speak for itself, with an easy way for clients to get in touch.",
    outcome:
      "A concept portfolio built to make a strong first impression without competing with the photos.",
  },
  {
    slug: "north-and-co",
    title: "North & Co. Journal",
    industry: "Blog",
    categories: ["Blog"],
    summary: "A clean, readable blog for a small brand sharing updates and stories.",
    focusAreas: ["Post layout", "Easy navigation", "Mobile-friendly reading"],
    gradient: "from-emerald-400 to-teal-600",
    timeline: "2 days",
    services: ["Web Design"],
    challenge:
      "A cluttered, hard-to-read blog layout was driving readers away before they finished a post.",
    approach:
      "A simple, distraction-free layout built around readability first.",
    outcome: "A concept blog designed so the writing is what stands out.",
  },
  {
    slug: "riverside-tutoring",
    title: "Riverside Tutoring",
    industry: "Small Business",
    categories: ["Landing page"],
    summary:
      "A single, focused landing page for a local tutoring service to introduce itself and get inquiries.",
    focusAreas: ["Clear offer", "Contact form", "Simple, trustworthy design"],
    gradient: "from-indigo-500 to-violet-600",
    timeline: "2 days",
    services: ["Web Design", "Copywriting"],
    challenge:
      "A new local business had no online presence at all, making it hard for parents to find or trust them.",
    approach:
      "One focused page explaining who they help, how it works, and a simple way to reach out.",
    outcome:
      "A concept page built to turn a Google search into a first inquiry.",
  },
];
