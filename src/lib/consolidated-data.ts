export type Book = {
  id: string;
  title: string;
  author?: string;
  tag: string;
  age: string;
  ageCategory: "0-2" | "2-4" | "5-7" | "8-10";
  minutes: number;
  price: string;
  blurb: string;
  questions: string[];
  goals: string[];
  interests: string[];
  format: string;
  tint: string;
  parentNote?: string;
  downloadUrl: string;
  printableSvgPath: string;
  pedagogicalFocus: string;
  vocabularyWords: string[];
  dialogicGuide: { before: string; during: string; after: string };
};

export const ALL_BOOKS: Book[] = [
  {
    id: "fox-wakes-the-sun",
    title: "Fox Wakes the Sun",
    author: "Eliza Thorn",
    tag: "Bestseller",
    age: "Ages 3–5",
    ageCategory: "2-4",
    minutes: 8,
    price: "$12.99",
    blurb: "A fox who refuses to wait for morning. Built for the 7am negotiation every parent knows.",
    downloadUrl: "/downloads/books/fox-wakes-the-sun-guide.svg",
    printableSvgPath: "/downloads/books/fox-wakes-the-sun-guide.svg",
    pedagogicalFocus: "Routines, morning negotiations, patient waiting, and humor during transitions.",
    vocabularyWords: ["impatient", "horizon", "glisten"],
    dialogicGuide: {
      before: "Look at the cover: Why do you think Fox is awake when the sky is still dark blue?",
      during: "What do you think the sun is going to say when Fox roars his wake-up call?",
      after: "If you were Fox, what bedtime snack would you offer the sun so it rises happily?"
    },
    questions: [
      "What would you do if the sun refused to wake up?",
      "Is Fox impatient, or is he being clever? How can you tell?",
      "Where should the sun rise next — and why there?",
    ],
    goals: ["laugh together", "bedtime routine"],
    interests: ["animals", "adventure"],
    format: "read together",
    tint: "bg-[#ff3b1f]",
    parentNote: "Great for reluctant sleepers and morning snuggles.",
  },
  {
    id: "whale-who-forgot-the-sea",
    title: "Whale Who Forgot the Sea",
    author: "Calum Morris",
    tag: "Classroom Pick",
    age: "Ages 4–6",
    ageCategory: "2-4",
    minutes: 10,
    price: "$14.99",
    blurb: "A big blue whale, a small worry, and the tide that keeps turning up on time.",
    downloadUrl: "/downloads/books/whale-who-forgot-the-sea-guide.svg",
    printableSvgPath: "/downloads/books/whale-who-forgot-the-sea-guide.svg",
    pedagogicalFocus: "Emotional regulation, grounding techniques, easing bedtime worry, and trusting life's rhythms.",
    vocabularyWords: ["current", "tide", "reassure"],
    dialogicGuide: {
      before: "How do you think a gigantic creature like a whale can feel small inside?",
      during: "Look at Whale's eyes when the water recedes. How can we tell he feels worried?",
      after: "What is something that always comes back, just like the evening tide?"
    },
    questions: [
      "When did you last forget something important?",
      "Who helps Whale remember — and how?",
      "What does the tide do while Whale is worried?",
    ],
    goals: ["big feelings", "calm down"],
    interests: ["animals", "feelings"],
    format: "read together",
    tint: "bg-[#5b8def]",
    parentNote: "Gentle pacing eases bedtime anxiety and big worries.",
  },
  {
    id: "mango-the-moon-cat",
    title: "Mango the Moon Cat",
    author: "Sora Kim",
    tag: "Staff Favorite",
    age: "Ages 5–7",
    ageCategory: "5-7",
    minutes: 12,
    price: "$13.50",
    blurb: "Mango climbs to the moon to count the stars, and loses track of exactly one.",
    downloadUrl: "/downloads/books/mango-the-moon-cat-guide.svg",
    printableSvgPath: "/downloads/books/mango-the-moon-cat-guide.svg",
    pedagogicalFocus: "Astronomy curiosity, counting volume, observational persistence, and cozy nighttime wonder.",
    vocabularyWords: ["constellation", "luminous", "prowl"],
    dialogicGuide: {
      before: "If you could climb a ladder to the moon like Mango, what would you pack in your backpack?",
      during: "Can you help Mango count the bright stars in the Big Dipper on this page?",
      after: "Why did the last star feel special even though it was tiny?"
    },
    questions: [
      "How many stars can you count on this page?",
      "Why does Mango go up instead of out?",
      "What would you name the star that went missing?",
    ],
    goals: ["love reading", "spark curiosity"],
    interests: ["animals", "science"],
    format: "read together",
    tint: "bg-[#3b6fe8]",
    parentNote: "Rich vocabulary that naturally introduces wonder and astronomy.",
  },
  {
    id: "the-rabbit-listened",
    title: "The Rabbit Listened",
    author: "Cori Doerrfeld",
    tag: "Emotional Literacy",
    age: "Ages 2–5",
    ageCategory: "2-4",
    minutes: 6,
    price: "$15.99",
    blurb: "When something sad happens, all the animals offer advice, but only the rabbit simply sits and listens.",
    downloadUrl: "/downloads/books/the-rabbit-listened-guide.svg",
    printableSvgPath: "/downloads/books/the-rabbit-listened-guide.svg",
    pedagogicalFocus: "Active listening, companion empathy, holding space for grief, and emotional co-regulation.",
    vocabularyWords: ["shattered", "sympathy", "companion"],
    dialogicGuide: {
      before: "Have you ever built something tall that accidentally fell down? How did it feel?",
      during: "Bear wanted to roar and Snake wanted to knock things down. Did that help Taylor?",
      after: "How did Rabbit make Taylor feel safe without saying a single word?"
    },
    questions: [
      "Which animal tried to make Taylor feel better first?",
      "What did the rabbit do that made Taylor feel safe?",
      "Who is someone you can sit with when you are upset?",
    ],
    goals: ["big feelings", "calm down", "build empathy"],
    interests: ["feelings", "animals"],
    format: "read together",
    tint: "bg-[#ff8fb1]",
    parentNote: "Opens the door to discussing grief, frustration, and quiet companionship.",
  },
  {
    id: "the-book-with-no-pictures",
    title: "The Book With No Pictures",
    author: "B. J. Novak",
    tag: "Laughter Champion",
    age: "Ages 4–8",
    ageCategory: "5-7",
    minutes: 9,
    price: "$13.99",
    blurb: "Turns the grown-up into the entertainment! Every single word must be read out loud, no matter how ridiculous.",
    downloadUrl: "/downloads/books/fox-wakes-the-sun-guide.svg",
    printableSvgPath: "/downloads/books/fox-wakes-the-sun-guide.svg",
    pedagogicalFocus: "Orthographic-to-phonological decoding joy, linguistic absurdism, and parent-child bonding through shared laughter.",
    vocabularyWords: ["ridiculous", "obligation", "preposterous"],
    dialogicGuide: {
      before: "Can a book without any pictures still be funny? Let's make a bet!",
      during: "Listen closely — what silly sound do you want me to read with an opera singer voice?",
      after: "Which made-up word was your absolute favorite to hear?"
    },
    questions: [
      "Which silly sound was the hardest for me to say?",
      "Why does a book without pictures still make us laugh?",
      "What crazy word can you invent right now?",
    ],
    goals: ["love reading", "laugh together"],
    interests: ["silly", "wordplay"],
    format: "read together",
    tint: "bg-[#ffc531]",
    parentNote: "The ultimate weapon for reluctant readers who think books are boring.",
  },
  {
    id: "jabari-jumps",
    title: "Jabari Jumps",
    author: "Gaia Cornwall",
    tag: "Courage Builder",
    age: "Ages 4–7",
    ageCategory: "5-7",
    minutes: 7,
    price: "$14.99",
    blurb: "Jabari is definitely ready to jump off the high diving board... or is he? A gentle story about being brave.",
    downloadUrl: "/downloads/books/whale-who-forgot-the-sea-guide.svg",
    printableSvgPath: "/downloads/books/whale-who-forgot-the-sea-guide.svg",
    pedagogicalFocus: "Somatic anxiety awareness, father-son emotional support, deep breathing, and self-paced courage.",
    vocabularyWords: ["determined", "anticipation", "exhilarating"],
    dialogicGuide: {
      before: "Look how tall that ladder is! Have you ever stood at the top of something very high?",
      during: "What did Jabari's dad squeeze into his hand to remind him it's okay to feel nervous?",
      after: "When is a time you felt scared first, but proud after trying?"
    },
    questions: [
      "How did Jabari's tummy feel before he climbed up?",
      "What did his dad whisper to him?",
      "What is something you want to try when you are ready?",
    ],
    goals: ["build confidence", "big feelings"],
    interests: ["sports", "feelings"],
    format: "read together",
    tint: "bg-[#6ecf9b]",
    parentNote: "Perfect before starting school, swim lessons, or trying anything new.",
  },
  {
    id: "ada-twist-scientist",
    title: "Ada Twist, Scientist",
    author: "Andrea Beaty",
    tag: "STEM Pioneer",
    age: "Ages 5–8",
    ageCategory: "5-7",
    minutes: 12,
    price: "$16.99",
    blurb: "Curious Ada has all the questions. Why does it tick? Why does it smell? A rhythmic celebration of curiosity.",
    downloadUrl: "/downloads/books/mango-the-moon-cat-guide.svg",
    printableSvgPath: "/downloads/books/mango-the-moon-cat-guide.svg",
    pedagogicalFocus: "The scientific method, hypothesis generation, persistence through failure, and rich rhyming cadence.",
    vocabularyWords: ["hypothesis", "investigate", "chaos"],
    dialogicGuide: {
      before: "Why do you think Ada fills entire walls with question marks?",
      during: "What is Ada's plan to figure out where that pungent mystery smell came from?",
      after: "What is a mystery around our house you want to investigate tomorrow?"
    },
    questions: [
      "What mystery was Ada trying to solve?",
      "What does Ada do when an experiment fails?",
      "What question about the world would you love to investigate?",
    ],
    goals: ["spark curiosity", "build stamina"],
    interests: ["science", "inventing"],
    format: "read together",
    tint: "bg-[#a8c4ff]",
    parentNote: "Rhyming text and detailed illustrations encourage perseverance.",
  },
  {
    id: "magic-tree-house-dinosaurs",
    title: "Magic Tree House: Dinosaurs Before Dark",
    author: "Mary Pope Osborne",
    tag: "Early Chapter Book",
    age: "Ages 6–9",
    ageCategory: "5-7",
    minutes: 20,
    price: "$6.99",
    blurb: "Jack and Annie discover a tree house filled with books that whisks them back to prehistoric times.",
    downloadUrl: "/downloads/books/fox-wakes-the-sun-guide.svg",
    printableSvgPath: "/downloads/books/fox-wakes-the-sun-guide.svg",
    pedagogicalFocus: "Transitioning to early chapter books, dual protagonist dynamics, and taking observational notes.",
    vocabularyWords: ["prehistoric", "crest", "fossil"],
    dialogicGuide: {
      before: "If you found a secret tree house with magical books, which era would you wish to visit?",
      during: "How did Jack use his notebook to stay safe when the Pteranodon flew over?",
      after: "Would you rather be cautious like Jack or brave and impulsive like Annie?"
    },
    questions: [
      "Which dinosaur did Jack and Annie meet first?",
      "How did Jack use his notebook to stay safe?",
      "If our tree house could travel anywhere, where would we go?",
    ],
    goals: ["build stamina", "independent reading"],
    interests: ["dinosaurs", "adventure"],
    format: "take turns",
    tint: "bg-[#e8b87a]",
    parentNote: "Short chapters with illustrations make the leap to chapter books exciting.",
  },
  {
    id: "dog-man",
    title: "Dog Man: A Tale of Two Kitties",
    author: "Dav Pilkey",
    tag: "Graphic Novel",
    age: "Ages 7–11",
    ageCategory: "8-10",
    minutes: 25,
    price: "$12.99",
    blurb: "Part dog, part policeman, all hero! Visual storytelling packed with empathy, humor, and flip-o-ramas.",
    downloadUrl: "/downloads/books/fox-wakes-the-sun-guide.svg",
    printableSvgPath: "/downloads/books/fox-wakes-the-sun-guide.svg",
    pedagogicalFocus: "Visual literacy, multimodal inference, redemption arcs, and comic book creation.",
    vocabularyWords: ["redemption", "clone", "villainous"],
    dialogicGuide: {
      before: "Look at the comic panels. How do the sound bubbles make the action feel fast?",
      during: "How does Li'l Petey's sweet kindness start to change Petey's grumpy heart?",
      after: "Why is graphic novel reading so good for exercising our imagination muscles?"
    },
    questions: [
      "How does Li'l Petey help Petey become a better dad?",
      "What visual clue told you what Dog Man was feeling?",
      "Why is doing good even harder than being mischievous?",
    ],
    goals: ["love reading", "build stamina"],
    interests: ["comics", "silly", "adventure"],
    format: "read alone",
    tint: "bg-[#ff8fb1]",
    parentNote: "Graphic novels are real reading — they boost inference, pacing, and vocabulary volume.",
  },
];

