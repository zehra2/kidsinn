"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav, Footer, SectionHead, Sticker, Wave, JoinForm } from "@/components/ui";
import { JOURNALS, type JournalItem } from "@/lib/consolidated-data";
import {
  BookMarked,
  Heart,
  Star,
  Download,
  Sparkles,
  Check,
  Brain,
  Smile,
  BookOpen,
  ArrowRight,
  Printer,
} from "lucide-react";

export default function JournalsPage() {
  const [activeJournal, setActiveJournal] = useState<JournalItem>(JOURNALS[0]);

  return (
    <>
      <Nav />

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-cream pt-10 pb-14 border-b-[3px] border-ink">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-60"
          style={{ background: "#5b8def" }}
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full opacity-50"
          style={{ background: "#ffc531" }}
        />

        <div className="relative mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-1 text-[12.5px] font-extrabold text-ink shadow-[2px_2px_0px_0px_#181a20]">
              <img src="/images/reading-bear.png" alt="BEST KidSbooks Reading Bear Mascot" className="h-5 w-5 object-contain" />
              <span>BEST KidSbooks Shop</span>
            </span>
            <span className="mono-label chunky-sm inline-block -rotate-1 rounded-full bg-blue text-cream px-3 py-1">
              Family Reading Journals
            </span>
            <span className="mono-label rounded-full border-2 border-ink/20 bg-paper px-2.5 py-1 text-[11px] text-ink/60">
              Connection Over Scorekeeping
            </span>
          </div>

          <div className="mt-5 max-w-[820px]">
            <h1 className="text-[clamp(2.5rem,6.5vw,4.8rem)] leading-[1.02]">
              Turn bedtime stories into
              <br />
              <span className="text-orange">lifelong memories.</span>
            </h1>
            <p className="mt-4 text-[18px] leading-relaxed text-ink/85">
              Reading journals that don’t feel like homework. Prompts that invite giggles, drawings, and feelings reflections—helping children remember not just what they read, but how loved they felt reading it.
            </p>

            <div className="mt-7 flex flex-wrap gap-4 items-center">
              <a href="#journals-list" className="btn bg-orange text-cream">
                <BookMarked size={16} />
                Explore 4 Signature Journals
              </a>
              <Link href="/printables#kit" className="btn bg-paper">
                <Download size={16} />
                Download Free Journal Sample
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── WHY JOURNALING MATTERS (E-E-A-T SCIENCE) ───────────── */}
      <section className="py-12 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="chunky-sm rounded-2xl bg-cream p-5">
              <Brain className="text-blue mb-2" size={28} />
              <h3 className="font-display text-[19px] font-extrabold text-ink">
                +42% Vocabulary Retention
              </h3>
              <p className="mt-1.5 text-[14px] text-ink/75 leading-relaxed">
                Reflecting on just one word or character trait after reading cements narrative memory far better than passive re-reading.
              </p>
            </div>

            <div className="chunky-sm rounded-2xl bg-cream p-5">
              <Heart className="text-orange mb-2" size={28} />
              <h3 className="font-display text-[19px] font-extrabold text-ink">
                Social-Emotional Vocabulary
              </h3>
              <p className="mt-1.5 text-[14px] text-ink/75 leading-relaxed">
                When a child names a character’s feelings (“Whale was scared of the tide”), they develop the language to express their own inner life.
              </p>
            </div>

            <div className="chunky-sm rounded-2xl bg-cream p-5">
              <Smile className="text-mint mb-2" size={28} />
              <h3 className="font-display text-[19px] font-extrabold text-ink">
                Zero School Pressure
              </h3>
              <p className="mt-1.5 text-[14px] text-ink/75 leading-relaxed">
                Our journals use doodles, smiling bear stickers, and playful questions instead of testing comprehension or grading handwriting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── THE 4 SIGNATURE JOURNALS ───────────── */}
      <section id="journals-list" className="py-14 bg-cream border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Signature Keepsakes"
            title="Choose the Right Journal for Your Child"
            sub="Each journal is engineered for a specific developmental age and family routine. Tap each journal to preview sample page prompts."
          />

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Journal selector cards */}
            <div className="space-y-4">
              {JOURNALS.map((j) => {
                const isSelected = activeJournal.id === j.id;
                return (
                  <article
                    key={j.id}
                    onClick={() => setActiveJournal(j)}
                    className={`chunky cursor-pointer rounded-3xl p-6 transition-all ${
                      isSelected ? "border-[3.5px] border-orange bg-paper shadow-2xl scale-[1.01]" : "bg-paper/70 hover:bg-paper"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`mono-label rounded-full border-2 border-ink px-2.5 py-0.5 text-[10px] font-extrabold ${j.color}`}>
                        {j.tag}
                      </span>
                      <span className="mono-label text-[11px] font-bold text-ink/60">
                        {j.age}
                      </span>
                    </div>

                    <h3 className="mt-2.5 font-display text-[24px] font-extrabold leading-tight text-ink">
                      {j.title}
                    </h3>
                    <p className="text-[14px] font-semibold text-blue mt-0.5">
                      {j.subtitle}
                    </p>
                    <p className="mt-2 text-[14.5px] text-ink/75 leading-relaxed">
                      {j.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t-2 border-dashed border-ink/20 pt-3">
                      <Link
                        href={`/journals/${j.id}`}
                        className="text-[13.5px] font-extrabold text-orange hover:underline flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Read Full Guide & Preview →
                      </Link>
                      <a
                        href={j.downloadUrl}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="btn chunky-sm bg-paper text-ink text-[12px] py-1.5 px-3 hover:bg-honey"
                      >
                        <Download size={13} />
                        Download
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Interactive Preview Panel */}
            <div className="sticky top-28 self-start">
              <div className="chunky rounded-3xl bg-paper p-6 md:p-8">
                <div className="flex items-center justify-between border-b-2 border-dashed border-ink/20 pb-4">
                  <div>
                    <span className="mono-label text-[11px] text-blue font-extrabold uppercase">
                      Live Journal Sample
                    </span>
                    <h3 className="text-[26px] mt-1">{activeJournal.title}</h3>
                  </div>
                  <BookMarked className="text-orange" size={32} />
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <h4 className="mono-label text-[11px] text-ink/60 uppercase font-black">
                      Why Families Love It:
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {activeJournal.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[14px] text-ink/80">
                          <Check size={16} className="text-mint shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border-2 border-ink bg-cream p-4">
                    <h4 className="mono-label text-[11px] text-orange uppercase font-black">
                      Sample After-Story Questions Inside:
                    </h4>
                    <div className="mt-2 space-y-2">
                      {activeJournal.samplePrompts.map((p, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-ink/20 bg-paper p-3 text-[14.5px] text-ink story"
                        >
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <Link
                        href={`/journals/${activeJournal.id}`}
                        className="btn flex-1 justify-center bg-cream text-ink text-[14.5px]"
                      >
                        <BookOpen size={16} />
                        Read & Inspect
                      </Link>
                      <a
                        href={activeJournal.downloadUrl}
                        download
                        className="btn flex-1 justify-center bg-orange text-cream text-[14.5px]"
                      >
                        <Download size={16} />
                        Download PDF/SVG
                      </a>
                    </div>
                    <p className="text-center text-[11.5px] text-ink/60">
                      Standard letter size · Vector asset ready to print
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 100-BOOK CHALLENGE CALLOUT ───────────── */}
      <section id="100books" className="py-14 bg-honey/25 border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8 text-center">
          <div className="max-w-[780px] mx-auto">
            <span className="mono-label chunky-sm inline-block rounded-full bg-honey px-3 py-1 text-ink">
              Milestone Wall Chart
            </span>
            <h2 className="mt-3 text-[34px] md:text-[44px] leading-tight">
              Take the 100-Book Family Challenge
            </h2>
            <p className="mt-3 text-[17px] text-ink/80">
              Download the free 100-Book Wall Chart. Hang it on your child’s bedroom wall and color in an apple or star for every story read together. Rereads count too!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/api/reading-kit?minutes=10&goal=confidence"
                className="btn bg-orange text-cream"
              >
                <Download size={16} />
                Download 100-Book Poster (Free)
              </Link>
              <Link href="/books" className="btn bg-paper">
                <BookOpen size={16} />
                Explore Recommended Books
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-cream py-14">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <SectionHead
            kicker="Stay Connected"
            title="Weekly Journal Prompts & Bedtime Rituals"
            sub="Join our parent community. Receive one fresh after-story reflection prompt and reading spark every week."
            centered
          />
          <JoinForm kind="newsletter" source="journals-page" />
        </div>
      </section>

      <Footer />
    </>
  );
}
