import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

const reels = [
  {
    title: "Mathematics",
    sub: "Course Preview",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    accent: "#7c3aed",
  },
  {
    title: "Physics Lab",
    sub: "Video Lesson",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=600&h=400&fit=crop",
    accent: "#06b6d4",
  },
  {
    title: "Code Academy",
    sub: "Test Series",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    accent: "#10b981",
  },
  {
    title: "History Deep Dive",
    sub: "Live Lesson",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
    accent: "#f59e0b",
  },
  {
    title: "Chemistry Lab",
    sub: "Interactive",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=600&h=400&fit=crop",
    accent: "#ec4899",
  },
];

function ReelCard({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative shrink-0 w-[260px] md:w-[320px] overflow-hidden group"
      style={{ marginTop: index % 2 === 1 ? "48px" : "0px" }}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-card border border-border/30">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

        {/* Accent line */}
        <motion.div
          animate={{ scaleY: hovered ? 1 : 0 }}
          initial={{ scaleY: 0 }}
          style={{ background: item.accent, transformOrigin: "top" }}
          className="absolute left-0 top-0 bottom-0 w-0.5"
          transition={{ duration: 0.3 }}
        />

        {/* Play button */}
        <motion.div
          animate={{ scale: hovered ? 1 : 0.7, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm bg-white/10">
            <Play className="w-5 h-5 ml-0.5 text-white" />
          </div>
        </motion.div>

        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-xs font-medium tracking-[0.2em] uppercase mb-1"
            style={{ color: item.accent }}>
            {item.sub}
          </p>
          <h4 className="text-base font-bold text-white">{item.title}</h4>
        </div>
      </div>
    </motion.div>
  );
}

export default function ShowreelSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 border-t border-border/30 overflow-hidden">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-8 mb-12 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
            — Showreel 25/26
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,4rem)] font-black tracking-[-0.03em] leading-tight">
            See What's <span className="text-gradient">Inside</span>
          </h2>
        </motion.div>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          href="#"
          className="hidden md:flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors group"
        >
          <Play className="w-3.5 h-3.5" />
          Watch Reel
        </motion.a>
      </div>

      {/* Scrolling cards */}
      <motion.div style={{ x }} className="flex gap-4 md:gap-5 px-8 pb-4 items-start">
        {reels.map((item, i) => (
          <ReelCard key={item.title} item={item} index={i} />
        ))}
      </motion.div>
    </section>
  );
}