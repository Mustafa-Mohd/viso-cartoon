import { motion } from "framer-motion";
import { clients } from "@/data/clients";

export default function Clients() {
  return (
    <section id="clients" className="relative bg-toon py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="toon-chip inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold-deep)]">
            Trusted across the Kingdom
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">
            Clients who picked VISO.
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            From oil & gas titans to mega projects redrawing the map — we've designed the security spine for the names below.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: (i % 8) * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 18,
              }}
              whileHover={{ y: -6, rotate: 1.2, scale: 1.03 }}
              className="toon-card group flex flex-col items-start gap-3 p-5 transition-shadow hover:shadow-glow"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--gold-soft)] text-3xl shadow-toon-sm transition-transform group-hover:rotate-6 overflow-hidden bg-white">
                {c.logoUrl ? (
                  <img src={c.logoUrl} alt={`${c.name} logo`} className="w-full h-full object-cover" />
                ) : (
                  <span aria-hidden>{c.icon}</span>
                )}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-tight">{c.name}</h3>
                <p className="text-xs text-[var(--muted-foreground)]">{c.industry}</p>
              </div>
              <span className="mt-auto text-xs font-semibold text-[var(--gold-deep)] opacity-0 transition-opacity group-hover:opacity-100">
                Visit site →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
