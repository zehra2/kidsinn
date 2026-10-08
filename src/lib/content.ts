/**
 * bestkidbooks.online — content + research module.
 * Every claim below carries a source id from SOURCES.
 */

export type Source = { id: string; ref: string; org: string };

export const SOURCES: Source[] = [
  {
    id: "1",
    ref: "Google Publisher Policies — COPPA & personalized advertising",
    org: "Google AdSense Help",
  },
  {
    id: "2",
    ref: "Ads and made for kids content",
    org: "Google Ads Policy Help",
  },
  {
    id: "3",
    ref: "Kids Screen Time Calculator — AAP & NHS guidance by age",
    org: "kidsscreentimecalculator.com",
  },
  {
    id: "4",
    ref: "The million-word gap (Logan et al.), J. Developmental & Behavioral Pediatrics",
    org: "Ohio State University",
  },
  {
    id: "5",
    ref: "Screen Time Statistics 2025 — parent survey, children 13 and under",
    org: "Lurie Children's",
  },
  {
    id: "6",
    ref: "How parents evaluate educational websites, 2026 criteria",
    org: "TutoClub",
  },
  {
    id: "7",
    ref: "Daycare website best practices — market to parents, not children",
    org: "Vibeotter",
  },
  {
    id: "8",
    ref: "10 best childcare designs and what to steal from them",
    org: "The Playbook Partner",
  },
];

/* ──────────────────────────── SHELF ──────────────────────────── */
export type Book = {
  title: string;
  tag: string;
  age: string;
  minutes: number;
  price: string;
  img: string;
  blurb: string;
  questions: string[];
  tint: string;
};

export const BOOKS: Book[] = [
  {
    title: "Fox Wakes the Sun",
    tag: "Best seller",
    age: "Ages 3–5",
    minutes: 8,
    price: "$12.99",
    img: "images/book-fox.png",
    blurb:
      "A fox who refuses to wait for morning. Built for the 7am negotiation every parent knows.",
    questions: [
      "What would you do if the sun refused to wake up?",
      "Is Fox impatient, or is he being clever? How can you tell?",
      "Where should the sun rise next — and why there?",
    ],
    tint: "bg-orange",
  },
  {
    title: "Whale Who Forgot the Sea",
    tag: "Classroom pick",
    age: "Ages 4–6",
    minutes: 10,
    price: "$14.99",
    img: "images/book-whale.png",
    blurb:
      "A big blue whale, a small worry, and the tide that keeps turning up on time.",
    questions: [
      "When did you last forget something important?",
      "Who helps Whale remember — and how?",
      "What does the tide do while Whale is worried?",
    ],
    tint: "bg-blue-soft",
  },
  {
    title: "Mango the Moon Cat",
    tag: "New",
    age: "Ages 5–7",
    minutes: 12,
    price: "$13.50",
    img: "images/book-moon.png",
    blurb:
      "Mango climbs to the moon to count the stars, and loses track of exactly one.",
    questions: [
      "How many stars can you count on this page?",
      "Why does Mango go up instead of out?",
      "What would you name the star that went missing?",
    ],
    tint: "bg-blue",
  },
];

export const NEW_BOOK = {
  title: "The Quietest Lion",
  when: "Ships in April",
  age: "Ages 2–4",
  minutes: 6,
  price: "$11.00",
  blurb: "A roar so small it only reaches one mouse. Pre-orders open soon.",
};

/* ─────────────────────────── COURSES ─────────────────────────── */
export type Course = {
  title: string;
  tag: string;
  price: string;
  weeks: string;
  who: string;
  blurb: string;
  modules: string[];
  tint: string;
};

