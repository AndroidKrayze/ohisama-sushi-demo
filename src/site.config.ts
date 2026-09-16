export const siteConfig = {
  name: "Ohisama Sushi",
  legalName: "Ohisama Sushi",
  japanese: "おひさま",
  japaneseFull: "鮨 おひさま",
  tagline: "Rising sun on Paddington Street.",
  description:
    "Intimate Japanese sushi bar on Paddington Street, Marylebone — precise nigiri and sashimi, chef rolls, omakase, and miso-glazed black cod. Steps from Baker Street.",
  seoTitle:
    "Ohisama Sushi | Japanese Sushi Bar · Paddington Street Marylebone W1",
  address: {
    line1: "39 Paddington Street",
    line2: "Marylebone, London W1U 4HH",
    area: "Marylebone",
    note: "Basement & ground · Kenrick Place corner · near Baker Street / Chiltern corridor",
    full: "39 Paddington Street, Marylebone, London W1U 4HH",
  },
  phone: {
    display: "020 3649 8983",
    tel: "+442036498983",
    href: "tel:+442036498983",
  },
  mapsUrl:
    "https://www.google.com/maps/place/Ohisama+Sushi/@51.520302,-0.155965",
  geo: {
    lat: 51.520302,
    lng: -0.155965,
  },
  hours: {
    weekdays: "Mon–Sat 11:30–22:30",
    sunday: "Sun 12:00–22:30",
    note:
      "Some directories show Monday dinner-only or a lunch/dinner split — please confirm on Google Maps or by phone before you visit.",
  },
  ratings: {
    source: "Google",
    score: "4.3",
    count: "~414+",
  },
  fhrs: {
    rating: "5",
    date: "14 Jan 2026",
    url: "https://ratings.food.gov.uk/business/1909993",
  },
  booking: {
    opentable: "https://www.opentable.com/r/ohisama-sushi-london",
  },
  instagram: "@ohisama.sushi",
  suggestedDomains: [
    "ohisamamarylebone.co.uk",
    "ohisamasushilondon.co.uk",
    "ohisamasushiw1.co.uk",
  ],
  menuNote:
    "Nigiri prices from the printed à la carte board; rolls, omakase and hot dishes from aggregator menus. Soft-confirm £ with the restaurant — ask for today’s board.",
  menuSections: [
    {
      id: "nigiri",
      label: "Nigiri & sashimi",
      eyebrow: "À la carte board",
      intro:
        "One piece nigiri · three-slice sashimi. From the printed board at the counter.",
      items: [
        {
          name: "Red Tuna (Akami)",
          blurb: "Classic lean tuna — the Marylebone staple cut.",
          price: "Nigiri £3.00 · Sashimi £6.50",
        },
        {
          name: "Medium Fatty Tuna (Chu-Toro)",
          blurb: "Balanced fat — soft and clean.",
          price: "Nigiri £3.50 · Sashimi £7.50",
        },
        {
          name: "Fatty Tuna (O-Toro)",
          blurb: "Melted richness when the board has it.",
          price: "Nigiri £5.00 · Sashimi £10.50",
        },
        {
          name: "Yellowtail (Hamachi)",
          blurb: "Firm, bright, and precise.",
          price: "Nigiri £3.50 · Sashimi £7.50",
        },
        {
          name: "Fresh Salmon (Sake)",
          blurb: "Everyday excellence on rice.",
          price: "Nigiri £2.50 · Sashimi £4.50",
        },
        {
          name: "Sea Urchin (Uni)",
          blurb: "Briny gold — thin highlight of the bar.",
          price: "Nigiri £4.80",
        },
        {
          name: "Wagyu Seared Nigiri",
          blurb: "Japanese beef, torch-kissed.",
          price: "Nigiri £6.50",
        },
        {
          name: "Salmon Egg (Ikura)",
          blurb: "Pearl gloss over seasoned rice.",
          price: "Nigiri £2.80",
        },
      ],
    },
    {
      id: "rolls",
      label: "Signature rolls",
      eyebrow: "Review favourites",
      intro:
        "Watson, Dragon, Rainbow — the chef rolls guests come back for. Ask for today’s build.",
      items: [
        {
          name: "Dr. Watson (Mystery) roll",
          blurb: "The house crunch mystery — green sauce, toasted finish.",
          price: null,
        },
        {
          name: "Dragon roll",
          blurb: "A Marylebone classic — eel-crowned drama.",
          price: null,
        },
        {
          name: "Rainbow roll",
          blurb: "Fish mosaic over avocado and rice.",
          price: null,
        },
        {
          name: "Spider · California · Tempura",
          blurb: "Soft-shell, classic avocado, prawn crunch — bar staples.",
          price: null,
        },
      ],
    },
    {
      id: "omakase",
      label: "Omakase & chirashi",
      eyebrow: "Leave it to the itamae",
      intro:
        "Counter theatre or a bowl of the day’s best. Soft-confirm live pricing.",
      items: [
        {
          name: "Omakase A",
          blurb: "Chef’s selection — good for one.",
          price: "From ~£57",
        },
        {
          name: "Omakase B",
          blurb: "Shared progression — good for two.",
          price: "From ~£82",
        },
        {
          name: "Chirashi bowls",
          blurb: "Mini · Deluxe · Super Deluxe over seasoned rice.",
          price: null,
        },
        {
          name: "Donburi",
          blurb: "Salmon, tuna, negitoro, or unagi.",
          price: null,
        },
      ],
    },
    {
      id: "hot",
      label: "Hot & chef signatures",
      eyebrow: "Lacquer & flame",
      intro: "Black-cod miso, koji seabass, tartar with caviar — beyond the knife.",
      items: [
        {
          name: "Black Cod Miso",
          blurb: "Signature lacquer — OpenTable’s house praise.",
          price: "From ~£32",
        },
        {
          name: "Chilean Seabass Koji",
          blurb: "Fermented depth, clean flake.",
          price: "From ~£32",
        },
        {
          name: "Toro · yellowtail · salmon tartar",
          blurb: "With caviar — bar-bite luxury.",
          price: null,
        },
        {
          name: "Wagyu tataki · tempura · gyoza",
          blurb: "Ponzu salsa, rock shrimp, agedashi tofu.",
          price: null,
        },
      ],
    },
    {
      id: "lunch",
      label: "Lunch bento",
      eyebrow: "Midday Marylebone",
      intro: "Boxed sets for a Paddington Street lunch — soft-confirm the day’s range.",
      items: [
        {
          name: "Grilled salmon · mackerel · chicken",
          blurb: "Teriyaki and vegetable bento options.",
          price: "From ~£14.50",
        },
        {
          name: "Sashimi bento",
          blurb: "Knife work packed for the table.",
          price: null,
        },
        {
          name: "Ohisama Special bento",
          blurb: "House combination — ask the counter.",
          price: "Up to ~£24.50",
        },
      ],
    },
  ],
  reviewThemes: [
    {
      title: "Fresh fish, precise knife",
      copy: "Guests praise nigiri and sashimi that taste of the day — clean cuts, careful rice, no Instagram gloss required.",
    },
    {
      title: "Watson · Dragon · Rainbow",
      copy: "Signature rolls earn repeat visits. The Mystery crunch and Dragon finish show up again and again in reviews.",
    },
    {
      title: "Intimate itamae bar",
      copy: "Counter theatre upstairs, quieter seating downstairs — a modest Tokyo-bar energy on Paddington Street.",
    },
    {
      title: "Kind, humble service",
      copy: "Staff warmth is a recurring theme. Busy takeaway evenings can slow the pace — phone ahead when you can.",
    },
  ],
  gallery: [
    {
      src: "/assets/gallery-sashimi.jpg",
      alt: "Assorted sashimi on ice at Ohisama Sushi",
      span: "wide" as const,
    },
    {
      src: "/assets/gallery-mystery-roll.jpg",
      alt: "Mystery crunch roll with green sauce",
      span: "tall" as const,
    },
    {
      src: "/assets/gallery-glazed-nigiri.jpg",
      alt: "Glazed nigiri on dark ceramic",
      span: "square" as const,
    },
    {
      src: "/assets/gallery-exterior.jpg",
      alt: "Ohisama Sushi signage on Paddington Street and Kenrick Place",
      span: "square" as const,
    },
    {
      src: "/assets/gallery-food-03.jpg",
      alt: "Chef-plated sushi at Ohisama",
      span: "square" as const,
    },
    {
      src: "/assets/gallery-food-04.jpg",
      alt: "Fresh rolls at the Marylebone sushi bar",
      span: "square" as const,
    },
    {
      src: "/assets/gallery-food-02.jpg",
      alt: "Nigiri detail from Ohisama Sushi",
      span: "square" as const,
    },
    {
      src: "/assets/gallery-food-07.jpg",
      alt: "Assorted sushi plate",
      span: "wide" as const,
    },
    {
      src: "/assets/gallery-food-06.jpg",
      alt: "Sushi and sides at Ohisama",
      span: "square" as const,
    },
    {
      src: "/assets/gallery-editorial-04.jpg",
      alt: "Editorial plate from Ohisama Sushi",
      span: "square" as const,
    },
    {
      src: "/assets/gallery-editorial-07.jpg",
      alt: "Venue food photography — Ohisama",
      span: "square" as const,
    },
      ],
} as const;
