import type { Metadata } from "next";
import Link from "next/link";

import { PageContainer } from "@/components/page-container";
import { primaryButtonClass } from "@/lib/styles";

const pageTitle =
  "Wix Alternative | Build a Business Website Without Monthly Fees";
const pageDescription =
  "Looking for a Wix alternative? Steady Start helps business owners get a custom website built without monthly platform fees, lock-in, or unnecessary complexity.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.steadystartco.com/wix-alternative",
    siteName: "Steady Start",
    type: "website",
  },
};

const sections = [
  {
    title: "Why Wix Can Be Limiting",
    body: "Wix can work for simple starts, but it can also feel restrictive, template-based, and limited as a business grows. Many business owners eventually want a website that feels more custom and less tied to a preset platform structure.",
  },
  {
    title: "Why Business Owners Want More Flexibility",
    body: "Business owners often want custom design, ownership, and more control over how their website supports their business. They do not always want to depend on a platform for every update, feature, or design decision.",
  },
  {
    title: "A Simpler Alternative to Wix",
    body: "Steady Start builds a custom website for your business without platform lock-in or monthly fees. It gives you a simpler path to a professional website built around your goals instead of a DIY platform template.",
  },
];

export default function WixAlternativePage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              Wix Alternative
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
              Wix Alternative for Business Websites
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              If you want a business website without paying for a monthly platform,
              Steady Start gives you a simpler alternative to Wix.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-8 sm:py-14">
        <PageContainer>
          <div className="grid gap-5 lg:grid-cols-3">
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

      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="rounded-[2rem] border border-[rgba(45,122,75,0.18)] bg-[linear-gradient(135deg,rgba(18,32,23,0.98),rgba(31,93,56,0.92))] px-6 py-10 text-white shadow-[var(--shadow)] sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                  Build Without Wix
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Build Your Website Without Wix
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                  Get a custom website built for your business without relying on
                  monthly platform subscriptions.
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
