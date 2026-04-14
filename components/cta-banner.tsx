import Link from "next/link";

import { PageContainer } from "@/components/page-container";
import { primaryButtonClass } from "@/lib/styles";

type CtaBannerProps = {
  title?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CtaBanner({
  title = "Ready to launch your website without building it yourself?",
  buttonLabel = "Start Your Project",
  buttonHref = "/get-started",
}: CtaBannerProps) {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <div className="rounded-[2rem] border border-[rgba(45,122,75,0.18)] bg-[linear-gradient(135deg,rgba(18,32,23,0.98),rgba(31,93,56,0.92))] px-6 py-10 text-white shadow-[var(--shadow)] sm:px-10 sm:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                Start Strong
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                {title}
              </h2>
            </div>
            <Link
              href={buttonHref}
              className={`${primaryButtonClass} force-white-btn text-sm shadow-[var(--shadow)]`}
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
