export type Industry = {
  name: string;
  slug: string;
  tagline: string;
  painPoint: string;
  whatWeBuild: string[];
};

export const industries: Industry[] = [
  {
    name: "Restaurants & Hospitality",
    slug: "restaurants",
    tagline: "Make the food the hero — and the reservation one tap away.",
    painPoint:
      "Diners decide in seconds based on photos and menus. A dated site costs covers every week.",
    whatWeBuild: ["Reservations", "Menu presentation", "Online ordering", "Image galleries"],
  },
  {
    name: "Medical & Dental",
    slug: "medical-dental",
    tagline: "Build trust before the first appointment.",
    painPoint:
      "Patients want to book online, see credentials, and understand insurance — fast.",
    whatWeBuild: ["Online booking", "Provider bios", "Insurance info", "Patient forms"],
  },
  {
    name: "Law Firms",
    slug: "law-firms",
    tagline: "Look established from the very first visit.",
    painPoint:
      "Legal buyers judge credibility in seconds. Generic templates undercut trust instantly.",
    whatWeBuild: ["Practice area pages", "Case results", "Consultation requests", "Attorney bios"],
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    tagline: "Listings and search that keep buyers on your site.",
    painPoint:
      "Buyers expect map search and instant filtering — or they bounce to an aggregator.",
    whatWeBuild: ["Listing search", "Map integration", "Agent profiles", "Saved favorites"],
  },
  {
    name: "Gyms & Fitness Studios",
    slug: "gyms-fitness",
    tagline: "Turn schedule-browsers into booked first classes.",
    painPoint:
      "Studios lose sign-ups when class schedules are hard to browse or booking needs a call.",
    whatWeBuild: ["Class schedules", "Online booking", "Membership plans", "Instructor bios"],
  },
  {
    name: "Salons & Spas",
    slug: "salons-spas",
    tagline: "Effortless booking, beautiful presentation.",
    painPoint:
      "Clients expect to book a specific stylist and time online, day or night.",
    whatWeBuild: ["Appointment booking", "Service menus", "Gallery", "Staff profiles"],
  },
  {
    name: "Construction & Trades",
    slug: "construction",
    tagline: "Win bigger jobs with a site that looks the part.",
    painPoint:
      "Referrals check your website before they call. It needs to look as solid as your work.",
    whatWeBuild: ["Project galleries", "Service areas", "Quote requests", "Reviews"],
  },
  {
    name: "Schools & Universities",
    slug: "education",
    tagline: "Clear information for students, parents, and staff.",
    painPoint:
      "Prospective students and parents need fast answers — programs, admissions, contact.",
    whatWeBuild: ["Program pages", "Admissions info", "News & events", "Directory search"],
  },
  {
    name: "Ecommerce & Retail",
    slug: "ecommerce",
    tagline: "A storefront built to convert, not just display.",
    painPoint:
      "Generic storefront templates flatten your brand and quietly suppress conversion.",
    whatWeBuild: ["Product catalog", "Checkout & payments", "Customer accounts", "Inventory"],
  },
  {
    name: "Travel & Hospitality",
    slug: "travel",
    tagline: "Inspire the trip, then make booking effortless.",
    painPoint:
      "Travelers want stunning visuals and a booking flow that doesn't fight them.",
    whatWeBuild: ["Booking engine", "Galleries", "Itinerary pages", "Multi-language support"],
  },
];
