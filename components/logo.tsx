import Link from "next/link";

import { siteName, siteTagline } from "@/lib/site-data";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-lg font-semibold text-[var(--accent-strong)] shadow-[var(--shadow)]">
        SS
      </span>
      <span className="flex flex-col">
        <span className="text-base font-semibold tracking-[0.02em] text-[var(--foreground)]">
          {siteName}
        </span>
        {!compact ? (
          <span className="max-w-xs text-sm leading-5 text-[var(--muted)]">
            {siteTagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
