import { z } from "zod";

export const budgetRanges = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Not sure yet",
] as const;

export const timelines = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "Flexible",
] as const;

export const quoteFormSchema = z.object({
  websiteType: z.string().min(1, "Select a website type"),
  features: z.array(z.string()),
  budgetRange: z.enum(budgetRanges, { message: "Select a budget range" }),
  timeline: z.enum(timelines, { message: "Select a timeline" }),
  projectDetails: z
    .string()
    .trim()
    .min(10, "Tell us a bit more about your project (10+ characters)")
    .max(5000),
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  // Honeypot — real users never fill this in; bots often do.
  website: z.string().max(0, "Spam detected").optional().or(z.literal("")),
  renderedAt: z.number(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const quoteClientSchema = quoteFormSchema.omit({ renderedAt: true });
export type QuoteClientValues = z.infer<typeof quoteClientSchema>;

export const quoteStepFields: Record<number, (keyof QuoteClientValues)[]> = {
  0: ["websiteType"],
  1: ["features"],
  2: ["budgetRange", "timeline", "projectDetails"],
  3: ["name", "email", "phone", "company"],
};
