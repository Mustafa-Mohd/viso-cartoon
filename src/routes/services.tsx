import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { createFileRoute, Link } from "@tanstack/react-router";
import { stages } from "@/data/framework";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — VISO Security Consulting Framework" },
      {
        name: "description",
        content:
          "HCIS (SAIS) operational approval through four mandatory stages: SRA, Preliminary Design, Detail Design and Operational Readiness.",
      },
      { property: "og:title", content: "VISO Services" },
      {
        property: "og:description",
        content: "Qualifying projects for HCIS (SAIS) operational approval.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="min-h-screen bg-toon">
      <SiteHeader />
      <Hero />
      <Framework />
      <Specialized />
      <DesignEng />
      <CTA />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-16 md:pt-24">
      <div className="mx-auto max-w-5xl text-center">
        <span className="toon-chip inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold-deep)]">
          Security Consulting Framework
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl"
        >
          Qualifying Projects for{" "}
          <span className="relative inline-block">
            <span className="relative z-10">HCIS (SAIS)</span>
            <svg className="absolute -bottom-2 left-0 h-3 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M2 8 Q 50 2, 100 7 T 198 6" stroke="var(--gold)" strokeWidth="6" strokeLinecap="round" fill="none" />
            </svg>
          </span>{" "}
          Operational Approval
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-[var(--muted-foreground)]"
        >
          We are a security consulting firm qualified by the HCIS (now the Supreme Authority for
          Industrial Security, SAIS), securing operational approval for industrial and
          military-industry projects under GAMI through four mandatory stages.
        </motion.p>
      </div>
    </section>
  );
}

function Framework() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

  return (
    <section ref={ref} className="relative px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-[var(--gold-soft)] md:block" />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-[var(--gold-deep)] md:block"
          />

          <div className="space-y-8">
            {stages.map((s, i) => (
              <StageCard key={s.id} stage={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StageCard({ stage, index }: { stage: (typeof stages)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(el, {
        rotateY: x * 6,
        rotateX: -y * 6,
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 900,
      });
    };
    const onLeave = () =>
      gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.5, ease: "power2.out" });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: index * 0.05 }}
      className="relative md:pl-24"
    >
      {/* Marker */}
      <motion.div
        whileInView={{ scale: [0, 1.2, 1], rotate: [0, 20, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        className="absolute left-0 top-2 hidden h-16 w-16 place-items-center rounded-full border-2 border-[var(--ink)] bg-[var(--gold-deep)] font-display text-xl font-bold text-white shadow-toon md:grid"
      >
        {stage.number}
      </motion.div>

      <div
        ref={cardRef}
        className="toon-card p-7 md:p-9 transition-shadow hover:shadow-glow"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-baseline gap-3 md:hidden">
          <span className="rounded-full border-2 border-[var(--ink)] bg-[var(--gold-deep)] px-2.5 py-0.5 font-display text-sm font-bold text-white">
            {stage.number}
          </span>
        </div>
        <h3 className="mt-2 font-display text-2xl font-bold md:mt-0 md:text-3xl">
          Stage {Number(stage.number)}: {stage.title}
        </h3>
        <p className="mt-2 text-base font-medium text-[var(--gold-deep)]">{stage.short}</p>
        <p className="mt-4 text-[var(--muted-foreground)]">{stage.body}</p>

        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--gold-deep)]">
            Deliverables
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
            {stage.deliverables.map((d, i) => (
              <motion.li
                key={d}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-2 rounded-2xl border-2 border-[var(--ink)] bg-[var(--gold-soft)] px-3 py-2 text-sm font-medium"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--gold-deep)] text-[10px] text-white">
                  ✓
                </span>
                {d}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function Specialized() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="toon-card overflow-hidden p-8 md:p-12"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="toon-chip inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--gold-deep)]">
                Specialized Security Domains
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                Nuclear & radioactive facility protection.
              </h2>
              <p className="mt-4 max-w-2xl text-[var(--muted-foreground)]">
                We provide specialized physical security design for nuclear and radioactive
                facilities, including power plants and radioactive waste treatment centers —
                protecting these critical assets against security threats.
              </p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="hidden md:block"
            >
              <svg width="160" height="160" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="10" fill="var(--gold-deep)" stroke="var(--ink)" strokeWidth="3" />
                {[0, 120, 240].map((deg) => (
                  <g key={deg} transform={`rotate(${deg} 50 50)`}>
                    <path
                      d="M50 50 L35 18 A36 36 0 0 1 65 18 Z"
                      fill="var(--gold)"
                      stroke="var(--ink)"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                  </g>
                ))}
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DesignEng() {
  const items = [
    "Security Risk Assessments",
    "Gap Analyses",
    "Security Strategies",
    "Policies & Procedures Manuals",
    "Concept of Design",
    "Physical Security Infrastructure",
  ];
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="toon-chip inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--gold-deep)]">
            Security Design & Engineering
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Plans drawn with accuracy. Sites protected with conviction.
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            We analyze every factor affecting security and design plans aligned with the threats
            facing each project — ensuring the full protection of sites and facilities.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ y: -6, rotate: 1.5 }}
              className="toon-card flex items-center gap-3 p-5"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-[var(--ink)] bg-[var(--gold-deep)] text-white">
                ★
              </div>
              <p className="font-semibold">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 pb-20 pt-6">
      <div className="mx-auto max-w-5xl">
        <div className="toon-card flex flex-col items-center gap-5 p-10 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Ready to qualify your project?
            </h3>
            <p className="mt-2 text-[var(--muted-foreground)]">
              Talk to our consultants about your HCIS (SAIS) approval timeline.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-full border-2 border-[var(--ink)] bg-[var(--gold-deep)] px-6 py-3 font-semibold text-white shadow-toon-sm transition-transform hover:-translate-y-0.5"
          >
            Request Consultation →
          </Link>
        </div>
      </div>
    </section>
  );
}
