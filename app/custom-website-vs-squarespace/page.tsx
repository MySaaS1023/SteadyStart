import type { Metadata } from "next";
import Link from "next/link";

import { PageContainer } from "@/components/page-container";
import { primaryButtonClass } from "@/lib/styles";

const pageTitle =
  "Custom Website vs Squarespace | Which Is Better for Your Business?";
const pageDescription =
  "Comparing Squarespace vs a custom website? See why business owners move away from templates and choose custom-built websites.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.steadystartco.com/custom-website-vs-squarespace",
    siteName: "Steady Start",
    type: "website",
  },
};

const sections = [
  {
    title: "Squarespace vs Custom Websites: What’s the Difference",
    body: "Squarespace is a template-driven platform with built-in tools and recurring monthly fees. A custom website is built around your business, giving you more flexibility, more ownership, and a website that supports your goals instead of fitting inside a template system.",
  },
  {
    title: "When Squarespace Makes Sense",
    body: "Squarespace can make sense when you need a polished quick start, simple pages, and a template-based way to get online. For very straightforward needs, it can be an easy starting point.",
  },
  {
    title: "When a Custom Website Is the Better Choice",
    body: "A custom website is often the better choice when branding matters, flexibility matters, and you want more long-term control. If your website needs to reflect the business clearly and professionally, custom can offer a stronger fit.",
  },
  {
    title: "Why Business Owners Outgrow Squarespace",
    body: "Many business owners outgrow Squarespace when they want more control, fewer template limitations, and a website that better matches their goals. A custom website can give them that without platform lock-in.",
  },
];

export default function CustomWebsiteVsSquarespacePage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              Custom Website vs Squarespace
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
              Custom Website vs Squarespace for Your Business
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              If you&apos;re deciding between Squarespace and a custom-built website,
              here&apos;s what you should know.
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
                  Build Without Squarespace
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Build Your Website Without Squarespace
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
