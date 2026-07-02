import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/knowledge-centre")({
  head: () => ({
    meta: [
      { title: "Knowledge Centre — VISO" },
      {
        name: "description",
        content:
          "Standards, references and methodologies that ground our security consulting practice.",
      },
    ],
  }),
  component: KnowledgePage,
});

const refs = [
  { tag: "Standard", title: "ANSI/API 780", body: "Security Risk Assessment Methodology for the petroleum and petrochemical industries." },
  { tag: "Standard", title: "ANSI/ASIS/RIMS RA.1-2015", body: "Risk Assessment standard adopted across our SRA deliverables." },
  { tag: "Authority", title: "HCIS / SAIS", body: "High Commission for Industrial Security — now the Supreme Authority for Industrial Security." },
  { tag: "Authority", title: "GAMI", body: "General Authority for Military Industries — oversight for military-industry projects." },
  { tag: "Domain", title: "Nuclear & Radioactive", body: "Specialized physical protection design for power plants and waste treatment centers." },
  { tag: "Method", title: "Four-Stage Framework", body: "SRA → Preliminary Design → Detail Design → Operational Readiness." },
];

function KnowledgePage() {
  return (
    <main className="min-h-screen bg-toon">
      <SiteHeader />
      <section className="px-6 pb-12 pt-16 md:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="toon-chip inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold-deep)]">
            Knowledge Centre
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold md:text-6xl">
            The standards behind every drawing.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-[var(--muted-foreground)]">
            A working library of the codes, authorities and methodologies our consultants apply on
            every project.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {refs.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: -240, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: (i % 3) * 0.12 + Math.floor(i / 3) * 0.05,
                duration: 0.9,
                type: "spring",
                stiffness: 120,
                damping: 14,
                bounce: 0.45,
              }}
              whileHover={{ y: -6, rotate: 1 }}
              className="toon-card p-6"
            >
              <span className="toon-chip inline-block px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[var(--gold-deep)]">
                {r.tag}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
