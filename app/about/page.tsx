import { CtaBanner } from "@/components/cta-banner";
import { PageContainer } from "@/components/page-container";

const points = [
  "Steady Start exists for business owners who want a custom website without getting stuck inside Wix, Shopify, or another monthly website platform.",
  "Instead of sending you into a DIY builder, Steady Start creates a website around your business, your goals, and the online presence you actually need.",
  "The goal is simple: help you get a clean, professional website without platform lock-in, confusing tools, or unnecessary monthly website fees.",
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                About Steady Start
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                A simpler alternative to monthly website platforms.
              </h1>
            </div>

            <div className="space-y-5">
              {points.map((point) => (
                <div
                  key={point}
                  className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-6 shadow-sm"
                >
                  <p className="text-base leading-8 text-[var(--muted)]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      <CtaBanner buttonLabel="Build My Website" />
    </>
  );
}
