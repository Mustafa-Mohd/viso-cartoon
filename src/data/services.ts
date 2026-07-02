import camera from "@/assets/hotspot-camera.png";
import gate from "@/assets/hotspot-gate.png";
import guard from "@/assets/hotspot-guardhouse.png";
import finger from "@/assets/hotspot-fingerprint.png";
import control from "@/assets/hotspot-control.png";

export type ServiceLayer = {
  title: string;
  body: string;
  bullets?: string[];
};

export type Service = {
  id: string;
  title: string;
  tagline: string;
  img: string;
  /** Hero position as percentage of container (top-left origin of the image). */
  pos: { x: number; y: number; w: number };
  layers: ServiceLayer[];
};

export const services: Service[] = [
  {
    id: "cctv",
    title: "CCTV & Video Analytics",
    tagline: "Eyes that never blink.",
    img: camera,
    pos: { x: 50, y: 8, w: 18 },
    layers: [
      {
        title: "CCTV & Video Analytics",
        body: "AI-driven surveillance that watches, learns, and alerts — across every corner of your site.",
        bullets: ["AI Surveillance", "Intelligent Video Analytics", "ANPR", "Behavior Detection"],
      },
      {
        title: "How we deploy it",
        body: "Vendor-neutral camera selection, network design, and analytics tuning calibrated to your threat model.",
        bullets: ["Camera placement studies", "Edge + cloud analytics", "Integration with SOC dashboards"],
      },
      {
        title: "Compliance & standards",
        body: "Designed to align with HCIS / SAIS surveillance requirements and global best practices.",
      },
    ],
  },
  {
    id: "gate",
    title: "Perimeter & Barriers",
    tagline: "Hold the line, gracefully.",
    img: gate,
    pos: { x: 28, y: 38, w: 17 },
    layers: [
      {
        title: "Perimeter Security",
        body: "Layered physical protection — from the fence line to the front door.",
        bullets: ["Fences", "Crash Rated Barriers", "Bollards", "Gates", "Anti-Ram Protection"],
      },
      {
        title: "Engineering & design",
        body: "Full security architecture, BOQs, technical specs, and authority approvals.",
        bullets: ["Security Engineering Drawings", "Bill of Quantities", "Cost Estimation", "Authority Approvals"],
      },
    ],
  },
  {
    id: "guardhouse",
    title: "Physical Infrastructure",
    tagline: "Built like a fortress, looks like a home.",
    img: guard,
    pos: { x: 6, y: 36, w: 19 },
    layers: [
      {
        title: "Physical Security Infrastructure",
        body: "We design every brick of your security envelope.",
        bullets: [
          "Security Barriers & Gates",
          "Guard Houses",
          "Ballistic Resistant Buildings",
          "Security Control Centers",
          "Security Lighting",
          "Vehicle & Baggage Screening",
        ],
      },
      {
        title: "Project supervision",
        body: "Stage 1–4 supervision including review, certification, site supervision, commissioning, and handover.",
      },
    ],
  },
  {
    id: "access",
    title: "Access Control",
    tagline: "The right people, the right door, the right second.",
    img: finger,
    pos: { x: 60, y: 42, w: 14 },
    layers: [
      {
        title: "Access Control",
        body: "Friction-free entry for the trusted, an immovable wall for everyone else.",
        bullets: ["Biometric Systems", "Card Access", "Multi-factor Authentication"],
      },
      {
        title: "Intrusion detection",
        body: "Motion and perimeter sensors with 24/7 alarm monitoring.",
        bullets: ["Motion Sensors", "Perimeter Sensors", "Alarm Monitoring"],
      },
      {
        title: "Documentation",
        body: "Policies, SOPs, training docs, and compliance bundles — ready for audit.",
      },
    ],
  },
  {
    id: "soc",
    title: "Security Operations Center",
    tagline: "One screen. Total awareness.",
    img: control,
    pos: { x: 78, y: 30, w: 20 },
    layers: [
      {
        title: "Centralized Security Management",
        body: "A unified operations platform tying every sensor, camera, and door into a single, calm view.",
        bullets: ["Unified Security Ops Platform", "Monitoring", "Reporting", "Mass Notification"],
      },
      {
        title: "Consultancy & advisory",
        body: "We plan it before we build it.",
        bullets: [
          "Security Master Planning",
          "Security Risk Assessment (ISO 31000, API 780, ASIS, HCIS)",
          "Emergency Response Planning",
          "Audits & Readiness Reviews",
        ],
      },
      {
        title: "Environmental monitoring",
        body: "Fire detection, gas leak detection, and environmental sensors — integrated into the same console.",
      },
    ],
  },
];
