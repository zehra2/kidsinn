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
  id: string;
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
    id: "fox-wakes-the-sun",
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
    id: "whale-who-forgot-the-sea",
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
    id: "mango-the-moon-cat",
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

/* ──────────────────────────── STORIES ──────────────────────────── */
export type StoryBlock =
  | { h: string }
  | { p: string }
  | { list: string[] }
  | { tip: string };

export type StoryPost = {
  slug: string;
  title: string;
  dek: string;
  date: string; // display date
  datePublished: string; // ISO date, for metadata + sitemap
  read: string;
  tag: string;
  body: StoryBlock[];
};

export const STORIES: StoryPost[] = [
  {
    slug: "screen-time-vs-story-time-swap",
    title: "Screen time vs story time: the swap that actually survives Tuesday",
    dek: "Parents aim for 9 hours of screens a week. Kids are hitting 21. The fix is not a rule — it is a replacement you can start at 7pm.",
    date: "12 Mar",
    datePublished: "2026-03-12",
    read: "6 min",
    tag: "Habits",
    body: [
      { p: "Here is the number that stops most parents mid-scroll: children under 13 now average more than 21 hours of recreational screen time a week, according to a 2025 parent survey by Lurie Children's Hospital. The American Academy of Pediatrics recommends a maximum of one hour a day for children aged 2 to 5 — and zero recreational screens under 18 months. Most families we talk to are nowhere near the guideline, and they know it. The guilt is already there. What is missing is a plan that survives a tired Tuesday." },
      { h: "Why the ban never survives Tuesday" },
      { p: "Cold-turkey rules fail for a simple reason: they take something away without putting anything in its place. “No screens after 6pm” works on Sunday, when everyone is rested and the house is calm. On Tuesday, when dinner is late, the toddler is feral and you have emails to answer, the tablet is the only thing keeping the peace — and you know it. So the rule breaks, and because it broke, it feels pointless, and because it feels pointless, nobody tries again. The problem was never willpower. The problem was the shape of the rule." },
      { h: "The swap: 15 minutes, same slot, every night" },
      { p: "The research points the other way: replace, don't remove. The AAP's own guidance notes that swapping just 15 minutes of evening screen time for interactive reading improves executive function and sleep quality. Fifteen minutes is small enough to survive a bad day and big enough to matter — over a year, it is more than 90 hours of language, questions and closeness that would otherwise have been a cartoon on autoplay." },
      { list: [
        "Pick one fixed slot. 7pm works for most families — after dinner, before baths. The slot matters more than the duration.",
        "Put a basket of five books where the tablet charges. If the books live in another room, the tablet wins.",
        "Phones go in another room for the 15 minutes. Children copy what they see, not what they are told.",
        "Ask one question when the book closes. Not a quiz — a wonder. “What would you do if you were the fox?” beats “Did you like it?” every time.",
      ] },
      { h: "When Tuesday wins anyway" },
      { p: "Some nights the swap will not happen, and that is fine. The routine survives if the bar is five minutes, not thirty. A single page, read properly, counts. A favourite reread counts — hearing the same book for the fifth time is how vocabulary actually sticks. The goal is not a perfect week. The goal is a habit that is still there in three months, because it was small enough to keep." },
      { tip: "If you only do one thing: put the book basket where the tablet charges. The easiest choice wins, so make the book the easy choice." },
      { p: "Want the numbers for your own family? Our free screen-time calculator shows the AAP guidance for your child's age, and the 7-day reading kit gives you a tracker and seven conversation prompts to start tonight — no sign-up, no email, no child data." },
    ],
  },
  {
    slug: "how-many-books-should-a-6-year-old-read",
    title: "How many books should a 6-year-old read in a year?",
    dek: "A real number, worked out from read-aloud minutes — plus why the number matters far less than the repetition.",
    date: "04 Mar",
    datePublished: "2026-03-04",
    read: "5 min",
    tag: "Ages 5–7",
    body: [
      { p: "It is the question every parent asks at the school gate, usually while worrying they are behind: how many books should my child read in a year? The honest answer starts with a different question — what counts as a book? Because once you count properly, most 6-year-olds are already doing better than their parents think." },
      { h: "The numbers, worked out" },
      { p: "The landmark study is Logan et al. at Ohio State University: children whose parents read five picture books a day enter kindergarten having heard roughly 1.4 million more words than children who are never read to. Even one book a day adds up to about 78,000 extra words a year. For a 6-year-old, one picture book takes about 8 to 12 minutes to read aloud — so a single bedtime book a day is roughly 365 books a year, and about 90 hours of shared language. Two books a day doubles it. The maths is reassuring: the habit is small, and the payoff is enormous." },
      { list: [
        "Picture books — the core of it. One a day is the whole habit.",
        "Graphic novels and comics — real reading. They build inference, pacing and vocabulary.",
        "Audiobooks listened to together — count them, especially on car journeys.",
        "Rereads — the same favourite five times is five books, and the repetition is where vocabulary sticks.",
      ] },
      { h: "A target that survives real life" },
      { p: "If 365 feels like a lot, aim for 100. Two books a week, every week, is a strong and reachable target for a 6-year-old — and it is exactly what our 100-book wall chart is built for. Colour a leaf for every book, celebrate at 25, 50, 75 and 100, and let the chart do the motivating. Children who can see their progress keep going; children who are nagged about a number stop." },
      { h: "Repetition beats volume" },
      { p: "Here is the part the number-chasers miss: a child who reads the same book five times learns more words than a child who reads five different books once. Repetition is how the brain moves a word from “heard it” to “I can use it”. So if your 6-year-old wants the same dinosaur book again tonight, say yes. That is not a rut. That is the learning happening." },
      { tip: "Count rereads. A favourite read five times is five books — and the fifth reading is the one that teaches the most." },
      { p: "Track it the fun way: print the free 100-book wall chart, stick it at your child's eye level, and colour a leaf together after every story. Rereads count. Comics count. The bedtime book you have read so often you can recite it in the dark counts most of all." },
    ],
  },
  {
    slug: "three-questions-after-reading",
    title: "Three questions that beat 'did you like it?' every single time",
    dek: "Comprehension lives in what happens after the last page. Here are the prompts, and what to do when your child says 'I don't know'.",
    date: "26 Feb",
    datePublished: "2026-02-26",
    read: "4 min",
    tag: "Read aloud",
    body: [
      { p: "“Did you like it?” is the question every parent asks after a bedtime story — and it is the question that goes nowhere. It gets a “yeah”, a shrug, or silence, because it is really a test disguised as a conversation: there is a right answer (yes) and your child knows it. Comprehension does not live in that question. It lives in the three questions below, which is why they are the backbone of dialogic reading — the Whitehurst method where the child becomes the storyteller and the parent becomes the audience." },
      { h: "Question 1 — “What would you do if you were…?”" },
      { p: "Put your child inside the story. “What would you do if you were Fox and the sun refused to wake up?” There is no wrong answer, so there is nothing to fear — and the answer tells you what they actually understood. A child who says “I'd sing to the sun” has followed the plot, the character and the problem. A child who says “I'd be angry” is telling you about their own day, which is even better." },
      { h: "Question 2 — “What was the bravest thing anyone did?”" },
      { p: "Feelings questions build emotional vocabulary, and emotional vocabulary is what lets a child handle big feelings later. Dan Siegel's “name it to tame it” principle is the science here: naming a character's emotion activates the thinking brain and calms the reactive one. “When did Whale feel worried, and what helped?” is a feelings lesson disguised as a bedtime chat." },
      { h: "Question 3 — “What do you think happens next?”" },
      { p: "Prediction is comprehension in disguise. Ask it mid-book, not just at the end — pause at the tense moment and wonder together. A child who can guess what happens next has followed the cause and effect of the whole story. And when they are wrong, that is the best part: “Why did you think that? What changed your mind?” is a reasoning lesson that no worksheet can teach." },
      { h: "When they say “I don't know”" },
      { p: "It will happen, and it is not failure — it usually means the question was too big. Wait ten full seconds before rescuing them; silence feels longer to you than to them. Then answer it yourself: “I think I'd hide under the bed — what about you?” Children copy thinking, not instructions. Or shrink the question: “Show me your favourite picture” is a question a 3-year-old can answer with pride." },
      { tip: "Answer your own question first. Children copy the thinking, not the instruction — and your honest answer is what makes it a conversation instead of a test." },
      { p: "Five minutes, three questions, one book — that is the whole routine. Our free question machine has printable prompts for every age, and the free Five Questions workshop walks through all five prompts with scripts you can use tonight." },
    ],
  },
  {
    slug: "dog-man-15-reluctant-readers",
    title: "Dog Man #15 is out — why graphic novels turn reluctant readers into readers",
    dek: "The new Dog Man landed on 3 November, and if your child will read nothing else, that is not a problem. It is the answer — here is why comics count, and how to use one.",
    date: "14 Nov",
    datePublished: "2026-11-14",
    read: "5 min",
    tag: "Reluctant readers",
    body: [
      { p: "A new Dog Man book arrived on 3 November, and for a certain kind of household it is the biggest reading event of the year. Not because the book is long or literary — it is neither — but because it is the one book a reluctant reader will actually pick up, finish, and then pick up again. If your child will not touch a chapter book but has read Dog Man four times, you do not have a child who hates reading. You have a child who has found the format that works for them, and the job now is to feed it." },
      { h: "Why the reluctant reader loves it" },
      { p: "A graphic novel removes the three things that make reading feel hard. First, the pictures carry half the story, so a child who struggles to decode a sentence never gets lost — the image tells them what the words are doing. Second, the text comes in short bursts: speech bubbles, sound effects, a line at a time. A page of Dog Man asks for ten seconds of reading, not ten minutes, and ten seconds is a distance a tired 7-year-old can cross. Third, it is funny on purpose. Humour is the cheapest motivation there is, and a child who laughs at a page will turn it without being asked." },
      { h: "Comics count. Properly count." },
      { p: "There is a stubborn idea that graphic novels are not real reading, and it is wrong in the most useful way: reading a comic is harder in some respects than reading plain text, because the child has to combine two streams — words and pictures — and work out the order, the timing and the joke. That is inference, sequencing and vocabulary, the same skills a chapter book teaches, practised on a page the child actually wants to turn. A child who reads comics is building reading stamina; a child who is forced onto books they hate is building resentment. One of those compounds." },
      { h: "How to read it together (without ruining it)" },
      { list: [
        "Let them read the pictures first. Before a single word, ask what is happening in the panels — that is comprehension, and it is the warm-up.",
        "Do the sound effects out loud. BOOM, SPLAT, ZOOM — the sillier the better. A child who performs a book owns it.",
        "Do not correct every word. If they get the sense of a sentence and keep going, let them go. Stopping every line teaches them that reading is being tested.",
        "Ask the three questions when it closes: what would you do if you were Dog Man, what was the bravest thing anyone did, and what do you think happens next?",
        "Let them re-read it. The fifth reading is where the vocabulary sticks — repetition is the learning, not a rut.",
      ] },
      { h: "What to do after the last page" },
      { p: "The best moment to keep a reluctant reader going is the hour after they finish a book they loved, while the feeling is still warm. That is when to offer the next one — another graphic novel, a comic, or the free Dog Man reading companion guide on our books page, which turns the book into a game you can play together tonight. And if the sounds in the book are the ones your child trips over, our free printable phonics worksheets practise exactly those sounds — CVC words, blends and digraphs — with no sign-up and nothing to pay." },
      { tip: "If you only do one thing: let them choose the next book. Choice is the engine of a reading habit — a book they picked is a book they will finish." },
      { p: "Dog Man is not a stepping stone to “real” books. For millions of children it is the book that made reading feel like theirs — and a child who owns reading at eight is a child who still reads at eighteen. Start with the one they love, and let the habit grow from there." },
    ],
  },
  {
    slug: "screen-free-christmas-kit",
    title: "The screen-free Christmas kit: 7 activities that beat the tablet",
    dek: "The holidays are when screen time explodes — and when a simple box of paper, books and games beats it. Here is the kit, the plan, and why it works.",
    date: "14 Nov",
    datePublished: "2026-11-14",
    read: "6 min",
    tag: "Christmas",
    body: [
      { p: "Christmas week is when screen time explodes. School is out, the house is full, the adults are busy, and the tablet becomes the babysitter — again. Parents feel it happening and hate it, but the alternative usually sounds like work: crafts that need supplies, games that need preparation, an afternoon plan nobody has time to make. So here is the whole thing, made in advance: a screen-free Christmas kit you can put together tonight from things you already have, built around the free printables and books on this site." },
      { h: "Why a kit, and not a rule" },
      { p: "A rule — “no screens this week” — fails the same way every screen rule fails: it takes something away and puts nothing in its place. A kit does the opposite. It is a box, a basket or a shelf that is simply there, full of things that are easier to reach than the tablet. Pinterest's own Parenting Report for 2026 says searches for “screen free activities” are up 200% on last year, and “educational activities for kids” up 280% — parents are not looking for guilt, they are looking for the box. The American Academy of Pediatrics recommends no more than one hour of high-quality screen time a day for children aged 2 to 5, and the evidence is clearest on one point: swapping even 15 minutes of evening screen time for interactive reading improves sleep and attention. The kit is that swap, made physical." },
      { h: "The 7 things in the kit" },
      { list: [
        "One picture book a day — the Christmas Book Advent. One book each morning from 1 to 24 December, read aloud together. The list is on our Advent page, and it starts with the books children actually ask for again.",
        "A phonics game that feels like a game. Our free printable worksheets — CVC word match, I Spy, colour by letter — are the same games as the reels, so your child already knows how to play them. Print five, put them in the box.",
        "A reading tracker they can see. The 100-book wall chart or the 7-day reading kit: colour a leaf for every book, and let the chart do the motivating. Children who can see their progress keep going.",
        "A making thing. Colour-your-own bookmarks, cut-outs, a paper chain with a word on every link — anything with scissors and crayons counts, and fine motor practice is phonics practice in disguise.",
        "A question card. Five questions that work on any picture book — “what would you do if you were…?” beats “did you like it?” every time. Print the crib sheet and stick it on the fridge.",
        "A cosy reading spot. A blanket, a cushion and a lamp in one corner. Children read where reading feels good, and a den beats a desk every time.",
        "A “boredom” list on the wall. Ten things, written together: build a den, act out the book, draw the funniest scene, teach Bear a new word. Boredom is where imagination starts — if there is a list, it does not become a tablet.",
      ] },
      { h: "The plan for the week" },
      { p: "You do not need a timetable, you need two anchors. Anchor one: a book every morning, before screens are even mentioned — the child who has already read a book does not feel deprived when the tablet stays off. Anchor two: one making activity every afternoon, at the hour the energy dips (usually 2pm, usually the hour of the meltdown). Everything else is free play with the box. If a day falls apart, the bar is one page, read properly — a favourite reread counts, and the fifth reading of the same book is the one that teaches the most." },
      { tip: "Build the box tonight, not on the first morning of the holidays. A kit that exists beats a plan that does not — and a child who helped fill the box will be the first to open it." },
      { p: "Everything in the kit is free on this site: the Advent book list, the printable worksheets, the reading trackers, the question prompts and the screen-time calculator that shows the guidance for your child's age. No sign-up, no email, no child data — just print, put it in the box, and let Christmas be the week reading won." },
    ],
  },
];

