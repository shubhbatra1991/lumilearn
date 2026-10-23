import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Award, Flame, BarChart3 } from "lucide-react";

const subjects = [
  { name: "Mathematics", score: 92, color: "#7c3aed" },
  { name: "Physics", score: 87, color: "#3b82f6" },
  { name: "Chemistry", score: 78, color: "#06b6d4" },
  { name: "English", score: 95, color: "#10b981" },
  { name: "History", score: 83, color: "#f59e0b" },
];

function ScoreBar({ subject, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground/60">
          {subject.name}
        </span>
        <span className="text-xs font-bold" style={{ color: subject.color }}>
          {subject.score}%
        </span>
      </div>
      <div className="h-px bg-border/40 relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 h-0.5 top-0"
          style={{ background: subject.color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${subject.score}%` } : {}}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.12 }}
        />
      </div>
    </div>
  );
}

export default function ScorecardSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="scorecard" ref={ref} className="py-24 md:py-36 border-t border-border/30">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            — 04 / Scorecard
          </p>
          <h2 className="text-[clamp(2rem,5vw,5rem)] font-black tracking-[-0.03em] leading-tight">
            Track Every <span className="text-gradient">Gain</span>
            <br />
            <span className="text-foreground/25">In Real Time</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Big score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="border border-border/40 p-8 md:p-10">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50 mb-2">
                Overall Score
              </p>
              <div className="flex items-end gap-2 mb-8">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="text-8xl md:text-9xl font-black tracking-tight leading-none"
                >
                  87
                </motion.span>
                <span className="text-2xl font-bold text-muted-foreground/40 mb-4">%</span>
              </div>

              <div className="w-full h-px bg-border/30 mb-8" />

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Award, label: "Rank", value: "#12", color: "#f59e0b" },
                  { icon: Flame, label: "Streak", value: "28d", color: "#ef4444" },
                  { icon: BarChart3, label: "Tests", value: "142", color: "#7c3aed" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <s.icon className="w-4 h-4 mx-auto mb-2" style={{ color: s.color }} />
                    <div className="text-xs text-muted-foreground/40 mb-1 tracking-widest uppercase">{s.label}</div>
                    <div className="font-bold text-sm">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Score bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50 mb-8">
              Performance by Subject
            </p>
            {subjects.map((s, i) => (
              <ScoreBar key={s.name} subject={s} index={i} />
            ))}

            {/* Trend callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10 border border-border/40 p-6 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">+12% improvement this month</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  You're in the top 8% of students in your cohort
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}