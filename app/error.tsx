"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section-space">
      <div className="container-px max-w-3xl">
        <div className="card-base space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Something went wrong</p>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Unexpected application error</h1>
          <p className="mx-auto max-w-xl text-sm text-slate-600 dark:text-slate-300">
            {error?.message || "Please try again. If the issue continues, contact support."}
          </p>
          <div className="pt-2">
            <Button onClick={() => reset()}>Try again</Button>
          </div>
        </div>
      </div>
    </section>
  );
}