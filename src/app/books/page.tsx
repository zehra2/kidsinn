"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav, Footer, SectionHead, Sticker, Wave, JoinForm } from "@/components/ui";
import { ALL_BOOKS, type Book } from "@/lib/consolidated-data";
import {
  BookOpen,
  Clock,
  Sparkles,
  Filter,
  Check,
  Compass,
  Heart,
  MessageCircle,
  HelpCircle,
  ShoppingBag,
  Download,
} from "lucide-react";

export default function BooksPage() {
  const [selectedAge, setSelectedAge] = useState<string>("All");
  const [selectedGoal, setSelectedGoal] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const ageOptions = ["All", "0-2", "2-4", "5-7", "8-10"];
  const goalOptions = ["All", "laugh together", "big feelings", "spark curiosity", "build confidence", "build stamina", "bedtime routine"];

  const filteredBooks = ALL_BOOKS.filter((b) => {
    const matchAge = selectedAge === "All" || b.ageCategory === selectedAge || b.age.includes(selectedAge);
    const matchGoal = selectedGoal === "All" || b.goals.includes(selectedGoal);
    const matchQuery =
      searchQuery === "" ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.blurb.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.author && b.author.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchAge && matchGoal && matchQuery;
  });

  return (
    <>
      <Nav />

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-cream pt-10 pb-14 border-b-[3px] border-ink">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-60"
          style={{ background: "#ff3b1f" }}
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full opacity-60"
          style={{ background: "#ffc531" }}
        />

        <div className="relative mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-1 text-[12.5px] font-extrabold text-ink shadow-[2px_2px_0px_0px_#181a20]">
              <img src="/images/reading-bear.png" alt="" className="h-5 w-5 object-contain" />
              <span>BEST KidSbooks Shop</span>
            </span>
            <span className="mono-label chunky-sm inline-block -rotate-1 rounded-full bg-orange text-cream px-3 py-1">
              Curated Book Catalog
            </span>
            <span className="mono-label rounded-full border-2 border-ink/20 bg-paper px-2.5 py-1 text-[11px] text-ink/60">
              Timed Read-Alouds · After-Story Discussion Prompts
            </span>
          </div>

          <div className="mt-5 max-w-[840px]">
            <h1 className="text-[clamp(2.5rem,6.5vw,4.8rem)] leading-[1.02]">
              Books chosen for how they
              <br />
              <span className="text-blue">sound out loud.</span>
            </h1>
            <p className="mt-4 text-[18px] leading-relaxed text-ink/85">
              Every book on our shelf is tested with children for pacing, engagement, and emotional resonance. Plus, each card includes the exact discussion prompts to ask when you close the last page.
            </p>

            <div className="mt-7 flex flex-wrap gap-4 items-center">
              <a href="#finder" className="btn bg-orange text-cream">
                <Compass size={16} />
                Use the Book Finder Quiz
              </a>
              <Link href="/parent-tools#bedtime" className="btn bg-paper">
                <Clock size={16} />
                Match to Bedtime Minutes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── INTERACTIVE BOOK FINDER & FILTERS ───────────── */}
      <section id="finder" className="py-12 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="chunky rounded-3xl bg-cream p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-dashed border-ink/20 pb-5">
              <div>
                <span className="mono-label text-blue text-[11px] font-black uppercase">
                  Interactive Matching Tool
                </span>
                <h2 className="text-[28px] md:text-[34px] leading-tight mt-1">
                  Find the Perfect Story Tonight
                </h2>
              </div>
              <input
                type="text"
                placeholder="Search by title, author, keyword…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-[320px] rounded-full border-[2.5px] border-ink bg-paper px-4 py-2 text-[14px] outline-none placeholder:text-ink/40 focus:border-blue"
              />
            </div>

            <div className="mt-6 space-y-4">
              {/* Age selector */}
              <div>
                <span className="mono-label text-[11px] text-ink/60 uppercase font-black">
                  Select Child’s Age Group:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {ageOptions.map((age) => (
                    <button
                      key={age}
                      type="button"
                      onClick={() => setSelectedAge(age)}
                      className={`chunky-sm press rounded-full px-4 py-1.5 font-display text-[14px] font-bold ${
                        selectedAge === age ? "bg-orange text-cream scale-105" : "bg-paper text-ink"
                      }`}
                    >
                      {age === "All" ? "All Ages" : `Ages ${age}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal selector */}
              <div>
                <span className="mono-label text-[11px] text-ink/60 uppercase font-black">
                  Select Reading Goal or Emotion:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {goalOptions.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => setSelectedGoal(goal)}
                      className={`chunky-sm press rounded-full px-3 py-1 font-display text-[13px] font-bold capitalize ${
                        selectedGoal === goal ? "bg-blue text-cream scale-105" : "bg-paper text-ink"
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── BOOKS SHELF ───────────── */}
      <section className="py-14 bg-cream">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-[26px] font-extrabold text-ink">
              Showing {filteredBooks.length} Curated Book{filteredBooks.length === 1 ? "" : "s"}
            </h3>
            {(selectedAge !== "All" || selectedGoal !== "All" || searchQuery !== "") && (
              <button
                type="button"
                onClick={() => {
                  setSelectedAge("All");
                  setSelectedGoal("All");
                  setSearchQuery("");
                }}
                className="text-[13px] font-bold text-orange underline"
              >
                Reset filters
              </button>
            )}
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((b) => (
              <article
                key={b.id}
                className="chunky flex flex-col rounded-3xl bg-paper overflow-hidden transition-transform hover:-translate-y-1.5 shadow-lg"
              >
                {/* Book header banner */}
                <div className={`p-5 border-b-[2.5px] border-ink ${b.tint} text-cream relative`}>
                  <div className="flex items-center justify-between">
                    <span className="mono-label rounded-full border-2 border-ink bg-paper px-2 py-0.5 text-[9.5px] font-black text-ink">
                      {b.tag}
                    </span>
                    <span className="mono-label bg-ink/30 px-2 py-0.5 rounded-full text-[10px]">
                      {b.age}
                    </span>
                  </div>
                  <Link href={`/books/${b.id}`}>
                    <h3 className="mt-3 font-display text-[25px] font-extrabold leading-tight text-cream hover:underline">
                      {b.title}
                    </h3>
                  </Link>
                  {b.author && (
                    <p className="text-[13px] font-bold text-cream/90">
                      by {b.author}
                    </p>
                  )}
                  <div className="mt-3 flex items-center gap-1.5 text-[12px] font-extrabold text-cream bg-ink/20 px-2.5 py-1 rounded-full w-max">
                    <Clock size={13} />
                    <span>{b.minutes} min read-aloud</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[14.5px] text-ink/80 leading-relaxed">
                    {b.blurb}
                  </p>

                  {b.parentNote && (
                    <div className="mt-3 rounded-xl border border-ink/20 bg-cream p-2.5 text-[12px] text-ink/75">
                      <strong className="text-orange">Parent note:</strong> {b.parentNote}
                    </div>
                  )}

                  {/* Discussion Prompts */}
                  <div className="mt-4 border-t-2 border-dashed border-ink/20 pt-3">
                    <div className="mono-label text-[10px] text-blue font-black uppercase">
                      After the Last Page · Ask This:
                    </div>
                    <p className="story mt-1 text-[14.5px] text-ink/90 leading-snug">
                      “{b.questions[0]}”
                    </p>
                  </div>

                  {/* Action links */}
                  <div className="mt-4 pt-3 border-t border-dashed border-ink/20 flex gap-2">
                    <Link
                      href={`/books/${b.id}`}
                      className="chunky-sm press flex-1 justify-center rounded-full bg-cream py-2 font-display text-[13px] font-extrabold text-ink flex items-center gap-1 hover:bg-honey text-center"
                    >
                      <BookOpen size={14} />
                      Companion Guide
                    </Link>
                    <a
                      href={b.downloadUrl}
                      download
                      className="btn chunky-sm bg-paper text-ink text-[12px] py-1.5 px-3 hover:bg-honey"
                      title="Download Companion Printable"
                    >
                      <Download size={14} />
                    </a>
                  </div>

                  {/* Price & action */}
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-ink/15">
                    <div>
                      <span className="mono-label text-[10px] text-ink/50 block">Price</span>
                      <span className="font-display text-[20px] font-extrabold text-ink">
                        {b.price}
                      </span>
                    </div>
                    <a
                      href="https://bestkidbooks.online/shop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn chunky-sm bg-orange text-cream text-[13.5px] px-4 py-2 hover:bg-honey hover:text-ink"
                    >
                      <ShoppingBag size={14} />
                      Buy Book
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-paper py-14 border-t-[3px] border-ink">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <SectionHead
            kicker="Fresh Book Recs"
            title="A Perfect Book Recommendation Every Week"
            sub="Never wonder what to read next. Curated recommendations with zero sponsored fluff."
            centered
          />
          <JoinForm kind="newsletter" source="books-page" />
        </div>
      </section>

      <Footer />
    </>
  );
}
