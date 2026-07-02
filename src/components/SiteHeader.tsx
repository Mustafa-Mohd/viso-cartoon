import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/knowledge-centre", label: "Knowledge" },
  { to: "/our-clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
] as const;

const LOGO_URL =
  "https://res.cloudinary.com/dcefror3c/image/upload/v1782911668/Luxurious_black_and_gold_logo_design_kjv4np.png";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--cream)]/90 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="VISO"
            className="h-11 w-11 rounded-full object-contain transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105"
            draggable={false}
          />
          <div className="leading-tight">
            <div className="font-display text-xl font-bold tracking-tight">VISO</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--gold-deep)]">
              Physical Security Consultancy
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((n) => (
            <NavItem key={n.to} to={n.to} label={n.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="hidden rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-sm font-medium text-[var(--foreground)]/80 md:inline-flex hover:border-[var(--gold)]"
            aria-label="Switch language"
          >
            العربية
          </button>
          <Link
            to="/contact"
            className="group relative overflow-hidden rounded-full bg-[var(--gold-deep)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_22px_-8px_var(--gold-deep)] transition-transform hover:-translate-y-0.5"
          >
            <span className="relative z-10">Request Consultation</span>
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  const underlineRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const path = underlineRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
  }, []);

  const onEnter = () => {
    if (underlineRef.current) {
      gsap.to(underlineRef.current, { strokeDashoffset: 0, duration: 0.45, ease: "power2.out" });
    }
    if (dotRef.current) {
      gsap.fromTo(
        dotRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(2)" },
      );
    }
    if (labelRef.current) {
      gsap.fromTo(
        labelRef.current,
        { y: 0 },
        { y: -2, duration: 0.25, ease: "power2.out" },
      );
    }
  };

  const onLeave = () => {
    if (underlineRef.current) {
      const len = underlineRef.current.getTotalLength();
      gsap.to(underlineRef.current, {
        strokeDashoffset: len,
        duration: 0.35,
        ease: "power2.in",
      });
    }
    if (dotRef.current) {
      gsap.to(dotRef.current, { scale: 0, opacity: 0, duration: 0.2 });
    }
    if (labelRef.current) {
      gsap.to(labelRef.current, { y: 0, duration: 0.25, ease: "power2.out" });
    }
  };

  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "text-[var(--gold-deep)]" }}
      inactiveProps={{ className: "text-[var(--foreground)]/85" }}
      className="relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-[var(--gold-deep)]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <span ref={dotRef} className="pointer-events-none absolute -left-0.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--gold-deep)] opacity-0" />
      <span ref={labelRef} className="relative inline-block align-middle">
        {label}
      </span>
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-1 left-3.5 right-3.5 h-1.5"
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
      >
        <path
          ref={underlineRef}
          d="M2 3 Q 25 0.5, 50 3 T 98 3"
          stroke="var(--gold-deep)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </Link>
  );
}