/* ──────────────────────── 30 DAYS OF TINY TRIUMPHS ──────────────────────── */
export type ChallengeDay = {
  day: number;
  phase: string;
  skill: string;
  title: string;
  action: string;
  cta: string;
  asset: string;
  question: string;
};

export const REELS_DAYS: ChallengeDay[] = [
  { day: 1, phase: "Sound play", skill: "Intro Routine", title: "Can the bear read this tiny word?", action: "Host introduces the 3-step sound-and-blend routine; bear guesses, then blends c-a-t.", cta: "Follow for 30 days of micro-phonics", asset: "Start Here Roadmap", question: "What is your child's favorite word right now?" },
  { day: 2, phase: "Sound play", skill: "First sound", title: "What sound starts sun?", action: "Host stretches the word (/sss-un/); bear chooses the /s/ picture card.", cta: "Comment the first sound in your child's name", asset: "Beginning-sounds card", question: "Can you find two things in this room starting with /s/?" },
  { day: 3, phase: "CVC foundations", skill: "Blend m-a-t", title: "Don’t say letter names — listen to the sounds", action: "Host taps /m/ /ă/ /t/; bear slides cards together to read mat.", cta: "Save and practice 3 times", asset: "CVC sound-box mat", question: "What rhymes with mat that you can wear on your head?" },
  { day: 4, phase: "CVC foundations", skill: "Short a", title: "Which word belongs with cat: map or sit?", action: "Bear sorts map, fan, sit into short-a and not-short-a baskets.", cta: "Comment the short-a word", asset: "Short-a word family page", question: "Does 'hat' belong in the cat family?" },
  { day: 5, phase: "CVC foundations", skill: "-at family", title: "How many -at words can you make?", action: "Host changes the first letter: cat, bat, hat, sat.", cta: "Comment one more -at word", asset: "Word-family slider cards", question: "Can a bear fit in a flat hat?" },
  { day: 6, phase: "CVC foundations", skill: "Short i", title: "Bear keeps mixing up sit and sat!", action: "Contrast mouth shape for /ĭ/ and /ă/; bear points to the correct picture.", cta: "Share with a parent friend", asset: "Short-vowel mouth guide", question: "Show me your smile when you say /ĭ/!" },
  { day: 7, phase: "Weekly challenge", skill: "Mixed CVC", title: "Beat the bear: read these 5 CVC words", action: "Fast quiz: pig, log, sun, bed, cup.", cta: "Comment your score out of 5", asset: "CVC speed challenge", question: "Which word was the quickest to read?" },
  { day: 8, phase: "CVC foundations", skill: "Short e", title: "Can you hear the middle sound in bed?", action: "Host uses three sound boxes; bear taps the middle box for /ĕ/.", cta: "Save for sound-box practice", asset: "Phoneme mapping sheet", question: "What color starts with /ĕ/?" },
  { day: 9, phase: "CVC foundations", skill: "Short o", title: "Bear says dig when the word is dog!", action: "Contrast dig/dog with mouth position and animal sound clues.", cta: "Comment the correct vowel", asset: "Short-o worksheet", question: "Does a frog hop or dig?" },
  { day: 10, phase: "CVC foundations", skill: "Short u", title: "Which word matches the picture: sun or sin?", action: "Bear chooses; host models the middle sound with joyful reinforcement.", cta: "Download the short-u page", asset: "Short-u activity sheet", question: "What is warmer: the sun or a cup of cocoa?" },
  { day: 11, phase: "CVC foundations", skill: "Word building", title: "One letter changes the whole word", action: "Build can → cat → hat → hot with magnetic letters.", cta: "Comment the word chain you want next", asset: "Word-building mat", question: "Can you change 'hot' into 'pot'?" },
  { day: 12, phase: "CVC foundations", skill: "Segmenting", title: "Can the bear spell fish with sound boxes?", action: "Host says the word; bear taps each phoneme and places letter tiles.", cta: "Save for spelling practice", asset: "Encoding worksheet", question: "How many sounds are in f-i-sh? (3 sounds, 4 letters!)" },
  { day: 13, phase: "Weekly challenge", skill: "Mixed CVC", title: "Three seconds per word — ready?", action: "Reveal map, hen, lip, fox, sun; bear reads along with the audience.", cta: "Comment the trickiest word", asset: "Mixed CVC mini-book", question: "Can you read all five before the timer rings?" },
  { day: 14, phase: "Parent practice", skill: "60-second routine", title: "A reading game for busy family evenings", action: "Say it, tap it, blend it, use it in a silly sentence.", cta: "Share with a caregiver", asset: "One-minute routine card", question: "What is the funniest sentence you made today?" },
  { day: 15, phase: "Digraphs", skill: "sh sound", title: "Two letters, one sound: can you find sh?", action: "Bear searches for ship, shop, fish; host demonstrates the quiet /sh/ gesture.", cta: "Comment a sh-word", asset: "Digraph picture sort", question: "Put your finger to your lips: what sound does that make?" },
  { day: 16, phase: "Digraphs", skill: "ch sound", title: "Is it ship or chip?", action: "Contrast sh and ch with two illustrated cards and train sounds.", cta: "Save the contrast", asset: "sh/ch sound chart", question: "Chugga-chugga-choo-choo starts with which letters?" },
  { day: 17, phase: "Digraphs", skill: "th sound", title: "Put your tongue gently between your teeth", action: "Host demonstrates this/thumb; bear repeats the voiced and unvoiced sounds.", cta: "Comment a th-word", asset: "Tongue placement card", question: "Can you feel the air when you say 'thumb'?" },
  { day: 18, phase: "Blends", skill: "st / sl", title: "Can you keep both sounds in the blend?", action: "Bear stretches stop and slip; host shows both consonants keep their voice.", cta: "Follow for the next blend", asset: "Blend list printable", question: "What does a snail do: stop or slide?" },
  { day: 19, phase: "Weekly challenge", skill: "Word hunt", title: "Find 5 digraphs before the bear does", action: "Bear points to sh, ch, th, wh words on a friendly illustrated word wall.", cta: "Pause and comment your score", asset: "Printable word hunt", question: "How many wh- words did you spot?" },
  { day: 20, phase: "Long vowels", skill: "Silent e", title: "Why does the e stay quiet in cake?", action: "Compare cap and cape with a magic wand visual; e taps the vowel to say its name.", cta: "Save the magic rule", asset: "Silent-e mini poster", question: "What does a tap become with magic e?" },
  { day: 21, phase: "Long vowels", skill: "Long a", title: "Turn tap into tape!", action: "Add final e and read tap/tape, cap/cape, mad/made.", cta: "Comment your own pair", asset: "Long-a word slider", question: "Are you mad, or did you make something?" },
  { day: 22, phase: "Long vowels", skill: "Long i", title: "Can one quiet letter change kit?", action: "Transform kit → kite and rid → ride.", cta: "Share with a learner", asset: "Long-i transformation sheet", question: "Would you rather fly a kite or ride a bike?" },
  { day: 23, phase: "Long vowels", skill: "Long o", title: "Which one flies: hop or hope?", action: "Use picture context, then contrast the vowel sound.", cta: "Comment the answer", asset: "Long-o printable", question: "Can a bunny hop or hope?" },
  { day: 24, phase: "Long vowels", skill: "Long e", title: "Can you spot the long-e team?", action: "Introduce see, feet, tree; bear highlights the double ee team.", cta: "Save the pattern", asset: "Long-e word cards", question: "Look at your shoes: what is inside them?" },
  { day: 25, phase: "Weekly challenge", skill: "Vowel sort", title: "Short vowel, silent-e, or vowel team?", action: "Bear sorts words into three labeled color baskets.", cta: "Comment one word in each basket", asset: "Vowel sort challenge pack", question: "Which basket gets 'boat'?" },
  { day: 26, phase: "Sight words", skill: "from", title: "Don’t just memorize it — use from", action: "Host models the sentence; bear acts out the meaning with a gift box and map.", cta: "Write a sentence with from", asset: "Sight-word sentence builder", question: "Where is a letter from a friend sent from?" },
  { day: 27, phase: "Sight words", skill: "for", title: "Who is this special story for?", action: "Bear gives a book for the learner; host models two short joyful sentences.", cta: "Comment who your book is for", asset: "Sight-word story card", question: "Who did you read for today?" },
  { day: 28, phase: "Book connection", skill: "Read-aloud", title: "What happens next?", action: "Host reads an original mini-story; bear makes a prediction from the illustration.", cta: "Comment your prediction", asset: "Read-aloud prompt cards", question: "Did the bear guess right?" },
  { day: 29, phase: "Free resources", skill: "Printables", title: "Turn 5 minutes into reading confidence", action: "Host shows the worksheet; bear completes one item and cheers.", cta: "Download the free printable library", asset: "Printable library collection", question: "Which sheet will you print first?" },
  { day: 30, phase: "Finale", skill: "Celebration", title: "Reading Champion: 30 days complete!", action: "Celebration montage; bear presents the official Printable Reading Champion Certificate.", cta: "Download your certificate", asset: "Official Champion Certificate", question: "What is your child's favorite reading memory this month?" },
];

