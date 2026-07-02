export type Stage = {
  id: string;
  number: string;
  title: string;
  short: string;
  body: string;
  deliverables: string[];
};

export const stages: Stage[] = [
  {
    id: "sra",
    number: "01",
    title: "Security Risk Assessment (SRA)",
    short: "Identify critical assets, threats, risks and vulnerabilities.",
    body:
      "Identifies critical assets, threats, risks, and vulnerabilities in compliance with applicable HCIS SEC legislation and recognized international standards (ANSI/API 780, ANSI/ASIS/RIMS RA.1-2015). Defines the physical security elements, components, and their installation through relevant drawings, and establishes the concept for security policies, procedures, and training.",
    deliverables: [
      "Security Risk Assessment Report",
      "Concept of Design (COD) with attached drawings",
      "Concept for Security Organization, Policy & Procedures Manual",
      "Training Plan development",
    ],
  },
  {
    id: "pd",
    number: "02",
    title: "Preliminary Design (PD)",
    short: "Detail the security system, human interface and procedures.",
    body:
      "Provides adequate details of the security system, the human interface, and the procedures, including the equipment identification schedule and the security contractor's scope of work (SOW).",
    deliverables: [
      "Design Criteria & Physical Security Infrastructure (PSI)",
      "System Design Document (SDD) with schematic & geographic drawings",
      "Scope of Work (SOW) and Equipment Identification Schedule",
      "Waiver Requests Section",
    ],
  },
  {
    id: "dd",
    number: "03",
    title: "Detail Design (DD)",
    short: "Review contractor design for HCIS (SAIS) compliance.",
    body:
      "Reviews the contractor's detailed design and documentation for compliance with HCIS (SAIS) requirements before construction.",
    deliverables: [
      "Stamping and certification of the complete Stage Three design package",
      "Stage Three Design Review",
      "Design compliance audit report",
    ],
  },
  {
    id: "or",
    number: "04",
    title: "Operational Readiness",
    short: "Testing, commissioning, training and handover.",
    body:
      "Monitors the testing and commissioning of security systems, the implementation of policies and procedures, and the completion of security personnel training.",
    deliverables: [
      "Commissioning oversight",
      "Policy & procedure implementation review",
      "Security personnel training completion",
      "Operational approval handover",
    ],
  },
];
