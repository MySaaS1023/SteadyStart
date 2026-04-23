"use client";

import { FormEvent, useState } from "react";

import { primaryButtonClass } from "@/lib/styles";

const inputClassName =
  "mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3.5 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[rgba(45,122,75,0.35)] focus:ring-4 focus:ring-[rgba(45,122,75,0.08)]";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("[email-capture] email:", email);
    setIsSubmitted(true);
    setEmail("");
  }

  return (
    <div className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-6 shadow-sm sm:p-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl">
          Not Ready Yet?
        </h2>
        <p className="mt-4 text-base leading-8 text-[var(--muted)] sm:text-lg">
          Get a simple guide on building your business website without monthly fees.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start"
      >
        <label className="block flex-1 text-sm font-medium text-[var(--foreground)]">
          <span className="sr-only">Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClassName}
            placeholder="you@example.com"
            required
          />
        </label>
        <button
          type="submit"
          className={`${primaryButtonClass} force-white-btn text-sm shadow-[var(--shadow)]`}
        >
          Get the Guide
        </button>
      </form>

      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
        No spam. Just simple, helpful guidance.
      </p>

      {isSubmitted ? (
        <p className="mt-3 text-sm font-medium text-[var(--accent-strong)]">
          Thanks! We&apos;ll be in touch.
        </p>
      ) : null}
    </div>
  );
}
