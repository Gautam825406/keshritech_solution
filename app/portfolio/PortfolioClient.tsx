"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Tabs } from "@/components/ui/Tabs";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { portfolioFilters, portfolioItems, type PortfolioCategory, type PortfolioItem } from "@/data/portfolio";

export function PortfolioClient() {
  const [filter, setFilter] = useState<PortfolioCategory>("All");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered = useMemo(() => {
    return filter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section className="section-space">
      <div className="container-px">
        <h1 className="section-title">Portfolio / Previous Work</h1>
        <p className="section-subtitle">Real-looking case studies across web, app, and video production.</p>

        <div className="mt-8">
          <Tabs items={portfolioFilters} current={filter} onChange={setFilter} />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Card key={project.id} className="overflow-hidden p-0">
              <div className="relative">
                <LoadingSkeleton className="absolute inset-0 h-full w-full" />
                <Image
                  src={project.image}
                  alt={`${project.title} case study by Keshri Tech Solution`}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="relative h-44 w-full object-cover"
                />
              </div>
              <div className="space-y-3 p-5">
                <p className="text-xs text-brand-600">{project.category}</p>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{project.tech.join(" • ")}</p>
                <Button variant="secondary" onClick={() => setSelected(project)}>View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Modal open={Boolean(selected)} onClose={() => setSelected(null)} title={selected?.title ?? "Project Details"}>
        {selected ? (
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p><span className="font-semibold text-slate-900 dark:text-white">Client:</span> {selected.caseStudy.client}</p>
            <p><span className="font-semibold text-slate-900 dark:text-white">Challenge:</span> {selected.caseStudy.challenge}</p>
            <p><span className="font-semibold text-slate-900 dark:text-white">Solution:</span> {selected.caseStudy.solution}</p>
            <p><span className="font-semibold text-slate-900 dark:text-white">Impact:</span> {selected.caseStudy.impact}</p>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}