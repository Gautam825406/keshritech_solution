import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="section-space">
      <div className="container-px">
        <div className="rounded-3xl bg-gradient-primary px-6 py-10 text-white sm:px-10 sm:py-12">
          <p className="text-sm text-white/80">Ready to grow?</p>
          <h2 className="mt-2 text-3xl font-semibold">Let’s build your next digital success story.</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90 sm:text-base">
            Book a quick discovery call and get a practical action plan for your website, app, or content pipeline.
          </p>
          <div className="mt-6">
            <Link href="/contact"><Button className="bg-white text-slate-900 hover:bg-slate-100">Get a Quote</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}