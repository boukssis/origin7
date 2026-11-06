export type Industry = {
  id: string;
  number: string;
  title: string;
  audience: string;
  intro: string;
  needs: string[];
  services: string[];
  visual: "building" | "infrastructure" | "asset" | "public" | "transform";
};

export const industries: Industry[] = [
  {
    id: "building-construction",
    number: "01",
    title: "Building & Construction",
    audience: "For contractors, architects, engineers and design teams.",
    intro:
      "Building projects bring many organisations together under tight programmes. Clear information requirements, coordinated models and an agreed CDE workflow help teams design and build with fewer surprises.",
    needs: [
      "Responding to BIM and ISO 19650 tender requirements",
      "Coordinating multi-disciplinary design models",
      "Mobilising supply chains on shared processes",
      "Reducing late clashes and site rework",
    ],
    services: ["bim-project-delivery", "common-data-environments", "digital-construction-technology"],
    visual: "building",
  },
  {
    id: "civil-engineering-infrastructure",
    number: "02",
    title: "Civil Engineering & Infrastructure",
    audience: "For infrastructure information coordination and digital delivery.",
    intro:
      "Linear and networked assets generate large volumes of geospatial and engineering data. Structured information management keeps that data usable across long programmes and many stakeholders.",
    needs: [
      "Managing geospatial and model information together",
      "Reality capture of existing infrastructure",
      "Consistent information exchange across packages",
      "Preparing asset data for long-term operation",
    ],
    services: ["bim-strategy-iso-19650", "laser-scanning-immersive-technology", "asset-information-digital-handover"],
    visual: "infrastructure",
  },
  {
    id: "asset-owners-operators",
    number: "03",
    title: "Asset Owners & Operators",
    audience: "For asset data, handover and lifecycle information management.",
    intro:
      "Most of an asset's whole-life cost sits in operation. Defining what information you need — and checking you receive it — turns handover from a document dump into a usable asset record.",
    needs: [
      "Defining organisational and asset information requirements",
      "Specifying COBie and digital O&M deliverables",
      "Improving the quality of existing asset data",
      "Connecting project data to asset management systems",
    ],
    services: ["asset-information-digital-handover", "bim-strategy-iso-19650", "project-support-advisory"],
    visual: "asset",
  },
  {
    id: "public-sector-delivery",
    number: "04",
    title: "Public Sector Project Delivery",
    audience: "For organisations navigating BIM and information requirements on public projects.",
    intro:
      "Public clients across the UK and Ireland increasingly set BIM and information management expectations. Understanding those requirements early helps both clients and suppliers deliver compliant, valuable information.",
    needs: [
      "Interpreting client information requirements",
      "Preparing compliant BIM Execution Plans",
      "Evidencing capability for frameworks and tenders",
      "Supporting procurement information on the client side",
    ],
    services: ["bim-strategy-iso-19650", "audit-review-certification-readiness", "project-support-advisory"],
    visual: "public",
  },
  {
    id: "digital-transformation",
    number: "05",
    title: "Digital Transformation",
    audience: "For construction businesses modernising information workflows.",
    intro:
      "Transformation is less about software and more about people, process and information. A staged, practical approach makes digital ways of working stick — and makes BIM business as usual.",
    needs: [
      "Benchmarking current digital maturity",
      "Building a realistic transformation roadmap",
      "Upskilling teams with practical training",
      "Embedding new workflows into daily practice",
    ],
    services: ["audit-review-certification-readiness", "digital-construction-technology", "bim-strategy-iso-19650"],
    visual: "transform",
  },
];
