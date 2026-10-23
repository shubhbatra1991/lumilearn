import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

const lessons = [
  { id: 1, title: "Introduction to Calculus", subject: "Mathematics", duration: "42 min", instructor: "Dr. Sarah Chen", color: "#7c3aed" },
  { id: 2, title: "Atomic Structure", subject: "Chemistry", duration: "38 min", instructor: "Prof. James Liu", color: "#06b6d4" },
  { id: 3, title: "World War II Deep Dive", subject: "History", duration: "55 min", instructor: "Dr. Maria Garcia", color: "#f59e0b" },
  { id: 4, title: "Python for Beginners", subject: "Technology", duration: "61 min", instructor: "Alex Kim", color: "#10b981" },
];

function VideoCard({ lesson, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-card border border-border/40 overflow-hidden"
    >
      {/* Color strip */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        style={{ background: lesson.color, transformOrigin: "left" }}
        className="absolute top-0 left-0 right-0 h-0.5"
        transition={{ duration: 0.3 }}
      />

      <div className="p-6 md:p-8">
        {/* Play btn */}
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1 }}
          className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center mb-6 group-hover:border-foreground/30 transition-colors"
        >
          <Play className="w-4 h-4 ml-0.5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </motion.div>

        <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: lesson.color }}>
          {lesson.subject}
        </p>
        <h3 className="text-lg md:text-xl font-bold mb-4 leading-snug">{lesson.title}</h3>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/30">
          <div>
            <p className="text-xs text-muted-foreground">{lesson.instructor}</p>
            <p className="text-xs text-muted-foreground/50 mt-0.5">{lesson.duration}</p>
          </div>
          <motion.div
            animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0 }}
            className="w-8 h-8 flex items-center justify-center border border-border/40 rounded-full"
          >
            <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoLessonsSection() {
  return (
    <section id="lessons" className="py-24 md:py-36 border-t border-border/30">
      {/* Full-bleed header */}
      <div className="max-w-screen-xl mx-auto px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
              — 02 / Video Lessons
            </p>
            <h2 className="text-[clamp(2rem,5vw,5rem)] font-black tracking-[-0.03em] leading-tight">
              Learn From <span className="text-gradient">World-Class</span>
              <br />
              <span className="text-foreground/25">Educators</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs leading-relaxed text-sm">
            HD video lessons with interactive notes, live Q&A, and pace control — available on all your devices.
          </p>
        </motion.div>
      </div>

      {/* Feature highlight band */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden mb-16"
      >
        <div
          className="relative h-64 md:h-[400px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(252 80% 8%), hsl(210 75% 6%))",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=800&fit=crop"
            alt="Video lessons"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full border border-foreground/20 flex items-center justify-center mx-auto mb-4 hover:border-foreground/60 transition-colors group">
                <Play className="w-7 h-7 ml-1 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                Watch a free lesson
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Lesson cards */}
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {lessons.map((lesson, i) => (
            <VideoCard key={lesson.id} lesson={lesson} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}