import { Link } from "@tanstack/react-router";

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-[var(--ink)] bg-toon">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-bold">VISO</h3>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Physical Security Consultancy · Riyadh
          </p>
          <p className="mt-4 max-w-md text-sm text-[var(--muted-foreground)]">
            Where security meets peace of mind — safeguarding critical assets across the Kingdom,
            from five regional offices, aligned with national authorities and international
            benchmarks.
          </p>

        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-[var(--gold-deep)]">
            Explore
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-[var(--gold-deep)]">About</Link></li>
            <li><Link to="/services" className="hover:text-[var(--gold-deep)]">Services</Link></li>
            <li><Link to="/knowledge-centre" className="hover:text-[var(--gold-deep)]">Knowledge Centre</Link></li>
            <li><Link to="/our-clients" className="hover:text-[var(--gold-deep)]">Our Clients</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--gold-deep)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-[var(--gold-deep)]">
            Contact
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="mailto:hello@viso.sa" className="hover:text-[var(--gold-deep)]">hello@viso.sa</a></li>
            <li className="text-[var(--muted-foreground)]">Riyadh · Khobar · Jubail · Jeddah · Yanbu</li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-[var(--ink)] bg-white/40 py-4 text-center text-xs text-[var(--muted-foreground)]">
        © {new Date().getFullYear()} VISO. All Rights Reserved.
      </div>

    </footer>
  );
}
