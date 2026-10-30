// MCU Superheroes & Characters Dataset
const CHARACTERS_DATA = [
  {
    id: "iron-man",
    name: "Iron Man",
    realName: "Anthony 'Tony' Stark",
    alias: "The Armored Avenger",
    affiliation: "Avengers",
    category: "avengers",
    actor: "Robert Downey Jr.",
    firstAppearance: "Iron Man (2008)",
    status: "Fallen Hero (Sacrificed in Endgame)",
    quote: "I am Iron Man.",
    struggleQuote: "I shouldn't be alive, unless it was for a reason. I'm not crazy, Pepper. I just finally know what I have to do.",
    bio: "Genius, billionaire, playboy, philanthropist. After surviving a life-threatening shrapnel wound and abduction in Afghanistan, Tony Stark built the groundbreaking Arc Reactor and Iron Man Mark suits to protect humanity, eventually leading the Avengers and offering the ultimate sacrifice to defeat Thanos.",
    powers: [
      "Genius-Level Intellect & Engineering",
      "Powered Nanotech Armor",
      "Supersonic Flight & Thrusters",
      "Repulsor Rays & Unibeam",
      "Artificial Intelligence (JARVIS & FRIDAY)",
      "Vibranium-Enhanced Energy Shields"
    ],
    stats: {
      intelligence: 100,
      strength: 85,
      speed: 80,
      durability: 88,
      energy: 95,
      combat: 84
    },
    keyAppearances: [
      "Iron Man (2008)",
      "The Avengers (2012)",
      "Captain America: Civil War (2016)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    accentColor: "#E62429",
    secondaryColor: "#D6A84B",
    image: "assets/images/characters/iron-man.png"
  },
  {
    id: "captain-america",
    name: "Captain America",
    realName: "Steven 'Steve' Rogers",
    alias: "The First Avenger",
    affiliation: "Avengers",
    category: "avengers",
    actor: "Chris Evans",
    firstAppearance: "Captain America: The First Avenger (2011)",
    status: "Retired / Legend",
    quote: "I can do this all day.",
    struggleQuote: "The price of freedom is high. It always has been. And it's a price I'm willing to pay. And if I'm the only one, then so be it.",
    bio: "Deemed unfit for military duty in WWII due to frail health, Steve Rogers volunteered for Project Rebirth and received the Super-Soldier Serum. Frozen in Arctic ice for nearly seven decades, he awakened in modern times to champion freedom as moral compass and field leader of Earth's Mightiest Heroes.",
    powers: [
      "Super-Soldier Peak Human Physiology",
      "Master Martial Artist & Tactician",
      "Indestructible Vibranium Shield Mastery",
      "Enhanced Reflexes, Agility & Stamina",
      "Accelerated Healing Factor",
      "Worthy Wielder of Mjolnir"
    ],
    stats: {
      intelligence: 82,
      strength: 78,
      speed: 72,
      durability: 84,
      energy: 35,
      combat: 100
    },
    keyAppearances: [
      "Captain America: The First Avenger (2011)",
      "The Avengers (2012)",
      "Captain America: The Winter Soldier (2014)",
      "Captain America: Civil War (2016)",
      "Avengers: Endgame (2019)"
    ],
    accentColor: "#0D47A1",
    secondaryColor: "#E62429",
    image: "assets/images/characters/captain-america.png"
  },
  {
    id: "thor",
    name: "Thor",
    realName: "Thor Odinson",
    alias: "God of Thunder",
    affiliation: "Avengers / Asgardians of the Galaxy",
    category: "cosmic",
    actor: "Chris Hemsworth",
    firstAppearance: "Thor (2011)",
    status: "Active Cosmic Protector",
    quote: "Bring me Thanos!",
    struggleQuote: "I went for the head... and what did it cost? Everything. But even when lost, a god must learn who he truly is.",
    bio: "The crown prince of Asgard and son of Odin. Exiled to Earth to learn humility, Thor forged an unbreakable bond with mortal realm defenders. Overcoming the loss of Asgard, his family, and his weapon Mjolnir, Thor harnessed his true lightning potential and forged Stormbreaker.",
    powers: [
      "Asgardian Divine Physiology & Immortality",
      "Control of Weather, Thunder & Lightning",
      "Summoner of Mjolnir & Stormbreaker",
      "Bifrost Interdimensional Teleportation",
      "Superhuman Godly Strength & Durability",
      "Flight via Hammer/Axe Propulsion"
    ],
    stats: {
      intelligence: 75,
      strength: 98,
      speed: 86,
      durability: 96,
      energy: 98,
      combat: 92
    },
    keyAppearances: [
      "Thor (2011)",
      "The Avengers (2012)",
      "Thor: Ragnarok (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Thor: Love and Thunder (2022)"
    ],
    accentColor: "#D6A84B",
    secondaryColor: "#1E88E5",
    image: "assets/images/characters/thor.png"
  },
  {
    id: "spider-man",
    name: "Spider-Man",
    realName: "Peter Parker",
    alias: "Your Friendly Neighborhood Spider-Man",
    affiliation: "Avengers / New York Vigilante",
    category: "avengers",
    actor: "Tom Holland",
    firstAppearance: "Captain America: Civil War (2016)",
    status: "Active Vigilante (Anonymity Restored)",
    quote: "With great power comes great responsibility.",
    struggleQuote: "When you can do the things that I can, but you don't, and then the bad things happen... they happen because of you.",
    bio: "Bitten by a radioactive spider in Queens, young Peter Parker was mentored into the superhero world by Tony Stark. Facing cosmic battles, multiverse incursions, and crushing personal loss, Peter chose the loneliest path: casting a universal memory wipe spell to protect everyone he loves.",
    powers: [
      "Spider-Sense (Precognitive Danger Reflexes)",
      "Wall-Crawling & Wall-Running",
      "Superhuman Agility, Acrobatics & Reflexes",
      "Synthetic Web-Shooters & Web-Fluids",
      "Enhanced Durability & Accelerated Healing",
      "Genius Scientific Aptitude"
    ],
    stats: {
      intelligence: 90,
      strength: 80,
      speed: 88,
      durability: 78,
      energy: 40,
      combat: 86
    },
    keyAppearances: [
      "Captain America: Civil War (2016)",
      "Spider-Man: Homecoming (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Spider-Man: No Way Home (2021)"
    ],
    accentColor: "#E62429",
    secondaryColor: "#0074D9",
    image: "assets/images/characters/spider-man.png"
  },
  {
    id: "doctor-strange",
    name: "Doctor Strange",
    realName: "Dr. Stephen Vincent Strange",
    alias: "Master of the Mystic Arts",
    affiliation: "Masters of the Mystic Arts",
    category: "sorcerers",
    actor: "Benedict Cumberbatch",
    firstAppearance: "Doctor Strange (2016)",
    status: "Active Sorcerer / Multiversal Defender",
    quote: "We never lose our demons, Mordo. We only learn to live above them.",
    struggleQuote: "I went forward in time to view alternate futures... fourteen million six hundred and five. We win exactly one.",
    bio: "Former arrogant world-class neurosurgeon whose career was shattered by a devastating car crash. Searching for a cure in Kamar-Taj, Stephen Strange learned mystical sorcery under the Ancient One, mastered the Time Stone, and now safeguards reality against multiversal crises.",
    powers: [
      "Mastery of Eldritch Magic & Dimensional Spells",
      "Interdimensional Portal Sling Ring Manipulation",
      "Cloak of Levitation Sentient Symbiosis",
      "Mirror Dimension Trapping & Reality Warping",
      "Astral Projection & Chrono-Perception",
      "Occult Knowledge & Multiversal Navigation"
    ],
    stats: {
      intelligence: 96,
      strength: 55,
      speed: 70,
      durability: 75,
      energy: 100,
      combat: 85
    },
    keyAppearances: [
      "Doctor Strange (2016)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Spider-Man: No Way Home (2021)",
      "Doctor Strange in the Multiverse of Madness (2022)"
    ],
    accentColor: "#D6A84B",
    secondaryColor: "#9C27B0",
    image: "assets/images/characters/doctor-strange.png"
  },
  {
    id: "black-panther",
    name: "Black Panther",
    realName: "King T'Challa",
    alias: "The King of Wakanda",
    affiliation: "Wakandan Royal Guard / Avengers",
    category: "wakanda",
    actor: "Chadwick Boseman",
    firstAppearance: "Captain America: Civil War (2016)",
    status: "Eternal Wakandan Legend",
    quote: "Wakanda Forever!",
    struggleQuote: "In my culture, death is not the end. It's more of a stepping off point. You reach out with both hands, and Bast and Sekhmet, they lead you into the green veld where you can run forever.",
    bio: "Monarch and protector of the technologically advanced African nation of Wakanda. Imbued with supernatural abilities from the sacred Heart-Shaped Herb and clothed in a Vibranium weave suit designed by Princess Shuri, T'Challa chose to open Wakanda's borders and share its innovations with the world.",
    powers: [
      "Heart-Shaped Herb Superhuman Physical Enhancement",
      "Kinetic Energy Absorbing Vibranium Habit Suit",
      "Retractable Anti-Metal Vibranium Claws",
      "Master Tactician, Statesman & Diplomat",
      "Expert Martial Artist (Panther Martial Arts)",
      "Ancestral Connection to the Panther Goddess Bast"
    ],
    stats: {
      intelligence: 92,
      strength: 82,
      speed: 84,
      durability: 88,
      energy: 55,
      combat: 98
    },
    keyAppearances: [
      "Captain America: Civil War (2016)",
      "Black Panther (2018)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    accentColor: "#7B1FA2",
    secondaryColor: "#D6A84B",
    image: "assets/images/characters/black-panther.png"
  },
  {
    id: "hulk",
    name: "Hulk",
    realName: "Dr. Bruce Banner",
    alias: "The Incredible Hulk / Smart Hulk",
    affiliation: "Avengers",
    category: "avengers",
    actor: "Mark Ruffalo",
    firstAppearance: "The Incredible Hulk (2008)",
    status: "Active Avenger / Scientific Researcher",
    quote: "That's my secret, Cap: I'm always angry.",
    struggleQuote: "For years I've treated the Hulk like he's some kind of disease, something to get rid of. But then I started looking at him as the cure.",
    bio: "Brilliant nuclear physicist exposed to immense gamma radiation. Originally transforming into an uncontrollable rampaging green colossus driven by anger, Bruce Banner spent eighteen months in a gamma lab fusing brains and brawn into Smart Hulk, wielding the Nano Gauntlet to bring half the universe back.",
    powers: [
      "Limitless Superhuman Strength (Scales With Rage)",
      "Near-Invulnerability & Unyielding Durability",
      "Massive Leaping Distance Across Continents",
      "Extreme Accelerated Cellular Regeneration",
      "Genius-Level Expertise in Nuclear Physics & Radiations",
      "Gamma Radiation Resistance"
    ],
    stats: {
      intelligence: 98,
      strength: 100,
      speed: 70,
      durability: 100,
      energy: 82,
      combat: 80
    },
    keyAppearances: [
      "The Incredible Hulk (2008)",
      "The Avengers (2012)",
      "Thor: Ragnarok (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "She-Hulk: Attorney at Law (2022)"
    ],
    accentColor: "#2E7D32",
    secondaryColor: "#795548",
    image: "assets/images/characters/hulk.png"
  },
  {
    id: "thanos",
    name: "Thanos",
    realName: "Thanos of Titan",
    alias: "The Mad Titan",
    affiliation: "Black Order / Titan Conqueror",
    category: "villains",
    actor: "Josh Brolin",
    firstAppearance: "The Avengers (2012 Post-Credits)",
    status: "Erased from Existence",
    quote: "I am inevitable.",
    struggleQuote: "The hardest choices require the strongest wills. Dread it, run from it, destiny arrives all the same.",
    bio: "Genocidal warlord from the extinct moon Titan who believed overpopulation doomed the universe. Relentlessly hunting down all six Infinity Stones, Thanos forged the Infinity Gauntlet and erased half of all sentient life with a single snap, challenging the Avengers across space and time.",
    powers: [
      "Titan Superhuman Physiology & Colossal Might",
      "Mastery of the Complete Infinity Gauntlet",
      "Master Military Strategist & Galaxy Conqueror",
      "Dual-Bladed Sword Combat Mastery",
      "Immense Willpower & Unshakable Resolve",
      "Near-Impenetrable Physical Durability"
    ],
    stats: {
      intelligence: 94,
      strength: 100,
      speed: 76,
      durability: 100,
      energy: 100,
      combat: 95
    },
    keyAppearances: [
      "The Avengers (2012)",
      "Guardians of the Galaxy (2014)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    accentColor: "#8E24AA",
    secondaryColor: "#D6A84B",
    image: "assets/images/characters/thanos.png"
  },
  {
    id: "scarlet-witch",
    name: "Scarlet Witch",
    realName: "Wanda Maximoff",
    alias: "The Harbinger of Chaos Magic",
    affiliation: "Avengers / Westview / Darkhold Bearer",
    category: "sorcerers",
    actor: "Elizabeth Olsen",
    firstAppearance: "Captain America: The Winter Soldier (2014)",
    status: "Unknown / Presumed Sacrificed at Wundagore",
    quote: "You break the rules and become a hero. I do it and I become the enemy. That doesn't seem fair.",
    struggleQuote: "I can't control their fear, only my own. What is grief, if not love persevering?",
    bio: "Orphaned in Sokovia alongside her twin Pietro and experimented on by HYDRA with the Mind Stone, Wanda discovered her latent Chaos Magic destiny as the mythical Scarlet Witch, a being forged to rewrite reality itself.",
    powers: [
      "Chaos Magic & Spontaneous Reality Warping",
      "Telekinesis & Forcefield Generation",
      "Telepathy, Mind Control & Hallucination Casting",
      "Astral Projection & Multiversal Dreamwalking",
      "Energy Blasts & Flight",
      "Spontaneous Biological Transmutation"
    ],
    stats: {
      intelligence: 86,
      strength: 70,
      speed: 75,
      durability: 82,
      energy: 100,
      combat: 84
    },
    keyAppearances: [
      "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)",
      "Avengers: Infinity War (2018)",
      "WandaVision (2021)",
      "Doctor Strange in the Multiverse of Madness (2022)"
    ],
    accentColor: "#C2185B",
    secondaryColor: "#E62429",
    image: "assets/images/characters/spider-man.png" // placeholder gracefully supported
  },
  {
    id: "loki",
    name: "Loki",
    realName: "Loki Laufeyson",
    alias: "God of Stories / God of Mischief",
    affiliation: "Time Variance Authority / Asgard",
    category: "cosmic",
    actor: "Tom Hiddleston",
    firstAppearance: "Thor (2011)",
    status: "Weaver of the Multiverse Timeline",
    quote: "I know what kind of god I need to be. For you. For all of us.",
    struggleQuote: "I am burdened with glorious purpose... but I finally understand what that purpose means: keeping the branches alive so everyone else has a chance.",
    bio: "Adopted son of Odin and biological Frost Giant prince who oscillated between villainy and heroism. Captured by the TVA, Loki discovered the secret of the Sacred Timeline and ascended to become the supreme protector holding all multiversal timelines together at the End of Time.",
    powers: [
      "Master of Illusions & Astral Duplication",
      "Temporal Time-Slipping & Chronokinesis",
      "Multiversal Timeline Manipulation & Weaving",
      "Frost Giant Physiology & Longevity",
      "Sorcery, Shapeshifting & Telekinesis",
      "Superhuman Agility & Dagger Combat"
    ],
    stats: {
      intelligence: 95,
      strength: 78,
      speed: 76,
      durability: 84,
      energy: 98,
      combat: 88
    },
    keyAppearances: [
      "Thor (2011)",
      "The Avengers (2012)",
      "Thor: Ragnarok (2017)",
      "Avengers: Infinity War (2018)",
      "Loki Season 1 & 2 (2021-2023)"
    ],
    accentColor: "#2E7D32",
    secondaryColor: "#D6A84B",
    image: "assets/images/characters/thor.png" // placeholder gracefully supported
  }
];
