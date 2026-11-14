import Link from "next/link";
import { Nav, Footer, SectionHead } from "@/components/ui";
import { STORIES } from "@/lib/content";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";

export default function StoriesPage() {
  return (
    <>
      <Nav />

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-cream pt-10 pb-14 border-b-[3px] border-ink">
        <div
          className="pointer-events-none absolute -right-16 top-10 h-60 w-60 rounded-full opacity-60"
          style={{ background: "#a8c4ff" }}
        />
        <div className="relative mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-1 text-[12.5px] font-extrabold text-ink shadow-[2px_2px_0px_0px_#181a20]">
              <img src="/images/reading-bear.png" alt="BEST KidSbooks Reading Bear Mascot" className="h-5 w-5 object-contain" />
              <span>BEST KidSbooks Shop</span>
            </span>
            <span className="mono-label chunky-sm inline-block -rotate-1 rounded-full bg-honey px-3 py-1 text-ink">
              Stories & ideas
            </span>
          </div>

          <div className="mt-5 max-w-[820px]">
            <h1 className="text-[clamp(2.5rem,6.5vw,4.8rem)] leading-[1.02]">
              Reading ideas,
              <br />
              <span className="text-orange">plainly told.</span>
            </h1>
            <p className="mt-4 text-[18px] leading-relaxed text-ink/80">
              No guilt, no jargon — just what the research actually says, and
              what to do with it tonight. Every story ends with something you
              can try at bedtime the same day.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── CHRISTMAS BOOK ADVENT FEATURE ───────────── */}
      <section className="py-12 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <Link
            href="/stories/christmas-book-advent"
            className="chunky block rounded-3xl bg-ink p-6 md:p-8 text-cream transition-transform hover:-translate-y-1"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="mono-label rounded-full bg-honey px-3 py-1 text-[11px] font-black text-ink">
                1–24 December 2026
              </span>
              <span className="mono-label rounded-full border border-cream/40 px-3 py-1 text-[11px] font-bold text-cream/85">
                One book a day
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-[640px]">
                <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-cream">
                  The Christmas Book Advent
                </h2>
                <p className="mt-2 text-[16px] leading-relaxed text-cream/85">
                  Twenty-four books, one a day, from The Night Before Christmas
                  to the warmest story we know. Each day gets a reel, a game and
                  a worksheet on @best.kidsbooks — open the calendar to see the
                  whole list.
                </p>
              </div>
              <span className="btn bg-orange text-cream shrink-0">
                Open the Advent
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ───────────── STORY LIST ───────────── */}
      <section className="py-14 bg-cream">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Stories"
            title="Read this, then read tonight"
            sub="Short, practical pieces grounded in the same research our tools are built on."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STORIES.map((story) => (
              <article
                key={story.slug}
                className="chunky flex flex-col rounded-3xl bg-paper p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="mono-label rounded-full border-2 border-ink bg-honey px-2.5 py-0.5 text-[10px] font-extrabold text-ink">
                    {story.tag}
                  </span>
                  <span className="mono-label text-[11px] font-bold text-ink/60 flex items-center gap-1">
                    <Clock size={12} />
                    {story.read}
                  </span>
                </div>

                <h2 className="mt-3 font-display text-[22px] font-extrabold leading-tight text-ink">
                  <Link
                    href={`/stories/${story.slug}`}
                    className="hover:text-orange transition-colors"
                  >
                    {story.title}
                  </Link>
                </h2>
                <p className="mt-2 text-[14px] text-ink/75 leading-relaxed">
                  {story.dek}
                </p>

                <div className="mt-auto pt-5 flex items-center justify-between">
                  <span className="mono-label text-[11px] font-bold text-ink/60 flex items-center gap-1">
                    <Calendar size={12} />
                    {story.date} 2026
                  </span>
                  <Link
                    href={`/stories/${story.slug}`}
                    className="chunky-sm press rounded-full bg-cream px-4 py-2 font-display text-[13.5px] font-bold text-ink flex items-center gap-1.5 hover:bg-honey"
                  >
                    Read story
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 flex items-center gap-2 text-[14px] font-bold text-ink/70">
            <Sparkles size={16} className="text-orange" />
            More stories arrive with the Christmas Book Advent — one a day from
            1 December.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