export const PHASES = [
  { label: "Sound play", range: "Days 1–2", color: "bg-[#6ecf9b]", note: "Hear it before you see it" },
  { label: "CVC foundations", range: "Days 3–14", color: "bg-[#ffc531]", note: "Blend, segment, and read" },
  { label: "Digraphs + blends", range: "Days 15–19", color: "bg-[#ff3b1f]", note: "Keep the sounds moving" },
  { label: "Long vowels", range: "Days 20–25", color: "bg-[#a8c4ff]", note: "Make the silent e visible" },
  { label: "Words + stories", range: "Days 26–30", color: "bg-[#ff8fb1]", note: "Put reading into context" },
];

/* ──────────────────────── PRINTABLES CATALOG ──────────────────────── */
export type PrintableItem = {
  id: string;
  title: string;
  category: "Phonics & CVC" | "Reading Trackers" | "Coloring & Bookmarks" | "Classroom Packs";
  age: string;
  pages: number;
  description: string;
  color: string;
  downloadUrl: string;
  printableSvgPath: string;
  features: string[];
  pedagogyReason: string;
  parentGuideSteps: { step: string; title: string; desc: string }[];
  classroomTips: string;
  materialsNeeded: string[];
  targetWords?: string[];
};

export const PRINTABLES: PrintableItem[] = [
  {
    id: "7-day-reading-kit",
    title: "The 7-Day Reading Joy Kit & Conversation Prompts",
    category: "Reading Trackers",
    age: "All Ages",
    pages: 2,
    description: "Customizable 7-day family tracker with 7 thoughtful conversation prompts to ask after bedtime stories.",
    color: "bg-[#ffc531]",
    downloadUrl: "/downloads/printables/7-day-reading-kit.svg",
    printableSvgPath: "/downloads/printables/7-day-reading-kit.svg",
    features: ["A4 Printable SVG / PDF ready", "Zero guilt / no scorekeeping", "Bedtime prompt cards included", "Mascot sticker stamps"],
    pedagogyReason: "Habit formation research (Fogg Behavior Model) proves that tying a tiny reading session to an existing bedtime routine builds lifelong reader identity faster than high-pressure page quotas.",
    parentGuideSteps: [
      { step: "Step 1", title: "Tape to the Bedside or Fridge", desc: "Keep the tracker visible at eye level for your child so they anticipate story time." },
      { step: "Step 2", title: "Read for 5 to 10 Focused Minutes", desc: "Put phones in another room. Focus purely on connection, tone of voice, and laughter." },
      { step: "Step 3", title: "Ask the Daily Joy Spark", desc: "Use the prompt on the sheet (e.g. 'What made you smile?') instead of quizzing comprehension." },
      { step: "Step 4", title: "Color the Day's Mascot Badge", desc: "Let your child color or stamp the mascot box to celebrate the micro-win." }
    ],
    classroomTips: "Distribute on Monday for a home-school reading bridge. Instruct parents that rereading the same favorite picture book 7 times is celebrated.",
    materialsNeeded: ["Crayons or markers", "Tape or fridge magnet", "A cozy book"]
  },
  {
    id: "cvc-sound-box-mats",
    title: "CVC Sound-Box Mapping Mats",
    category: "Phonics & CVC",
    age: "Ages 4–6",
    pages: 6,
    description: "Multi-sensory Elkonin sound boxes for tap-and-blend phonics practice with short a, e, i, o, u words.",
    color: "bg-[#5b8def]",
    downloadUrl: "/downloads/printables/cvc-sound-box-mats.svg",
    printableSvgPath: "/downloads/printables/cvc-sound-box-mats.svg",
    features: ["Visual 3-part phoneme boxes", "Word lists included for all 5 short vowels", "Reusable with dry-erase sleeves", "Official Mascot Reading Bear logo"],
    pedagogyReason: "Elkonin sound-box research indicates that physically moving counters into segment boxes before writing letters accelerates phonemic awareness and orthographic mapping by up to 2.4x.",
    parentGuideSteps: [
      { step: "Step 1", title: "Say the Word Slowly", desc: "Pronounce 'c-a-t' stretching each sound: /k/ ... /ă/ ... /t/." },
      { step: "Step 2", title: "Push the Counters", desc: "Have your child push a coin, button, or finger into each box as they voice each sound." },
      { step: "Step 3", title: "Sweep & Blend", desc: "Slide a finger along the bottom arrow from left to right to blend the word smoothly together: 'cat!'" },
      { step: "Step 4", title: "Write the Letters", desc: "If ready, have child write the grapheme letter inside each box using a dry-erase marker." }
    ],
    classroomTips: "Use during small-group Tier 1 and Tier 2 phonics interventions. Provide tactile counters like playdough balls that kids squash for each phoneme.",
    materialsNeeded: ["Printable mat", "3 counters (coins, buttons, or playdough balls)", "Dry erase pocket sleeve", "Dry erase marker"],
    targetWords: ["cat", "map", "bed", "hen", "pig", "sit", "dog", "fox", "sun", "cup", "bat", "hot"]
  },
  {
    id: "silent-e-magic-wands",
    title: "Silent-e Magic Wand & Transformation Cards",
    category: "Phonics & CVC",
    age: "Ages 5–7",
    pages: 4,
    description: "Cut-out magic e wands that children slide over CVC words to reveal the long-vowel word (cap → cape).",
    color: "bg-[#ff8fb1]",
    downloadUrl: "/downloads/printables/silent-e-magic-wands.svg",
    printableSvgPath: "/downloads/printables/silent-e-magic-wands.svg",
    features: ["Hands-on tactile magic wand cut-outs", "24 transformation pairs included", "Illustrated visual hints", "Standard Letter / A4 format"],
    pedagogyReason: "Kinesthetic manipulation of final 'e' turns an abstract spelling rule into a concrete visual cause-and-effect action, cementing the long vowel rule.",
    parentGuideSteps: [
      { step: "Step 1", title: "Cut Out the Magic Wand", desc: "Cut along the dotted line on the star wand. Glue onto a popsicle stick or pencil." },
      { step: "Step 2", title: "Read the Short Vowel Word", desc: "Show 'CAP'. Have your child read the short-a sound." },
      { step: "Step 3", title: "Wave the Magic Wand", desc: "Tap the end of the word with the wand 'E'! Explain that magic 'e' stays quiet and tells 'a' to say its own name." },
      { step: "Step 4", title: "Read the Long Vowel Word", desc: "Read the newly transformed word: 'CAPE'!" }
    ],
    classroomTips: "Have students take turns acting as the 'Vowel Magician' in pairs. Great for centers and phonics workstations.",
    materialsNeeded: ["Scissors", "Popsicle stick or straw (optional)", "Glue stick", "Printable cards"],
    targetWords: ["cap → cape", "tap → tape", "pin → pine", "kit → kite", "hop → hope", "rob → robe", "cub → cube", "tub → tube"]
  },
  {
    id: "100-book-reading-tree",
    title: "100-Book Wall Chart & Reading Tree",
    category: "Reading Trackers",
    age: "Ages 2–8",
    pages: 1,
    description: "Color a leaf or apple for every book read aloud. Celebrates volume and rereads without pressure.",
    color: "bg-[#6ecf9b]",
    downloadUrl: "/downloads/printables/100-book-reading-tree.svg",
    printableSvgPath: "/downloads/printables/100-book-reading-tree.svg",
    features: ["Poster size ready (8.5x11, 11x17, A4, A3)", "100 leaf milestones with numbered badges", "Celebration star canopy", "Zero competition / intrinsic pride"],
    pedagogyReason: "According to Ohio State University literacy studies, reading 100 books introduces over 300,000 spoken words. Visual trackers provide positive dopamine reinforcement for persistent habits.",
    parentGuideSteps: [
      { step: "Step 1", title: "Hang in Reading Nook", desc: "Place on the wall where your child sits for bedtime reading." },
      { step: "Step 2", title: "Color After Every Story", desc: "Let child choose their favorite color for tonight's leaf." },
      { step: "Step 3", title: "Rereads Count!", desc: "Remind child that reading their favorite story 5 times fills 5 leaves." },
      { step: "Step 4", title: "Milestone High Fives", desc: "Celebrate at 25, 50, 75, and 100 books with a special bedtime dance or library trip." }
    ],
    classroomTips: "Print one large tree for the classroom door or individual mini-trees for student take-home reading folders.",
    materialsNeeded: ["Crayons, colored pencils, or star stickers", "Poster wall putty or tape"]
  },
  {
    id: "animal-friend-bookmarks",
    title: "Color-Your-Own Animal Reading Bookmarks",
    category: "Coloring & Bookmarks",
    age: "Ages 3–10",
    pages: 2,
    description: "Four printable bookmarks featuring Fox, Whale, Moon Cat, and Reading Bear with reading tips.",
    color: "bg-[#ff3b1f]",
    downloadUrl: "/downloads/printables/animal-friend-bookmarks.svg",
    printableSvgPath: "/downloads/printables/animal-friend-bookmarks.svg",
    features: ["Heavy cardstock friendly", "Includes 'I finished this book!' back panel", "Fine motor skill coloring borders", "Ribbon tassel punch hole"],
    pedagogyReason: "Allowing children to personalize their reading artifacts creates emotional ownership over their books and encourages independent bookmarking.",
    parentGuideSteps: [
      { step: "Step 1", title: "Color the Animal Friend", desc: "Let child color Fox, Whale, Moon Cat, or Reading Bear." },
      { step: "Step 2", title: "Cut Along Dotted Lines", desc: "Practice fine motor scissor skills cutting out the rectangular strips." },
      { step: "Step 3", title: "Punch Hole & Thread Ribbon", desc: "Punch the top circle and tie a scrap piece of yarn or ribbon." },
      { step: "Step 4", title: "Mark Tonight's Page", desc: "Place inside tonight's bedtime book to mark the adventure." }
    ],
    classroomTips: "Laminate after coloring for long-lasting student rewards during library checkout day.",
    materialsNeeded: ["Cardstock paper", "Markers or crayons", "Scissors", "Single hole punch and yarn (optional)"]
  },
  {
    id: "digraph-detective-hunt",
    title: "Digraph Detective: sh, ch, th, wh Search",
    category: "Phonics & CVC",
    age: "Ages 5–7",
    pages: 3,
    description: "A fun picture-search printable where little detectives search for objects hiding digraph sounds.",
    color: "bg-[#a8c4ff]",
    downloadUrl: "/downloads/printables/digraph-detective-hunt.svg",
    printableSvgPath: "/downloads/printables/digraph-detective-hunt.svg",
    features: ["I-Spy style visual detective hunt", "Covers sh, ch, th, wh sounds", "Detective magnifying glass badges", "Clear answer keys included"],
    pedagogyReason: "Phoneme isolation through contextual imagery helps young brains differentiate digraphs (two letters making one brand new phoneme) from consonant blends.",
    parentGuideSteps: [
      { step: "Step 1", title: "Put on the Detective Hat", desc: "Tell your child they are a Sound Detective hunting for hidden digraph clues." },
      { step: "Step 2", title: "Review the 4 Clue Sounds", desc: "/sh/ quiet sound, /ch/ train sound, /th/ tongue-tap sound, /wh/ breeze sound." },
      { step: "Step 3", title: "Find & Circle", desc: "Locate the ship, chin, thumb, and whale in the detective scene." },
      { step: "Step 4", title: "Write the Clue Letters", desc: "Write the corresponding digraph under each found clue." }
    ],
    classroomTips: "Pair students up with clipboards and pretend magnifying glasses for an engaging literacy station.",
    materialsNeeded: ["Highlighter or colored pencil", "Printable detective sheet"],
    targetWords: ["ship", "shoe", "fish", "chip", "chair", "thumb", "three", "whale", "wheel", "whistle"]
  },
  {
    id: "reading-champion-certificate",
    title: "Official 30-Day Reading Champion Certificate",
    category: "Classroom Packs",
    age: "All Ages",
    pages: 1,
    description: "A keepsake certificate honoring your child's curiosity, listening, and 30 days of reading moments.",
    color: "bg-[#ffc531]",
    downloadUrl: "/downloads/printables/reading-champion-certificate.svg",
    printableSvgPath: "/downloads/printables/reading-champion-certificate.svg",
    features: ["Official BEST KidSbooks seal & signature line", "Keepsake quality border", "Promotes intrinsic growth mindset", "Fillable recipient and date lines"],
    pedagogyReason: "Celebrating effort, consistency, and curiosity over test scores reinforces Carol Dweck's growth mindset and solidifies long-term intrinsic motivation.",
    parentGuideSteps: [
      { step: "Step 1", title: "Write Child's Name Proudly", desc: "Use a nice pen to write your child's name in the banner." },
      { step: "Step 2", title: "Host a Bedtime Ceremony", desc: "Present the certificate after reading story #30 with family applause." },
      { step: "Step 3", title: "Sign Together", desc: "Have parent and child both sign the reader pledge." },
      { step: "Step 4", title: "Frame or Display", desc: "Mount on the bedroom wall or refrigerator as an enduring badge of achievement." }
    ],
    classroomTips: "Present during classroom end-of-month reading circles to celebrate every student's growth.",
    materialsNeeded: ["Heavy paper or cardstock", "Gold or colored pen for personalization"]
  }
];

