import type { Metadata } from "next";
import Link from "next/link";

import { PageContainer } from "@/components/page-container";
import { primaryButtonClass } from "@/lib/styles";

const pageTitle =
  "Custom Website vs Shopify | Which Is Better for Your Business?";
const pageDescription =
  "Trying to decide between Shopify and a custom website? Learn the key differences and why many business owners choose a custom-built website without monthly fees.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.steadystartco.com/custom-website-vs-shopify",
    siteName: "Steady Start",
    type: "website",
  },
};

const sections = [
  {
    title: "Shopify vs Custom Websites: What’s the Difference",
    body: "Shopify is a platform built around ecommerce tools, templates, apps, and recurring monthly fees. A custom website is built around the business itself, giving you more flexibility, more ownership, and a site shaped around your goals instead of a platform structure.",
  },
  {
    title: "When Shopify Makes Sense",
    body: "Shopify can make sense when you want a quick ecommerce setup, standard store features, and a platform that handles many store basics in one place. For some businesses, that can be a useful starting point.",
  },
  {
    title: "When a Custom Website Is the Better Choice",
    body: "A custom website is often the better choice when your business needs more flexibility, stronger branding, and more control over how the site works. If your website needs to fit your business instead of the other way around, custom can be the stronger long-term move.",
  },
  {
    title: "Why Business Owners Move Away From Shopify",
    body: "Many business owners move away from Shopify because of monthly platform fees, added app costs, and platform lock-in. A custom website can offer a simpler path with more control and fewer recurring platform costs.",
  },
];

export default function CustomWebsiteVsShopifyPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              Custom Website vs Shopify
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
              Custom Website vs Shopify for Your Business
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              If you&apos;re comparing Shopify to a custom-built website, here&apos;s
              what you need to know.
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
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
              <Link
                href="/website-without-monthly-fees"
                className="rounded-2xl border border-[var(--line)] bg-white/80 px-5 py-4 text-sm font-semibold text-[var(--accent-strong)] transition hover:text-[var(--foreground)]"
              >
                Website Without Monthly Fees
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
                  Build Without Shopify
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Build Your Website Without Shopify
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                  Get a custom website built for your business without relying on a
                  monthly platform.
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
