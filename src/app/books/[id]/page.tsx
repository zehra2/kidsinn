"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav, Footer, SectionHead, Sticker, Wave } from "@/components/ui";
import { ALL_BOOKS, type Book } from "@/lib/consolidated-data";
import {
  Printer,
  Download,
  Check,
  Brain,
  Sparkles,
  ArrowLeft,
  BookOpen,
  Heart,
  Clock,
  MessageSquare,
  ShieldCheck,
  FileCheck,
  Lightbulb,
} from "lucide-react";

export default function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const book = ALL_BOOKS.find((b) => b.id === resolvedParams.id);

  if (!book) {
    notFound();
  }

  const relatedBooks = ALL_BOOKS.filter((b) => b.id !== book.id).slice(0, 3);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Schema.org Book & Breadcrumbs */}
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
                    "name": "Curated Books",
                    "item": "https://bestkidbooks.online/books"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": book.title,
                    "item": `https://bestkidbooks.online/books/${book.id}`
                  }
                ]
              },
              {
                "@type": "Book",
                "@id": `https://bestkidbooks.online/books/${book.id}#book`,
                "name": book.title,
                "author": {
                  "@type": "Person",
                  "name": book.author || "BEST KidSbooks"
                },
                "description": book.blurb,
                "inLanguage": "en",
                "bookFormat": "https://schema.org/Hardcover",
                "offers": {
                  "@type": "Offer",
                  "price": book.price.replace("$", ""),
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "url": "https://bestkidbooks.online/shop"
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
            href="/books"
            className="inline-flex items-center gap-2 font-display text-[14px] font-extrabold text-ink/70 hover:text-orange transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to All Curated Books
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className={`mono-label rounded-full border-2 border-ink px-3 py-1 text-[11px] font-black uppercase shadow-[2px_2px_0px_0px_#181a20] ${book.tint}`}>
              {book.tag}
            </span>
            <span className="mono-label rounded-full border-2 border-ink/20 bg-paper px-3 py-1 text-[11.5px] font-bold text-ink/70 flex items-center gap-1.5">
              <Clock size={13} />
              {book.age} · {book.minutes} Min Read
            </span>
            <span className="mono-label rounded-full bg-honey/50 border-2 border-ink px-3 py-1 text-[11.5px] font-black text-ink">
              {book.format}
            </span>
          </div>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">
                {book.title}
              </h1>
              {book.author && (
                <p className="mt-1 font-display text-[18px] font-extrabold text-blue">
                  by {book.author}
                </p>
              )}
              <p className="mt-3 text-[18px] leading-relaxed text-ink/80">
                {book.blurb}
              </p>
              {book.parentNote && (
                <div className="mt-3 rounded-2xl border-2 border-ink bg-honey/30 p-3.5 text-[14px] font-semibold text-ink flex items-start gap-2">
                  <Lightbulb size={18} className="text-orange shrink-0 mt-0.5" />
                  <span><strong>Parent note:</strong> {book.parentNote}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap gap-4 items-center">
                <a
                  href={book.downloadUrl}
                  download
                  className="btn bg-orange text-cream text-[16px] px-6 py-3.5 shadow-[4px_4px_0px_0px_#181a20] hover:bg-honey hover:text-ink transition-all"
                >
                  <Download size={18} />
                  Download Reading Companion Guide (SVG / PDF)
                </a>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="chunky-sm press rounded-full bg-paper px-6 py-3.5 font-display text-[15px] font-bold text-ink flex items-center gap-2 hover:bg-cream"
                >
                  <Printer size={18} />
                  Print Discussion Guide
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[12.5px] font-bold text-ink/65">
                <ShieldCheck size={16} className="text-blue" />
                <span>Includes complete dialogic reading script and vocabulary builder</span>
              </div>
            </div>

            {/* Quick Pedagogical Focus Card */}
            <div className="chunky rounded-3xl bg-paper p-6">
              <div className="flex items-center gap-3 border-b-2 border-dashed border-ink/20 pb-3">
                <BookOpen className="text-orange" size={28} />
                <div>
                  <div className="font-display text-[16px] font-extrabold text-ink">
                    Developmental Focus
                  </div>
                  <div className="text-[12px] text-ink/60">Literacy & Emotional Skills</div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <span className="mono-label text-[10.5px] text-orange uppercase font-black">
                    Core Growth Theme:
                  </span>
                  <p className="mt-1 text-[13.5px] font-bold text-ink/80 leading-relaxed">
                    {book.pedagogicalFocus}
                  </p>
                </div>

                <div className="border-t border-dashed border-ink/20 pt-3">
                  <span className="mono-label text-[10.5px] text-blue uppercase font-black">
                    Reading Goals:
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {book.goals.map((g) => (
                      <span
                        key={g}
                        className="rounded-lg border border-ink/20 bg-cream px-2 py-0.5 text-[12px] font-bold text-ink/70"
                      >
                        ✓ {g}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-dashed border-ink/20 pt-3">
                  <span className="mono-label text-[10.5px] text-ink/60 uppercase font-black">
                    Key Vocabulary Introduced:
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {book.vocabularyWords.map((word) => (
                      <span
                        key={word}
                        className="rounded-md border border-ink/15 bg-paper px-2 py-0.5 font-mono text-[12px] font-extrabold text-orange"
                      >
                        “{word}”
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── LIVE COMPANION SHEET PREVIEW ───────────── */}
      <section className="py-12 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Official Companion Sheet"
            title="Read & Inspect Discussion Guide"
            sub="Print this 1-page parent companion sheet to keep inside your book cover during evening read-alouds."
          />

          <div className="chunky overflow-hidden rounded-3xl bg-cream border-[3px] border-ink p-4 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-ink/20 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <FileCheck className="text-mint" size={24} />
                <span className="font-display text-[18px] font-black text-ink">
                  {book.title} — Reading Companion Sheet
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={book.downloadUrl}
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
                src={book.printableSvgPath}
                alt={book.title}
                className="w-full max-w-[900px] h-auto rounded-lg shadow-md border border-ink/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── DIALOGIC READING SCRIPT ───────────── */}
      <section className="py-14 bg-cream border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: Whitehurst Dialogic Prompts */}
            <div>
              <div className="inline-flex items-center gap-2 text-blue font-extrabold text-[12px] uppercase mono-label">
                <Brain size={18} />
                <span>Dialogic Reading Method</span>
              </div>
              <h2 className="mt-2 text-[32px] md:text-[38px] leading-tight">
                Turn passive listening into an active conversation
              </h2>
              <div className="chunky mt-6 rounded-3xl bg-paper p-6 md:p-8 border-2 border-ink space-y-4">
                <div className="rounded-2xl border border-ink/20 bg-cream p-4">
                  <span className="mono-label text-[11px] text-blue font-black uppercase">
                    1. Before Opening the Book (Cover Spark):
                  </span>
                  <p className="mt-1 font-display text-[15px] font-bold text-ink">
                    “{book.dialogicGuide.before}”
                  </p>
                </div>

                <div className="rounded-2xl border border-ink/20 bg-cream p-4">
                  <span className="mono-label text-[11px] text-orange font-black uppercase">
                    2. During the Climax (Curiosity Bridge):
                  </span>
                  <p className="mt-1 font-display text-[15px] font-bold text-ink">
                    “{book.dialogicGuide.during}”
                  </p>
                </div>

                <div className="rounded-2xl border border-ink/20 bg-cream p-4">
                  <span className="mono-label text-[11px] text-mint font-black uppercase">
                    3. After the Story (Bedtime Connection):
                  </span>
                  <p className="mt-1 font-display text-[15px] font-bold text-ink">
                    “{book.dialogicGuide.after}”
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Thoughtful Questions & Intimacy */}
            <div>
              <div className="inline-flex items-center gap-2 text-orange font-extrabold text-[12px] uppercase mono-label">
                <MessageSquare size={18} />
                <span>Bedtime Questions</span>
              </div>
              <h2 className="mt-2 text-[32px] md:text-[38px] leading-tight">
                Questions that connect the story to their real world
              </h2>
              <div className="mt-6 space-y-4">
                {book.questions.map((q, idx) => (
                  <div
                    key={idx}
                    className="chunky-sm rounded-2xl bg-paper p-5 border-2 border-ink"
                  >
                    <div className="flex items-center gap-2">
                      <span className="mono-label rounded-full bg-honey px-2.5 py-0.5 text-[11px] font-black text-ink">
                        Prompt #{idx + 1}
                      </span>
                    </div>
                    <p className="mt-2 font-display text-[16px] font-extrabold text-ink leading-snug">
                      “{q}”
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── RELATED BOOKS ───────────── */}
      <section className="py-14 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="More Curated Stories"
            title="Explore Other Bedtime Favorites"
            sub="Every book in our library comes with a free companion reading guide."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedBooks.map((item) => (
              <article
                key={item.id}
                className="chunky flex flex-col rounded-3xl bg-cream p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className={`mono-label rounded-full border-2 border-ink px-2.5 py-0.5 text-[10px] font-extrabold ${item.tint}`}>
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
                  {item.blurb}
                </p>

                <div className="mt-auto pt-5 flex gap-2">
                  <Link
                    href={`/books/${item.id}`}
                    className="chunky-sm press flex-1 justify-center rounded-full bg-paper py-2.5 font-display text-[13.5px] font-bold text-ink flex items-center gap-1 hover:bg-honey text-center"
                  >
                    Companion Guide →
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
