import { PageContainer } from "@/components/page-container";
import { PricingCard } from "@/components/pricing-card";
import { pricingPackages } from "@/lib/site-data";

export default function PricingPage() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
            Pricing
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
            Simple Pricing - No Monthly Platform Fees
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Stop paying subscriptions just to have a website. Pay once and get your
            site built.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <PricingCard key={pkg.key} tier={pkg} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm leading-6 text-[var(--muted)]">
          No platform lock-in. No unnecessary tools. No monthly website platform fees.
        </p>
      </PageContainer>
    </section>
  );
}
