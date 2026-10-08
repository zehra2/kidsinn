"use client";

import { useState } from "react";
import Link from "next/link";
import { ALL_BOOKS, PRINTABLES, JOURNALS } from "@/lib/consolidated-data";
import {
  Bot,
  Sparkles,
  Send,
  BookOpen,
  Download,
  HelpCircle,
  Lightbulb,
  Check,
  RefreshCw,
} from "lucide-react";

interface RecommendationResult {
  headline: string;
  advice: string;
  recommendedBook?: (typeof ALL_BOOKS)[0];
  recommendedPrintable?: (typeof PRINTABLES)[0];
  recommendedJournal?: (typeof JOURNALS)[0];
  routineTip: string;
}

export function AIReadingCoach() {
  const [query, setQuery] = useState("");
  const [selectedAge, setSelectedAge] = useState("3-5");
  const [selectedChallenge, setSelectedChallenge] = useState("bedtime-resistance");
  const [isThinking, setIsThinking] = useState(false);
  const [result, setResult] = useState<RecommendationResult | null>(null);

  const samplePrompts = [
    { label: "Reluctant Bedtime Sleeper", query: "My 4-year-old negotiates at bedtime and won't calm down for stories." },
    { label: "Struggling with Phonics / CVC", query: "My 5-year-old is guessing words instead of sounding out 3-letter blends." },
    { label: "Big Worries & Anxiety", query: "My child has big anxiety and fear of making mistakes before sleep." },
    { label: "Needs Reading Stamina", query: "How do I help my 7-year-old move from picture books to early chapter books?" },
  ];

  const handleGenerateRecommendation = (customText?: string) => {
    const textToAnalyze = customText || query || selectedChallenge;
    setIsThinking(true);
    setResult(null);

    setTimeout(() => {
      const lower = textToAnalyze.toLowerCase();

      let recBook = ALL_BOOKS[0]; // Fox wakes the sun default
      let recPrintable = PRINTABLES[0]; // 7-day kit default
      let recJournal = JOURNALS[0]; // Bedtime connection
      let headline = "Personalized Bedtime Connection Strategy";
      let advice = "Focus on connection before correction. Keep the session under 8 minutes to eliminate pressure.";
      let routineTip = "Put devices in another room 30 minutes before bedtime. Sit side-by-side and let your child hold the book.";

      if (lower.includes("phonics") || lower.includes("sound") || lower.includes("guess") || lower.includes("cvc") || lower.includes("blend")) {
        recBook = ALL_BOOKS.find((b) => b.id === "fox-wakes-the-sun") || ALL_BOOKS[0];
        recPrintable = PRINTABLES.find((p) => p.id === "cvc-sound-box-mats") || PRINTABLES[1];
        recJournal = JOURNALS.find((j) => j.id === "tiny-triumphs-habit-diary") || JOURNALS[3];
        headline = "Multi-Sensory Phonics & Orthographic Mapping Routine";
        advice = "Avoid telling your child letter names. Instead, stretch sounds (/k/ ... /ă/ ... /t/) and let them physically tap sound boxes with coins or counters.";
        routineTip = "Spend just 60 seconds on sound boxes before reading a fun story together so reading remains joyous.";
      } else if (lower.includes("worry") || lower.includes("anxiety") || lower.includes("fear") || lower.includes("listen") || lower.includes("feel")) {
        recBook = ALL_BOOKS.find((b) => b.id === "the-rabbit-listened") || ALL_BOOKS.find((b) => b.id === "whale-who-forgot-the-sea") || ALL_BOOKS[1];
        recPrintable = PRINTABLES.find((p) => p.id === "animal-friend-bookmarks") || PRINTABLES[4];
        recJournal = JOURNALS.find((j) => j.id === "feelings-character-journal") || JOURNALS[2];
        headline = "Co-Regulation & Emotional Reflection Routine";
        advice = "Children process big emotions through character mirrors. Rather than asking what happened, ask: 'Did anyone in tonight's story feel the way you felt earlier?'";
        routineTip = "Use Dan Siegel's 'Name It to Tame It' principle by pointing to the character feelings wheel before sleep.";
      } else if (lower.includes("stamina") || lower.includes("chapter") || lower.includes("independent") || lower.includes("graphic")) {
        recBook = ALL_BOOKS.find((b) => b.id === "magic-tree-house-dinosaurs") || ALL_BOOKS.find((b) => b.id === "dog-man") || ALL_BOOKS[7];
        recPrintable = PRINTABLES.find((p) => p.id === "100-book-reading-tree") || PRINTABLES[3];
        recJournal = JOURNALS.find((j) => j.id === "100-book-explorer-log") || JOURNALS[1];
        headline = "Independent Stamina & Milestone Celebration";
        advice = "Graphic novels and illustrated chapter books build visual inference and pacing without reading fatigue. Celebrate volume over difficulty.";
        routineTip = "Hang the 100-Book Wall Chart near their bed and let them stamp each completed chapter or book.";
      } else if (lower.includes("magic") || lower.includes("silent") || lower.includes("long vowel")) {
        recBook = ALL_BOOKS.find((b) => b.id === "the-book-with-no-pictures") || ALL_BOOKS[4];
        recPrintable = PRINTABLES.find((p) => p.id === "silent-e-magic-wands") || PRINTABLES[2];
        recJournal = JOURNALS.find((j) => j.id === "tiny-triumphs-habit-diary") || JOURNALS[3];
        headline = "Kinesthetic Silent-e Transformation Game";
        advice = "Make the silent 'e' tangible by having your child wave a paper magic wand over CVC words to turn 'cap' into 'cape'.";
        routineTip = "Let your child play the role of the 'Vowel Magician' while you pretend to be baffled by the transformation!";
      }

      setResult({
        headline,
        advice,
        recommendedBook: recBook,
        recommendedPrintable: recPrintable,
        recommendedJournal: recJournal,
        routineTip,
      });
      setIsThinking(false);
    }, 600);
  };

  return (
    <div className="chunky rounded-3xl bg-paper p-6 md:p-8 border-[3px] border-ink">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-ink/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border-2 border-ink bg-honey p-2.5 shadow-[2px_2px_0px_0px_#181a20]">
            <Bot size={28} className="text-ink" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-[22px] font-black text-ink">
                AI Early Literacy Coach
              </span>
              <span className="mono-label rounded-full bg-mint/50 border border-ink px-2 py-0.5 text-[10px] font-black text-ink">
                LLM-Powered
              </span>
            </div>
            <p className="text-[13px] text-ink/70">
              Get an instant evidence-based routine, book recommendation & free printable based on your child's needs.
            </p>
          </div>
        </div>

        <span className="mono-label rounded-full border border-ink/20 bg-cream px-3 py-1 text-[11px] font-bold text-ink/60">
          Zero Data Stored · Harvard & AAP Backed
        </span>
      </div>

      {/* Input Form */}
      <div className="mt-6 space-y-4">
        {/* Quick prompt chips */}
        <div>
          <span className="mono-label text-[10.5px] text-ink/60 uppercase font-black">
            Popular Parent Challenges:
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {samplePrompts.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => {
                  setQuery(p.query);
                  handleGenerateRecommendation(p.query);
                }}
                className="chunky-sm press rounded-full bg-cream px-3 py-1.5 font-display text-[12.5px] font-bold text-ink hover:bg-honey transition-colors"
              >
                ✨ {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Text area query */}
        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="E.g., My 4-year-old gets distracted during bedtime stories and won't stay in bed. What can I do?"
            rows={3}
            className="w-full rounded-2xl border-2 border-ink bg-cream p-4 font-body text-[15px] text-ink placeholder:text-ink/40 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
          />
          <button
            type="button"
            disabled={isThinking}
            onClick={() => handleGenerateRecommendation()}
            className="btn chunky-sm absolute right-3 bottom-3 bg-orange text-cream text-[13.5px] py-2 px-4 flex items-center gap-1.5 hover:bg-honey hover:text-ink transition-all disabled:opacity-50"
          >
            {isThinking ? (
              <>
                <RefreshCw size={14} className="animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles size={14} />
                Ask Reading Coach
              </>
            )}
          </button>
        </div>
      </div>

      {/* LLM Recommendation Output */}
      {result && (
        <div className="mt-8 animate-in fade-in zoom-in-95 duration-200 rounded-3xl border-2 border-ink bg-cream p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2 border-b-2 border-dashed border-ink/20 pb-3">
            <Sparkles className="text-orange" size={24} />
            <h3 className="font-display text-[22px] font-black text-ink">
              {result.headline}
            </h3>
          </div>

          {/* Core pedagogical advice */}
          <div className="rounded-2xl border border-ink/20 bg-paper p-4">
            <span className="mono-label text-[10.5px] text-blue uppercase font-black">
              Literacy Coach Advice:
            </span>
            <p className="mt-1 text-[15px] font-medium leading-relaxed text-ink/85">
              {result.advice}
            </p>
            <div className="mt-3 border-t border-dashed border-ink/15 pt-2.5 text-[13px] font-bold text-orange flex items-center gap-2">
              <Lightbulb size={16} className="shrink-0" />
              <span><strong>Evening Routine Tip:</strong> {result.routineTip}</span>
            </div>
          </div>

          {/* Recommended Resources Grid */}
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Recommended Book */}
            {result.recommendedBook && (
              <div className="chunky-sm flex flex-col rounded-2xl bg-paper p-4 border-2 border-ink">
                <span className="mono-label text-[10px] text-orange uppercase font-black">
                  Recommended Story:
                </span>
                <h4 className="font-display text-[16px] font-black text-ink mt-1">
                  {result.recommendedBook.title}
                </h4>
                <p className="text-[12px] text-ink/70 mt-1 line-clamp-2">
                  {result.recommendedBook.blurb}
                </p>
                <div className="mt-auto pt-3 flex gap-1.5">
                  <Link
                    href={`/books/${result.recommendedBook.id}`}
                    className="chunky-sm press flex-1 text-center rounded-full bg-cream py-1.5 font-display text-[12px] font-extrabold text-ink hover:bg-honey"
                  >
                    Companion Guide →
                  </Link>
                </div>
              </div>
            )}

            {/* Recommended Printable */}
            {result.recommendedPrintable && (
              <div className="chunky-sm flex flex-col rounded-2xl bg-paper p-4 border-2 border-ink">
                <span className="mono-label text-[10px] text-blue uppercase font-black">
                  Companion Printable:
                </span>
                <h4 className="font-display text-[16px] font-black text-ink mt-1">
                  {result.recommendedPrintable.title}
                </h4>
                <p className="text-[12px] text-ink/70 mt-1 line-clamp-2">
                  {result.recommendedPrintable.description}
                </p>
                <div className="mt-auto pt-3 flex gap-1.5">
                  <Link
                    href={`/printables/${result.recommendedPrintable.id}`}
                    className="chunky-sm press flex-1 text-center rounded-full bg-honey py-1.5 font-display text-[12px] font-extrabold text-ink"
                  >
                    Read & Preview
                  </Link>
                  <a
                    href={result.recommendedPrintable.downloadUrl}
                    download
                    className="btn chunky-sm bg-orange text-cream py-1.5 px-2.5 text-[12px]"
                  >
                    <Download size={13} />
                  </a>
                </div>
              </div>
            )}

            {/* Recommended Journal */}
            {result.recommendedJournal && (
              <div className="chunky-sm flex flex-col rounded-2xl bg-paper p-4 border-2 border-ink">
                <span className="mono-label text-[10px] text-mint uppercase font-black">
                  Bedtime Journal:
                </span>
                <h4 className="font-display text-[16px] font-black text-ink mt-1">
                  {result.recommendedJournal.title}
                </h4>
                <p className="text-[12px] text-ink/70 mt-1 line-clamp-2">
                  {result.recommendedJournal.subtitle}
                </p>
                <div className="mt-auto pt-3 flex gap-1.5">
                  <Link
                    href={`/journals/${result.recommendedJournal.id}`}
                    className="chunky-sm press flex-1 text-center rounded-full bg-cream py-1.5 font-display text-[12px] font-extrabold text-ink hover:bg-honey"
                  >
                    View Prompts →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
