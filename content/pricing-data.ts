export type PricingTier = {
  name: string;
  startingPrice: string;
  description: string;
  bestFor: string;
  features: string[];
  highlighted?: boolean;
};

/**
 * Starting prices are placeholders — review and adjust to match real costs
 * and margins before launch.
 */
export const pricingTiers: PricingTier[] = [
  {
    name: "Launch",
    startingPrice: "$1,500",
    description: "A focused, high-converting site to get you online fast.",
    bestFor: "Landing pages, small businesses, portfolios",
    features: [
      "Up to 5 pages",
      "Custom responsive design",
      "Contact form",
      "Basic SEO setup",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Growth",
    startingPrice: "$4,500",
    description: "A full business website built to generate leads and bookings.",
    bestFor: "Most service businesses, restaurants, clinics, studios",
    features: [
      "Up to 12 pages",
      "Booking or appointment integration",
      "CMS for easy content updates",
      "SEO foundations & analytics",
      "3 rounds of revisions",
    ],
    highlighted: true,
  },
  {
    name: "Platform",
    startingPrice: "$12,000+",
    description: "Ecommerce, custom web apps, and multi-feature platforms.",
    bestFor: "Ecommerce, marketplaces, membership sites, custom dashboards",
    features: [
      "Unlimited pages & custom features",
      "Payments, accounts & admin dashboard",
      "API integrations",
      "Dedicated project lead",
      "Ongoing support options",
    ],
  },
];
