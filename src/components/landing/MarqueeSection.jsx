import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Courses" },
  { value: "50k+", label: "Students" },
  { value: "98%", label: "Pass Rate" },
  { value: "200+", label: "Expert Tutors" },
  { value: "4.9", label: "Avg. Rating" },
  { value: "12M+", label: "Lessons Watched" },
];

export default function MarqueeSection() {
  return (
    <section className="border-y border-border/30 py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="grid grid-cols-3 md:grid-cols-6"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`px-8 py-6 text-center border-r border-border/30 last:border-r-0 ${
              i >= 3 ? "border-t border-border/30 md:border-t-0" : ""
            }`}
          >
            <div className="text-2xl md:text-3xl font-black tracking-tight text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}