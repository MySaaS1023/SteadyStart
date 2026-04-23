import type { Metadata } from "next";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { EmailCapture } from "@/components/email-capture";
import { Hero } from "@/components/hero";
import { PageContainer } from "@/components/page-container";
import { PricingCard } from "@/components/pricing-card";
import { ProcessSection } from "@/components/process-section";
import { pricingPackages, valueProps } from "@/lib/site-data";

const homeTitle = "Steady Start | Custom Business Websites Without Monthly Fees";
const homeDescription =
  "Steady Start helps business owners create custom websites without relying on Wix, Shopify, or other monthly website platforms.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "https://www.steadystartco.com",
    siteName: "Steady Start",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-8 sm:py-14">
        <PageContainer>
          <div className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                The Problem
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl">
                Why Building a Website Feels So Complicated
              </h2>
              <div className="mt-6 space-y-2 text-xl font-semibold leading-8 text-[var(--foreground)] sm:text-2xl">
                <p>Too many platforms.</p>
                <p>Too many subscriptions.</p>
                <p>Too many tools you don&apos;t actually need.</p>
              </div>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                Steady Start gives you a simpler way to build your business website
                without getting stuck in monthly tools.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-8 sm:py-14">
        <PageContainer>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                The Solution
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl">
                A Simpler Way to Build Your Website
              </h2>
            </div>
            <div className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-6 shadow-sm sm:p-8">
              <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
                Steady Start helps business owners get a custom website built for their
                business without platform lock-in, confusing setup, or monthly website
                fees.
              </p>
              <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
                It is an alternative to Wix and an alternative to Shopify for business
                owners who want a clear path to a finished site that is built for them.
              </p>
              <Link
                href="/shopify-alternative"
                className="mt-6 inline-flex text-sm font-semibold text-[var(--accent-strong)] transition hover:text-[var(--foreground)]"
              >
                Looking for a Shopify alternative?
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-8 sm:py-14">
        <PageContainer>
          <div className="grid gap-5 md:grid-cols-3">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-6 shadow-sm"
              >
                <p className="text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-8 sm:py-14">
        <PageContainer>
          <ProcessSection />
        </PageContainer>
      </section>

      <section className="py-8 sm:py-14">
        <PageContainer>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                Pricing Preview
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl">
                Simple Pricing — No Monthly Platform Fees
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              Stop paying subscriptions just to have a website. Pay once and get your
              site built.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {pricingPackages.map((pkg) => (
              <PricingCard key={pkg.key} tier={pkg} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm leading-6 text-[var(--muted)]">
            No platform lock-in. No unnecessary tools. No monthly website platform fees.
          </p>
        </PageContainer>
      </section>

      <section className="py-8 sm:py-14">
        <PageContainer>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              Resources
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl">
              Explore Simpler Website Alternatives
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)] sm:text-lg">
              Looking for a simpler alternative to monthly website platforms? Explore
              these guides to compare your options and find the right path for your
              business.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            <Link
              href="/shopify-alternative"
              className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-6 shadow-sm transition hover:border-[rgba(45,122,75,0.24)]"
            >
              <p className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                Shopify Alternative
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                See why business owners look for a simpler alternative to Shopify.
              </p>
            </Link>

            <Link
              href="/wix-alternative"
              className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-6 shadow-sm transition hover:border-[rgba(45,122,75,0.24)]"
            >
              <p className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                Wix Alternative
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Learn why many businesses outgrow Wix and want more flexibility.
              </p>
            </Link>

            <Link
              href="/squarespace-alternative"
              className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-6 shadow-sm transition hover:border-[rgba(45,122,75,0.24)]"
            >
              <p className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                Squarespace Alternative
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Compare a custom website approach to the limits of Squarespace.
              </p>
            </Link>

            <Link
              href="/custom-website-vs-wix"
              className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-6 shadow-sm transition hover:border-[rgba(45,122,75,0.24)]"
            >
              <p className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                Custom Website vs Wix
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Understand the difference between a custom website and a DIY platform.
              </p>
            </Link>

            <Link
              href="/website-without-monthly-fees"
              className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-6 shadow-sm transition hover:border-[rgba(45,122,75,0.24)]"
            >
              <p className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                Website Without Monthly Fees
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Learn how to build your business website without recurring platform
                costs.
              </p>
            </Link>
          </div>
        </PageContainer>
      </section>

      <section className="py-8 sm:py-14">
        <PageContainer>
          <EmailCapture />
        </PageContainer>
      </section>

      <CtaBanner />
    </>
  );
}
