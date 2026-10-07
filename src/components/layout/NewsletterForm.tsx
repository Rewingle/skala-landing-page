"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import { useActionState } from "react";
import { subscribe, type SubscribeState } from "@/app/actions";
import { cn } from "@/lib/cn";

const initialState: SubscribeState = { status: "idle" };

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  return (
    <form action={formAction} noValidate className="mt-5">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center gap-3 border-b border-ivory/30 transition-colors focus-within:border-ivory">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          aria-invalid={state.status === "error" || undefined}
          aria-describedby="newsletter-status"
          className="w-full bg-transparent py-3 text-sm text-ivory placeholder:text-ivory/45 focus-visible:outline-none"
        />
        <button
          type="submit"
          disabled={pending}
          aria-label="Subscribe"
          className="mb-1.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-ivory text-ink transition-colors hover:bg-clay disabled:opacity-60"
        >
          {pending ? (
            <LoaderCircle className="size-4 animate-spin" />
          ) : (
            <ArrowRight className="size-4" strokeWidth={1.75} />
          )}
        </button>
      </div>
      <p
        id="newsletter-status"
        aria-live="polite"
        className={cn("mt-3 min-h-4 text-xs", state.status === "error" ? "text-clay" : "text-ivory/70")}
      >
        {state.message}
      </p>
    </form>
  );
}
