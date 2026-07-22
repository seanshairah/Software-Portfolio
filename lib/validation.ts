import { z } from "zod";

export const projectTypes = [
  "Product strategy & design",
  "Full-stack development",
  "AI & automation",
  "Systems architecture",
  "Product audit",
  "Something else",
] as const;

export const budgetRanges = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $40k",
  "$40k+",
  "Not sure yet",
] as const;

export const timelines = [
  "As soon as possible",
  "1 – 3 months",
  "3 – 6 months",
  "Just exploring",
] as const;

export const contactMethods = ["Email", "Call", "Video call"] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(120, "That name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .email("Please enter a valid email"),
  organisation: z.string().trim().max(160).optional().or(z.literal("")),
  projectType: z.enum(projectTypes).optional().or(z.literal("")),
  budget: z.enum(budgetRanges).optional().or(z.literal("")),
  timeline: z.enum(timelines).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "A little more detail helps — at least 10 characters")
    .max(4000, "That message is very long; please trim it a little"),
  preferredContact: z.enum(contactMethods).optional().or(z.literal("")),
  // Honeypot — real users never see it. Validation stays permissive so a filled
  // value passes here and is silently discarded by the API (the bot sees "sent"
  // and doesn't retry). Kept short to bound payload size.
  website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
