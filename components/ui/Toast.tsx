"use client";

import { motion } from "framer-motion";

export function Toast({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="glass rounded-xl px-4 py-2 text-sm"
    >
      {message}
    </motion.div>
  );
}