/* ──────────────────────── JOURNALS COLLECTION ──────────────────────── */
export type JournalItem = {
  id: string;
  title: string;
  subtitle: string;
  age: string;
  color: string;
  tag: string;
  description: string;
  downloadUrl: string;
  printableSvgPath: string;
  highlights: string[];
  samplePrompts: string[];
  researchInsight: string;
  dailyRoutine: { step: string; title: string; desc: string }[];
  journalSections: string[];
};

export const JOURNALS: JournalItem[] = [
  {
    id: "bedtime-connection-journal",
    title: "The Bedtime Connection Journal",
    subtitle: "A 5-minute memory keeper for tired parents and curious kids",
    age: "Ages 3–7",
    color: "bg-[#5b8def]",
    tag: "Parent Favorite",
    downloadUrl: "/downloads/journals/bedtime-connection-journal.svg",
    printableSvgPath: "/downloads/journals/bedtime-connection-journal.svg",
    description: "Rather than asking 'What was the story about?', this journal asks questions that connect the book's heart to your child's real day.",
    highlights: [
      "Guided after-reading prompts that spark real conversations",
      "Space for a child's doodle or favorite character rating",
      "Creates a cherished family keepsake of their early years",
      "Zero prep — takes just 3 to 5 minutes before lights out"
    ],
    samplePrompts: [
      "“If you could jump into the book tonight, which page would you sleep on?”",
      "“What was the bravest thing anyone did in tonight's story?”",
      "“Did anyone in the story feel like you felt earlier today?”",
      "“If we could invite one character to breakfast tomorrow, who would you pick?”"
    ],
    researchInsight: "Child psychology research at Harvard Center on the Developing Child shows that interactive 'serve-and-return' conversations after bedtime stories lower cortisol levels and dramatically improve emotional co-regulation.",
    dailyRoutine: [
      { step: "Minute 1-5", title: "Read Story Together", desc: "Snuggle up and read without phone distractions." },
      { step: "Minute 6", title: "Ask Tonight's Connection Spark", desc: "Pick one prompt from the journal entry." },
      { step: "Minute 7-8", title: "Doodle & Star Rating", desc: "Let child color the sleeping bear rating and add a tiny doodle." }
    ],
    journalSections: ["Tonight's Story Title & Author", "Curiosity Spark Question", "Child's Doodle Box", "5-Bear Giggle Rating", "Parent's 1-Line Memory Note"]
  },
  {
    id: "100-book-explorer-log",
    title: "The 100-Book Milestone Explorer Log",
    subtitle: "Track, rate, and celebrate your child's first 100 books",
    age: "Ages 4–9",
    color: "bg-[#ffc531]",
    tag: "Milestone Tracker",
    downloadUrl: "/downloads/journals/100-book-explorer-log.svg",
    printableSvgPath: "/downloads/journals/100-book-explorer-log.svg",
    description: "A vibrant, illustrated book tracker that turns every completed story into a proud badge of honor. Built for rereads, graphic novels, and bedtime favorites.",
    highlights: [
      "100 numbered story passport stamps to color in",
      "5-star smiling bear rating scale for little critics",
      "Quote bubbles for the funniest line from the book",
      "Milestone badges at 10, 25, 50, 75, and 100 books"
    ],
    samplePrompts: [
      "“Draw the funniest face from this book.”",
      "“Rate this story: 1 to 5 sleeping bears!”",
      "“Which word was the coolest new word we learned?”",
      "“Would you recommend this book to your best friend? Why?”"
    ],
    researchInsight: "Tracking milestone progress without punitive grading triggers intrinsic dopamine feedback loops, building strong reader self-efficacy (Bandura Social Cognitive Theory).",
    dailyRoutine: [
      { step: "Step 1", title: "Log the Title", desc: "Child or parent writes the book title and author." },
      { step: "Step 2", title: "Rate with Bear Stars", desc: "Color 1 to 5 smiling bears depending on how much they loved it." },
      { step: "Step 3", title: "Passport Stamp", desc: "Color in the numbered badge stamp to advance on the 100-book map." }
    ],
    journalSections: ["Story Passport Number #1-100", "5-Star Critical Rating", "Best Quote or Silly Sound", "Favorite Character Portrait"]
  },
  {
    id: "feelings-character-journal",
    title: "Feelings & Friendships Social-Emotional Journal",
    subtitle: "Help children name big feelings through story characters",
    age: "Ages 5–10",
    color: "bg-[#ff8fb1]",
    tag: "Emotional Literacy",
    downloadUrl: "/downloads/journals/feelings-character-journal.svg",
    printableSvgPath: "/downloads/journals/feelings-character-journal.svg",
    description: "Developed with child psychologists, this journal uses book characters as gentle mirrors for worry, anger, jealousy, and bravery.",
    highlights: [
      "Feelings wheel with kid-friendly animal expressions",
      "Empathy prompts: 'How would you help Whale feel calm?'",
      "Reduces emotional outbursts by building vocabulary for feelings",
      "Safe, private reflection space between parent and child"
    ],
    samplePrompts: [
      "“When Fox got impatient, what helped him wait?”",
      "“Have you ever felt a small worry grow big like Whale's tide?”",
      "“What kind words can we give someone who made a mistake?”",
      "“Draw what bravery looked like in tonight's chapter.”"
    ],
    researchInsight: "Dan Siegel's 'Name It to Tame It' neuroscience principle demonstrates that labeling character emotions activates the prefrontal cortex, reducing amygdala reactivity in children facing big emotions.",
    dailyRoutine: [
      { step: "Step 1", title: "Identify Character's Emotion", desc: "Find the animal feeling icon that matches how the character felt." },
      { step: "Step 2", title: "Personal Bridge", desc: "Ask: 'When is a time you felt that same way?'" },
      { step: "Step 3", title: "Empathy Toolkit", desc: "Write or draw one helpful action to soothe that emotion." }
    ],
    journalSections: ["Character Feelings Wheel", "The Conflict & Resolution", "Child's Empathy Bridge", "My Calming Strategy Box"]
  },
  {
    id: "tiny-triumphs-habit-diary",
    title: "Tiny Triumphs 30-Day Reading Habit Diary",
    subtitle: "Build the daily reading habit, one joyful micro-win at a time",
    age: "Ages 3–8",
    color: "bg-[#6ecf9b]",
    tag: "Habit Builder",
    downloadUrl: "/downloads/journals/tiny-triumphs-habit-diary.svg",
    printableSvgPath: "/downloads/journals/tiny-triumphs-habit-diary.svg",
    description: "Designed to accompany the 30-Day Reading Challenge, this daily diary lets kids record sound games, favorite blends, and silly host moments.",
    highlights: [
      "Day-by-day stickers and streak trackers",
      "Sound-of-the-day doodle box",
      "Weekly challenge scorecards",
      "Official certificate pocket inside the back cover"
    ],
    samplePrompts: [
      "“What sound did the bear find today?”",
      "“Draw a picture of a word that rhymes with cat!”",
      "“Today's reading win: we read for ___ minutes!”",
      "“What was the funniest word we blended today?”"
    ],
    researchInsight: "Micro-habit tracking reduces friction and eliminates overwhelm. 5 minutes daily produces 36.5 hours of dedicated 1-on-1 language exposure per year.",
    dailyRoutine: [
      { step: "Day Challenge", title: "Play 60-Second Sound Game", desc: "Tap and blend today's phoneme or short vowel." },
      { step: "Record Win", title: "Check Off Day Badge", desc: "Fill in today's day number from 1 to 30." },
      { step: "Sound Doodle", title: "Draw the Sound Object", desc: "Draw a quick sketch of the target word." }
    ],
    journalSections: ["30-Day Streak Ladder", "Daily Sound Focus Box", "Word Family Tree", "30-Day Victory Wall"]
  }
];

/* ──────────────────────── E-E-A-T EXPERT CITATIONS ──────────────────────── */
export const EEAT_CREDENTIALS = [
  {
    org: "American Academy of Pediatrics (AAP)",
    finding: "Recommends limiting recreational screen time to 1 hour daily for children aged 2–5, and zero screen time under 18 months. Daily interactive reading builds emotional regulation and executive function.",
    metric: "1 hr/day limit",
  },
  {
    org: "Ohio State University (Logan et al.)",
    finding: "Children whose parents read 5 picture books a day enter kindergarten having heard ~1.4 million more words than children who are never read to. Even 1 book a day equates to a 290,000-word advantage.",
    metric: "1.4M word gap",
  },
  {
    org: "Lurie Children's Hospital Study",
    finding: "Surveys indicate children under 13 now average over 21 hours of recreational screen time per week. A targeted 15-minute bedtime reading routine directly displaces screen stimulation before sleep.",
    metric: "21 hrs screen/wk",
  },
  {
    org: "National Literacy Trust",
    finding: "Children who maintain a daily reading routine are 3x more likely to have above-average mental wellbeing and significantly higher vocabulary confidence by age 8.",
    metric: "3x wellbeing",
  },
];
