import Link from "next/link";

import { PageContainer } from "@/components/page-container";
import { primaryButtonClass } from "@/lib/styles";

const highlights = [
  "Custom-built for your business",
  "No monthly platform lock-in",
  "Simple and affordable",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <PageContainer className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-[rgba(45,122,75,0.18)] bg-white/80 px-4 py-2 text-sm font-medium text-[var(--accent-strong)] shadow-sm">
            A simpler alternative to monthly website platforms
          </span>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Build Your Business Website Without Monthly Platform Fees
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Get a custom website built for your business without relying on Wix,
              Shopify, or complicated tools.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/get-started"
              className={`${primaryButtonClass} force-white-btn text-sm shadow-[var(--shadow)]`}
            >
              Build My Website
            </Link>
            <Link
              href="/pricing"
              className={`${primaryButtonClass} force-white-btn text-sm shadow-[var(--shadow)]`}
            >
              View Pricing
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
                  Steady Start Website Build
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  A clear path from idea to finished business website.
                </p>
              </div>
              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                Custom
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[var(--foreground)] p-5 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                  What you avoid
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/8 p-4">
                    <p className="text-2xl font-semibold">No Lock-In</p>
                    <p className="mt-2 text-sm text-white/75">
                      Built without tying your business to a monthly platform.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/8 p-4">
                    <p className="text-2xl font-semibold">No DIY Setup</p>
                    <p className="mt-2 text-sm text-white/75">
                      Skip the templates, plugins, and confusing builder tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Built for clarity
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    A clean online presence that explains what your business does and
                    helps customers take the next step.
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)] p-5">
                  <p className="text-sm font-semibold text-[var(--accent-strong)]">
                    Website-first setup
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--foreground)]">
                    <li>Custom website build</li>
                    <li>Payment and integration options</li>
                    <li>No unnecessary platform tools</li>
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
