// === FACTORY BOARD DATA ===
// All copy and content lives here. Photo descriptions are tight one-liners.

window.BOARD_DATA = {
  meta: {
    project: "Designing a Garment Manufacturing System",
    subtitle: "A Systems Thinking & Interaction Design Approach to Building a Women's Apparel Production Unit",
    student: "Kavya Agrawal · 2K22/BD/58",
    supervisor: "Dr. Partha Pratim Das",
    department: "Department of Design · Delhi Technological University",
    location: "Samaypur, Delhi · 5,000 sq ft",
    period: "Sep 2024 – May 2025",
    boardSize: "48 in × 36 in · 4 ft × 3 ft",
  },

  zones: [
    {
      id: "A",
      name: "Fabric &\nAccessory Store",
      stage: "01 / Procurement",
      hands: "2 procurement",
      bottleneck: "friction",
      bottleneckNote: "1500m MOQ, quality vs. quantity dilemma",
      stats: [
        ["MOQ / bolt", "1,500 m"],
        ["Bolts → styles", "1 → 5+"],
        ["Buffer", "2-week"],
      ],
      flag: "Zippers, elastic, brand-specific tags held in buffer.",
      photos: [
        { num: "A-01", cap: "fabric bolts stacked by colour and weight" },
        { num: "A-02", cap: "accessory shelves, labels, swing tags, barcodes" },
        { num: "A-03", cap: "zipper bins, sorted by length and colour" },
        { num: "A-04", cap: "elastic, lining, fusing on storage racks" },
        { num: "A-05", cap: "incoming delivery, bolts being checked in" },
      ],
    },
    {
      id: "B",
      name: "Cutting\nFloor",
      stage: "02 / Cutting",
      hands: "1 cutter\n+ 1 master",
      bottleneck: "smooth",
      bottleneckNote: "marker efficiency dictates per-piece cost",
      stats: [
        ["Cutting cost", "₹5/pc"],
        ["MOR", "90 pcs"],
        ["Buffer out", "~4,000 pcs"],
      ],
      flag: "Standing cut-piece stock decouples cutting from stitching.",
      photos: [
        { num: "B-01", cap: "fabric laid out on the long cutting table" },
        { num: "B-02", cap: "marker template being placed for marking" },
        { num: "B-03", cap: "cutting master with hand cutter, mid-cut" },
        { num: "B-04", cap: "stack of cut pieces being lifted off" },
        { num: "B-05", cap: "cut bundles tied and tagged by size" },
      ],
    },
    {
      id: "C",
      name: "Bundling\nStation",
      stage: "03 / Bundling",
      hands: "2 bundlers\n+ 1 master",
      bottleneck: "breakdown",
      bottleneckNote: "wrong brand label = critical quality fail; line master cross-checks",
      stats: [
        ["Brand SKUs", "67 active"],
        ["Spec sheets", "Per-bundle"],
        ["Brands", "DRAAX · RD · SZN · Rcode"],
      ],
      flag: "Bundling errors propagate undetected through stitching, caught only at finishing.",
      photos: [
        { num: "C-01", cap: "cut pieces being grouped by size and SKU" },
        { num: "C-02", cap: "accessory kit being added to each bundle" },
        { num: "C-03", cap: "written bundle spec sheet pinned to the bundle" },
        { num: "C-04", cap: "line master cross-checking against the PO" },
        { num: "C-05", cap: "numbered bundles ready for issue to tailors" },
      ],
    },
    {
      id: "D",
      name: "Stitching\nLines",
      stage: "04 / Production",
      hands: "22 tailors\n(2:1 OL : SNLS)",
      bottleneck: "smooth",
      bottleneckNote: "core team + fluid pool; piece-rate w/ rapid-response premium",
      stats: [
        ["Overlock : SNLS", "2 : 1"],
        ["Machines", "Jack · Juki"],
        ["Stitch (top)", "₹15–61"],
      ],
      flag: "7:30 AM start, designed around women workers' domestic schedules.",
      photos: [
        { num: "D-01", cap: "row of overlock machines, tailors at work" },
        { num: "D-02", cap: "single-needle lock-stitch line, close detail" },
        { num: "D-03", cap: "tailor receiving an issued bundle from line master" },
        { num: "D-04", cap: "completed garment placed in the out-tray" },
        { num: "D-05", cap: "line master training a new entrant" },
      ],
    },
    {
      id: "E",
      name: "Finishing\n& QC",
      stage: "05 / Finishing",
      hands: "2 finishers\n+ 1 ironer\n+ 1 QC",
      bottleneck: "friction",
      bottleneckNote: "rejections re-enter stitching loop, the 'silent' bottleneck",
      stats: [
        ["Finish cost", "₹13.75 (top)"],
        ["Finish cost", "₹16.75 (dress)"],
        ["QC station", "Pre-pack"],
      ],
      flag: "Where bundling errors finally surface, costly to remediate this late.",
      photos: [
        { num: "E-01", cap: "thread cutting at the finishing table" },
        { num: "E-02", cap: "industrial steam iron, pressing detail" },
        { num: "E-03", cap: "QC inspector checking seams and labels" },
        { num: "E-04", cap: "rejected piece tagged for re-stitching" },
        { num: "E-05", cap: "approved piece moving to packing" },
      ],
    },
    {
      id: "F",
      name: "Packing &\nLabelling",
      stage: "06 / Packing",
      hands: "2 packers",
      bottleneck: "smooth",
      bottleneckNote: "barcode/brand match verified again before bagging",
      stats: [
        ["Poly bag", "₹1.14"],
        ["Cardboard", "₹1.04"],
        ["Barcode", "₹0.50"],
      ],
      flag: "Final brand-routing checkpoint: Roadster vs DRAAX vs SZN vs Rcode.",
      photos: [
        { num: "F-01", cap: "garment being folded with cardboard insert" },
        { num: "F-02", cap: "barcode sticker applied to poly bag" },
        { num: "F-03", cap: "swing tag (Roadster / DRAAX) being attached" },
        { num: "F-04", cap: "stack of packed pieces, sorted by SKU" },
        { num: "F-05", cap: "outbound carton sealed with manifest" },
      ],
    },
    {
      id: "G",
      name: "Dispatch\n→ Myntra",
      stage: "07 / Dispatch",
      hands: "1 dispatch\n+ courier\n+ Myntra hub\n+ customer",
      bottleneck: "friction",
      bottleneckNote: "Myntra dispatch deadline drives the 6-hr commitment upstream",
      stats: [
        ["Std. response", "6 hr"],
        ["Complex dress", "8–12 hr"],
        ["Fulfilment", "100% *"],
      ],
      flag: "*100% on accepted POs. Rejections at QC silently consume the buffer.",
      photos: [
        { num: "G-01", cap: "outbound cartons stacked at the dispatch dock" },
        { num: "G-02", cap: "manifest being signed by the courier" },
        { num: "G-03", cap: "loading van, last view of the garment" },
        { num: "G-04", cap: "Myntra fulfilment hub (stock photo placeholder)" },
        { num: "G-05", cap: "the customer, the last pair of hands" },
      ],
    },
  ],

  // Hung tags pinned around the board with detail on the back
  hungTags: [
    {
      id: "T1",
      x: 90, y: 760,
      num: "TAG / 01",
      head: "5,000 sq ft",
      body: "7-zone linear flow. Storage at one end, dispatch at the other, minimises material handling distance.",
    },
    {
      id: "T2",
      x: 800, y: 760,
      num: "TAG / 02",
      head: "5 → 22",
      body: "Tailors, in 8 months. Mostly women from the surrounding neighbourhoods, joining via community word-of-mouth.",
      flip: true,
    },
    {
      id: "T3",
      x: 1510, y: 760,
      num: "TAG / 03",
      head: "7:30 AM",
      body: "Start time. Designed around domestic schedules so women can finish morning duties before arriving.",
    },
  ],

  // Invisible-systems panels
  systems: [
    {
      num: "INV / 01",
      title: "1,500 m → <em>5+ styles</em>",
      body: "Fabric MOQ from primary mills is ~1,500 m. To make this viable, one fabric supports 5+ patterns. Allocation responds to demand: high-velocity styles get more bolt; slower styles stay in virtual inventory.",
      meta: "FABRIC SHARING ARCHITECTURE",
    },
    {
      num: "INV / 02",
      title: "Sizes don't sell <em>evenly</em>",
      body: "XS–XXL demand is rarely uniform. Cutting in equal ratios chronically over-stocks slow sizes and under-stocks fast ones. Initial cut: 15 pcs × 6 sizes = 90 (the MOR). Real distribution learned only from market signal.",
      meta: "SIZE DISTRIBUTION ASYMMETRY",
    },
    {
      num: "INV / 03",
      title: "Overhead = <em>60% of stitching</em>",
      body: "Fixed costs (rent, electricity, supervision) distributed in proportion to labour intensity. A ₹15 stitch carries ₹9 overhead; a ₹65 stitch carries ₹39. Transparent, negotiable, fair across complexity.",
      meta: "COST ARCHITECTURE",
    },
    {
      num: "INV / 04",
      title: "Five risks, <em>designed-against</em>",
      body: "Monetary · People · Infrastructure · Platform · Supply. Each risk has a designed mitigation: cost reserve, open-door training, dual machine brands, virtual inventory, dual sourcing.",
      meta: "RISK ARCHITECTURE",
    },
    {
      num: "FUTURE / SCOPE",
      title: "What this <em>becomes</em>",
      body: "→ Real-time Myntra-API to cut-buffer interface\n→ Sustainability measurement: fabric waste/session, energy/garment, training outcomes\n→ Formalisation: written contracts, PF, leave\n→ Training scaling: documented progressions, peer-trainer incentives\n→ Pattern-level demand intelligence across 660+ patterns",
      meta: "DESIGN ROADMAP · 2025 →",
      dark: true,
    },
  ],

  // Header data strip, key numbers
  data: [
    { num: "660+", lbl: "PATTERNS\nIN CATALOGUE" },
    { num: "67", lbl: "ACTIVE SKUs\n(MAY 2025)" },
    { num: "6", lbl: "SIZES\nXS · S · M · L · XL · XXL" },
    { num: "5,000", lbl: "SQ FT FLOOR\n7 ZONES · LINEAR FLOW" },
    { num: "4,000", lbl: "STANDING CUT\nPIECE BUFFER" },
    { num: "1,500m", lbl: "FABRIC MOQ\n→ 5+ STYLES PER BOLT" },
    { num: "100%*", lbl: "PO FULFILMENT\n*REJECTIONS = SILENT BOTTLENECK" },
    { num: "₹161 / ₹251", lbl: "AVG TOP / DRESS\nMFG COST" },
  ],

  // Lift-flaps and pull-tabs to scatter on the board (interactive bits)
  flaps: [
    {
      id: "F1",
      kind: "flap",
      x: 290, y: 770, w: 130, h: 64,
      front: ["COSTING", "TOP, AVG", "₹161 total"],
      under: { line: "lift to see how", body: "Fabric ~₹75 · Cut ₹5 · Stitch ~₹35 · Overhead ~₹21 · Finish ₹13.75 · Accessories ~₹6" },
    },
    {
      id: "F2",
      kind: "flap",
      x: 440, y: 770, w: 130, h: 64,
      front: ["COSTING", "DRESS, AVG", "₹251 total"],
      under: { line: "the same maths", body: "Fabric ~₹130 · Cut ₹5 · Stitch ~₹53 · Overhead ~₹32 · Finish ₹16.75 · Accessories ~₹10" },
    },
    {
      id: "F3",
      kind: "flap",
      x: 1000, y: 770, w: 130, h: 64,
      front: ["LIFT TO SEE", "WHAT THE", "CUSTOMER PAYS"],
      under: { line: "₹300–700", body: "Retail on Myntra. Margin sits between mfg cost & retail; the unit captures only the manufacturing slice." },
    },
    {
      id: "F4",
      kind: "pulltab",
      x: 1170, y: 770, w: 200, h: 64,
      panes: [
        ["SLIDE →", "FROM THE", "60% OVERHEAD..."],
        ["Stitch ₹15", "→ Overhead ₹9", "(simple top)"],
        ["Stitch ₹35", "→ Overhead ₹21", "(avg top)"],
        ["Stitch ₹65", "→ Overhead ₹39", "(complex dress)"],
      ],
    },
  ],
};
