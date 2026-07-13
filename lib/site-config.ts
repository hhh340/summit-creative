export const siteConfig = {
  name: "Summit Creative",
  tagline: "Built to impress. Designed to convert.",
  description:
    "Summit Creative designs and builds premium websites that build trust, generate leads, and grow revenue — for restaurants, medical practices, real estate teams, and ambitious businesses of every kind.",
  url: "https://summitcreative.co",
  email: "hello@summitcreative.co",
  links: {
    twitter: "https://twitter.com/summitcreative",
    linkedin: "https://linkedin.com/company/summitcreative",
    instagram: "https://instagram.com/summitcreative",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Industries", href: "/industries" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Request a Quote", href: "/quote" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
