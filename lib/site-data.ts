export type PackageName = "Starter Website" | "Business Website" | "Premium";
export type PackageKey = "starter" | "business" | "premium";

export type PricingPackage = {
  key: PackageKey;
  name: PackageName;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const siteName = "Steady Start";
export const siteTagline =
  "Build your business website without monthly platform fees or platform lock-in.";
export const supportEmail = "support@steadystartco.com";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const pricingPackages: PricingPackage[] = [
  {
    key: "starter",
    name: "Starter Website",
    price: "$120",
    description:
      "A simple website for a business that needs a clean online presence.",
    features: [
      "front end build",
      "payment integration",
      "simple company presence",
      "clean layout",
      "no backend",
    ],
  },
  {
    key: "business",
    name: "Business Website",
    price: "$200",
    description:
      "A more complete website with added flexibility and pages for growing businesses.",
    features: [
      "front end build",
      "payment integration",
      "service or product structure",
      "integrations or booking functionality",
      "no backend",
    ],
    featured: true,
  },
  {
    key: "premium",
    name: "Premium",
    price: "$420",
    description:
      "A full website build with front end, payment, integrations, and backend support.",
    features: [
      "everything in Starter Website",
      "everything in Business Website",
      "backend included",
      "complete setup",
    ],
  },
];

export const valueProps = [
  {
    title: "Custom-built for your business",
    description:
      "Your site is shaped around your business, your offer, and the online presence you need.",
  },
  {
    title: "No monthly platform lock-in",
    description:
      "Skip website platforms that keep you paying every month just to keep your site running.",
  },
  {
    title: "Simple and affordable",
    description:
      "Get a clear path to a finished website without confusing tools or unnecessary subscriptions.",
  },
];

export const processSteps = [
  {
    title: "Choose your website package",
    description: "Pick the option that fits your business.",
  },
  {
    title: "We build your website",
    description: "Your site is created for your business and goals.",
  },
  {
    title: "Launch with confidence",
    description: "Go live with a clean, professional online presence.",
  },
];
