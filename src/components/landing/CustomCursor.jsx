import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const trailXSpring = useSpring(cursorX, { damping: 45, stiffness: 150 });
  const trailYSpring = useSpring(cursorY, { damping: 45, stiffness: 150 });

  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const checkHover = (e) => {
      const el = e.target;
      const isInteractive = el.closest("a, button, [data-hover]");
      setHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: clicking ? 6 : hovered ? 10 : 6,
            height: clicking ? 6 : hovered ? 10 : 6,
            opacity: 1,
          }}
          transition={{ duration: 0.15 }}
          className="rounded-full bg-white"
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] mix-blend-difference"
        style={{
          x: trailXSpring,
          y: trailYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: clicking ? 24 : hovered ? 44 : 32,
            height: clicking ? 24 : hovered ? 44 : 32,
            borderColor: hovered ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)",
            borderWidth: clicking ? 1 : hovered ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border"
        />
      </motion.div>
    </>
  );
}