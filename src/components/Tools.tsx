"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BANDS, QUESTION_BANK, WORDS } from "@/lib/content";

/* fires once per tool per session — no PII leaves the browser */
function useTouch(tool: string) {
  const sent = useRef(false);
  return () => {
    if (sent.current) return;
    sent.current = true;
    fetch("/api/tools", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tool }),
    }).catch(() => {});
  };
}

function CountUp({ value, dur = 700 }: { value: number; dur?: number }) {
  const [n, setN] = useState(value);
  const from = useRef(value);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(value);
      from.current = value;
      return;
    }
    const start = performance.now();
    const a = from.current;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setN(Math.round(a + (value - a) * e));
      if (p < 1) raf = requestAnimationFrame(tick);
      else from.current = value;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, dur]);
  return <>{n.toLocaleString()}</>;
}

function Shell({
  id,
  n,
  title,
  blurb,
  tone,
  children,
  right,
  single = false,
}: {
  id: string;
  n: string;
  title: string;
  blurb: string;
  tone: string;
  children: React.ReactNode;
  right?: React.ReactNode;
  single?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="chunky overflow-hidden rounded-[30px] bg-paper">
        <div className={`flex flex-wrap items-center gap-4 border-b-[3px] border-ink px-5 py-4 ${tone}`}>
          <span className="mono-label border-2 border-ink bg-paper px-2 py-1 text-[10px]">
            Tool {n}
          </span>
          <h2 className="text-[clamp(1.5rem,3.4vw,2.3rem)]">{title}</h2>
          <div className="ml-auto">{right}</div>
        </div>
        <div className="p-5 md:p-7">
          <p className="max-w-[62ch] text-[16px] leading-relaxed text-ink/80">
            {blurb}
          </p>
          <div
            className={`mt-6 grid gap-7 ${
              single ? "" : "lg:grid-cols-2 lg:items-start"
            }`}
          >
            {single ? (
              children
            ) : (
              <div style={{ display: "contents" }}>{children}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
  tone = "#ff3b1f",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
  tone?: string;
}) {
  return (
    <div className="mb-5">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label className="mono-label text-[10.5px] text-ink/60">{label}</label>
        <span
          className="num font-display text-[24px] font-extrabold leading-none"
          style={{ color: tone }}
        >
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

/* ══════════════════ 01 · SCREEN TIME ══════════════════ */
function ScreenTime() {
  const [age, setAge] = useState(4);
  const [week, setWeek] = useState(120);
  const [wknd, setWknd] = useState(180);
  const touch = useTouch("screen-time");

  const band = BANDS.find((b) => age >= b.min && age <= b.max) ?? BANDS[BANDS.length - 1];
  const rec = band.minutes;
  const weeklyActual = week * 5 + wknd * 2;
  const weeklyRec = rec * 7;
  const over = weeklyActual - weeklyRec;
  const booksWorth = Math.max(0, Math.round(Math.abs(over) / 8 / 7 * 7));

  const ageLabel = age < 2 ? `${Math.round(age * 12)} months` : `${age} years`;

  return (
    <Shell
      id="screen-time"
      n="01"
      title="Screen Time Machine"
      tone="bg-orange text-cream"
      blurb="Pick your child's age and what a typical day actually looks like. The recommendation comes from the AAP and NHS age bands — the same table paediatricians quote — and the week below shows the gap in colour."
      right={
        <span className="mono-label hidden border-2 border-ink bg-paper px-2 py-1 text-[9.5px] text-ink md:inline">
          AAP · NHS
        </span>
      }
    >
      <div onPointerDown={touch} onKeyDown={touch}>
        <Slider
          label="Child's age"
          value={age}
          min={0}
          max={18}
          step={0.5}
          onChange={setAge}
          display={ageLabel}
        />
        <Slider
          label="Typical school day"
          value={week}
          min={0}
          max={360}
          step={10}
          onChange={setWeek}
          display={`${week} min`}
          tone="#3b6fe8"
        />
        <Slider
          label="Typical weekend day"
          value={wknd}
          min={0}
          max={420}
          step={10}
          onChange={setWknd}
          display={`${wknd} min`}
          tone="#2a54c7"
        />
      </div>

      {/* ticket */}
      <div className="chunky rounded-[22px] bg-cream">
        <div className="perf h-4 w-full" />
        <div className="px-5 pb-5">
          <div className="mono-label text-[10px] text-ink/55">
            Recommended for {band.label}
          </div>
          <div className="mt-1 flex flex-wrap items-end gap-3">
            <span className="num font-display text-[64px] font-extrabold leading-[0.85] text-blue">
              {rec}
            </span>
            <span className="font-display pb-2 text-[22px] font-bold">
              minutes / day
            </span>
          </div>
          <p className="mt-2 text-[15px] leading-snug text-ink/80">{band.rule}</p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border-[2.5px] border-ink bg-paper px-3 py-2">
              <div className="mono-label text-[9.5px] text-ink/55">Your week</div>
              <div className="num font-display text-[22px] font-extrabold">
                {weeklyActual.toLocaleString()} min
              </div>
            </div>
            <div className="rounded-xl border-[2.5px] border-ink bg-paper px-3 py-2">
              <div className="mono-label text-[9.5px] text-ink/55">Guideline</div>
              <div className="num font-display text-[22px] font-extrabold text-blue">
                {weeklyRec.toLocaleString()} min
              </div>
            </div>
          </div>

          {/* week strip */}
          <div className="mt-5">
            <div className="mono-label mb-2 text-[9.5px] text-ink/55">
              Mon–Sun · dashed line = guideline
            </div>
            <div className="relative flex h-[150px] items-end gap-2 border-b-[3px] border-ink pb-0">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => {
                const actual = i < 5 ? week : wknd;
                const pct = Math.min(100, (actual / 360) * 100);
                const ok = actual <= rec;
                return (
                  <div key={i} className="relative flex h-full flex-1 items-end">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${Math.max(pct, 1)}%` }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="w-full rounded-t-md border-[2.5px] border-ink"
                      style={{ background: ok ? "#6ecf9b" : "#ff3b1f" }}
                    />
                    <div
                      className="absolute inset-x-0 border-t-[3px] border-dashed border-blue"
                      style={{ bottom: `${(rec / 360) * 100}%` }}
                    />
                    <span className="mono-label absolute -bottom-6 left-0 right-0 text-center text-[9.5px] text-ink/55">
                      {d}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="h-6" />
          </div>

          <AnimatePresence>
            <motion.p
              key={over}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 rounded-xl border-[2.5px] border-ink px-3 py-2 text-[15px] font-semibold leading-snug"
              style={{ background: over > 0 ? "#ffe5e0" : "#e5f8ef" }}
            >
              {over > 0
                ? `That's ${over.toLocaleString()} minutes over the guideline each week. Hand back ${Math.max(30, over)} of them and you've made time for ${booksWorth || 4} more books.`
                : `You're ${Math.abs(over).toLocaleString()} minutes under the guideline every week. That's room for a story most nights.`}
            </motion.p>
          </AnimatePresence>
          <p className="mono-label mt-3 text-[9.5px] leading-relaxed text-ink/45">
            Source [3] — AAP / NHS age bands. Guidelines, not a diagnosis.
          </p>
        </div>
        <div className="perf h-4 w-full rotate-180" />
      </div>
    </Shell>
  );
}

/* ══════════════════ 02 · MILLION WORDS ══════════════════ */
function MillionWords() {
  const [books, setBooks] = useState(1);
  const [age, setAge] = useState(1);
  const touch = useTouch("million-words");

  const under3 = Math.max(0, 3 - age);
  const over3 = Math.max(0, 5 - Math.max(age, 3));
  const perYear = under3 * WORDS.board + over3 * WORDS.picture;
  const total = Math.round(books * 365 * perYear);

  const rows = [
    { k: "Never read to", v: WORDS.never, tone: "#7a7168" },
    { k: "1 book a day, from birth", v: WORDS.byKinder1, tone: "#5b8def" },
    { k: "5 books a day, from birth", v: WORDS.byKinder5, tone: "#3b6fe8" },
    { k: "Your child, starting today", v: total, tone: "#ff3b1f" },
  ];
  const max = Math.max(...rows.map((r) => r.v), 1);

  return (
    <Shell
      id="million-words"
      n="02"
      title="Million-Word Machine"
      tone="bg-blue text-cream"
      blurb="Ohio State researchers counted the words in 60 popular children's books and worked out what reading does over five years. Move the sliders and watch your child's line move against the study's benchmarks."
      right={
        <span className="mono-label hidden border-2 border-ink bg-paper px-2 py-1 text-[9.5px] text-ink md:inline">
          Logan et al.
        </span>
      }
    >
      <div onPointerDown={touch} onKeyDown={touch}>
        <Slider
          label="Books read aloud per day"
          value={books}
          min={0}
          max={5}
          step={0.5}
          onChange={setBooks}
          display={books === 0 ? "none" : books % 1 === 0 ? `${books}` : books.toFixed(1)}
        />
        <Slider
          label="Child's age today"
          value={age}
          min={0}
          max={5}
          step={0.5}
          onChange={setAge}
          display={age < 2 ? `${Math.round(age * 12)} mo` : `${age} yrs`}
          tone="#3b6fe8"
        />
      </div>

      <div className="chunky rounded-[22px] bg-cream px-5 py-5">
        <div className="mono-label text-[10px] text-ink/55">
          Words heard by age 5, starting today
        </div>
        <div className="num font-display text-[clamp(2.6rem,9vw,4.2rem)] font-extrabold leading-[0.85] text-orange">
          <CountUp value={total} />
        </div>
        <p className="mt-2 max-w-[50ch] text-[15px] leading-snug text-ink/80">
          {books === 0
            ? "No read-aloud days land at about 4,662 words by kindergarten — the study's baseline."
            : `${books} book${books === 1 ? "" : "s"} a day at roughly ${WORDS.board}–${WORDS.picture} words each. That is ${Math.max(1, Math.round(total / WORDS.byKinder1 * 10) / 10)}× the one-book-a-day benchmark.`}
        </p>

        <div className="mt-5 space-y-3">
          {rows.map((r, i) => (
            <div key={r.k}>
              <div className="mb-1 flex items-baseline justify-between gap-3">
                <span className="text-[13.5px] font-semibold">{r.k}</span>
                <span className="num text-[13.5px] font-bold" style={{ color: r.tone }}>
                  {r.v.toLocaleString()}
                </span>
              </div>
              <div className="h-5 overflow-hidden rounded-full border-[2.5px] border-ink bg-paper">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.max(1.5, (r.v / max) * 100)}%` }}
                  transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                  style={{ background: r.tone }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mono-label mt-4 text-[9.5px] leading-relaxed text-ink/45">
          Source [4] — board books average 140 words, picture books 228.
          Benchmarks assume reading from birth; yours starts today.
        </p>
      </div>
    </Shell>
  );
}

/* ══════════════════ 03 · READING GOAL ══════════════════ */
const MIN_PER_BOOK: { max: number; label: string; min: number }[] = [
  { max: 3, label: "Ages 2–3", min: 6 },
  { max: 5, label: "Ages 4–5", min: 9 },
  { max: 7, label: "Ages 6–7", min: 14 },
  { max: 10, label: "Ages 8–10", min: 25 },
  { max: 99, label: "Ages 11+", min: 35 },
];

function ReadingGoal() {
  const [mins, setMins] = useState(15);
  const [bandIdx, setBandIdx] = useState(1);
  const touch = useTouch("reading-goal");
  const band = MIN_PER_BOOK[bandIdx];

  const perMonth = Math.round((mins * 30) / band.min);
  const perYear = Math.round((mins * 365) / band.min);
  const minutesYear = mins * 365;

  return (
    <Shell
      id="reading-goal"
      n="03"
      title="Reading Goal Planner"
      tone="bg-blue-soft text-ink"
      blurb="Minutes beat titles. Tell us how long you can realistically read tonight and we'll turn it into books a month, books a year and the shelf it adds up to."
      right={
        <span className="mono-label hidden border-2 border-ink bg-paper px-2 py-1 text-[9.5px] text-ink md:inline">
          By read-aloud length
        </span>
      }
    >
      <div onPointerDown={touch} onKeyDown={touch}>
        <Slider
          label="Minutes you can read tonight"
          value={mins}
          min={5}
          max={45}
          step={1}
          onChange={setMins}
          display={`${mins} min`}
          tone="#2a54c7"
        />
        <div className="mb-5">
          <div className="mono-label mb-2 text-[10.5px] text-ink/60">
            Who's listening
          </div>
          <div className="flex flex-wrap gap-2">
            {MIN_PER_BOOK.map((b, i) => (
              <button
                key={b.label}
                onClick={() => setBandIdx(i)}
                className="rounded-full border-[2.5px] border-ink px-3 py-1.5 text-[14px] font-bold transition-colors"
                style={{
                  background: i === bandIdx ? "#5b8def" : "#fffdf7",
                  color: i === bandIdx ? "#fffdf7" : "#241c17",
                }}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="chunky rounded-[22px] bg-cream px-5 py-5">
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { v: perMonth, l: "books / month", c: "#3b6fe8" },
            { v: perYear, l: "books / year", c: "#d92e16" },
            { v: minutesYear, l: "minutes / year", c: "#2a54c7" },
          ].map((x) => (
            <div key={x.l} className="rounded-xl border-[2.5px] border-ink bg-paper px-2 py-3">
              <div className="num font-display text-[clamp(1.4rem,4vw,2.1rem)] font-extrabold leading-none" style={{ color: x.c }}>
                <CountUp value={x.v} />
              </div>
              <div className="mono-label mt-1.5 text-[9px] text-ink/60">{x.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          {Array.from({ length: Math.min(20, Math.ceil(perMonth)) }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="h-9 w-[9px] border-2 border-ink"
              style={{
                background: ["#ff3b1f", "#ffc531", "#5b8def", "#3b6fe8", "#6ecf9b"][i % 5],
                transformOrigin: "bottom",
              }}
            />
          ))}
        </div>

        <p className="mt-4 text-[15px] leading-snug text-ink/80">
          At <strong>{mins} minutes</strong> a night for a child in{" "}
          <strong>{band.label.toLowerCase()}</strong> — about {band.min} minutes a
          book — you'll finish roughly <strong>{perYear} books</strong> this year.
          {" "}
          {perYear >= 100
            ? "That's a serious little library."
            : perYear >= 40
              ? "That's a healthy year of reading."
              : "Start here; add two minutes a week and watch it move."}
        </p>
        <p className="mono-label mt-3 text-[9.5px] text-ink/45">
          Read-aloud lengths are our own shelf measurements — the data point
          nobody else publishes.
        </p>
      </div>
    </Shell>
  );
}

/* ══════════════════ 04 · QUESTION BANK ══════════════════ */
const BAND_KEYS = ["2-3", "4-5", "6-7", "8-10"] as const;

function QuestionBank() {
  const [band, setBand] = useState<string>("4-5");
  const [seed, setSeed] = useState(0);
  const touch = useTouch("questions");

  const group = QUESTION_BANK[band][0];
  const items = [...group.items];
  // deterministic shuffle so SSR/CSR match
  const shift = seed % items.length;
  const ordered = [...items.slice(shift), ...items.slice(0, shift)];

  return (
    <Shell
      id="questions"
      n="04"
      title="Story Question Bank"
      tone="bg-mint text-ink"
      blurb="The hardest part of reading aloud is what to say at the end. Pick an age, take the five prompts, and use them on any book in the house — tonight, without a worksheet."
      single
      right={
        <span className="mono-label hidden border-2 border-ink bg-paper px-2 py-1 text-[9.5px] text-ink md:inline">
          Printable
        </span>
      }
    >
      <div onKeyDown={touch}>
        <div className="mb-4 flex flex-wrap gap-2">
          {BAND_KEYS.map((k) => (
            <button
              key={k}
              onClick={() => {
                setBand(k);
                touch();
              }}
              className="rounded-full border-[2.5px] border-ink px-3.5 py-1.5 text-[14px] font-bold transition-colors"
              style={{
                background: band === k ? "#6ecf9b" : "#fffdf7",
              }}
            >
              Ages {k.replace("-", "–")}
            </button>
          ))}
        </div>

        <ol className="space-y-2.5">
          {ordered.map((q, i) => (
            <motion.li
              key={q}
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-3 rounded-2xl border-[2.5px] border-ink bg-cream px-4 py-3"
            >
              <span className="num font-display text-[20px] font-extrabold text-orange">
                {i + 1}
              </span>
              <span className="text-[15.5px] leading-snug">{q}</span>
            </motion.li>
          ))}
        </ol>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={() => {
              setSeed((s) => s + 1);
              touch();
            }}
            className="btn bg-honey"
          >
            Shuffle the five
          </button>
          <button
            onClick={() => window.print()}
            className="btn bg-paper"
            aria-label="Print these questions"
          >
            Print
          </button>
        </div>
        <p className="mono-label mt-4 text-[9.5px] text-ink/45">
          {group.label} · ages {band.replace("-", "–")} · source [6]
        </p>
      </div>
    </Shell>
  );
}

/* ══════════════════ counters + page body ══════════════════ */
export function Tools() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/tools")
      .then((r) => (r.ok ? r.json() : { tools: {} }))
      .then((d) => setCounts(d.tools ?? {}))
      .catch(() => {});
  }, []);

  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <div className="mx-auto max-w-[1220px] px-4 md:px-8">
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <span className="mono-label border-2 border-ink bg-honey px-2.5 py-1">
          Free · no login · nothing stored about your child
        </span>
        <span className="num text-[14px] font-semibold text-ink/65">
          {total.toLocaleString()} calculations run by parents on this site
        </span>
      </div>

      <div className="space-y-10">
        <ScreenTime />
        <MillionWords />
        <ReadingGoal />
        <QuestionBank />
      </div>
    </div>
  );
}
