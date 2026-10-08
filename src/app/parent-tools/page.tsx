import { AdSlot, Footer, JoinForm, Nav, Wave } from "@/components/ui";
import { Tools } from "@/components/Tools";
import { AIReadingCoach } from "@/components/AIReadingCoach";
import { SOURCES } from "@/lib/content";

export const metadata = {
  title: "Free parent tools — AI Reading Coach, screen time, words, reading goals",
  description:
    "Free AI early literacy coach and calculators for parents: screen time minutes by age from AAP guidance, the million-word gap calculator, and printable question banks.",
};

export default function ParentToolsPage() {
  return (
    <>
      <Nav />

      <section className="bg-honey">
        <div className="mx-auto max-w-[1220px] px-4 pb-6 pt-9 md:px-8 md:pt-12">
          <div className="grid items-end gap-6 md:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-1 text-[12px] font-extrabold text-ink shadow-[2px_2px_0px_0px_#181a20]">
                  <img src="/images/reading-bear.png" alt="BEST KidSbooks Reading Bear Mascot" className="h-5 w-5 object-contain" />
                  <span>BEST KidSbooks Shop</span>
                </span>
                <span className="mono-label inline-block -rotate-2 border-2 border-ink bg-paper px-2.5 py-1">
                  Parent tools
                </span>
              </div>
              <h1 className="mt-4 text-[clamp(2.3rem,7vw,4.6rem)]">
                AI reading coach
                <br />
                & four numbers
                <br />
                <span className="text-orange-ink">every parent should know.</span>
              </h1>
            </div>
            <p className="text-[17px] leading-relaxed text-ink/85">
              Ask our LLM-powered reading coach for custom routines, or explore our evidence-based AAP & NHS screen-time calculators. Zero sign-up, zero email gates, zero child data stored.
            </p>
          </div>
        </div>
        <Wave color="#fffdf9" />
      </section>

      <main className="bg-paper pt-8">
        <div className="mx-auto max-w-[1220px] px-4 md:px-8 mb-12">
          <AIReadingCoach />
        </div>

        <Tools />
        <div className="mx-auto max-w-[1220px] px-4 md:px-8">
          <AdSlot slot="bestkidbooks-tools" label="Advertisement · adults only" />
        </div>
        <Wave color="#fff6e8" />
      </main>

      <section className="bg-cream pb-14 pt-4">
        <div className="mx-auto max-w-[820px] px-4 md:px-8">
          <div className="text-center">
            <span className="mono-label inline-block rotate-2 border-2 border-ink bg-blush px-2.5 py-1">
              Take it to bedtime
            </span>
            <h2 className="mt-4 text-[clamp(1.9rem,5vw,3rem)]">
              Get the numbers printed.
            </h2>
            <p className="mx-auto mt-3 max-w-[54ch] text-[17px] leading-relaxed text-ink/85">
              We'll send the read-aloud crib sheet — five questions that work on
              any picture book — plus a one-page planner so the numbers survive
              the week.
            </p>
          </div>
          <div className="mt-6">
            <JoinForm kind="newsletter" source="tools-cribsheet" cta="Send the crib sheet" />
          </div>

          <div className="mt-10">
            <div className="mono-label mb-3 text-[10.5px] text-ink/55">
              Where these numbers come from
            </div>
            <ol className="grid gap-2.5">
              {SOURCES.filter((s) => ["1", "3", "4", "6"].includes(s.id)).map((s) => (
                <li
                  key={s.id}
                  className="grid grid-cols-[28px_minmax(0,1fr)] gap-2 border-t-2 border-dashed border-ink/20 pt-2"
                >
                  <span className="text-[13px] font-extrabold text-orange-ink">
                    [{s.id}]
                  </span>
                  <span className="text-[13.5px] leading-snug">
                    {s.ref}
                    <span className="mono-label ml-2 text-[9.5px] text-ink/50">
                      {s.org}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="story mt-4 text-[15.5px] text-ink/70">
              These are guidance ranges for families, not medical advice. If
              something about your child's development worries you, their
              paediatrician beats any calculator — including ours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
