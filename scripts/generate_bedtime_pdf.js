import { NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts, PageSizes } from "pdf-lib";

/* ── colours ── */
const INK    = rgb(0.094, 0.102, 0.125);
const CREAM  = rgb(0.980, 0.969, 0.941);
const NAVY   = rgb(0.059, 0.090, 0.165);
const AMBER  = rgb(0.992, 0.773, 0.192);
const BLUE   = rgb(0.357, 0.553, 0.937);
const ORANGE = rgb(0.992, 0.404, 0.141);
const MUTED  = rgb(0.45,  0.45,  0.45);
const WHITE  = rgb(1, 1, 1);
const GREEN  = rgb(0.18, 0.62, 0.35);

/* ── helpers ── */
function wrapText(text: string, font: any, size: number, maxW: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const test = cur ? `${cur} ${w}` : w;
    if (font.widthOfTextAtSize(test, size) <= maxW) { cur = test; }
    else { if (cur) lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  return lines;
}

function drawWrapped(p: any, text: string, font: any, size: number, x: number, y: number, maxW: number, color = INK, lhMul = 1.45): number {
  const lh = size * lhMul;
  for (const line of wrapText(text, font, size, maxW)) {
    p.drawText(line, { x, y, size, font, color });
    y -= lh;
  }
  return y;
}

function hr(p: any, x: number, y: number, w: number, color = rgb(0.8, 0.8, 0.8)) {
  p.drawLine({ start: { x, y }, end: { x: x + w, y }, thickness: 0.8, color });
}

function pill(p: any, text: string, x: number, y: number, font: any, bg: any, fg = INK) {
  const w = font.widthOfTextAtSize(text, 8) + 16;
  p.drawRectangle({ x, y: y - 6, width: w, height: 16, color: bg, cornerRadius: 6 });
  p.drawText(text, { x: x + 8, y: y - 1, size: 8, font, color: fg });
}

function header(p: any, W: number, H: number, label: string, title: string, bold: any, reg: any, bg: any) {
  p.drawRectangle({ x: 0, y: H - 60, width: W, height: 60, color: bg });
  p.drawText(label, { x: 48, y: H - 22, size: 9, font: bold, color: WHITE });
  p.drawText(title, { x: 48, y: H - 44, size: 20, font: bold, color: WHITE });
}

/* ═══════════ MAIN ROUTE ═══════════ */
export async function GET() {
  const doc  = await PDFDocument.create();
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await doc.embedFont(StandardFonts.Helvetica);
  const ital = await doc.embedFont(StandardFonts.HelveticaOblique);

  const [W, H] = PageSizes.Letter; // 612 x 792
  const M  = 48;
  const CW = W - M * 2;

  /* ── PAGE 1: COVER ── */
  {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: NAVY });
    p.drawRectangle({ x: 0, y: H - 80, width: W, height: 80, color: AMBER });

    p.drawText("The Bedtime", { x: M, y: H - 140, size: 46, font: bold, color: WHITE });
    p.drawText("Connection Journal", { x: M, y: H - 196, size: 46, font: bold, color: AMBER });

    drawWrapped(p, "A 5-minute memory keeper for tired parents and curious kids.", ital, 15, M, H - 240, CW, rgb(0.82, 0.88, 1));

    p.drawLine({ start: { x: M, y: H - 268 }, end: { x: W - M, y: H - 268 }, thickness: 0.8, color: rgb(0.25, 0.35, 0.6) });

    drawWrapped(p,
      'Rather than asking "What was the story about?" -- this journal asks questions that connect the book\'s heart to your child\'s real day.',
      reg, 13, M, H - 296, CW, rgb(0.72, 0.80, 0.96));

    // badges
    const badges = ["Parent Favourite", "Ages 3-7", "22 Pages", "60 Questions", "Free PDF Download"];
    let bx = M; let by = H - 358;
    for (const b of badges) {
      const bw = bold.widthOfTextAtSize(b, 9) + 18;
      if (bx + bw > W - M) { bx = M; by -= 28; }
      p.drawRectangle({ x: bx, y: by - 8, width: bw, height: 20, color: AMBER, cornerRadius: 6 });
      p.drawText(b, { x: bx + 9, y: by - 1, size: 9, font: bold, color: NAVY });
      bx += bw + 10;
    }

    // large decorative circle
    p.drawCircle({ x: W - 100, y: H - 480, size: 80, color: rgb(0.10, 0.17, 0.35) });
    p.drawText("22", { x: W - 118, y: H - 496, size: 36, font: bold, color: rgb(0.30, 0.45, 0.75) });
    p.drawText("pages", { x: W - 116, y: H - 520, size: 11, font: reg, color: rgb(0.40, 0.55, 0.80) });

    p.drawLine({ start: { x: M, y: 130 }, end: { x: W - M, y: 130 }, thickness: 0.8, color: rgb(0.2, 0.3, 0.5) });
    p.drawText("Ask the question. Write it down. Tuck them in.", { x: M, y: 110, size: 13, font: ital, color: AMBER });
    p.drawText("bestkidbooks.online/journals/bedtime-connection-journal", { x: M, y: 88, size: 10, font: reg, color: rgb(0.45, 0.58, 0.78) });
    p.drawText("Free for personal and family use  |  BEST KidSbooks Shop", { x: M, y: 70, size: 9, font: reg, color: rgb(0.35, 0.45, 0.62) });
  }

  /* ── PAGE 2: HOW IT WORKS ── */
  {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: CREAM });
    header(p, W, H, "HOW IT WORKS", "The 5-Minute Bedtime Ritual", bold, reg, NAVY);

    const steps = [
      { num: "1", title: "READ", body: "Any book. Old favourite, new library find, the same dinosaur book for the 47th night in a row. It doesn't matter." },
      { num: "2", title: "CONNECT", body: "Ask ONE question from the Question Bank that matches the story's heart. Brave story? Ask a bravery question. That's your only decision tonight." },
      { num: "3", title: "RECORD", body: "Write their answer in their exact words. Even the silly ones. Especially the silly ones." },
      { num: "4", title: "SNUGGLE", body: "Close the journal. Tuck them in. You're done. No crafts. No prep. No guilt." },
    ];

    let sy = H - 86;
    for (const s of steps) {
      p.drawRectangle({ x: M, y: sy - 78, width: CW, height: 86, color: WHITE, borderColor: rgb(0.88, 0.88, 0.92), borderWidth: 1, cornerRadius: 8 });
      p.drawRectangle({ x: M, y: sy - 78, width: 6, height: 86, color: ORANGE, cornerRadius: 4 });
      p.drawRectangle({ x: M + 14, y: sy - 18, width: 22, height: 22, color: AMBER, cornerRadius: 4 });
      p.drawText(s.num, { x: M + 20, y: sy - 11, size: 12, font: bold, color: NAVY });
      p.drawText(s.title, { x: M + 46, y: sy - 12, size: 13, font: bold, color: INK });
      drawWrapped(p, s.body, reg, 11, M + 46, sy - 30, CW - 56, MUTED);
      sy -= 104;
    }

    hr(p, M, sy - 12, CW);
    p.drawText("The Tired Parent's Promise:", { x: M, y: sy - 32, size: 11, font: bold, color: ORANGE });
    drawWrapped(p, "You do not need to do this every night. Missed a week? The journal waits for you. That's the whole point.", ital, 11, M, sy - 52, CW, MUTED);
  }

  /* ── PAGE 3: WHY CONNECTION BEATS COMPREHENSION ── */
  {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: CREAM });
    header(p, W, H, "THE SCIENCE", "Why Connection Beats Comprehension", bold, reg, BLUE);

    let y = H - 90;
    drawWrapped(p, '"Distancing" questions bridge the story world to your child\'s real life. Reading researchers call it the single most powerful part of reading aloud -- and it\'s the part most of us skip because we\'re exhausted.', reg, 12, M, y, CW, INK);
    y -= 64;

    const half = CW / 2 - 8;
    const pairs = [
      { test: '"What was the story about?"', conn: '"Are you ever scared of the dark like the bear was?"' },
      { test: '"Did the rabbit share?"',     conn: '"Who was kind to YOU today?"' },
      { test: '"Was the character brave?"',  conn: '"Were you brave today -- even a tiny bit?"' },
    ];

    for (const pair of pairs) {
      // left -- test
      p.drawRectangle({ x: M, y: y - 44, width: half, height: 50, color: rgb(0.98, 0.93, 0.93), cornerRadius: 6 });
      p.drawText("TEST QUESTION", { x: M + 8, y: y - 12, size: 7, font: bold, color: rgb(0.7, 0.2, 0.2) });
      drawWrapped(p, pair.test, ital, 11, M + 8, y - 26, half - 18, INK, 1.4);
      // arrow
      p.drawText("->", { x: M + half + 2, y: y - 22, size: 16, font: bold, color: ORANGE });
      // right -- connection
      p.drawRectangle({ x: M + half + 18, y: y - 44, width: half - 6, height: 50, color: rgb(0.90, 0.96, 0.91), cornerRadius: 6 });
      p.drawText("CONNECTION QUESTION", { x: M + half + 26, y: y - 12, size: 7, font: bold, color: GREEN });
      drawWrapped(p, pair.conn, bold, 11, M + half + 26, y - 26, half - 24, INK, 1.4);
      y -= 62;
    }

    y -= 12;
    hr(p, M, y, CW);
    y -= 24;
    p.drawText("This journal's hidden gift:", { x: M, y, size: 12, font: bold, color: ORANGE });
    y -= 20;
    drawWrapped(p, "In three years, these pages become a book of who your child was -- in their own disappearing little-kid words.", ital, 12, M, y, CW, INK);
  }

  /* ── PAGE 4: NIGHTLY ENTRY PAGE ── */
  {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: WHITE });

    // header
    p.drawRectangle({ x: M - 8, y: H - 80, width: CW + 16, height: 72, color: NAVY, cornerRadius: 8 });
    p.drawText("Tonight's Connection", { x: M + 4, y: H - 34, size: 20, font: bold, color: AMBER });
    p.drawText("The Bedtime Connection Journal  --  Nightly Entry", { x: M + 4, y: H - 56, size: 10, font: reg, color: rgb(0.65, 0.76, 1) });

    let y = H - 106;
    // date + book
    p.drawText("Date:", { x: M, y, size: 11, font: bold, color: INK });
    hr(p, M + 38, y + 2, 110);
    p.drawText("Book title:", { x: M + 165, y, size: 11, font: bold, color: INK });
    hr(p, M + 228, y + 2, CW - 230);

    // section 1 -- story heart
    y -= 34;
    pill(p, "1   THE HEART OF TONIGHT'S STORY  (circle one)", M, y, bold, AMBER, NAVY);
    y -= 22;
    const hearts = ["brave", "kind", "silly", "cozy", "sad-then-happy", "curious", "magical", "lonely-then-found"];
    let hx = M;
    for (const h of hearts) {
      const hw = reg.widthOfTextAtSize(h, 11) + 20;
      if (hx + hw > W - M) { hx = M; y -= 22; }
      p.drawRectangle({ x: hx, y: y - 8, width: hw, height: 18, color: rgb(0.92, 0.93, 0.97), cornerRadius: 5 });
      p.drawText(h, { x: hx + 10, y: y - 2, size: 11, font: reg, color: INK });
      hx += hw + 8;
    }

    // section 2 -- question
    y -= 36;
    pill(p, "2   TONIGHT'S QUESTION  (pick one from the Question Bank)", M, y, bold, BLUE, WHITE);
    y -= 18;
    p.drawRectangle({ x: M, y: y - 54, width: CW, height: 60, color: rgb(0.97, 0.98, 1), cornerRadius: 6 });
    hr(p, M + 8, y - 14, CW - 16, rgb(0.80, 0.85, 0.95));
    hr(p, M + 8, y - 32, CW - 16, rgb(0.80, 0.85, 0.95));
    hr(p, M + 8, y - 50, CW - 16, rgb(0.80, 0.85, 0.95));

    // section 3 -- what they said
    y -= 76;
    pill(p, "3   WHAT THEY SAID  (exact words -- kid grammar and all)", M, y, bold, ORANGE, WHITE);
    y -= 18;
    p.drawRectangle({ x: M, y: y - 84, width: CW, height: 90, color: rgb(1, 0.98, 0.95), cornerRadius: 6 });
    for (let l = 0; l < 4; l++) hr(p, M + 8, y - 18 - l * 20, CW - 16, rgb(0.90, 0.82, 0.74));

    // section 4 -- one thing
    y -= 108;
    pill(p, "4   ONE THING TO REMEMBER TONIGHT  (optional)", M, y, bold, rgb(0.55, 0.85, 0.65), NAVY);
    y -= 18;
    p.drawRectangle({ x: M, y: y - 50, width: CW, height: 56, color: rgb(0.95, 0.99, 0.96), cornerRadius: 6 });
    hr(p, M + 8, y - 18, CW - 16, rgb(0.72, 0.88, 0.76));
    hr(p, M + 8, y - 36, CW - 16, rgb(0.72, 0.88, 0.76));

    // section 5 -- heart rating
    y -= 74;
    pill(p, "5   HEART RATING", M, y, bold, rgb(1, 0.72, 0.78), NAVY);
    y -= 20;
    p.drawText("How full is your heart after tonight?", { x: M, y, size: 11, font: reg, color: MUTED });
    y -= 22;
    for (let i = 0; i < 5; i++) {
      p.drawEllipse({ x: M + i * 34 + 12, y: y + 8, xScale: 12, yScale: 10, borderColor: rgb(0.85, 0.45, 0.55), borderWidth: 1.5, color: rgb(1, 0.95, 0.96) });
    }
    p.drawText("(colour in each heart)", { x: M + 192, y: y + 2, size: 9, font: ital, color: MUTED });

    // footer
    hr(p, M, 52, CW);
    p.drawText("bestkidbooks.online  |  Print as many copies of this page as you like.", { x: M, y: 36, size: 9, font: reg, color: MUTED });
  }

  /* ── PAGES 5-14: QUESTION BANK (2 themes per page) ── */
  const themes = [
    { name: "BRAVE HEARTS", hint: "Use with stories about courage", color: ORANGE, qs: [
      "Someone in our story had to be brave. Were you brave today -- even a tiny bit?",
      "What felt a little scary today? What made it better?",
      "If the character gave you brave advice, what would they say?",
      "What's something brave you might try tomorrow?",
      "Was there a part of the story where you thought 'uh oh'? What happened next?",
      "Who is the bravest person you know?",
    ]},
    { name: "KIND HANDS", hint: "Stories about helping & friendship", color: AMBER, qs: [
      "Someone was kind in our story. Who was kind to you today?",
      "Did you help anyone today? What did you do?",
      "If we could give the character a gift, what would they need most?",
      "What's the kindest thing anyone has ever done for you?",
      "Who could use some kindness tomorrow? What could we do?",
      "How did you know the character was being kind? What did their face look like?",
    ]},
    { name: "BIG FEELINGS", hint: "Stories about emotions", color: BLUE, qs: [
      "How did the character feel at the end? How does your heart feel right now?",
      "What made you happiest today? The very top moment?",
      "Did anything make you feel grumpy today? Where did the grumpy live -- your tummy, your head, your toes?",
      "When the character was sad, what helped them? What helps you?",
      "If your day was a weather report -- sunny, cloudy, stormy -- what was today?",
      "What feeling is hardest to say out loud?",
    ]},
    { name: "THE PEOPLE WE LOVE", hint: "Family & love stories", color: rgb(0.85, 0.35, 0.65), qs: [
      "Who loves the character in our story? Who loves YOU?",
      "What's something we do together that you love?",
      "If you could hug one person right now, who would it be?",
      "What do you love about our family? One thing.",
      "Did you miss anyone today?",
      "What makes you feel loved the most -- hugs, words, or cozy time?",
    ]},
    { name: "FRIENDS & LAUGHTER", hint: "Playful & social stories", color: rgb(0.25, 0.68, 0.40), qs: [
      "Who made you laugh today? What happened?",
      "If the main character came to your birthday party, what game would you play?",
      "What's the funniest thing that happened today?",
      "Who did you play with today? What did you play?",
      "If you could have a sleepover with any story character, who would you pick?",
      "What makes a good friend?",
    ]},
    { name: "CURIOUS MINDS", hint: "Adventure & discovery stories", color: rgb(0.25, 0.55, 0.92), qs: [
      "What do you wonder about as you fall asleep?",
      "If you could ask the character ONE question, what would you ask?",
      "What's something you learned today -- even a tiny thing?",
      "What would you want to explore tomorrow -- the ocean, the sky, or a jungle?",
      "Was there anything surprising in our story?",
      "If you could know the answer to anything in the whole world, what would you ask?",
    ]},
    { name: "WORRY WRANGLERS", hint: "Gentle questions for anxious nights", color: rgb(0.52, 0.38, 0.88), qs: [
      "Does a little worry live anywhere in your body tonight? Where?",
      "The character had a problem in our story. How did they solve it?",
      "If your worry was a tiny creature, what would it look like? Should we tuck it in too?",
      "What's something you can't wait for tomorrow?",
      "What makes you feel safe and cozy?",
      "If the worry was a balloon, could we let it float out the window? Let's do it. Whoosh.",
    ]},
    { name: "THANK YOU, TODAY", hint: "Gratitude", color: rgb(0.88, 0.62, 0.18), qs: [
      "What was your favourite tiny thing today? The smallest thing you can think of.",
      "What are you happy you got to do today?",
      "Is there anything you want to say thank you for before you sleep?",
      "What's one thing in your room you're grateful for?",
      "Who made today nicer for you?",
      "What sound, smell, or taste did you love today?",
    ]},
    { name: "DREAM BUILDERS", hint: "Imagination", color: rgb(0.42, 0.25, 0.82), qs: [
      "If you could step inside our story tonight, where would you go first?",
      "What do you think you'll dream about tonight?",
      "If you could change one thing in our story, what would you change?",
      "If you had a magic paintbrush, what would you paint for tomorrow?",
      "What would your perfect day look like -- start to finish?",
      "If your stuffed animal could talk, what would it say about today?",
    ]},
    { name: "ME, MYSELF & I", hint: "Self-esteem", color: ORANGE, qs: [
      "What's something you did today that made you proud of YOU?",
      "What do you do really, really well?",
      "What's something you couldn't do last year that you can do now?",
      "What's your favourite thing about being exactly your age?",
      "If you could describe yourself in one word, what word would it be?",
      "What's something you want to get better at -- and that's okay, because you're still learning?",
    ]},
  ];

  for (let i = 0; i < themes.length; i += 2) {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: CREAM });
    p.drawRectangle({ x: 0, y: H - 58, width: W, height: 58, color: NAVY });
    p.drawText("QUESTION BANK  --  60 Connection Questions by Theme", { x: M, y: H - 22, size: 9, font: bold, color: AMBER });
    p.drawText(`Page ${Math.floor(i / 2) + 1} of 5`, { x: M, y: H - 42, size: 11, font: bold, color: WHITE });
    p.drawText(`Themes: ${themes[i].name}${themes[i+1] ? " & " + themes[i+1].name : ""}`, { x: M + 80, y: H - 42, size: 10, font: reg, color: rgb(0.7, 0.78, 0.95) });

    let y = H - 80;
    const half = CW / 2 - 8;

    for (let col = 0; col < 2; col++) {
      const theme = themes[i + col];
      if (!theme) break;
      const xOff = col === 0 ? M : M + half + 16;
      let ty = y;

      p.drawRectangle({ x: xOff, y: ty - 34, width: half, height: 40, color: theme.color, cornerRadius: 6 });
      p.drawText(theme.name, { x: xOff + 10, y: ty - 15, size: 12, font: bold, color: WHITE });
      p.drawText(theme.hint, { x: xOff + 10, y: ty - 30, size: 8, font: reg, color: rgb(1, 1, 0.85) });
      ty -= 50;

      for (const q of theme.qs) {
        p.drawRectangle({ x: xOff, y: ty - 58, width: half, height: 64, color: WHITE, cornerRadius: 5 });
        p.drawText("Q", { x: xOff + 8, y: ty - 13, size: 9, font: bold, color: theme.color });
        ty = drawWrapped(p, q, reg, 10, xOff + 22, ty - 13, half - 30, INK, 1.35);
        ty -= 4;
        hr(p, xOff + 8, ty - 2, half - 18, rgb(0.88, 0.88, 0.92));
        p.drawText("Their answer:", { x: xOff + 8, y: ty - 14, size: 8, font: ital, color: MUTED });
        hr(p, xOff + 8, ty - 28, half - 18, rgb(0.88, 0.88, 0.92));
        ty -= 66;
      }
    }
  }

  /* ── PAGE 15: QUESTION PICKER BY AGE ── */
  {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: CREAM });
    header(p, W, H, "QUESTION PICKER BY AGE", "How to Adapt for Your Child's Age", bold, reg, AMBER);

    const sections = [
      { title: "Ages 3-4  --  Keep it tiny.", color: BLUE, tips: [
        "Offer choices: \"Were you more like the brave bunny or the sleepy bear today?\"",
        "One-word answers are wins. \"Umm... bunny!\" Write it down.",
        "Pointing counts: \"Point to the part of the day you liked best.\"",
        "If they ramble off-topic -- that IS the answer. Write it down anyway.",
        "Try the question again tomorrow -- they'll remember.",
      ]},
      { title: "Ages 5-7  --  Open the door wider.", color: ORANGE, tips: [
        "Follow up with \"Why do you think that?\" or \"Tell me more.\"",
        "Let them ask YOU the question back -- your honest answer builds trust.",
        "Silly answers are okay. Play is how this age processes real feelings.",
        "Let them flip through the Question Bank and pick their own theme.",
        "Try \"trading\" questions -- they answer one, you answer one.",
      ]},
    ];

    let y = H - 86;
    for (const s of sections) {
      p.drawRectangle({ x: M, y: y - 18, width: CW, height: 24, color: s.color, cornerRadius: 6 });
      p.drawText(s.title, { x: M + 10, y: y - 8, size: 13, font: bold, color: WHITE });
      y -= 34;
      for (const tip of s.tips) {
        p.drawCircle({ x: M + 8, y: y + 4, size: 3, color: s.color });
        y = drawWrapped(p, tip, reg, 11, M + 18, y, CW - 24, INK, 1.4);
        y -= 5;
      }
      y -= 22;
    }
  }

  /* ── PAGE 16: RESCUE PHRASES ── */
  {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: CREAM });
    header(p, W, H, "RESCUE PHRASES", "When You Get the Shrug -- Try These:", bold, reg, ORANGE);

    const phrases = [
      '"Would you rather be the bunny or the bear? Why that one?"',
      '"What would your stuffed animal say if I asked THEM?"',
      '"Tell me the very smallest, teeniest thing you remember."',
      '"Just pick one -- what was today\'s best snack moment?"',
      '"Okay, what was today\'s most boring part?" (Boring answers open the funniest doors.)',
      '"Should we ask again tomorrow?" (Then actually ask. They\'ll remember.)',
    ];

    let y = H - 86;
    for (const ph of phrases) {
      p.drawRectangle({ x: M, y: y - 50, width: CW, height: 56, color: WHITE, cornerRadius: 6 });
      p.drawRectangle({ x: M, y: y - 50, width: 5, height: 56, color: ORANGE, cornerRadius: 3 });
      p.drawText("\"", { x: M + 14, y: y - 12, size: 22, font: bold, color: AMBER });
      y = drawWrapped(p, ph, bold, 12, M + 32, y - 12, CW - 42, INK, 1.5);
      y -= 22;
    }

    hr(p, M, y - 10, CW);
    y -= 28;
    p.drawText("A note for tired grown-ups:", { x: M, y, size: 11, font: bold, color: ORANGE });
    y -= 18;
    drawWrapped(p, "Some nights the answer is one word and a yawn. That's still a beautiful entry. The ritual is the point -- the words are the treasure.", ital, 11, M, y, CW, MUTED);
  }

  /* ── PAGE 17: NO BOOK TONIGHT? ── */
  {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: CREAM });
    header(p, W, H, "NO BOOK TONIGHT?", "Pure Connection Questions", bold, reg, rgb(0.45, 0.28, 0.82));

    const qs = [
      "What was the best 5 minutes of your whole day?",
      "If today had a title, like a movie, what would it be called?",
      "Tell me one thing about today you want to remember when you're a grown-up.",
      "What's something you're really good at that grown-ups forget you're good at?",
      "If tomorrow had one wish in it, what would you wish for?",
    ];

    let y = H - 86;
    p.drawText("Late night? Skipped the story? Use one of these instead:", { x: M, y, size: 12, font: reg, color: MUTED });
    y -= 30;

    for (const q of qs) {
      p.drawRectangle({ x: M, y: y - 64, width: CW, height: 70, color: WHITE, cornerRadius: 6 });
      p.drawRectangle({ x: M, y: y - 64, width: CW, height: 20, color: rgb(0.92, 0.88, 1), cornerRadius: 6 });
      y = drawWrapped(p, q, bold, 12, M + 12, y - 6, CW - 24, INK, 1.45);
      y -= 6;
      hr(p, M + 12, y - 4, CW - 24, rgb(0.85, 0.85, 0.92));
      p.drawText("Their answer:", { x: M + 12, y: y - 16, size: 9, font: ital, color: MUTED });
      hr(p, M + 12, y - 32, CW - 24, rgb(0.85, 0.85, 0.92));
      y -= 76;
    }
  }

  /* ── PAGE 18: LITTLE WORDS LIBRARY ── */
  {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: rgb(1, 0.99, 0.96) });
    p.drawRectangle({ x: 0, y: H - 72, width: W, height: 72, color: AMBER });
    p.drawText("THE LITTLE WORDS LIBRARY", { x: M, y: H - 30, size: 16, font: bold, color: NAVY });
    p.drawText("A keep-forever collection of the funny, sweet, and accidentally brilliant things kids say.", { x: M, y: H - 52, size: 10, font: reg, color: NAVY });

    let y = H - 88;
    const cols = [
      { label: "DATE", x: M, w: 72 },
      { label: "AGE", x: M + 76, w: 42 },
      { label: "THEIR EXACT WORDS  (do not correct the grammar -- that's the gold)", x: M + 122, w: CW - 124 },
    ];
    for (const c of cols) p.drawText(c.label, { x: c.x, y, size: 8, font: bold, color: MUTED });
    y -= 14;
    hr(p, M, y, CW, AMBER);
    y -= 4;

    for (let row = 0; row < 14; row++) {
      const bg = row % 2 === 0 ? WHITE : rgb(0.99, 0.98, 0.96);
      p.drawRectangle({ x: M, y: y - 36, width: CW, height: 38, color: bg });
      hr(p, M, y, CW, rgb(0.88, 0.85, 0.80));
      y -= 38;
    }

    hr(p, M, y, CW, AMBER);
    y -= 18;
    p.drawText("\"Write the date, their exact words, and their age. Do not correct the grammar. That's the gold.\"", { x: M, y, size: 9, font: ital, color: MUTED });
  }

  /* ── PAGE 19: SUNDAY SNAPSHOT ── */
  {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: CREAM });
    header(p, W, H, "SUNDAY SNAPSHOT", "Optional 3-Minute Weekly Wrap-Up", bold, reg, BLUE);

    p.drawText("Week of: ___________________________", { x: M, y: H - 74, size: 10, font: reg, color: MUTED });

    const fields = [
      { label: "Book of the week (the one they asked for again and again):", lines: 2 },
      { label: "Funniest quote:", lines: 2 },
      { label: "The question that got the best answer:", lines: 2 },
      { label: "One thing we learned about each other:", lines: 3 },
    ];

    let y = H - 100;
    for (const f of fields) {
      p.drawText(f.label, { x: M, y, size: 11, font: bold, color: INK });
      y -= 18;
      const h = f.lines * 22 + 10;
      p.drawRectangle({ x: M, y: y - h, width: CW, height: h, color: WHITE, borderColor: rgb(0.88, 0.88, 0.92), borderWidth: 1, cornerRadius: 5 });
      for (let l = 0; l < f.lines; l++) hr(p, M + 8, y - 20 - l * 22, CW - 16, rgb(0.86, 0.88, 0.94));
      y -= h + 20;
    }

    y -= 6;
    p.drawText("How bedtime felt this week:", { x: M, y, size: 11, font: bold, color: INK });
    const moods = ["Exhausted", "Calm", "Joyful", "Connected"];
    let mx = M + 215;
    for (const m of moods) {
      const mw = bold.widthOfTextAtSize(m, 10) + 22;
      p.drawRectangle({ x: mx, y: y - 8, width: mw, height: 18, color: rgb(0.92, 0.92, 0.97), cornerRadius: 5 });
      p.drawText(m, { x: mx + 10, y: y - 1, size: 10, font: reg, color: INK });
      mx += mw + 10;
    }
  }

  /* ── PAGE 20: 30 NIGHTS TRACKER ── */
  {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: NAVY });
    p.drawRectangle({ x: 0, y: H - 70, width: W, height: 70, color: AMBER });
    p.drawText("30 NIGHTS OF CONNECTION", { x: M, y: H - 30, size: 18, font: bold, color: NAVY });
    p.drawText("Colour in a circle each night you connect. Gaps are fine. Circles don't expire.", { x: M, y: H - 52, size: 10, font: reg, color: NAVY });

    let ty = H - 108;
    const sz = 42; const perRow = 10;
    for (let i = 0; i < 30; i++) {
      const col = i % perRow;
      const row = Math.floor(i / perRow);
      const cx = M + col * (sz + 10) + sz / 2;
      const cy = ty - row * (sz + 14);
      p.drawCircle({ x: cx, y: cy, size: sz / 2, color: rgb(0.10, 0.18, 0.36), borderColor: AMBER, borderWidth: 1.5 });
      const num = String(i + 1);
      p.drawText(num, { x: cx - bold.widthOfTextAtSize(num, 10) / 2, y: cy + sz / 2 - 14, size: 10, font: bold, color: rgb(0.52, 0.65, 0.88) });
      // crescent arc
      p.drawEllipse({ x: cx, y: cy, xScale: sz / 2 - 8, yScale: sz / 2 - 10, color: rgb(0.15, 0.25, 0.50) });
    }

    let fy = H - 108 - 3 * (sz + 14) - 28;
    hr(p, M, fy, CW, rgb(0.22, 0.32, 0.58));
    fy -= 24;
    p.drawText("When you reach 30:", { x: M, y: fy, size: 12, font: bold, color: AMBER });
    fy -= 20;
    drawWrapped(p, "Do something small and cozy to celebrate -- pancakes for breakfast, a \"book picnic\" on the living room floor, or a new book from the library. Let them pick.", reg, 11, M, fy, CW, rgb(0.72, 0.80, 1));
  }

  /* ── PAGE 21: TIPS FOR TIRED PARENTS ── */
  {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: CREAM });
    header(p, W, H, "TIPS FOR TIRED PARENTS", "Six things that actually help.", bold, reg, ORANGE);

    const tips = [
      { num: "1", tip: "Keep the journal on the nightstand.", detail: "If it's in a drawer, it's in a drawer forever." },
      { num: "2", tip: "Two minutes counts.", detail: "On hard nights, write only the book title and one word from their answer." },
      { num: "3", tip: "Don't quiz.", detail: "These aren't test questions -- they're invitations. If they decline, tuck them in and try tomorrow." },
      { num: "4", tip: "Let them see you writing.", detail: "\"I'm writing down what you said so we never forget it\" tells a child their words matter." },
      { num: "5", tip: "Read it back sometimes.", detail: "\"Remember when you said the moon follows our car?\" Kids adore seeing their past selves." },
      { num: "6", tip: "Share the job.", detail: "Grandparents, babysitters, older siblings -- anyone can ask one question and write one line." },
    ];

    let y = H - 84;
    for (const t of tips) {
      p.drawRectangle({ x: M, y: y - 56, width: CW, height: 62, color: WHITE, cornerRadius: 6 });
      p.drawRectangle({ x: M, y: y - 56, width: 38, height: 62, color: rgb(1, 0.95, 0.90), cornerRadius: 5 });
      p.drawText(t.num, { x: M + 14, y: y - 22, size: 20, font: bold, color: ORANGE });
      p.drawText(t.tip, { x: M + 48, y: y - 16, size: 12, font: bold, color: INK });
      drawWrapped(p, t.detail, reg, 11, M + 48, y - 34, CW - 58, MUTED);
      y -= 76;
    }
  }

  /* ── PAGE 22: CLOSING ── */
  {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: NAVY });

    // large decorative circle
    p.drawCircle({ x: W / 2, y: H - 130, size: 60, color: rgb(0.08, 0.14, 0.30) });
    p.drawText("30", { x: W / 2 - 20, y: H - 148, size: 32, font: bold, color: rgb(0.28, 0.42, 0.72) });
    p.drawText("nights", { x: W / 2 - 22, y: H - 170, size: 12, font: reg, color: rgb(0.40, 0.55, 0.80) });

    const lines = [
      { text: "These pages ask very little of you.", f: reg,  c: rgb(0.72, 0.80, 1),  s: 15, y: H - 228 },
      { text: "One question. One answer.",           f: bold, c: WHITE,                s: 22, y: H - 264 },
      { text: "A few scribbled words at the end of a long day.", f: reg, c: rgb(0.72, 0.80, 1), s: 15, y: H - 300 },
    ];
    for (const l of lines) {
      const tw = l.f.widthOfTextAtSize(l.text, l.s);
      p.drawText(l.text, { x: (W - tw) / 2, y: l.y, size: l.s, font: l.f, color: l.c });
    }

    hr(p, M, H - 332, CW, rgb(0.20, 0.30, 0.56));

    const big = ["Ask the question.", "Write it down.", "Tuck them in."];
    for (let i = 0; i < big.length; i++) {
      const tw = bold.widthOfTextAtSize(big[i], 28);
      p.drawText(big[i], { x: (W - tw) / 2, y: H - 396 - i * 46, size: 28, font: bold, color: AMBER });
    }

    const sub = "You're doing better than you think.";
    const sw = reg.widthOfTextAtSize(sub, 14);
    p.drawText(sub, { x: (W - sw) / 2, y: H - 542, size: 14, font: reg, color: rgb(0.72, 0.80, 1) });

    hr(p, M, 102, CW, rgb(0.20, 0.30, 0.56));
    const url = "bestkidbooks.online/journals/bedtime-connection-journal";
    const uw = reg.widthOfTextAtSize(url, 10);
    p.drawText(url, { x: (W - uw) / 2, y: 82, size: 10, font: reg, color: rgb(0.42, 0.56, 0.78) });
    const copy = "Free for personal and classroom use  |  BEST KidSbooks Shop";
    const cw = reg.widthOfTextAtSize(copy, 9);
    p.drawText(copy, { x: (W - cw) / 2, y: 62, size: 9, font: reg, color: rgb(0.32, 0.44, 0.64) });
  }

  /* ── serve ── */
  const bytes = await doc.save();
  return new NextResponse(bytes, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Bedtime-Connection-Journal.pdf"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
