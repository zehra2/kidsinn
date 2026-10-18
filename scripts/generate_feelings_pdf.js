const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

/* ── Gentle Emotional Literacy Color Palette ── */
const C_PLUM      = rgb(0.32, 0.18, 0.42);
const C_ROSE      = rgb(0.88, 0.38, 0.52);
const C_ROSE_BG   = rgb(0.99, 0.93, 0.95);
const C_TEAL      = rgb(0.12, 0.54, 0.58);
const C_MINT_BG   = rgb(0.91, 0.97, 0.96);
const C_AMBER     = rgb(0.95, 0.65, 0.20);
const C_AMBER_BG  = rgb(0.99, 0.96, 0.89);
const C_NAVY      = rgb(0.14, 0.18, 0.30);
const C_CREAM     = rgb(0.99, 0.98, 0.96);
const C_WHITE     = rgb(1, 1, 1);
const C_GRAY_TEXT = rgb(0.42, 0.46, 0.52);
const C_LINE      = rgb(0.84, 0.86, 0.90);

async function generateFeelingsPDF() {
  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold    = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic  = await doc.embedFont(StandardFonts.HelveticaOblique);

  const W = 612; // US Letter
  const H = 792;
  const MARGIN = 40;
  const CONTENT_W = W - MARGIN * 2;

  function addHeader(page, title, subtitle) {
    page.drawRectangle({
      x: 0,
      y: H - 70,
      width: W,
      height: 70,
      color: C_PLUM,
    });
    page.drawText(title, {
      x: MARGIN,
      y: H - 38,
      size: 16,
      font: fontBold,
      color: C_WHITE,
    });
    if (subtitle) {
      page.drawText(subtitle, {
        x: MARGIN,
        y: H - 56,
        size: 9.5,
        font: fontRegular,
        color: rgb(0.92, 0.88, 0.96),
      });
    }
  }

  function addFooter(page, pageNum, totalPages = 7) {
    page.drawLine({
      start: { x: MARGIN, y: 36 },
      end: { x: W - MARGIN, y: 36 },
      thickness: 1,
      color: C_LINE,
    });
    page.drawText("BestKidBooks.online  *  Feelings & Friendships Social-Emotional Journal", {
      x: MARGIN,
      y: 22,
      size: 8,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });
    const pgStr = `Page ${pageNum} of ${totalPages}`;
    const pgW = fontRegular.widthOfTextAtSize(pgStr, 8);
    page.drawText(pgStr, {
      x: W - MARGIN - pgW,
      y: 22,
      size: 8,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });
  }

  /* ──────────────────────────────────────────
     PAGE 1: COVER
  ────────────────────────────────────────── */
  {
    const p1 = doc.addPage([W, H]);
    p1.drawRectangle({ x: 0, y: 0, width: W, height: H, color: C_CREAM });

    // Decorative Borders
    p1.drawRectangle({
      x: 24,
      y: 24,
      width: W - 48,
      height: H - 48,
      borderColor: C_PLUM,
      borderWidth: 3,
    });
    p1.drawRectangle({
      x: 30,
      y: 30,
      width: W - 60,
      height: H - 60,
      borderColor: C_ROSE,
      borderWidth: 1.5,
    });

    // Top Category Pill
    p1.drawRectangle({
      x: (W - 320) / 2,
      y: H - 100,
      width: 320,
      height: 30,
      color: C_ROSE,
    });
    const badgeText = "SOCIAL-EMOTIONAL LEARNING & MINDFULNESS (AGES 5-10)";
    const bw = fontBold.widthOfTextAtSize(badgeText, 8.5);
    p1.drawText(badgeText, {
      x: (W - bw) / 2,
      y: H - 81,
      size: 8.5,
      font: fontBold,
      color: C_WHITE,
    });

    // Main Title
    const t1 = "FEELINGS & FRIENDSHIPS";
    const t1w = fontBold.widthOfTextAtSize(t1, 26);
    p1.drawText(t1, {
      x: (W - t1w) / 2,
      y: H - 150,
      size: 26,
      font: fontBold,
      color: C_PLUM,
    });

    const t2 = "SOCIAL-EMOTIONAL JOURNAL";
    const t2w = fontBold.widthOfTextAtSize(t2, 22);
    p1.drawText(t2, {
      x: (W - t2w) / 2,
      y: H - 184,
      size: 22,
      font: fontBold,
      color: C_ROSE,
    });

    // Subtitle
    const sub = "Help Children Name Big Feelings & Cultivate Empathy Through Story Characters";
    const subW = fontItalic.widthOfTextAtSize(sub, 11);
    p1.drawText(sub, {
      x: (W - subW) / 2,
      y: H - 212,
      size: 11,
      font: fontItalic,
      color: C_NAVY,
    });

    // Child Credentials Card
    const cardY = H - 450;
    const cardH = 210;
    p1.drawRectangle({
      x: 60,
      y: cardY,
      width: W - 120,
      height: cardH,
      color: C_WHITE,
      borderColor: C_PLUM,
      borderWidth: 2,
    });

    p1.drawRectangle({
      x: 60,
      y: cardY + cardH - 32,
      width: W - 120,
      height: 32,
      color: C_ROSE_BG,
    });
    p1.drawText("THIS EMOTIONAL EXPLORATION JOURNAL BELONGS TO:", {
      x: 80,
      y: cardY + cardH - 22,
      size: 10,
      font: fontBold,
      color: C_PLUM,
    });

    const fields = [
      { label: "Explorer Name:", y: cardY + 140 },
      { label: "My Current Age / Grade:", y: cardY + 105 },
      { label: "My Favorite Safe Reading Space:", y: cardY + 70 },
      { label: "Special Grown-Up Co-Reader:", y: cardY + 35 },
    ];

    fields.forEach((f) => {
      p1.drawText(f.label, {
        x: 80,
        y: f.y,
        size: 9.5,
        font: fontBold,
        color: C_NAVY,
      });
      p1.drawLine({
        start: { x: 260, y: f.y - 2 },
        end: { x: W - 80, y: f.y - 2 },
        thickness: 1,
        color: C_LINE,
      });
    });

    // Emotional Safety Pledge
    const oathY = H - 600;
    p1.drawRectangle({
      x: 60,
      y: oathY,
      width: W - 120,
      height: 125,
      color: C_WHITE,
      borderColor: C_TEAL,
      borderWidth: 1.5,
    });
    p1.drawText("OUR FAMILY'S EMOTIONAL SAFETY PROMISE", {
      x: 80,
      y: oathY + 102,
      size: 10,
      font: fontBold,
      color: C_TEAL,
    });

    const pledge = [
      "\"All feelings are welcome here: happy, worried, angry, peaceful, and sad.\"",
      "\"Feelings are never bad or wrong. They are messages our body sends us.\"",
      "\"When feelings feel too big, we pause, breathe, talk, and help each other.\"",
      "\"We use book characters as gentle mirrors to understand ourselves and others.\"",
    ];
    pledge.forEach((line, i) => {
      p1.drawText(line, {
        x: 80,
        y: oathY + 80 - i * 18,
        size: 8.5,
        font: fontItalic,
        color: C_NAVY,
      });
    });

    // Verification
    p1.drawText("Developed in alignment with Dr. Dan Siegel's 'Name It to Tame It' Principle", {
      x: (W - fontRegular.widthOfTextAtSize("Developed in alignment with Dr. Dan Siegel's 'Name It to Tame It' Principle", 8)) / 2,
      y: 42,
      size: 8,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });
  }

  /* ──────────────────────────────────────────
     PAGE 2: THE ANIMAL FEELINGS WHEEL
  ────────────────────────────────────────── */
  {
    const p2 = doc.addPage([W, H]);
    addHeader(p2, "The Animal Feelings Wheel", "Kid-friendly emotional archetypes to label and normalize feelings");
    addFooter(p2, 2);

    // Guidance Banner
    p2.drawRectangle({
      x: MARGIN,
      y: H - 110,
      width: CONTENT_W,
      height: 30,
      color: C_MINT_BG,
      borderColor: C_TEAL,
      borderWidth: 1,
    });
    p2.drawText("Neuroscience Tip: When children name an emotion, prefrontal cortex activity calms the amygdala. Use these animal friends to identify how characters (and kids!) feel.", {
      x: MARGIN + 10,
      y: H - 98,
      size: 7.5,
      font: fontBold,
      color: C_TEAL,
    });

    const animals = [
      { name: "Happy Bear", feeling: "Joyful, Warm, Content", clue: "Smiling, heart feels light, ready to share smiles", color: C_AMBER, bg: C_AMBER_BG },
      { name: "Worried Whale", feeling: "Anxious, Overwhelmed", clue: "Butterflies in stomach, heavy deep waters, needs reassurance", color: C_TEAL, bg: C_MINT_BG },
      { name: "Angry Fox", feeling: "Frustrated, Impatient", clue: "Jaw tight, fists clenched, feeling treated unfairly", color: C_ROSE, bg: C_ROSE_BG },
      { name: "Brave Lion", feeling: "Courageous, Determined", clue: "Heart beating fast but trying anyway, standing up tall", color: rgb(0.85, 0.45, 0.20), bg: rgb(0.99, 0.94, 0.90) },
      { name: "Calm Owl", feeling: "Peaceful, Thoughtful", clue: "Quiet breathing, listening carefully, rested mind", color: C_PLUM, bg: rgb(0.95, 0.92, 0.98) },
      { name: "Sad Puppy", feeling: "Disappointed, Lonely", clue: "Tears, heavy shoulders, wanting a soft cuddle or blanket", color: rgb(0.30, 0.45, 0.70), bg: rgb(0.92, 0.95, 0.99) },
      { name: "Proud Giraffe", feeling: "Accomplished, Confident", clue: "Standing tall after working hard, celebrating a win", color: rgb(0.80, 0.60, 0.10), bg: rgb(0.99, 0.97, 0.90) },
      { name: "Excited Monkey", feeling: "Eager, Full of Energy", clue: "Bouncing, talking fast, eager for what comes next", color: rgb(0.70, 0.35, 0.20), bg: rgb(0.98, 0.93, 0.90) },
    ];

    const boxW = (CONTENT_W - 15) / 2;
    const boxH = 125;
    const topY = H - 130;

    animals.forEach((a, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const bx = MARGIN + col * (boxW + 15);
      const by = topY - (row + 1) * boxH - row * 12;

      p2.drawRectangle({
        x: bx,
        y: by,
        width: boxW,
        height: boxH,
        color: a.bg,
        borderColor: a.color,
        borderWidth: 1.5,
      });

      // Header Tag
      p2.drawRectangle({
        x: bx,
        y: by + boxH - 26,
        width: boxW,
        height: 26,
        color: a.color,
      });
      p2.drawText(a.name.toUpperCase(), {
        x: bx + 12,
        y: by + boxH - 18,
        size: 9.5,
        font: fontBold,
        color: C_WHITE,
      });

      p2.drawText(`Core Emotion: ${a.feeling}`, {
        x: bx + 12,
        y: by + boxH - 46,
        size: 8.5,
        font: fontBold,
        color: C_NAVY,
      });

      p2.drawText("What it feels like:", {
        x: bx + 12,
        y: by + boxH - 65,
        size: 8,
        font: fontItalic,
        color: C_GRAY_TEXT,
      });
      p2.drawText(a.clue, {
        x: bx + 12,
        y: by + boxH - 80,
        size: 8,
        font: fontRegular,
        color: C_NAVY,
      });

      p2.drawText("[ ] Character felt this tonight    [ ] I felt this today", {
        x: bx + 12,
        y: by + 12,
        size: 7.5,
        font: fontRegular,
        color: a.color,
      });
    });
  }

  /* ──────────────────────────────────────────
     PAGE 3: EMPATHY PROMPTS & CHARACTER MIRRORS
  ────────────────────────────────────────── */
  {
    const p3 = doc.addPage([W, H]);
    addHeader(p3, "Empathy Prompts & Character Mirrors", "Questions that connect book events to your child's real social world");
    addFooter(p3, 3);

    const prompts = [
      {
        title: "1. IMPULSE CONTROL & PATIENCE",
        question: "\"When Fox got impatient in tonight's story, what helped him wait?\"",
        desc: "Talk about times we feel in a huge hurry. What can our hands and body do while we wait?",
        boxHeight: 110,
        color: C_ROSE,
      },
      {
        title: "2. NORMALIZING ANXIETY & WORRY",
        question: "\"Have you ever felt a small worry grow big like Whale's tide?\"",
        desc: "What helped Whale feel anchored? What helps you feel safe when a worry pops up?",
        boxHeight: 110,
        color: C_TEAL,
      },
      {
        title: "3. COMPASSION & RECOVERY FROM MISTAKES",
        question: "\"What kind words can we give someone who made an honest mistake?\"",
        desc: "Characters make mistakes in every great book. How did their friends react?",
        boxHeight: 110,
        color: C_PLUM,
      },
      {
        title: "4. EVERYDAY BRAVERY & COURAGE",
        question: "\"Draw or write what bravery looked like in tonight's chapter.\"",
        desc: "Bravery is rarely fighting dragons—it is asking for help, saying hello to someone new, or trying again.",
        boxHeight: 140,
        color: C_AMBER,
      },
    ];

    let currentY = H - 90;
    prompts.forEach((item) => {
      currentY -= item.boxHeight + 12;

      p3.drawRectangle({
        x: MARGIN,
        y: currentY,
        width: CONTENT_W,
        height: item.boxHeight,
        color: C_WHITE,
        borderColor: item.color,
        borderWidth: 1.5,
      });

      p3.drawRectangle({
        x: MARGIN,
        y: currentY + item.boxHeight - 22,
        width: CONTENT_W,
        height: 22,
        color: item.color,
      });
      p3.drawText(item.title, {
        x: MARGIN + 10,
        y: currentY + item.boxHeight - 15,
        size: 8.5,
        font: fontBold,
        color: C_WHITE,
      });

      p3.drawText(item.question, {
        x: MARGIN + 12,
        y: currentY + item.boxHeight - 40,
        size: 9.5,
        font: fontBold,
        color: C_NAVY,
      });

      p3.drawText(item.desc, {
        x: MARGIN + 12,
        y: currentY + item.boxHeight - 55,
        size: 8,
        font: fontItalic,
        color: C_GRAY_TEXT,
      });

      // Reflection lines
      const lineCount = item.boxHeight > 120 ? 3 : 2;
      for (let l = 0; l < lineCount; l++) {
        p3.drawLine({
          start: { x: MARGIN + 12, y: currentY + 45 - l * 20 },
          end: { x: W - MARGIN - 12, y: currentY + 45 - l * 20 },
          thickness: 0.8,
          color: C_LINE,
        });
      }
    });
  }

  /* ──────────────────────────────────────────
     PAGE 4: MY CALMING STRATEGY TOOLKIT
  ────────────────────────────────────────── */
  {
    const p4 = doc.addPage([W, H]);
    addHeader(p4, "My Calming Strategy Toolkit", "Self-regulation tools for when feelings feel too big");
    addFooter(p4, 4);

    const tools = [
      {
        num: "1",
        title: "THE 3 WHALE BREATHS",
        subtitle: "Deep Belly Breathing to Slow Down the Nervous System",
        steps: [
          "1. Place one hand on your tummy like a whale floating on the calm sea.",
          "2. Breathe in deeply through your nose for 4 seconds — feel tummy rise.",
          "3. Exhale slowly out your mouth like a gentle whale spout for 5 seconds.",
          "4. Repeat 3 times until your shoulders drop and muscles relax.",
        ],
        color: C_TEAL,
        bg: C_MINT_BG,
      },
      {
        num: "2",
        title: "THE OWL 5-4-3-2-1 GROUNDING SPRAY",
        subtitle: "Mindfulness Observation to Bring Racing Thoughts Home",
        steps: [
          "5 Things you can see around your bedroom right now.",
          "4 Things you can physically touch (pillow, pyjamas, soft blanket).",
          "3 Sounds you can hear (clock ticking, evening breeze, parent's breath).",
          "2 Scents you can smell (cozy pajamas, evening air, favorite book).",
          "1 Kind thought about yourself: 'I am safe. I am loved.'",
        ],
        color: C_PLUM,
        bg: rgb(0.96, 0.93, 0.99),
      },
      {
        num: "3",
        title: "DOODLE THE VOLCANO (RELEASE BOX)",
        subtitle: "Expressing Big Anger or Overwhelm Through Art",
        steps: [
          "Scratch, scribble, or press colors hard into this box when words are too hard.",
          "Anger is energy in your hands. Putting it on paper lets it out safely.",
        ],
        color: C_ROSE,
        bg: C_ROSE_BG,
      },
    ];

    let currentY = H - 90;
    tools.forEach((t, i) => {
      const boxH = i === 2 ? 220 : 160;
      currentY -= boxH + 15;

      p4.drawRectangle({
        x: MARGIN,
        y: currentY,
        width: CONTENT_W,
        height: boxH,
        color: t.bg,
        borderColor: t.color,
        borderWidth: 1.5,
      });

      p4.drawRectangle({
        x: MARGIN,
        y: currentY + boxH - 26,
        width: CONTENT_W,
        height: 26,
        color: t.color,
      });
      p4.drawText(`STRATEGY ${t.num}: ${t.title}`, {
        x: MARGIN + 12,
        y: currentY + boxH - 18,
        size: 9.5,
        font: fontBold,
        color: C_WHITE,
      });

      p4.drawText(t.subtitle, {
        x: MARGIN + 12,
        y: currentY + boxH - 45,
        size: 8.5,
        font: fontItalic,
        color: C_NAVY,
      });

      t.steps.forEach((step, sIdx) => {
        p4.drawText(step, {
          x: MARGIN + 12,
          y: currentY + boxH - 68 - sIdx * 18,
          size: 8,
          font: fontRegular,
          color: C_NAVY,
        });
      });

      if (i === 2) {
        // Draw the inner doodle area
        p4.drawRectangle({
          x: MARGIN + 15,
          y: currentY + 15,
          width: CONTENT_W - 30,
          height: 90,
          color: C_WHITE,
          borderColor: C_ROSE,
          borderWidth: 1,
        });
        p4.drawText("(Doodle, draw squiggles, or sketch your calm place inside this box)", {
          x: MARGIN + 80,
          y: currentY + 55,
          size: 8,
          font: fontItalic,
          color: C_GRAY_TEXT,
        });
      }
    });
  }

  /* ──────────────────────────────────────────
     PAGE 5: DAILY PRINTABLE ENTRY TEMPLATE
  ────────────────────────────────────────── */
  {
    const p5 = doc.addPage([W, H]);
    addHeader(p5, "Nightly Social-Emotional Reflection Page", "Print this sheet for bedtime story reflections (Print as many copies as needed!)");
    addFooter(p5, 5);

    // Book Header Row
    p5.drawRectangle({
      x: MARGIN,
      y: H - 145,
      width: CONTENT_W,
      height: 60,
      color: C_WHITE,
      borderColor: C_PLUM,
      borderWidth: 1.5,
    });
    p5.drawText("TONIGHT'S STORY:", { x: MARGIN + 10, y: H - 105, size: 8.5, font: fontBold, color: C_PLUM });
    p5.drawText("Book Title & Author: ________________________________________________________________", {
      x: MARGIN + 10,
      y: H - 120,
      size: 8.5,
      font: fontRegular,
      color: C_NAVY,
    });
    p5.drawText("Date: ________________________    Main Character: ___________________________________", {
      x: MARGIN + 10,
      y: H - 138,
      size: 8.5,
      font: fontRegular,
      color: C_NAVY,
    });

    // Section 1: Character's Feeling
    p5.drawRectangle({
      x: MARGIN,
      y: H - 280,
      width: CONTENT_W,
      height: 125,
      color: C_ROSE_BG,
      borderColor: C_ROSE,
      borderWidth: 1.5,
    });
    p5.drawText("1. WHAT ANIMAL FEELING DID THE MAIN CHARACTER EXPERIENCE?", {
      x: MARGIN + 10,
      y: H - 165,
      size: 8.5,
      font: fontBold,
      color: C_ROSE,
    });
    p5.drawText("[ ] Happy Bear    [ ] Worried Whale    [ ] Angry Fox    [ ] Brave Lion", {
      x: MARGIN + 15,
      y: H - 185,
      size: 8.5,
      font: fontBold,
      color: C_NAVY,
    });
    p5.drawText("[ ] Calm Owl      [ ] Sad Puppy        [ ] Proud Giraffe [ ] Excited Monkey", {
      x: MARGIN + 15,
      y: H - 205,
      size: 8.5,
      font: fontBold,
      color: C_NAVY,
    });
    p5.drawText("Why did they feel this way in the story?", {
      x: MARGIN + 15,
      y: H - 225,
      size: 8,
      font: fontItalic,
      color: C_GRAY_TEXT,
    });
    p5.drawLine({ start: { x: MARGIN + 15, y: H - 245 }, end: { x: W - MARGIN - 15, y: H - 245 }, thickness: 0.8, color: C_LINE });
    p5.drawLine({ start: { x: MARGIN + 15, y: H - 265 }, end: { x: W - MARGIN - 15, y: H - 265 }, thickness: 0.8, color: C_LINE });

    // Section 2: Personal Bridge
    p5.drawRectangle({
      x: MARGIN,
      y: H - 420,
      width: CONTENT_W,
      height: 130,
      color: C_MINT_BG,
      borderColor: C_TEAL,
      borderWidth: 1.5,
    });
    p5.drawText("2. MY PERSONAL FEELINGS BRIDGE", {
      x: MARGIN + 10,
      y: H - 300,
      size: 8.5,
      font: fontBold,
      color: C_TEAL,
    });
    p5.drawText("\"Have you ever felt something similar to what happened in this book?\"", {
      x: MARGIN + 15,
      y: H - 320,
      size: 8.5,
      font: fontItalic,
      color: C_NAVY,
    });
    for (let l = 0; l < 4; l++) {
      p5.drawLine({
        start: { x: MARGIN + 15, y: H - 345 - l * 20 },
        end: { x: W - MARGIN - 15, y: H - 345 - l * 20 },
        thickness: 0.8,
        color: C_LINE,
      });
    }

    // Section 3: Empathy & Calming Action
    p5.drawRectangle({
      x: MARGIN,
      y: H - 570,
      width: CONTENT_W,
      height: 140,
      color: C_AMBER_BG,
      borderColor: C_AMBER,
      borderWidth: 1.5,
    });
    p5.drawText("3. EMPATHY & CALMING STRATEGY", {
      x: MARGIN + 10,
      y: H - 440,
      size: 8.5,
      font: fontBold,
      color: C_AMBER,
    });
    p5.drawText("How did the character resolve their problem or find calm?", {
      x: MARGIN + 15,
      y: H - 460,
      size: 8,
      font: fontItalic,
      color: C_GRAY_TEXT,
    });
    p5.drawLine({ start: { x: MARGIN + 15, y: H - 480 }, end: { x: W - MARGIN - 15, y: H - 480 }, thickness: 0.8, color: C_LINE });

    p5.drawText("What is one calming strategy we will remember for tomorrow?", {
      x: MARGIN + 15,
      y: H - 505,
      size: 8,
      font: fontItalic,
      color: C_GRAY_TEXT,
    });
    p5.drawLine({ start: { x: MARGIN + 15, y: H - 525 }, end: { x: W - MARGIN - 15, y: H - 525 }, thickness: 0.8, color: C_LINE });
    p5.drawLine({ start: { x: MARGIN + 15, y: H - 548 }, end: { x: W - MARGIN - 15, y: H - 548 }, thickness: 0.8, color: C_LINE });

    // Section 4: Parent's 1-Line Memory Note
    p5.drawRectangle({
      x: MARGIN,
      y: 55,
      width: CONTENT_W,
      height: 60,
      color: C_WHITE,
      borderColor: C_PLUM,
      borderWidth: 1,
    });
    p5.drawText("PARENT'S 1-LINE HEART NOTE (Something insightful or sweet your child said tonight):", {
      x: MARGIN + 10,
      y: 98,
      size: 7.5,
      font: fontBold,
      color: C_PLUM,
    });
    p5.drawLine({ start: { x: MARGIN + 10, y: 75 }, end: { x: W - MARGIN - 10, y: 75 }, thickness: 0.8, color: C_LINE });
  }

  /* ──────────────────────────────────────────
     PAGE 6: FRIENDSHIP REPAIR & KINDNESS GUIDE
  ────────────────────────────────────────── */
  {
    const p6 = doc.addPage([W, H]);
    addHeader(p6, "The Friendship Repair & Kindness Guide", "Social scripts for apologizing, resolving conflict, and being a loyal friend");
    addFooter(p6, 6);

    // Box 1: The 4-Part Apology
    p6.drawRectangle({
      x: MARGIN,
      y: H - 320,
      width: CONTENT_W,
      height: 220,
      color: C_MINT_BG,
      borderColor: C_TEAL,
      borderWidth: 1.5,
    });
    p6.drawRectangle({
      x: MARGIN,
      y: H - 125,
      width: CONTENT_W,
      height: 25,
      color: C_TEAL,
    });
    p6.drawText("THE 4-PART SINCERE APOLOGY (HOW TO MAKE THINGS RIGHT)", {
      x: MARGIN + 12,
      y: H - 118,
      size: 9.5,
      font: fontBold,
      color: C_WHITE,
    });

    const apologyParts = [
      { step: "Part 1: Name What Happened", script: "\"I am sorry for taking your book without asking.\"" },
      { step: "Part 2: Acknowledge Their Feeling", script: "\"I know that made you feel frustrated and upset.\"" },
      { step: "Part 3: Make It Right", script: "\"Here is your book back, and can I help you find your page?\"" },
      { step: "Part 4: Future Plan", script: "\"Next time I will ask first and wait for your answer.\"" },
    ];
    apologyParts.forEach((p, idx) => {
      p6.drawText(p.step, {
        x: MARGIN + 15,
        y: H - 150 - idx * 40,
        size: 9,
        font: fontBold,
        color: C_NAVY,
      });
      p6.drawText(p.script, {
        x: MARGIN + 25,
        y: H - 165 - idx * 40,
        size: 8.5,
        font: fontItalic,
        color: C_TEAL,
      });
    });

    // Box 2: Kind Words Bank
    p6.drawRectangle({
      x: MARGIN,
      y: 60,
      width: CONTENT_W,
      height: 380,
      color: C_ROSE_BG,
      borderColor: C_ROSE,
      borderWidth: 1.5,
    });
    p6.drawRectangle({
      x: MARGIN,
      y: 415,
      width: CONTENT_W,
      height: 25,
      color: C_ROSE,
    });
    p6.drawText("KIND WORDS PHRASE BANK (FOR HOME, SCHOOL & PLAYGROUND)", {
      x: MARGIN + 12,
      y: 422,
      size: 9.5,
      font: fontBold,
      color: C_WHITE,
    });

    const phraseGroups = [
      {
        cat: "WHEN SOMEONE IS SAD OR HURT:",
        phrases: [
          "\"I see you're feeling down. Would you like to sit together?\"",
          "\"You don't have to talk right now, but I am right here.\"",
          "\"That sounded really hard. I believe you.\"",
        ],
      },
      {
        cat: "WHEN YOU WANT TO JOIN PLAY:",
        phrases: [
          "\"That game looks super fun! Can I be the helper / co-pilot?\"",
          "\"Would you like to build together or take turns?\"",
        ],
      },
      {
        cat: "WHEN YOU DISAGREE WITHOUT SHOUTING:",
        phrases: [
          "\"I see it a different way. Can I share my idea?\"",
          "\"Let's do your way for 5 minutes, then my way!\"",
          "\"I feel upset right now. I need 2 minutes to cool down.\"",
        ],
      },
    ];

    let groupY = 385;
    phraseGroups.forEach((g) => {
      p6.drawText(g.cat, {
        x: MARGIN + 15,
        y: groupY,
        size: 8.5,
        font: fontBold,
        color: C_ROSE,
      });
      groupY -= 18;
      g.phrases.forEach((ph) => {
        p6.drawText(`*  ${ph}`, {
          x: MARGIN + 25,
          y: groupY,
          size: 8,
          font: fontRegular,
          color: C_NAVY,
        });
        groupY -= 18;
      });
      groupY -= 10;
    });
  }

  /* ──────────────────────────────────────────
     PAGE 7: CERTIFICATE OF EMOTIONAL BRAVERY
  ────────────────────────────────────────── */
  {
    const p7 = doc.addPage([W, H]);
    p7.drawRectangle({ x: 0, y: 0, width: W, height: H, color: C_CREAM });
    p7.drawRectangle({
      x: 20,
      y: 20,
      width: W - 40,
      height: H - 40,
      borderColor: C_PLUM,
      borderWidth: 4,
    });
    p7.drawRectangle({
      x: 28,
      y: 28,
      width: W - 56,
      height: H - 56,
      borderColor: C_ROSE,
      borderWidth: 1.5,
    });

    const certTop = H - 90;
    p7.drawText("OFFICIAL CITATION OF EMPATHY & CHARACTER", {
      x: (W - fontBold.widthOfTextAtSize("OFFICIAL CITATION OF EMPATHY & CHARACTER", 10)) / 2,
      y: certTop,
      size: 10,
      font: fontBold,
      color: C_ROSE,
    });

    const certTitle = "CERTIFICATE OF EMOTIONAL BRAVERY";
    p7.drawText(certTitle, {
      x: (W - fontBold.widthOfTextAtSize(certTitle, 22)) / 2,
      y: certTop - 36,
      size: 22,
      font: fontBold,
      color: C_PLUM,
    });

    const certSub = "Presented with immense love and pride to:";
    p7.drawText(certSub, {
      x: (W - fontItalic.widthOfTextAtSize(certSub, 12)) / 2,
      y: certTop - 68,
      size: 12,
      font: fontItalic,
      color: C_NAVY,
    });

    p7.drawLine({
      start: { x: 80, y: certTop - 130 },
      end: { x: W - 80, y: certTop - 130 },
      thickness: 2,
      color: C_ROSE,
    });
    p7.drawText("(Name of Young Empathy Champion)", {
      x: (W - fontRegular.widthOfTextAtSize("(Name of Young Empathy Champion)", 9)) / 2,
      y: certTop - 146,
      size: 9,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });

    const certBody = [
      "for displaying exceptional courage by naming big feelings, practicing calm breaths,",
      "and showing genuine kindness and empathy toward friends, family, and story characters.",
      "You have proven that having big feelings is part of being human,",
      "and that using gentle words makes our entire world brighter.",
    ];

    certBody.forEach((line, i) => {
      p7.drawText(line, {
        x: (W - fontRegular.widthOfTextAtSize(line, 9.5)) / 2,
        y: certTop - 185 - i * 24,
        size: 9.5,
        font: fontRegular,
        color: C_NAVY,
      });
    });

    // Big Heart / Medal Center Emblem
    const sealX = W / 2;
    const sealY = certTop - 330;
    p7.drawCircle({
      x: sealX,
      y: sealY,
      size: 44,
      color: C_ROSE_BG,
      borderColor: C_ROSE,
      borderWidth: 3,
    });
    const s1 = "EMPATHY";
    p7.drawText(s1, {
      x: sealX - fontBold.widthOfTextAtSize(s1, 11) / 2,
      y: sealY + 4,
      size: 11,
      font: fontBold,
      color: C_PLUM,
    });
    const s2 = "CHAMPION";
    p7.drawText(s2, {
      x: sealX - fontBold.widthOfTextAtSize(s2, 9) / 2,
      y: sealY - 12,
      size: 9,
      font: fontBold,
      color: C_ROSE,
    });

    // Signature lines
    const sigY = 120;
    p7.drawLine({
      start: { x: 70, y: sigY },
      end: { x: 230, y: sigY },
      thickness: 1,
      color: C_NAVY,
    });
    p7.drawText("Date Awarded", {
      x: 70 + (160 - fontRegular.widthOfTextAtSize("Date Awarded", 9)) / 2,
      y: sigY - 16,
      size: 9,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });

    p7.drawLine({
      start: { x: W - 230, y: sigY },
      end: { x: W - 70, y: sigY },
      thickness: 1,
      color: C_NAVY,
    });
    p7.drawText("Parent / Teacher Signature", {
      x: W - 230 + (160 - fontRegular.widthOfTextAtSize("Parent / Teacher Signature", 9)) / 2,
      y: sigY - 16,
      size: 9,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });

    p7.drawText("BestKidBooks.online  *  Social-Emotional Literacy & Child Wellness", {
      x: (W - fontRegular.widthOfTextAtSize("BestKidBooks.online  *  Social-Emotional Literacy & Child Wellness", 8)) / 2,
      y: 45,
      size: 8,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });
  }

  const pdfBytes = await doc.save();
  const outPath = path.join("d:", "kids-resource", "public", "downloads", "feelings-friendships-journal.pdf");
  fs.writeFileSync(outPath, pdfBytes);
  console.log("Successfully generated Feelings Journal PDF! File size:", pdfBytes.length, "bytes at", outPath);
}

generateFeelingsPDF().catch((err) => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
