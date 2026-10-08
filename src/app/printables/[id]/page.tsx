"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav, Footer, SectionHead, Sticker, Wave } from "@/components/ui";
import { PRINTABLES, type PrintableItem } from "@/lib/consolidated-data";
import {
  Printer,
  Download,
  Check,
  Brain,
  Sparkles,
  Layers,
  ArrowLeft,
  BookOpen,
  HelpCircle,
  FileCheck,
  Share2,
  ShieldCheck,
} from "lucide-react";

export default function PrintableDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const printable = PRINTABLES.find((p) => p.id === resolvedParams.id);

  if (!printable) {
    notFound();
  }

  const relatedPrintables = PRINTABLES.filter((p) => p.id !== printable.id).slice(0, 3);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Nav />

      {/* ───────────── BREADCRUMB & HEADER ───────────── */}
      <section className="border-b-[3px] border-ink bg-cream pt-8 pb-10">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <Link
            href="/printables"
            className="inline-flex items-center gap-2 font-display text-[14px] font-extrabold text-ink/70 hover:text-orange transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to All Free Printables
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className={`mono-label rounded-full border-2 border-ink px-3 py-1 text-[11px] font-black uppercase shadow-[2px_2px_0px_0px_#181a20] ${printable.color}`}>
              {printable.category}
            </span>
            <span className="mono-label rounded-full border-2 border-ink/20 bg-paper px-3 py-1 text-[11.5px] font-bold text-ink/70">
              {printable.age} · {printable.pages} Printable Page{printable.pages > 1 ? "s" : ""}
            </span>
            <span className="mono-label rounded-full bg-mint/40 border-2 border-ink px-3 py-1 text-[11.5px] font-black text-ink">
              100% Free · No Email Required
            </span>
          </div>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">
                {printable.title}
              </h1>
              <p className="mt-4 text-[18px] leading-relaxed text-ink/80">
                {printable.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap gap-4 items-center">
                <a
                  href={printable.downloadUrl}
                  download
                  className="btn bg-orange text-cream text-[16px] px-6 py-3.5 shadow-[4px_4px_0px_0px_#181a20] hover:bg-honey hover:text-ink transition-all"
                >
                  <Download size={18} />
                  Download Printable (SVG / PDF)
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
                <span>High-resolution vector asset ready for standard Letter (8.5×11) & A4 paper</span>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="chunky rounded-3xl bg-paper p-6">
              <div className="flex items-center gap-3 border-b-2 border-dashed border-ink/20 pb-3">
                <img
                  src="/images/reading-bear.png"
                  alt="BEST KidSbooks"
                  className="h-10 w-10 object-contain rounded-full border-2 border-ink bg-cream p-1"
                />
                <div>
                  <div className="font-display text-[16px] font-extrabold text-ink">
                    Teacher & Parent Summary
                  </div>
                  <div className="text-[12px] text-ink/60">Developmentally verified</div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <span className="mono-label text-[10.5px] text-orange uppercase font-black">
                    What is Inside:
                  </span>
                  <ul className="mt-1.5 space-y-1.5">
                    {printable.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-[13px] font-bold text-ink/80">
                        <Check size={14} className="text-mint shrink-0 stroke-[3]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-dashed border-ink/20 pt-3">
                  <span className="mono-label text-[10.5px] text-blue uppercase font-black">
                    Materials Needed:
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {printable.materialsNeeded.map((mat) => (
                      <span
                        key={mat}
                        className="rounded-lg border border-ink/20 bg-cream px-2 py-0.5 text-[12px] font-bold text-ink/70"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {printable.targetWords && printable.targetWords.length > 0 && (
                  <div className="border-t border-dashed border-ink/20 pt-3">
                    <span className="mono-label text-[10.5px] text-ink/60 uppercase font-black">
                      Sample Target Words:
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {printable.targetWords.map((word) => (
                        <span
                          key={word}
                          className="rounded-md border border-ink/15 bg-paper px-2 py-0.5 font-mono text-[12px] font-extrabold text-orange"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── LIVE PREVIEW & INTERACTIVE RUNNER ───────────── */}
      <section className="py-12 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Live Interactive Sheet Preview"
            title="Inspect & Read Full Printable Sheet"
            sub="Preview the exact vector rendering below. You can zoom, review layout, or trigger a clean printout directly from your browser."
          />

          <div className="chunky overflow-hidden rounded-3xl bg-cream border-[3px] border-ink p-4 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-ink/20 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <FileCheck className="text-mint" size={24} />
                <span className="font-display text-[18px] font-black text-ink">
                  {printable.title} — Official Sheet
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={printable.downloadUrl}
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
                src={printable.printableSvgPath}
                alt={printable.title}
                className="w-full max-w-[900px] h-auto rounded-lg shadow-md border border-ink/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── PEDAGOGICAL BACKING & STEP-BY-STEP ROUTINE ───────────── */}
      <section className="py-14 bg-cream border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: Scientific / Pedagogical Foundation */}
            <div>
              <div className="inline-flex items-center gap-2 text-blue font-extrabold text-[12px] uppercase mono-label">
                <Brain size={18} />
                <span>The Literacy Science</span>
              </div>
              <h2 className="mt-2 text-[32px] md:text-[38px] leading-tight">
                Why this activity builds genuine reader confidence
              </h2>
              <div className="chunky mt-6 rounded-3xl bg-paper p-6 md:p-8 border-2 border-ink">
                <p className="text-[16px] leading-relaxed text-ink/85 font-medium">
                  {printable.pedagogyReason}
                </p>
                <div className="mt-6 border-t-2 border-dashed border-ink/20 pt-4">
                  <h4 className="font-display text-[15px] font-extrabold text-ink">
                    Classroom & Homeschool Adaptation:
                  </h4>
                  <p className="mt-1.5 text-[14px] text-ink/75 leading-relaxed">
                    {printable.classroomTips}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Step-by-Step Parent Routine */}
            <div>
              <div className="inline-flex items-center gap-2 text-orange font-extrabold text-[12px] uppercase mono-label">
                <Sparkles size={18} />
                <span>Step-by-Step Family Routine</span>
              </div>
              <h2 className="mt-2 text-[32px] md:text-[38px] leading-tight">
                How to use this with your child tonight
              </h2>
              <div className="mt-6 space-y-4">
                {printable.parentGuideSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="chunky-sm rounded-2xl bg-paper p-5 border-2 border-ink transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="mono-label rounded-full bg-honey px-2.5 py-0.5 text-[11px] font-black text-ink">
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

      {/* ───────────── RELATED PRINTABLES ───────────── */}
      <section className="py-14 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="More Free Tools"
            title="Explore Other Reading Printables"
            sub="Every worksheet is 100% free and engineered to make reading joyous and tactile."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPrintables.map((item) => (
              <article
                key={item.id}
                className="chunky flex flex-col rounded-3xl bg-cream p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className={`mono-label rounded-full border-2 border-ink px-2.5 py-0.5 text-[10px] font-extrabold ${item.color}`}>
                    {item.category}
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
                    href={`/printables/${item.id}`}
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
