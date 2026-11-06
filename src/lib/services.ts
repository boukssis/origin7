export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  challenge: string;
  support: string;
  activities: string[];
  deliverables: string[];
  value: string;
  useCases: string[];
  standards: string[];
};

export const services: Service[] = [
  {
    id: "bim-strategy-iso-19650",
    number: "01",
    title: "BIM Strategy & ISO 19650",
    short: "Information management strategies aligned to ISO 19650, built around how your business actually works.",
    challenge:
      "Many organisations know BIM is expected of them but lack a clear, standards-aligned plan. Requirements arrive project by project, processes vary between teams and the gap between policy and practice keeps widening.",
    support:
      "Origin7 helps define a practical BIM and information management strategy, interpret the ISO 19650 series in plain terms and embed processes your people can follow on live projects.",
    activities: [
      "BIM implementation strategy and roadmap",
      "ISO 19650 information management guidance",
      "Gap assessment against current practice",
      "Information requirements (OIR, AIR, PIR, EIR)",
      "BIM execution planning",
      "BIM process implementation and documentation",
      "Certification readiness support",
    ],
    deliverables: ["Strategy & roadmap", "Gap assessment report", "Process documentation", "Information requirements templates"],
    value:
      "A coherent approach that reduces rework, makes tender responses stronger and gives teams the confidence to deliver information consistently.",
    useCases: [
      "A contractor preparing to respond to ISO 19650-aligned tenders",
      "A design practice standardising BIM processes across offices",
      "An organisation preparing for external certification assessment",
    ],
    standards: ["ISO 19650-1", "ISO 19650-2", "UK BIM Framework"],
  },
  {
    id: "bim-project-delivery",
    number: "02",
    title: "BIM Project Delivery",
    short: "Hands-on mobilisation, coordination and information management on live projects.",
    challenge:
      "On live projects, information management often slips under programme pressure. Mobilisation is rushed, BIM Execution Plans become shelf documents and coordination issues surface late on site.",
    support:
      "Origin7 supports project teams from mobilisation through delivery — setting up processes properly, coordinating design teams and the supply chain, and keeping information flowing to plan.",
    activities: [
      "BIM mobilisation and onboarding",
      "Project information management",
      "BIM Execution Plans (pre- and post-appointment)",
      "Model coordination and clash detection processes",
      "Design team coordination",
      "Supply-chain BIM support",
      "Project information audits",
    ],
    deliverables: ["BIM Execution Plan", "Responsibility matrix", "Coordination workflow", "Audit findings"],
    value:
      "Fewer coordination surprises, clearer responsibilities and project information that is fit for purpose at every stage gate.",
    useCases: [
      "A main contractor mobilising BIM on a new public-sector scheme",
      "A design team needing an independent information manager",
      "A supply chain partner adapting to a client's BIM requirements",
    ],
    standards: ["ISO 19650-2", "BS EN 17412-1 (LOIN)"],
  },
  {
    id: "common-data-environments",
    number: "03",
    title: "Common Data Environments",
    short: "CDE strategy, setup and governance so the right information reaches the right people.",
    challenge:
      "Shared folders and email attachments make it hard to know which information is current. Without agreed states, naming and approval routes, a CDE becomes just another file store.",
    support:
      "Origin7 helps plan, configure and govern Common Data Environments around ISO 19650 principles — work in progress, shared, published and archived — tailored to your platform and project needs.",
    activities: [
      "CDE strategy and platform requirements",
      "CDE setup and implementation",
      "Information exchange and approval workflows",
      "File naming, metadata and governance",
      "Document control processes",
      "Collaboration workflows across organisations",
      "Information quality reviews",
    ],
    deliverables: ["CDE configuration plan", "Naming & metadata standard", "Workflow maps", "Quality review checklist"],
    value:
      "A single trusted source of project information, cleaner audit trails and less time spent searching for the latest revision.",
    useCases: [
      "An organisation moving from shared drives to a structured CDE",
      "A project team aligning several companies on one workflow",
      "An asset owner setting CDE expectations for its supply chain",
    ],
    standards: ["ISO 19650-1", "ISO 19650-2", "CDE workflow"],
  },
  {
    id: "digital-construction-technology",
    number: "04",
    title: "Digital Construction Technology",
    short: "Practical modelling, coordination and automation workflows across common BIM software.",
    challenge:
      "Software is often bought before workflows are defined. Teams end up with powerful tools used in isolation, manual data re-entry and inconsistent model outputs.",
    support:
      "Origin7 helps teams make better use of established BIM tools — shaping modelling, coordination and visualisation workflows, and identifying sensible opportunities for automation and integration.",
    activities: [
      "Digital workflow design",
      "Modelling process standards",
      "Revit-based BIM workflows",
      "Navisworks coordination workflows",
      "Automation opportunity reviews",
      "Construction software integration",
      "Digital visualisation",
    ],
    deliverables: ["Workflow definitions", "Modelling standards", "Automation shortlist", "Tool adoption guidance"],
    value:
      "More value from existing software investment, consistent models and teams spending time on decisions rather than data wrangling.",
    useCases: [
      "A practice standardising Revit templates and outputs",
      "A contractor building a repeatable Navisworks coordination routine",
      "A business reviewing which manual steps could be automated",
    ],
    standards: ["IFC (ISO 16739)", "Open BIM"],
  },
  {
    id: "laser-scanning-immersive-technology",
    number: "05",
    title: "Laser Scanning & Immersive Technology",
    short: "Reality capture, geospatial data and VR/AR applied where they genuinely help.",
    challenge:
      "Existing conditions are frequently unknown or poorly recorded, and stakeholders struggle to understand proposals from 2D drawings alone.",
    support:
      "Origin7 helps organisations adopt reality capture, laser scanning, geospatial technologies and immersive VR/AR in a practical, proportionate way — focusing on real decisions rather than novelty.",
    activities: [
      "Reality capture planning",
      "Laser scanning workflows",
      "Geospatial technology adoption",
      "Virtual reality design reviews",
      "Augmented reality on site",
      "Digital visualisation and 360° capture",
      "Technology adoption guidance",
    ],
    deliverables: ["Capture specification", "Point-cloud workflow", "Immersive review set-up", "Adoption plan"],
    value:
      "Better knowledge of existing conditions, clearer stakeholder engagement and fewer surprises when design meets reality.",
    useCases: [
      "Capturing an existing building ahead of refurbishment",
      "Running an immersive design review with non-technical stakeholders",
      "Recording progress on site with 3D and 360° capture",
    ],
    standards: ["E57", "Point cloud", "360°"],
  },
  {
    id: "asset-information-digital-handover",
    number: "06",
    title: "Asset Information & Digital Handover",
    short: "Structured asset data and digital O&M information that operations teams can use.",
    challenge:
      "Handover information too often arrives late, incomplete or in formats operations teams cannot use — leaving owners to rebuild asset data at significant cost.",
    support:
      "Origin7 helps define asset information requirements, structure COBie and O&M deliverables and connect project information to the asset management systems that follow.",
    activities: [
      "Asset Information Requirements (AIR)",
      "BIM data for operations",
      "Digital O&M information",
      "COBie specification and checking",
      "Asset information quality reviews",
      "ISO 19650-3 operational-phase support",
      "Handover process design",
    ],
    deliverables: ["AIR definition", "COBie / data templates", "Handover plan", "Data quality report"],
    value:
      "Reliable, structured asset information from day one of operation — supporting maintenance, compliance and lifecycle decisions.",
    useCases: [
      "An estates team specifying handover data for new buildings",
      "A contractor preparing compliant COBie deliverables",
      "An owner improving the quality of existing asset records",
    ],
    standards: ["ISO 19650-3", "COBie", "BS 8536"],
  },
  {
    id: "audit-review-certification-readiness",
    number: "07",
    title: "Audit, Review & Certification Readiness",
    short: "Independent maturity reviews and preparation for external ISO 19650 assessment.",
    challenge:
      "Organisations pursuing ISO 19650 certification often don't know how close they are, which evidence assessors expect or where processes fall short in practice.",
    support:
      "Origin7 reviews BIM maturity and information management processes, runs internal audits and helps prepare for assessment by an accredited certification body. Origin7 does not issue certification itself.",
    activities: [
      "BIM maturity review",
      "Process gap analysis",
      "Information management assessments",
      "Internal audits",
      "ISO standard implementation support",
      "External certification readiness support",
    ],
    deliverables: ["Maturity baseline", "Gap analysis", "Internal audit report", "Readiness action plan"],
    value:
      "A clear, evidence-based picture of where you stand and a prioritised route to being assessment-ready.",
    useCases: [
      "A business preparing for its first ISO 19650 certification audit",
      "A firm reviewing maturity ahead of a framework bid",
      "An internal audit before a surveillance visit",
    ],
    standards: ["ISO 19650 series", "Internal audit"],
  },
  {
    id: "project-support-advisory",
    number: "08",
    title: "Project Support & Advisory",
    short: "Strategic digital construction advice and Project Support Office capability when you need it.",
    challenge:
      "Clients and project teams sometimes need experienced information management advice without building a permanent in-house function.",
    support:
      "Origin7 provides flexible advisory and Project Support Office capacity — aligning stakeholders, guiding procurement information and coordinating project teams around clear information management objectives.",
    activities: [
      "Project Support Office",
      "Strategic digital construction support",
      "Stakeholder alignment",
      "Procurement information guidance",
      "Information management advisory",
      "Project team coordination",
    ],
    deliverables: ["Advisory sessions", "Procurement information inputs", "Stakeholder workshops", "PSO support"],
    value:
      "Experienced guidance on demand, better-informed procurement and project teams aligned from the outset.",
    useCases: [
      "A client defining BIM requirements for a new procurement",
      "A programme needing temporary information management support",
      "A leadership team shaping its digital construction priorities",
    ],
    standards: ["ISO 19650-1", "Procurement"],
  },
];

export const featuredServiceIds = [
  "bim-strategy-iso-19650",
  "bim-project-delivery",
  "common-data-environments",
  "digital-construction-technology",
  "asset-information-digital-handover",
  "audit-review-certification-readiness",
];

export const serviceOptions = [...services.map((s) => s.title), "Training & Digital Academy", "Not sure yet"];
