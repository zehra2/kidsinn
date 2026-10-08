import Link from "next/link";
import {
  AdSlot,
  Footer,
  JoinForm,
  Logo,
  Marquee,
  Nav,
  SectionHead,
  Sticker,
  Wave,
} from "@/components/ui";
import {
  BOOKS,
  COURSES,
  DIFFS,
  NEW_BOOK,
  POSTS,
  SEARCHES,
  SOURCES,
} from "@/lib/content";
import {
  Calendar,
  Printer,
  BookMarked,
  Calculator,
  Download,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  Heart,
  Video,
} from "lucide-react";

const STATS = [
  { n: "1.4M", l: "words heard by age 5", s: "at 5 books a day (Logan et al.)" },
  { n: "60 min", l: "AAP screen limit", s: "for children ages 2–5" },
  { n: "30 Days", l: "Tiny Triumphs challenge", s: "micro-phonics & joy" },
  { n: "100%", l: "free parent tools", s: "no sign-up or child data needed" },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-cream">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-60"
          style={{ background: "#ffc531" }}
        />
        <div
          className="pointer-events-none absolute -left-16 top-40 h-44 w-44 rounded-full"
          style={{ background: "#a8c4ff", opacity: 0.7 }}
        />
        <div
          className="pointer-events-none absolute bottom-10 right-1/3 h-24 w-24 rounded-full"
          style={{ background: "#ff8fb1", opacity: 0.5 }}
        />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-4 pb-8 pt-10 md:px-8 md:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-3 py-1 text-[12.5px] font-extrabold text-ink shadow-[2px_2px_0px_0px_#181a20]">
                <img src="/images/reading-bear.png" alt="" className="h-5 w-5 object-contain" />
                <span>BEST KidSbooks Shop</span>
              </span>
              <span className="mono-label inline-block -rotate-2 border-2 border-ink bg-blue px-3 py-1 text-cream">
                Picture Books · Plans · Printables · Journals
              </span>
              <span className="mono-label border-2 border-ink/20 bg-paper px-2.5 py-1 text-[10.5px] text-ink/60">
                Evidence-Based Literacy
              </span>
            </div>

            <h1 className="text-[clamp(2.6rem,7.5vw,5.2rem)] leading-[0.98]">
              Turn screen
              <br />
              time into
              <br />
              <span className="text-orange">story time.</span>
            </h1>

            <p className="mt-5 max-w-[50ch] text-[18px] leading-relaxed text-ink/85">
              Books chosen by how long they take to read out loud, free calculators that compute the million-word gap, 30-day phonics routines, and printable journals to make bedtime magical.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/plans" className="btn bg-orange text-cream">
                <Calendar size={18} />
                Explore 30-Day Plan
              </Link>
              <Link href="/printables" className="btn bg-honey text-ink">
                <Printer size={18} />
                Free Printables
              </Link>
              <Link href="/parent-tools" className="btn bg-paper">
                <Calculator size={18} />
                Try Calculators
              </Link>
            </div>

            {/* Evidence & stats */}
            <dl className="mt-9 grid max-w-[620px] grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.l}
                  className="chunky-sm rounded-2xl bg-paper px-3 py-3"
                >
                  <dt className="num font-display text-[24px] font-extrabold leading-none text-blue">
                    {s.n}
                  </dt>
                  <dd className="mt-1.5 text-[12px] font-semibold leading-tight text-ink">
                    {s.l}
                    <span className="block text-[10px] font-normal text-ink/55 mt-0.5">
                      {s.s}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero Visual Card */}
          <div className="relative">
            <div className="chunky overflow-hidden rounded-[34px] bg-paper shadow-2xl">
              <div className="relative bg-gradient-to-br from-blue-soft/30 via-cream to-honey/30 p-6 md:p-8">
                <div className="flex items-center justify-between border-b-2 border-dashed border-ink/20 pb-4">
                  <div className="flex items-center gap-3">
                    <Logo className="h-14 w-14" />
                    <div>
                      <div className="font-display text-[18px] font-black text-ink">
                        Tonight's Family Reading Corner
                      </div>
                      <div className="text-[12px] text-ink/65 font-semibold">
                        Ages 2–10 · No scorekeeping
                      </div>
                    </div>
                  </div>
                  <span className="mono-label rounded-full bg-honey px-2.5 py-1 text-[10px] font-black">
                    Live Hub
                  </span>
                </div>

                {/* 3 Quick Cards Inside Hero */}
                <div className="mt-5 space-y-3">
                  <Link
                    href="/plans"
                    className="flex items-center justify-between rounded-2xl border-2 border-ink bg-paper p-3.5 transition-transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border-2 border-ink bg-orange/20 p-2 text-orange">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <div className="text-[14.5px] font-extrabold text-ink">
                          30-Day Tiny Triumphs Challenge
                        </div>
                        <div className="text-[12px] text-ink/60">
                          Day-by-day phonics, blending & habit checklist
                        </div>
                      </div>
                    </div>
                    <span className="mono-label text-[11px] text-orange font-bold">
                      View →
                    </span>
                  </Link>

                  <Link
                    href="/printables#kit"
                    className="flex items-center justify-between rounded-2xl border-2 border-ink bg-paper p-3.5 transition-transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border-2 border-ink bg-honey/40 p-2 text-ink">
                        <Printer size={18} />
                      </div>
                      <div>
                        <div className="text-[14.5px] font-extrabold text-ink">
                          Instant Printable 7-Day Kit
                        </div>
                        <div className="text-[12px] text-ink/60">
                          Custom SVG/PDF generator with bedtime prompt cards
                        </div>
                      </div>
                    </div>
                    <span className="mono-label text-[11px] text-blue font-bold">
                      Free →
                    </span>
                  </Link>

                  <Link
                    href="/journals"
                    className="flex items-center justify-between rounded-2xl border-2 border-ink bg-paper p-3.5 transition-transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border-2 border-ink bg-blush/30 p-2 text-ink">
                        <BookMarked size={18} />
                      </div>
                      <div>
                        <div className="text-[14.5px] font-extrabold text-ink">
                          Bedtime Connection Journals
                        </div>
                        <div className="text-[12px] text-ink/60">
                          Memory keepers that replace reading resistance
                        </div>
                      </div>
                    </div>
                    <span className="mono-label text-[11px] text-ink/70 font-bold">
                      Explore →
                    </span>
                  </Link>
                </div>

                <div className="mt-5 rounded-2xl border-2 border-dashed border-ink/30 bg-cream p-3 text-center">
                  <p className="story text-[14.5px] text-ink/85">
                    “What happens if we turn the page back?” — Story prompt of the night
                  </p>
                </div>
              </div>
            </div>

            {/* floating badges */}
            <div className="absolute -left-3 -top-5 bob hidden sm:block">
              <Sticker tone="bg-honey" rotate={-5}>
                ★ AAP Evidence-Backed
              </Sticker>
            </div>
            <div className="absolute -bottom-4 right-6 bob slow">
              <Sticker tone="bg-blush" rotate={4}>
                Zero Child Data
              </Sticker>
            </div>
          </div>
        </div>

        <Wave color="#3b6fe8" className="mt-8" />
      </section>

      {/* Marquee Ticker */}
      <Marquee
        items={[
          "30 Days of Tiny Triumphs",
          "Free Printable Library",
          "Family Reading Journals",
          "Screen Time vs Story Time",
          "Read-Aloud Book Shelf",
          "No Child Tracking, Ever",
        ]}
      />

      {/* ───────────── THREE SIGNATURE HUBS FEATURE SPOTLIGHT ───────────── */}
      <section className="bg-blue py-14 text-cream">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="mb-10 text-center max-w-[760px] mx-auto">
            <span className="mono-label inline-block rounded-full bg-honey px-3 py-1 text-ink">
              The Three Core Pillars
            </span>
            <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)] text-cream">
              Plans, Printables & Journals
            </h2>
            <p className="mt-3 text-[17px] text-cream/85">
              Everything your family needs to transform reading from a bedtime battle into your child’s favorite part of the day.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Pillar 1: Plans */}
            <article className="chunky press flex flex-col rounded-3xl bg-paper p-6 text-ink shadow-xl">
              <div className="flex items-center justify-between">
                <span className="mono-label rounded-full border-2 border-ink bg-orange px-2.5 py-0.5 text-[10px] text-cream font-bold">
                  Roadmap
                </span>
                <Calendar className="text-orange" size={24} />
              </div>
              <h3 className="mt-4 font-display text-[24px] font-extrabold leading-tight">
                30-Day Reading Plans
              </h3>
              <p className="mt-2 text-[14.5px] text-ink/75 leading-relaxed">
                A structured, day-by-day micro-phonics challenge. Covers sound play, CVC word blending, digraphs, long vowels, and bedtime reading rituals.
              </p>
              <ul className="mt-4 space-y-1.5 border-t-2 border-dashed border-ink/20 pt-3 text-[13px] font-semibold text-ink/80">
                <li>✓ 5 developmental skill phases</li>
                <li>✓ Interactive daily checklist</li>
                <li>✓ Printable Reading Champion Certificate</li>
              </ul>
              <Link
                href="/plans"
                className="btn chunky-sm mt-6 w-full justify-center bg-orange text-cream text-[14px]"
              >
                Explore the 30-Day Plan →
              </Link>
            </article>

            {/* Pillar 2: Printables */}
            <article className="chunky press flex flex-col rounded-3xl bg-paper p-6 text-ink shadow-xl">
              <div className="flex items-center justify-between">
                <span className="mono-label rounded-full border-2 border-ink bg-honey px-2.5 py-0.5 text-[10px] font-black text-ink">
                  Instant Download
                </span>
                <Printer className="text-blue" size={24} />
              </div>
              <h3 className="mt-4 font-display text-[24px] font-extrabold leading-tight">
                Free Printable Library
              </h3>
              <p className="mt-2 text-[14.5px] text-ink/75 leading-relaxed">
                Take learning offline. High-resolution sound-box mats, silent-e magic wands, digraph hunts, animal bookmarks, and custom A4 reading trackers.
              </p>
              <ul className="mt-4 space-y-1.5 border-t-2 border-dashed border-ink/20 pt-3 text-[13px] font-semibold text-ink/80">
                <li>✓ Live 7-Day Reading Kit builder</li>
                <li>✓ Multi-sensory Elkonin phoneme mats</li>
                <li>✓ No email gate or child information</li>
              </ul>
              <Link
                href="/printables"
                className="btn chunky-sm mt-6 w-full justify-center bg-honey text-ink text-[14px]"
              >
                Browse All Printables →
              </Link>
            </article>

            {/* Pillar 3: Journals */}
            <article className="chunky press flex flex-col rounded-3xl bg-paper p-6 text-ink shadow-xl">
              <div className="flex items-center justify-between">
                <span className="mono-label rounded-full border-2 border-ink bg-blush px-2.5 py-0.5 text-[10px] font-black text-ink">
                  Keepsakes
                </span>
                <BookMarked className="text-blush" size={24} />
              </div>
              <h3 className="mt-4 font-display text-[24px] font-extrabold leading-tight">
                Bedtime Reading Journals
              </h3>
              <p className="mt-2 text-[14.5px] text-ink/75 leading-relaxed">
                Memory-keeping diaries that foster empathy and vocabulary without feeling like homework. Features the 100-Book Milestone Wall Chart and feelings prompts.
              </p>
              <ul className="mt-4 space-y-1.5 border-t-2 border-dashed border-ink/20 pt-3 text-[13px] font-semibold text-ink/80">
                <li>✓ Bedtime 5-minute connection log</li>
                <li>✓ 100-Book Passport stamp chart</li>
                <li>✓ Social-emotional character reflection</li>
              </ul>
              <Link
                href="/journals"
                className="btn chunky-sm mt-6 w-full justify-center bg-cream text-ink text-[14px] hover:bg-honey"
              >
                View Reading Journals →
              </Link>
            </article>
          </div>
        </div>

        <Wave color="#fff6e8" className="mt-12" />
      </section>

      {/* ───────────── SHELF (CURATED BOOKS) ───────────── */}
      <section id="shelf" className="scroll-mt-20 bg-cream pt-6 pb-14 text-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="mono-label inline-block rotate-2 border-2 border-ink bg-honey px-2.5 py-1 text-ink">
                Curated Books
              </span>
              <h2 className="mt-3 text-[clamp(2rem,5vw,3.2rem)] text-ink">
                Chosen by read-aloud minutes,
                <br />
                not by arbitrary levels.
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="max-w-[40ch] text-[16px] leading-relaxed text-ink/80">
                Every book includes the age band, true aloud length, and three prompts to ask when you close the last page.
              </p>
              <Link href="/books" className="text-[14px] font-bold text-orange underline">
                Open full book finder & catalog →
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {BOOKS.map((b, i) => (
              <article
                key={b.title}
                className="chunky press flex flex-col overflow-hidden rounded-[26px] bg-paper text-ink transition-transform hover:-translate-y-1"
              >
                <div
                  className="relative p-5 text-cream border-b-[2.5px] border-ink"
                  style={{
                    background:
                      i === 0 ? "#ff3b1f" : i === 1 ? "#5b8def" : "#3b6fe8",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="mono-label border-2 border-ink bg-paper px-2 py-0.5 text-[10px] text-ink font-bold">
                      {b.tag}
                    </span>
                    <span className="mono-label bg-ink/30 px-2 py-0.5 rounded-full text-[10px]">
                      {b.age}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[25px] font-extrabold leading-tight text-cream">
                    {b.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-[12px] font-extrabold text-cream/90">
                    <Clock size={13} />
                    <span>{b.minutes} min read-aloud</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[14.5px] leading-relaxed text-ink/80">
                    {b.blurb}
                  </p>

                  <div className="mt-4 border-t-2 border-dashed border-ink/25 pt-3">
                    <div className="mono-label text-[9.5px] text-blue font-bold uppercase">
                      After the last page
                    </div>
                    <p className="story mt-1.5 text-[15px] leading-snug text-ink/85">
                      “{b.questions[0]}”
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-5 border-t border-ink/10">
                    <span className="num font-display text-[24px] font-extrabold">
                      {b.price}
                    </span>
                    <a
                      href="https://bestkidbooks.online/shop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chunky-sm press rounded-full bg-honey px-4 py-2 font-display text-[15px] font-bold"
                    >
                      Buy the book
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* New Book Teaser */}
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[24px] border-[3px] border-dashed border-ink/40 bg-paper p-5 md:flex-row md:items-center">
            <div>
              <div className="mono-label text-[10px] text-orange font-bold">
                {NEW_BOOK.when} · Upcoming Release
              </div>
              <h3 className="mt-1 text-[24px] text-ink">{NEW_BOOK.title}</h3>
              <p className="mt-1 text-[14.5px] text-ink/75">{NEW_BOOK.blurb}</p>
            </div>
            <div className="mono-label flex items-center gap-4 text-[11px] text-ink/70">
              <span>{NEW_BOOK.age}</span>
              <span>{NEW_BOOK.minutes} min</span>
              <span className="font-extrabold text-orange">{NEW_BOOK.price}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── PARENT TOOLS TEASER ───────────── */}
      <section className="bg-paper py-14 border-t-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Free Parent Calculators"
            title="Four calculators that answer what parents actually wonder."
            sub="Every calculation is grounded in published literature — AAP screen-time limits and the million-word gap study by Logan et al. at Ohio State University."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/parent-tools#screen-time",
                n: "01",
                t: "Screen Time Machine",
                d: "Daily recreational screen limits by exact age, from AAP and NHS bands.",
                tone: "bg-orange text-cream",
              },
              {
                href: "/parent-tools#million-words",
                n: "02",
                t: "Million-Word Machine",
                d: "Compute how many words your child hears by kindergarten at your reading rate.",
                tone: "bg-blue text-cream",
              },
              {
                href: "/parent-tools#reading-goal",
                n: "03",
                t: "Reading Goal Planner",
                d: "Turn 10 minutes a day into a realistic books-per-year family target.",
                tone: "bg-blue-soft text-ink",
              },
              {
                href: "/parent-tools#questions",
                n: "04",
                t: "Story Question Bank",
                d: "Age-matched conversation starters for after the story — printable crib sheet.",
                tone: "bg-mint text-ink",
              },
            ].map((c) => (
              <Link
                key={c.n}
                href={c.href}
                className="chunky press flex flex-col rounded-[24px] p-5 bg-cream"
              >
                <span
                  className={`mono-label inline-block w-fit border-2 border-ink px-2 py-1 text-[10px] ${c.tone}`}
                >
                  Tool {c.n}
                </span>
                <h3 className="mt-4 text-[21px] leading-tight">{c.t}</h3>
                <p className="mt-2 text-[14.5px] leading-snug text-ink/75">
                  {c.d}
                </p>
                <span className="mono-label mt-4 text-[11px] text-orange font-bold">
                  Open the tool →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── E-E-A-T TRUST & METHODOLOGY ───────────── */}
      <section id="different" className="scroll-mt-20 bg-cream py-14 border-t-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Our Standards · E-E-A-T"
            title="Six decisions that set this site apart."
            sub="Built from Google publisher safety policies, pediatric screen-time guidance, and the million-word gap study."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {DIFFS.map((d, i) => (
              <article
                key={d.n}
                className="chunky rounded-[24px] p-5 bg-paper"
              >
                <div className="flex items-center justify-between">
                  <span className="num font-display text-[34px] font-extrabold leading-none text-orange">
                    {d.n}
                  </span>
                  <span className="mono-label border-2 border-ink/30 px-1.5 py-0.5 text-[9.5px] text-ink/50">
                    src [{d.src}]
                  </span>
                </div>
                <h3 className="mt-3 text-[22px] leading-[1.05]">{d.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink/78">
                  {d.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/about" className="btn bg-paper text-ink">
              <ShieldCheck size={16} />
              Read Our Full Editorial & Pediatric Guidelines →
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── PARENT COURSES ───────────── */}
      <section id="courses" className="scroll-mt-20 bg-paper py-14 border-t-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Courses · Bite-Sized"
            title="Short courses for parents, not lectures."
            sub="Self-paced options that end with a real routine you can run at bedtime the very same night."
          />

          <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-stretch">
            <div className="chunky overflow-hidden rounded-[28px] bg-cream">
              <div className="p-6 md:p-8">
                <span className="mono-label border-2 border-ink bg-blush px-2.5 py-1 text-[10px] font-bold">
                  Next cohort open now
                </span>
                <h3 className="mt-4 text-[clamp(1.6rem,3.4vw,2.4rem)]">
                  Raising a Reader — the 4-week habit builder
                </h3>
                <p className="mt-2.5 max-w-[56ch] text-[16px] leading-relaxed text-ink/80">
                  Ten minutes a night, four weeks, one printable plan. Built around the research that says the volume of words heard before kindergarten is the single biggest reading predictor you control.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link href="/courses" className="btn bg-orange text-cream">
                    Explore courses →
                  </Link>
                  <span className="mono-label text-[11px] text-ink/65 font-bold">
                    $49 · 4 weeks · self-paced
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {COURSES.slice(1).map((c, i) => (
                <div
                  key={c.title}
                  className="chunky flex-1 rounded-[26px] p-5"
                  style={{ background: i === 0 ? "#5b8def" : "#ff8fb1" }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="mono-label border-2 border-ink bg-paper px-2 py-1 text-[10px] font-bold text-ink">
                      {c.tag}
                    </span>
                    <span className="num font-display text-[28px] font-extrabold leading-none text-ink">
                      {c.price}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[22px] leading-tight text-ink">{c.title}</h3>
                  <p className="mono-label mt-1 text-[10px] text-ink/65 font-bold">
                    {c.weeks} · {c.who}
                  </p>
                  <p className="mt-2 text-[14px] leading-snug text-ink/85">
                    {c.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── JOIN NEWSLETTER ───────────── */}
      <section className="bg-blush py-16 border-t-[3px] border-ink">
        <div className="mx-auto max-w-[820px] px-4 text-center md:px-8">
          <div className="mx-auto mb-4 flex justify-center">
            <div className="chunky rounded-full bg-cream p-2 bob">
              <Logo className="h-16 w-16" />
            </div>
          </div>
          <span className="mono-label inline-block rotate-2 border-2 border-ink bg-paper px-2.5 py-1">
            One email a week
          </span>
          <h2 className="mt-4 text-[clamp(2rem,5.4vw,3.4rem)]">
            Get the read-aloud crib sheet — free.
          </h2>
          <p className="mx-auto mt-3 max-w-[54ch] text-[17px] leading-relaxed text-ink/85">
            Five questions, printed and stuck on the fridge, that work on any picture book in the house. Plus one new book pick each week.
          </p>
          <div className="mt-6 text-left">
            <JoinForm
              kind="newsletter"
              source="home-cribsheet"
              cta="Send the crib sheet"
            />
          </div>
          <p className="mono-label mt-4 text-[10px] text-ink/60">
            We never collect data from children · unsubscribe in one click
          </p>
        </div>
      </section>

      {/* ───────────── SOURCES / E-E-A-T FOOTNOTE ───────────── */}
      <section className="border-t-[3px] border-ink bg-cream">
        <div className="mx-auto max-w-[1240px] px-4 py-10 md:px-8">
          <div className="mono-label mb-4 text-[10.5px] text-ink/55 font-extrabold uppercase">
            Sources & Research Citations — Every claim verified
          </div>
          <ol className="grid gap-3 md:grid-cols-2">
            {SOURCES.map((s) => (
              <li
                key={s.id}
                className="grid grid-cols-[28px_minmax(0,1fr)] gap-2 border-t-2 border-dashed border-ink/20 pt-2.5"
              >
                <span className="text-[13px] font-extrabold text-orange">
                  [{s.id}]
                </span>
                <span className="text-[13.5px] leading-snug text-ink/80">
                  {s.ref}
                  <span className="mono-label ml-2 text-[9.5px] text-ink/50">
                    {s.org}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </>
  );
}
