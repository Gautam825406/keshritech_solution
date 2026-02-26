"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/providers/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="container-px flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Keshri<span className="text-brand-600">TechSolution</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-600 transition hover:text-brand-600 dark:text-slate-300">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" className="px-3" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
          <Link href="/contact">
            <Button>Get a Quote</Button>
          </Link>
        </div>

        <button
          className="inline-flex rounded-xl p-2 md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="container-px pb-4 md:hidden">
          <div className="glass space-y-2 rounded-2xl p-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-1">
              <Button variant="ghost" className="flex-1" onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </Button>
              <Link href="/contact" className="flex-1" onClick={() => setOpen(false)}>
                <Button className="w-full">Get a Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}