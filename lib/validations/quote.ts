import { z } from "zod";

export const websiteTypeOptions = [
  "Business website",
  "Portfolio / personal website",
  "Blog",
  "Landing page",
  "Other",
] as const;

export const timelineOptions = ["ASAP", "Within a week", "Just exploring"] as const;

export const domainStatusOptions = [
  "Yes, I have one",
  "No, I need one",
  "Not sure",
] as const;

export const quoteFormSchema = z.object({
  websiteType: z.enum(websiteTypeOptions, { message: "Select a website type" }),
  timeline: z.enum(timelineOptions, { message: "Select a timeline" }),
  domainStatus: z.enum(domainStatusOptions, { message: "Select an option" }),
  idea: z.string().trim().min(10, "Tell us a bit more (10+ characters)").max(2000),
  email: z.string().trim().email("Please enter a valid email"),
  // Honeypot — real users never fill this in; bots often do.
  website: z.string().max(0, "Spam detected").optional().or(z.literal("")),
  renderedAt: z.number(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const quoteClientSchema = quoteFormSchema.omit({ renderedAt: true });
export type QuoteClientValues = z.infer<typeof quoteClientSchema>;
