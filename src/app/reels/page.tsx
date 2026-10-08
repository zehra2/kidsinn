"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav, Footer, SectionHead, Sticker, Wave, JoinForm } from "@/components/ui";
import { REELS_DAYS } from "@/lib/consolidated-data";
import {
  Video,
  Sparkles,
  Clipboard,
  Check,
  Play,
  Film,
  Camera,
  Layers,
  HelpCircle,
  Download,
} from "lucide-react";

const MASTER_PROMPT_TEMPLATE = `Create a realistic, professionally filmed vertical educational Reel for the Best Kids Books Facebook page.

FORMAT
- 9:16 vertical, 1080x1920, upright, clean full-frame image
- Duration: 20–30 seconds
- Natural 24–30 fps motion; crisp 1080p or higher output
- No borders, black bars, app watermarks, fake UI, or accidental text
- Keep faces, words, and props inside the center safe area

CHARACTER CONSISTENCY
Use the attached man reference image as the exact visual identity for the human host. Preserve face, hairstyle, skin tone, proportions, friendly expression, and wardrobe. Use the attached bear reference image as the exact mascot identity. Preserve fur color and texture, muzzle, accessories, proportions, and friendly expressive face.

STUDIO LOOK
Bright, real children’s reading studio with a small bookshelf, colorful books, soft pastel wall accents, child-sized table, and a clean Best Kids Books learning corner. Use soft three-point lighting: warm key, gentle fill, subtle rim light, and a practical warm lamp. Professional children’s TV shoot, not a random AI background.

ACTION
Open on the learning challenge in the first second: [TARGET WORD / CHALLENGE].
The host warmly says: "[HOST LINE]".
The bear mascot makes one cute, safe, understandable mistake: [BEAR MISTAKE].
The host models the phoneme sounds: "[SOUNDS SEQUENCE]".
They blend or read together: "[TARGET WORD]".
End with: "Follow Best Kids Books for tomorrow’s word game."

CAMERA & AUDIO
Medium two-shot, over-the-shoulder card insert, and a close-up of the target word. Smooth tripod or dolly movement, realistic depth of field, natural eye lines, clean cuts. Natural room tone, soft card sounds, gentle upbeat instrumental music below the dialogue, and clear friendly lip-synced speech.

NEGATIVE REQUIREMENTS
No character redesign, extra people, deformed hands, face changes, unreadable word cards, flickering text, background morphing, rotation, shouting, copyrighted book pages, or third-party watermarks.`;