export const COURSES: Course[] = [
  {
    title: "Raising a Reader",
    tag: "Start here",
    price: "$49",
    weeks: "4 weeks · self-paced",
    who: "Parents of 0–5s",
    blurb:
      "The habit, the shelf, the ten minutes that survive a Tuesday. Built on the million-word gap research, not on guilt.",
    modules: [
      "Set up a 10-minute read-aloud that actually happens",
      "Choose books by read-aloud minutes, not by level",
      "Talk after the book without testing your child",
      "Swap 30 screen minutes for story minutes — and keep it",
    ],
    tint: "bg-honey",
  },
  {
    title: "Phonics at the Kitchen Table",
    tag: "Most popular",
    price: "$79",
    weeks: "6 weeks · cohort",
    who: "Parents of 5–7s",
    blurb:
      "Sound-by-sound, twenty minutes a week, no printing required. For the year reading either clicks or fights.",
    modules: [
      "The 44 sounds in the order that works",
      "Blending without tears (and without flashcard drills)",
      "Tricky words: the six that need a different trick",
      "When to ask for help — and what to ask a school",
    ],
    tint: "bg-blue-soft",
  },
  {
    title: "Five Questions, Any Book",
    tag: "Free workshop",
    price: "$0",
    weeks: "45 minutes · on demand",
    who: "Every parent, tonight",
    blurb:
      "Five prompts that turn any picture book into a real conversation. Watch it, use it before bed.",
    modules: [
      "Why 'did you like it?' goes nowhere",
      "The five prompts, with scripts",
      "Two minutes of practice on three books",
      "Your crib sheet, printable",
    ],
    tint: "bg-blush",
  },
];

/* ─────────────────────────── JOURNAL ─────────────────────────── */
export const POSTS = [
  {
    title: "Screen time vs story time: the swap that actually survives Tuesday",
    dek: "Parents aim for 9 hours of screens a week. Kids are hitting 21. The fix is not a rule — it is a replacement you can start at 7pm.",
    date: "12 Mar",
    read: "6 min",
    tag: "Habits",
  },
  {
    title: "How many books should a 6-year-old read in a year?",
    dek: "A real number, worked out from read-aloud minutes — plus why the number matters far less than the repetition.",
    date: "04 Mar",
    read: "5 min",
    tag: "Ages 5–7",
  },
  {
    title: "Three questions that beat 'did you like it?' every single time",
    dek: "Comprehension lives in what happens after the last page. Here are the prompts, and what to do when your child says 'I don't know'.",
    date: "26 Feb",
    read: "4 min",
    tag: "Read aloud",
  },
];

/* ────────────────── WHAT MAKES US DIFFERENT ────────────────── */
export type Diff = { n: string; title: string; body: string; src: string };

export const DIFFS: Diff[] = [
  {
    n: "01",
    title: "Kid-facing, parent-first",
    body: "The site looks like a picture book, but every call to action, form and label is written for the adult holding the card. Google's own rules forbid ads that push children to buy, and parent-first CTAs simply convert better.",
    src: "2",
  },
  {
    n: "02",
    title: "Every book ships with its after-reading questions",
    body: "Age band, read-aloud minutes, and three prompts printed on the card. No other shop tells you what to say when the book ends — which is the part parents actually worry about.",
    src: "6",
  },
  {
    n: "03",
    title: "Free calculators do the heavy lifting",
    body: "Screen-time limits by age, the million-word gap arithmetic, a reading-goal planner. Tools get linked, shared and bookmarked in a way listicles never do — and they bring parents back between purchases.",
    src: "3",
  },
  {
    n: "04",
    title: "Ads are kept out of the play area",
    body: "Child-directed sections are tagged as such and run contextual ads only — no behavioural targeting, no trackers, nothing that follows a child around the web.",
    src: "1",
  },
  {
    n: "05",
    title: "Proof over polish",
    body: "Real sample pages, real read-aloud timings, real outcomes. Parents trust transparency about who writes and illustrates the books far more than a slick template.",
    src: "8",
  },
  {
    n: "06",
    title: "Every screen ends in something offline",
    body: "Printables, a bedtime routine, a library challenge. Good kids' sites hand the child back to the parent and the paper — the design goal is to close the laptop.",
    src: "6",
  },
];

