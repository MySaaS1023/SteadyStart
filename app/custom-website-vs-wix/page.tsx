import type { Metadata } from "next";
import Link from "next/link";

import { PageContainer } from "@/components/page-container";
import { primaryButtonClass } from "@/lib/styles";

const pageTitle = "Custom Website vs Wix | Which Is Better for Your Business?";
const pageDescription =
  "Trying to decide between a custom website and Wix? Learn the differences and see why business owners choose custom-built websites without monthly platform fees.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.steadystartco.com/custom-website-vs-wix",
    siteName: "Steady Start",
    type: "website",
  },
};

const sections = [
  {
    title: "Wix vs Custom Websites: What’s the Difference?",
    body: "Wix is a DIY builder that uses templates, platform tools, and recurring monthly fees. A custom website is built around the business, giving you more flexibility, more ownership, and a site that is shaped around your goals instead of a preset builder.",
  },
  {
    title: "When Wix Makes Sense",
    body: "Wix can make sense when you need a quick start, have very simple needs, or are working on a small project where a template is enough. For some early ideas, a builder can be a fast way to get something online.",
  },
  {
    title: "When a Custom Website Is the Better Choice",
    body: "A custom website is often the better choice for a growing business that needs flexibility, stronger branding, and long-term control. If your website needs to support your business clearly and professionally, custom can give you more room to grow.",
  },
  {
    title: "Why Business Owners Choose Custom Over Wix",
    body: "Business owners choose custom websites to avoid platform lock-in, skip monthly platform fees, and get a website built for their goals. Steady Start helps make that path simpler by building the site for you.",
  },
];

export default function CustomWebsiteVsWixPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              Custom Website vs Wix
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
              Custom Website vs Wix for Your Business
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              If you&apos;re deciding between Wix and a custom-built website, here&apos;s
              what you need to know before choosing a platform.
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
                Explore More Website Alternatives
              </h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
                  Build Custom
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Build a Website That Works for Your Business
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                  Skip the limitations and get a custom website built for your business
                  without relying on a monthly platform.
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
