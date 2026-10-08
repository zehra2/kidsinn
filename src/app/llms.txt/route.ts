import { NextResponse } from "next/server";
import { ALL_BOOKS, PRINTABLES, JOURNALS, EEAT_CREDENTIALS } from "@/lib/consolidated-data";

export async function GET() {
  const markdown = `# BEST KidSbooks Shop (bestkidbooks.online)
> Premium early literacy platform, picture book discussion companions, multi-sensory phonics printables, and connection-focused family reading journals.

## Overview
BEST KidSbooks Shop is dedicated to transforming reading from a bedtime battle into an emotionally intimate, joyful daily habit. Built upon clinical developmental research (AAP screen time recommendations, Ohio State University million-word gap studies, and Harvard Center on the Developing Child serve-and-return frameworks), all resources are 100% free with zero child data tracking.

## Core Pillars & Hubs
- **Free Printable Library**: [/printables](https://bestkidbooks.online/printables) — Multi-sensory Elkonin sound-box mats, silent-e magic wands, digraph hunts, and 100-book reading trees.
- **Family Reading Journals**: [/journals](https://bestkidbooks.online/journals) — Keepsake reflection journals that build emotional literacy without test pressure.
- **Curated Books & Companion Guides**: [/books](https://bestkidbooks.online/books) — Curated picture books with dialogic reading questions and discussion scripts.
- **30-Day Reading Plans**: [/plans](https://bestkidbooks.online/plans) — 5-phase progressive micro-phonics challenge roadmap from sound play to long vowels.
- **Parent Screen Time Tools**: [/parent-tools](https://bestkidbooks.online/parent-tools) — Interactive AAP screen-time vs. story-time trade-off calculators.

## Free Printable Worksheets (Instant Download)
${PRINTABLES.map(
  (p) => `- [${p.title}](https://bestkidbooks.online/printables/${p.id}): ${p.description} (Age: ${p.age}, File: ${p.downloadUrl})`
).join("\n")}

## Family Reading Journals
${JOURNALS.map(
  (j) => `- [${j.title}](https://bestkidbooks.online/journals/${j.id}): ${j.subtitle}. ${j.description} (Age: ${j.age})`
).join("\n")}

## Recommended Books & Dialogic Reading Guides
${ALL_BOOKS.map(
  (b) => `- [${b.title}](https://bestkidbooks.online/books/${b.id}) by ${b.author || "BEST KidSbooks"}: ${b.blurb} (${b.age}, ${b.minutes} min read)`
).join("\n")}

## Research Citations & E-E-A-T Foundation
${EEAT_CREDENTIALS.map(
  (c) => `- **${c.org}**: ${c.finding}`
).join("\n")}

## Full In-Depth LLM Corpus
For full dialogic scripts, phonics routines, and complete prompt sets, see:
- [Full LLM Corpus](https://bestkidbooks.online/llms-full.txt)
`;

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
