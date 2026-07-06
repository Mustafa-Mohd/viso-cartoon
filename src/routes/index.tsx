import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Hero from "@/components/Hero";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import VisoIntro from "@/components/VisoIntro";
import { stages } from "@/data/framework";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VISO — Physical Security Consultancy" },
      {
        name: "description",
        content:
          "VISO — where security meets peace of mind. Physical security consultancy headquartered in Riyadh with five offices across Saudi Arabia.",
      },
      { property: "og:title", content: "VISO — Physical Security Consultancy" },
      {
        property: "og:description",
        content:
          "Safeguarding critical assets across the Kingdom through integrated security consulting, design and engineering.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <VisoIntro />
      <CursorGlow />
      <SiteHeader />
      <Hero />
      <WhatIsViso />
      <Intro />
      <FrameworkPreview />
      <HighlightsGrid />
      <SiteFooter />
    </main>
  );
}

function WhatIsViso() {
  const steps = [
    {
      n: "01",
      icon: "🔍",
      title: "We study your site",
      body: "Threats, assets and vulnerabilities — mapped against HCIS (SAIS) and international standards.",
    },
    {
      n: "02",
      icon: "✏️",
      title: "We design the protection",
      body: "From perimeter to control room — drawings, specs and equipment schedules your contractors can build.",
    },
    {
      n: "03",
      icon: "⚙️",
      title: "We engineer the systems",
      body: "CCTV, access control, intrusion detection, barriers — integrated into one calm operations picture.",
    },
    {
      n: "04",
      icon: "✅",
      title: "We hand it over ready",
      body: "Testing, commissioning, training and authority approval — so your site opens the day it should.",
    },
  ];

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="toon-chip inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold-deep)]">
            VISO in one minute
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">
            What does VISO actually do?
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            In simple words — we make sure the important places stay safe. We plan, design, build and
            hand over the security of factories, plants, offices and critical national sites across
            the Kingdom.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 180, damping: 20 }}
              whileHover={{ y: -6 }}
              className="toon-card group relative h-full overflow-hidden p-6"
            >
              <div className="pointer-events-none absolute right-2 top-2 font-display text-6xl font-bold text-[#D89A2B]/20 transition-all group-hover:text-[#D89A2B]/40 group-hover:scale-110 origin-top-right">
                {s.n}
              </div>
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--gold-soft)] text-2xl shadow-toon-sm">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <div aria-hidden className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-[var(--gold-deep)] lg:block">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



/** Soft golden glow that follows the cursor — adds tactile interactivity. */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.transform = `translate3d(${cx - 180}px, ${cy - 180}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[360px] w-[360px] rounded-full opacity-60 mix-blend-multiply md:block"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--gold) 50%, transparent) 0%, transparent 65%)",
        filter: "blur(20px)",
      }}
    />
  );
}

function Intro() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <span className="toon-chip inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold-deep)]">
          VISO · Physical Security Consultancy
        </span>
        <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">
          Where security meets peace of mind.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-[var(--muted-foreground)]">
          Founded in 2020 and headquartered in Riyadh, VISO delivers tailored security solutions
          across five offices in the Kingdom — aligned with national authorities and the highest
          international benchmarks.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/about" className="rounded-full bg-[var(--gold-deep)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_var(--gold-deep)] transition-transform hover:-translate-y-0.5">
            About VISO →
          </Link>
          <Link to="/services" className="rounded-full border border-[var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--gold)]">
            Explore Services
          </Link>
        </div>
      </div>

    </section>
  );
}

function FrameworkPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-toon px-6 py-24">
      <motion.div
        style={{ x }}
        className="pointer-events-none absolute -top-10 right-0 font-display text-[18vw] font-bold leading-none text-[var(--gold-soft)]"
      >
        FRAMEWORK
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="toon-chip inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--gold-deep)]">
              Our Four-Stage Framework
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              From risk to operational readiness.
            </h2>
          </div>
          <Link
            to="/services"
            className="rounded-full border-2 border-[var(--ink)] bg-[var(--gold-deep)] px-5 py-2.5 text-sm font-semibold text-white shadow-toon-sm transition-transform hover:-translate-y-0.5"
          >
            See full framework →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <StageMini key={s.id} number={s.number} title={s.title} short={s.short} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StageMini({
  number,
  title,
  short,
  index,
}: {
  number: string;
  title: string;
  short: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(el, {
        rotateY: x * 8,
        rotateX: -y * 8,
        duration: 0.4,
        transformPerspective: 800,
      });
    };
    const onLeave = () => gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.5 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 180, damping: 18 }}
    >
      <div
        ref={ref}
        className="toon-card group relative h-full p-6 hover:shadow-glow"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-5xl font-bold text-[var(--gold-deep)]">{number}</span>
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[var(--ink)] bg-[var(--gold-soft)] text-sm transition-transform group-hover:rotate-12">
            ★
          </span>
        </div>
        <h3 className="mt-4 font-display text-lg font-bold leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">{short}</p>
        <Link
          to="/services"
          hash={number}
          className="mt-5 inline-flex text-sm font-semibold text-[var(--gold-deep)]"
        >
          Learn more →
        </Link>
      </div>
    </motion.div>
  );
}

const HIGHLIGHTS = [
  {
    label: "Consulting",
    title: "End-to-end security advisory",
    body: "HCIS (SAIS) qualified consultants guiding industrial & military-industry projects to operational approval under GAMI.",
    to: "/consulting" as const,
    icon: "🛡️",
  },
  {
    label: "Knowledge Centre",
    title: "Standards that ground our work",
    body: "ANSI/API 780, ANSI/ASIS/RIMS RA.1-2015, HCIS SEC legislation — the references we apply on every project.",
    to: "/knowledge-centre" as const,
    icon: "📚",
  },
  {
    label: "Specialized Domains",
    title: "Nuclear & radioactive facilities",
    body: "Physical security design for power plants and waste treatment centers — critical assets, critical attention.",
    to: "/services" as const,
    icon: "☢️",
  },
  {
    label: "Our Clients",
    title: "Trusted across the Kingdom",
    body: "From oil & gas titans to mega projects — we've designed the security spine for the names you know.",
    to: "/our-clients" as const,
    icon: "🤝",
  },
];

function HighlightsGrid() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="toon-chip inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold-deep)]">
            Explore VISO
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">
            Pick a thread, follow it deep.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, type: "spring", stiffness: 160 }}
              whileHover={{ y: -8 }}
              className="toon-card group relative overflow-hidden p-8"
            >
              <div className="flex items-start gap-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--gold-soft)] text-3xl shadow-toon-sm transition-transform group-hover:rotate-6 group-hover:scale-110">
                  {h.icon}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-deep)]">
                    {h.label}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold">{h.title}</h3>
                  <p className="mt-2 text-[var(--muted-foreground)]">{h.body}</p>
                  <Link
                    to={h.to}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[var(--ink)] bg-white px-4 py-2 text-sm font-semibold shadow-toon-sm transition-transform hover:-translate-y-0.5"
                  >
                    Learn more
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
