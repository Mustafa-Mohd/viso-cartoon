import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useSpring, useTransform } from "framer-motion";
import { services, type Service } from "@/data/services";

export default function Hero() {
  const [active, setActive] = useState<Service | null>(null);
  const [layerIdx, setLayerIdx] = useState(0);
  const [hoverId, setHoverId] = useState<string | null>(null);

  // Mouse position for parallax
  const sceneRef = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0.5, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(0.5, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [0, 1], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 1], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };
  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const openService = (s: Service) => {
    setLayerIdx(0);
    setActive(s);
  };

  const guardhouse = services.find((s) => s.id === "guardhouse")!;
  const gate = services.find((s) => s.id === "gate")!;
  const scanner = services.find((s) => s.id === "access")!;
  const dashboard = services.find((s) => s.id === "soc")!;
  const camera = services.find((s) => s.id === "cctv")!;

  return (
    <section className="relative bg-[#FFFDF8] overflow-hidden min-h-[calc(100svh-70px)] flex flex-col justify-start pt-0 pb-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#FFFDF8] pointer-events-none" />
      
      {/* Animated subtle grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]" 
        style={{
          backgroundImage: `linear-gradient(#D89A2B 1px, transparent 1px), linear-gradient(90deg, #D89A2B 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 100%)'
        }} 
      />

      {/* Floating orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[5%] top-[15%] w-[500px] h-[500px] rounded-full bg-[#D89A2B] blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.02, 0.06, 0.02], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-[10%] bottom-[10%] w-[400px] h-[400px] rounded-full bg-[#D89A2B] blur-[100px] pointer-events-none" 
      />

      {/* Large subtle shield */}
      <motion.svg 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.02, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none" 
        viewBox="0 0 100 100"
      >
        <path d="M50 5 L90 20 V50 C90 75 50 95 50 95 C50 95 10 75 10 50 V20 Z" fill="none" stroke="#D89A2B" strokeWidth="2" />
      </motion.svg>

      <div className="relative mx-auto max-w-7xl px-6 w-full flex-1 flex flex-col z-10 pt-4 lg:pt-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-start">
          
          {/* Left Column (45%) */}
          <div className="relative text-left w-full lg:w-[45%] lg:pt-6">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#D89A2B] mb-4 lg:mb-6"
            >
              SMARTER SECURITY. SAFER SPACES.
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="font-display text-5xl font-bold leading-[1.1] md:text-6xl lg:text-[75px] text-[#2F2924] tracking-tight"
            >
              Securing What<br />Matters{" "}
              <span className="relative inline-block text-[#D89A2B]">
                Most
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                  className="absolute bottom-1 lg:bottom-2 left-0 h-[6px] bg-[#D89A2B]/20 rounded-full"
                />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 lg:mt-6 text-lg text-[#6C6359] md:text-xl max-w-md leading-relaxed font-medium"
            >
              Expert physical security solutions tailored to protect people, assets, and peace of mind.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 lg:mt-10 w-fit"
            >
              <Link 
                to="/contact"
                className="group flex w-fit items-center gap-4 rounded-full bg-[#D89A2B] p-2 pr-6 text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(216,154,43,0.8)] transition-colors hover:bg-[#C28930]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#D89A2B] transition-transform group-hover:rotate-45">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
                <span className="tracking-wide uppercase text-[11px]">Request Consultation</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Unified Scene (55%) */}
          <div className="relative w-full lg:w-[55%] flex items-center justify-center h-[350px] lg:h-[450px] mt-4 lg:mt-0 lg:perspective-[1200px]">
            <motion.div 
              ref={sceneRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full aspect-square max-w-[700px]"
            >
              
              {/* Circular Platform base */}
              <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[85%] h-[15%] rounded-[100%] border border-[#E8DCC4] bg-gradient-to-t from-[#FDF8EE] to-transparent opacity-80" style={{ transform: "translateZ(-20px)" }} />
              <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 w-[65%] h-6 rounded-[100%] bg-[#D89A2B] blur-[30px] opacity-20" style={{ transform: "translateZ(-30px)" }} />

              {/* Guard Booth */}
              <IllustrationItem 
                service={guardhouse} 
                className="left-[2%] bottom-[12%] w-[42%]"
                animation={{ y: [0, -4, 0], transition: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
                hoverId={hoverId} setHoverId={setHoverId} onClick={openService}
                depth={1.5} mouseX={mouseX} mouseY={mouseY} zIndex={20}
              />

              {/* Barrier Gate */}
              <IllustrationItem 
                service={gate} 
                className="left-[38%] bottom-[12%] w-[28%]"
                animation={{ rotateZ: [0, 1.5, -1, 0], transition: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
                hoverId={hoverId} setHoverId={setHoverId} onClick={openService}
                depth={0.8} mouseX={mouseX} mouseY={mouseY} zIndex={15}
              />

              {/* Scanner */}
              <IllustrationItem 
                service={scanner} 
                className="left-[47%] bottom-[8%] w-[18%]"
                animation={{ opacity: [1, 0.85, 1], y: [0, -2, 0], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
                hoverId={hoverId} setHoverId={setHoverId} onClick={openService}
                depth={2.5} mouseX={mouseX} mouseY={mouseY} zIndex={30}
              />

              {/* Dashboard */}
              <IllustrationItem 
                service={dashboard} 
                className="right-[-10%] bottom-[12%] w-[48%]"
                animation={{ y: [0, -5, 0], transition: { repeat: Infinity, duration: 8, ease: "easeInOut" } }}
                hoverId={hoverId} setHoverId={setHoverId} onClick={openService}
                depth={1.8} mouseX={mouseX} mouseY={mouseY} zIndex={20}
              />

              {/* Security Camera */}
              <IllustrationItem 
                service={camera} 
                className="right-[12%] top-[15%] w-[25%]"
                animation={{ y: [0, -10, 0], rotateZ: [-2, 2, -2], transition: { repeat: Infinity, duration: 7, ease: "easeInOut" } }}
                hoverId={hoverId} setHoverId={setHoverId} onClick={openService}
                depth={-1.2} mouseX={mouseX} mouseY={mouseY} zIndex={10}
              />

            </motion.div>
          </div>
        </div>

        {/* Bottom Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 lg:mt-16 w-full mx-auto max-w-7xl rounded-[24px] bg-white/95 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] p-4 border border-[#F0E6D2] backdrop-blur-2xl relative z-30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#F0E6D2]/80">
            <BottomStripItem to="/services" icon="🛡️" title="Comprehensive Security" desc="End-to-end protection tailored to your needs." />
            <BottomStripItem to="/about" icon="👥" title="Experienced Professionals" desc="Skilled experts ensuring reliable outcomes." />
            <BottomStripItem to="/services" icon="📈" title="Advanced Technology" desc="Leveraging smart systems for proactive protection." />
            <BottomStripItem to="/our-clients" icon="🤝" title="Client-Focused Approach" desc="Your safety is our priority, always." />
          </div>
        </motion.div>
      </div>

      {/* Modal — stacked layers */}
      <AnimatePresence>
        {active && (
          <ServiceModal
            service={active}
            layerIdx={layerIdx}
            onNext={() =>
              setLayerIdx((i) => Math.min(i + 1, active.layers.length - 1))
            }
            onPrev={() => setLayerIdx((i) => Math.max(0, i - 1))}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ServiceModal({
  service,
  layerIdx,
  onNext,
  onPrev,
  onClose,
}: {
  service: Service;
  layerIdx: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}) {
  const layers = service.layers;
  const total = layers.length;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-[var(--ink)]/40 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <div className="relative w-full max-w-2xl">
        {/* Stacked layers behind */}
        {Array.from({ length: total }).map((_, i) => {
          const offset = i - layerIdx;
          if (offset < 0) return null;
          return (
            <motion.div
              key={i}
              className="toon-card absolute inset-0"
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{
                scale: 1 - offset * 0.05,
                y: offset * 14,
                opacity: 1 - offset * 0.25,
              }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              style={{ zIndex: total - offset }}
            />
          );
        })}

        {/* Foreground content */}
        <motion.div
          key={layerIdx}
          initial={{ x: 60, opacity: 0, rotate: 2 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          exit={{ x: -60, opacity: 0, rotate: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="toon-card relative z-50 p-8 md:p-10"
        >
          <div className="flex items-start gap-5">
            <img src={service.img} alt="" className="h-20 w-20 shrink-0 object-contain drop-shadow-[0_6px_0_rgba(0,0,0,0.1)]" />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <span className="toon-chip px-3 py-1 text-xs font-semibold text-[var(--gold-deep)]">
                  Layer {layerIdx + 1} / {total}
                </span>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="toon-chip h-9 w-9 rounded-full text-lg leading-none hover:rotate-90 transition-transform"
                >
                  ✕
                </button>
              </div>
              <h3 className="mt-3 font-display text-3xl font-bold">{layers[layerIdx].title}</h3>
              <p className="mt-2 text-[var(--muted-foreground)]">{layers[layerIdx].body}</p>

              {layers[layerIdx].bullets && (
                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {layers[layerIdx].bullets!.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 rounded-2xl border-2 border-[var(--ink)] bg-[var(--gold-soft)] px-3 py-2 text-sm font-medium"
                    >
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--gold-deep)] text-[10px] text-white">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between">
            <button
              onClick={onPrev}
              disabled={layerIdx === 0}
              className="rounded-full border-2 border-[#2F2924] bg-white px-4 py-2 text-sm font-bold shadow-[2px_2px_0_#2F2924] disabled:opacity-40 hover:bg-[#FDF5E6] transition-colors"
            >
              ← Back
            </button>
            <div className="flex gap-1.5">
              {layers.map((_, i) => (
                <div
                  key={i}
                  className="h-2 rounded-full transition-all border-2 border-[#2F2924]"
                  style={{
                    width: i === layerIdx ? 24 : 8,
                    background: i === layerIdx ? "#D49837" : "#FDE8B0",
                  }}
                />
              ))}
            </div>
            {layerIdx < total - 1 ? (
               <button
                onClick={onNext}
                className="rounded-full border-2 border-[#2F2924] bg-[#D49837] px-5 py-2 text-sm font-bold text-white shadow-[2px_2px_0_#2F2924] hover:-translate-y-0.5 hover:shadow-[2px_4px_0_#2F2924] transition-all"
              >
                Go deeper →
              </button>
            ) : (
              <button
                onClick={onClose}
                className="rounded-full border-2 border-[#2F2924] bg-[#D49837] px-5 py-2 text-sm font-bold text-white shadow-[2px_2px_0_#2F2924] hover:-translate-y-0.5 hover:shadow-[2px_4px_0_#2F2924] transition-all"
              >
                Done
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function BottomStripItem({ to, icon, title, desc }: { to: string, icon: string, title: string, desc: string }) {
  return (
    <Link to={to} className="block group cursor-pointer focus:outline-none">
      <motion.div 
        whileHover={{ y: -2 }}
        className="flex gap-3 px-2 lg:px-4 items-center"
      >
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#FDF5E6] text-[#D49837] transition-all duration-300 group-hover:bg-[#D89A2B] group-hover:text-white group-hover:shadow-[0_4px_12px_-2px_rgba(216,154,43,0.4)]">
          <span className="text-lg transition-transform duration-300 group-hover:scale-110">{icon}</span>
        </div>
        <div>
          <h4 className="font-display text-[13px] font-bold text-[#2F2924] transition-colors duration-300 group-hover:text-[#D89A2B]">{title}</h4>
          <p className="mt-0.5 text-[11px] text-[#6C6359] leading-tight pr-1">{desc}</p>
        </div>
      </motion.div>
    </Link>
  );
}

function IllustrationItem({ service, className, animation, hoverId, setHoverId, onClick, depth, mouseX, mouseY, zIndex }: any) {
  const isHover = hoverId === service.id;
  
  // Custom parallax based on depth
  const px = useTransform(mouseX, [0, 1], [-25 * depth, 25 * depth]);
  const py = useTransform(mouseY, [0, 1], [-25 * depth, 25 * depth]);

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ x: px, y: py, zIndex: isHover ? 50 : zIndex, transformStyle: "preserve-3d" }}
    >
      <motion.button
        animate={animation}
        onMouseEnter={() => setHoverId(service.id)}
        onMouseLeave={() => setHoverId(null)}
        onClick={() => onClick(service)}
        className="relative w-full h-full group focus:outline-none"
        aria-label={service.title}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
          {/* Contact shadow */}
          <div className="absolute -bottom-[2%] left-1/2 w-[60%] h-[15%] -translate-x-1/2 rounded-[100%] bg-black opacity-[0.08] blur-md transition-opacity duration-300 group-hover:opacity-[0.04]" />
          
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-full transition-all duration-500"
            style={{
              boxShadow: isHover
                ? "0 0 0 8px color-mix(in oklab, #D89A2B 20%, transparent), 0 30px 60px -10px color-mix(in oklab, #D89A2B 40%, transparent)"
                : "0 0 0 0 transparent",
              transform: isHover ? "scale(1.05) translateZ(30px)" : "scale(1) translateZ(0)",
            }}
          />
          
          {/* Image */}
          <motion.img
            src={service.img}
            alt={service.title}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-auto select-none transition-transform duration-500 group-hover:-translate-y-4"
            style={{
              filter: isHover
                ? "drop-shadow(0 25px 35px rgba(216,154,43,0.25)) brightness(1.05) saturate(1.1)"
                : hoverId 
                  ? "drop-shadow(0 8px 15px rgba(0,0,0,0.04)) grayscale(40%) opacity(0.6)"
                  : "drop-shadow(0 15px 25px rgba(0,0,0,0.08))",
              transform: isHover ? "translateZ(40px)" : "translateZ(0)",
            }}
            draggable={false}
          />
          
          {/* Tooltip chip */}
          <div
            className="absolute left-1/2 top-[102%] -translate-x-1/2 whitespace-nowrap transition-all duration-300 pointer-events-none"
            style={{
              opacity: isHover ? 1 : 0,
              transform: `translate(-50%, ${isHover ? "0px" : "-10px"}) translateZ(50px)`,
            }}
          >
            <span className="inline-block rounded-full border border-[#F0E6D2] bg-white/95 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-[#D89A2B] shadow-[0_8px_16px_-4px_rgba(216,154,43,0.2)]">
              {service.title}
            </span>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}
