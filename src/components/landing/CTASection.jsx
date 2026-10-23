import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 md:py-36 border-t border-border/30">
      <div className="max-w-screen-xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden border border-border/40 p-12 md:p-20 text-center"
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: "radial-gradient(ellipse at 50% 80%, hsl(252 80% 68% / 0.15), transparent 70%)",
            }}
          />

          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Ready to begin
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black tracking-[-0.04em] leading-[0.9] mb-10">
            Start Learning
            <br />
            <span className="text-foreground/25">For Free Today</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-12 leading-relaxed">
            No credit card required. Access 100+ free lessons instantly and unlock your full potential.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium tracking-widest uppercase hover:bg-foreground/90 transition-colors"
            >
              Get Started Free
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border/50 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-all"
            >
              Talk to a Tutor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}