import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

const items = [
  {
    question: "Struggling to keep up with your syllabus?",
    answer:
      "Our structured learning paths are designed around your exact curriculum. We map every topic, set milestones, and adapt the pace to your progress — so you're always exactly where you need to be, never overwhelmed.",
    cta: "Explore Learning Paths →",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    accent: "#7c3aed",
  },
  {
    question: "Have big concepts but need to master them quickly?",
    answer:
      "Our discovery process helps you focus on what matters most. With pre-built study frameworks and adaptive test series, we can accelerate your mastery by 50%. Learn faster without sacrificing depth.",
    cta: "Start Test Series →",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&h=400&fit=crop",
    accent: "#10b981",
  },
  {
    question: "Want real feedback on your performance?",
    answer:
      "Our real-time scorecard gives you instant insight — subject-by-subject breakdowns, trend analysis, and personalized recommendations. Know exactly where to improve and how far you've come.",
    cta: "View Scorecard Demo →",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    accent: "#f59e0b",
  },
  {
    question: "Need expert tutors available on demand?",
    answer:
      "200+ verified subject experts are live on the platform every day. Book a 1-on-1 session, drop into a live lesson, or ask questions in real-time during video playback — help is always one click away.",
    cta: "Meet Our Tutors →",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    accent: "#06b6d4",
  },
];

export default function AccordionFeatures() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-24 md:py-36 border-t border-border/30">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-16"
        >
          — How We Help
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: accordion */}
          <div className="space-y-0 divide-y divide-border/30">
            {items.map((item, i) => {
              const isOpen = active === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setActive(isOpen ? -1 : i)}
                    className="w-full flex items-start justify-between gap-4 py-7 text-left group"
                  >
                    <span
                      className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-300 ${
                        isOpen ? "text-foreground" : "text-muted-foreground/50 group-hover:text-muted-foreground"
                      }`}
                    >
                      {/* Highlight one word */}
                      {item.question.split(" ").map((word, wi) =>
                        wi === 3 ? (
                          <span key={wi} style={{ color: isOpen ? item.accent : undefined }}>
                            {word}{" "}
                          </span>
                        ) : (
                          <span key={wi}>{word} </span>
                        )
                      )}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 mt-0.5"
                    >
                      <Plus
                        className={`w-4 h-4 transition-colors ${
                          isOpen ? "text-foreground" : "text-muted-foreground/30"
                        }`}
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7">
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                            {item.answer}
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase group/cta"
                            style={{ color: item.accent }}
                          >
                            {item.cta}
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                          </a>

                          {/* Mobile image */}
                          <div className="mt-6 lg:hidden overflow-hidden border border-border/30">
                            <img
                              src={item.image}
                              alt=""
                              className="w-full aspect-video object-cover opacity-70"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: image panel */}
          <div className="hidden lg:block sticky top-28">
            <AnimatePresence mode="wait">
              {active >= 0 && (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative overflow-hidden border border-border/30"
                >
                  <img
                    src={items[active]?.image}
                    alt=""
                    className="w-full aspect-[4/3] object-cover opacity-60"
                  />
                  {/* Accent overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{ background: `linear-gradient(135deg, ${items[active]?.accent}, transparent)` }}
                  />
                  {/* Corner label */}
                  <div className="absolute bottom-5 left-5">
                    <span
                      className="text-xs font-medium tracking-widest uppercase px-3 py-1.5 border"
                      style={{
                        color: items[active]?.accent,
                        borderColor: items[active]?.accent + "40",
                        background: items[active]?.accent + "10",
                      }}
                    >
                      {items[active]?.cta.replace(" →", "")}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}