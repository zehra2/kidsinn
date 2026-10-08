"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav, Footer, SectionHead, Sticker, Wave, JoinForm } from "@/components/ui";
import { REELS_DAYS, PHASES, type ChallengeDay } from "@/lib/consolidated-data";
import {
  Calendar,
  CheckCircle2,
  Circle,
  Download,
  Sparkles,
  ArrowRight,
  BookOpen,
  Filter,
  Trophy,
  Award,
  Heart,
  Share2,
} from "lucide-react";

export default function PlansPage() {
  const [selectedPhase, setSelectedPhase] = useState<string>("All");
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [activeDay, setActiveDay] = useState<ChallengeDay>(REELS_DAYS[0]);

  const toggleDay = (dayNum: number) => {
    setCompletedDays((prev) =>
      prev.includes(dayNum) ? prev.filter((d) => d !== dayNum) : [...prev, dayNum]
    );
  };

  const filteredDays =
    selectedPhase === "All"
      ? REELS_DAYS
      : REELS_DAYS.filter((d) => d.phase.toLowerCase().includes(selectedPhase.toLowerCase()));

  const progressPercent = Math.round((completedDays.length / 30) * 100);

  return (
    <>
      <Nav />

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-cream pt-10 pb-14 border-b-[3px] border-ink">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-50"
          style={{ background: "#ffc531" }}
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full opacity-60"
          style={{ background: "#a8c4ff" }}
        />

        <div className="relative mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-1 text-[12.5px] font-extrabold text-ink shadow-[2px_2px_0px_0px_#181a20]">
              <img src="/images/reading-bear.png" alt="" className="h-5 w-5 object-contain" />
              <span>BEST KidSbooks Shop</span>
            </span>
            <span className="mono-label chunky-sm inline-block -rotate-1 rounded-full bg-honey px-3 py-1 text-ink">
              30 Days of Tiny Triumphs
            </span>
            <span className="mono-label rounded-full border-2 border-ink/20 bg-paper px-2.5 py-1 text-[11px] text-ink/60">
              Evidence-Based Phonics & Story Habit
            </span>
          </div>

          <div className="mt-5 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02]">
                Teach the skill.
                <br />
                <span className="text-orange">Keep the magic.</span>
              </h1>
              <p className="mt-4 max-w-[52ch] text-[18px] leading-relaxed text-ink/80">
                A 30-day family reading roadmap designed around tiny, joyous micro-moments. From sound play and CVC blending to digraphs, silent-e, and rich bedtime discussions.
              </p>

              {/* Progress Summary Card */}
              <div className="chunky mt-6 rounded-2xl bg-paper p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="text-honey" size={24} />
                    <span className="font-display text-[18px] font-extrabold text-ink">
                      Your 30-Day Family Journey
                    </span>
                  </div>
                  <span className="mono-label rounded-full bg-mint/50 px-2.5 py-1 text-[12px] font-black text-ink">
                    {completedDays.length} of 30 Days Complete
                  </span>
                </div>
                <div className="mt-3 h-4 w-full rounded-full border-2 border-ink bg-cream overflow-hidden">
                  <div
                    className="h-full bg-orange transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-[12.5px] text-ink/60 font-semibold">
                  <span>Day 1: First Sounds</span>
                  <span>{progressPercent}% Complete</span>
                  <span>Day 30: Reading Champion</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#tracker"
                  className="btn bg-orange text-cream"
                >
                  Start Day 1 Now
                  <ArrowRight size={16} />
                </a>
                <a
                  href="/downloads/plans/30-day-reading-habit-tracker.svg"
                  download
                  className="btn bg-paper"
                >
                  <Download size={16} />
                  Download 30-Day Tracker (SVG/PDF)
                </a>
              </div>
            </div>

            {/* Phase Overview Card */}
            <div className="chunky rounded-3xl bg-paper p-6">
              <div className="mono-label mb-2 text-[11px] text-blue font-extrabold">
                The 5 Developmental Phases
              </div>
              <h3 className="text-[24px]">Structured for Success</h3>
              <p className="mt-1 text-[14px] text-ink/70">
                Each phase builds naturally on the last without pressure or test anxiety.
              </p>

              <div className="mt-5 space-y-2.5">
                {PHASES.map((ph, idx) => (
                  <div
                    key={ph.label}
                    onClick={() => setSelectedPhase(ph.label)}
                    className="flex cursor-pointer items-center justify-between rounded-xl border-2 border-ink p-2.5 transition-transform hover:scale-[1.01]"
                    style={{ background: idx === 0 ? "#fff0e6" : "#fffdf9" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-3 w-3 rounded-full border border-ink ${ph.color}`} />
                      <div>
                        <div className="text-[14px] font-extrabold text-ink">{ph.label}</div>
                        <div className="text-[11.5px] text-ink/60">{ph.note}</div>
                      </div>
                    </div>
                    <span className="mono-label text-[11px] font-bold text-ink/50">
                      {ph.range}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── INTERACTIVE CALENDAR & CHECKLIST ───────────── */}
      <section id="tracker" className="py-14 bg-paper">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Interactive Roadmap"
            title="Explore the 30-Day Tiny Triumphs"
            sub="Filter by skill phase, tap any day to see the exact host prompt and child activity, and check off days as your family progresses."
          />

          {/* Phase Filter Buttons */}
          <div className="mb-8 flex flex-wrap gap-2">
            {["All", "Sound play", "CVC foundations", "Digraphs + blends", "Long vowels", "Words + stories"].map(
              (p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setSelectedPhase(p)}
                  className={`chunky-sm press rounded-full px-4 py-2 font-display text-[14px] font-bold transition-all ${
                    selectedPhase === p ? "bg-orange text-cream scale-105" : "bg-cream text-ink hover:bg-honey"
                  }`}
                >
                  {p}
                </button>
              )
            )}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Days Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {filteredDays.map((d) => {
                const isDone = completedDays.includes(d.day);
                const isSelected = activeDay.day === d.day;
                return (
                  <article
                    key={d.day}
                    onClick={() => setActiveDay(d)}
                    className={`chunky-sm cursor-pointer rounded-2xl p-4 transition-all hover:border-orange ${
                      isSelected ? "border-[3.5px] border-orange bg-cream" : "bg-paper"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="mono-label rounded-md border-2 border-ink bg-honey px-2 py-0.5 text-[10px] font-extrabold text-ink">
                          Day {d.day}
                        </span>
                        <span className="text-[12px] font-bold text-ink/60">
                          {d.phase}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDay(d.day);
                        }}
                        className="text-ink hover:text-orange"
                        title={isDone ? "Mark incomplete" : "Mark completed"}
                      >
                        {isDone ? (
                          <CheckCircle2 size={22} className="text-mint fill-ink" />
                        ) : (
                          <Circle size={22} className="text-ink/30" />
                        )}
                      </button>
                    </div>

                    <h4 className="mt-2.5 font-display text-[17px] font-extrabold leading-snug text-ink">
                      {d.title}
                    </h4>

                    <div className="mt-2 flex items-center justify-between text-[12px] text-ink/70">
                      <span className="font-semibold text-blue">Skill: {d.skill}</span>
                      <span className="text-[11px] underline">View script →</span>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Active Day Detail Panel */}
            <div className="sticky top-28 self-start">
              <div className="chunky rounded-3xl bg-cream p-6 shadow-xl">
                <div className="flex items-center justify-between border-b-2 border-dashed border-ink/20 pb-4">
                  <div>
                    <span className="mono-label text-orange font-black">
                      Day {activeDay.day} Spotlight
                    </span>
                    <h3 className="text-[26px] leading-tight mt-1">{activeDay.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleDay(activeDay.day)}
                    className="btn chunky-sm bg-honey text-ink text-[13px] px-3 py-1.5"
                  >
                    {completedDays.includes(activeDay.day) ? "Completed ✓" : "Mark Done"}
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <div className="mono-label text-[10.5px] text-ink/50 uppercase">
                      Skill Focus
                    </div>
                    <p className="font-display text-[16px] font-bold text-blue">
                      {activeDay.skill} ({activeDay.phase})
                    </p>
                  </div>

                  <div>
                    <div className="mono-label text-[10.5px] text-ink/50 uppercase">
                      What Host & Mascot Do
                    </div>
                    <p className="text-[15px] leading-relaxed text-ink/85 mt-1">
                      {activeDay.action}
                    </p>
                  </div>

                  <div className="rounded-xl border-2 border-ink bg-paper p-3.5">
                    <div className="mono-label text-[10.5px] text-orange uppercase font-bold">
                      After-Story Conversation Prompt
                    </div>
                    <p className="story text-[16px] text-ink mt-1">
                      “{activeDay.question}”
                    </p>
                  </div>

                  <div className="rounded-xl border-2 border-ink bg-honey/30 p-3">
                    <div className="mono-label text-[10px] text-ink/60 uppercase">
                      Downloadable Practice Asset
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-bold text-[14px] text-ink">{activeDay.asset}</span>
                      <Link
                        href="/printables"
                        className="text-[12px] font-extrabold text-blue hover:underline flex items-center gap-1"
                      >
                        <Download size={13} />
                        Get printable
                      </Link>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/printables"
                      className="btn w-full justify-center bg-orange text-cream text-[14px]"
                    >
                      <Download size={16} />
                      Get Free Worksheet for Day {activeDay.day}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── PRINTABLE CERTIFICATE CALLOUT ───────────── */}
      <section id="certificates" className="border-t-[3px] border-ink bg-honey/20 py-14">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="chunky rounded-3xl bg-paper p-8 md:p-12 text-center max-w-[860px] mx-auto">
            <Award className="mx-auto text-orange mb-3" size={48} />
            <h2 className="text-[32px] md:text-[42px] leading-tight">
              Ready for the 30-Day Certificate?
            </h2>
            <p className="mt-3 text-[17px] text-ink/80 max-w-[54ch] mx-auto">
              When your child finishes the 30 days, present them with our official personalized Reading Champion Certificate. Print on heavy paper and frame on their bedroom wall!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/downloads/printables/reading-champion-certificate.svg"
                download
                className="btn bg-orange text-cream"
              >
                <Download size={16} />
                Download Champion Certificate (SVG/PDF)
              </a>
              <Link
                href="/journals"
                className="btn bg-cream text-ink"
              >
                <BookOpen size={16} />
                Explore Reading Journals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-cream py-14 border-t-[3px] border-ink">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <SectionHead
            kicker="Weekly Reading Sparks"
            title="Get Day-by-Day Tips in Your Inbox"
            sub="Join thousands of families receiving one gentle, research-backed reading game every Tuesday morning."
            centered
          />
          <JoinForm kind="course" source="plans-page" />
        </div>
      </section>

      <Footer />
    </>
  );
}
