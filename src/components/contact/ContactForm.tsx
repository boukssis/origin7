"use client";

import { useActionState, useEffect, useRef, useState, startTransition, type FormEvent } from "react";
import { AlertCircle, ArrowRight, Loader2, Mail, ShieldCheck } from "lucide-react";
import { submitContact } from "@/app/contact/actions";
import { contactSchema, projectTypes, toFieldErrors, type ContactState, type FieldErrors } from "@/lib/contact";
import { serviceOptions } from "@/lib/services";
import { site } from "@/lib/site";

const initial: ContactState = { status: "idle" };

const inputCls =
  "peer block w-full rounded-none border-0 border-b border-ink/20 bg-transparent px-0 pt-2 pb-3 text-base text-ink placeholder:text-ink/35 transition-colors focus:border-magenta focus:ring-0 focus:outline-none aria-[invalid=true]:border-red-600";

function Field({ id, label, error, optional, children }: { id: string; label: string; error?: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div className="group">
      <label htmlFor={id} className="eyebrow flex items-center justify-between text-muted group-focus-within:text-magenta">
        {label}
        {optional && <span className="tracking-normal normal-case text-ink/40">Optional</span>}
      </label>
      {children}
      <p id={`${id}-error`} className="mt-2 min-h-5 text-sm text-red-700" aria-live="polite">
        {error}
      </p>
    </div>
  );
}

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [state, formAction, pending] = useActionState(submitContact, initial);
  const [clientErrors, setClientErrors] = useState<FieldErrors>({});
  const startedAt = useRef(0);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (state.status !== "idle" && state.status !== "invalid") statusRef.current?.focus();
  }, [state]);

  const errors: FieldErrors = { ...(state.status === "invalid" ? state.errors : {}), ...clientErrors };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs = toFieldErrors(parsed.error);
      setClientErrors(errs);
      const first = Object.keys(errs)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setClientErrors({});
    fd.set("startedAt", String(startedAt.current || Date.now()));
    startTransition(() => formAction(fd));
  }

  const a = (k: keyof FieldErrors) => ({
    id: `f-${k}`,
    name: k,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": `f-${k}-error`,
    onChange: () => errors[k] && setClientErrors((prev) => ({ ...prev, [k]: undefined })),
  });

  return (
    <form onSubmit={onSubmit} noValidate className="relative" aria-describedby="form-note">
      <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
        <Field id="f-name" label="Full name" error={errors.name}>
          <input {...a("name")} autoComplete="name" required className={inputCls} placeholder="Your name" />
        </Field>
        <Field id="f-company" label="Company" error={errors.company}>
          <input {...a("company")} autoComplete="organization" required className={inputCls} placeholder="Organisation" />
        </Field>
        <Field id="f-email" label="Work email" error={errors.email}>
          <input {...a("email")} type="email" autoComplete="email" required className={inputCls} placeholder="name@company.com" />
        </Field>
        <Field id="f-phone" label="Phone" optional error={errors.phone}>
          <input {...a("phone")} type="tel" autoComplete="tel" className={inputCls} placeholder="+44" />
        </Field>
        <Field id="f-service" label="Service required" error={errors.service}>
          <select {...a("service")} required defaultValue={defaultService && serviceOptions.includes(defaultService) ? defaultService : ""} className={`${inputCls} cursor-pointer`}>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field id="f-projectType" label="Project type" error={errors.projectType}>
          <select {...a("projectType")} required defaultValue="" className={`${inputCls} cursor-pointer`}>
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field id="f-location" label="Project location" optional error={errors.location}>
            <input {...a("location")} className={inputCls} placeholder="e.g. Belfast, Dublin, Co. Tyrone" />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="f-message" label="Message" error={errors.message}>
            <textarea {...a("message")} required rows={5} className={`${inputCls} resize-y`} placeholder="Tell us about your information management or digital construction challenge." />
          </Field>
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="flex max-w-sm items-start gap-2 text-xs leading-relaxed text-muted">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-violet" aria-hidden />
          Concept preview: this form validates your details but does not transmit or store them.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-magenta px-8 py-3.5 font-mono text-[0.75rem] font-medium tracking-[0.12em] text-white uppercase transition-colors hover:bg-magenta-deep disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
          {pending ? "Checking…" : "Send enquiry"}
          {!pending && <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />}
        </button>
      </div>

      <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className="mt-8 outline-none">
        {state.status === "not_configured" && (
          <div className="rounded-[var(--radius-md)] border border-violet/20 bg-tint-violet p-6">
            <p className="font-display text-lg font-semibold">Your enquiry has not been sent.</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              Online delivery isn&apos;t enabled on this preview, so nothing has been transmitted. Your details passed validation — you can send
              them straight from your own email app instead.
            </p>
            <a href={state.mailto} className="mt-5 inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-6 font-mono text-[0.72rem] tracking-[0.12em] text-white uppercase hover:bg-magenta">
              <Mail className="size-4" aria-hidden /> Open in email
            </a>
          </div>
        )}
        {state.status === "sent" && (
          <div className="rounded-[var(--radius-md)] border border-emerald-600/30 bg-emerald-50 p-6">
            <p className="font-display text-lg font-semibold">Thank you — your enquiry has been sent.</p>
            <p className="mt-2 text-sm text-ink/75">We&apos;ll be in touch soon.</p>
          </div>
        )}
        {(state.status === "blocked" || state.status === "error") && (
          <div className="flex gap-3 rounded-[var(--radius-md)] border border-red-600/30 bg-red-50 p-5 text-sm text-red-900">
            <AlertCircle className="size-5 shrink-0" aria-hidden />
            <p>
              {state.message}{" "}
              <a href={`mailto:${site.email}`} className="font-medium underline">{site.email}</a>
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
