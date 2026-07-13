import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (10+ characters)").max(5000),
  // Honeypot — real users never fill this in; bots often do.
  website: z.string().max(0, "Spam detected").optional().or(z.literal("")),
  // Timestamp (ms) of when the form was rendered, used for a minimum-time-to-submit check.
  renderedAt: z.number(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// What the client form actually renders — `renderedAt` is supplied
// separately at submit time rather than bound to a form field.
export const contactClientSchema = contactFormSchema.omit({ renderedAt: true });
export type ContactClientValues = z.infer<typeof contactClientSchema>;
