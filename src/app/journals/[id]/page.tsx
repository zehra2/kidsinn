"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav, Footer, SectionHead, Sticker, Wave } from "@/components/ui";
import { JOURNALS, type JournalItem } from "@/lib/consolidated-data";
import {
  Printer,
  Download,
  Check,
  Brain,
  Sparkles,
  ArrowLeft,
  BookMarked,
  Heart,
  Smile,
  ShieldCheck,
  FileCheck,
  MessageCircle,
} from "lucide-react";

export default function JournalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const journal = JOURNALS.find((j) => j.id === resolvedParams.id);

  if (!journal) {
    notFound();
  }

  const relatedJournals = JOURNALS.filter((j) => j.id !== journal.id);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Schema.org CreativeWork & Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://bestkidbooks.online"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Reading Journals",
                    "item": "https://bestkidbooks.online/journals"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": journal.title,
                    "item": `https://bestkidbooks.online/journals/${journal.id}`
                  }
                ]
              },
              {
                "@type": "CreativeWork",
                "@id": `https://bestkidbooks.online/journals/${journal.id}#journal`,
                "name": journal.title,
                "headline": journal.subtitle,
                "description": journal.description,
                "educationalLevel": journal.age,
                "genre": "Family Literacy & Emotional Reflection",
                "inLanguage": "en",
                "isAccessibleForFree": true,
                "provider": {
                  "@type": "Organization",
                  "name": "BEST KidSbooks Shop",
                  "url": "https://bestkidbooks.online"
                }
              }
            ]
          })
        }}
      />
      <Nav />

      {/* ───────────── BREADCRUMB & HEADER ───────────── */}
      <section className="border-b-[3px] border-ink bg-cream pt-8 pb-10">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <Link
            href="/journals"
            className="inline-flex items-center gap-2 font-display text-[14px] font-extrabold text-ink/70 hover:text-orange transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to All Reading Journals
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className={`mono-label rounded-full border-2 border-ink px-3 py-1 text-[11px] font-black uppercase shadow-[2px_2px_0px_0px_#181a20] ${journal.color}`}>
              {journal.tag}
            </span>
            <span className="mono-label rounded-full border-2 border-ink/20 bg-paper px-3 py-1 text-[11.5px] font-bold text-ink/70">
              {journal.age} · Printable Keepsake Entry
            </span>
            <span className="mono-label rounded-full bg-mint/40 border-2 border-ink px-3 py-1 text-[11.5px] font-black text-ink">
              100% Free Family Resource
            </span>
          </div>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">
                {journal.title}
              </h1>
              <p className="mt-2 font-display text-[20px] font-bold text-blue">
                {journal.subtitle}
              </p>
              <p className="mt-3 text-[17.5px] leading-relaxed text-ink/80">
                {journal.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap gap-4 items-center">
                <a
                  href={journal.downloadUrl}
                  download
                  className="btn bg-orange text-cream text-[16px] px-6 py-3.5 shadow-[4px_4px_0px_0px_#181a20] hover:bg-honey hover:text-ink transition-all"
                >
                  <Download size={18} />
                  Download Journal Sheet (SVG / PDF)
                </a>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="chunky-sm press rounded-full bg-paper px-6 py-3.5 font-display text-[15px] font-bold text-ink flex items-center gap-2 hover:bg-cream"
                >
                  <Printer size={18} />
                  Print Immediately
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[12.5px] font-bold text-ink/65">
                <ShieldCheck size={16} className="text-blue" />
                <span>Zero homework pressure · Designed for 3–5 minute bedtime connection</span>
              </div>
            </div>

            {/* Quick Structure Card */}
            <div className="chunky rounded-3xl bg-paper p-6">
              <div className="flex items-center gap-3 border-b-2 border-dashed border-ink/20 pb-3">
                <BookMarked className="text-orange" size={28} />
                <div>
                  <div className="font-display text-[16px] font-extrabold text-ink">
                    Journal Sheet Architecture
                  </div>
                  <div className="text-[12px] text-ink/60">Developmentally calibrated</div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <span className="mono-label text-[10.5px] text-orange uppercase font-black">
                    Key Features & Highlights:
                  </span>
                  <ul className="mt-1.5 space-y-1.5">
                    {journal.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[13px] font-bold text-ink/80">
                        <Check size={14} className="text-mint shrink-0 mt-0.5 stroke-[3]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-dashed border-ink/20 pt-3">
                  <span className="mono-label text-[10.5px] text-blue uppercase font-black">
                    Sheet Sections:
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {journal.journalSections.map((sec) => (
                      <span
                        key={sec}
                        className="rounded-lg border border-ink/20 bg-cream px-2 py-0.5 text-[12px] font-bold text-ink/70"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── LIVE PREVIEW & INTERACTIVE RUNNER ───────────── */}
      <section className="py-12 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Interactive Sheet Inspection"
            title="Preview Printable Journal Page"
            sub="Inspect the layout and prompt areas before printing. Formatted for high-clarity home and classroom printing."
          />

          <div className="chunky overflow-hidden rounded-3xl bg-cream border-[3px] border-ink p-4 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-ink/20 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <FileCheck className="text-mint" size={24} />
                <span className="font-display text-[18px] font-black text-ink">
                  {journal.title} — Vector Page Preview
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={journal.downloadUrl}
                  download
                  className="btn chunky-sm bg-orange text-cream text-[13.5px] py-2 px-4"
                >
                  <Download size={14} />
                  Download File
                </a>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="chunky-sm press rounded-full bg-paper px-4 py-2 font-display text-[13.5px] font-bold text-ink flex items-center gap-1.5"
                >
                  <Printer size={14} />
                  Print
                </button>
              </div>
            </div>

            {/* Embedded High-Resolution Vector Visual */}
            <div className="flex justify-center rounded-2xl bg-white p-4 md:p-8 border-2 border-ink shadow-inner overflow-x-auto">
              <img
                src={journal.printableSvgPath}
                alt={journal.title}
                className="w-full max-w-[900px] h-auto rounded-lg shadow-md border border-ink/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── RESEARCH & 3-STEP BEDTIME ROUTINE ───────────── */}
      <section className="py-14 bg-cream border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: Emotional & Brain Science */}
            <div>
              <div className="inline-flex items-center gap-2 text-blue font-extrabold text-[12px] uppercase mono-label">
                <Brain size={18} />
                <span>Developmental Psychology</span>
              </div>
              <h2 className="mt-2 text-[32px] md:text-[38px] leading-tight">
                Why gentle reflection beats comprehension quizzes
              </h2>
              <div className="chunky mt-6 rounded-3xl bg-paper p-6 md:p-8 border-2 border-ink">
                <p className="text-[16px] leading-relaxed text-ink/85 font-medium">
                  {journal.researchInsight}
                </p>

                <div className="mt-6 border-t-2 border-dashed border-ink/20 pt-4">
                  <h4 className="font-display text-[16px] font-extrabold text-orange flex items-center gap-2">
                    <MessageCircle size={18} />
                    Sample After-Story Prompts On This Sheet:
                  </h4>
                  <div className="mt-3 space-y-2">
                    {journal.samplePrompts.map((prompt, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-ink/20 bg-cream p-3 text-[14px] font-semibold text-ink/90 story"
                      >
                        {prompt}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 3-Step Evening Routine */}
            <div>
              <div className="inline-flex items-center gap-2 text-orange font-extrabold text-[12px] uppercase mono-label">
                <Sparkles size={18} />
                <span>The 5-Minute Evening Routine</span>
              </div>
              <h2 className="mt-2 text-[32px] md:text-[38px] leading-tight">
                How to integrate into busy bedtimes
              </h2>
              <div className="mt-6 space-y-4">
                {journal.dailyRoutine.map((step, idx) => (
                  <div
                    key={idx}
                    className="chunky-sm rounded-2xl bg-paper p-5 border-2 border-ink transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="mono-label rounded-full bg-mint px-2.5 py-0.5 text-[11px] font-black text-ink">
                        {step.step}
                      </span>
                      <h3 className="font-display text-[17px] font-extrabold text-ink">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-[14px] text-ink/75 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── EXPLORE OTHER JOURNALS ───────────── */}
      <section className="py-14 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="More Keepsake Journals"
            title="Explore Other Reading Journals"
            sub="Pick the journal that matches your child's age and current developmental milestone."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedJournals.map((item) => (
              <article
                key={item.id}
                className="chunky flex flex-col rounded-3xl bg-cream p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className={`mono-label rounded-full border-2 border-ink px-2.5 py-0.5 text-[10px] font-extrabold ${item.color}`}>
                    {item.tag}
                  </span>
                  <span className="mono-label text-[11px] font-bold text-ink/60">
                    {item.age}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-[20px] font-extrabold leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] text-ink/75 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-auto pt-5 flex gap-2">
                  <Link
                    href={`/journals/${item.id}`}
                    className="chunky-sm press flex-1 justify-center rounded-full bg-paper py-2.5 font-display text-[13.5px] font-bold text-ink flex items-center gap-1 hover:bg-honey text-center"
                  >
                    Read & Preview →
                  </Link>
                  <a
                    href={item.downloadUrl}
                    download
                    className="btn chunky-sm bg-orange text-cream py-2.5 px-3 text-[13.5px]"
                  >
                    <Download size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
