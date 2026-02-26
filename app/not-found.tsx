import Link from "next/link";
import { Card } from "@/components/ui/Card";

const quickLinks = [
  { href: "/", label: "Go to Home" },
  { href: "/services", label: "Explore Services" },
  { href: "/portfolio", label: "View Portfolio" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-px max-w-3xl">
        <Card className="space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">404</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
          <p className="mx-auto max-w-xl text-sm text-slate-600 dark:text-slate-300">
            The page you are looking for may have moved or no longer exists. Use the links below to continue browsing.
          </p>
          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium hover:border-brand-500 dark:border-slate-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}