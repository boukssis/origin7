import { z } from "zod";
import { serviceOptions } from "./services";

export const projectTypes = [
  "Building & construction",
  "Civil engineering & infrastructure",
  "Asset ownership & operations",
  "Public sector project",
  "Organisation-wide digital transformation",
  "Training & upskilling",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  company: z.string().trim().min(2, "Please enter your company or organisation.").max(160),
  email: z.string().trim().email("Please enter a valid work email address.").max(200),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[+()\d\s-]*$/, "Please use digits, spaces and + ( ) - only.")
    .optional()
    .or(z.literal("")),
  service: z.enum(serviceOptions as [string, ...string[]], { message: "Please choose a service." }),
  projectType: z.enum(projectTypes, { message: "Please choose a project type." }),
  location: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(20, "Please tell us a little more (at least 20 characters).").max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

export type ContactState =
  | { status: "idle" }
  | { status: "invalid"; errors: FieldErrors; values: Partial<ContactInput> }
  | { status: "blocked"; message: string }
  | { status: "not_configured"; mailto: string }
  | { status: "sent" }
  | { status: "error"; message: string };

export function toFieldErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof ContactInput;
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}

export function buildMailto(to: string, d: ContactInput) {
  const body = [
    `Name: ${d.name}`,
    `Company: ${d.company}`,
    `Email: ${d.email}`,
    d.phone ? `Phone: ${d.phone}` : null,
    `Service: ${d.service}`,
    `Project type: ${d.projectType}`,
    d.location ? `Location: ${d.location}` : null,
    "",
    d.message,
  ]
    .filter((l) => l !== null)
    .join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(`Enquiry: ${d.service} — ${d.company}`)}&body=${encodeURIComponent(body)}`;
}
