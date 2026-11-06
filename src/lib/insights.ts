export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Insight = {
  slug: string;
  kind: "Guide" | "Company news";
  topic: string;
  title: string;
  summary: string;
  readingTime: string;
  body: Block[];
  sources?: { label: string; href: string }[];
};

export const insights: Insight[] = [
  {
    slug: "understanding-iso-19650",
    kind: "Guide",
    topic: "Standards",
    title: "Understanding ISO 19650: a practical introduction",
    summary:
      "What the ISO 19650 series covers, how its parts fit together and where organisations usually start.",
    readingTime: "7 min read",
    body: [
      { type: "p", text: "ISO 19650 is the international series of standards for managing information over the whole life cycle of a built asset using building information modelling. It grew out of the UK's 1192 suite and is now the common reference point for BIM requirements across the UK, Ireland and many other markets." },
      { type: "p", text: "Despite its reputation, the series is less about software and more about clarity: who needs what information, when, in what form, and how it will be checked before it is shared." },
      { type: "h2", text: "How the parts fit together" },
      { type: "ul", items: [
        "**Part 1 — Concepts and principles.** The vocabulary and framework: information requirements, the Common Data Environment, appointing and appointed parties.",
        "**Part 2 — Delivery phase.** The processes for managing information during design and construction, from assessment and need through to project close-out.",
        "**Part 3 — Operational phase.** How asset information is specified, collected and maintained while an asset is in use.",
        "**Part 4 — Information exchange.** Criteria for reviewing and accepting information when it moves between parties.",
        "**Part 5 — Security-minded approach.** Protecting sensitive information about assets and the people who use them.",
      ] },
      { type: "h2", text: "The thread that runs through it: requirements" },
      { type: "p", text: "Almost everything in ISO 19650 flows from defining requirements well. Organisational Information Requirements (OIR) describe what an organisation needs to make decisions. These cascade into Asset Information Requirements (AIR), Project Information Requirements (PIR) and Exchange Information Requirements (EIR) that are issued to the supply chain." },
      { type: "p", text: "When requirements are vague, teams over-deliver information nobody uses — or under-deliver the data operations teams actually need. When they are clear, the rest of the process becomes far more straightforward." },
      { type: "h2", text: "Where organisations usually start" },
      { type: "ul", items: [
        "Assess current practice honestly against the standard, rather than against assumptions.",
        "Agree a consistent approach to naming, information states and approvals in a CDE.",
        "Develop reusable templates for BIM Execution Plans and responsibility matrices.",
        "Train the people who will actually produce and check information.",
        "Apply the process to a live project, learn from it and refine.",
      ] },
      { type: "p", text: "Adopting ISO 19650 is a journey rather than a single event. The organisations that succeed tend to treat it as a better way of running projects — not as paperwork to satisfy a tender." },
    ],
  },
  {
    slug: "practical-bim-adoption",
    kind: "Guide",
    topic: "Adoption",
    title: "Making BIM business as usual: practical adoption for real teams",
    summary:
      "Why BIM programmes stall, and the people-and-process habits that help digital working stick.",
    readingTime: "6 min read",
    body: [
      { type: "p", text: "Many construction businesses have invested in BIM software, training and documentation — yet still find that digital processes only appear on the projects that demand them. Making BIM business as usual means closing the gap between what is written down and what happens day to day." },
      { type: "h2", text: "Why adoption stalls" },
      { type: "ul", items: [
        "Processes are written for compliance rather than for the people using them.",
        "Training happens once and is not reinforced on live work.",
        "Leadership sees BIM as a technical function rather than a business capability.",
        "Success is measured by documents produced instead of decisions improved.",
      ] },
      { type: "h2", text: "Habits that make it stick" },
      { type: "p", text: "Start small and visible. Choose one project, one workflow or one recurring problem — such as late coordination or poor handover data — and solve it properly. A tangible improvement builds momentum far faster than a comprehensive manual." },
      { type: "p", text: "Make standards easy to follow. Templates, naming tools and short checklists embedded in daily tools do more for consistency than long policy documents." },
      { type: "p", text: "Invest in people continuously. Short, practical learning tied to current projects keeps skills fresh and builds a shared vocabulary across teams." },
      { type: "h2", text: "Measuring progress" },
      { type: "p", text: "Useful indicators are practical: how quickly teams can find the current information, how many issues are resolved before site, and how complete handover data is at practical completion. These are the signs that digital working has become simply the way the business works." },
    ],
  },
  {
    slug: "common-data-environments-explained",
    kind: "Guide",
    topic: "Information management",
    title: "Common Data Environments explained",
    summary:
      "Work in progress, shared, published, archived — what a CDE really is and how to make one work.",
    readingTime: "6 min read",
    body: [
      { type: "p", text: "A Common Data Environment (CDE) is the agreed source of information for a project or asset, used to collect, manage and share information through a managed process. Importantly, a CDE is a combination of technology and workflow — the platform alone is not the CDE." },
      { type: "h2", text: "The four information states" },
      { type: "ul", items: [
        "**Work in progress** — information being developed by a task team, not yet visible to others.",
        "**Shared** — information checked and made available to other teams for coordination.",
        "**Published** — information authorised for use, for example for construction or for handover.",
        "**Archived** — a record of information exchanges and changes kept for the life of the project or asset.",
      ] },
      { type: "h2", text: "What makes a CDE work" },
      { type: "ul", items: [
        "A consistent container naming convention and metadata, agreed before work starts.",
        "Clear status and revision codes that everyone understands.",
        "Defined check, review and approve steps between states.",
        "Permissions that reflect responsibilities in the information delivery plan.",
        "Regular information quality reviews, not just at stage gates.",
      ] },
      { type: "h2", text: "Common pitfalls" },
      { type: "p", text: "The most common problem is treating the CDE as a file store. When folders replace states and email replaces workflows, teams lose confidence in what is current. A short configuration plan and practical onboarding usually make more difference than switching platforms." },
    ],
  },
  {
    slug: "digital-handover-asset-information",
    kind: "Guide",
    topic: "Asset information",
    title: "Digital handover: getting asset information right",
    summary:
      "How clear requirements, COBie and early planning give operations teams information they can use.",
    readingTime: "5 min read",
    body: [
      { type: "p", text: "Handover is the moment project information becomes asset information. Too often it arrives as a large set of PDFs that operations teams struggle to use. Digital handover aims to deliver structured, checked data that feeds directly into maintenance and asset management." },
      { type: "h2", text: "Start with the end user" },
      { type: "p", text: "The best handover specifications begin with the people who will operate the asset. What do they need to maintain, inspect, replace or report on? Those needs become Asset Information Requirements and shape what the project team is asked to deliver." },
      { type: "h2", text: "The role of COBie" },
      { type: "p", text: "COBie (Construction Operations Building information exchange) is a widely used, non-proprietary schema for exchanging asset data such as spaces, systems, components and maintenance information. It is not the only option, but it provides a consistent structure that can be checked and imported into many systems." },
      { type: "h2", text: "Plan handover from day one" },
      { type: "ul", items: [
        "Define asset information requirements before appointing the supply chain.",
        "Agree classification, naming and data templates early.",
        "Collect data progressively rather than at the end of the project.",
        "Check data quality at each information exchange.",
        "Align with the receiving system and team before practical completion.",
      ] },
      { type: "p", text: "ISO 19650-3 provides the framework for managing information during the operational phase, closing the loop between the asset owner's needs and what projects deliver." },
    ],
  },
  {
    slug: "bim-readiness-gap-analysis",
    kind: "Guide",
    topic: "Readiness",
    title: "BIM readiness: knowing where you actually stand",
    summary:
      "A practical way to assess information-management maturity before buying more software or writing more policy.",
    readingTime: "6 min read",
    body: [
      { type: "p", text: "BIM readiness is not a software checklist. It is a picture of how reliably an organisation can specify, produce, check and use information — on the projects it actually delivers, not only on the ones written into a capability statement." },
      { type: "h2", text: "What a useful assessment looks at" },
      { type: "ul", items: [
        "Whether information requirements are defined, or only implied in tenders.",
        "How consistently naming, revisions and approvals are applied in the CDE.",
        "Whether BIM Execution Plans are used on live work, or stored after mobilisation.",
        "How design, construction and handover information is reviewed before it is shared.",
        "Whether the people producing information have been trained in the processes they are asked to follow.",
      ] },
      { type: "h2", text: "Gap analysis without theatre" },
      { type: "p", text: "The most useful gap analyses compare current practice with ISO 19650 principles and with the organisation's own commercial goals. They produce a short, prioritised list — not a 60-page maturity model that nobody returns to." },
      { type: "p", text: "Typical early gaps include unclear exchange information requirements, CDE workflows that are folders in disguise, and handover data that is assembled at the end of a project rather than collected as work proceeds." },
      { type: "h2", text: "What to do with the findings" },
      { type: "ul", items: [
        "Fix the two or three gaps that affect live projects first.",
        "Create reusable templates before writing more policy.",
        "Train the roles that will operate the process, not only the BIM lead.",
        "Re-test on a live project and record what changed.",
      ] },
      { type: "p", text: "Readiness is a baseline, not a destination. The organisations that improve fastest treat each project as evidence — and adjust the process accordingly." },
    ],
  },
  {
    slug: "immersive-technology-in-construction",
    kind: "Guide",
    topic: "Technology",
    title: "Immersive technology: when VR, AR and reality capture actually help",
    summary:
      "A proportionate view of laser scanning, visualisation and immersive review — focused on decisions, not novelty.",
    readingTime: "5 min read",
    body: [
      { type: "p", text: "Laser scanning, 360° capture, virtual reality and augmented reality can be powerful — and they can also become expensive demonstrations that never change a decision. The difference is whether the technology is tied to a real information need." },
      { type: "h2", text: "Where reality capture earns its place" },
      { type: "ul", items: [
        "Recording existing conditions before refurbishment or retrofit.",
        "Checking constructed work against design intent.",
        "Creating a spatial record for assets that are difficult to access again.",
        "Giving remote stakeholders a shared view of a site or building.",
      ] },
      { type: "h2", text: "Where immersive review helps" },
      { type: "p", text: "VR and immersive walkthroughs are most useful when non-technical stakeholders need to understand a proposal, or when spatial clashes and operational issues are hard to read from 2D drawings. They are less useful as a substitute for a well-run coordination process." },
      { type: "h2", text: "A practical adoption sequence" },
      { type: "ul", items: [
        "Define the decision the capture or visualisation is meant to support.",
        "Specify the accuracy, coverage and deliverable format before mobilising a survey.",
        "Agree how the output will be stored, named and used in the CDE.",
        "Train the people who will interrogate the data, not only those who capture it.",
      ] },
      { type: "p", text: "Used this way, immersive technology becomes another information source in the project — connected to models, the CDE and, eventually, the asset record — rather than a one-off visualisation." },
    ],
  },
  {
    slug: "origin7-2026-award-wins",
    kind: "Company news",
    topic: "Recognition",
    title: "Origin7 recognised at two major 2026 industry awards",
    summary:
      "Winner of Professional Services Partner of the Year and Consultancy of the Year — Micro.",
    readingTime: "2 min read",
    body: [
      { type: "p", text: "Origin7 was named a winner at two industry award programmes in 2026, as listed in the official announcements published by the award organisers." },
      { type: "ul", items: [
        "**Building Innovation Awards 2026** — Winner, Professional Services Partner of the Year.",
        "**Irish Construction Industry Awards 2026** — Winner, Consultancy of the Year — Micro.",
      ] },
      { type: "p", text: "The awards recognise Origin7's work helping organisations across Northern Ireland and Ireland adopt practical BIM, information management and digital construction processes." },
    ],
    sources: [
      { label: "Building Innovation Awards — 2026 winners", href: "https://buildinginnovationawards.co.uk/2026-winners/" },
      { label: "Irish Construction Industry Awards — shortlist & results", href: "https://constructionawards.ie/shortlist" },
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
