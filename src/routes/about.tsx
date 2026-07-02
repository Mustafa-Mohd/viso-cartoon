import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — VISO Physical Security Consultancy" },
      {
        name: "description",
        content:
          "VISO is a premier physical security consultancy founded in 2020, headquartered in Riyadh with five regional offices across Saudi Arabia.",
      },
      { property: "og:title", content: "About VISO" },
      {
        property: "og:description",
        content: "Where security meets peace of mind — safeguarding critical assets across the Kingdom.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <SiteHeader />
      <AboutHero />
      <Stats />
      <CoreValues />
      <AreasWeServe />
      <SiteFooter />
    </main>
  );
}

/* ---------- Hero ---------- */
function AboutHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--gold) 12%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--gold) 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold-deep)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-deep)]" /> About VISO
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
        >
          Where Security Meets{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #C99628 0%, #F2C744 50%, #8A5A12 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Peace of Mind
          </span>
          .
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          <p className="text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
            VISO is a premier physical security consultancy specializing in safeguarding our
            clients&apos; most valuable assets. Founded in January 2020 and headquartered in
            Riyadh, we now operate from five offices across the Kingdom — Riyadh, Khobar, Jubail,
            Jeddah and Yanbu — delivering tailored security solutions that align with national
            authorities and the highest international benchmarks.
          </p>
          <p className="text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
            Our team of seasoned experts brings decades of combined experience in security
            analysis, risk assessment, and the implementation of integrated protective measures
            across critical national infrastructure, energy, industrial, financial and government
            sectors.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */
const STATS = [
  { value: "2020", label: "Established" },
  { value: "5", label: "Regional Offices" },
  { value: "92+", label: "Projects Delivered" },
  { value: "52.53%", label: "Local Content" },
];

function Stats() {
  return (
    <section className="px-6 pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 divide-x divide-y divide-[var(--border)] overflow-hidden rounded-3xl border border-[var(--border)] bg-white md:grid-cols-4 md:divide-y-0">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative p-8 transition-colors hover:bg-[var(--gold-soft)]/40"
            >
              <div
                className="font-display text-4xl font-bold tracking-tight md:text-5xl"
                style={{
                  background: "linear-gradient(180deg, #C99628 0%, #8A5A12 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                {s.label}
              </div>
              <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-[var(--gold)] opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Core Values (Zamil-style layout) ---------- */
const VALUES = [
  {
    title: "Honesty & Integrity",
    body: "Our guiding philosophy revolves around honesty, integrity and professionalism. Through our goodwill, we endeavor to leave a good reputation, while we remain prudent and fair in dealing with our stakeholders.",
    Icon: HandshakeIcon,
  },
  {
    title: "Client Excellence",
    body: "VISO thrives to fully understand its clients' needs, allowing for satisfactory fulfilment. The quality of our services bears true witness to our prompt attentiveness and effort in every engagement.",
    Icon: MedalIcon,
  },
  {
    title: "Leadership & Prudence",
    body: "As we build a prudent, cost-effective culture, we optimize the use of funds, resources, materials, and technologies. The talents we build generate market value and the leadership we foster transmits these elements to our clients.",
    Icon: TrophyIcon,
  },
  {
    title: "Innovation & Change",
    body: "VISO is an organization in constant progress, ever learning to innovate, embrace positive change and praiseworthy aspirations. We learn from experience to march forward with global best practices and locally inspired standards.",
    Icon: SparkIcon,
  },
];

function CoreValues() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--gold-deep)]">
            <span className="h-1 w-1 rounded-full bg-[var(--gold-deep)]" /> 01 — Values
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C99628 0%, #F2C744 50%, #8A5A12 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Core Values
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
            VISO is guided by principles instilled at founding. The four pillars we adhere to:
          </p>
          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-[var(--gold-deep)]" />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <ValueCard key={v.title} v={v} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  v,
  i,
}: {
  v: (typeof VALUES)[number];
  i: number;
}) {
  const { Icon } = v;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-7 transition-shadow hover:shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--gold-deep)_45%,transparent)]"
    >
      {/* Corner gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
      />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--gold-soft)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
        <Icon />
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-[var(--gold-deep)]">{v.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{v.body}</p>
      <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--gold-deep)]/70">
        <span>0{i + 1}</span>
        <span className="h-px flex-1 bg-[var(--border)]" />
        <span>Pillar</span>
      </div>
    </motion.div>
  );
}

/* ---------- Areas We Serve (Nudhum-style grid) ---------- */
const AREAS = [
  {
    title: "Integrated Security Systems",
    body: "Scalable turnkey physical and cyber security integrated solutions including full compliance with HCIS / SAIS directives.",
    Icon: ShieldGlobeIcon,
    tone: "gold",
    details: "We design unified platforms that converge video surveillance, access control, intrusion detection, and PSIM. Our systems are fully compliant with HCIS SEC directives, ensuring seamless communication across all security layers for real-time situational awareness.",
  },
  {
    title: "Security Risk Assessment",
    body: "Deep-dive threat, vulnerability and consequence analysis grounded in ANSI/API 780 and ANSI/ASIS/RIMS RA.1-2015.",
    Icon: RiskIcon,
    tone: "amber",
    details: "Our experts conduct comprehensive Security Risk Assessments (SRAs) and Facility Security Assessments (FSAs). We identify potential threats, evaluate existing vulnerabilities, and recommend proportionate mitigation strategies to protect critical assets.",
  },
  {
    title: "Design & Engineering",
    body: "Concept of Design through Detail Design for physical security infrastructure — plans drawn with accuracy.",
    Icon: BlueprintIcon,
    tone: "gold",
    details: "From initial Concept of Design (COD) to Issued for Construction (IFC) packages, we produce precise AutoCAD drawings, equipment schedules, and technical specifications that guide contractors in building robust physical barriers and electronic systems.",
  },
  {
    title: "Operational Readiness",
    body: "Site acceptance testing, commissioning and handover to operations — bridging design intent to daily reality.",
    Icon: GearIcon,
    tone: "amber",
    details: "We don't just design; we ensure the systems work. Our team oversees Factory Acceptance Testing (FAT), Site Acceptance Testing (SAT), and final commissioning, ensuring operators are fully trained and the facility is secure on day one.",
  },
  {
    title: "Nuclear & Radioactive",
    body: "Specialized physical security design for nuclear power plants and radioactive waste treatment centers.",
    Icon: NuclearIcon,
    tone: "gold",
    details: "Handling radioactive materials requires unparalleled security. We provide specialized consulting aligned with IAEA guidelines and national regulators (NRRC), developing stringent defense-in-depth strategies for nuclear and radiological facilities.",
  },
  {
    title: "Policies & Governance",
    body: "Security strategies, policies and procedures manuals aligned with national regulators and international benchmarks.",
    Icon: PolicyIcon,
    tone: "amber",
    details: "Strong security relies on strong governance. We draft comprehensive Security Concept of Operations (CONOPS), standard operating procedures (SOPs), and crisis management plans that establish a clear culture of security within your organization.",
  },
];

function AreasWeServe() {
  const [activeArea, setActiveArea] = useState<(typeof AREAS)[number] | null>(null);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      {/* soft backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--gold-soft) 90%, transparent) 0%, transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--cream)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--gold-deep)]">
            <span className="h-1 w-1 rounded-full bg-[var(--gold-deep)]" /> 02 — Capabilities
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Areas{" "}
            <span className="text-[var(--muted-foreground)] font-medium">We Serve</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
            Ready to drive resilience and readiness with VISO&apos;s expert consultancy — from
            fenceline to the SOC.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => (
            <AreaCard key={a.title} a={a} i={i} onClick={() => setActiveArea(a)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeArea && (
          <AreaModal area={activeArea} onClose={() => setActiveArea(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function AreaCard({ a, i, onClick }: { a: (typeof AREAS)[number]; i: number; onClick: () => void }) {
  const { Icon } = a;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative text-center flex flex-col items-center"
    >
      <div className="relative mx-auto mb-6 h-24 w-24">
        {/* animated blob */}
        <motion.div
          aria-hidden
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          animate={{ rotate: [0, 8, -6, 0] }}
          transition={{ rotate: { duration: 8 + i, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute inset-0 rounded-[42%_58%_60%_40%/45%_45%_55%_55%]"
          style={{
            background:
              a.tone === "gold"
                ? "linear-gradient(135deg, #F2C744 0%, #C99628 100%)"
                : "linear-gradient(135deg, #FDE8B0 0%, #F2C744 100%)",
            opacity: 0.9,
          }}
        />
        <div className="relative flex h-full w-full items-center justify-center">
          <Icon />
        </div>
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight">{a.title}</h3>
      <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-[var(--muted-foreground)]">
        {a.body}
      </p>
      <button 
        onClick={onClick}
        className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[var(--ink)] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-widest shadow-toon-sm transition-transform hover:-translate-y-1 hover:bg-[var(--gold-soft)]"
      >
        Learn more →
      </button>
    </motion.div>
  );
}

function AreaModal({ area, onClose }: { area: (typeof AREAS)[number]; onClose: () => void }) {
  const { Icon } = area;
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
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="toon-card relative z-50 w-full max-w-lg p-8 md:p-10 text-center"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-[var(--gold-soft)] text-lg hover:rotate-90 transition-transform"
        >
          ✕
        </button>
        <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--gold-soft)] shadow-toon-sm">
          <Icon />
        </div>
        <h3 className="font-display text-3xl font-bold">{area.title}</h3>
        <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed text-left">
          {area.details}
        </p>
        <button
          onClick={onClose}
          className="mt-8 rounded-full border-2 border-[var(--ink)] bg-[var(--gold-deep)] px-8 py-3 text-sm font-semibold text-white shadow-toon-sm transition-transform hover:-translate-y-0.5"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ==============================
   SVG ICONS — hand-drawn, gold
   ============================== */

const stroke = { stroke: "var(--ink)", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 48 48" width="34" height="34">
      <path d="M6 22 L14 14 L22 20 L18 26 Z" {...stroke} fill="white" />
      <path d="M42 22 L34 14 L26 20 L30 26 Z" {...stroke} fill="white" />
      <path d="M18 26 C 22 30, 26 30, 30 26" {...stroke} />
      <path d="M22 20 L28 20" {...stroke} />
      <circle cx="14" cy="14" r="1.6" fill="var(--gold-deep)" />
      <circle cx="34" cy="14" r="1.6" fill="var(--gold-deep)" />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg viewBox="0 0 48 48" width="34" height="34">
      <path d="M16 6 L20 20" {...stroke} />
      <path d="M32 6 L28 20" {...stroke} />
      <circle cx="24" cy="30" r="10" {...stroke} fill="white" />
      <path d="M24 25 L25.6 28.2 L29 28.6 L26.5 31 L27.2 34.4 L24 32.8 L20.8 34.4 L21.5 31 L19 28.6 L22.4 28.2 Z" fill="var(--gold)" stroke="var(--ink)" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 48 48" width="34" height="34">
      <path d="M14 10 H34 V18 C34 24 30 28 24 28 C18 28 14 24 14 18 Z" {...stroke} fill="white" />
      <path d="M14 12 C 8 12, 8 20, 14 20" {...stroke} />
      <path d="M34 12 C 40 12, 40 20, 34 20" {...stroke} />
      <path d="M20 28 L20 34 L28 34 L28 28" {...stroke} />
      <path d="M16 38 H32" {...stroke} />
      <path d="M24 15 L25.2 17.2 L27.6 17.5 L25.9 19.1 L26.3 21.4 L24 20.3 L21.7 21.4 L22.1 19.1 L20.4 17.5 L22.8 17.2 Z" fill="var(--gold)" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 48 48" width="34" height="34">
      <circle cx="24" cy="24" r="8" {...stroke} fill="white" />
      <path d="M24 24 L20 22 L22 26 L28 26 L24 24 Z" fill="var(--gold)" stroke="var(--ink)" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M24 6 V12" {...stroke} />
      <path d="M24 36 V42" {...stroke} />
      <path d="M6 24 H12" {...stroke} />
      <path d="M36 24 H42" {...stroke} />
      <path d="M11 11 L15 15" {...stroke} />
      <path d="M33 33 L37 37" {...stroke} />
      <path d="M37 11 L33 15" {...stroke} />
      <path d="M15 33 L11 37" {...stroke} />
    </svg>
  );
}

function ShieldGlobeIcon() {
  return (
    <svg viewBox="0 0 48 48" width="42" height="42">
      <path d="M24 6 L38 12 V24 C38 32 32 38 24 42 C16 38 10 32 10 24 V12 Z" fill="white" stroke="var(--ink)" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="7" {...stroke} />
      <path d="M17 24 H31" {...stroke} />
      <path d="M24 17 C 27 20, 27 28, 24 31" {...stroke} />
      <path d="M24 17 C 21 20, 21 28, 24 31" {...stroke} />
    </svg>
  );
}

function RiskIcon() {
  return (
    <svg viewBox="0 0 48 48" width="42" height="42">
      <path d="M24 8 L42 40 H6 Z" fill="white" stroke="var(--ink)" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M24 20 V30" {...stroke} strokeWidth="2.6" />
      <circle cx="24" cy="35" r="1.6" fill="var(--ink)" />
    </svg>
  );
}

function BlueprintIcon() {
  return (
    <svg viewBox="0 0 48 48" width="42" height="42">
      <rect x="8" y="10" width="32" height="28" rx="2" {...stroke} fill="white" strokeWidth={2.2} />
      <path d="M14 18 H28" {...stroke} />
      <path d="M14 24 H22" {...stroke} />
      <path d="M14 30 H32" {...stroke} />
      <rect x="30" y="20" width="6" height="6" fill="var(--gold)" stroke="var(--ink)" strokeWidth="1.5" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 48 48" width="42" height="42">
      <circle cx="24" cy="24" r="8" {...stroke} fill="white" strokeWidth={2.2} />
      <circle cx="24" cy="24" r="3" fill="var(--gold)" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x1 = 24 + Math.cos(a) * 12;
        const y1 = 24 + Math.sin(a) * 12;
        const x2 = 24 + Math.cos(a) * 17;
        const y2 = 24 + Math.sin(a) * 17;
        return <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} {...stroke} strokeWidth={2.4} />;
      })}
    </svg>
  );
}

function NuclearIcon() {
  return (
    <svg viewBox="0 0 48 48" width="42" height="42">
      <circle cx="24" cy="24" r="16" fill="white" stroke="var(--ink)" strokeWidth="2.2" />
      <circle cx="24" cy="24" r="3.5" fill="var(--ink)" />
      {[0, 120, 240].map((deg) => (
        <path
          key={deg}
          d="M24 24 L14 8 A18 18 0 0 1 34 8 Z"
          transform={`rotate(${deg} 24 24)`}
          fill="var(--gold)"
          stroke="var(--ink)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

function PolicyIcon() {
  return (
    <svg viewBox="0 0 48 48" width="42" height="42">
      <path d="M12 6 H32 L38 12 V42 H12 Z" fill="white" stroke="var(--ink)" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M32 6 V12 H38" {...stroke} />
      <path d="M17 22 H31" {...stroke} />
      <path d="M17 28 H31" {...stroke} />
      <path d="M17 34 H25" {...stroke} />
      <circle cx="31" cy="34" r="3" fill="var(--gold)" stroke="var(--ink)" strokeWidth="1.5" />
    </svg>
  );
}
