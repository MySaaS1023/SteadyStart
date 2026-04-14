import Link from "next/link";

import { PageContainer } from "@/components/page-container";
import { primaryButtonClass } from "@/lib/styles";

const highlights = [
  "Custom structure and design",
  "Payment-ready setup",
  "Built around your business goals",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <PageContainer className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-[rgba(45,122,75,0.18)] bg-white/80 px-4 py-2 text-sm font-medium text-[var(--accent-strong)] shadow-sm">
            Done-for-you websites for serious small businesses
          </span>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Get a custom website built for your business.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Steady Start helps business owners launch online with professionally built
              websites, payment setup, and the right functionality — without figuring it
              all out alone.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className={`${primaryButtonClass} force-white-btn text-sm shadow-[var(--shadow)]`}
            >
              View Pricing
            </Link>
            <Link
              href="/get-started"
              className={`${primaryButtonClass} force-white-btn text-sm shadow-[var(--shadow)]`}
            >
              Get Started
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--line)] bg-white/85 px-4 py-4 text-sm font-medium text-[var(--foreground)] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-[2rem] bg-[rgba(45,122,75,0.14)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,248,243,0.94))] p-6 shadow-[var(--shadow)]">
            <div className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-white px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Steady Start Launch Plan
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  A clear path from brief to polished website.
                </p>
              </div>
              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                Premium
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[var(--foreground)] p-5 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                  What clients get
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/8 p-4">
                    <p className="text-2xl font-semibold">3 Packages</p>
                    <p className="mt-2 text-sm text-white/75">Clear starting points for every business stage.</p>
                  </div>
                  <div className="rounded-2xl bg-white/8 p-4">
                    <p className="text-2xl font-semibold">1 Intake Flow</p>
                    <p className="mt-2 text-sm text-white/75">A simple project handoff without messy back-and-forth.</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Built for trust
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Clean layouts, strong messaging, and the right structure for your
                    offers.
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)] p-5">
                  <p className="text-sm font-semibold text-[var(--accent-strong)]">
                    Launch-ready details
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--foreground)]">
                    <li>Payment setup</li>
                    <li>Booking and integration planning</li>
                    <li>Business-first structure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
