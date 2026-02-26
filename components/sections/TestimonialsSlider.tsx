"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-space">
      <div className="container-px">
        <h2 className="section-title">What clients say</h2>
        <div className="mt-8 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <p className="text-lg leading-relaxed">“{testimonials[index].quote}”</p>
                <p className="mt-5 font-semibold">{testimonials[index].name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{testimonials[index].role}</p>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}