import type { Metadata } from "next";
import { ReactNode } from "react";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteName, siteTagline } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Done-for-you website builds`,
    template: `%s | ${siteName}`,
  },
  description: siteTagline,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="text-[var(--foreground)] antialiased">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
