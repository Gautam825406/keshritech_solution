"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", children, ...props }: ButtonProps) {
  const styles = {
    primary:
      "bg-gradient-primary text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/45",
    secondary: "glass text-slate-900 dark:text-white hover:border-brand-500/40",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-medium transition-all",
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}