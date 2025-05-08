export const tourPackages = [
  {
    slug: "everest-base-camp",
    name: "Everest Base Camp Trek",
    location: "Solukhumbu, Nepal",
    duration: "14 days",
    maxGroupSize: 12,
    difficulty: "Moderate to Hard",
    bestSeason: "March-May & Sept-Nov",
    about: "The Everest Base Camp Trek is one of the most popular trekking routes in Nepal, taking you through breathtaking mountain scenery and traditional Sherpa villages. This iconic trek leads you to the base of the world's tallest mountain, Mt. Everest (8,848m), offering incredible views of Himalayan giants including Lhotse, Nuptse, and Ama Dablam. Experience the unique Sherpa culture, visit ancient monasteries, and create memories that will last a lifetime.",
    itinerary: [
      { day: 1,
        title: "Arrival in Kathmandu (1,400m)", 
        description: "Welcome at the airport and transfer to hotel." 
      },
      {
        day: 2,
        title: "Fly to Lukla (2,840m) & trek to Phakding (2,610m)",
        description:
          "Early morning flight to Lukla followed by a short trek to Phakding village along the Dudh Koshi River.",
      },
      {
        day: 3,
        title: "Trek to Namche Bazaar (3,440m)",
        description: "Ascend through pine forests to reach the famous Sherpa market town of Namche Bazaar.",
      },
      {
        day: 4,
        title: "Acclimatization day in Namche Bazaar",
        description: "Rest day with optional hike to Everest View Hotel for panoramic mountain views.",
      },
      {
        day: 5,
        title: "Trek to Tengboche (3,860m)",
        description: "Visit the famous Tengboche Monastery with views of Everest, Nuptse, and Ama Dablam.",
      },
      {
        day: 6,
        title: "Trek to Dingboche (4,410m)",
        description: "Ascend through the Imja Valley with beautiful mountain landscapes.",
      },
      {
        day: 7,
        title: "Acclimatization day in Dingboche",
        description: "Rest day with an optional hike to Nangkartshang Peak for acclimatization.",
      },
      {
        day: 8,
        title: "Trek to Lobuche (4,940m)",
        description: "Trek along the lateral moraine of the Khumbu Glacier with views of Pumori and Nuptse.",
      },
      {
        day: 9,
        title: "Trek to Gorak Shep (5,170m) & Everest Base Camp (5,364m)",
        description: "Morning trek to Gorak Shep followed by a visit to Everest Base Camp.",
      },
      {
        day: 10,
        title: "Hike to Kala Patthar (5,545m) & trek to Pheriche (4,280m)",
        description: "Early morning hike to Kala Patthar for sunrise views of Everest, then descend to Pheriche.",
      },
      {
        day: 11,
        title: "Trek to Namche Bazaar (3,440m)",
        description: "Descend through rhododendron forests back to Namche Bazaar.",
      },
      { day: 12, title: "Trek to Lukla (2,840m)", description: "Final day of trekking, returning to Lukla." },
      {
        day: 13,
        title: "Fly to Kathmandu",
        description: "Morning flight back to Kathmandu. Free time for shopping and relaxation.",
      },
      {
        day: 14,
        title: "Departure from Kathmandu",
        description: "Transfer to international airport for final departure.",
      },
    ],
    cost: {
      price: "$1,450 per person",
      includes: ["Airport transfers in Kathmandu", "3 nights accommodation in Kathmandu with breakfast"],
      excludes: ["International airfare to/from Kathmandu", "Nepal visa fee"],
    },
    images: [
      "/images/tour-package/everest-basecamp/sylwia-bartyzel-utVHtWF73kg-unsplash.jpg",
      "/images/tour-package/everest-basecamp/sebastian-pena-lambarri-Wj9ELwGXa6c-unsplash.jpg",
      "/images/tour-package/everest-basecamp/michael-clarke-GVpAB2mHwkw-unsplash.jpg",
      "/images/tour-package/everest-basecamp/mari-partyka-PLzgu9O7xag-unsplash.jpg",
      "/images/tour-package/everest-basecamp/ananya-bilimale-xdvM7wDXZy4-unsplash.jpg"
    ],
    relatedPackages: [
      { slug: "annapurna-circuit", name: "Annapurna Circuit Trek" },
      { slug: "langtang-valley", name: "Langtang Valley Trek" },
      { slug: "manaslu-circuit", name: "Manaslu Circuit Trek" },
    ],
  },
  // Other tour packages...
];