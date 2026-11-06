"use server";

import { headers } from "next/headers";
import { buildMailto, contactSchema, toFieldErrors, type ContactInput, type ContactState } from "@/lib/contact";
import { site } from "@/lib/site";

const MIN_FILL_MS = 3000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Delivery stays disabled until an authorised destination is configured (see README). */
async function deliver(d: ContactInput) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) throw new Error("Contact delivery is enabled but not fully configured.");
  const rows = Object.entries(d)
    .filter(([, v]) => v)
    .map(([k, v]) => `<p><strong>${escapeHtml(k)}</strong><br>${escapeHtml(String(v)).replace(/\n/g, "<br>")}</p>`)
    .join("");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: d.email, subject: `Website enquiry: ${d.service} — ${d.company}`, html: rows }),
  });
  if (!res.ok) throw new Error(`Email provider responded ${res.status}`);
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  if (String(formData.get("website") ?? "").length > 0) return { status: "blocked", message: "Your message could not be processed." };
  const started = Number(formData.get("startedAt"));
  if (!Number.isFinite(started) || Date.now() - started < MIN_FILL_MS)
    return { status: "blocked", message: "That was quick! Please review your details and try again." };

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) return { status: "blocked", message: "Too many attempts. Please wait a few minutes or email us directly." };

  const raw = Object.fromEntries(
    ["name", "company", "email", "phone", "service", "projectType", "location", "message"].map((k) => [k, String(formData.get(k) ?? "")]),
  );
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) return { status: "invalid", errors: toFieldErrors(parsed.error), values: raw as Partial<ContactInput> };

  if (process.env.CONTACT_DELIVERY_ENABLED !== "true") {
    return { status: "not_configured", mailto: buildMailto(site.email, parsed.data) };
  }

  try {
    await deliver(parsed.data);
    return { status: "sent" };
  } catch (e) {
    console.error("[contact] delivery failed", e);
    return { status: "error", message: `We couldn't send your message just now. Please email ${site.email} directly.` };
  }
}
