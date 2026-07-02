import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SESSION_KEY = "viso-intro-seen";

export default function VisoIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {}
    setVisible(true);
    const t = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {}
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30, transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[var(--cream)]"
        >
          {/* radial gold glow */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.6 }}
            transition={{ duration: 2.4, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--gold-soft) 90%, transparent) 0%, transparent 55%)",
            }}
          />

          {/* Tagline top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute top-[38%] font-sans text-xs uppercase tracking-[0.5em] text-[var(--gold-deep)]"
          >
            Where security meets peace of mind
          </motion.div>

          {/* VISO letters */}
          <div className="relative flex items-center gap-2 md:gap-4">
            {"VISO".split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: 100, opacity: 0, rotate: -10 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{
                  delay: 0.15 + i * 0.12,
                  type: "spring",
                  stiffness: 180,
                  damping: 18,
                }}
                className="font-display text-[22vw] font-bold leading-none tracking-tighter md:text-[16rem]"
                style={{
                  background:
                    "linear-gradient(180deg, #F2C744 0%, #C99628 60%, #8A5A12 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {ch}
              </motion.span>
            ))}
          </div>

          {/* Underline sweep */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.0, duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            className="absolute bottom-[36%] h-[3px] w-[42%] origin-left rounded-full bg-[var(--gold-deep)]"
          />

          {/* Bottom label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-[28%] font-sans text-[11px] uppercase tracking-[0.4em] text-[var(--foreground)]/60"
          >
            Physical Security · Riyadh · Est. 2020
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
