import { PAYMENT_LINKS } from "@/lib/payment-links";
import { PricingPackage } from "@/lib/site-data";
import { primaryButtonClass } from "@/lib/styles";

type PricingCardProps = {
  tier: PricingPackage;
};

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-[2rem] border p-7 shadow-sm transition ${
        tier.featured
          ? "border-[rgba(45,122,75,0.28)] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(228,241,232,0.75))] shadow-[var(--shadow)]"
          : "border-[var(--line)] bg-white/90"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
            {tier.name}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{tier.description}</p>
        </div>
        {tier.featured ? (
          <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Most Popular
          </span>
        ) : null}
      </div>

      <div className="mt-8">
        <p className="text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
          {tier.price}
        </p>
      </div>

      <ul className="mt-8 flex-1 space-y-3 text-sm leading-6 text-[var(--foreground)]">
        {tier.features.map((feature) => (
          <li key={feature} className="rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-3">
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={PAYMENT_LINKS[tier.key]}
        className={`${primaryButtonClass} force-white-btn mt-8 text-sm shadow-[var(--shadow)]`}
        aria-label={`Pay for ${tier.name} with Stripe`}
      >
        Build My Website
      </a>
    </div>
  );
}
