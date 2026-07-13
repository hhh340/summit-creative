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
 * Concept projects built to demonstrate range across industries. These are
 * illustrative example brands, not real clients — replace with real case
 * studies and testimonials as they become available.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "alpine-ridge-dental",
    title: "Alpine Ridge Dental",
    industry: "Dental",
    categories: ["Medical & Dental", "Booking Website"],
    summary:
      "A calming, trust-building presence for a family dental practice, built around easy online appointment booking.",
    focusAreas: [
      "Online appointment booking",
      "Insurance & new patient info",
      "Mobile-first design",
    ],
    gradient: "from-sky-400 to-indigo-500",
    timeline: "3 weeks",
    services: ["Web Design", "Booking Integration", "SEO Foundations"],
    challenge:
      "Prospective patients often abandon dental sites that bury the phone number and offer no way to book outside office hours.",
    approach:
      "We designed a warm, photography-led homepage with a persistent booking CTA, a clear services breakdown, and a self-serve scheduling flow patients can complete in under a minute.",
    outcome:
      "A concept site focused on one job: turning a visit to the homepage into a booked appointment, with zero phone tag required.",
  },
  {
    slug: "marlow-co-law",
    title: "Marlow & Co. Law",
    industry: "Law Firm",
    categories: ["Law Firm", "Landing Page"],
    summary:
      "A confident, editorial-style site for a boutique law firm that needed to look established from day one.",
    focusAreas: ["Practice area pages", "Case results", "Consultation requests"],
    gradient: "from-slate-500 to-slate-800",
    timeline: "2.5 weeks",
    services: ["Web Design", "Copywriting", "Contact & Intake Forms"],
    challenge:
      "Legal buyers judge credibility fast. A generic template undermines trust before a visitor reads a word of copy.",
    approach:
      "We built a restrained, typography-forward design with clear practice-area navigation and a low-friction consultation request form to convert high-intent visitors.",
    outcome:
      "A concept layout designed to make a small firm read as a serious, established one — built for referral and search traffic alike.",
  },
  {
    slug: "harborline-real-estate",
    title: "Harborline Real Estate",
    industry: "Real Estate",
    categories: ["Real Estate", "Directory"],
    summary:
      "A listings-first real estate site with map search, saved favorites, and agent profiles.",
    focusAreas: ["Property search & filtering", "Map integration", "Agent profiles"],
    gradient: "from-emerald-400 to-teal-600",
    timeline: "4 weeks",
    services: ["Web Design", "Search & Filtering", "CMS Setup"],
    challenge:
      "Buyers expect Zillow-grade search UX even from independent brokerages, which most boutique sites can't deliver.",
    approach:
      "We designed a fast filterable listings grid with map view, saved-search patterns, and dedicated agent pages to build trust with buyers before first contact.",
    outcome:
      "A concept experience built to keep buyers exploring listings on-site instead of bouncing to aggregator sites.",
  },
  {
    slug: "forge-fitness-studio",
    title: "Forge Fitness Studio",
    industry: "Gym & Fitness",
    categories: ["Gym", "Booking Website"],
    summary:
      "A high-energy brand site for a boutique gym, built around class booking and membership sign-up.",
    focusAreas: ["Class schedule & booking", "Membership plans", "Instructor bios"],
    gradient: "from-orange-400 to-rose-600",
    timeline: "3 weeks",
    services: ["Web Design", "Booking Integration", "Payments Setup"],
    challenge:
      "Fitness studios lose sign-ups when the schedule is hard to browse or booking requires a phone call.",
    approach:
      "We built a bold, motion-driven homepage with a live class schedule, one-click booking, and transparent membership tiers with instant checkout.",
    outcome:
      "A concept site designed to turn schedule-browsers into booked first classes without ever picking up the phone.",
  },
  {
    slug: "kettle-and-vine",
    title: "Kettle & Vine",
    industry: "Restaurant",
    categories: ["Restaurant", "Booking Website"],
    summary:
      "A sensory, photography-forward restaurant site built to drive reservations and takeout orders.",
    focusAreas: ["Reservations", "Menu presentation", "Online ordering"],
    gradient: "from-amber-400 to-red-500",
    timeline: "2.5 weeks",
    services: ["Web Design", "Reservation Integration", "Menu CMS"],
    challenge:
      "Diners decide in seconds based on visuals — a cluttered or dated site costs restaurants covers every week.",
    approach:
      "We designed a full-bleed, image-led layout with an always-visible reservation button and a menu structure the owner can update without a developer.",
    outcome:
      "A concept site built to make the food the hero, with reservations never more than one tap away.",
  },
  {
    slug: "northbound-supply-co",
    title: "Northbound Supply Co.",
    industry: "Ecommerce",
    categories: ["Ecommerce", "Custom Web App"],
    summary:
      "A premium ecommerce storefront for an outdoor goods brand, built for conversion and repeat purchases.",
    focusAreas: ["Product catalog", "Checkout & payments", "Customer accounts"],
    gradient: "from-indigo-500 to-violet-600",
    timeline: "5 weeks",
    services: ["Web Design", "Ecommerce Build", "Payments Integration"],
    challenge:
      "Generic storefront templates flatten brand identity and quietly suppress conversion rates.",
    approach:
      "We built a custom storefront with editorial product pages, a streamlined one-page checkout, and account features that make reordering effortless.",
    outcome:
      "A concept storefront designed around a simple principle: every click between homepage and checkout should feel inevitable.",
  },
];
