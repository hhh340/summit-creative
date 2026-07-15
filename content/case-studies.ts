export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  categories: string[];
  summary: string;
  focusAreas: string[];
  gradient: string;
  liveUrl: string;
  services: string[];
  challenge: string;
  approach: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "verinno",
    title: "Verinno",
    industry: "Restaurant",
    categories: ["Restaurant"],
    summary:
      "A fine dining Italian restaurant site built around reservations, a hand-crafted menu, and a warm, candlelit brand feel.",
    focusAreas: ["Table reservations", "Menu & wine list", "Photo gallery", "Guest reviews"],
    gradient: "from-red-700 to-amber-500",
    liveUrl: "https://verinno-blue.vercel.app",
    services: ["Web Design", "Copywriting"],
    challenge:
      "Fine dining restaurants need a site that feels as considered as the food — anything less undersells the experience before a guest ever sits down.",
    approach:
      "A slow, photography-led design with an always-visible reservation button, a menu that highlights signature dishes, and guest reviews woven throughout.",
    outcome:
      "A site that sets the tone for the evening before guests even walk through the door.",
  },
  {
    slug: "atlas-voyage",
    title: "Atlas Voyage",
    industry: "Travel",
    categories: ["Travel"],
    summary:
      "A luxury travel agency site for bespoke, private itineraries — built around destinations, curated tours, and a concierge-style planning request.",
    focusAreas: ["Destination browsing", "Private tour packages", "Travel journal", "Trip inquiry form"],
    gradient: "from-sky-600 to-amber-500",
    liveUrl: "https://atlas-voyage-beige.vercel.app",
    services: ["Web Design", "Copywriting"],
    challenge:
      "A private travel agency needs to feel trustworthy and high-touch immediately — generic travel templates undercut that instantly.",
    approach:
      "A destination-first layout with real trip pricing and detail, a journal for travel guides, and a simple way to start planning a trip.",
    outcome: "A site built to make planning a serious trip feel like the start of one.",
  },
  {
    slug: "cedar-and-bean",
    title: "Cedar & Bean",
    industry: "Cafe",
    categories: ["Cafe"],
    summary:
      "A specialty coffee roaster and café site covering the menu, the roasting process, the team, and where to find them.",
    focusAreas: ["Menu & seasonal drinks", "Roasting process", "Team bios", "Store locations & hours"],
    gradient: "from-amber-700 to-orange-400",
    liveUrl: "https://cedar-and-bean-tg2m.vercel.app",
    services: ["Web Design", "Copywriting"],
    challenge:
      "A café's website needs to carry the same warmth as the room itself, while still answering the basics fast: what's on the menu, and when are you open.",
    approach:
      "A warm, story-driven design covering the menu, the roasting process, and the people behind the counter, with hours and locations easy to find.",
    outcome: "A site that feels like the café, not just a page about it.",
  },
  {
    slug: "second-story-vintage",
    title: "Second Story Vintage",
    industry: "Retail",
    categories: ["Retail"],
    summary:
      "A boutique vintage clothing store site with shoppable collections, new arrivals, and a sustainability story.",
    focusAreas: ["Shoppable collections", "New arrivals", "Impact stats", "Store hours & FAQ"],
    gradient: "from-violet-500 to-fuchsia-600",
    liveUrl: "https://s1234567h.vercel.app",
    services: ["Web Design", "Copywriting", "Ecommerce"],
    challenge:
      "Vintage and secondhand shops live and die by feel — a generic ecommerce template flattens exactly what makes each piece special.",
    approach:
      "A collection-first shopping experience with condition grading, a clear sustainability story, and new arrivals front and center.",
    outcome:
      "A store that makes browsing secondhand pieces feel as considered as the pieces themselves.",
  },
  {
    slug: "kingsman-barber",
    title: "Kingsman Barber Co.",
    industry: "Barbershop",
    categories: ["Barbershop"],
    summary:
      "A modern barbershop site built around booking, the team, and clear package pricing.",
    focusAreas: ["Online booking", "Barber profiles", "Package pricing", "Retail products"],
    gradient: "from-slate-700 to-amber-500",
    liveUrl: "https://kingsman-kohl.vercel.app",
    services: ["Web Design", "Copywriting", "Booking"],
    challenge:
      "Barbershops sell craft and trust as much as haircuts — clients want to see who's behind the chair and know booking won't be a hassle.",
    approach:
      "A confident, old-world-meets-modern design with barber bios, clear package pricing, and booking always one click away.",
    outcome: "A site built to turn a first-time visitor into a regular.",
  },
];