export default function ReelsPage() {
  const [copiedMaster, setCopiedMaster] = useState(false);
  const [selectedDay, setSelectedDay] = useState(REELS_DAYS[0]);
  const [copiedDayPrompt, setCopiedDayPrompt] = useState(false);

  const copyToClipboard = (text: string, isMaster: boolean) => {
    navigator.clipboard.writeText(text);
    if (isMaster) {
      setCopiedMaster(true);
      setTimeout(() => setCopiedMaster(false), 2000);
    } else {
      setCopiedDayPrompt(true);
      setTimeout(() => setCopiedDayPrompt(false), 2000);
    }
  };

  const currentDayPrompt = MASTER_PROMPT_TEMPLATE.replace(
    "[TARGET WORD / CHALLENGE]",
    `Day ${selectedDay.day} Challenge: ${selectedDay.skill}`
  )
    .replace("[HOST LINE]", selectedDay.title)
    .replace("[BEAR MISTAKE]", "Bear points to the wrong letter or tries to guess before blending")
    .replace("[SOUNDS SEQUENCE]", selectedDay.action)
    .replace("[TARGET WORD]", selectedDay.skill);

  return (
    <>
      <Nav />

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-cream pt-10 pb-14 border-b-[3px] border-ink">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-60"
          style={{ background: "#ff8fb1" }}
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full opacity-60"
          style={{ background: "#ffc531" }}
        />

        <div className="relative mx-auto max-w-[1240px] px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="mono-label chunky-sm inline-block -rotate-1 rounded-full bg-blue text-cream px-3 py-1">
              Reels Studio & Prompt Lab
            </span>
            <span className="mono-label rounded-full border-2 border-ink/20 bg-paper px-2.5 py-1 text-[11px] text-ink/60">
              9:16 Video Generation Engine
            </span>
          </div>

          <div className="mt-5 max-w-[820px]">
            <h1 className="text-[clamp(2.5rem,6.5vw,4.8rem)] leading-[1.02]">
              The Man & Bear
              <br />
              <span className="text-orange">Reels Production Lab.</span>
            </h1>
            <p className="mt-4 text-[18px] leading-relaxed text-ink/85">
              Production-ready video prompts for generating ultra-realistic educational reading Reels. Features strict character consistency, three-point studio lighting, child-safe pacing, and 30 micro-learning scripts.
            </p>

            {/* Mascot Lockup */}
            <div className="mt-6 flex items-center gap-4 rounded-2xl border-2 border-ink bg-paper p-3.5 max-w-[500px] shadow-[3px_3px_0px_0px_#181a20]">
              <img
                src="/images/reading-bear.png"
                alt="BEST KidSbooks Reading Bear"
                className="h-14 w-14 object-contain rounded-xl border-2 border-ink bg-cream p-1 shrink-0"
              />
              <div>
                <div className="font-display text-[16px] font-black text-ink">
                  Brand Mascot: The Reading Bear
                </div>
                <div className="text-[12.5px] text-ink/70 leading-snug">
                  Featured across all 30 reels with round glasses, open blue book, and rosy cheeks.
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={() => copyToClipboard(MASTER_PROMPT_TEMPLATE, true)}
                className="btn bg-orange text-cream"
              >
                {copiedMaster ? <Check size={16} /> : <Clipboard size={16} />}
                <span>{copiedMaster ? "Master Prompt Copied!" : "Copy Master Prompt Template"}</span>
              </button>
              <Link href="/plans" className="btn bg-paper">
                <Film size={16} />
                View 30-Day Video Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── SPECIFICATIONS & PRODUCTION RULES ───────────── */}
      <section className="py-12 bg-paper border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Production Rules"
            title="Video Standards for High-Retention Reels"
            sub="Every educational Reel is calibrated to stop the parent scroll in the first 2 seconds while maintaining wholesome, high-trust children’s TV quality."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="chunky-sm rounded-2xl bg-cream p-5">
              <Camera className="text-blue mb-2" size={26} />
              <h4 className="font-display text-[18px] font-extrabold text-ink">9:16 Full Frame</h4>
              <p className="text-[13.5px] text-ink/75 mt-1 leading-snug">
                1080x1920 vertical format. Safe margins for captions, no black borders or artificial app UI.
              </p>
            </div>

            <div className="chunky-sm rounded-2xl bg-cream p-5">
              <Sparkles className="text-orange mb-2" size={26} />
              <h4 className="font-display text-[18px] font-extrabold text-ink">Character Lock</h4>
              <p className="text-[13.5px] text-ink/75 mt-1 leading-snug">
                Consistent human host and bear mascot. Identical fur texture, wardrobe, and facial expressions.
              </p>
            </div>

            <div className="chunky-sm rounded-2xl bg-cream p-5">
              <Layers className="text-mint mb-2" size={26} />
              <h4 className="font-display text-[18px] font-extrabold text-ink">Real Studio Set</h4>
              <p className="text-[13.5px] text-ink/75 mt-1 leading-snug">
                Warm three-point key lighting, pastel bookshelves, and practical reading corner styling.
              </p>
            </div>

            <div className="chunky-sm rounded-2xl bg-cream p-5">
              <Film className="text-honey mb-2" size={26} />
              <h4 className="font-display text-[18px] font-extrabold text-ink">20–30s Micro-Action</h4>
              <p className="text-[13.5px] text-ink/75 mt-1 leading-snug">
                Fast hook, 1 cute mistake, 1 phonetic modeling, 1 shared triumph, and a friendly follow CTA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── PROMPT GENERATOR FOR 30 DAYS ───────────── */}
      <section id="prompts" className="py-14 bg-cream border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1240px] px-4 md:px-8">
          <SectionHead
            kicker="Prompt Generator"
            title="Generate AI Prompts for Any Day"
            sub="Select any day from the 30-Day challenge to generate an exact, customized video generation prompt ready for Sora, Runway, Kling, or Midjourney."
          />

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Days list selector */}
            <div className="chunky max-h-[560px] overflow-y-auto rounded-3xl bg-paper p-4">
              <div className="mono-label text-[11px] text-blue font-extrabold px-2 pb-2 border-b border-ink/20">
                Select Challenge Day (1–30):
              </div>
              <div className="mt-2 space-y-1.5">
                {REELS_DAYS.map((d) => (
                  <button
                    key={d.day}
                    type="button"
                    onClick={() => setSelectedDay(d)}
                    className={`w-full text-left rounded-xl p-3 border-2 transition-all ${
                      selectedDay.day === d.day
                        ? "border-orange bg-honey/40 shadow-sm font-bold"
                        : "border-transparent hover:bg-cream"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] text-ink/60">
                      <span className="mono-label">Day {d.day}</span>
                      <span>{d.phase}</span>
                    </div>
                    <div className="font-display text-[14.5px] text-ink mt-0.5">
                      {d.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Generated prompt preview */}
            <div className="chunky flex flex-col rounded-3xl bg-paper p-6 md:p-8">
              <div className="flex items-center justify-between border-b-2 border-dashed border-ink/20 pb-4">
                <div>
                  <span className="mono-label text-orange font-extrabold text-[11px]">
                    Day {selectedDay.day} Video Script
                  </span>
                  <h3 className="text-[24px] mt-0.5">{selectedDay.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(currentDayPrompt, false)}
                  className="btn chunky-sm bg-orange text-cream text-[13px] px-3.5 py-2"
                >
                  {copiedDayPrompt ? <Check size={14} /> : <Clipboard size={14} />}
                  <span>{copiedDayPrompt ? "Copied!" : "Copy Prompt"}</span>
                </button>
              </div>

              <div className="mt-4 flex-1">
                <pre className="h-[380px] overflow-y-auto rounded-2xl border-2 border-ink bg-cream p-4 font-mono text-[12px] leading-relaxed text-ink whitespace-pre-wrap">
                  {currentDayPrompt}
                </pre>
              </div>

              <div className="mt-4 flex items-center justify-between text-[12px] text-ink/60">
                <span>Format: 9:16 Vertical · Studio: Clean Kids Corner</span>
                <span className="font-bold text-blue">Asset: {selectedDay.asset}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
