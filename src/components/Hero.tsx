import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services, type Service } from "@/data/services";

export default function Hero() {
  const [active, setActive] = useState<Service | null>(null);
  const [layerIdx, setLayerIdx] = useState(0);
  const [hoverId, setHoverId] = useState<string | null>(null);

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
    <section className="relative bg-[#FFFDF8] overflow-hidden min-h-[100svh] flex flex-col justify-center pt-24 pb-12">
      {/* Background Elements */}
      {/* Large subtle shield */}
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none" viewBox="0 0 100 100">
        <path d="M50 5 L90 20 V50 C90 75 50 95 50 95 C50 95 10 75 10 50 V20 Z" fill="none" stroke="#D89A2B" strokeWidth="2" />
      </svg>

      {/* Subtle city skyline silhouette */}
      <div 
        className="absolute bottom-0 w-full h-[30%] pointer-events-none opacity-[0.02]"
        style={{
          background: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 20 V10 H5 V5 H10 V12 H15 V8 H20 V15 H25 V2 H35 V10 H40 V6 H45 V14 H55 V4 H60 V10 H65 V7 H70 V13 H80 V5 H90 V15 H95 V8 H100 V20 Z\" fill=\"%23D89A2B\"/></svg>') repeat-x bottom/contain"
        }}
      />

      {/* Radial ambient glow */}
      <div className="absolute right-[10%] top-[30%] w-[600px] h-[600px] rounded-full bg-[#D89A2B] blur-[120px] opacity-[0.04] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 w-full flex-1 flex flex-col justify-center z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Column (45%) */}
          <div className="relative text-left w-full lg:w-[45%]">
            <span className="inline-block font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#D89A2B] mb-6">
              SMARTER SECURITY. SAFER SPACES.
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-display text-5xl font-bold leading-[1.1] md:text-6xl lg:text-[70px] text-[#2F2924]"
            >
              Securing What<br />Matters{" "}
              <span className="text-[#D89A2B]">Most</span>
            </motion.h1>
            <p className="mt-6 text-lg text-[#6C6359] md:text-xl max-w-md leading-relaxed font-medium">
              Expert physical security solutions tailored to protect people, assets, and peace of mind.
            </p>
            <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D89A2B] pl-6 pr-2 py-2 text-sm font-semibold text-white shadow-[0_10px_20px_-10px_rgba(216,154,43,0.6)] hover:bg-[#C28930] hover:-translate-y-0.5 transition-all">
              Request Consultation
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#D89A2B] font-bold">→</span>
            </button>
          </div>

          {/* Right Column: Unified Scene (55%) */}
          <div className="relative w-full lg:w-[55%] aspect-square max-w-[800px] mx-auto mt-12 lg:mt-0 flex items-center justify-center">
            
            {/* Circular Platform base */}
            <div className="absolute bottom-[8%] w-[85%] h-[15%] rounded-[100%] border border-[#E8DCC4] bg-gradient-to-t from-[#FDF8EE] to-transparent opacity-80" />
            <div className="absolute bottom-[3%] w-[65%] h-6 rounded-[100%] bg-[#D89A2B] blur-[30px] opacity-15" />

            {/* Guard Booth (100% scale, Bottom-left) */}
            <IllustrationItem 
              service={guardhouse} 
              className="absolute left-[2%] bottom-[12%] w-[42%] z-20"
              animation={{ y: [0, -2, 0], transition: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
              hoverId={hoverId} setHoverId={setHoverId} onClick={openService}
            />

            {/* Barrier Gate (75% scale, Right of booth) */}
            <IllustrationItem 
              service={gate} 
              className="absolute left-[38%] bottom-[12%] w-[28%] z-15"
              animation={{ rotateZ: [0, 1.5, -1, 0], transition: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
              hoverId={hoverId} setHoverId={setHoverId} onClick={openService}
            />

            {/* Scanner (65% scale, slightly front) */}
            <IllustrationItem 
              service={scanner} 
              className="absolute left-[47%] bottom-[8%] w-[18%] z-30"
              animation={{ opacity: [1, 0.85, 1], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
              hoverId={hoverId} setHoverId={setHoverId} onClick={openService}
            />

            {/* Dashboard (100% scale, Bottom-right) */}
            <IllustrationItem 
              service={dashboard} 
              className="absolute right-[2%] bottom-[12%] w-[48%] z-20"
              animation={{ y: [0, -4, 0], transition: { repeat: Infinity, duration: 8, ease: "easeInOut" } }}
              hoverId={hoverId} setHoverId={setHoverId} onClick={openService}
            />

            {/* Security Camera (85% scale, Upper-right, floating) */}
            <IllustrationItem 
              service={camera} 
              className="absolute right-[12%] top-[15%] w-[25%] z-10"
              animation={{ y: [0, -10, 0], rotateZ: [-2, 2, -2], transition: { repeat: Infinity, duration: 7, ease: "easeInOut" } }}
              hoverId={hoverId} setHoverId={setHoverId} onClick={openService}
            />

          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-16 w-full mx-auto max-w-6xl rounded-3xl bg-[#FFFDF9] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] p-6 lg:p-8 border border-[#F0E6D2]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#F0E6D2]">
            <BottomStripItem icon="🛡️" title="Comprehensive Security Solutions" desc="End-to-end protection tailored to your needs." />
            <BottomStripItem icon="👥" title="Experienced Professionals" desc="Skilled experts ensuring reliable security outcomes." />
            <BottomStripItem icon="📈" title="Advanced Technology" desc="Leveraging smart systems for proactive protection." />
            <BottomStripItem icon="🤝" title="Client-Focused Approach" desc="Your safety is our priority, always." />
          </div>
        </div>
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

function Cloud({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" className={`absolute pointer-events-none ${className}`}>
      <path
        d="M20 30 Q5 30 10 18 Q12 8 25 12 Q30 2 45 8 Q60 0 68 12 Q88 8 88 24 Q95 30 80 32 Z"
        fill="white"
        stroke="var(--ink)"
        strokeWidth="2"
      />
    </svg>
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
              className="rounded-full border-2 border-[#2F2924] bg-white px-4 py-2 text-sm font-bold shadow-[2px_2px_0_#2F2924] disabled:opacity-40"
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
                className="rounded-full border-2 border-[#2F2924] bg-[#D49837] px-5 py-2 text-sm font-bold text-white shadow-[2px_2px_0_#2F2924] hover:-translate-y-0.5 transition-transform"
              >
                Go deeper →
              </button>
            ) : (
              <button
                onClick={onClose}
                className="rounded-full border-2 border-[#2F2924] bg-[#D49837] px-5 py-2 text-sm font-bold text-white shadow-[2px_2px_0_#2F2924]"
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

function BottomStripItem({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="flex gap-4 px-4 items-start">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] bg-[#FDF5E6] text-[#D49837]">
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <h4 className="font-display text-sm font-bold text-[#2F2924]">{title}</h4>
        <p className="mt-1.5 text-xs text-[#6C6359] leading-relaxed pr-2">{desc}</p>
      </div>
    </div>
  );
}

function IllustrationItem({ service, className, animation, hoverId, setHoverId, onClick }: any) {
  const isHover = hoverId === service.id;
  return (
    <motion.button
      animate={animation}
      onMouseEnter={() => setHoverId(service.id)}
      onMouseLeave={() => setHoverId(null)}
      onClick={() => onClick(service)}
      className={`group cursor-pointer focus:outline-none ${className}`}
      aria-label={service.title}
    >
      <div className="relative w-full h-full">
        {/* Contact shadow */}
        <div className="absolute -bottom-[2%] left-1/2 w-[50%] h-[15%] -translate-x-1/2 rounded-[100%] bg-black opacity-[0.08] blur-md transition-opacity duration-300 group-hover:opacity-[0.03]" />
        
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-500"
          style={{
            boxShadow: isHover
              ? "0 0 0 8px color-mix(in oklab, #D89A2B 20%, transparent), 0 30px 60px -10px color-mix(in oklab, #D89A2B 40%, transparent)"
              : "0 0 0 0 transparent",
            transform: isHover ? "scale(1.05)" : "scale(1)",
          }}
        />
        
        {/* Image */}
        <motion.img
          src={service.img}
          alt={service.title}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-auto select-none transition-transform duration-500 group-hover:-translate-y-2"
          style={{
            filter: isHover
              ? "drop-shadow(0 20px 25px rgba(216,154,43,0.15)) brightness(1.05) saturate(1.05)"
              : hoverId 
                ? "drop-shadow(0 8px 15px rgba(0,0,0,0.04)) grayscale(50%) opacity(0.5)"
                : "drop-shadow(0 12px 20px rgba(0,0,0,0.08))",
          }}
          draggable={false}
        />
        
        {/* Tooltip chip */}
        <div
          className="absolute left-1/2 top-[102%] -translate-x-1/2 whitespace-nowrap transition-all duration-300 pointer-events-none"
          style={{
            opacity: isHover ? 1 : 0,
            transform: `translate(-50%, ${isHover ? "0px" : "-8px"})`,
          }}
        >
          <span className="inline-block rounded-full border border-[#F0E6D2] bg-white/95 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-[#D89A2B] shadow-[0_8px_16px_-4px_rgba(216,154,43,0.15)]">
            {service.title}
          </span>
        </div>
      </div>
    </motion.button>
  );
}