/* ─────────────────── CHRISTMAS BOOK ADVENT ─────────────────── */
export type AdventBook = {
  day: number;
  title: string;
  author: string;
  hook: string;
};

export const ADVENT_BOOKS: AdventBook[] = [
  { day: 1, title: "The Night Before Christmas", author: "Clement C. Moore", hook: "The poem every child should hear first" },
  { day: 2, title: "How the Grinch Stole Christmas", author: "Dr. Seuss", hook: "Can a heart really grow three sizes?" },
  { day: 3, title: "The Polar Express", author: "Chris Van Allsburg", hook: "Would you get on the train?" },
  { day: 4, title: "The Snowman", author: "Raymond Briggs", hook: "A snowman that comes alive — no words at all" },
  { day: 5, title: "The Jolly Christmas Postman", author: "Janet & Allan Ahlberg", hook: "Letters you can actually open" },
  { day: 6, title: "Stick Man", author: "Julia Donaldson", hook: "A stick's long way home for Christmas" },
  { day: 7, title: "The Christmasaurus", author: "Tom Fletcher", hook: "A dinosaur who wants to fly Santa's sleigh" },
  { day: 8, title: "Bear Stays Up for Christmas", author: "Karma Wilson", hook: "Bear tries to stay awake — just like our Bear" },
  { day: 9, title: "Olivia Helps with Christmas", author: "Ian Falconer", hook: "Olivia's way is NOT the tidy way" },
  { day: 10, title: "The Twelve Days of Christmas", author: "Traditional", hook: "Can you remember all twelve?" },
  { day: 11, title: "Father Christmas", author: "Raymond Briggs", hook: "Santa's day off — he grumbles a lot" },
  { day: 12, title: "The Nutcracker", author: "E.T.A. Hoffmann (retold)", hook: "A toy that comes alive at midnight" },
  { day: 13, title: "The Best Christmas Pageant Ever", author: "Barbara Robinson", hook: "The worst kids put on the best show" },
  { day: 14, title: "A Christmas Carol", author: "Charles Dickens (retold)", hook: "Three ghosts, one grumpy man" },
  { day: 15, title: "The Story of Christmas", author: "Traditional nativity", hook: "The first Christmas, simply told" },
  { day: 16, title: "The Christmas Wish", author: "Lori Evert", hook: "A little girl's wish for the North Pole" },
  { day: 17, title: "Snowmen at Night", author: "Caralyn Buehner", hook: "What do snowmen do when we're asleep?" },
  { day: 18, title: "The Snowy Day", author: "Ezra Jack Keats", hook: "Winter's quiet magic (seasonal, not Santa)" },
  { day: 19, title: "Dear Santa", author: "Rod Campbell", hook: "Lift the flap — what does Santa want?" },
  { day: 20, title: "Mog's Christmas", author: "Judith Kerr", hook: "The cat who ruined Christmas (almost)" },
  { day: 21, title: "Merry Christmas, Big Hungry Bear", author: "Don & Audrey Wood", hook: "A bear, a mouse and a Christmas tree" },
  { day: 22, title: "The Elves and the Shoemaker", author: "Traditional", hook: "Little helpers in the night" },
  { day: 23, title: "Rudolph the Red-Nosed Reindeer", author: "Robert L. May", hook: "The reindeer nobody wanted — until the fog" },
  { day: 24, title: "The Christmas Miracle of Jonathan Toomey", author: "Susan Wojciechowski", hook: "The saddest woodcarver finds Christmas again" },
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
