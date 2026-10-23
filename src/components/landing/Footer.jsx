import React from "react";
import { ArrowUpRight } from "lucide-react";

const cols = {
  Platform: ["Courses", "Video Lessons", "Test Series", "Scorecard"],
  Company: ["About", "Careers", "Blog", "Press"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid md:grid-cols-5 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-6 rounded-full border border-primary/50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="text-sm font-medium tracking-wider uppercase">LumiLearn</span>
            </div>
            <p className="text-sm text-muted-foreground/60 leading-relaxed max-w-xs">
              The modern platform for students who take learning seriously.
            </p>
          </div>

          {Object.entries(cols).map(([title, items]) => (
            <div key={title}>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/40 mb-5">
                {title}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border/20">
          <p className="text-xs text-muted-foreground/30 tracking-widest">
            © 2026 LumiLearn. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter / X", "LinkedIn", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-muted-foreground/30 hover:text-muted-foreground transition-colors flex items-center gap-1 group"
              >
                {s}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}