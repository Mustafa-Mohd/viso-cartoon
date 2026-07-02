import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/consulting")({
  head: () => ({
    meta: [
      { title: "Consulting — VISO" },
      {
        name: "description",
        content:
          "HCIS (SAIS) qualified security consulting for industrial and military-industry projects under GAMI.",
      },
    ],
  }),
  component: ConsultingPage,
});

const pillars = [
  {
    title: "HCIS (SAIS) Qualification",
    body: "Securing operational approval for industrial and military-industry projects under GAMI.",
    icon: "🛡️",
  },
  {
    title: "International Standards",
    body: "Compliance with ANSI/API 780 and ANSI/ASIS/RIMS RA.1-2015 in every assessment.",
    icon: "📐",
  },
  {
    title: "End-to-End Advisory",
    body: "From risk assessment to commissioning — one consultant, four stages, zero gaps.",
    icon: "🧭",
  },
  {
    title: "Specialized Domains",
    body: "Nuclear, radioactive waste, power plants and other high-consequence facilities.",
    icon: "☢️",
  },
];

function ConsultingPage() {
  return (
    <main className="min-h-screen bg-toon">
      <SiteHeader />
      <section className="px-6 pb-12 pt-16 md:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="toon-chip inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold-deep)]">
            Consulting
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold md:text-6xl">
            Security advisory, engineered for approval.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-[var(--muted-foreground)]">
            We pair regulatory fluency with engineering discipline. Whether you're greenfielding a
            petrochemical complex or hardening a military-industry facility, we walk every stage
            with you — from risk assessment to operational readiness.
          </p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 180 }}
              whileHover={{ y: -6, rotate: 0.6 }}
              className="toon-card p-7"
            >
              <div className="text-4xl">{p.icon}</div>
              <h3 className="mt-3 font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 text-[var(--muted-foreground)]">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="toon-card flex flex-col items-center gap-5 p-10 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h3 className="font-display text-2xl font-bold md:text-3xl">
                See the four-stage framework
              </h3>
              <p className="mt-2 text-[var(--muted-foreground)]">
                Every deliverable, mapped end-to-end.
              </p>
            </div>
            <Link
              to="/services"
              className="rounded-full border-2 border-[var(--ink)] bg-[var(--gold-deep)] px-6 py-3 font-semibold text-white shadow-toon-sm transition-transform hover:-translate-y-0.5"
            >
              Open the framework →
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
