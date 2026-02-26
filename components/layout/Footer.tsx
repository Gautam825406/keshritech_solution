import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-12 dark:border-slate-800/70">
      <div className="container-px grid gap-10 md:grid-cols-4">
        <div>
          <h4 className="text-lg font-semibold">KeshriTechSolution</h4>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Premium digital partner for web, app, and video experiences.
          </p>
        </div>

        <div>
          <h5 className="font-medium">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium">Services</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>Web Development</li>
            <li>App Development</li>
            <li>Video Editing</li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium">Newsletter</h5>
          <div className="mt-3 flex rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900">
            <input
              placeholder="Email address"
              className="w-full bg-transparent px-3 py-2 text-sm outline-none"
            />
            <button className="rounded-lg bg-gradient-primary px-3 py-2 text-xs font-medium text-white">Join</button>
          </div>
          <div className="mt-4 flex gap-2 text-slate-600 dark:text-slate-300">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <p className="container-px mt-10 text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} KeshriTechSolution. All rights reserved.
      </p>
    </footer>
  );
}