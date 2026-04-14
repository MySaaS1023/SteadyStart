import Link from "next/link";

import { Logo } from "@/components/logo";
import { PageContainer } from "@/components/page-container";
import { navLinks, siteTagline, supportEmail } from "@/lib/site-data";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-white/70">
      <PageContainer className="grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Navigate
          </h3>
          <div className="mt-4 space-y-3 text-sm text-[var(--foreground)]">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="transition hover:text-[var(--accent)]">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Legal & Support
          </h3>
          <div className="mt-4 space-y-3 text-sm text-[var(--foreground)]">
            {legalLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="transition hover:text-[var(--accent)]">
                  {link.label}
                </Link>
              </div>
            ))}
            <a href={`mailto:${supportEmail}`} className="transition hover:text-[var(--accent)]">
              {supportEmail}
            </a>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
