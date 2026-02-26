"use client";

import { cn } from "@/lib/utils";

type TabsProps<T extends string> = {
  items: readonly T[];
  current: T;
  onChange: (value: T) => void;
};

export function Tabs<T extends string>({ items, current, onChange }: TabsProps<T>) {
  return (
    <div className="glass inline-flex flex-wrap gap-2 rounded-2xl p-2">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={cn(
            "rounded-xl px-4 py-2 text-sm font-medium transition",
            current === item
              ? "bg-gradient-primary text-white"
              : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}