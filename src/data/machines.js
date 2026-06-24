// Helper to slugify a machine name into a URL-safe segment, e.g. "W200 FI" -> "w200-fi"
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// CATEGORIES — top-level groupings shown on the Machines listing page and as nav filters.
// `image` is a placeholder path per category (used on listing cards before real photos are added).
export const CATEGORIES = [
  {
    key: "milling",
    label: "Road Milling Machines",
    shortLabel: "Milling Machines",
    icon: "⚙️",
    image: "/images/categories/milling-machines.jpg",
  },
  {
    key: "stabilizer",
    label: "Soil Stabilizers & Recyclers",
    shortLabel: "Soil Stabilizers",
    icon: "🏗️",
    image: "/images/categories/soil-stabilizers.jpg",
  },
  {
    key: "paver",
    label: "Slipform Pavers",
    shortLabel: "Slipform Pavers",
    icon: "🛣️",
    image: "/images/categories/slipform-pavers.jpg",
  },
  {
    key: "other",
    label: "Other Equipment",
    shortLabel: "Other Equipment",
    icon: "🔧",
    image: "/images/categories/other-equipment.jpg",
  },
];

// MACHINES — flat list, one entry per rentable model. Each has:
// - category: matches a CATEGORIES[].key
// - brand: manufacturer name
// - name: model name/number
// - slug: unique URL segment for the detail page (/machines/:slug)
// - image: placeholder path — replace with real photo once client provides it
// - specs: small key facts shown on detail page (left blank/approximate where unknown — flag for client)
export const MACHINES = [
  // ---- Road Milling Machines : Wirtgen ----
  ...["W35 DC", "W100 HR", "W100 HP", "W120 FI", "W130 CF", "W150 FI", "W155 CF", "W200 FI", "W2000i", "WXP 200"].map(
    (model) => ({
      category: "milling",
      brand: "Wirtgen",
      name: model,
      slug: slugify(`wirtgen-${model}`),
      image: `/images/machines/wirtgen-${slugify(model)}.jpg`,
      tagline: "Cold milling machine for road rehabilitation",
    })
  ),
  // ---- Road Milling Machines : SANY ----
  ...["SCM 1000C-8", "SCM 1300C-8", "SCM 2000C-8", "SCM 2000-10"].map((model) => ({
    category: "milling",
    brand: "SANY",
    name: model,
    slug: slugify(`sany-${model}`),
    image: `/images/machines/sany-${slugify(model)}.jpg`,
    tagline: "Cold milling machine for road rehabilitation",
  })),

  // ---- Soil Stabilizers & Recyclers : Wirtgen ----
  {
    category: "stabilizer",
    brand: "Wirtgen",
    name: "WR210 Cold Recycler & Stabilizer",
    slug: slugify("wirtgen-WR210-cold-recycler-stabilizer"),
    image: "/images/machines/wirtgen-wr210.jpg",
    tagline: "Cold recycling and soil stabilization in one machine",
  },
  {
    category: "stabilizer",
    brand: "Wirtgen",
    name: "WR240 Soil Stabilizer",
    slug: slugify("wirtgen-WR240-soil-stabilizer"),
    image: "/images/machines/wirtgen-wr240.jpg",
    tagline: "Heavy-duty soil stabilization for base layers",
  },
  {
    category: "stabilizer",
    brand: "Wirtgen",
    name: "SP94 Soil Stabilizer & Reclaimer",
    slug: slugify("wirtgen-SP94-soil-stabilizer-reclaimer"),
    image: "/images/machines/wirtgen-sp94-stabilizer.jpg",
    tagline: "Full-depth reclamation and stabilization",
  },
  // ---- Soil Stabilizers : Bomag ----
  {
    category: "stabilizer",
    brand: "Bomag",
    name: "Soil Stabilizer",
    slug: slugify("bomag-soil-stabilizer"),
    image: "/images/machines/bomag-soil-stabilizer.jpg",
    tagline: "Soil stabilization for road base projects",
  },
  // ---- Soil Stabilizers : XCMG ----
  {
    category: "stabilizer",
    brand: "XCMG",
    name: "Soil Stabilizer",
    slug: slugify("xcmg-soil-stabilizer"),
    image: "/images/machines/xcmg-soil-stabilizer.jpg",
    tagline: "Soil stabilization for road base projects",
  },

  // ---- Slipform Pavers : Wirtgen ----
  ...["SP62", "SP64", "SP94", "SP500", "SP1200", "SP1600"].map((model) => ({
    category: "paver",
    brand: "Wirtgen",
    name: model,
    slug: slugify(`wirtgen-${model}-paver`),
    image: `/images/machines/wirtgen-${slugify(model)}-paver.jpg`,
    tagline: "Slipform paver for concrete road construction",
  })),

  // ---- Other Equipment : Wirtgen ----
  {
    category: "other",
    brand: "Wirtgen",
    name: "Screw Master",
    slug: slugify("wirtgen-screw-master"),
    image: "/images/machines/wirtgen-screw-master.jpg",
    tagline: "Material transfer vehicle for paving trains",
  },
  {
    category: "other",
    brand: "Wirtgen",
    name: "15 Ton Roller C119",
    slug: slugify("wirtgen-15-ton-roller-c119"),
    image: "/images/machines/wirtgen-roller-c119.jpg",
    tagline: "Compaction roller for finished surfaces",
  },
  // ---- Other Equipment : Accessories ----
  {
    category: "other",
    brand: "Accessories",
    name: "Cement Spreader",
    slug: slugify("accessories-cement-spreader"),
    image: "/images/machines/cement-spreader.jpg",
    tagline: "Even cement distribution for stabilization work",
  },
  {
    category: "other",
    brand: "Accessories",
    name: "FDR Machine",
    slug: slugify("accessories-fdr-machine"),
    image: "/images/machines/fdr-machine.jpg",
    tagline: "Full Depth Reclamation equipment",
  },
];

