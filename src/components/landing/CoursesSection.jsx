import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const courses = [
  {
    num: "01",
    title: "Advanced Mathematics",
    tag: "Mathematics",
    desc: "Calculus, Linear Algebra, Differential Equations and more — taught from first principles.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
    color: "#7c3aed",
  },
  {
    num: "02",
    title: "Quantum Physics",
    tag: "Science",
    desc: "From particle mechanics to wave functions — a deep dive into how the universe really works.",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&h=600&fit=crop",
    color: "#06b6d4",
  },
  {
    num: "03",
    title: "Data Science & AI",
    tag: "Technology",
    desc: "Build real models. Master Python, stats, and machine learning from ground zero.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "#10b981",
  },
  {
    num: "04",
    title: "World Literature",
    tag: "Language Arts",
    desc: "Critical reading, essay craft, and literary analysis across cultures and centuries.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
    color: "#f59e0b",
  },
];

function CourseRow({ course, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative border-b border-border/30 last:border-b-0"
    >
      {/* Hover background */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `linear-gradient(90deg, ${course.color}05, transparent)` }}
      />

      <a href="#" className="flex items-center gap-6 md:gap-12 px-0 py-8 md:py-10">
        {/* Number */}
        <span className="text-xs font-medium tracking-widest text-muted-foreground/30 shrink-0 w-8">
          {course.num}
        </span>

        {/* Thumbnail */}
        <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-lg overflow-hidden shrink-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground group-hover:text-foreground/80 transition-colors truncate">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 hidden md:block max-w-lg truncate">
            {course.desc}
          </p>
        </div>

        {/* Tag */}
        <span
          className="hidden lg:block text-xs font-medium tracking-widest uppercase shrink-0 px-3 py-1.5 border"
          style={{ borderColor: course.color + "40", color: course.color }}
        >
          {course.tag}
        </span>

        {/* Arrow */}
        <motion.span
          animate={{ x: hovered ? 4 : 0, y: hovered ? -4 : 0, opacity: hovered ? 1 : 0.3 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-10 h-10 flex items-center justify-center border border-border/40 rounded-full"
        >
          <ArrowUpRight className="w-4 h-4" />
        </motion.span>
      </a>
    </motion.div>
  );
}

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 md:py-36 px-8 max-w-screen-xl mx-auto">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-16"
      >
        <div>
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            — 01 / Courses
          </p>
          <h2 className="text-[clamp(2rem,5vw,5rem)] font-black tracking-[-0.03em] leading-tight">
            Curated <span className="text-gradient">Courses</span>
            <br />
            <span className="text-foreground/25">For Every Learner</span>
          </h2>
        </div>
        <a
          href="#"
          className="hidden md:flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors group"
        >
          All Courses
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>

      {/* Course list */}
      <div>
        {courses.map((course, i) => (
          <CourseRow key={course.num} course={course} index={i} />
        ))}
      </div>
    </section>
  );
}