import type { Metadata } from "next";
import Link from "next/link";
import { Nav, Footer } from "@/components/ui";
import { ADVENT_BOOKS } from "@/lib/content";
import { ArrowLeft, BookOpen, Calendar, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "The Christmas Book Advent — One Book a Day, 1–24 December",
  description:
    "The Christmas Book Advent: 24 books, one a day from 1–24 December — The Grinch, The Polar Express, Stick Man, Bear Stays Up for Christmas and more. Each day gets a reel, a game and a free worksheet on @best.kidsbooks.",
  keywords: [
    "christmas book advent",
    "christmas books for kids",
    "book advent calendar",
    "best christmas picture books",
    "grinch polar express stick man",
    "christmas stories for kids",
  ],
  alternates: {
    canonical: "https://bestkidbooks.online/stories/christmas-book-advent",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://bestkidbooks.online/stories/christmas-book-advent",
    siteName: "BEST KidSbooks Shop",
    title: "The Christmas Book Advent — One Book a Day, 1–24 December",
    description:
      "24 books, one a day from 1–24 December. Each day gets a reel, a game and a free worksheet on @best.kidsbooks.",
    publishedTime: "2026-11-15",
    images: [
      {
        url: "/images/logo.png",
        width: 635,
        height: 224,
        alt: "BEST KidSbooks Shop Logo and Reading Bear Mascot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Christmas Book Advent — One Book a Day, 1–24 December",
    description:
      "24 books, one a day from 1–24 December. Each day gets a reel, a game and a free worksheet on @best.kidsbooks.",
    images: ["/images/logo.png"],
    creator: "@bestkidbooks",
  },
};

export default function ChristmasBookAdventPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Christmas Book Advent — One Book a Day, 1–24 December",
            description:
              "24 Christmas books, one a day from 1–24 December, each with a reel, a game and a free worksheet on @best.kidsbooks.",
            datePublished: "2026-11-15",
            author: {
              "@type": "Organization",
              name: "BEST KidSbooks Shop",
              url: "https://bestkidbooks.online",
            },
            publisher: {
              "@type": "Organization",
              name: "BEST KidSbooks Shop",
              url: "https://bestkidbooks.online",
            },
          }),
        }}
      />
      <Nav />

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-ink pt-10 pb-14 border-b-[3px] border-ink">
        <div className="relative mx-auto max-w-[1240px] px-4 md:px-8">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 font-display text-[14px] font-extrabold text-cream/70 hover:text-honey transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to All Stories
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="mono-label rounded-full bg-honey px-3 py-1 text-[11px] font-black text-ink">
              1–24 December 2026
            </span>
            <span className="mono-label rounded-full border border-cream/40 px-3 py-1 text-[11px] font-bold text-cream/85">
              24 books · 24 days
            </span>
          </div>

          <div className="mt-5 max-w-[820px]">
            <h1 className="text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02] text-cream">
              The Christmas
              <br />
              <span className="text-honey">Book Advent.</span>
            </h1>
            <p className="mt-4 text-[18px] leading-relaxed text-cream/85">
              One book a day, from 1 December to Christmas Eve. No chocolate,
              no plastic toys — just a story, a game and a free worksheet every
              day, and a bedtime routine your children will actually ask for.
              Follow{" "}
              <a
                href="https://www.instagram.com/best.kidsbooks/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-honey underline"
              >
                @best.kidsbooks
              </a>{" "}
              so you never miss a day.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── HOW IT WORKS ───────────── */}
      <section className="py-12 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="chunky rounded-3xl bg-cream p-6">
              <BookOpen size={26} className="text-orange" />
              <h2 className="mt-3 font-display text-[20px] font-extrabold text-ink">
                One book, every morning
              </h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink/75">
                Each day opens with a new book below — picture books and early
                chapter books for ages 2–12, all easy to find in print or at
                the library.
              </p>
            </div>
            <div className="chunky rounded-3xl bg-cream p-6">
              <Sparkles size={26} className="text-blue" />
              <h2 className="mt-3 font-display text-[20px] font-extrabold text-ink">
                A reel and a game, daily
              </h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink/75">
                Bear and the man act the book out on Instagram every day — a
                hook, a try-it game, and a question to ask at bedtime.
              </p>
            </div>
            <div className="chunky rounded-3xl bg-cream p-6">
              <Calendar size={26} className="text-mint" />
              <h2 className="mt-3 font-display text-[20px] font-extrabold text-ink">
                A worksheet for each book
              </h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink/75">
                Every day's book comes with a free printable — a word from the
                story, a sound in it, or a counting game about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── THE 24 DAYS ───────────── */}
      <section className="py-14 bg-cream">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-ink">
            The 24 days
          </h2>
          <p className="mt-2 max-w-[640px] text-[16px] leading-relaxed text-ink/75">
            The full list, in order. Bookmark this page — each day links to
            that day's reel and worksheet on Instagram once it goes live.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ADVENT_BOOKS.map((book) => (
              <article
                key={book.day}
                className="chunky flex flex-col rounded-3xl bg-paper p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="mono-label rounded-full border-2 border-ink bg-honey px-2.5 py-0.5 text-[11px] font-black text-ink">
                    Day {book.day} · {book.day} Dec
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[21px] font-extrabold leading-tight text-ink">
                  {book.title}
                </h3>
                <p className="mt-1 text-[13px] font-bold text-ink/60">
                  by {book.author}
                </p>
                <p className="mt-2 text-[14px] text-ink/75 leading-relaxed">
                  {book.hook}
                </p>
              </article>
            ))}
          </div>

          <div className="chunky mt-10 rounded-3xl bg-ink p-6 md:p-8 text-cream">
            <h2 className="font-display text-[24px] font-extrabold">
              Day 24 is the finale
            </h2>
            <p className="mt-2 max-w-[640px] text-[15.5px] leading-relaxed text-cream/85">
              Christmas Eve ends with the warmest story we know — The Christmas
              Miracle of Jonathan Toomey — and a thank-you to every family who
              read along. If a title is hard to find where you are, swap it for
              another Christmas classic and keep the day: the routine matters
              more than the exact book.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/best.kidsbooks/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-orange text-cream"
              >
                Follow @best.kidsbooks
              </a>
              <Link href="/printables" className="btn bg-paper text-ink">
                Free Christmas Printables
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
