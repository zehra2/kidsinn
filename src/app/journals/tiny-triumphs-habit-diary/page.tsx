"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Nav, Footer } from "@/components/ui";
import {
  Download,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Smile,
  ShieldCheck,
  Brain,
  Star,
  Compass,
  Award,
  Layers,
  Clock,
  Zap,
  Check,
  BookOpen,
  Volume2,
} from "lucide-react";

const PDF_DOWNLOAD_URL = "/downloads/tiny-triumphs-habit-diary.pdf";

/* ─── FAQ DATA ─── */
const FAQ_ITEMS = [
  {
    q: "Why 30 days instead of a full school semester or 100 days?",
    a: "Behavioral psychologists confirm that long-term goals feel abstract and overwhelming to young children ages 3 to 8. A 30-day challenge creates an immediate, visible finish line with bite-sized milestones every 5 days (Spark Reader, Rhythm Master, Halfway Hero). This builds genuine self-efficacy and momentum without habit fatigue.",
  },
  {
    q: "What if my child misses a day of reading?",
    a: "Our core motto is: 'Never miss twice!' In habit science (such as James Clear's Atomic Habits), missing one day has virtually no impact on long-term habit formation—as long as you return the next day. The diary has no punitive penalties; children simply pick right up on their next star.",
  },
  {
    q: "How does the Sound-of-the-Day feature help with early phonics?",
    a: "Phonemic awareness is the single greatest predictor of early reading success. By turning storytime into a friendly sound treasure hunt (hunting for digraphs like /sh/, /ch/, or /th/), children train their ears to isolate phonemes within real narrative context rather than dry flashcard drills.",
  },
  {
    q: "Is this 30-day habit diary completely free for parents and teachers?",
    a: "Yes. All literacy printables and habit diaries on BestKidBooks.online are 100% free for home use, kindergarten/preschool classrooms, and homeschooling with no sign-ups or subscription paywalls required.",
  },
];

function FaqItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-200 ${
        open
          ? "border-emerald-500 bg-white shadow-md ring-2 ring-emerald-500/10"
          : "border-slate-200 bg-white/80 hover:border-emerald-400"
      }`}
    >
      <button
        id={`faq-btn-${idx}`}
        aria-expanded={open}
        aria-controls={`faq-panel-${idx}`}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
      >
        <span className="font-display text-[16.5px] font-bold text-slate-800">
          {q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
            open ? "rotate-180 bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
          }`}
        >
          <ChevronDown size={18} />
        </span>
      </button>
      {open && (
        <div
          id={`faq-panel-${idx}`}
          role="region"
          className="border-t border-slate-100 px-6 pb-6 pt-4 text-[15px] leading-relaxed text-slate-600"
        >
          {a}
        </div>
      )}
    </div>
  );
}

