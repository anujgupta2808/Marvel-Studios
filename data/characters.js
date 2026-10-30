// MCU Superheroes & Characters Complete Expanded Roster
const CHARACTERS_DATA = [
  // 1. IRON MAN
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
    stats: { intelligence: 100, strength: 85, speed: 80, durability: 88, energy: 95, combat: 84 },
    keyAppearances: ["Iron Man (2008)", "The Avengers (2012)", "Civil War (2016)", "Infinity War (2018)", "Endgame (2019)"],
    accentColor: "#E62429",
    secondaryColor: "#D6A84B",
    image: "assets/images/characters/iron-man.png"
  },

  // 2. CAPTAIN AMERICA
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
    stats: { intelligence: 82, strength: 78, speed: 72, durability: 84, energy: 35, combat: 100 },
    keyAppearances: ["The First Avenger (2011)", "The Avengers (2012)", "The Winter Soldier (2014)", "Civil War (2016)", "Endgame (2019)"],
    accentColor: "#0D47A1",
    secondaryColor: "#E62429",
    image: "assets/images/characters/captain-america.png"
  },

  // 3. THOR
  {
    id: "thor",
    name: "Thor",
    realName: "Thor Odinson",
    alias: "God of Thunder",
    affiliation: "Avengers / Asgardians",
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
    stats: { intelligence: 75, strength: 98, speed: 86, durability: 96, energy: 98, combat: 92 },
    keyAppearances: ["Thor (2011)", "The Avengers (2012)", "Ragnarok (2017)", "Infinity War (2018)", "Endgame (2019)", "Love and Thunder (2022)"],
    accentColor: "#D6A84B",
    secondaryColor: "#1E88E5",
    image: "assets/images/characters/thor.png"
  },

  // 4. SPIDER-MAN
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
    stats: { intelligence: 90, strength: 80, speed: 88, durability: 78, energy: 40, combat: 86 },
    keyAppearances: ["Civil War (2016)", "Homecoming (2017)", "Infinity War (2018)", "Endgame (2019)", "No Way Home (2021)"],
    accentColor: "#E62429",
    secondaryColor: "#0074D9",
    image: "assets/images/characters/spider-man.png"
  },

  // 5. DOCTOR STRANGE
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
    bio: "Former arrogant neurosurgeon whose hands were shattered in a car crash. Searching for physical restoration in Kamar-Taj, Stephen Strange learned ancient sorcery from the Ancient One, mastered the Time Stone, and now defends reality against multiversal horrors.",
    powers: [
      "Mastery of Eldritch Magic & Dimensional Spells",
      "Interdimensional Portal Sling Ring Manipulation",
      "Cloak of Levitation Sentient Symbiosis",
      "Mirror Dimension Trapping & Reality Warping",
      "Astral Projection & Chrono-Perception",
      "Occult Knowledge & Multiversal Navigation"
    ],
    stats: { intelligence: 96, strength: 55, speed: 70, durability: 75, energy: 100, combat: 85 },
    keyAppearances: ["Doctor Strange (2016)", "Infinity War (2018)", "Endgame (2019)", "No Way Home (2021)", "Multiverse of Madness (2022)"],
    accentColor: "#D6A84B",
    secondaryColor: "#9C27B0",
    image: "assets/images/characters/doctor-strange.png"
  },

  // 6. BLACK PANTHER
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
    struggleQuote: "In my culture, death is not the end. It's more of a stepping off point. Bast and Sekhmet lead you into the green veld where you can run forever.",
    bio: "Monarch and protector of the technologically advanced African kingdom of Wakanda. Imbued with superhuman abilities from the sacred Heart-Shaped Herb and clothed in a Vibranium weave suit, T'Challa opened Wakanda's borders to heal and defend the world.",
    powers: [
      "Heart-Shaped Herb Superhuman Physical Enhancement",
      "Kinetic Energy Absorbing Vibranium Habit Suit",
      "Retractable Anti-Metal Vibranium Claws",
      "Master Tactician, Statesman & Diplomat",
      "Expert Martial Artist",
      "Ancestral Connection to the Panther Goddess Bast"
    ],
    stats: { intelligence: 92, strength: 82, speed: 84, durability: 88, energy: 55, combat: 98 },
    keyAppearances: ["Civil War (2016)", "Black Panther (2018)", "Infinity War (2018)", "Endgame (2019)"],
    accentColor: "#7B1FA2",
    secondaryColor: "#D6A84B",
    image: "assets/images/characters/black-panther.png"
  },

  // 7. HULK
  {
    id: "hulk",
    name: "The Hulk",
    realName: "Dr. Bruce Banner",
    alias: "The Incredible Hulk / Smart Hulk",
    affiliation: "Avengers",
    category: "avengers",
    actor: "Mark Ruffalo",
    firstAppearance: "The Incredible Hulk (2008)",
    status: "Active Avenger / Scientific Luminary",
    quote: "That's my secret, Cap: I'm always angry.",
    struggleQuote: "For years I treated the Hulk like a disease to cure. But when I put the brains and the brawn together, I was the one who could snap the universe back.",
    bio: "Brilliant nuclear physicist exposed to lethal gamma radiation. After years of struggling between Bruce Banner and the raging green colossus, he achieved harmony as Smart Hulk, wielding the Nano Gauntlet to resurrect half the universe from Thanos' snap.",
    powers: [
      "Limitless Superhuman Strength (Scales With Rage)",
      "Near-Invulnerability & Unyielding Durability",
      "Continental Leaping Distances",
      "Accelerated Cellular Regeneration",
      "Genius-Level Expertise in Nuclear Physics & Gamma Radiation",
      "Radiation Resistance"
    ],
    stats: { intelligence: 98, strength: 100, speed: 70, durability: 100, energy: 82, combat: 80 },
    keyAppearances: ["The Incredible Hulk (2008)", "The Avengers (2012)", "Ragnarok (2017)", "Infinity War (2018)", "Endgame (2019)"],
    accentColor: "#2E7D32",
    secondaryColor: "#795548",
    image: "assets/images/characters/hulk.png"
  },

  // 8. THANOS
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
    bio: "Warlord from the doomed moon Titan who believed overpopulation doomed all life. Relentlessly tracking down all six Infinity Stones, Thanos forged the Infinity Gauntlet and erased half of sentient life with a single snap, challenging the Avengers across space and time.",
    powers: [
      "Titan Superhuman Physiology & Colossal Might",
      "Mastery of the Complete Infinity Gauntlet",
      "Master Military Strategist & Galaxy Conqueror",
      "Dual-Bladed Sword Combat Mastery",
      "Unshakable Willpower & Cosmic Endurance"
    ],
    stats: { intelligence: 94, strength: 100, speed: 76, durability: 100, energy: 100, combat: 95 },
    keyAppearances: ["The Avengers (2012)", "Guardians of the Galaxy (2014)", "Infinity War (2018)", "Endgame (2019)"],
    accentColor: "#8E24AA",
    secondaryColor: "#D6A84B",
    image: "assets/images/characters/thanos.png"
  },

  // 9. DEADPOOL
  {
    id: "deadpool",
    name: "Deadpool",
    realName: "Wade Winston Wilson",
    alias: "The Merc with a Mouth",
    affiliation: "X-Force / TVA Recruit / Mutants",
    category: "mutants",
    actor: "Ryan Reynolds",
    firstAppearance: "Deadpool (2016) / Deadpool & Wolverine (2024)",
    status: "Active Multiversal Savior",
    quote: "Maximum effort!",
    struggleQuote: "I just wanted to matter. When the world tells you you're a joke, you suit up, break the fourth wall, and save everyone anyway.",
    bio: "Former Special Forces operative subjected to rogue mutant experimentation. Endowed with an accelerated healing factor and immunity to death, Wade Wilson uses twin katanas, pistols, and meta-commentary to save his friends across timeline branches.",
    powers: [
      "Regenerative Healing Factor (Survives Decapitation)",
      "Fourth-Wall Awareness & Meta Omniscience",
      "Master Marksman & Katana Swordsman",
      "Unpredictable Acrobatic Combat Style",
      "Immunity to Telepathy & Poisons"
    ],
    stats: { intelligence: 82, strength: 75, speed: 80, durability: 98, energy: 45, combat: 94 },
    keyAppearances: ["Deadpool (2016)", "Deadpool 2 (2018)", "Deadpool & Wolverine (2024)"],
    accentColor: "#E62429",
    secondaryColor: "#111111",
    image: "https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
  },

  // 10. WOLVERINE
  {
    id: "wolverine",
    name: "Wolverine",
    realName: "James 'Logan' Howlett",
    alias: "Weapon X",
    affiliation: "X-Men / Mutants",
    category: "mutants",
    actor: "Hugh Jackman",
    firstAppearance: "X-Men (2000) / Deadpool & Wolverine (2024)",
    status: "Active Mutant Legend",
    quote: "I'm the best there is at what I do, but what I do isn't very nice.",
    struggleQuote: "I let down my entire world. Everyone I cared about died because I walked away. But not this time.",
    bio: "A centuries-old mutant with enhanced animalistic senses, retractable bone claws, and an indestructible Adamantium skeleton. Haunted by the deaths of his teammates, Wolverine stepped up alongside Deadpool to rescue the multiverse.",
    powers: [
      "Indestructible Adamantium Skeleton & Claws",
      "Hyper-Accelerated Healing Factor",
      "Feral Senses & Tracking Instincts",
      "Centuries of Combat Experience",
      "Superhuman Agility, Reflexes & Stamina"
    ],
    stats: { intelligence: 80, strength: 84, speed: 78, durability: 99, energy: 30, combat: 98 },
    keyAppearances: ["X-Men (2000)", "Logan (2017)", "Deadpool & Wolverine (2024)"],
    accentColor: "#F5B31C",
    secondaryColor: "#0D47A1",
    image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg"
  },

  // 11. SCARLET WITCH
  {
    id: "scarlet-witch",
    name: "Scarlet Witch",
    realName: "Wanda Maximoff",
    alias: "The Harbinger of Chaos Magic",
    affiliation: "Avengers / Westview",
    category: "sorcerers",
    actor: "Elizabeth Olsen",
    firstAppearance: "Captain America: The Winter Soldier (2014)",
    status: "Unknown / Presumed Sacrificed at Mount Wundagore",
    quote: "You break the rules and become a hero. I do it and I become the enemy. That doesn't seem fair.",
    struggleQuote: "What is grief, if not love persevering? I can't control their fear, only my own.",
    bio: "Orphaned in Sokovia alongside Pietro and unlocked by the Mind Stone, Wanda embraced her mythic destiny as the Scarlet Witch—a being forged with Chaos Magic capable of rewriting the fabric of reality itself.",
    powers: [
      "Chaos Magic & Spontaneous Reality Warping",
      "Telekinesis & Forcefield Projection",
      "Telepathy, Mind Control & Illusion Casting",
      "Multiversal Dreamwalking & Transmutation",
      "Flight & Energy Blast Projection"
    ],
    stats: { intelligence: 86, strength: 70, speed: 75, durability: 82, energy: 100, combat: 85 },
    keyAppearances: ["Age of Ultron (2015)", "Civil War (2016)", "Infinity War (2018)", "WandaVision (2021)", "Multiverse of Madness (2022)"],
    accentColor: "#C2185B",
    secondaryColor: "#E62429",
    image: "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg"
  },

  // 12. LOKI
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
    struggleQuote: "I am burdened with glorious purpose... but I finally understand what that purpose means: holding the branches together so everyone has a chance.",
    bio: "Adopted son of Odin and Frost Giant prince who oscillated between villainy and heroism. Captured by the TVA, Loki learned the truth of He Who Remains, ascending the temporal throne to hold all multiverse timelines together at the End of Time.",
    powers: [
      "Mastery of Illusions, Astral Projection & Shapeshifting",
      "Temporal Time-Slipping & Chronokinesis",
      "Multiversal Timeline Weaving & Sustenance",
      "Frost Giant Physiology & Superhuman Stamina",
      "Asgardian Sorcery & Dagger Combat"
    ],
    stats: { intelligence: 95, strength: 78, speed: 76, durability: 84, energy: 98, combat: 88 },
    keyAppearances: ["Thor (2011)", "The Avengers (2012)", "Ragnarok (2017)", "Infinity War (2018)", "Loki Season 1 & 2 (2021-2023)"],
    accentColor: "#2E7D32",
    secondaryColor: "#D6A84B",
    image: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg"
  },

  // 13. BLACK WIDOW
  {
    id: "black-widow",
    name: "Black Widow",
    realName: "Natalia Alianovna 'Natasha' Romanoff",
    alias: "The Master Assassin",
    affiliation: "Avengers / S.H.I.E.L.D.",
    category: "avengers",
    actor: "Scarlett Johansson",
    firstAppearance: "Iron Man 2 (2010)",
    status: "Fallen Hero (Sacrificed on Vormir)",
    quote: "I used to have nothing. And then I got this. This family.",
    struggleQuote: "I've got red in my ledger... I'd like to wipe it out. Whatever it takes.",
    bio: "Graduated from the Soviet Red Room as an elite operative. Defecting to S.H.I.E.L.D. after Clint Barton showed mercy, Natasha became the tactical glue of the Avengers, making the ultimate sacrifice on Vormir for the Soul Stone.",
    powers: [
      "Master Martial Artist (Multiple Combat Disciplines)",
      "Elite Infiltration, Espionage & Interrogation",
      "Expert Marksman & Acrobat",
      "Electroshock Widow's Bite Gauntlets & Batons",
      "Tactical Field Command & Psychological Warfare"
    ],
    stats: { intelligence: 90, strength: 65, speed: 82, durability: 72, energy: 35, combat: 98 },
    keyAppearances: ["Iron Man 2 (2010)", "The Avengers (2012)", "The Winter Soldier (2014)", "Civil War (2016)", "Endgame (2019)", "Black Widow (2021)"],
    accentColor: "#E62429",
    secondaryColor: "#212121",
    image: "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_FMjpg_UX1000_.jpg"
  },

  // 14. CAPTAIN MARVEL
  {
    id: "captain-marvel",
    name: "Captain Marvel",
    realName: "Carol Danvers",
    alias: "Cosmic Protector",
    affiliation: "Avengers / Starforce / SWORD",
    category: "cosmic",
    actor: "Brie Larson",
    firstAppearance: "Captain Marvel (2019)",
    status: "Active Cosmic Sentinel",
    quote: "Higher, further, faster, baby.",
    struggleQuote: "I have nothing to prove to you. I've been fighting with one arm tied behind my back, but what happens when I'm finally set free?",
    bio: "Former USAF test pilot infused with cosmic energy from the Tesseract. Awakening to her full Binary potential, Carol Danvers travels galaxies safeguarding thousands of worlds that have no Avengers to defend them.",
    powers: [
      "Cosmic Photon Energy Blasts & Energy Absorption",
      "Binary Super-Mode Luminescence",
      "FTL (Faster-Than-Light) Intergalactic Flight",
      "Superhuman Godlike Durability & Invulnerability",
      "Class-100 Superhuman Physical Strength"
    ],
    stats: { intelligence: 82, strength: 98, speed: 96, durability: 98, energy: 100, combat: 88 },
    keyAppearances: ["Captain Marvel (2019)", "Avengers: Endgame (2019)", "Shang-Chi (2021 Post-Credits)", "The Marvels (2023)"],
    accentColor: "#F5B31C",
    secondaryColor: "#E62429",
    image: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZOTlLWGWOGMtZWY4NmNlMV5BMl5BanBnXkFtZTgwLjExMDgwNzM@._V1_FMjpg_UX1000_.jpg"
  },

  // 15. ANT-MAN
  {
    id: "ant-man",
    name: "Ant-Man",
    realName: "Scott Edward Harris Lang",
    alias: "Giant-Man",
    affiliation: "Avengers",
    category: "avengers",
    actor: "Paul Rudd",
    firstAppearance: "Ant-Man (2015)",
    status: "Active Avenger / Quantum Explorer",
    quote: "I believe our best chance is to take a chance.",
    struggleQuote: "I'm just a guy who made a mistake and did time. But for my daughter, I'll shrink to the subatomic realm and fight a tyrant.",
    bio: "Reformed ex-con master burglar who inherited Dr. Hank Pym's shrinking technology. Trapped in the Quantum Realm during the Snap, Scott emerged with the crucial time travel concept that enabled the Avengers to assemble the Infinity Stones.",
    powers: [
      "Subatomic Size Reduction via Pym Particles",
      "Colossal Growth into Giant-Man (65+ Feet)",
      "Insect Communication EMP Helmet",
      "Quantum Realm Navigation & Disruption",
      "Concentrated Mass Density Strike Power"
    ],
    stats: { intelligence: 85, strength: 80, speed: 75, durability: 80, energy: 60, combat: 82 },
    keyAppearances: ["Ant-Man (2015)", "Captain America: Civil War (2016)", "Ant-Man and the Wasp (2018)", "Endgame (2019)", "Quantumania (2023)"],
    accentColor: "#C62828",
    secondaryColor: "#B0BEC5",
    image: "https://m.media-amazon.com/images/M/MV5BMjM2MjEyNzgwN15BMl5BanBnXkFtZTgwNzk0MTUzNTE@._V1_FMjpg_UX1000_.jpg"
  },

  // 16. HAWKEYE
  {
    id: "hawkeye",
    name: "Hawkeye",
    realName: "Clinton Francis 'Clint' Barton",
    alias: "Ronin",
    affiliation: "Avengers / S.H.I.E.L.D.",
    category: "avengers",
    actor: "Jeremy Renner",
    firstAppearance: "Thor (2011 Cameo) / The Avengers (2012)",
    status: "Active / Mentor to Kate Bishop",
    quote: "The city is flying and we're fighting an army of robots. And I have a bow and arrow. None of this makes sense.",
    struggleQuote: "Don't give me hope. But if there's even a chance to bring my family back, I'll shoot through every demon in this universe.",
    bio: "S.H.I.E.L.D.'s premier marksman who never misses. When his family turned to dust in the Snap, Clint embraced the merciless vigilante persona Ronin before rejoining the Avengers for the final battle against Thanos.",
    powers: [
      "Flawless Marksmanship & Archery Precision",
      "Arsenal of High-Tech Trick Arrows (Explosive, EMP, Pym)",
      "Master Martial Artist & Katana Swordsman",
      "Acrobatic Reflexes & Tactical Vision",
      "Stealth Infiltration Expert"
    ],
    stats: { intelligence: 80, strength: 65, speed: 74, durability: 70, energy: 40, combat: 94 },
    keyAppearances: ["The Avengers (2012)", "Age of Ultron (2015)", "Civil War (2016)", "Endgame (2019)", "Hawkeye (2021)"],
    accentColor: "#6A1B9A",
    secondaryColor: "#D6A84B",
    image: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
  },

  // 17. WINTER SOLDIER
  {
    id: "winter-soldier",
    name: "Winter Soldier / White Wolf",
    realName: "James Buchanan 'Bucky' Barnes",
    alias: "The Ghost of HYDRA",
    affiliation: "Thunderbolts / Avengers / Wakanda",
    category: "avengers",
    actor: "Sebastian Stan",
    firstAppearance: "Captain America: The First Avenger (2011)",
    status: "Active Leader of Thunderbolts",
    quote: "I remember all of them.",
    struggleQuote: "For seventy years, every time they put me on ice, I woke up with someone else's blood on my hands. I'm fighting to atone.",
    bio: "Steve Rogers' childhood friend who fell from a WWII train and was transformed into a cybernetic assassin by HYDRA. Freed from mind control in Wakanda, Bucky reclaimed his humanity and now fights as the White Wolf.",
    powers: [
      "Wakandan Vibranium Cybernetic Arm (Superhuman Striking)",
      "Super-Soldier Enhanced Physiology",
      "Master Marksman, Sniper & Knife Combatant",
      "Infiltration & Tactical Black Ops Mastery",
      "Enhanced Durability & Reflexes"
    ],
    stats: { intelligence: 78, strength: 82, speed: 78, durability: 85, energy: 30, combat: 96 },
    keyAppearances: ["The First Avenger (2011)", "The Winter Soldier (2014)", "Civil War (2016)", "Infinity War (2018)", "Endgame (2019)", "The Falcon and the Winter Soldier (2021)"],
    accentColor: "#37474F",
    secondaryColor: "#E62429",
    image: "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODgyODMzMTE@._V1_FMjpg_UX1000_.jpg"
  },

  // 18. STAR-LORD
  {
    id: "star-lord",
    name: "Star-Lord",
    realName: "Peter Jason Quill",
    alias: "Leader of the Guardians",
    affiliation: "Guardians of the Galaxy",
    category: "cosmic",
    actor: "Chris Pratt",
    firstAppearance: "Guardians of the Galaxy (2014)",
    status: "Active Cosmic Legend / Earth Citizen",
    quote: "Dance-off, bro. Me and you.",
    struggleQuote: "I lost my mom, I lost Yondu, I lost Gamora. But the family you find in the stars is what keeps you fighting.",
    bio: "Abducted from Earth in 1988 by the Ravagers, half-human half-Celestial Peter Quill formed the Guardians of the Galaxy. Wielding dual quad-blasters and iconic 70s mixtape anthems, he saved the cosmos multiple times.",
    powers: [
      "Expert Cosmic Pilot & Aerial Combatant",
      "Dual Element Quad Blasters & Gravity Mines",
      "Rocket-Propelled Jet Boots",
      "Tactical Improvisation & Leadership",
      "Latent Celestial Durability Heritage"
    ],
    stats: { intelligence: 82, strength: 70, speed: 75, durability: 78, energy: 65, combat: 85 },
    keyAppearances: ["Guardians of the Galaxy (2014)", "Vol. 2 (2017)", "Infinity War (2018)", "Endgame (2019)", "Vol. 3 (2023)"],
    accentColor: "#C62828",
    secondaryColor: "#D6A84B",
    image: "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_FMjpg_UX1000_.jpg"
  },

  // 19. SHANG-CHI
  {
    id: "shang-chi",
    name: "Shang-Chi",
    realName: "Xu Shang-Chi",
    alias: "Master of the Ten Rings",
    affiliation: "Avengers / Ta Lo Protector",
    category: "avengers",
    actor: "Simu Liu",
    firstAppearance: "Shang-Chi and the Legend of the Ten Rings (2021)",
    status: "Active Avenger / Guardian of the Rings",
    quote: "You can't outrun your past.",
    struggleQuote: "I spent ten years trying to convince myself I wasn't my father's weapon. Now I wield the Ten Rings for the light.",
    bio: "Trained since childhood by his thousand-year-old warlord father Wenwu to be the ultimate assassin, Shang-Chi rebelled to live in San Francisco before uncovering his mother's mythical homeland of Ta Lo and claiming the legendary Ten Rings.",
    powers: [
      "Mastery of the Mythical Ten Rings (Immense Energy & Flight)",
      "World-Class Wushu & Dragon-Style Martial Arts",
      "Chi Energy Manipulation & Force Deflection",
      "Enhanced Longevity & Near-Invulnerability with Rings",
      "Acrobatic Reflexes & Staff Weaponry Mastery"
    ],
    stats: { intelligence: 84, strength: 85, speed: 88, durability: 88, energy: 92, combat: 98 },
    keyAppearances: ["Shang-Chi and the Legend of the Ten Rings (2021)"],
    accentColor: "#E62429",
    secondaryColor: "#D6A84B",
    image: "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmMwQmM2Mjk3OWNhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"
  },

  // 20. MOON KNIGHT
  {
    id: "moon-knight",
    name: "Moon Knight",
    realName: "Marc Spector / Steven Grant / Jake Lockley",
    alias: "The Fist of Khonshu",
    affiliation: "Midnight Sons / Egyptian Avatar",
    category: "sorcerers",
    actor: "Oscar Isaac",
    firstAppearance: "Moon Knight (2022)",
    status: "Active Avatar of the Moon God",
    quote: "We protect the vulnerable and deliver justice.",
    struggleQuote: "I have dissociative identity disorder. We share this body, but through our broken pieces, Khonshu forged an avatar of vengeance.",
    bio: "Mercenary Marc Spector was left for dead in the Egyptian desert before being resurrected as the Avatar of Khonshu, the Egyptian Moon God. Sharing consciousness with museum gift-shop clerk Steven Grant, he manifests mystical ceremonial armor.",
    powers: [
      "Ceremonial Crescent Darts & Mystic Bo-Staff",
      "Gliding Cape & Lunar Energy Empowerment",
      "Mystical Healing Factor via Khonshu",
      "Master Hand-to-Hand Combatant & Marksman",
      "Multiple Persona Adaptation (Marc, Steven, Jake)"
    ],
    stats: { intelligence: 82, strength: 80, speed: 78, durability: 86, energy: 75, combat: 92 },
    keyAppearances: ["Moon Knight (2022)"],
    accentColor: "#ECEFF1",
    secondaryColor: "#CFD8DC",
    image: "https://m.media-amazon.com/images/M/MV5BYTc5OWNhBjktM2M0Yy00OWUwLTkzODctNDlhNjM2ZTI5MziiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
  },

  // 21. VISION
  {
    id: "vision",
    name: "Vision",
    realName: "Vision / White Vision",
    alias: "Synthezoid Guardian",
    affiliation: "Avengers / S.W.O.R.D.",
    category: "avengers",
    actor: "Paul Bettany",
    firstAppearance: "Avengers: Age of Ultron (2015)",
    status: "Active / Restoring Memories as White Vision",
    quote: "A thing isn't beautiful because it lasts.",
    struggleQuote: "I was born yesterday. What is the Ship of Theseus? If memories remain, then I am indeed Vision.",
    bio: "Synthezoid created by Ultron using Helen Cho's regeneration cradle, a Vibranium-infused cellular structure, and the Mind Stone, awakened with Tony Stark's JARVIS matrix. Possessing boundless philosophical wonder, he loved Wanda Maximoff completely.",
    powers: [
      "Density Manipulation (Intangible Phasing & Diamond Density)",
      "Mind Stone Solar Energy Beam Projection",
      "Supersonic Flight & Levitation",
      "Superhuman Computational Cognition",
      "Vibranium-Molecular Cellular Durability"
    ],
    stats: { intelligence: 99, strength: 90, speed: 85, durability: 95, energy: 98, combat: 85 },
    keyAppearances: ["Age of Ultron (2015)", "Civil War (2016)", "Infinity War (2018)", "WandaVision (2021)"],
    accentColor: "#F5B31C",
    secondaryColor: "#C2185B",
    image: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItU3AxNDlhOGE2MTliXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"
  },

  // 22. DAREDEVIL
  {
    id: "daredevil",
    name: "Daredevil",
    realName: "Matthew Michael 'Matt' Murdock",
    alias: "The Man Without Fear / The Devil of Hell's Kitchen",
    affiliation: "Defenders / New York Street Level",
    category: "avengers",
    actor: "Charlie Cox",
    firstAppearance: "Daredevil (2015) / Spider-Man: No Way Home (2021)",
    status: "Active Hell's Kitchen Defender",
    quote: "I'm not seeking penance for what I've done, Father. I'm asking forgiveness for what I'm about to do.",
    struggleQuote: "I lost my sight as a boy, but in the dark I found justice. A city needs heroes on the streets just as much as in the stars.",
    bio: "Blinded by radioactive chemicals as a child, Matt Murdock's remaining senses were magnified to superhuman acuity. By day an attorney fighting in the courtroom, by night he patrols Hell's Kitchen with his dual billy clubs.",
    powers: [
      "Superhuman Radar Sense & Omnidirectional Spatial Awareness",
      "Master Martial Artist (Boxing, Ninjutsu, Muay Thai)",
      "Multi-Function Retractable Cable Billy Clubs",
      "Peak Human Reflexes & Acrobatic Prowess",
      "Superhuman Hearing & Heartbeat Lie Detection"
    ],
    stats: { intelligence: 88, strength: 70, speed: 78, durability: 75, energy: 30, combat: 96 },
    keyAppearances: ["Daredevil (2015-2018)", "The Defenders (2017)", "Spider-Man: No Way Home (2021)", "She-Hulk (2022)", "Echo (2024)", "Born Again (2025)"],
    accentColor: "#B71C1C",
    secondaryColor: "#F5B31C",
    image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg"
  },

  // 23. SHURI
  {
    id: "shuri",
    name: "Shuri",
    realName: "Princess Shuri",
    alias: "The Black Panther of Wakanda",
    affiliation: "Wakanda / Avengers",
    category: "wakanda",
    actor: "Letitia Wright",
    firstAppearance: "Black Panther (2018)",
    status: "Active Monarch & Protector of Wakanda",
    quote: "I found a way to synthesize the Heart-Shaped Herb.",
    struggleQuote: "I thought my science could fix everything. When my brother died, it broke me. But vengeance cannot consume our people.",
    bio: "Chief of Wakandan Science and sister to King T'Challa. Following the tragic loss of her family, Shuri synthetically recreated the extinct Heart-Shaped Herb, embraced the ancestral mantle, and defended Wakanda against Namor.",
    powers: [
      "Genius-Level Nanotechnology & Vibranium Engineering",
      "Heart-Shaped Herb Superhuman Agility & Reflexes",
      "Vibranium Panther Suit with Kinetic Absorption",
      "Sonic Vibranium Gauntlets",
      "Scientific Innovation Mastery"
    ],
    stats: { intelligence: 100, strength: 78, speed: 82, durability: 85, energy: 80, combat: 88 },
    keyAppearances: ["Black Panther (2018)", "Infinity War (2018)", "Endgame (2019)", "Wakanda Forever (2022)"],
    accentColor: "#7B1FA2",
    secondaryColor: "#D6A84B",
    image: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg"
  },

  // 24. NAMOR
  {
    id: "namor",
    name: "Namor",
    realName: "Ch'ah Toh Almehen / K'uk'ulkan",
    alias: "The Sub-Mariner / The Feathered Serpent God",
    affiliation: "Talokan Kingdom / Mutants",
    category: "villains",
    actor: "Tenoch Huerta Mejía",
    firstAppearance: "Black Panther: Wakanda Forever (2022)",
    status: "Active Ruler of Talokan",
    quote: "Only the most broken people can be great leaders.",
    struggleQuote: "For five centuries I kept my people safe under the ocean from the surface world's greed. If the surface threatens my ocean, I will flood their world.",
    bio: "Mutant ruler of the hidden underwater civilization of Talokan. Born in 1571 with ankle wings and amphibious physiology, Namor is revered as the Feathered Serpent God K'uk'ulkan by his people, fighting fiercely to keep their Vibranium safe.",
    powers: [
      "Flight via Ankle Wing Appendages",
      "Subaquatic Superhuman Strength (Rivals Hulk on Water)",
      "Amphibious Aquatic Respiration & Swimming Velocity",
      "Vibranium Spear Combat Mastery",
      "Hydrokinetic Tactician & Centenarian Longevity"
    ],
    stats: { intelligence: 88, strength: 95, speed: 90, durability: 92, energy: 75, combat: 94 },
    keyAppearances: ["Black Panther: Wakanda Forever (2022)"],
    accentColor: "#00695C",
    secondaryColor: "#F5B31C",
    image: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg"
  }
];
