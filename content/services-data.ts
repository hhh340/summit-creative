export const websiteTypes = [
  "Business",
  "Restaurant",
  "Hotel",
  "Medical",
  "Dental",
  "Law Firm",
  "Construction",
  "Real Estate",
  "Gym",
  "Salon",
  "School",
  "University",
  "Portfolio",
  "Blog",
  "News",
  "Marketplace",
  "Membership",
  "Landing Page",
  "Ecommerce",
  "Booking Website",
  "Travel",
  "Directory",
  "Forum",
  "Custom Web App",
] as const;

export type WebsiteType = (typeof websiteTypes)[number];

export type FeatureCategory = {
  category: string;
  features: string[];
};

export const featureCategories: FeatureCategory[] = [
  {
    category: "Engagement",
    features: [
      "Contact Forms",
      "Live Chat",
      "AI Chatbot",
      "Newsletter",
      "Reviews & Ratings",
      "Testimonials",
    ],
  },
  {
    category: "Commerce & Payments",
    features: [
      "Payments",
      "Stripe",
      "PayPal",
      "Apple Pay",
      "Google Pay",
      "Invoices",
      "Ecommerce",
      "Inventory",
    ],
  },
  {
    category: "Booking & Scheduling",
    features: [
      "Booking",
      "Appointments",
      "Calendar",
      "Scheduling",
      "Notifications",
      "SMS",
    ],
  },
  {
    category: "Accounts & Admin",
    features: [
      "Customer Accounts",
      "Authentication",
      "Role Management",
      "Admin Dashboard",
      "CRM",
      "Support Tickets",
      "Knowledge Base",
    ],
  },
  {
    category: "Content & Media",
    features: [
      "CMS",
      "Blog",
      "Image Gallery",
      "Video Gallery",
      "Search",
      "Filtering",
      "Maps",
    ],
  },
  {
    category: "Growth & Marketing",
    features: ["SEO", "Email Automation", "Analytics", "Multi-language", "Push Notifications"],
  },
  {
    category: "Platform & Performance",
    features: [
      "Cloud Database",
      "API Integrations",
      "Accessibility",
      "Performance",
      "Dark Mode",
      "File Uploads",
    ],
  },
];

export const allFeatures = featureCategories.flatMap((c) => c.features);
