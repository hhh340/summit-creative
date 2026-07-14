export const websiteTypes = [
  "Business website",
  "Portfolio / personal website",
  "Blog",
  "Landing page",
] as const;

export type WebsiteType = (typeof websiteTypes)[number];
