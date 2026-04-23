import type { Metadata } from "next";
import Link from "next/link";

import { PageContainer } from "@/components/page-container";
import { primaryButtonClass } from "@/lib/styles";

const pageTitle =
  "Build a Website Without Monthly Fees | Simple Business Websites";
const pageDescription =
  "Learn how to build a business website without paying monthly platform fees. Steady Start offers a simpler way to get a custom website without subscriptions or lock-in.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.steadystartco.com/website-without-monthly-fees",
    siteName: "Steady Start",
    type: "website",
  },
};

const sections = [
  {
    title: "Why Website Platforms Charge Monthly Fees",
    body: "Platforms like Wix, Shopify, and Squarespace usually charge recurring monthly fees to keep your website live. Once apps, upgrades, and extra features are added, the long-term cost can become much higher than expected.",
  },
  {
    title: "The Problem With Subscription-Based Websites",
    body: "Subscription-based websites often come with ongoing costs, platform lock-in, and limited control. Over time, business owners can feel stuck paying for tools they do not need just to keep their website running.",
  },
  {
    title: "A Simpler Way to Build Your Website",
    body: "Steady Start builds a custom website for your business without platform lock-in or monthly website platform fees. It gives you a simpler path to a site that is built around your business instead of a subscription platform.",
  },
  {
    title: "Who This Is Best For",
    body: "This is a strong fit for small business owners, service providers, and anyone who wants simplicity, ownership, and a website that supports their business without extra monthly platform costs.",
  },
];

export default function WebsiteWithoutMonthlyFeesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              No Monthly Fees
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
              Build a Website Without Monthly Fees
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              If you&apos;re tired of paying monthly subscriptions just to have a
              website, there&apos;s a simpler way.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-8 sm:py-14">
        <PageContainer>
          <div className="grid gap-5 lg:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-8 sm:py-14">
        <PageContainer>
          <div className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-6 shadow-sm sm:p-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                Explore Website Alternatives
              </h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/shopify-alternative"
                className="rounded-2xl border border-[var(--line)] bg-white/80 px-5 py-4 text-sm font-semibold text-[var(--accent-strong)] transition hover:text-[var(--foreground)]"
              >
                Shopify Alternative
              </Link>
              <Link
                href="/wix-alternative"
                className="rounded-2xl border border-[var(--line)] bg-white/80 px-5 py-4 text-sm font-semibold text-[var(--accent-strong)] transition hover:text-[var(--foreground)]"
              >
                Wix Alternative
              </Link>
              <Link
                href="/squarespace-alternative"
                className="rounded-2xl border border-[var(--line)] bg-white/80 px-5 py-4 text-sm font-semibold text-[var(--accent-strong)] transition hover:text-[var(--foreground)]"
              >
                Squarespace Alternative
              </Link>
              <Link
                href="/custom-website-vs-wix"
                className="rounded-2xl border border-[var(--line)] bg-white/80 px-5 py-4 text-sm font-semibold text-[var(--accent-strong)] transition hover:text-[var(--foreground)]"
              >
                Custom Website vs Wix
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="rounded-[2rem] border border-[rgba(45,122,75,0.18)] bg-[linear-gradient(135deg,rgba(18,32,23,0.98),rgba(31,93,56,0.92))] px-6 py-10 text-white shadow-[var(--shadow)] sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                  Build Without Fees
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Build Your Website Without Monthly Fees
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                  Get a custom website built for your business without relying on
                  subscriptions or platform lock-in.
                </p>
              </div>
              <Link
                href="/get-started"
                className={`${primaryButtonClass} force-white-btn text-sm shadow-[var(--shadow)]`}
              >
                Build My Website
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
