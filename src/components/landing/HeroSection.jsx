import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WORDS = ["Everything", "Mathematics", "Sciences", "Languages", "Anything"];

function AnimatedWord() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[idx]}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          className="inline-block text-gradient"
        >
          {WORDS[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function RevealText({ children, delay = 0, className = "" }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, hsl(252 80% 68%), transparent 70%)" }}
        />
        <div
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(38 90% 58%), transparent 70%)" }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-screen-xl mx-auto px-8 pt-32 pb-24">
        {/* Label */}
        <RevealText delay={0.3} className="mb-10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-muted-foreground/40" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
              The future of learning
            </span>
          </div>
        </RevealText>

        {/* Main heading */}
        <div className="mb-8">
          <RevealText delay={0.45}>
            <h1 className="text-[clamp(3rem,9vw,9rem)] font-black leading-[0.88] tracking-[-0.04em] text-foreground">
              Master
            </h1>
          </RevealText>
          <RevealText delay={0.55}>
            <h1 className="text-[clamp(3rem,9vw,9rem)] font-black leading-[0.88] tracking-[-0.04em]">
              <AnimatedWord />
            </h1>
          </RevealText>
          <RevealText delay={0.65}>
            <h1 className="text-[clamp(3rem,9vw,9rem)] font-black leading-[0.88] tracking-[-0.04em] text-foreground/20">
              You Dream Of
            </h1>
          </RevealText>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-12"
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm">
            Interactive courses, live video lessons, adaptive tests — all in one 
            obsessively crafted platform.
          </p>

          <div className="flex items-center gap-8">
            <a
              href="#courses"
              className="group flex items-center gap-3 text-sm font-medium tracking-widest uppercase"
            >
              <span className="text-foreground">Explore Courses</span>
              <span className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-foreground/60 group-hover:bg-foreground/5 transition-all">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href="#"
              className="text-sm font-medium tracking-widest uppercase px-7 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Start Free
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scrolling ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-0 left-0 right-0 border-t border-border/30 py-4 overflow-hidden"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-12 whitespace-nowrap"
        >
          {Array(4).fill(["Mathematics", "Physics", "Chemistry", "History", "Literature", "Coding", "Biology", "Economics"]).flat().map((s, i) => (
            <span key={i} className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground/40 shrink-0">
              {s} <span className="text-muted-foreground/20 mx-4">—</span>
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Side label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
      >
        <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground/40 [writing-mode:vertical-rl]">
          Scroll to explore
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-muted-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}