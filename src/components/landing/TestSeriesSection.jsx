import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, Clock } from "lucide-react";

const questions = [
  {
    q: "What does Newton's Second Law describe?",
    options: ["Velocity", "Acceleration", "Force = mass × acceleration", "Momentum"],
    correct: 2,
  },
  {
    q: "What is the chemical symbol for Gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correct: 2,
  },
  {
    q: "Who wrote 'War and Peace'?",
    options: ["Dostoevsky", "Tolstoy", "Chekhov", "Pushkin"],
    correct: 1,
  },
];

function LiveQuiz() {
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);

  const q = questions[qIdx];

  useEffect(() => {
    if (revealed) return;
    if (time <= 0) { setRevealed(true); return; }
    const t = setTimeout(() => setTime(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [time, revealed]);

  useEffect(() => {
    if (!revealed) return;
    const t = setTimeout(() => {
      const next = (qIdx + 1) % questions.length;
      setQIdx(next);
      setSelected(null);
      setRevealed(false);
      setTime(30);
    }, 2200);
    return () => clearTimeout(t);
  }, [revealed]);

  const handleSelect = (i) => {
    if (revealed || selected !== null) return;
    setSelected(i);
    if (i === q.correct) setScore(s => s + 1);
    setTimeout(() => setRevealed(true), 500);
  };

  const progress = (time / 30) * 100;

  return (
    <div className="bg-card border border-border/40 p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Live Practice</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          <span className={time <= 10 ? "text-destructive" : ""}>{time}s</span>
        </div>
      </div>

      {/* Timer bar */}
      <div className="h-0.5 bg-border/40 mb-6 overflow-hidden">
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "linear" }}
          className={`h-full ${time <= 10 ? "bg-destructive" : "bg-primary"}`}
        />
      </div>

      {/* Q number */}
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground/40 mb-3">
        Question {qIdx + 1} / {questions.length}
      </p>

      {/* Question */}
      <motion.h4
        key={qIdx}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-base font-semibold mb-6 leading-snug"
      >
        {q.q}
      </motion.h4>

      {/* Options */}
      <div className="space-y-2.5">
        {q.options.map((opt, i) => {
          let classes = "border-border/30 text-muted-foreground";
          let icon = null;
          if (revealed) {
            if (i === q.correct) {
              classes = "border-green-500/50 bg-green-500/5 text-green-400";
              icon = <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />;
            } else if (i === selected) {
              classes = "border-red-500/50 bg-red-500/5 text-red-400";
              icon = <XCircle className="w-4 h-4 text-red-500 shrink-0" />;
            }
          } else if (selected === i) {
            classes = "border-primary/50 bg-primary/5 text-foreground";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left flex items-center gap-3 px-4 py-3 border text-sm transition-all duration-300 hover:border-foreground/20 ${classes}`}
            >
              <span className="w-6 h-6 flex items-center justify-center bg-muted/50 text-xs font-bold shrink-0 rounded-sm">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{opt}</span>
              {icon}
            </button>
          );
        })}
      </div>

      {/* Score */}
      <div className="mt-6 pt-5 border-t border-border/30 flex items-center justify-between">
        <span className="text-xs text-muted-foreground/40 tracking-widest uppercase">Session Score</span>
        <span className="text-sm font-bold text-foreground">{score} / {questions.length}</span>
      </div>
    </div>
  );
}

export default function TestSeriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="tests" ref={ref} className="py-24 md:py-36 border-t border-border/30">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
                — 03 / Test Series
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-black tracking-[-0.03em] leading-tight mb-8">
                Practice
                <br />
                <span className="text-gradient">Until Perfect</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-sm">
                Thousands of questions curated by subject-matter experts. Adaptive difficulty. Instant explanations. Real exam simulations.
              </p>

              <div className="space-y-4">
                {["Adaptive difficulty engine", "Instant answer explanations", "Full mock exam simulations", "Performance analytics"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>

              <motion.a
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                href="#"
                className="inline-flex items-center gap-3 mt-10 text-sm font-medium tracking-widest uppercase group"
              >
                <span>Start Practice Test</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: live quiz */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <LiveQuiz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}