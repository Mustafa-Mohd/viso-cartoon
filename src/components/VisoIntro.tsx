import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SESSION_KEY = "viso-intro-seen";
const LOGO_URL = "https://res.cloudinary.com/dcefror3c/image/upload/v1782911668/Luxurious_black_and_gold_logo_design_kjv4np.png";

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
    }, 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05, 
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#FFFDF8]"
        >
          {/* subtle radial gold glow */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.5 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(216,154,43,0.15) 0%, transparent 60%)",
            }}
          />

          <div className="relative flex items-center justify-center mb-8">
            {/* Pulsing rings (Radar effect) */}
            <motion.div
              animate={{ scale: [1, 2, 3], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-24 h-24 rounded-full border-2 border-[#D89A2B]"
            />
            <motion.div
              animate={{ scale: [1, 2, 3], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
              className="absolute w-24 h-24 rounded-full border-2 border-[#D89A2B]"
            />

            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-[140px] h-[140px] rounded-full border-[3px] border-dashed border-[#D89A2B]/40"
            />
            
            {/* Inner counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[160px] h-[160px] rounded-full border border-dotted border-[#D89A2B]/60"
            />

            {/* The Logo */}
            <motion.img
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              src={LOGO_URL}
              alt="VISO Logo"
              className="relative z-10 w-24 h-24 rounded-full object-contain shadow-[0_0_40px_rgba(216,154,43,0.4)]"
            />
          </div>

          {/* Loading Bar */}
          <div className="relative mt-12 w-64 h-1.5 bg-[#F0E6D2] rounded-full overflow-hidden shadow-inner">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-[#C28930] to-[#E5B55C] rounded-full"
            />
          </div>

          {/* Loading Text */}
          <div className="mt-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-sans text-[11px] font-bold uppercase tracking-[0.4em] text-[#D89A2B] mb-2"
            >
              VISO Physical Security
            </motion.div>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#6C6359]"
            >
              Initializing Secure Environment...
            </motion.div>
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
