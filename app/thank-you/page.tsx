"use client";

import { useEffect } from "react";

import { PageContainer } from "@/components/page-container";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18126099012/pzcZCLbWm6QcEMSkmcND",
        value: 1.0,
        currency: "USD",
      });
    }
  }, []);

  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-[var(--line)] bg-white/90 p-8 text-center shadow-[var(--shadow)] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
            Thank You
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            Thank you! We received your request.
          </h1>
        </div>
      </PageContainer>
    </section>
  );
}
