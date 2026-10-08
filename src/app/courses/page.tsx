import { Footer, JoinForm, Nav, SectionHead, Sticker, Wave } from "@/components/ui";
import { COURSES, SOURCES } from "@/lib/content";

export const metadata = {
  title: "Courses for parents — Raising a Reader, Phonics, Five Questions",
  description:
    "Short, practical courses for parents: a four-week read-aloud habit builder, a six-week phonics course for the kitchen table, and a free 45-minute workshop on asking better questions after any book.",
};

export default function CoursesPage() {
  return (
    <>
      <Nav />

      <section className="bg-blue-soft">
        <div className="mx-auto grid max-w-[1220px] items-end gap-7 px-4 pb-4 pt-10 md:px-8 md:pt-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-1 text-[12px] font-extrabold text-ink shadow-[2px_2px_0px_0px_#181a20]">
                <img src="/images/reading-bear.png" alt="" className="h-5 w-5 object-contain" />
                <span>BEST KidSbooks Shop</span>
              </span>
              <span className="mono-label inline-block -rotate-2 border-2 border-ink bg-paper px-2.5 py-1">
                Courses · start free
              </span>
            </div>
            <h1 className="mt-4 text-[clamp(2.3rem,7vw,4.6rem)]">
              Learn it once,
              <br />
              use it every
              <br />
              <span className="text-cream">night.</span>
            </h1>
          </div>
          <div>
            <p className="text-[17px] leading-relaxed text-ink/85">
              Three courses, all built around a single idea: the routine has to
              survive a tired Tuesday. Every module ends with something you can
              do at bedtime the same day — no theory without a rehearsal.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#all" className="btn bg-orange text-cream">
                See the courses →
              </a>
              <span className="mono-label self-center border-2 border-ink bg-paper px-2.5 py-2">
                Next cohort: 14 April
              </span>
            </div>
          </div>
        </div>
        <Wave color="#fff6e8" />
      </section>

      <section id="all" className="bg-cream pb-14 pt-4">
        <div className="mx-auto max-w-[1220px] px-4 md:px-8">
          <SectionHead
            kicker="Three ways in"
            title="Pick by the age of the child, not by the price."
            sub="The free workshop is a genuinely complete 45 minutes — take it even if you never buy anything. It is how most parents find us."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {COURSES.map((c, i) => (
              <article
                key={c.title}
                className={`chunky flex flex-col rounded-[28px] p-6 ${c.tint}`}
                style={{ transform: `rotate(${i === 1 ? 1.2 : i === 0 ? -1 : 0.8}deg)` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="mono-label border-2 border-ink bg-paper px-2 py-1 text-[10px]">
                    {c.tag}
                  </span>
                  <span className="num font-display text-[40px] font-extrabold leading-none">
                    {c.price}
                  </span>
                </div>

                <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.1rem)] leading-[1.02]">
                  {c.title}
                </h2>
                <div className="mono-label mt-2 text-[10px] text-ink/65">
                  {c.weeks} · {c.who}
                </div>
                <p className="mt-3 text-[15.5px] leading-snug text-ink/85">
                  {c.blurb}
                </p>

                <ol className="mt-5 space-y-2.5 border-t-2 border-dashed border-ink/30 pt-4">
                  {c.modules.map((m, j) => (
                    <li key={m} className="flex gap-3 text-[14.5px] leading-snug">
                      <span className="num shrink-0 font-display text-[16px] font-extrabold text-ink/55">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-auto pt-6">
                  <a
                    href="#join"
                    className={`btn w-full justify-center ${
                      c.price === "$0" ? "bg-paper" : "bg-ink text-cream"
                    }`}
                  >
                    {c.price === "$0" ? "Watch free tonight" : `Enrol — ${c.price}`}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              {
                h: "Self-paced by default",
                p: "Cohorts open four times a year. Miss one and you keep the recordings — nobody loses a payment to a calendar.",
              },
              {
                h: "Built with teachers",
                p: "Phonics modules follow the stages used in UK classrooms, so what you practise at home matches what happens at school.",
              },
              {
                h: "Refund in 14 days",
                p: "If the routine doesn't fit your week, say so and we refund it. The routine is the product; if it doesn't work, we didn't do our job.",
              },
            ].map((x, i) => (
              <div key={x.h} className="chunky rounded-[22px] bg-paper p-5">
                <Sticker rotate={i === 1 ? 3 : -3} tone={i === 0 ? "bg-honey" : i === 1 ? "bg-blush" : "bg-mint"}>
                  {x.h}
                </Sticker>
                <p className="mt-3 text-[14.5px] leading-snug text-ink/80">{x.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Wave color="#ff8fb1" />

      <section id="join" className="bg-blush pb-16 pt-4">
        <div className="mx-auto max-w-[780px] px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-[clamp(2rem,5.4vw,3.2rem)]">
              Get the syllabus, and the free workshop.
            </h2>
            <p className="mx-auto mt-3 max-w-[52ch] text-[17px] leading-relaxed text-ink/85">
              One email with the full module list, sample lessons and the
              on-demand workshop link. Then one email a week — never more.
            </p>
          </div>
          <div className="mt-6">
            <JoinForm kind="course" source="courses-syllabus" cta="Send the syllabus" />
          </div>

          <ol className="mt-8 grid gap-2.5">
            {SOURCES.filter((s) => ["4", "6", "7", "8"].includes(s.id)).map((s) => (
              <li
                key={s.id}
                className="grid grid-cols-[28px_minmax(0,1fr)] gap-2 border-t-2 border-dashed border-ink/25 pt-2"
              >
                <span className="text-[13px] font-extrabold text-ink/70">
                  [{s.id}]
                </span>
                <span className="text-[13.5px] leading-snug text-ink/80">
                  {s.ref}
                  <span className="mono-label ml-2 text-[9.5px] text-ink/55">
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
