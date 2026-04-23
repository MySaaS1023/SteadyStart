import { processSteps } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section className="rounded-[2rem] border border-[var(--line)] bg-white/80 p-6 shadow-sm sm:p-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
          How It Works
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl">
          How It Works
        </h2>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {processSteps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(246,248,243,0.95))] p-6"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent-strong)]">
              0{index + 1}
            </span>
            <p className="mt-5 text-lg font-semibold text-[var(--foreground)]">
              {step.title}
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
