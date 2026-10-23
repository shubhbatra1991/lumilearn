import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Lessons", href: "#lessons" },
  { label: "Tests", href: "#tests" },
  { label: "Scorecard", href: "#scorecard" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 border-b border-border/40 bg-background/70 backdrop-blur-2xl" : "py-6"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-7 h-7 rounded-full border border-primary/50 flex items-center justify-center group-hover:border-primary transition-colors">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          </div>
          <span className="text-sm font-medium tracking-wider uppercase text-foreground/80 group-hover:text-foreground transition-colors">
            LumiLearn
          </span>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Log in
          </a>
          <a
            href="#"
            className="text-xs font-medium tracking-widest uppercase px-5 py-2.5 border border-foreground/20 hover:border-foreground/60 text-foreground/80 hover:text-foreground transition-all duration-300"
          >
            Start Free
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border/30 flex flex-col gap-4">
                <a href="#" className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Log in</a>
                <a href="#" className="text-sm font-medium tracking-widest uppercase px-5 py-3 border border-foreground/20 text-center">Start Free</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}