"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Nav, Footer } from "@/components/ui";
import {
  Download,
  ArrowLeft,
  CheckCircle2,
  Heart,
  Smile,
  ShieldCheck,
  Brain,
  Sparkles,
  ChevronDown,
  MessageCircle,
  HelpCircle,
  Users,
  Compass,
  Star,
  Layers,
  Award,
  Check,
  BookOpen,
} from "lucide-react";

const PDF_DOWNLOAD_URL = "/downloads/feelings-friendships-journal.pdf";

/* ─── FAQ DATA ─── */
const FAQ_ITEMS = [
  {
    q: "Why use book characters instead of asking my child directly how they feel?",
    a: "When children are overwhelmed, asking 'Why did you get so angry?' triggers defensiveness and shuts down the prefrontal cortex. Using a book character (like an impatient fox or a worried whale) creates psychological safety. By talking about the character's feelings first, children naturally open up and bridge the emotion to their own lives without feeling judged or evaluated.",
  },
  {
    q: "What age range is the Feelings & Friendships Journal designed for?",
    a: "It is specifically calibrated for children ages 5 to 10 (Kindergarten through 5th Grade). For 5- and 6-year-olds, parents read aloud and scribe while children point to the Animal Feelings Wheel and draw in the boxes. For 7- to 10-year-olds, children take independent ownership of writing their empathy reflections and personal calming plans.",
  },
  {
    q: "How does this journal help reduce emotional meltdowns?",
    a: "Dr. Dan Siegel's neuroscience principle 'Name It to Tame It' demonstrates that verbalizing an emotion shifts brain activity from the reactive amygdala to the executive prefrontal cortex. By giving children an expressive vocabulary of 8 animal archetypes and physical body cues, they learn to articulate frustration or anxiety before it escalates into an explosive outburst.",
  },
  {
    q: "Is this social-emotional journal really 100% free?",
    a: "Yes. All literacy and social-emotional printables on BestKidBooks.online are completely free for parents, homeschool families, school counselors, and teachers with no subscriptions or email paywalls required.",
  },
];

function FaqItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-200 ${
        open
          ? "border-rose-400 bg-white shadow-md ring-2 ring-rose-400/10"
          : "border-slate-200 bg-white/80 hover:border-rose-300"
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
            open ? "rotate-180 bg-rose-50 text-rose-600" : "bg-slate-100 text-slate-500"
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

export default function FeelingsCharacterJournalPage() {
  const [activeAnimal, setActiveAnimal] = useState<number>(0);

  const ANIMALS = [
    { name: "Happy Bear", feeling: "Joyful, Warm, Content", clue: "Smiling, heart feels light, ready to share smiles", color: "bg-amber-100 border-amber-300 text-amber-900", icon: "🐻" },
    { name: "Worried Whale", feeling: "Anxious, Overwhelmed", clue: "Butterflies in stomach, heavy deep waters, needs reassurance", color: "bg-teal-100 border-teal-300 text-teal-900", icon: "🐋" },
    { name: "Angry Fox", feeling: "Frustrated, Impatient", clue: "Jaw tight, fists clenched, feeling treated unfairly", color: "bg-rose-100 border-rose-300 text-rose-900", icon: "🦊" },
    { name: "Brave Lion", feeling: "Courageous, Determined", clue: "Heart beating fast but trying anyway, standing up tall", color: "bg-orange-100 border-orange-300 text-orange-900", icon: "🦁" },
    { name: "Calm Owl", feeling: "Peaceful, Thoughtful", clue: "Quiet breathing, listening carefully, rested mind", color: "bg-purple-100 border-purple-300 text-purple-900", icon: "🦉" },
    { name: "Sad Puppy", feeling: "Disappointed, Lonely", clue: "Tears, heavy shoulders, wanting a soft cuddle or blanket", color: "bg-blue-100 border-blue-300 text-blue-900", icon: "🐶" },
    { name: "Proud Giraffe", feeling: "Accomplished, Confident", clue: "Standing tall after working hard, celebrating a win", color: "bg-yellow-100 border-yellow-300 text-yellow-900", icon: "🦒" },
    { name: "Excited Monkey", feeling: "Eager, Full of Energy", clue: "Bouncing, talking fast, eager for what comes next", color: "bg-emerald-100 border-emerald-300 text-emerald-900", icon: "🐵" },
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
                    name: "Feelings & Friendships Social-Emotional Journal",
                    item: "https://bestkidbooks.online/journals/feelings-character-journal",
                  },
                ],
              },
              {
                "@type": "LearningResource",
                name: "Feelings & Friendships Social-Emotional Journal",
                description:
                  "A printable social-emotional learning journal for children ages 5-10 that uses storybook characters as mirrors to explore emotions, build empathy, and reduce outbursts.",
                learningResourceType: "Social-Emotional Learning Activity Journal",
                educationalLevel: "Kindergarten, Grade 1, Grade 2, Grade 3, Grade 4, Grade 5",
                typicalAgeRange: "5-10",
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

      <main className="min-h-screen bg-[#FFFDFB] text-slate-800">
        {/* ── BREADCRUMB / BACK ── */}
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
          <Link
            href="/journals"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-rose-400 hover:text-rose-700"
          >
            <ArrowLeft size={14} /> Back to Reading Journals &amp; Printables
          </Link>
        </div>

        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 md:pb-24 md:pt-12">
          {/* Gentle background orbs */}
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-rose-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-teal-50/40 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Hero Copy */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-rose-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-800 shadow-xs">
                  <Heart size={14} className="text-rose-600 fill-rose-500/20" />
                  <span>Emotional Literacy • Ages 5–10</span>
                </div>

                <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-[1.15]">
                  Feelings &amp; Friendships:{" "}
                  <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
                    Help Children Name Big Feelings
                  </span>{" "}
                  Through Story Characters
                </h1>

                <p className="mt-5 text-lg leading-relaxed text-slate-600 md:text-xl">
                  Developed with child psychologists, this journal uses book characters as gentle mirrors for worry, anger, jealousy, and bravery. Give your child a safe, shame-free vocabulary to understand their inner world.
                </p>

                {/* Primary & Secondary CTA Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    id="hero-download-cta"
                    href={PDF_DOWNLOAD_URL}
                    download="Feelings-and-Friendships-Social-Emotional-Journal.pdf"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-rose-600 px-7 py-4 font-display text-base font-bold text-white shadow-lg shadow-rose-700/20 transition-all hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-700/30 active:scale-[0.98]"
                  >
                    <Download size={20} className="stroke-[2.5]" />
                    <span>Download Free Printable PDF (7 Pages)</span>
                  </a>

                  <a
                    href="#feelings-wheel"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-300 bg-white px-5 py-3.5 font-display text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-rose-400 hover:bg-rose-50/50 hover:text-rose-900"
                  >
                    <Smile size={18} className="text-rose-600" />
                    <span>Explore Animal Feelings Wheel</span>
                  </a>
                </div>

                {/* Micro-trust signals */}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1.5 text-rose-700">
                    <CheckCircle2 size={15} /> Child Psychologist Aligned
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-rose-700">
                    <CheckCircle2 size={15} /> &ldquo;Name It to Tame It&rdquo; Framework
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-rose-700">
                    <CheckCircle2 size={15} /> 100% Free Printable (No Subscription)
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Mockup */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl shadow-rose-900/10 ring-1 ring-slate-900/5">
                  <Image
                    src="/images/feelings-journal-mockup.jpg"
                    alt="Feelings and Friendships Social Emotional Journal spread with Animal Feelings Wheel and Calming Strategy Toolkit"
                    width={800}
                    height={450}
                    className="h-auto w-full object-cover"
                    priority
                  />
                  {/* Floating celebratory ribbon card */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl border border-white/80 bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-md">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500 text-white font-bold shadow-xs">
                        ❤️
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          Animal Feelings Wheel
                        </div>
                        <div className="text-[11px] text-slate-500">
                          8 Emotion Archetypes + Calming Tools
                        </div>
                      </div>
                    </div>
                    <span className="rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-extrabold text-rose-800">
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
            <div className="relative overflow-hidden rounded-3xl border-2 border-rose-400/40 bg-gradient-to-br from-rose-50/70 via-pink-50/40 to-purple-50/60 p-7 shadow-lg shadow-rose-900/5 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-xs">
                  <Sparkles size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-rose-700">
                    Direct Answer • AEO &amp; AI Overview Ready
                  </span>
                  <h2 className="font-display text-xl font-bold text-slate-900 md:text-2xl">
                    What is the Feelings &amp; Friendships Social-Emotional Journal?
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-3.5 border-t border-rose-300/40 pt-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
                <p>
                  <strong>The Feelings &amp; Friendships Social-Emotional Journal</strong> is a free printable literacy and emotional wellness workbook for children ages 5 to 10. Built upon Dr. Dan Siegel&apos;s <em>&ldquo;Name It to Tame It&rdquo;</em> neuroscience principle, it provides children with a safe psychological mirror: rather than putting kids on the spot about their own tantrums or anxieties, it invites them to analyze book characters first. Using an <strong>Animal Feelings Wheel</strong>, <strong>empathy spotlight prompts</strong>, and <strong>calming regulation toolkits</strong>, children develop the emotional vocabulary needed to resolve conflicts, express needs peacefully, and reduce behavioral outbursts.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 pt-3">
                <div className="rounded-xl border border-rose-200/80 bg-white/80 p-3 text-center shadow-xs">
                  <div className="font-display text-xl font-extrabold text-rose-700">8 Animals</div>
                  <div className="text-xs font-medium text-slate-600">Feelings Archetypes</div>
                </div>
                <div className="rounded-xl border border-rose-200/80 bg-white/80 p-3 text-center shadow-xs">
                  <div className="font-display text-xl font-extrabold text-purple-700">Safe Mirror</div>
                  <div className="text-xs font-medium text-slate-600">Zero-Shame Reflection</div>
                </div>
                <div className="rounded-xl border border-rose-200/80 bg-white/80 p-3 text-center shadow-xs">
                  <div className="font-display text-xl font-extrabold text-teal-700">3 Breaths</div>
                  <div className="text-xs font-medium text-slate-600">Whale Calming Tool</div>
                </div>
                <div className="rounded-xl border border-rose-200/80 bg-white/80 p-3 text-center shadow-xs">
                  <div className="font-display text-xl font-extrabold text-amber-700">4 Parts</div>
                  <div className="text-xs font-medium text-slate-600">Sincere Apology Script</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1: WHY FAMILIES & COUNSELORS LOVE IT ── */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-24 border-y border-slate-200/80">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-rose-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-rose-900">
                Child-Centered Empathy
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Why Families &amp; Educators Love This Journal
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                Children don&apos;t misbehave because they want to; they act out when their feelings outgrow their vocabulary. Here is how this journal bridges the gap:
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="group rounded-3xl border-2 border-slate-200/90 bg-[#FAF9F7] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-rose-400 hover:shadow-xl hover:shadow-rose-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Smile size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  Animal Feelings Wheel
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Features kid-friendly animal expressions (Worried Whale, Angry Fox, Calm Owl) so children can easily point to their feeling even when verbalizing feels hard.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group rounded-3xl border-2 border-slate-200/90 bg-[#FAF9F7] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Heart size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  Empathy Spotlight Prompts
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Questions like <em>&ldquo;How would you help Whale feel calm?&rdquo;</em> build cognitive empathy, helping children imagine someone else&apos;s perspective.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group rounded-3xl border-2 border-slate-200/90 bg-[#FAF9F7] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Brain size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  Reduces Outbursts
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Providing nuanced emotional words (impatient, disappointed, overwhelmed) allows children to name their state before it erupts into frustration or tears.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group rounded-3xl border-2 border-slate-200/90 bg-[#FAF9F7] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-sm transition-transform group-hover:scale-105">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  Safe, Private Sanctuary
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  A tender bedtime reflection space between parent and child—free from criticism, grading, or school pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: INSIDE THE JOURNAL PREVIEW — SAMPLE QUESTIONS ── */}
        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="inline-block rounded-full bg-rose-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-rose-900">
                  Story-Driven Connection
                </span>
                <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                  Sample After-Story Questions Inside the Log
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  These carefully framed prompts gently encourage children to reflect on characters and discover parallels in their own daily lives:
                </p>

                <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 shrink-0 text-rose-600" size={18} />
                    <p className="text-xs leading-relaxed text-rose-950">
                      <strong>Parent Guideline:</strong> There are no wrong answers. When your child answers, validate them first: <em>&ldquo;That makes so much sense why Whale felt that way.&rdquo;</em>
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Interactive Sample Prompt Cards */}
              <div className="space-y-4 lg:col-span-7">
                <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-rose-400 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-800 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900">
                      &ldquo;When Fox got impatient, what helped him wait?&rdquo;
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Focuses on impulse control and delay of gratification. Opens up a discussion about what our bodies and hands can do when waiting feels hard.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-teal-400 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-800 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900">
                      &ldquo;Have you ever felt a small worry grow big like Whale&apos;s tide?&rdquo;
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Normalizes anxiety by showing that even massive creatures like whales feel worried. Invites children to share their &ldquo;small worries&rdquo; before bedtime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-purple-400 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-800 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900">
                      &ldquo;What kind words can we give someone who made a mistake?&rdquo;
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Fosters forgiveness, social grace, and resilience. Reminds children that mistakes are how brains grow—both in books and at school.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-amber-400 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900">
                      &ldquo;Draw what bravery looked like in tonight&apos;s chapter.&rdquo;
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Redefines bravery away from fighting monsters toward emotional courage: asking for help, standing up for a friend, or trying something after failing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: THE NEUROSCIENCE BEHIND EMOTIONAL LITERACY (E-E-A-T GUIDE) ── */}
        <section className="bg-slate-900 text-white px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-rose-900/80 border border-rose-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-300">
                Neuroscience &amp; Child Psychology
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-white">
                The Science of &ldquo;Name It to Tame It&rdquo;
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
                Why storytelling is the most effective medium for teaching children emotional regulation.
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-slate-700 bg-slate-800/80 p-7 md:p-10 space-y-6 text-slate-200 leading-relaxed">
              <p className="text-base md:text-lg">
                Pioneered by UCLA clinical professor of psychiatry <strong>Dr. Daniel Siegel</strong> (author of <em>The Whole-Brain Child</em>), the <strong>&ldquo;Name It to Tame It&rdquo;</strong> principle explains that when a child experiences intense fear, anger, or frustration, the right hemisphere of the brain and the emotional amygdala take over.
              </p>

              <blockquote className="my-6 border-l-4 border-rose-400 bg-slate-900/80 pl-6 py-4 rounded-r-2xl text-slate-100 italic">
                &ldquo;When children can name their emotions and tell the story of what happened, the left hemisphere of the brain connects with the right. The prefrontal cortex engages, calming the nervous system and restoring emotional equilibrium.&rdquo;
                <footer className="mt-2 text-xs font-semibold text-rose-300 not-italic">
                  — Whole-Brain Child Framework (Dr. Dan Siegel &amp; Dr. Tina Payne Bryson)
                </footer>
              </blockquote>

              <p>
                By using characters as gentle third-party mirrors, children explore complex feelings (jealousy, exclusion, performance anxiety) without defensive resistance. They witness characters struggle, seek help, and resolve problems—providing subconscious blueprints for their own lives.
              </p>

              <div className="pt-4 border-t border-slate-700">
                <h3 className="font-display text-xl font-bold text-rose-300">
                  The 3-Step Bedtime Social-Emotional Ritual:
                </h3>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400 font-bold">
                      1
                    </div>
                    <h4 className="mt-3 font-display font-bold text-white text-base">
                      Identify Character&apos;s Emotion
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      Find the animal feeling icon that matches how the character felt during tonight&apos;s chapter.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400 font-bold">
                      2
                    </div>
                    <h4 className="mt-3 font-display font-bold text-white text-base">
                      The Personal Bridge
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      Ask: <em>&ldquo;When is a time you felt that same way?&rdquo;</em> Listen without fixing or lecturing.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 font-bold">
                      3
                    </div>
                    <h4 className="mt-3 font-display font-bold text-white text-base">
                      The Calming Strategy
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      Pick one calming tool (Whale Breaths or Volcano Doodle) to soothe the feeling before bedtime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: THE ANIMAL FEELINGS WHEEL (INTERACTIVE EXPLORER) ── */}
        <section id="feelings-wheel" className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-rose-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-rose-900">
                Emotional Archetypes
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                The 8 Animal Feelings Inside the Wheel
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Tap on an animal archetype to see what it feels like in a child&apos;s body and how to support them.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ANIMALS.map((a, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveAnimal(idx)}
                  className={`cursor-pointer rounded-3xl border-2 p-5 transition-all duration-200 ${
                    activeAnimal === idx
                      ? "border-rose-500 bg-white shadow-xl scale-[1.02] ring-2 ring-rose-400/20"
                      : "border-slate-200 bg-white/70 hover:border-rose-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{a.icon}</span>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${a.color}`}>
                      {a.name}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-base font-bold text-slate-900">
                    {a.feeling}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    <strong>Body Cue:</strong> {a.clue}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: CALMING STRATEGIES & FRIENDSHIP REPAIR ── */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-24 border-y border-slate-200/80">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Calming Toolkit */}
              <div className="rounded-3xl border-2 border-teal-200 bg-teal-50/50 p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-600 text-white font-bold">
                    🐋
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-800">
                      Somatic Regulation
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      The 3 Whale Breaths Strategy
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  <p>
                    <strong>1. Hand on Belly:</strong> Place one hand on your tummy like a whale floating on the calm sea.
                  </p>
                  <p>
                    <strong>2. Inhale Deeply:</strong> Breathe in through your nose for 4 seconds, feeling your tummy expand like a gentle wave.
                  </p>
                  <p>
                    <strong>3. Exhale Slowly:</strong> Blow out smoothly through your mouth for 5 seconds like a misty whale spout.
                  </p>
                  <p className="text-xs text-teal-900 bg-teal-100/70 p-3 rounded-xl mt-3">
                    💡 <em>Pediatric Note:</em> Prolonged exhalation activates the parasympathetic vagal nerve, naturally slowing heart rate.
                  </p>
                </div>
              </div>

              {/* 4-Part Apology */}
              <div className="rounded-3xl border-2 border-rose-200 bg-rose-50/50 p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-600 text-white font-bold">
                    🤝
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-800">
                      Conflict Resolution
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      The 4-Part Sincere Apology
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  <p>
                    <strong>1. Name the Action:</strong> &ldquo;I am sorry for taking your book without asking.&rdquo;
                  </p>
                  <p>
                    <strong>2. Acknowledge Feeling:</strong> &ldquo;I know that made you feel upset and frustrated.&rdquo;
                  </p>
                  <p>
                    <strong>3. Make It Right:</strong> &ldquo;Here is your book, and can I help you find your page?&rdquo;
                  </p>
                  <p>
                    <strong>4. Future Promise:</strong> &ldquo;Next time I will ask first and wait for your answer.&rdquo;
                  </p>
                  <p className="text-xs text-rose-950 bg-rose-100/70 p-3 rounded-xl mt-3">
                    💡 <em>Social Script:</em> Teaches restorative accountability instead of forced, hollow &ldquo;sorry&rdquo; words.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: E-E-A-T AUTHOR & REVIEWER CREDENTIALS BLOCK ── */}
        <section className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border-2 border-slate-200 bg-gradient-to-r from-slate-50 via-rose-50/40 to-slate-50 p-6 md:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-xs">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800">
                      E-E-A-T Verification &amp; Clinical Backing
                    </span>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      About This Social-Emotional Resource
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-rose-300 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-800">
                  <Brain size={14} />
                  <span>Psychology Aligned</span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
                <div>
                  <span className="font-bold text-slate-900">Developed by:</span> The BestKidBooks Child Development &amp; Social-Emotional Learning Team
                </div>
                <div>
                  <span className="font-bold text-slate-900">Pedagogical Framework:</span> Dr. Daniel Siegel&apos;s Whole-Brain Child Model, CASEL 5 Core SEL Competencies, and Dialogic Bibliotherapy.
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

        {/* ── SECTION 7: FREQUENTLY ASKED QUESTIONS (AEO & Schema Ready) ── */}
        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-rose-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-rose-900">
                Got Questions?
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-slate-600 text-sm md:text-base">
                Everything you need to know about using story characters for emotional literacy and calming.
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
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-700 via-rose-800 to-slate-900 p-8 md:p-14 text-white shadow-2xl shadow-rose-900/20 text-center">
              <div className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-rose-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />

              <div className="relative max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-rose-200 backdrop-blur-md">
                  <Heart size={14} className="fill-rose-300" /> Begin Tonight&apos;s Emotional Journey
                </span>

                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  Give Your Child the Gift of Emotional Safety
                </h2>

                <p className="mt-4 text-base leading-relaxed text-rose-100 md:text-lg">
                  Download the complete printable PDF now. Free instant access—no login, no credit cards, and ready to print for home, homeschool, or classroom use.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                  <a
                    id="final-download-cta"
                    href={PDF_DOWNLOAD_URL}
                    download="Feelings-and-Friendships-Social-Emotional-Journal.pdf"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-amber-400 px-8 py-4 font-display text-base font-extrabold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:bg-amber-300 hover:scale-105 active:scale-[0.98]"
                  >
                    <Download size={20} className="stroke-[2.5]" />
                    <span>Download Free Printable PDF (7 Pages)</span>
                  </a>

                  <a
                    href="#feelings-wheel"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 px-6 py-4 font-display text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50"
                  >
                    <Smile size={18} />
                    <span>Review Animal Archetypes</span>
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-rose-200">
                  <span>★ Animal Feelings Wheel</span>
                  <span>★ 3 Whale Breaths Toolkit</span>
                  <span>★ 4-Part Apology Script</span>
                  <span>★ Empathy Champion Certificate Included</span>
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
