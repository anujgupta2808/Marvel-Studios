// MCU Trivia Quiz Dataset (20 Comprehensive Questions with Explanations)
const QUIZ_QUESTIONS = [
  // EASY
  {
    id: 1,
    difficulty: "easy",
    category: "Origins",
    question: "What is the name of Tony Stark's original artificial intelligence system before FRIDAY?",
    options: ["EDITH", "JARVIS", "HOMER", "ULTRON"],
    answer: 1,
    explanation: "JARVIS (Just A Rather Very Intelligent System) was voiced by Paul Bettany and served Tony Stark until its consciousness was uploaded into Vision.",
    heroBadge: "Iron Man"
  },
  {
    id: 2,
    difficulty: "easy",
    category: "Infinity Stones",
    question: "Which Infinity Stone is contained within the Eye of Agamotto worn by Doctor Strange?",
    options: ["Mind Stone", "Space Stone", "Time Stone", "Reality Stone"],
    answer: 2,
    explanation: "The Eye of Agamotto housed the Time Stone (green), allowing Doctor Strange to manipulate chronological flow and view 14,000,605 futures.",
    heroBadge: "Doctor Strange"
  },
  {
    id: 3,
    difficulty: "easy",
    category: "Shield & Metals",
    question: "Captain America's iconic shield is primarily composed of which rare fictional metal?",
    options: ["Adamantium", "Vibranium", "Uru", "Promethium"],
    answer: 1,
    explanation: "Captain America's shield was forged by Howard Stark using the only supply of Wakandan Vibranium known to the US government during WWII.",
    heroBadge: "Captain America"
  },
  {
    id: 4,
    difficulty: "easy",
    category: "Catchphrases",
    question: "What iconic phrase does Steve Rogers utter when facing insurmountable odds or refusing to yield in combat?",
    options: ["I am inevitable.", "I can do this all day.", "Whatever it takes.", "Higher, further, faster."],
    answer: 1,
    explanation: "'I can do this all day' is Steve Rogers' signature declaration, first spoken in an alleyway in 1940s Brooklyn and repeated throughout the MCU.",
    heroBadge: "Captain America"
  },
  {
    id: 5,
    difficulty: "easy",
    category: "Wakanda",
    question: "What sacred Wakandan herb bestows superhuman speed, strength, and instincts upon the Black Panther?",
    options: ["Heart-Shaped Herb", "Vibranium Blossom", "N'Jadaka Orchid", "Panther Root"],
    answer: 0,
    explanation: "The Heart-Shaped Herb grew only in Wakanda due to soil enriched by the prehistoric Vibranium meteorite and linked to the Panther Goddess Bast.",
    heroBadge: "Black Panther"
  },

  // MEDIUM
  {
    id: 6,
    difficulty: "medium",
    category: "Asgard & Weapons",
    question: "What is the name of the cosmic weapon forged by Eitri on Nidavellir to replace Thor's shattered Mjolnir?",
    options: ["Gungnir", "Stormbreaker", "Dragonfang", "Hofund"],
    answer: 1,
    explanation: "Forged from Uru metal with Groot's arm serving as its handle, Stormbreaker can channel lightning and summon the Bifrost bridge.",
    heroBadge: "Thor"
  },
  {
    id: 7,
    difficulty: "medium",
    category: "The Snap",
    question: "On which remote world did Thanos sacrifice Gamora to obtain the Soul Stone?",
    options: ["Xandar", "Vormir", "Knowhere", "Sakaar"],
    answer: 1,
    explanation: "On Vormir, Red Skull served as the Stonekeeper, revealing that the Soul Stone demands 'a soul for a soul' — the sacrifice of a loved one.",
    heroBadge: "Thanos"
  },
  {
    id: 8,
    difficulty: "medium",
    category: "Spider-Man",
    question: "In 'Spider-Man: Homecoming', what friendly name does Peter Parker give to the female AI voice in his Stark suit?",
    options: ["Karen", "Friday", "Gwen", "Veronica"],
    answer: 0,
    explanation: "Voiced by Jennifer Connelly (the real-life wife of Paul Bettany), Peter Parker fondly nicknamed his suit's virtual assistant 'Karen'.",
    heroBadge: "Spider-Man"
  },
  {
    id: 9,
    difficulty: "medium",
    category: "Avengers History",
    question: "Which MCU movie marked the official on-screen cinematic debut of Tom Holland's Spider-Man?",
    options: ["Spider-Man: Homecoming", "Avengers: Age of Ultron", "Captain America: Civil War", "Ant-Man"],
    answer: 2,
    explanation: "Tom Holland made his historic MCU debut in 2016's 'Captain America: Civil War' after Tony Stark recruited 'the kid from Queens' in Germany.",
    heroBadge: "Spider-Man"
  },
  {
    id: 10,
    difficulty: "medium",
    category: "Guardians",
    question: "What was the title of the cassette tape mixtape Peter Quill's mother gave him before passing away?",
    options: ["Awesome Mix Vol. 1", "Cosmic Jams 1988", "Star-Lord Tracks", "Starlit Grooves"],
    answer: 0,
    explanation: "Meredith Quill gave Peter 'Awesome Mix Vol. 1', featuring iconic 1970s classics that scored the soundtrack of Guardians of the Galaxy.",
    heroBadge: "Cosmic"
  },

  // HARD
  {
    id: 11,
    difficulty: "hard",
    category: "Lore & Secrets",
    question: "What are the six specific words used by HYDRA to activate Bucky Barnes as the Winter Soldier in 'Civil War'?",
    options: [
      "Longing, Rusted, Seventeen, Daybreak, Furnace, Nine, Benign, Homecoming, One, Freight Car",
      "Sokovia, Cold, Soldier, Winter, Protocol, Red, Mission, Iron, Shield, Silent",
      "Hail, Hydra, Subservient, Soviet, Siberian, Strike, Shadow, Iron, Target, Fire",
      "Longing, Frozen, Thirteen, Dawn, Fire, Six, Return, Quiet, Zero, Train"
    ],
    answer: 0,
    explanation: "The Russian trigger sequence recited from the red HYDRA booklet was: 'Longing, Rusted, Seventeen, Daybreak, Furnace, Nine, Benign, Homecoming, One, Freight Car'.",
    heroBadge: "Captain America"
  },
  {
    id: 12,
    difficulty: "hard",
    category: "Infinity Gauntlet",
    question: "Which realm / moon was the home planet of Thanos before its environmental collapse driven by overpopulation?",
    options: ["Titan", "Zen-Whoberi", "Hala", "Contraxia"],
    answer: 0,
    explanation: "Thanos was a native of Titan, a Saturnian moon whose civilizational extinction drove him to his radical cosmic crusade.",
    heroBadge: "Thanos"
  },
  {
    id: 13,
    difficulty: "hard",
    category: "Multiverse",
    question: "In 'Doctor Strange in the Multiverse of Madness', what designated universe number does Earth's main MCU reality inhabit according to Christine Palmer?",
    options: ["Earth-616", "Earth-838", "Earth-199999", "Earth-1610"],
    answer: 0,
    explanation: "Earth-838's Illuminati research facility categorized Doctor Strange's prime MCU reality as Earth-616 (mirroring the classic comic book designation).",
    heroBadge: "Doctor Strange"
  },
  {
    id: 14,
    difficulty: "hard",
    category: "S.H.I.E.L.D.",
    question: "What was the covert project name for the three Insight Helicarriers developed by HYDRA within S.H.I.E.L.D. in 'The Winter Soldier'?",
    options: ["Project Insight", "Project Rebirth", "Project Pegasus", "Project Goliath"],
    answer: 0,
    explanation: "Project Insight utilized Arnim Zola's algorithm to analyze digital footprints and eliminate 20 million potential threats from high-altitude carriers.",
    heroBadge: "Captain America"
  },
  {
    id: 15,
    difficulty: "hard",
    category: "Science & Tech",
    question: "What frequency resonance / subatomic particle allows Scott Lang and Hank Pym to bypass classical laws of physics?",
    options: ["Pym Particles", "Vibranium Quarks", "Tachyon Waves", "Gamma Muons"],
    answer: 0,
    explanation: "Discovered by Dr. Hank Pym in the 1960s, Pym Particles can alter the distance between atomic sub-particles, enabling mass displacement and Quantum Realm travel.",
    heroBadge: "Ant-Man"
  },

  // MASTER / LEGENDARY
  {
    id: 16,
    difficulty: "hard",
    category: "Stan Lee Cameos",
    question: "In 'Avengers: Endgame', what decade and year did Stan Lee make his final MCU cameo appearance as a car driver shouting 'Make love, not war'?",
    options: ["1970", "1968", "1982", "1974"],
    answer: 0,
    explanation: "Stan Lee's touching posthumous cameo took place in 1970 at Camp Lehigh, New Jersey, when Tony Stark and Steve Rogers traveled back for the Tesseract and Pym particles.",
    heroBadge: "Legendary"
  },
  {
    id: 17,
    difficulty: "hard",
    category: "Timeline",
    question: "Chronologically inside the MCU narrative universe, which of the following films takes place first?",
    options: ["Captain America: The First Avenger", "Captain Marvel", "Iron Man", "Thor"],
    answer: 0,
    explanation: "'Captain America: The First Avenger' is set primarily between 1942 and 1945 during WWII, decades before Captain Marvel (1995) and Iron Man (2008/2010).",
    heroBadge: "Timeline"
  },
  {
    id: 18,
    difficulty: "hard",
    category: "Post-Credits",
    question: "In the post-credits scene of 'The Avengers' (2012), what food is the team seen silently eating around a damaged restaurant table?",
    options: ["Cheeseburgers", "Shawarma", "Pizza", "Pastrami on Rye"],
    answer: 1,
    explanation: "Following Tony Stark's suggestion after falling through the wormhole ('Have you ever tried shawarma?'), the exhausted heroes quietly eat at a New York shawarma joint.",
    heroBadge: "Avengers"
  },
  {
    id: 19,
    difficulty: "hard",
    category: "Wakanda",
    question: "What is the name of the fierce commander who leads the Dora Milaje, Wakanda's elite all-female royal guard?",
    options: ["Okoye", "Nakia", "Ayo", "Aneka"],
    answer: 0,
    explanation: "General Okoye, played by Danai Gurira, serves as the indomitable General of the Dora Milaje and head of the Wakandan armed forces.",
    heroBadge: "Black Panther"
  },
  {
    id: 20,
    difficulty: "hard",
    category: "Infinity Saga Finale",
    question: "In 'Avengers: Endgame', what exact number of futures did Doctor Strange tell Tony Stark they win against Thanos?",
    options: ["One out of 14,000,605", "Three out of 10,000,000", "One out of 20,000,000", "Zero"],
    answer: 0,
    explanation: "In Infinity War, Doctor Strange viewed 14,000,605 possible futures on Titan and solemnly confirmed: 'Only one.' That single winning timeline required Tony Stark's snap.",
    heroBadge: "Doctor Strange"
  }
];

