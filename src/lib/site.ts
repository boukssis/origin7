export const site = {
  name: "Origin7",
  legalName: "Origin7 Ltd",
  tagline: "BIM & Digital Construction Consultancy",
  description:
    "Origin7 is an award-winning BIM and digital construction consultancy serving Northern Ireland and Ireland — ISO 19650 information management, BIM strategy, Common Data Environments, digital handover and training.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  founded: 2020,
  region: "Northern Ireland & Ireland",
  location: "Magherafelt, County Londonderry",
  email: "melanie.dawson@origin7.co.uk",
  linkedin: "https://www.linkedin.com/company/origin7-limited/",
  founderLinkedin: "https://uk.linkedin.com/in/melanie-dawson-fice-a6010b48",
  academy: "https://www.origin7digital.com/",
  academyCourses: "https://www.origin7digital.com/courses",
  academyAbout: "https://www.origin7digital.com/about-us",
  investNiBoard: "https://www.investni.com/about-us/our-board",
  motto: "Let's make BIM business as usual.",
};

export const appointments = [
  { org: "Origin7 Ltd", role: "Founder & Managing Director" },
  { org: "Origin7 Digital Academy", role: "Founder & Director" },
  { org: "Invest Northern Ireland", role: "Non-executive board member", href: "https://www.investni.com/about-us/our-board" },
  { org: "Strategic Investment Board for Northern Ireland", role: "Associate advisor" },
  { org: "BuildData Group", role: "Non-executive board member" },
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/approach", label: "Our Approach" },
  { href: "/about", label: "About" },
  { href: "/academy", label: "Academy" },
  { href: "/insights", label: "Insights" },
] as const;

export const awards = [
  {
    year: 2026,
    programme: "Building Innovation Awards",
    category: "Professional Services Partner of the Year",
    result: "Winner",
    source: "https://buildinginnovationawards.co.uk/2026-winners/",
  },
  {
    year: 2026,
    programme: "Irish Construction Industry Awards",
    category: "Consultancy of the Year — Micro",
    result: "Winner",
    source: "https://constructionawards.ie/shortlist",
  },
] as const;
