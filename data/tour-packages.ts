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
      {
        src: "/images/tour-package/everest-basecamp/michael-clarke-GVpAB2mHwkw-unsplash.jpg",
        credit: {
          name: "Michael Clarke",
          url: "https://unsplash.com/@michaelclarke"
        }
      },
      {
        src: "/images/tour-package/everest-basecamp/sylwia-bartyzel-utVHtWF73kg-unsplash.jpg",
        credit: {
          name: "Sylwia Bartyzel",
        }
      },
      {
        src: "/images/tour-package/everest-basecamp/sebastian-pena-lambarri-Wj9ELwGXa6c-unsplash.jpg",
        credit: {
          name: "Sebastian Pena Lambarri",
          url: "https://unsplash.com/@sebaspenalambarri"
        }
      },
      {
        src: "/images/tour-package/everest-basecamp/mari-partyka-PLzgu9O7xag-unsplash.jpg",
        credit: {
          name: "Mari Partyka",
          url: "https://unsplash.com/@mari_partyka"
        }
      },
      {
        src: "/images/tour-package/everest-basecamp/ananya-bilimale-xdvM7wDXZy4-unsplash.jpg",
        credit: {
          name: "ananya bilimale",
          url: "https://unsplash.com/@ananyabilimale"
        }
      },

    ],
    relatedPackages: [
      { slug: "annapurna-circuit", name: "Annapurna Circuit Trek" },
      { slug: "langtang-valley", name: "Langtang Valley Trek" },
      { slug: "manaslu-circuit", name: "Manaslu Circuit Trek" },
      { slug: "ghorepani-poon-hill", name: "Ghorepani Poon Hill Trek" },
      { slug: "everest-gokyo", name: "Everest Gokyo Lakes Trek" },
    ],
  },

  {
    slug: "annapurna-circuit",
    name: "Annapurna Circuit Trek",
    location: "Annapurna Region, Nepal",
    duration: "15 days",
    maxGroupSize: 10,
    difficulty: "Moderate to Hard",
    bestSeason: "March-May & Sept-Nov",
    about: "The Annapurna Circuit Trek is a classic trek in the Annapurna region of Nepal, offering stunning views of the Annapurna massif and diverse landscapes. This trek takes you through lush subtropical forests, high-altitude deserts, and traditional villages. Experience the rich culture of the Gurung and Thakali people while enjoying breathtaking views of Annapurna, Dhaulagiri, and Machapuchare.",
    itinerary: [
      { day: 1,
        title: "Arrival in Kathmandu (1,400m)", 
        description: "Welcome at the airport and transfer to hotel." 
      },
      {
        day: 2,
        title: "Drive to Besishahar (760m) & trek to Bahundanda (1,130m)",
        description:
          "Drive to Besishahar followed by a short trek to Bahundanda village.",
      },
      // Other days...
    ],
    cost: {
      price: "$1,600 per person",
      includes: ["Airport transfers in Kathmandu", "3 nights accommodation in Kathmandu with breakfast"],
      excludes: ["International airfare to/from Kathmandu", "Nepal visa fee"],
    },
    images: [
      {
        src: "/images/tour-package/annapurna-circuit/swarup-sapkota-tbRmaPzRdwA-unsplash.jpg",
        credit: {
          name: "Swarup Sapkota",
          url: "https://unsplash.com/@swarupsapkota"
        }
      },
      {
        src: "/images/tour-package/annapurna-circuit/giuseppe-mondi-xyE1p1rG04U-unsplash.jpg",
        credit: {
          name: "Giuseppe Mondi",
          url: "https://unsplash.com/@giuseppemondi"
        }
      },
      {
        src: "/images/tour-package/annapurna-circuit/le-tan-qziIV0_vCGQ-unsplash.jpg",
        credit: {
          name: "Le Tan",
          url: "https://unsplash.com/@letan"
        }
      },
      {
        src: "/images/tour-package/annapurna-circuit/mo-jiaming-eLfQNcL7HHo-unsplash.jpg",
        credit: {
          name: "Mo Jiaming",
          url: "https://unsplash.com/@mojiaming"
        }
      },
      {
        src: "/images/tour-package/annapurna-circuit/neha-maheen-mahfin-pd4fqat25AU-unsplash.jpg",
        credit: {
          name: "Neha Maheen Mahfin",
          url: "https://unsplash.com/@nehamahfin"
        }
      },
    ],
    relatedPackages: [
      { 
        slug: "everest-base-camp", 
        name: "Everest Base Camp Trek", 
        image: "/images/tour-package/everest-basecamp/sylwia-bartyzel-utVHtWF73kg-unsplash.jpg" 
      },
      {
        slug: "annapurna-base-camp",
        name: "Annapurna Base Camp Trek",
        image: "/images/tour-package/annapurna-circuit/le-tan-qziIV0_vCGQ-unsplash.jpg"
      },
      {
        slug: "langtang-valley", 
        name: "Langtang Valley Trek",   
        image: "/images/tour-package/langtang-valley/jayant-chaudhary-FVawr_3B1ww-unsplash.jpg"
      }
    ],
  },


  {
    slug: "langtang-valley",
    name: "Langtang Valley Trek",
    location: "Langtang, Nepal",
    duration: "15 days",
    maxGroupSize: 10,
    difficulty: "Moderate",
    bestSeason: "March-May & Sept-Nov",
    about: "The Langtang Valley Trek is a beautiful trek in the Langtang region of Nepal, known for its stunning mountain views and rich Tamang culture. This trek takes you through lush forests, traditional villages, and high alpine meadows. Experience the unique culture of the Tamang people while enjoying breathtaking views of Langtang Lirung, Ganesh Himal, and the surrounding peaks.",
    itinerary: [
      { day: 1,
        title: "Arrival in Kathmandu (1,400m)", 
        description: "Welcome at the airport and transfer to hotel." 
      },
      {
        day: 2,
        title: "Drive to Besishahar (760m) & trek to Bahundanda (1,130m)",
        description:
          "Drive to Besishahar followed by a short trek to Bahundanda village.",
      },
      // Other days...
    ],
    cost: {
      price: "$1,600 per person",
      includes: ["Airport transfers in Kathmandu", "3 nights accommodation in Kathmandu with breakfast"],
      excludes: ["International airfare to/from Kathmandu", "Nepal visa fee"],
    },
    images: [
      {
        src: "/images/tour-package/langtang-valley/jayant-chaudhary-FVawr_3B1ww-unsplash.jpg",
        credit: {
          name: "Jayant Chaudhary",
          url: "https://unsplash.com/@jayantchaudhary"
        }
      },
      {
        src: "/images/tour-package/langtang-valley/jayant-chaudhary-5whVEe_PZz0-unsplash.jpg",
        credit: {
          name: "Jayant Chaudhary",
          url: "https://unsplash.com/@jayantchaudhary"
        }
      },
      {
        src: "/images/tour-package/langtang-valley/kabi-acharya--fq2UH77F6c-unsplash.jpg",
        credit: {
          name: "Kabi Acharya",
          url: "https://unsplash.com/@kabi_acharya"
        }
      },
      {
        src: "/images/tour-package/langtang-valley/kim-cordenete-WkMM-5ogQDs-unsplash.jpg",
        credit: {
          name: "Kim Cordenete",
          url: "https://unsplash.com/@mojiaming"
        }
      },
      {
        src: "/images/tour-package/langtang-valley/mary-anne-h-vq2Xg4OKlWc-unsplash.jpg",
        credit: {
          name: "Mary Anne H",
          url: "https://unsplash.com/@maryanneh"
        }
      },
    ],
    relatedPackages: [
      { 
        slug: "everest-base-camp", 
        name: "Everest Base Camp Trek", 
        image: "/images/tour-package/everest-basecamp/sylwia-bartyzel-utVHtWF73kg-unsplash.jpg" 
      },
      {
        slug: "annapurna-base-camp",
        name: "Annapurna Base Camp Trek",
        image: "/images/tour-package/annapurna-circuit/le-tan-qziIV0_vCGQ-unsplash.jpg"
      },
      {
        slug: "langtang-valley", 
        name: "Langtang Valley Trek",   
        image: "/images/tour-package/langtang-valley/jayant-chaudhary-FVawr_3B1ww-unsplash.jpg"
      }
    ],
  },
  // Other tour packages...
];