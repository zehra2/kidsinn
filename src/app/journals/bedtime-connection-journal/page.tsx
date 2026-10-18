"use client";

import Link from "next/link";
import { Nav, Footer } from "@/components/ui";
import {
  Download,
  ArrowLeft,
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  Moon,
  Heart,
  Star,
  Sparkles,
  Clock,
  Shield,
  Users,
  BookMarked,
} from "lucide-react";
import { useState } from "react";

const DL = "/api/journal-pdf";

/* ─── FAQ DATA ─── */
const FAQ_ITEMS = [
  {
    q: "Is it really free?",
    a: "Yes. The full journal — 20+ pages, 60 connection questions — is a free instant download. No email required.",
  },
  {
    q: "What ages is it for?",
    a: "Ages 3–7, with specific question strategies for 3–4 and 5–7. Many parents of 2-year-olds and 8-year-olds use it too — just adapt.",
  },
  {
    q: "My child gives one-word answers. Is it working?",
    a: "Yes. One-word answers are wins at this age. The Rescue Phrases page exists exactly for the shrug nights — and there's a section on turning one word into a great entry.",
  },
  {
    q: "We don't read every night. Can we still use this?",
    a: 'Absolutely. There\'s a whole "No Book Tonight?" page with pure connection questions. And the journal is designed to be picked up after being dropped — no streaks, no guilt.',
  },
  {
    q: "Do I need to print it?",
    a: "One entry page gets printed per night (or per week). Everything else — the Question Bank — lives happily on your phone or nightstand as a PDF.",
  },
  {
    q: "Can I use it with multiple kids?",
    a: "Yes — let each child have their own entry line, or print the entry page twice. Their different answers to the same question become a family favourite.",
  },
  {
    q: "Is this a reading log?",
    a: "No — and that's deliberate. Reading logs test memory. This journal builds connection. Kids feel the difference immediately.",
  },
  {
    q: "Who is this NOT for?",
    a: 'Parents expecting a curriculum, comprehension worksheets, or a "level up" reading program. This is about the 5 minutes after the book — the part your child will remember when they\'re 30.',
  },
];

function FaqItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border-2 border-ink/15 bg-paper transition-all ${open ? "border-orange/60 shadow-md" : "hover:border-ink/30"}`}>
      <button
        id={`faq-btn-${idx}`}
        aria-expanded={open}
        aria-controls={`faq-panel-${idx}`}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-[16px] font-extrabold text-ink">{q}</span>
        {open ? <ChevronUp size={18} className="shrink-0 text-orange" /> : <ChevronDown size={18} className="shrink-0 text-ink/50" />}
      </button>
      {open && (
        <div id={`faq-panel-${idx}`} role="region" className="border-t border-dashed border-ink/15 px-6 pb-5 pt-4 text-[15px] leading-relaxed text-ink/80">
          {a}
        </div>
      )}
    </div>
  );
}

export default function BedtimeConnectionJournalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://bestkidbooks.online" },
                  { "@type": "ListItem", position: 2, name: "Reading Journals", item: "https://bestkidbooks.online/journals" },
                  { "@type": "ListItem", position: 3, name: "The Bedtime Connection Journal", item: "https://bestkidbooks.online/journals/bedtime-connection-journal" },
                ],
              },
              {
                "@type": "CreativeWork",
                "@id": "https://bestkidbooks.online/journals/bedtime-connection-journal#journal",
                name: "The Bedtime Connection Journal",
                headline: "A 5-minute memory keeper for tired parents and curious kids",
                description: "A free printable bedtime journal for kids ages 3–7. Ask one connection question after storytime, capture your child's exact words, and build a keepsake in 5 minutes a night. No prep needed.",
                educationalLevel: "Ages 3–7",
                genre: "Family Literacy & Emotional Connection",
                inLanguage: "en",
                isAccessibleForFree: true,
                keywords: "bedtime journal for kids, printable kids journal, reading journal ages 3-7, kids conversation starters, parent child journal, memory keeper journal",
                provider: { "@type": "Organization", name: "BEST KidSbooks Shop", url: "https://bestkidbooks.online" },
              },
              {
                "@type": "FAQPage",
                mainEntity: FAQ_ITEMS.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: { "@type": "Answer", text: item.a },
                })),
              },
              {
                "@type": "HowTo",
                name: "The 5-Minute Bedtime Ritual",
                description: "How to use The Bedtime Connection Journal after storytime",
                step: [
                  { "@type": "HowToStep", name: "Read", text: "Any book. Old favourite, new library find, or the same dinosaur book for the 47th night in a row." },
                  { "@type": "HowToStep", name: "Connect", text: "Ask ONE question from the Question Bank that matches the story's heart." },
                  { "@type": "HowToStep", name: "Record", text: "Write their answer in their exact words. Even the silly ones." },
                  { "@type": "HowToStep", name: "Snuggle", text: "Close the journal. Tuck them in. You're done." },
                ],
              },
            ],
          }),
        }}
      />

      <Nav />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden border-b-[3px] border-ink" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e2d4a 50%, #162040 100%)" }}>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[
            { top: "8%", left: "5%", size: 6, opacity: 0.6 },
            { top: "15%", left: "18%", size: 4, opacity: 0.4 },
            { top: "25%", right: "8%", size: 8, opacity: 0.5 },
            { top: "40%", right: "20%", size: 5, opacity: 0.3 },
            { top: "60%", left: "8%", size: 7, opacity: 0.4 },
            { top: "75%", right: "5%", size: 4, opacity: 0.6 },
            { top: "85%", left: "30%", size: 6, opacity: 0.3 },
          ].map((s, i) => (
            <div key={i} className="absolute rounded-full bg-amber-200" style={{ width: s.size, height: s.size, top: s.top, left: (s as { left?: string }).left, right: (s as { right?: string }).right, opacity: s.opacity }} />
          ))}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-10" style={{ background: "#f59e0b" }} />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full opacity-10" style={{ background: "#5b8def" }} />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-4 py-16 md:px-8 md:py-24">
          <Link href="/journals" className="mb-6 inline-flex items-center gap-2 text-[13px] font-bold text-amber-200/70 transition-colors hover:text-amber-200">
            <ArrowLeft size={14} />
            Back to All Reading Journals
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/15 px-3 py-1 text-[12px] font-extrabold text-amber-300">⭐ Parent Favourite</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-[12px] font-bold text-blue-300">Ages 3–7</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 text-[12px] font-bold text-green-300">✓ Free Instant Download</span>
              </div>

              <h1 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[1.05] text-white">
                The Bedtime Connection Journal
              </h1>
              <p className="mt-4 text-[20px] font-semibold leading-snug text-amber-200">
                A 5-minute memory keeper for tired parents and curious kids.
              </p>
              <p className="mt-4 max-w-[600px] text-[16.5px] leading-relaxed text-white/75">
                Instead of asking{" "}<em className="italic text-white/50">"What was the story about?"</em>{" "}
                — the question that gets you a one-word answer — this journal asks questions that connect the book's heart to your child's real day.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a id="hero-download-cta" href={DL} className="inline-flex items-center gap-2.5 rounded-full border-2 border-amber-400 bg-amber-400 px-7 py-3.5 font-display text-[15.5px] font-extrabold text-ink shadow-[4px_4px_0px_0px_rgba(251,191,36,0.4)] transition-all hover:bg-amber-300 hover:shadow-[6px_6px_0px_0px_rgba(251,191,36,0.3)]">
                  <Download size={18} />
                  Download the Free Journal (PDF)
                </a>
                <a href="#whats-inside" className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-6 py-3.5 font-display text-[15px] font-bold text-white transition-all hover:bg-white/20">
                  <BookOpen size={16} />
                  Preview Contents
                </a>
              </div>

              <p className="mt-3 flex items-center gap-1.5 text-[12.5px] text-white/45">
                <Shield size={13} className="text-green-400" />
                Instant PDF download · No email required · 22 pages · 60 connection questions
              </p>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl">
                <img src="/images/bedtime-journal-mockup.jpg" alt="Bedtime journal nightly entry page with connection questions for kids ages 3-7" className="w-full object-cover" />
                <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.4) 0%, transparent 50%)" }} />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl border-2 border-ink bg-amber-400 px-4 py-2.5 shadow-lg">
                <div className="font-display text-[13px] font-extrabold text-ink">🌙 5 minutes · Zero prep</div>
                <div className="text-[11px] font-bold text-ink/70">Used by parents in 40+ countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="border-b-[3px] border-ink bg-paper py-5">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] font-bold text-ink/60">
            {[
              { icon: "📖", text: "Works with any book" },
              { icon: "⏱️", text: "5 minutes or less" },
              { icon: "📄", text: "22-page printable PDF" },
              { icon: "💛", text: "No streaks, no guilt" },
              { icon: "🔬", text: "Research-backed (dialogic reading)" },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-1.5"><span>{item.icon}</span>{item.text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="border-b-[3px] border-ink bg-cream py-16">
        <div className="mx-auto max-w-[900px] px-4 md:px-8">
          <div className="mb-2 text-center">
            <span className="mono-label inline-block rounded-full bg-ink/10 px-3 py-1 text-[11px] font-black uppercase text-ink/60">Sound familiar?</span>
          </div>
          <h2 className="mt-3 text-center text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">The one-word answer problem.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-ink/15 bg-paper p-6">
              <div className="mb-3 font-display text-[13px] font-black uppercase tracking-widest text-ink/40">The usual bedtime</div>
              <div className="space-y-3">
                <div className="rounded-xl bg-ink/5 px-4 py-3 font-display text-[16px] font-bold text-ink">"What was the story about?"</div>
                <div className="text-center text-[13px] text-ink/40">↓</div>
                <div className="rounded-xl border-2 border-dashed border-ink/20 px-4 py-3 font-display text-[16px] font-bold italic text-ink/50">"A bear."</div>
                <p className="text-[13px] text-ink/60">And that's it. That's the whole conversation.</p>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-orange/30 bg-amber-50 p-6">
              <div className="mb-3 font-display text-[13px] font-black uppercase tracking-widest text-orange/70">The real problem</div>
              <p className="text-[15px] leading-relaxed text-ink/80"><strong>"What was the story about?"</strong> is a test question — and kids, even tiny ones, can smell a test.</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/80">The funny logic, the worries they can't name yet, the way they saw the whole world today — stays locked inside a sleepy little head.</p>
              <p className="mt-3 rounded-xl bg-orange/10 px-4 py-3 font-display text-[15px] font-extrabold text-ink">💬 Those words disappear. Unless someone writes them down.</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border-2 border-ink/10 bg-paper p-6 text-center">
            <p className="text-[16px] leading-relaxed text-ink/75">The way your 4-year-old talks right now? In three years, it's gone. You'll remember loving them, but not the <em>exact words</em>.</p>
            <p className="mt-3 font-display text-[20px] font-extrabold text-ink">Unless someone writes them down.</p>
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="border-b-[3px] border-ink bg-paper py-16">
        <div className="mx-auto max-w-[900px] px-4 md:px-8">
          <div className="mb-2 text-center">
            <span className="mono-label inline-block rounded-full bg-blue/10 px-3 py-1 text-[11px] font-black uppercase text-blue">The Research-Backed Fix</span>
          </div>
          <h2 className="mt-3 text-center text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">There's a better question.</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-center text-[16px] leading-relaxed text-ink/70">
            Reading researchers call it <strong>"distancing"</strong> — questions that bridge the story world to your child's real life. By 7:45 PM, who has the brainpower to invent questions?
          </p>
          <p className="mt-2 text-center font-display text-[20px] font-extrabold text-ink">So we invented them for you.</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { story: "The bear was scared of the dark.", question: '"Are you ever a little scared of the dark?"', color: "bg-blue/10 border-blue/30", qColor: "text-blue" },
              { story: "The rabbit shared her carrots.", question: '"Who was kind to you today?"', color: "bg-mint/20 border-mint/40", qColor: "text-green-700" },
              { story: "The character was brave.", question: '"Were you brave today — even a tiny bit?"', color: "bg-amber-50 border-amber-300/50", qColor: "text-amber-700" },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl border-2 p-5 ${item.color}`}>
                <p className="text-[13px] italic text-ink/60">{item.story}</p>
                <p className={`mt-2 font-display text-[15px] font-extrabold ${item.qColor}`}>{item.question}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-2 border-orange/30 bg-amber-50 p-7 text-center">
            <p className="text-[16px] text-ink/75">Same story. Same five minutes. Completely different answer.</p>
            <p className="mt-3 font-display text-[22px] font-extrabold text-ink">When you write that answer down — in their exact little-kid words — you're not keeping a reading log anymore.</p>
            <p className="mt-2 font-display text-[24px] font-extrabold text-orange">You're keeping a time capsule.</p>
          </div>
        </div>
      </section>

      {/* ─── LIVE JOURNAL SAMPLE ─── */}
      <section className="border-b-[3px] border-ink bg-white py-16">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="mb-2 text-center">
            <span className="mono-label inline-block rounded-full bg-blue/15 px-3.5 py-1 text-[11px] font-black uppercase text-blue">
              Live Journal Sample
            </span>
          </div>
          <h2 className="mt-3 text-center text-[clamp(1.8rem,4vw,2.8rem)] leading-tight text-ink">
            The Bedtime Connection Journal
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-center text-[16px] text-ink/75">
            See exactly how 5 minutes of guided questions transforms nightly storytime into a lifelong memory.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Why Families Love It */}
            <div className="rounded-3xl border-[2.5px] border-ink bg-[#FFFDF9] p-7 md:p-9 shadow-[4px_4px_0px_0px_#181a20]">
              <div className="flex items-center gap-3 border-b-2 border-dashed border-ink/15 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange text-cream font-bold text-lg">
                  ❤️
                </div>
                <div>
                  <span className="mono-label text-[11px] font-black uppercase text-orange">
                    Family Favorite
                  </span>
                  <h3 className="font-display text-[22px] font-extrabold text-ink">
                    Why Families Love It:
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {[
                  "Guided after-reading prompts that spark real conversations",
                  "Space for a child's doodle or favorite character rating",
                  "Creates a cherished family keepsake of their early years",
                  "Zero prep — takes just 3 to 5 minutes before lights out",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-ink/85">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-2xl border border-blue/30 bg-blue/5 p-4 text-[13.5px] leading-relaxed text-blue-950">
                <strong>💡 Pediatric Research Note:</strong> Harvard Center on the Developing Child shows that &ldquo;serve-and-return&rdquo; conversation loops before sleep dramatically reduce evening cortisol and foster secure attachment.
              </div>
            </div>

            {/* Sample After-Story Questions Inside */}
            <div className="rounded-3xl border-[2.5px] border-ink bg-amber-50/50 p-7 md:p-9 shadow-[4px_4px_0px_0px_#181a20]">
              <div className="flex items-center gap-3 border-b-2 border-dashed border-ink/15 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue text-cream font-bold text-lg">
                  💬
                </div>
                <div>
                  <span className="mono-label text-[11px] font-black uppercase text-blue">
                    Question Bank Spotlight
                  </span>
                  <h3 className="font-display text-[22px] font-extrabold text-ink">
                    Sample After-Story Questions Inside:
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3.5">
                {[
                  { q: "“If you could jump into the book tonight, which page would you sleep on?”", tag: "Imagination & Wonder" },
                  { q: "“What was the bravest thing anyone did in tonight's story?”", tag: "Courage & Character" },
                  { q: "“Did anyone in the story feel like you felt earlier today?”", tag: "Emotional Mirror" },
                  { q: "“If we could invite one character to breakfast tomorrow, who would you pick?”", tag: "Connection & Humor" },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border-2 border-ink/15 bg-white p-4 shadow-xs transition hover:border-orange hover:shadow-md">
                    <span className="mono-label rounded-full bg-cream border border-ink/15 px-2 py-0.5 text-[10px] font-bold text-ink/60 uppercase">
                      {item.tag}
                    </span>
                    <p className="mt-2 font-display text-[15.5px] font-bold text-ink leading-snug">
                      {item.q}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="border-b-[3px] border-ink bg-cream py-16">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="mb-2 text-center">
            <span className="mono-label inline-block rounded-full bg-ink/10 px-3 py-1 text-[11px] font-black uppercase text-ink/60">Simple by Design</span>
          </div>
          <h2 className="mt-3 text-center text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">The 5-Minute Bedtime Ritual</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "📖", step: "Step 1", title: "Read", desc: "Any book. Old favourite, new library find, the same dinosaur book for the 47th night in a row. It doesn't matter.", color: "bg-blue/10" },
              { emoji: "💬", step: "Step 2", title: "Connect", desc: "Ask ONE question from the Question Bank that matches the story's heart. Brave story? Ask a bravery question. That's the only decision you make all night.", color: "bg-amber-50" },
              { emoji: "✏️", step: "Step 3", title: "Record", desc: "Write their answer in their exact words. Even the silly ones. Especially the silly ones.", color: "bg-pink-50" },
              { emoji: "😴", step: "Step 4", title: "Snuggle", desc: "Close the journal. Tuck them in. You're done. No crafts. No prep. No guilt.", color: "bg-green-50" },
            ].map((step, i) => (
              <div key={i} className={`chunky-sm rounded-2xl border-2 border-ink/10 p-6 ${step.color}`}>
                <div className="mb-3 text-3xl">{step.emoji}</div>
                <span className="mono-label text-[10px] font-black uppercase text-ink/40">{step.step}</span>
                <h3 className="mt-1 font-display text-[20px] font-extrabold text-ink">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/70">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-[15px] italic text-ink/60">Missed a week? The journal waits for you. That's the whole point.</p>

          <div className="mt-8 flex justify-center">
            <a id="howitworks-download-cta" href={DL} className="inline-flex items-center gap-2.5 rounded-full border-2 border-ink bg-orange px-7 py-3.5 font-display text-[15.5px] font-extrabold text-cream shadow-[4px_4px_0px_0px_#181a20] transition-all hover:bg-honey hover:text-ink">
              <Download size={18} />
              Download the Free Journal (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INSIDE ─── */}
      <section id="whats-inside" className="border-b-[3px] border-ink bg-paper py-16">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="mb-2 text-center">
            <span className="mono-label inline-block rounded-full bg-orange/15 px-3 py-1 text-[11px] font-black uppercase text-orange">22 Pages Inside</span>
          </div>
          <h2 className="mt-3 text-center text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">What's inside the journal</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "🌙", title: "The Nightly Entry Page", sub: "Print as many as you like", desc: "Book title, story's heart, one question, their exact words, and a heart rating. Fits on one page. Takes 5 minutes." },
              { emoji: "💬", title: "60 Connection Questions", sub: "10 themed question sets", desc: "Brave Hearts, Big Feelings, Worry Wranglers, Kind Hands, Dream Builders, and more. Match the question to the story, or pick what your child needs tonight." },
              { emoji: "🎂", title: "Question Picker by Age", sub: "Ages 3–4 & 5–7", desc: "Simplified strategies for ages 3–4 (choices, pointing, one-word wins) and deeper dives for ages 5–7 (follow-ups, trading questions)." },
              { emoji: "🆘", title: '"I Don\'t Know" Rescue Phrases', sub: "For shrug-and-yawn nights", desc: "Six tested responses for the shrug-and-yawn nights — including the one that opens the funniest doors." },
              { emoji: "📖", title: "No Book Tonight? Questions", sub: "5 pure-connection questions", desc: "Late night? Five pure-connection questions that need no story at all." },
              { emoji: "💛", title: "The Little Words Library", sub: "Keep-forever page", desc: "A keep-forever page for the accidentally brilliant things kids say. Date, age, exact words. No grammar corrections allowed." },
              { emoji: "📸", title: "Sunday Snapshot", sub: "3-minute weekly wrap-up", desc: "Book of the week, funniest quote, what you learned about each other. Optional, 3 minutes." },
              { emoji: "⭐", title: "30 Nights Tracker", sub: "Moon tracker", desc: "Colour in a moon each night you connect — with gaps, because gaps are fine." },
            ].map((feature, i) => (
              <div key={i} className="rounded-2xl border-2 border-ink/10 bg-cream p-5 transition-transform hover:-translate-y-0.5">
                <div className="mb-2 text-2xl">{feature.emoji}</div>
                <h3 className="font-display text-[15px] font-extrabold text-ink">{feature.title}</h3>
                <span className="text-[11.5px] font-bold text-blue">{feature.sub}</span>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/65">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KEEPSAKE ─── */}
      <section className="border-b-[3px] border-ink py-20" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1a2744 60%, #0f172a 100%)" }}>
        <div className="mx-auto max-w-[800px] px-4 text-center md:px-8">
          <Moon size={40} className="mx-auto mb-6 text-amber-300" />
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.6rem)] font-extrabold leading-tight text-white">
            One day, this little book is the only place their voice still lives.
          </h2>
          <div className="mx-auto mt-8 max-w-[640px] space-y-4 text-[17px] leading-relaxed text-white/75">
            <p>Bedtime journals usually ask about reading.</p>
            <p>This one asks about <em className="text-amber-300">them</em>.</p>
            <p>In three years, this becomes the only place on earth where your child's five-year-old voice still exists — the funny logic, the giant feelings, the moon that they swore followed your car home.</p>
          </div>
          <blockquote className="mx-auto mt-8 max-w-[580px] rounded-2xl border border-amber-400/20 bg-white/5 px-8 py-6 text-[18px] font-display font-bold italic leading-relaxed text-amber-200">
            "My daughter told me the moon follows our car because it's 'keeping us company.' I wrote it down that night. I've read that page eleven times since."
            <footer className="mt-3 text-[14px] font-normal not-italic text-white/50">— Sarah, mum of a 4-year-old</footer>
          </blockquote>
          <p className="mt-8 font-display text-[24px] font-extrabold text-amber-300">Ask the question. Write it down. Tuck them in.</p>

          <div className="mt-8">
            <a id="keepsake-download-cta" href={DL} className="inline-flex items-center gap-2.5 rounded-full border-2 border-amber-400 bg-amber-400 px-8 py-4 font-display text-[16px] font-extrabold text-ink shadow-[4px_4px_0px_0px_rgba(251,191,36,0.4)] transition-all hover:bg-amber-300">
              <Download size={18} />
              Get The Bedtime Connection Journal — Free PDF
            </a>
            <p className="mt-3 text-[12px] text-white/40">Instant download · No email required · Works with any book</p>
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─── */}
      <section className="border-b-[3px] border-ink bg-cream py-16">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mono-label inline-block rounded-full bg-ink/10 px-3 py-1 text-[11px] font-black uppercase text-ink/60">Who It's For</span>
              <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] leading-tight">Made for real parents, not perfect ones.</h2>
              <ul className="mt-6 space-y-3">
                {[
                  "You're exhausted by 7 PM but still want bedtime to mean something",
                  "You read to your child and wonder if it's landing",
                  "You want screen-free bedtime activities that take minutes, not planning",
                  "You have an anxious little one who needs gentle words before sleep",
                  "You love the funny things they say and can never remember them later",
                  "Grandparents, babysitters, and older siblings can use it too — no training needed",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-ink/80">
                    <Check size={18} className="mt-0.5 shrink-0 stroke-[2.5] text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl border-2 border-orange/30 bg-amber-50 p-5">
                <p className="flex items-start gap-2.5 text-[15px] text-ink/80">
                  <Check size={18} className="mt-0.5 shrink-0 stroke-[2.5] text-orange" />
                  <span><strong>And especially:</strong> You've tried complicated journals and abandoned them by week two. <em>This one is designed to be abandoned and picked back up without guilt.</em></span>
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-ink/10 shadow-xl">
              <img src="/images/parent-child-reading.jpg" alt="Parent and child reading bedtime story with connection journal on nightstand" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="border-b-[3px] border-ink bg-paper py-16">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="mb-2 text-center">
            <span className="mono-label inline-block rounded-full bg-pink-100 px-3 py-1 text-[11px] font-black uppercase text-pink-600">What Parents Say</span>
          </div>
          <h2 className="mt-3 text-center text-[clamp(1.6rem,3.5vw,2.4rem)] leading-tight">Real families. Real moments.</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { quote: "My daughter told me the moon follows our car because it's 'keeping us company.' I wrote it down that night. I've read that page eleven times since.", name: "Sarah", detail: "Mum of a 4-year-old · United Kingdom", stars: 5 },
              { quote: "My son has bedtime anxiety, and the Worry Wranglers questions have become our nightly ritual. Two minutes and he's calm. Nothing else worked like this.", name: "Jamie", detail: "Parent of a 6-year-old · United States", stars: 5 },
              { quote: "I bought three — one for us, two for grandparent gifts. The Little Words Library page made my mother-in-law cry. It's the most meaningful gift I've ever given.", name: "Priya", detail: "Parent of twins, age 5 · Australia", stars: 5 },
            ].map((t, i) => (
              <article key={i} className="chunky-sm rounded-2xl bg-cream p-6">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-[15px] italic leading-relaxed text-ink/85">"{t.quote}"</blockquote>
                <footer className="mt-4 border-t border-dashed border-ink/15 pt-3">
                  <div className="font-display text-[14px] font-extrabold text-ink">{t.name}</div>
                  <div className="text-[12px] text-ink/50">{t.detail}</div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── E-E-A-T ─── */}
      <section className="border-b-[3px] border-ink bg-cream py-14">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="mb-6 text-center">
            <span className="mono-label inline-block rounded-full bg-blue/10 px-3 py-1 text-[11px] font-black uppercase text-blue">Research-Backed</span>
            <h2 className="mt-2 text-[clamp(1.5rem,3vw,2.2rem)] leading-tight">Why connection questions work</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { org: "Whitehurst Dialogic Reading Research", finding: '"Distancing" questions — bridging story to real life — are the single most powerful reading-aloud technique for language development in children ages 2–7.', IconEl: BookOpen, color: "text-blue" },
              { org: "Harvard Center on the Developing Child", finding: "Serve-and-return conversations at bedtime lower cortisol levels and dramatically improve emotional co-regulation in children under 7.", IconEl: Heart, color: "text-pink-500" },
              { org: "National Literacy Trust (UK)", finding: "Children who maintain a daily reading routine are 3× more likely to have above-average mental wellbeing and significantly higher vocabulary confidence by age 8.", IconEl: Sparkles, color: "text-amber-500" },
            ].map((item, i) => (
              <div key={i} className="chunky-sm rounded-2xl bg-paper p-6">
                <item.IconEl size={24} className={`mb-3 ${item.color}`} />
                <h3 className="font-display text-[14px] font-extrabold text-ink">{item.org}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/70">{item.finding}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="border-b-[3px] border-ink bg-paper py-16">
        <div className="mx-auto max-w-[800px] px-4 md:px-8">
          <div className="mb-2 text-center">
            <span className="mono-label inline-block rounded-full bg-ink/10 px-3 py-1 text-[11px] font-black uppercase text-ink/60">FAQ</span>
          </div>
          <h2 className="mt-3 text-center text-[clamp(1.8rem,4vw,2.6rem)] leading-tight">Frequently asked questions</h2>
          <div className="mt-8 space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <FaqItem key={idx} q={item.q} a={item.a} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="border-b-[3px] border-ink bg-cream py-20">
        <div className="mx-auto max-w-[720px] px-4 text-center md:px-8">
          <Moon size={36} className="mx-auto mb-5 text-amber-400" />
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">Download it tonight. Use it tonight.</h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] leading-relaxed text-ink/70">
            The journal is ready. The questions are waiting. Tonight's story is already on the shelf.
          </p>

          <div className="mt-8">
            <a id="final-download-cta" href={DL} className="inline-flex items-center gap-2.5 rounded-full border-2 border-ink bg-orange px-8 py-4 font-display text-[17px] font-extrabold text-cream shadow-[5px_5px_0px_0px_#181a20] transition-all hover:bg-honey hover:text-ink hover:shadow-[7px_7px_0px_0px_#181a20]">
              <Download size={20} />
              Get The Bedtime Connection Journal — Free PDF
            </a>
          </div>

          <p className="mt-4 text-[13px] text-ink/45">
            Instant PDF download · 22 pages · 60 connection questions · Made for tired parents, ages 3–7 kids, and 5 quiet minutes
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-[13px] text-ink/50">
            <span className="flex items-center gap-1.5"><Shield size={13} className="text-green-600" />No email required</span>
            <span className="flex items-center gap-1.5"><Clock size={13} className="text-blue" />Instant download</span>
            <span className="flex items-center gap-1.5"><Users size={13} className="text-orange" />Used globally — US, UK, AU &amp; more</span>
          </div>
        </div>
      </section>

      {/* ─── RELATED ─── */}
      <section className="border-b-[3px] border-ink bg-paper py-14">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="mb-6 text-center">
            <span className="mono-label inline-block rounded-full bg-ink/10 px-3 py-1 text-[11px] font-black uppercase text-ink/60">More Keepsake Journals</span>
            <h2 className="mt-2 text-[clamp(1.5rem,3vw,2.2rem)] leading-tight">Explore Other Reading Journals</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "100-book-explorer-log", title: "100-Book Milestone Explorer Log", age: "Ages 4–9", dot: "bg-amber-400" },
              { id: "feelings-character-journal", title: "Feelings & Friendships Journal", age: "Ages 5–10", dot: "bg-pink-300" },
              { id: "tiny-triumphs-habit-diary", title: "Tiny Triumphs 30-Day Habit Diary", age: "Ages 3–8", dot: "bg-green-400" },
            ].map((j) => (
              <Link key={j.id} href={`/journals/${j.id}`} className="chunky-sm flex items-center gap-3 rounded-2xl bg-cream px-5 py-4 transition-all hover:-translate-y-0.5">
                <span className={`inline-block h-3 w-3 rounded-full ${j.dot}`} />
                <div>
                  <div className="font-display text-[14px] font-extrabold text-ink">{j.title}</div>
                  <div className="text-[12px] text-ink/50">{j.age}</div>
                </div>
                <span className="text-orange">→</span>
              </Link>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link href="/journals" className="inline-flex items-center gap-2 font-display text-[14px] font-bold text-blue hover:underline">
              <BookMarked size={15} />
              View all 4 Signature Journals
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