export default function TinyTriumphsPage() {
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  const MILESTONES = [
    { day: "Day 5", title: "Spark Reader", reward: "Bedtime reading fort with blankets & flashlight", icon: "✨", color: "border-emerald-400 bg-emerald-50 text-emerald-900" },
    { day: "Day 10", title: "Rhythm Master", reward: "Choosing the family dinner or favorite dessert", icon: "🎵", color: "border-amber-400 bg-amber-50 text-amber-900" },
    { day: "Day 15", title: "Halfway Hero", reward: "Special library book run for a giant new stack", icon: "🏅", color: "border-blue-400 bg-blue-50 text-blue-900" },
    { day: "Day 20", title: "Story Explorer", reward: "Cozy reading picnic on the living room floor", icon: "🏕️", color: "border-orange-400 bg-orange-50 text-orange-900" },
    { day: "Day 25", title: "Habit Master", reward: "Staying up 15 minutes extra for bedtime reading", icon: "⭐", color: "border-purple-400 bg-purple-50 text-purple-900" },
    { day: "Day 30", title: "Grand Champion!", reward: "Official Certificate + Family Book Party!", icon: "👑", color: "border-yellow-400 bg-yellow-50 text-yellow-900" },
  ];

  return (
    <>
      {/* ── JSON-LD Structured Data for Rich Snippets ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://bestkidbooks.online",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Reading Journals",
                    item: "https://bestkidbooks.online/journals",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Tiny Triumphs 30-Day Reading Habit Diary",
                    item: "https://bestkidbooks.online/journals/tiny-triumphs-habit-diary",
                  },
                ],
              },
              {
                "@type": "LearningResource",
                name: "Tiny Triumphs 30-Day Reading Habit Diary",
                description:
                  "A free printable 30-day reading habit tracker for kids ages 3-8 featuring streak star maps, phonics sound-of-the-day hunts, and celebration rewards.",
                learningResourceType: "Early Literacy Habit Diary & Activity Log",
                educationalLevel: "Preschool, Kindergarten, Grade 1, Grade 2, Grade 3",
                typicalAgeRange: "3-8",
                isAccessibleForFree: true,
                inLanguage: "en",
                author: {
                  "@type": "Organization",
                  name: "BestKidBooks",
                  url: "https://bestkidbooks.online",
                },
                offers: {
                  "@type": "Offer",
                  price: "0.00",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: FAQ_ITEMS.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.a,
                  },
                })),
              },
            ],
          }),
        }}
      />

      <Nav />

      <main className="min-h-screen bg-[#FCFAF6] text-slate-800">
        {/* ── BREADCRUMB / BACK ── */}
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
          <Link
            href="/journals"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700"
          >
            <ArrowLeft size={14} /> Back to Reading Journals &amp; Printables
          </Link>
        </div>

        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 md:pb-24 md:pt-12">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-orange-50/40 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Hero Copy */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 shadow-xs">
                  <Zap size={14} className="text-emerald-600 fill-emerald-500/20" />
                  <span>Habit Builder • Ages 3–8</span>
                </div>

                <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-[1.15]">
                  Tiny Triumphs 30-Day Reading Habit Diary:{" "}
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                    One Joyful Micro-Win
                  </span>{" "}
                  at a Time
                </h1>

                <p className="mt-5 text-lg leading-relaxed text-slate-600 md:text-xl">
                  Designed to accompany the 30-Day Reading Challenge, this daily diary lets kids record sound games, favorite blends, and silly story moments without homework fatigue or timer battles.
                </p>

                {/* Primary & Secondary CTA Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    id="hero-download-cta"
                    href={PDF_DOWNLOAD_URL}
                    download="Tiny-Triumphs-30-Day-Reading-Habit-Diary.pdf"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-7 py-4 font-display text-base font-bold text-white shadow-lg shadow-emerald-700/20 transition-all hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-700/30 active:scale-[0.98]"
                  >
                    <Download size={20} className="stroke-[2.5]" />
                    <span>Download Free Printable PDF (6 Pages)</span>
                  </a>

                  <a
                    href="#streak-map"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-300 bg-white px-5 py-3.5 font-display text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/50 hover:text-emerald-900"
                  >
                    <Star size={18} className="text-amber-500 fill-amber-400" />
                    <span>Preview 30-Day Streak Map</span>
                  </a>
                </div>

                {/* Micro-trust signals */}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 size={15} /> Atomic Habits Pediatric Model
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 size={15} /> Phonics &amp; Science of Reading Aligned
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 size={15} /> 100% Free Printable (No Subscription)
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Mockup */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl shadow-emerald-900/10 ring-1 ring-slate-900/5">
                  <Image
                    src="/images/tiny-triumphs-mockup.jpg"
                    alt="Tiny Triumphs 30-Day Reading Habit Diary spread with streak map and sound of the day hunt"
                    width={800}
                    height={450}
                    className="h-auto w-full object-cover"
                    priority
                  />
                  {/* Floating celebratory ribbon card */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl border border-white/80 bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-md">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white font-bold shadow-xs">
                        30
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          30-Day Reading Streak
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Sound of the Day + Milestone Rewards
                        </div>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-extrabold text-emerald-800">
                      FREE PDF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AEO QUICK SUMMARY BOX — Optimized for AI Overviews & Featured Snippets ── */}
        <section className="px-4 pb-14 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-400/40 bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-amber-50/60 p-7 shadow-lg shadow-emerald-900/5 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-xs">
                  <Sparkles size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700">
                    Direct Answer • AEO &amp; AI Overview Ready
                  </span>
                  <h2 className="font-display text-xl font-bold text-slate-900 md:text-2xl">
                    What is the Tiny Triumphs 30-Day Reading Habit Diary?
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-3.5 border-t border-emerald-300/40 pt-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
                <p>
                  <strong>The Tiny Triumphs 30-Day Reading Habit Diary</strong> is a free printable early literacy journal designed for children ages 3 to 8. Built upon the pediatric behavioral principles of micro-habits and habit stacking, it eliminates reading resistance by lowering daily friction to just 5 to 10 joyful minutes. Instead of tracking burdensome reading clocks, children track a <strong>30-day visual star streak</strong>, hunt for <strong>daily phonics sound blends</strong>, and unlock <strong>screen-free milestone celebrations</strong> at Days 5, 10, 15, 20, 25, and 30.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 pt-3">
                <div className="rounded-xl border border-emerald-200/80 bg-white/80 p-3 text-center shadow-xs">
                  <div className="font-display text-xl font-extrabold text-emerald-700">30 Stars</div>
                  <div className="text-xs font-medium text-slate-600">Visual Streak Map</div>
                </div>
                <div className="rounded-xl border border-emerald-200/80 bg-white/80 p-3 text-center shadow-xs">
                  <div className="font-display text-xl font-extrabold text-amber-600">8 Sounds</div>
                  <div className="text-xs font-medium text-slate-600">Phonics Digraphs</div>
                </div>
                <div className="rounded-xl border border-emerald-200/80 bg-white/80 p-3 text-center shadow-xs">
                  <div className="font-display text-xl font-extrabold text-teal-700">6 Awards</div>
                  <div className="text-xs font-medium text-slate-600">Milestone Checkpoints</div>
                </div>
                <div className="rounded-xl border border-emerald-200/80 bg-white/80 p-3 text-center shadow-xs">
                  <div className="font-display text-xl font-extrabold text-orange-600">0 Timers</div>
                  <div className="text-xs font-medium text-slate-600">Zero Pressure</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1: LIVE JOURNAL FEATURES ── */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-24 border-y border-slate-200/80">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-900">
                Habit Architecture
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Why Families &amp; Teachers Love This 30-Day Diary
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                Building a lifelong love of reading doesn&apos;t happen through force or test sheets. It happens through tiny, repeatable daily wins:
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="group rounded-3xl border-2 border-slate-200/90 bg-[#FAF9F7] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Star size={24} className="fill-amber-300" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  30-Day Streak Ladder
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Visual progress provides instant dopamine. Kids color a numbered star every day they read, turning daily practice into a tangible game.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group rounded-3xl border-2 border-slate-200/90 bg-[#FAF9F7] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Volume2 size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  Sound-of-the-Day Box
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Integrates Science of Reading phonics. Hunt for target sounds (/sh/, /ch/, /th/, /ee/) in bedtime picture books and sketch what you find.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group rounded-3xl border-2 border-slate-200/90 bg-[#FAF9F7] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Smile size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  Silly Host Moments
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Recording one silly moment or giggle from the book guarantees storytime ends with laughter, cementing warm emotional associations with books.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group rounded-3xl border-2 border-slate-200/90 bg-[#FAF9F7] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Award size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  Milestone Checkpoints
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Instead of waiting a whole month for recognition, celebrations happen every 5 days with screen-free family rewards (reading forts, picnics, extra stories).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: THE BEHAVIORAL SCIENCE OF MICRO-HABITS ── */}
        <section className="bg-slate-900 text-white px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-emerald-900/80 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                Behavioral Psychology
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-white">
                Why 10 Minutes a Day Outperforms 30-Minute Cram Sessions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
                Applying James Clear&apos;s <em>Atomic Habits</em> to early childhood literacy development.
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-slate-700 bg-slate-800/80 p-7 md:p-10 space-y-6 text-slate-200 leading-relaxed">
              <p className="text-base md:text-lg">
                When schools demand 30 minutes of mandatory timed reading, young emergent readers (ages 3–8) frequently resist. Reading becomes associated with exhaustion and friction.
              </p>

              <blockquote className="my-6 border-l-4 border-emerald-400 bg-slate-900/80 pl-6 py-4 rounded-r-2xl text-slate-100 italic">
                &ldquo;A habit must be established before it can be improved. If you can&apos;t learn the basic skill of showing up, then you will have little hope of mastering the finer details.&rdquo;
                <footer className="mt-2 text-xs font-semibold text-emerald-300 not-italic">
                  — James Clear, author of <em>Atomic Habits</em>
                </footer>
              </blockquote>

              <p>
                Just <strong>10 minutes of shared daily reading</strong> equals <strong>3,650 minutes</strong> (over 60 full hours) of focused language input per year. By keeping friction at zero and letting children check off a colorful star each night, the routine anchors permanently into your family evening rhythm.
              </p>

              <div className="pt-4 border-t border-slate-700">
                <h3 className="font-display text-xl font-bold text-emerald-300">
                  The Pediatric Habit Loop in Action:
                </h3>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-bold">
                      1. The Cue
                    </div>
                    <h4 className="mt-3 font-display font-bold text-white text-base">
                      Habit Stacking
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      Anchor reading right after a fixed routine (e.g., right after brushing teeth or tucking into pajamas).
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 font-bold">
                      2. The Routine
                    </div>
                    <h4 className="mt-3 font-display font-bold text-white text-base">
                      Low-Friction Story
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      Read 1 short story together. Hunt for 1 sound blend. Pure snuggles, zero quizzes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400 font-bold">
                      3. The Reward
                    </div>
                    <h4 className="mt-3 font-display font-bold text-white text-base">
                      Immediate Dopamine
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      Color the day&apos;s star, high-five, and celebrate keeping the streak alive!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: INTERACTIVE 30-DAY STREAK MILESTONES ── */}
        <section id="streak-map" className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-900">
                Checkpoints &amp; Rewards
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                The 6 Habit Milestones Inside the Diary
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Tap on each milestone to view the celebration reward you and your child can unlock:
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {MILESTONES.map((m, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveMilestone(idx)}
                  className={`cursor-pointer rounded-3xl border-2 p-6 transition-all duration-200 ${
                    activeMilestone === idx
                      ? "border-emerald-500 bg-white shadow-xl scale-[1.02] ring-2 ring-emerald-400/20"
                      : "border-slate-200 bg-white/70 hover:border-emerald-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{m.icon}</span>
                    <span className={`rounded-full border px-3 py-0.5 text-xs font-bold ${m.color}`}>
                      {m.day}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    <strong>Celebration Reward:</strong> {m.reward}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: PHONICS SOUND SCAVENGER HUNT ── */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-24 border-y border-slate-200/80">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-teal-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-teal-900">
                Science of Reading
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Sound-of-the-Day Phonics Hunt
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Inside Page 3 of the diary, children hunt for 8 high-frequency sounds in their books:
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-4 text-center">
                <div className="font-display text-2xl font-black text-emerald-800">/SH/</div>
                <div className="text-xs text-slate-600 mt-1">Sheep, Ship, Wish</div>
              </div>
              <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-4 text-center">
                <div className="font-display text-2xl font-black text-amber-800">/CH/</div>
                <div className="text-xs text-slate-600 mt-1">Chair, Chip, Match</div>
              </div>
              <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/50 p-4 text-center">
                <div className="font-display text-2xl font-black text-blue-800">/TH/</div>
                <div className="text-xs text-slate-600 mt-1">Thumb, Three, Bath</div>
              </div>
              <div className="rounded-2xl border-2 border-orange-200 bg-orange-50/50 p-4 text-center">
                <div className="font-display text-2xl font-black text-orange-800">/EE/</div>
                <div className="text-xs text-slate-600 mt-1">Tree, Sleep, Meet</div>
              </div>
              <div className="rounded-2xl border-2 border-purple-200 bg-purple-50/50 p-4 text-center">
                <div className="font-display text-2xl font-black text-purple-800">/OO/</div>
                <div className="text-xs text-slate-600 mt-1">Moon, Book, Spoon</div>
              </div>
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/50 p-4 text-center">
                <div className="font-display text-2xl font-black text-rose-800">/AR/</div>
                <div className="text-xs text-slate-600 mt-1">Star, Barn, Shark</div>
              </div>
              <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/50 p-4 text-center">
                <div className="font-display text-2xl font-black text-indigo-800">/ING/</div>
                <div className="text-xs text-slate-600 mt-1">Sing, Ring, King</div>
              </div>
              <div className="rounded-2xl border-2 border-teal-200 bg-teal-50/50 p-4 text-center">
                <div className="font-display text-2xl font-black text-teal-800">/SP/</div>
                <div className="text-xs text-slate-600 mt-1">Spot, Space, Spoon</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: E-E-A-T AUTHOR & REVIEWER CREDENTIALS BLOCK ── */}
        <section className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border-2 border-slate-200 bg-gradient-to-r from-slate-50 via-emerald-50/40 to-slate-50 p-6 md:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-xs">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                      E-E-A-T Verification &amp; Literacy Authority
                    </span>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      About This Habit Formation Resource
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                  <Brain size={14} />
                  <span>Science of Reading</span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
                <div>
                  <span className="font-bold text-slate-900">Developed by:</span> The BestKidBooks Early Literacy &amp; Habit Formation Team
                </div>
                <div>
                  <span className="font-bold text-slate-900">Pedagogical Framework:</span> Science of Reading (Orton-Gillingham Phonics Principles), Atomic Habits Behavioral Framework, and Dialogic Reading.
                </div>
                <div>
                  <span className="font-bold text-slate-900">Last Reviewed:</span> October 2026
                </div>
                <div>
                  <span className="font-bold text-slate-900">Format:</span> High-Resolution Printable PDF (100% Free, No Email Required)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: FREQUENTLY ASKED QUESTIONS (AEO & Schema Ready) ── */}
        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-900">
                Got Questions?
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-slate-600 text-sm md:text-base">
                Everything you need to know about building the 30-day daily reading habit.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {FAQ_ITEMS.map((item, idx) => (
                <FaqItem key={idx} idx={idx} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL DOWNLOAD CTA BANNER ── */}
        <section className="px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-800 to-slate-900 p-8 md:p-14 text-white shadow-2xl shadow-emerald-900/20 text-center">
              <div className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />

              <div className="relative max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
                  <Star size={14} className="fill-emerald-300" /> Start Day 1 Tonight
                </span>

                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  Build a Lifelong Reading Habit in 30 Days
                </h2>

                <p className="mt-4 text-base leading-relaxed text-emerald-100 md:text-lg">
                  Download the complete printable PDF now. Free instant access—no email required, no subscriptions, and ready to print from home or the classroom.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                  <a
                    id="final-download-cta"
                    href={PDF_DOWNLOAD_URL}
                    download="Tiny-Triumphs-30-Day-Reading-Habit-Diary.pdf"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-amber-400 px-8 py-4 font-display text-base font-extrabold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:bg-amber-300 hover:scale-105 active:scale-[0.98]"
                  >
                    <Download size={20} className="stroke-[2.5]" />
                    <span>Download Free Printable PDF (6 Pages)</span>
                  </a>

                  <a
                    href="#streak-map"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 px-6 py-4 font-display text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50"
                  >
                    <Star size={18} />
                    <span>View 30-Day Map</span>
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-emerald-200">
                  <span>★ 30-Day Star Streak</span>
                  <span>★ Sound-of-the-Day Phonics</span>
                  <span>★ 6 Milestone Celebrations</span>
                  <span>★ 30-Day Champion Certificate</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