/* ────────────────── THE QUESTION BOARD ────────────────── */
export const SEARCHES = [
  { q: "screen time calculator by age", page: "Parent Tools → Screen Time Machine", why: "Transactional tool intent, low competition, evergreen" },
  { q: "how many books should a 6 year old read", page: "Reading Goal Planner", why: "Numbers parents argue about at the school gate" },
  { q: "questions to ask after reading a picture book", page: "Story Question Machine", why: "Teacher vocabulary, parent urgency" },
  { q: "best picture books for 4 year olds", page: "The Shelf → Ages 3–5", why: "Buy intent, feeds the shop" },
  { q: "how to get a child to stop reading refusal", page: "Journal → reluctant readers", why: "Pain point, high time-on-page" },
  { q: "phonics stages explained uk", page: "Course → Phonics at the Kitchen Table", why: "Course buyer research query" },
  { q: "million word gap study", page: "Research explainer", why: "Citation-driven, earns educator links" },
  { q: "screen free activities for toddlers", page: "Printables library", why: "Ad-revenue traffic with strong seasonality" },
  { q: "is my child ready to read", page: "Milestone checklist", why: "Anxiety query — answers convert to email" },
  { q: "read aloud length by age", page: "Book cards + planner", why: "Our proprietary data point, unclaimed" },
];

/* ────────────────── SCREEN TIME (AAP / NHS) ────────────────── */
export type Band = {
  min: number;
  max: number;
  label: string;
  minutes: number;
  rule: string;
};

export const BANDS: Band[] = [
  { min: 0, max: 1.49, label: "Under 18 months", minutes: 0, rule: "Avoid screens entirely — video calls with family only." },
  { min: 1.5, max: 2.49, label: "18–24 months", minutes: 60, rule: "High-quality programming, watched together, every time." },
  { min: 2.5, max: 5.49, label: "2–5 years", minutes: 60, rule: "One hour a day of good programming — a maximum, not a target." },
  { min: 5.5, max: 12.49, label: "6–12 years", minutes: 120, rule: "Consistent family limits. Sleep, play and homework come first." },
  { min: 12.5, max: 17.49, label: "13–17 years", minutes: 120, rule: "Quality over quantity. Nothing in the hour before bed." },
  { min: 17.5, max: 99, label: "18+ years", minutes: 120, rule: "You're the adult now — but the bedtime rule still holds." },
];

/* ────────────────── MILLION-WORD GAP ────────────────── */
export const WORDS = {
  board: 140, // average board book, Logan et al.
  picture: 228, // average picture book, Logan et al.
  perYear1: 78000, // 1 book/day for a year
  byKinder1: 296660,
  byKinder5: 1483300,
  never: 4662,
};

/* ────────────────── QUESTION BANK ────────────────── */
export const QUESTION_BANK: Record<string, { label: string; items: string[] }[]> = {
  "2-3": [
    {
      label: "Pointing & naming",
      items: [
        "Can you find the (animal) on this page?",
        "What sound does it make — and what does it want?",
        "Where did the little one go? Show me.",
        "Is this one big or small? Happy or cross?",
        "What happens if we turn the page back?",
      ],
    },
  ],
  "4-5": [
    {
      label: "Wondering & predicting",
      items: [
        "What do you think happens before this page?",
        "Why did the fox do that — was it kind or clever?",
        "What would you have done instead?",
        "Where is the moon in this picture? How do you know?",
        "Show me your favourite shape/colour here and tell me why.",
      ],
    },
  ],
  "6-7": [
    {
      label: "Reasoning & retelling",
      items: [
        "Tell me the story back in your own words — start at the beginning.",
        "What was the small problem, and who fixed it?",
        "Which character changed most, and what changed them?",
        "Find a word the author could have used instead of ______.",
        "If there were one more page, what would be on it?",
      ],
    },
  ],
  "8-10": [
    {
      label: "Comparing & judging",
      items: [
        "Who was right at the end — and who was fair?",
        "What does this book remind you of that you've read or seen?",
        "Which part would you cut if you had to make it shorter?",
        "What did the author leave out on purpose?",
        "Rate it against your last book: what did it do better?",
      ],
    },
  ],
};

export const NAV = [
  { href: "/#shelf", label: "The shelf" },
  { href: "/parent-tools", label: "Parent tools" },
  { href: "/courses", label: "Courses" },
  { href: "/#journal", label: "Journal" },
  { href: "/#different", label: "Why us" },
];

export const BRAND = {
  name: "BEST KidSbooks Shop",
  short: "KidSbooks",
  domain: "bestkidbooks.online",
  tagline: "Turn screen time into story time.",
};
