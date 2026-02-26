"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { question: string; answer: string };

export function Accordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="glass rounded-2xl p-4">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-medium">{item.question}</span>
              <ChevronDown className={cn("h-4 w-4 transition", isOpen && "rotate-180")} />
            </button>
            {isOpen ? <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}