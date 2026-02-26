import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";

export function PortfolioPreview() {
  return (
    <section className="section-space">
      <div className="container-px">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Previous Work</h2>
            <p className="section-subtitle">A sample of real-looking projects across web, app, and video production.</p>
          </div>
          <Link href="/portfolio" className="text-sm font-medium text-brand-600">View all projects →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.slice(0, 6).map((project) => (
            <Card key={project.id} className="overflow-hidden p-0">
              <Image
                src={project.image}
                alt={`${project.title} project by Keshri Tech Solution`}
                width={640}
                height={360}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs text-brand-600">{project.category}</p>
                <h3 className="mt-1 font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}