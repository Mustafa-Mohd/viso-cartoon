import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VISO" },
      { name: "description", content: "Request a security consultation with VISO." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="min-h-screen bg-toon">
      <SiteHeader />
      <section className="px-6 pb-16 pt-16 md:pt-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <span className="toon-chip inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold-deep)]">
              Contact
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold md:text-5xl">
              Request a consultation.
            </h1>
            <p className="mt-4 text-[var(--muted-foreground)]">
              Tell us a little about your project — we'll come back within one business day with a
              consultant and a path through HCIS (SAIS) approval.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[var(--ink)] bg-[var(--gold-soft)]">📞</span>
                <a href="tel:+966554544995" className="font-semibold hover:text-[var(--gold-deep)]">+966 (0) 554-544995</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[var(--ink)] bg-[var(--gold-soft)]">✉️</span>
                <a href="mailto:info@visogroup.com" className="font-semibold hover:text-[var(--gold-deep)]">info@visogroup.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[var(--ink)] bg-[var(--gold-soft)]">📍</span>
                <span>Riyadh · Jeddah · Dammam</span>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="toon-card space-y-4 p-8"
          >
            {sent ? (
              <div className="py-10 text-center">
                <div className="text-5xl">✅</div>
                <h3 className="mt-4 font-display text-2xl font-bold">Thank you.</h3>
                <p className="mt-2 text-[var(--muted-foreground)]">
                  We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <>
                <Field label="Full name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Company" name="company" />
                <div>
                  <label className="text-sm font-semibold">Project brief</label>
                  <textarea
                    name="brief"
                    rows={4}
                    className="mt-1 w-full rounded-2xl border-2 border-[var(--ink)] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full border-2 border-[var(--ink)] bg-[var(--gold-deep)] px-6 py-3 font-semibold text-white shadow-toon-sm transition-transform hover:-translate-y-0.5"
                >
                  Send request →
                </button>
              </>
            )}
          </motion.form>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-1 w-full rounded-full border-2 border-[var(--ink)] bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-[var(--gold)]"
      />
    </div>
  );
}
