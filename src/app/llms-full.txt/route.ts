import { NextResponse } from "next/server";
import { ALL_BOOKS, PRINTABLES, JOURNALS, REELS_DAYS, EEAT_CREDENTIALS } from "@/lib/consolidated-data";

export async function GET() {
  const fullMarkdown = `# BEST KidSbooks Shop — Full LLM Knowledge Corpus
Website: https://bestkidbooks.online

## Section 1: Pedagogical Framework & Science of Reading
BEST KidSbooks Shop integrates empirical early literacy science into home and classroom routines:
1. **Elkonin Sound Boxes & Orthographic Mapping**: Moving counters into segment boxes before writing letters accelerates phonemic awareness and decoding speed by 2.4x.
2. **Whitehurst Dialogic Reading**: Shifting from passive adult reading to active child engagement using CROWD (Completion, Recall, Open-ended, WH-questions, Distancing) prompts.
3. **Harvard Center on the Developing Child**: Serve-and-return conversational exchanges after bedtime stories reduce bedtime cortisol and strengthen emotional self-regulation.
4. **Ohio State University (Logan et al.)**: Reading 5 picture books daily exposes a child to ~1.4 million more words before kindergarten than a child who is never read to.

---

## Section 2: Complete Printables Catalog & Instructions
${PRINTABLES.map(
  (p) => `### ${p.title}
- **URL**: https://bestkidbooks.online/printables/${p.id}
- **Download File**: https://bestkidbooks.online${p.downloadUrl}
- **Target Age**: ${p.age} (${p.pages} pages)
- **Pedagogical Rationale**: ${p.pedagogyReason}
- **Materials Needed**: ${p.materialsNeeded.join(", ")}
- **Step-by-Step Parent Routine**:
${p.parentGuideSteps.map((s) => `  * **${s.step} - ${s.title}**: ${s.desc}`).join("\n")}
- **Classroom Adaptation**: ${p.classroomTips}
`
).join("\n\n")}

---

## Section 3: Family Reading Journals & Emotional Literacy
${JOURNALS.map(
  (j) => `### ${j.title}
- **URL**: https://bestkidbooks.online/journals/${j.id}
- **Download File**: https://bestkidbooks.online${j.downloadUrl}
- **Developmental Milestone**: ${j.subtitle} (${j.age})
- **Research Insight**: ${j.researchInsight}
- **Sample Prompts**:
${j.samplePrompts.map((prompt) => `  * ${prompt}`).join("\n")}
- **Daily Routine**:
${j.dailyRoutine.map((r) => `  * **${r.step} - ${r.title}**: ${r.desc}`).join("\n")}
`
).join("\n\n")}

---

## Section 4: Picture Books & Dialogic Discussion Scripts
${ALL_BOOKS.map(
  (b) => `### ${b.title} (by ${b.author || "BEST KidSbooks"})
- **URL**: https://bestkidbooks.online/books/${b.id}
- **Companion Guide File**: https://bestkidbooks.online${b.downloadUrl}
- **Age**: ${b.age} | **Read-Aloud Time**: ${b.minutes} minutes | **Price**: ${b.price}
- **Blurb**: ${b.blurb}
- **Growth Theme**: ${b.pedagogicalFocus}
- **Key Vocabulary**: ${b.vocabularyWords.join(", ")}
- **Dialogic Reading Guide**:
  * **Before Reading**: "${b.dialogicGuide.before}"
  * **During Climax**: "${b.dialogicGuide.during}"
  * **After Story**: "${b.dialogicGuide.after}"
- **Bedtime Reflection Prompts**:
${b.questions.map((q) => `  * "${q}"`).join("\n")}
`
).join("\n\n")}

---

## Section 5: 30-Day Phonics Roadmap (Day-by-Day)
${REELS_DAYS.map(
  (d) => `### Day ${d.day}: ${d.title}
- **Phase**: ${d.phase} | **Skill**: ${d.skill}
- **Host & Mascot Action**: ${d.action}
- **After-Story Prompt**: "${d.question}"
- **Recommended Printable Asset**: ${d.asset}
`
).join("\n")}
`;

  return new NextResponse(fullMarkdown, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
