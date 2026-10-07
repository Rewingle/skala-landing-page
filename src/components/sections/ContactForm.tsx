"use client";

import { ArrowRight, Check, ChevronDown, LoaderCircle } from "lucide-react";
import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions";
import { buttonClasses } from "@/components/ui/Button";
import { budgets, projectTypes } from "@/content/options";
import { cn } from "@/lib/cn";

const initialState: InquiryState = { status: "idle" };

const labelClass = "block text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted";
const controlClass =
  "mt-2 w-full border-b bg-transparent py-2.5 text-[0.95rem] text-espresso transition-colors placeholder:text-muted/60 focus-visible:outline-none";

function controlState(error?: string) {
  return error ? "border-terracotta" : "border-stone focus:border-espresso";
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-1.5 text-xs text-terracotta">
      {error}
    </p>
  );
}

function SelectField({
  name,
  label,
  options,
  placeholder,
  required,
  error,
  defaultValue,
}: {
  name: string;
  label: string;
  options: readonly string[];
  placeholder: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        {/* React applies a select's defaultValue only on mount, and resets the form after
            each action — remount on a new default so a failed submission keeps the choice. */}
        <select
          key={defaultValue ?? ""}
          id={id}
          name={name}
          required={required}
          defaultValue={defaultValue ?? ""}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(controlClass, controlState(error), "appearance-none pr-8")}
        >
          <option value="" disabled={required}>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden
          className="pointer-events-none absolute right-1 top-1/2 size-4 -translate-y-1/2 text-muted"
          strokeWidth={1.5}
        />
      </div>
      <ErrorText id={`${id}-error`} error={error} />
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="bg-ivory p-8 text-center sm:p-10">
        <span className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-sand">
          <Check aria-hidden className="size-5 text-terracotta" strokeWidth={1.75} />
        </span>
        <h3 className="mt-6 font-serif text-3xl">Message received</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="bg-ivory p-6 sm:p-8 md:p-10">
      <h3 className="font-serif text-[2rem] leading-tight">Tell us about your space</h3>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={values.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(controlClass, controlState(errors.name))}
          />
          <ErrorText id="contact-name-error" error={errors.name} />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={values.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={cn(controlClass, controlState(errors.email))}
          />
          <ErrorText id="contact-email-error" error={errors.email} />
        </div>

        <SelectField
          name="projectType"
          label="Project type"
          options={projectTypes}
          placeholder="Select…"
          required
          error={errors.projectType}
          defaultValue={values.projectType}
        />

        <SelectField
          name="budget"
          label="Budget (optional)"
          options={budgets}
          placeholder="Select…"
          error={errors.budget}
          defaultValue={values.budget}
        />

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClass}>
            About your project
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            defaultValue={values.message}
            placeholder="Rooms, timings, what you’d love to change…"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={cn(controlClass, controlState(errors.message), "resize-none")}
          />
          <ErrorText id="contact-message-error" error={errors.message} />
        </div>
      </div>

      {state.status === "error" && (
        <p role="alert" className="mt-6 text-sm text-terracotta">
          {state.message}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={pending} className={buttonClasses("dark")}>
          {pending ? (
            <>
              <LoaderCircle aria-hidden className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Enquiry
              <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
            </>
          )}
        </button>
        <p className="text-xs text-muted">We only use your details to reply.</p>
      </div>
    </form>
  );
}
