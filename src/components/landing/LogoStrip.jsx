import React from "react";
import { motion } from "framer-motion";

const logos = [
  "MIT OpenCourseWare",
  "Khan Academy",
  "Coursera",
  "edX",
  "Duolingo",
  "Brilliant.org",
  "Codecademy",
  "Udemy",
];

export default function LogoStrip() {
  return (
    <section className="border-y border-border/25 py-10 overflow-hidden">
      <div className="flex items-center gap-2 mb-0">
        {/* Label */}
        <p className="shrink-0 text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground/30 px-8 hidden md:block">
          Trusted by learners from
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          className="flex gap-16 whitespace-nowrap py-4"
        >
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="shrink-0 text-sm font-semibold tracking-widest uppercase text-muted-foreground/25 hover:text-muted-foreground/60 transition-colors select-none"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}