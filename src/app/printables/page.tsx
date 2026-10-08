"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav, Footer, SectionHead, Sticker, Wave, JoinForm } from "@/components/ui";
import { PRINTABLES, type PrintableItem } from "@/lib/consolidated-data";
import { kitGoals, readingDays, type KitGoal } from "@/lib/reading-kit";
import {
  Printer,
  Download,
  Sparkles,
  Check,
  Heart,
  Eye,
  X,
  ShieldCheck,
  FileText,
  Star,
  Layers,
  BookOpen,
} from "lucide-react";

export default function PrintablesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [previewItem, setPreviewItem] = useState<PrintableItem | null>(null);

  // 7-day kit generator state
  const [minutes, setMinutes] = useState(10);
  const [goal, setGoal] = useState<KitGoal>("connection");
  const [checkedDays, setCheckedDays] = useState<number[]>([]);

  const toggleDayCheck = (index: number) => {
    setCheckedDays((current) =>
      current.includes(index) ? current.filter((d) => d !== index) : [...current, index]
    );
  };

  const categories = ["All", "Phonics & CVC", "Reading Trackers", "Coloring & Bookmarks", "Classroom Packs"];

  const filteredPrintables =
    selectedCategory === "All"
      ? PRINTABLES
      : PRINTABLES.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Nav />

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-cream pt-10 pb-14 border-b-[3px] border-ink">
        <div
          className="pointer-events-none absolute -right-16 top-10 h-60 w-60 rounded-full opacity-60"
          style={{ background: "#ff8fb1" }}
        />
        <div
          className="pointer-events-none absolute -left-12 -top-12 h-52 w-52 rounded-full opacity-60"
          style={{ background: "#6ecf9b" }}
        />

        <div className="relative mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-1 text-[12.5px] font-extrabold text-ink shadow-[2px_2px_0px_0px_#181a20]">
              <img src="/images/reading-bear.png" alt="BEST KidSbooks Reading Bear Mascot" className="h-5 w-5 object-contain" />
              <span>BEST KidSbooks Shop</span>
            </span>
            <span className="mono-label chunky-sm inline-block -rotate-1 rounded-full bg-mint px-3 py-1 text-ink">
              100% Free Family Printables
            </span>
            <span className="mono-label rounded-full border-2 border-ink/20 bg-paper px-2.5 py-1 text-[11px] text-ink/60">
              No Email Gate · No Child Data
            </span>
          </div>

          <div className="mt-5 max-w-[800px]">
            <h1 className="text-[clamp(2.5rem,6.5vw,4.8rem)] leading-[1.02]">
              Take reading joy
              <br />
              <span className="text-orange">offline & hands-on.</span>
            </h1>
            <p className="mt-4 text-[18px] leading-relaxed text-ink/80">
              Printable sound-box mats, phonics detective hunts, coloring bookmarks, and gentle reading habit trackers. Designed to help children close the screen and connect over paper.
            </p>

            <div className="mt-7 flex flex-wrap gap-4 items-center">
              <a href="#library" className="btn bg-orange text-cream">
                <Printer size={16} />
                Browse Free Printables
              </a>
              <a href="#kit" className="btn bg-honey text-ink">
                <Download size={16} />
                Customize 7-Day Reading Kit
              </a>
              <div className="flex items-center gap-2 text-[13px] font-bold text-ink/65">
                <ShieldCheck size={18} className="text-blue" />
                <span>Standard Letter & A4 Landscape ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── INTERACTIVE 7-DAY READING KIT BUILDER ───────────── */}
      <section id="kit" className="py-14 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Live Generator"
            title="The 7-Day Reading Joy Kit Builder"
            sub="Set your family's comfortable daily reading time and what would feel like a win. Preview your custom tracker in real time and download as high-res SVG or PDF."
          />

          <div className="chunky rounded-3xl bg-cream p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <span className="mono-label text-[11px] text-blue font-extrabold uppercase">
                    Step 1 · Pick daily rhythm
                  </span>
                  <h3 className="text-[22px] mt-1">Comfortable Daily Minutes</h3>
                  <p className="text-[14px] text-ink/70 mt-1">
                    Even 5 minutes of focused togetherness builds strong reader identity.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {[5, 10, 15, 20].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMinutes(m)}
                        className={`chunky-sm press rounded-2xl py-3 font-display font-bold text-[16px] ${
                          minutes === m ? "bg-orange text-cream scale-105" : "bg-paper text-ink"
                        }`}
                      >
                        {m} min / day
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="mono-label text-[11px] text-blue font-extrabold uppercase">
                    Step 2 · Pick your win
                  </span>
                  <h3 className="text-[22px] mt-1">What feels like a victory?</h3>
                  <div className="space-y-2 mt-3">
                    {Object.entries(kitGoals).map(([k, item]) => (
                      <button
                        key={k}
                        type="button"
                        onClick={() => setGoal(k as KitGoal)}
                        className={`w-full text-left rounded-2xl border-2 border-ink p-3.5 transition-all ${
                          goal === k ? "bg-honey shadow-[4px_4px_0_#2a2218]" : "bg-paper"
                        }`}
                      >
                        <div className="font-display font-extrabold text-[16px] text-ink">
                          {item.label}
                        </div>
                        <div className="text-[12.5px] text-ink/70 mt-0.5">{item.note}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`/api/reading-kit?minutes=${minutes}&goal=${goal}`}
                    download="best-kid-books-reading-kit.svg"
                    className="btn w-full justify-center bg-orange text-cream text-[16px] py-3.5"
                  >
                    <Download size={18} />
                    Download Instant Print SVG / PDF
                  </a>
                  <p className="mt-2 text-center text-[11.5px] text-ink/60 font-semibold">
                    Free personal family use · Opens in any browser · Ready to print
                  </p>
                </div>
              </div>

              {/* Live Preview Canvas */}
              <div className="chunky rounded-2xl bg-paper p-5 border-[2.5px] border-ink">
                <div className="flex items-center justify-between border-b-2 border-dashed border-ink/20 pb-3">
                  <div>
                    <span className="mono-label text-[10px] text-blue font-black">
                      Live A4 Sheet Preview
                    </span>
                    <h4 className="font-display text-[20px] font-extrabold text-ink">
                      Seven Little Reading Moments
                    </h4>
                    <p className="text-[12px] text-ink/60">
                      {minutes} minutes daily · {kitGoals[goal].label} · No scorekeeping
                    </p>
                  </div>
                  <img
                    src="/images/reading-bear.png"
                    alt="BEST KidSbooks Mascot"
                    className="h-12 w-12 rounded-full border-2 border-ink bg-honey/40 p-1 object-contain"
                  />
                </div>

                {/* Day cards live grid */}
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2">
                  {readingDays.map((d, i) => {
                    const isChecked = checkedDays.includes(i);
                    return (
                      <div
                        key={d.day}
                        onClick={() => toggleDayCheck(i)}
                        className={`cursor-pointer rounded-xl border-2 border-ink p-2.5 transition-all text-left ${
                          isChecked ? "bg-mint/40" : i % 2 === 0 ? "bg-[#e7f0ff]" : "bg-[#fff0e6]"
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-extrabold text-blue">
                          <span>{d.day}</span>
                          {isChecked ? <Check size={12} /> : <Heart size={12} className="text-ink/30" />}
                        </div>
                        <div className="font-display text-[13px] font-bold text-ink mt-1">
                          {d.title}
                        </div>
                        <p className="text-[10.5px] text-ink/70 leading-tight mt-1">
                          {d.idea}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Prompts preview */}
                <div className="mt-4 border-t-2 border-dashed border-ink/20 pt-3">
                  <div className="mono-label text-[10px] text-orange font-bold uppercase">
                    Sample After-Story Prompts On This Sheet:
                  </div>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] text-ink/80">
                    <div className="rounded-lg border border-ink/30 bg-cream p-2">
                      “{readingDays[0].prompt}”
                    </div>
                    <div className="rounded-lg border border-ink/30 bg-cream p-2">
                      “{readingDays[4].prompt}”
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── PRINTABLES LIBRARY CATALOG ───────────── */}
      <section id="library" className="py-14 bg-cream">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Free Library"
            title="All Printable Worksheets & Activities"
            sub="Select any category to view worksheets. Every item is tested with real children and classroom teachers for maximum joy and clarity."
          />

          {/* Category Tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedCategory(c)}
                className={`chunky-sm press rounded-full px-4 py-2 font-display text-[14px] font-bold transition-all ${
                  selectedCategory === c ? "bg-orange text-cream scale-105" : "bg-paper text-ink hover:bg-honey"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid of printables */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrintables.map((item) => (
              <article
                key={item.id}
                className="chunky flex flex-col rounded-3xl bg-paper p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className={`mono-label rounded-full border-2 border-ink px-2.5 py-0.5 text-[10px] font-extrabold ${item.color}`}>
                    {item.category}
                  </span>
                  <span className="mono-label text-[11px] font-bold text-ink/60">
                    {item.age} · {item.pages} pg{item.pages > 1 ? "s" : ""}
                  </span>
                </div>

                <Link href={`/printables/${item.id}`}>
                  <h3 className="mt-3 font-display text-[22px] font-extrabold leading-tight text-ink hover:text-orange transition-colors">
                    {item.title}
                  </h3>
                </Link>

                <p className="mt-2 text-[14px] text-ink/75 leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-1.5 border-t-2 border-dashed border-ink/20 pt-3">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-[12.5px] font-semibold text-ink/80">
                      <Check size={14} className="text-mint shrink-0 stroke-[3]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 flex gap-2">
                  <Link
                    href={`/printables/${item.id}`}
                    className="chunky-sm press flex-1 justify-center rounded-full bg-cream py-2.5 font-display text-[14px] font-bold text-ink flex items-center gap-1.5 hover:bg-honey text-center"
                  >
                    <BookOpen size={15} />
                    Read & Guide
                  </Link>
                  <a
                    href={item.downloadUrl}
                    download
                    className="btn chunky-sm flex-1 justify-center bg-orange text-cream py-2.5 text-[14px] hover:bg-honey hover:text-ink"
                  >
                    <Download size={15} />
                    Download
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── MODAL PREVIEW ───────────── */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm">
          <div className="chunky max-w-[620px] w-full rounded-3xl bg-paper p-6 md:p-8 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b-2 border-dashed border-ink/20 pb-3">
              <div>
                <span className="mono-label text-blue text-[11px] font-black uppercase">
                  {previewItem.category}
                </span>
                <h3 className="text-[24px] mt-0.5">{previewItem.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewItem(null)}
                className="rounded-full border-2 border-ink bg-cream p-1.5 hover:bg-orange hover:text-cream"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border-2 border-ink bg-cream p-4 text-center">
                <FileText size={48} className="mx-auto text-orange mb-2" />
                <p className="font-display text-[17px] font-bold text-ink">
                  {previewItem.title}
                </p>
                <p className="text-[13px] text-ink/70">
                  Formatted for letter & A4 landscape printing · High resolution vector asset
                </p>
              </div>

              <div>
                <h4 className="font-display text-[16px] font-bold text-ink">What is inside this sheet:</h4>
                <ul className="mt-2 space-y-1.5">
                  {previewItem.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[14px] text-ink/80">
                      <Check size={16} className="text-mint shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="chunky-sm press flex-1 justify-center rounded-full bg-cream py-3 font-display font-bold text-ink flex items-center gap-2"
                >
                  <Printer size={16} />
                  Print Now
                </button>
                <a
                  href={previewItem.downloadUrl}
                  download
                  className="btn flex-1 justify-center bg-orange text-cream py-3 text-[15px]"
                >
                  <Download size={16} />
                  Download File
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter */}
      <section className="bg-cream py-14 border-t-[3px] border-ink">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <SectionHead
            kicker="New Printables Each Month"
            title="Never Run Out of Story Sparks"
            sub="Join our parent reading circle and get instant access to every new phonics mat, seasonal coloring book, and challenge sheet."
            centered
          />
          <JoinForm kind="newsletter" source="printables-page" />
        </div>
      </section>

      <Footer />
    </>
  );
}