// Convenience: machines grouped by category key, derived from MACHINES (kept in sync automatically).
export const MACHINES_BY_CATEGORY = CATEGORIES.reduce((acc, cat) => {
  acc[cat.key] = MACHINES.filter((m) => m.category === cat.key);
  return acc;
}, {});

export const KEYWORDS = [
  "Wirtgen Milling Machine on Rent",
  "Road Milling Machine on Rent",
  "Cold Road Milling on Rent",
  "Bitumen Road Milling Machine on Rent",
  "Soil Stabilizer Machine on Rent",
  "FDR Machine on Rent",
  "Reclaimer on Rent",
  "Asphalt Paver Machine on Rent",
  "WR210 Cold Recycler on Rent",
  "Slipform Paver on Rent",
];

export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Machines", path: "/machines" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const TICKER_ITEMS = [
  "Wirtgen Milling Machine on Rent",
  "Road Milling Machine Rental",
  "Soil Stabilizer on Rent",
  "Slipform Paver Rental",
  "Cold Recycler on Rent",
  "Bomag Stabilizer on Rent",
  "FDR Machine on Rent",
  "Asphalt Paver Machine Rent",
];

export const SERVICES = [
  { icon: "⚙️", title: "Milling Machine Rental", desc: "Wirtgen & SANY road milling machines available for rent at best market rates across India." },
  { icon: "🏗️", title: "Soil Stabilization", desc: "WR210, WR240, Bomag & XCMG stabilizers for full-depth reclamation and base stabilization projects." },
  { icon: "🛣️", title: "Slipform Paving", desc: "Wirtgen slipform pavers SP62 to SP1600 for concrete road paving with zero compromise on quality." },
  { icon: "♻️", title: "Cold Recycling", desc: "Wirtgen cold recyclers for in-place recycling of asphalt pavement — cost-effective & sustainable." },
  { icon: "📐", title: "FDR Services", desc: "Full Depth Reclamation machines and soil stabilizers for road base rehabilitation projects." },
  { icon: "🔧", title: "Operator + Transport", desc: "Experienced operators and full logistics support included with all machine rentals." },
];

export const COVERAGE_STATES = [
  "Chhattisgarh",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Jharkhand",
  "Uttar Pradesh",
  "+ All India",
];
