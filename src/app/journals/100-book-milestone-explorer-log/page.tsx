"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Nav, Footer } from "@/components/ui";
import {
  Download,
  Printer,
  ArrowLeft,
  CheckCircle2,
  Award,
  Sparkles,
  BookOpen,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Smile,
  MessageSquare,
  Compass,
  Star,
  Check,
  ShieldCheck,
  GraduationCap,
  FileText,
  Clock,
  Layers,
  Heart,
  ExternalLink,
} from "lucide-react";

const PDF_DOWNLOAD_URL = "/downloads/100-book-milestone-explorer-log.pdf";
const HTML_VIEWER_URL = "/downloads/100-book-milestone-explorer-log.html";

/* ─── FAQ DATA ─── */
const FAQ_ITEMS = [
  {
    q: "Do rereads of the same book count toward the 100-book goal?",
    a: "Yes! Rereading favorite books is one of the most powerful ways young children ages 4–9 build reading fluency, vocabulary confidence, and comprehension. Every time you finish a book—even if it is for the tenth time—color in a new passport stamp.",
  },
  {
    q: "Do graphic novels, comic books, and audiobooks count?",
    a: "100% yes. Graphic novels require complex visual-verbal synthesis and are fantastic for building confidence in reluctant readers. Audiobooks and parent read-alouds expose children to rich vocabulary above their current decoding level. All of them earn stamps in the Explorer Log!",
  },
  {
    q: "How long should it take a child to finish The 100-Book Milestone Explorer Log?",
    a: "There is no deadline! At a relaxed pace of 2 books per week, a family will complete the log in one year. Younger children reading short picture books every night may finish in 3 months, while older 8- and 9-year-olds reading longer chapter books may take 6 to 12 months.",
  },
  {
    q: "Is this printable reading log really free for teachers and parents?",
    a: "Yes. All literacy printables on BestKidBooks.online are 100% free for personal home use, homeschooling, and classroom teachers with no subscription required.",
  },
];

function FaqItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-200 ${
        open
          ? "border-teal-500/60 bg-white shadow-md ring-2 ring-teal-500/10"
          : "border-slate-200 bg-white/80 hover:border-teal-500/30"
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
            open ? "rotate-180 bg-teal-50 text-teal-600" : "bg-slate-100 text-slate-500"
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

export default function MilestoneExplorerPage() {
  const [activeTab, setActiveTab] = useState<"all" | "early" | "middle" | "upper">("all");

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
                    name: "The 100-Book Milestone Explorer Log",
                    item: "https://bestkidbooks.online/journals/100-book-milestone-explorer-log",
                  },
                ],
              },
              {
                "@type": "LearningResource",
                name: "The 100-Book Milestone Explorer Log",
                description:
                  "A vibrant, illustrated printable 100-book tracker for kids ages 4-9 featuring 100 numbered passport stamps, a 5-star smiling bear rating scale, quote bubbles, and milestone badges.",
                learningResourceType: "Reading Log & Activity Journal",
                educationalLevel:
                  "Preschool, Kindergarten, Grade 1, Grade 2, Grade 3, Grade 4",
                typicalAgeRange: "4-9",
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

      <main className="min-h-screen bg-[#FFFDF9] text-slate-800">
        {/* ── BREADCRUMB / BACK ── */}
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
          <Link
            href="/journals"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-teal-400 hover:text-teal-700"
          >
            <ArrowLeft size={14} /> Back to Reading Journals & Printables
          </Link>
        </div>

        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 md:pb-24 md:pt-12">
          {/* Subtle playful background decoration */}
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-coral-50/40 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Hero Text */}
              <div className="lg:col-span-7">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800 shadow-xs">
                  <Compass size={14} className="text-teal-600" />
                  <span>Milestone Tracker • Ages 4–9</span>
                </div>

                <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-[1.15]">
                  The 100-Book Milestone Explorer Log:{" "}
                  <span className="bg-gradient-to-r from-teal-700 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                    Track, Rate, and Celebrate
                  </span>{" "}
                  Your Child’s First 100 Books
                </h1>

                <p className="mt-5 text-lg leading-relaxed text-slate-600 md:text-xl">
                  A vibrant, illustrated printable book tracker that turns every completed story into a proud badge of honor. Built for rereads, graphic novels, audiobooks, and bedtime favorites.
                </p>

                {/* Primary & Secondary CTA Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    id="hero-download-cta"
                    href={PDF_DOWNLOAD_URL}
                    download="100-Book-Milestone-Explorer-Log.pdf"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-teal-600 px-7 py-4 font-display text-base font-bold text-white shadow-lg shadow-teal-700/20 transition-all hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-700/30 active:scale-[0.98]"
                  >
                    <Download size={20} className="stroke-[2.5]" />
                    <span>Download Free Printable PDF (12 Pages)</span>
                  </a>

                  <a
                    id="hero-print-online-cta"
                    href={HTML_VIEWER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-300 bg-white px-5 py-3.5 font-display text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-teal-500 hover:bg-teal-50/50 hover:text-teal-800"
                  >
                    <Printer size={18} className="text-teal-600" />
                    <span>View &amp; Print in Browser</span>
                  </a>
                </div>

                {/* Micro-trust line */}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1.5 text-teal-700">
                    <CheckCircle2 size={15} /> Evidence-Based Pediatric Literacy
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-teal-700">
                    <CheckCircle2 size={15} /> 100% Free Printable (No Subscription)
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-teal-700">
                    <CheckCircle2 size={15} /> Designed for Emergent &amp; Independent Readers
                  </span>
                </div>
              </div>

              {/* Right Column: High-Impact Mockup */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl shadow-slate-300/60 ring-1 ring-slate-900/5">
                  <Image
                    src="/images/100-book-explorer-mockup.jpg"
                    alt="The 100-Book Milestone Explorer Log reading journal spread with passport stamps and bear ratings"
                    width={800}
                    height={450}
                    className="h-auto w-full object-cover"
                    priority
                  />
                  {/* Floating celebratory ribbon card */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl border border-white/80 bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-md">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white font-bold shadow-xs">
                        100
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          100 Story Passport Stamps
                        </div>
                        <div className="text-[11px] text-slate-500">
                          5 Milestones: 10, 25, 50, 75, 100
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
            <div className="relative overflow-hidden rounded-3xl border-2 border-teal-500/30 bg-gradient-to-br from-teal-50/70 via-emerald-50/40 to-amber-50/60 p-7 shadow-lg shadow-teal-900/5 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-xs">
                  <Sparkles size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-teal-700">
                    Direct Answer • AEO &amp; AI Overview Ready
                  </span>
                  <h2 className="font-display text-xl font-bold text-slate-900 md:text-2xl">
                    What is The 100-Book Milestone Explorer Log?
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-3.5 border-t border-teal-600/15 pt-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
                <p>
                  <strong>The 100-Book Milestone Explorer Log</strong> is a free, evidence-based printable reading journal designed for children ages 4 to 9. Instead of using rigid school reading timers that turn reading into a chore, it uses gamified visual rewards—including <strong>100 color-in story passport stamps</strong>, a <strong>5-star smiling bear rating scale</strong>, creative <strong>quote bubbles</strong>, and <strong>milestone badges at 10, 25, 50, 75, and 100 books</strong>—to build intrinsic reading motivation, reading comprehension, and daily family literacy habits.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 pt-3">
                <div className="rounded-xl border border-teal-200/60 bg-white/80 p-3 text-center shadow-xs">
                  <div className="font-display text-xl font-extrabold text-teal-700">100</div>
                  <div className="text-xs font-medium text-slate-600">Passport Stamps</div>
                </div>
                <div className="rounded-xl border border-teal-200/60 bg-white/80 p-3 text-center shadow-xs">
                  <div className="font-display text-xl font-extrabold text-amber-600">5-Star</div>
                  <div className="text-xs font-medium text-slate-600">Smiling Bear Scale</div>
                </div>
                <div className="rounded-xl border border-teal-200/60 bg-white/80 p-3 text-center shadow-xs">
                  <div className="font-display text-xl font-extrabold text-coral-600 text-[#E25C47]">5 Badges</div>
                  <div className="text-xs font-medium text-slate-600">Checkpoint Awards</div>
                </div>
                <div className="rounded-xl border border-teal-200/60 bg-white/80 p-3 text-center shadow-xs">
                  <div className="font-display text-xl font-extrabold text-indigo-600">0 Timers</div>
                  <div className="text-xs font-medium text-slate-600">Zero Homework Guilt</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1: LIVE JOURNAL FEATURES ── */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-24 border-y border-slate-200/80">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-900">
                Kid-Approved Design
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Why Families &amp; Educators Love This 100-Book Tracker
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                Traditional school reading logs often feel like homework, focusing on minutes on a clock rather than the magic inside the pages. We designed The 100-Book Milestone Explorer Log around positive reinforcement and child-led discovery.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="group rounded-3xl border-2 border-slate-200/90 bg-[#FAF9F5] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl hover:shadow-teal-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Compass size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  100 Numbered Passport Stamps
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Visual progress tracking provides an immediate dopamine boost for young minds. Every time your child finishes a story, they color in a numbered passport stamp on their master map.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group rounded-3xl border-2 border-slate-200/90 bg-[#FAF9F5] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Smile size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  5-Star Smiling Bear Rating Scale
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Children ages 4–9 love sharing their opinions. Our playful bear rating scale empowers kids to evaluate plot, humor, and characters without needing advanced writing skills.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group rounded-3xl border-2 border-slate-200/90 bg-[#FAF9F5] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#E25C47] hover:shadow-xl hover:shadow-red-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E25C47] text-white shadow-sm transition-transform group-hover:scale-105">
                  <MessageSquare size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  Funniest Quote Bubbles
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Capturing a hilarious line or memorable phrase strengthens phonological awareness, vocabulary retention, and active listening skills during shared read-alouds.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group rounded-3xl border-2 border-slate-200/90 bg-[#FAF9F5] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Award size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  5 Milestone Checkpoint Badges
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Reaching 100 books is a big goal! Breaking the journey into celebratory checkpoints at 10, 25, 50, 75, and 100 books keeps reluctant and emergent readers motivated throughout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: INSIDE THE JOURNAL PREVIEW ── */}
        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="inline-block rounded-full bg-teal-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-teal-900">
                  Dialogic Reading in Practice
                </span>
                <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                  Sample After-Story Questions Inside the Log
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  <strong>Dialogic reading</strong>—having a back-and-forth conversation with your child about a story—is proven to boost reading comprehension more than passive listening alone. Inside the log, every review page features playful prompts that spark dinner-table and bedtime conversations:
                </p>

                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 shrink-0 text-amber-600" size={18} />
                    <p className="text-xs leading-relaxed text-amber-900">
                      <strong>Pediatric Literacy Tip:</strong> Don&apos;t quiz your child like an exam! Let their silly answers lead the conversation. You will laugh together and build a priceless record of their childhood thoughts.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Interactive Sample Prompt Cards */}
              <div className="space-y-4 lg:col-span-7">
                <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-teal-400 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-800 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900">
                      &ldquo;Draw the funniest face from this book.&rdquo;
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Connects visual art to character emotion and story recall. Perfect for emergent pre-readers who communicate best through drawings and doodles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-amber-400 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900">
                      &ldquo;Rate this story: 1 to 5 sleeping bears!&rdquo;
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Builds critical thinking and personal reading identity. Kids learn that their opinion matters and that it&apos;s okay not to love every book equally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-[#E25C47]/60 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-800 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900">
                      &ldquo;Which word was the coolest new word we learned?&rdquo;
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Expands expressive vocabulary through incidental learning. Parents scribe the word and craft a silly family sentence together.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-indigo-400 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-800 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900">
                      &ldquo;Would you recommend this book to your best friend? Why?&rdquo;
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Encourages perspective-taking, social-emotional awareness, and narrative summarizing without feeling like a classroom book report.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: E-E-A-T EDUCATIONAL GUIDE — Crucial for Google AdSense & Ranking ── */}
        <section className="bg-slate-900 text-white px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-teal-900/80 border border-teal-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-300">
                Pediatric Literacy Research
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-white">
                The Pediatric Science Behind the 100-Book Milestone
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
                Why does tracking 100 books work so effectively for children between ages 4 and 9?
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-slate-700 bg-slate-800/80 p-7 md:p-10 space-y-6 text-slate-200 leading-relaxed">
              <p className="text-base md:text-lg">
                According to literacy research and pediatric guidelines from the <strong>American Academy of Pediatrics (AAP)</strong>, shared and independent reading during early childhood builds critical neural pathways responsible for language acquisition, executive function, and emotional regulation.
              </p>

              <blockquote className="my-6 border-l-4 border-amber-400 bg-slate-900/80 pl-6 py-4 rounded-r-2xl text-slate-100 italic">
                &ldquo;The single strongest predictor of long-term academic success is the volume of joyful, self-selected reading a child experiences—surpassing even socioeconomic factors.&rdquo;
                <footer className="mt-2 text-xs font-semibold text-amber-300 not-italic">
                  — Literacy Consensus (referencing research highlighted by Donalyn Miller, author of <em>The Book Whisperer</em>)
                </footer>
              </blockquote>

              <p>
                However, literacy experts caution that mandatory, timer-based reading logs can backfire if they feel like a test. Counting down minutes turns reading into a contractual chore, stripping away intrinsic pleasure.
              </p>

              <div className="pt-4 border-t border-slate-700">
                <h3 className="font-display text-xl font-bold text-teal-300">
                  How our Explorer Log solves the &ldquo;Reading Log Burnout&rdquo; problem:
                </h3>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400 font-bold">
                      <Clock size={18} />
                    </div>
                    <h4 className="mt-3 font-display font-bold text-white text-base">
                      Zero Timer Pressure
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      Whether a book takes 5 minutes at bedtime or 3 days of chapter reading, every book counts equally as 1 stamp. No stopwatches. No pressure.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 font-bold">
                      <Layers size={18} />
                    </div>
                    <h4 className="mt-3 font-display font-bold text-white text-base">
                      &lt;2 Books a Week = 100 a Year
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      Reading 100 books sounds massive, but at just 2 books per week, your child will read <strong>104 books in a single year</strong>! Completely doable for any family.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral-500/20 text-[#FF8573] font-bold">
                      <Heart size={18} />
                    </div>
                    <h4 className="mt-3 font-display font-bold text-white text-base">
                      All Formats &amp; Rereads Count
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      In early literacy, repetition maps words to meaning. If your 4-year-old requests the same picture book 5 nights in a row, that earns 5 passport stamps! Graphic novels and audiobooks count too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: AGE-BY-AGE IMPLEMENTATION TABLE ── */}
        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-teal-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-teal-900">
                Developmental Guide
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                How to Use the Explorer Log by Age Group (Ages 4–9)
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Tailored reading strategies designed to match your child&apos;s cognitive development stage.
              </p>
            </div>

            {/* Desktop Table */}
            <div className="mt-10 hidden md:block overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <th className="px-6 py-4">Age Group</th>
                    <th className="px-6 py-4">Reading Stage</th>
                    <th className="px-6 py-4">How to Use the 100-Book Log</th>
                    <th className="px-6 py-4">Recommended Milestone Reward</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm leading-relaxed">
                  <tr className="hover:bg-teal-50/30 transition-colors">
                    <td className="px-6 py-5 font-display font-bold text-teal-800 whitespace-nowrap">
                      Ages 4–5<br />
                      <span className="text-xs font-normal text-slate-500">(Pre-K &amp; K)</span>
                    </td>
                    <td className="px-6 py-5 font-semibold text-slate-700 whitespace-nowrap">
                      <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                        Emergent &amp; Pre-Readers
                      </span>
                    </td>
                    <td className="px-6 py-5 text-slate-600">
                      Parents read aloud and scribe the book title. Let your child color the passport stamp, color the bear rating, and draw the funniest character face.
                    </td>
                    <td className="px-6 py-5 text-slate-700 font-medium">
                      A trip to the local public library or a special bookmark.
                    </td>
                  </tr>

                  <tr className="hover:bg-teal-50/30 transition-colors">
                    <td className="px-6 py-5 font-display font-bold text-teal-800 whitespace-nowrap">
                      Ages 6–7<br />
                      <span className="text-xs font-normal text-slate-500">(1st &amp; 2nd Grade)</span>
                    </td>
                    <td className="px-6 py-5 font-semibold text-slate-700 whitespace-nowrap">
                      <span className="inline-flex rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-bold text-teal-800">
                        Early Decoders
                      </span>
                    </td>
                    <td className="px-6 py-5 text-slate-600">
                      Co-read together! Have your child write the &ldquo;Coolest New Word&rdquo; and sound out the book title with your help. Count decodable readers and picture books.
                    </td>
                    <td className="px-6 py-5 text-slate-700 font-medium">
                      Choosing the family dinner menu or staying up 15 minutes late to read.
                    </td>
                  </tr>

                  <tr className="hover:bg-teal-50/30 transition-colors">
                    <td className="px-6 py-5 font-display font-bold text-teal-800 whitespace-nowrap">
                      Ages 8–9<br />
                      <span className="text-xs font-normal text-slate-500">(3rd &amp; 4th Grade)</span>
                    </td>
                    <td className="px-6 py-5 font-semibold text-slate-700 whitespace-nowrap">
                      <span className="inline-flex rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-800">
                        Independent Explorers
                      </span>
                    </td>
                    <td className="px-6 py-5 text-slate-600">
                      Kids take full ownership of their log. Great for graphic novels, chapter book series, and non-fiction topics. Encourage them to write full quotes in the quote bubbles.
                    </td>
                    <td className="px-6 py-5 text-slate-700 font-medium">
                      A trip to a local bookstore to pick out their #50 or #100 milestone book!
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards for Table */}
            <div className="mt-8 space-y-4 md:hidden">
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-teal-800 text-base">Ages 4–5 (Pre-K &amp; K)</span>
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800">Emergent</span>
                </div>
                <div className="mt-3 text-sm text-slate-600">
                  <strong>How to Use:</strong> Parents read aloud and scribe the book title. Let your child color the passport stamp, color the bear rating, and draw the funniest character face.
                </div>
                <div className="mt-2 text-xs font-medium text-slate-700">
                  <strong>Reward:</strong> A trip to the local public library or a special bookmark.
                </div>
              </div>

              <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-teal-800 text-base">Ages 6–7 (1st &amp; 2nd Grade)</span>
                  <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-bold text-teal-800">Early Decoders</span>
                </div>
                <div className="mt-3 text-sm text-slate-600">
                  <strong>How to Use:</strong> Co-read together! Have your child write the &ldquo;Coolest New Word&rdquo; and sound out the book title with your help.
                </div>
                <div className="mt-2 text-xs font-medium text-slate-700">
                  <strong>Reward:</strong> Choosing the family dinner menu or staying up 15 minutes late to read.
                </div>
              </div>

              <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-teal-800 text-base">Ages 8–9 (3rd &amp; 4th Grade)</span>
                  <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-800">Independent</span>
                </div>
                <div className="mt-3 text-sm text-slate-600">
                  <strong>How to Use:</strong> Kids take full ownership. Great for graphic novels, chapter books, and non-fiction. Full quotes in quote bubbles.
                </div>
                <div className="mt-2 text-xs font-medium text-slate-700">
                  <strong>Reward:</strong> A trip to a local bookstore to pick out their #50 or #100 milestone book!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: STEP-BY-STEP PRINTING INSTRUCTIONS ── */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-24 border-y border-slate-200/80">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-teal-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-teal-900">
                Simple Setup
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                How to Print &amp; Assemble Your Explorer Log at Home
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Get your child&apos;s personalized reading expedition ready in under 3 minutes.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl border-2 border-slate-200/80 bg-[#FAF9F5] p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white font-bold">
                  1
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                  Download the Free PDF
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Click the download button on this page to save <code>100-book-milestone-explorer-log.pdf</code> directly to your device.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-slate-200/80 bg-[#FAF9F5] p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white font-bold">
                  2
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                  Choose Your Paper
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Standard US Letter or A4 works great. For the Cover, 100-Stamp Map, and Certificate, we recommend heavier cardstock (65 lb) so crayons won&apos;t bleed through.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-slate-200/80 bg-[#FAF9F5] p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E25C47] text-white font-bold">
                  3
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                  Print Extra Review Pages
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Pages 1–5 are your core milestone trackers. Pages 6–8 are modular Book Review &amp; Activity Sheets—print as many copies as your child wants for their favorite stories!
                </p>
              </div>

              <div className="rounded-3xl border-2 border-slate-200/80 bg-[#FAF9F5] p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold">
                  4
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                  Bind It Their Way
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Hole-punch the pages into a colorful 3-ring binder, clip them onto a dedicated &ldquo;Reading Explorer Clipboard&rdquo; next to their bed, or staple them into a custom booklet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: E-E-A-T AUTHOR & REVIEWER CREDENTIALS BLOCK ── */}
        <section className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border-2 border-slate-200 bg-gradient-to-r from-slate-50 via-teal-50/40 to-slate-50 p-6 md:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-xs">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                      E-E-A-T Verification &amp; Educational Authority
                    </span>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      About This Literacy Resource
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-teal-300 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                  <GraduationCap size={14} />
                  <span>Evidence-Based</span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
                <div>
                  <span className="font-bold text-slate-900">Created by:</span> The BestKidBooks Early Literacy Curriculum Team
                </div>
                <div>
                  <span className="font-bold text-slate-900">Pedagogical Framework:</span> Aligned with Science of Reading principles, Dialogic Reading methodology, and American Academy of Pediatrics (AAP) early literacy benchmarks.
                </div>
                <div>
                  <span className="font-bold text-slate-900">Last Updated:</span> October 2026
                </div>
                <div>
                  <span className="font-bold text-slate-900">Format:</span> High-Resolution Printable PDF (100% Free, No Signup Required)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: FREQUENTLY ASKED QUESTIONS (AEO & Schema Ready) ── */}
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
                Everything you need to know about tracking, counting, and celebrating with the Explorer Log.
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
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 p-8 md:p-14 text-white shadow-2xl shadow-teal-900/20 text-center">
              {/* Decorative background glow */}
              <div className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />

              <div className="relative max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-teal-200 backdrop-blur-md">
                  <Award size={14} /> Ready for Story Expedition?
                </span>

                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  Start Your 100-Book Adventure Tonight
                </h2>

                <p className="mt-4 text-base leading-relaxed text-teal-100 md:text-lg">
                  Download the complete printable PDF now. Free instant access—no email required, no subscriptions, and ready to print right from your home or classroom printer.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                  <a
                    id="final-download-cta"
                    href={PDF_DOWNLOAD_URL}
                    download="100-Book-Milestone-Explorer-Log.pdf"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-amber-400 px-8 py-4 font-display text-base font-extrabold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:bg-amber-300 hover:scale-105 active:scale-[0.98]"
                  >
                    <Download size={20} className="stroke-[2.5]" />
                    <span>Download Free Printable PDF (12 Pages)</span>
                  </a>

                  <a
                    id="final-print-cta"
                    href={HTML_VIEWER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 px-6 py-4 font-display text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50"
                  >
                    <Printer size={18} />
                    <span>Print Directly in Browser</span>
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-teal-200">
                  <span>★ 100 Passport Stamps</span>
                  <span>★ 5 Milestone Badges</span>
                  <span>★ Smiling Bear Ratings</span>
                  <span>★ Official Certificate Included</span>
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
