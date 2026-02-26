import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="section-space">
      <div className="container-px grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="inline-flex rounded-full border border-brand-500/30 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-100">
            Hazaribagh, Jharkhand • Serving All India
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Tech Support, Video Editing, Cinematic Shoot & Digital Marketing by Keshri Tech Solution.
          </h1>
          <p className="mt-5 max-w-xl text-slate-600 dark:text-slate-300">
            We help businesses in Hazaribagh and across India with reliable tech support, high-impact content production, and growth-focused digital marketing.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact"><Button>Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/portfolio"><Button variant="secondary"><PlayCircle className="mr-2 h-4 w-4" /> See Our Work</Button></Link>
          </div>
        </div>
        <div className="gradient-border rounded-3xl">
          <div className="glass animate-float rounded-3xl p-6">
            <div className="rounded-2xl bg-gradient-primary p-8 text-white">
              <p className="text-sm uppercase tracking-wider text-white/80">Trusted by startups and growing brands</p>
              <h3 className="mt-3 text-2xl font-semibold">From idea to launch, end-to-end execution.</h3>
              <ul className="mt-5 space-y-2 text-sm text-white/90">
                <li>• Tech support for home and office systems</li>
                <li>• Video editing and cinematic shoots</li>
                <li>• Digital marketing and SEO services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}