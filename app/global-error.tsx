"use client";

import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <section className="section-space min-h-screen">
          <div className="container-px max-w-3xl">
            <div className="card-base space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Critical error</p>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Something broke while rendering</h1>
              <p className="mx-auto max-w-xl text-sm text-slate-600 dark:text-slate-300">
                {error?.message || "Please refresh the page or try again in a moment."}
              </p>
              <div className="pt-2">
                <Button onClick={() => reset()}>Try again</Button>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}