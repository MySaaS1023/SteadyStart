import Link from "next/link";

import { PageContainer } from "@/components/page-container";
import { primaryButtonClass } from "@/lib/styles";

export default function CancelPage() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-[var(--line)] bg-white/90 p-8 text-center shadow-[var(--shadow)] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
            Cancelled
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            Your request was cancelled
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            Your payment was not completed. You can return and choose a package whenever
            you&apos;re ready.
          </p>
          <Link
            href="/get-started"
            className={`${primaryButtonClass} force-white-btn mt-8 text-sm shadow-[var(--shadow)]`}
          >
            Back to Get Started
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
