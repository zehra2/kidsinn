const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

/* ── Fresh Habit Builder Color Palette (Mint / Orange / Sunny Gold) ── */
const C_EMERALD   = rgb(0.10, 0.55, 0.40);
const C_MINT_LIGHT= rgb(0.92, 0.98, 0.95);
const C_SUNNY     = rgb(0.98, 0.72, 0.18);
const C_ORANGE    = rgb(0.95, 0.44, 0.22);
const C_CORAL_BG  = rgb(0.99, 0.94, 0.92);
const C_NAVY      = rgb(0.12, 0.16, 0.28);
const C_CREAM     = rgb(0.99, 0.98, 0.95);
const C_WHITE     = rgb(1, 1, 1);
const C_GRAY_TEXT = rgb(0.42, 0.46, 0.52);
const C_LINE      = rgb(0.82, 0.86, 0.88);

async function generateTinyTriumphsPDF() {
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
      color: C_EMERALD,
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
        color: rgb(0.90, 0.97, 0.94),
      });
    }
  }

  function addFooter(page, pageNum, totalPages = 6) {
    page.drawLine({
      start: { x: MARGIN, y: 36 },
      end: { x: W - MARGIN, y: 36 },
      thickness: 1,
      color: C_LINE,
    });
    page.drawText("BestKidBooks.online  *  Tiny Triumphs 30-Day Reading Habit Diary", {
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

    p1.drawRectangle({
      x: 24,
      y: 24,
      width: W - 48,
      height: H - 48,
      borderColor: C_EMERALD,
      borderWidth: 3,
    });
    p1.drawRectangle({
      x: 30,
      y: 30,
      width: W - 60,
      height: H - 60,
      borderColor: C_SUNNY,
      borderWidth: 1.5,
    });

    // Top Category Pill
    p1.drawRectangle({
      x: (W - 320) / 2,
      y: H - 100,
      width: 320,
      height: 30,
      color: C_ORANGE,
    });
    const badgeText = "30-DAY HABIT BUILDER & PHONICS DIARY (AGES 3-8)";
    const bw = fontBold.widthOfTextAtSize(badgeText, 8.5);
    p1.drawText(badgeText, {
      x: (W - bw) / 2,
      y: H - 81,
      size: 8.5,
      font: fontBold,
      color: C_WHITE,
    });

    // Title
    const t1 = "TINY TRIUMPHS";
    const t1w = fontBold.widthOfTextAtSize(t1, 28);
    p1.drawText(t1, {
      x: (W - t1w) / 2,
      y: H - 150,
      size: 28,
      font: fontBold,
      color: C_EMERALD,
    });

    const t2 = "30-DAY READING HABIT DIARY";
    const t2w = fontBold.widthOfTextAtSize(t2, 22);
    p1.drawText(t2, {
      x: (W - t2w) / 2,
      y: H - 184,
      size: 22,
      font: fontBold,
      color: C_ORANGE,
    });

    const sub = "Build the Daily Reading Habit, One Joyful Micro-Win at a Time";
    const subW = fontItalic.widthOfTextAtSize(sub, 12);
    p1.drawText(sub, {
      x: (W - subW) / 2,
      y: H - 212,
      size: 12,
      font: fontItalic,
      color: C_NAVY,
    });

    // Credential Box
    const cardY = H - 440;
    const cardH = 200;
    p1.drawRectangle({
      x: 60,
      y: cardY,
      width: W - 120,
      height: cardH,
      color: C_WHITE,
      borderColor: C_EMERALD,
      borderWidth: 2,
    });

    p1.drawRectangle({
      x: 60,
      y: cardY + cardH - 32,
      width: W - 120,
      height: 32,
      color: C_MINT_LIGHT,
    });
    p1.drawText("OFFICIAL 30-DAY READING HABIT CREDENTIALS", {
      x: 80,
      y: cardY + cardH - 22,
      size: 10,
      font: fontBold,
      color: C_EMERALD,
    });

    const fields = [
      { label: "Habit Explorer Name:", y: cardY + 130 },
      { label: "My Age / Grade:", y: cardY + 95 },
      { label: "Challenge Start Date:", y: cardY + 60 },
      { label: "Our Family Reading Cue (e.g. After Dinner):", y: cardY + 25 },
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
        start: { x: 300, y: f.y - 2 },
        end: { x: W - 80, y: f.y - 2 },
        thickness: 1,
        color: C_LINE,
      });
    });

    // Pledge
    const oathY = H - 590;
    p1.drawRectangle({
      x: 60,
      y: oathY,
      width: W - 120,
      height: 120,
      color: C_WHITE,
      borderColor: C_SUNNY,
      borderWidth: 1.5,
    });
    p1.drawText("THE TINY TRIUMPHS HABIT PLEDGE", {
      x: 80,
      y: oathY + 95,
      size: 10,
      font: fontBold,
      color: rgb(0.80, 0.55, 0.10),
    });

    const pledgeLines = [
      "\"10 minutes a day is all it takes to grow a powerful reading mind.\"",
      "\"We celebrate every story, sound game, and silly moment.\"",
      "\"Even if we read just one short page, we keep our streak alive!\"",
    ];
    pledgeLines.forEach((line, i) => {
      p1.drawText(line, {
        x: 80,
        y: oathY + 70 - i * 20,
        size: 8.5,
        font: fontItalic,
        color: C_NAVY,
      });
    });

    p1.drawText("Explorer Signature: _______________________    Grown-Up Co-Pilot: _______________________", {
      x: 80,
      y: oathY + 15,
      size: 8,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });

    p1.drawText("BestKidBooks.online  *  Pediatric Literacy Habit Stacking Framework (Ages 3-8)", {
      x: (W - fontRegular.widthOfTextAtSize("BestKidBooks.online  *  Pediatric Literacy Habit Stacking Framework (Ages 3-8)", 8.5)) / 2,
      y: 42,
      size: 8.5,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });
  }

  /* ──────────────────────────────────────────
     PAGE 2: 30-DAY STREAK PASSPORT MAP
  ────────────────────────────────────────── */
  {
    const p2 = doc.addPage([W, H]);
    addHeader(p2, "My 30-Day Reading Streak Map", "Color or stamp a star every day you read! Reach all 6 milestones!");
    addFooter(p2, 2);

    // Tip Banner
    p2.drawRectangle({
      x: MARGIN,
      y: H - 110,
      width: CONTENT_W,
      height: 28,
      color: C_MINT_LIGHT,
      borderColor: C_EMERALD,
      borderWidth: 1,
    });
    p2.drawText("Habit Rule: Never miss twice! If you miss a day, just jump right back in on the next star. No guilt!", {
      x: MARGIN + 10,
      y: H - 98,
      size: 8,
      font: fontBold,
      color: C_EMERALD,
    });

    // 30 Stars Grid (6 rows x 5 cols)
    const cols = 5;
    const rows = 6;
    const gridLeft = MARGIN + 15;
    const gridTop = H - 130;
    const cellW = (CONTENT_W - 30) / cols;
    const cellH = 90;
    const milestones = [5, 10, 15, 20, 25, 30];
    const milestoneLabels = {
      5: "Spark Reader",
      10: "Rhythm Master",
      15: "Halfway Hero",
      20: "Story Explorer",
      25: "Habit Master",
      30: "Grand Champion!",
    };

    for (let i = 0; i < 30; i++) {
      const num = i + 1;
      const col = i % cols;
      const row = Math.floor(i / cols);

      const cx = gridLeft + col * cellW + cellW / 2;
      const cy = gridTop - row * cellH - cellH / 2 + 10;
      const isMilestone = milestones.includes(num);

      // Card box
      p2.drawRectangle({
        x: cx - cellW / 2 + 6,
        y: cy - cellH / 2 + 14,
        width: cellW - 12,
        height: cellH - 16,
        color: isMilestone ? rgb(0.99, 0.96, 0.90) : C_WHITE,
        borderColor: isMilestone ? C_SUNNY : C_EMERALD,
        borderWidth: isMilestone ? 2 : 1,
      });

      // Day Badge circle
      p2.drawCircle({
        x: cx,
        y: cy + 12,
        size: 16,
        color: isMilestone ? C_ORANGE : C_EMERALD,
      });
      const numStr = String(num);
      const nw = fontBold.widthOfTextAtSize(numStr, 9);
      p2.drawText(numStr, {
        x: cx - nw / 2,
        y: cy + 9,
        size: 9,
        font: fontBold,
        color: C_WHITE,
      });

      // Day label
      const dLabel = `DAY ${num}`;
      const dw = fontBold.widthOfTextAtSize(dLabel, 7.5);
      p2.drawText(dLabel, {
        x: cx - dw / 2,
        y: cy - 12,
        size: 7.5,
        font: fontBold,
        color: C_NAVY,
      });

      // Milestone text
      if (isMilestone) {
        const mText = milestoneLabels[num];
        const mw = fontBold.widthOfTextAtSize(mText, 6.5);
        p2.drawText(mText, {
          x: cx - mw / 2,
          y: cy - 22,
          size: 6.5,
          font: fontBold,
          color: C_ORANGE,
        });
      } else {
        const checkText = "[ ] Done!";
        const cw = fontRegular.widthOfTextAtSize(checkText, 6.5);
        p2.drawText(checkText, {
          x: cx - cw / 2,
          y: cy - 22,
          size: 6.5,
          font: fontRegular,
          color: C_GRAY_TEXT,
        });
      }
    }
  }

  /* ──────────────────────────────────────────
     PAGE 3: SOUND OF THE DAY & PHONICS BLENDS
  ────────────────────────────────────────── */
  {
    const p3 = doc.addPage([W, H]);
    addHeader(p3, "Sound-of-the-Day Phonics Hunt", "Hunt for these high-frequency sounds in your bedtime books!");
    addFooter(p3, 3);

    const sounds = [
      { sound: "SH", hint: "Like Sheep, Ship, Wish", color: C_EMERALD },
      { sound: "CH", hint: "Like Chair, Chip, Match", color: C_ORANGE },
      { sound: "TH", hint: "Like Thumb, Three, Bath", color: rgb(0.20, 0.45, 0.75) },
      { sound: "EE", hint: "Like Tree, Sleep, Meet", color: rgb(0.80, 0.40, 0.10) },
      { sound: "OO", hint: "Like Moon, Book, Spoon", color: rgb(0.50, 0.25, 0.65) },
      { sound: "AR", hint: "Like Star, Barn, Shark", color: C_SUNNY },
      { sound: "ING", hint: "Like Ring, Singing, King", color: rgb(0.85, 0.30, 0.40) },
      { sound: "SP", hint: "Like Spot, Space, Spoon", color: C_EMERALD },
    ];

    const boxW = (CONTENT_W - 15) / 2;
    const boxH = 125;
    const topY = H - 100;

    sounds.forEach((s, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const bx = MARGIN + col * (boxW + 15);
      const by = topY - (row + 1) * boxH - row * 15;

      p3.drawRectangle({
        x: bx,
        y: by,
        width: boxW,
        height: boxH,
        color: C_WHITE,
        borderColor: s.color,
        borderWidth: 1.5,
      });

      p3.drawRectangle({
        x: bx,
        y: by + boxH - 26,
        width: boxW,
        height: 26,
        color: s.color,
      });
      p3.drawText(`SOUND: /${s.sound}/`, {
        x: bx + 12,
        y: by + boxH - 18,
        size: 10,
        font: fontBold,
        color: C_WHITE,
      });

      p3.drawText(s.hint, {
        x: bx + 12,
        y: by + boxH - 45,
        size: 8.5,
        font: fontItalic,
        color: C_NAVY,
      });

      p3.drawText("Words we found in tonight's story:", {
        x: bx + 12,
        y: by + boxH - 65,
        size: 8,
        font: fontBold,
        color: C_GRAY_TEXT,
      });

      p3.drawLine({ start: { x: bx + 12, y: by + 35 }, end: { x: bx + boxW - 12, y: by + 35 }, thickness: 0.8, color: C_LINE });
      p3.drawLine({ start: { x: bx + 12, y: by + 15 }, end: { x: bx + boxW - 12, y: by + 15 }, thickness: 0.8, color: C_LINE });
    });
  }

  /* ──────────────────────────────────────────
     PAGE 4: REPEATABLE DAILY ENTRY TEMPLATE
  ────────────────────────────────────────── */
  {
    const p4 = doc.addPage([W, H]);
    addHeader(p4, "Daily Reading Micro-Entry (Print as needed!)", "Quick 3-minute entry after your daily reading session");
    addFooter(p4, 4);

    // 3 entry blocks per page
    for (let e = 0; e < 3; e++) {
      const eY = H - 100 - e * 205;
      const eH = 190;

      p4.drawRectangle({
        x: MARGIN,
        y: eY - eH,
        width: CONTENT_W,
        height: eH,
        color: C_WHITE,
        borderColor: C_EMERALD,
        borderWidth: 1.5,
      });

      p4.drawRectangle({
        x: MARGIN,
        y: eY - 26,
        width: CONTENT_W,
        height: 26,
        color: C_MINT_LIGHT,
      });
      p4.drawText(`READING HABIT ENTRY #${e + 1}`, {
        x: MARGIN + 12,
        y: eY - 18,
        size: 9.5,
        font: fontBold,
        color: C_EMERALD,
      });

      p4.drawText("Date: ____________   Minutes Read: [  ] 5 min  [  ] 10 min  [  ] 15+ min", {
        x: MARGIN + 160,
        y: eY - 18,
        size: 8.5,
        font: fontRegular,
        color: C_NAVY,
      });

      p4.drawText("Book Title & Author: ____________________________________________________________________", {
        x: MARGIN + 12,
        y: eY - 48,
        size: 8.5,
        font: fontRegular,
        color: C_NAVY,
      });

      p4.drawText("The Coolest Sound or Word We Spotted: ___________________________________________________", {
        x: MARGIN + 12,
        y: eY - 75,
        size: 8.5,
        font: fontRegular,
        color: C_NAVY,
      });

      p4.drawText("Our Silly Character Moment (What made us giggle tonight?):", {
        x: MARGIN + 12,
        y: eY - 102,
        size: 8.5,
        font: fontBold,
        color: C_ORANGE,
      });
      p4.drawLine({ start: { x: MARGIN + 12, y: eY - 125 }, end: { x: W - MARGIN - 12, y: eY - 125 }, thickness: 0.8, color: C_LINE });
      p4.drawLine({ start: { x: MARGIN + 12, y: eY - 148 }, end: { x: W - MARGIN - 12, y: eY - 148 }, thickness: 0.8, color: C_LINE });

      p4.drawText("Streak Check: [  ] Star Colored!       Rating: [*] [*] [*] [*] [*] Fun Stars", {
        x: MARGIN + 12,
        y: eY - 172,
        size: 8.5,
        font: fontBold,
        color: C_EMERALD,
      });
    }
  }

  /* ──────────────────────────────────────────
     PAGE 5: CELEBRATION REWARDS MENU
  ────────────────────────────────────────── */
  {
    const p5 = doc.addPage([W, H]);
    addHeader(p5, "Habit Milestones & Screen-Free Celebrations", "Joyful rewards to celebrate reaching days 5, 10, 15, 20, 25, and 30!");
    addFooter(p5, 5);

    const rewards = [
      { day: "DAY 5", title: "Spark Reader Milestone", reward: "Special bedtime reading fort with extra blankets and a flashlight", color: C_EMERALD },
      { day: "DAY 10", title: "Rhythm Master Milestone", reward: "Choosing the family dinner or favorite dessert night", color: C_ORANGE },
      { day: "DAY 15", title: "Halfway Hero Milestone", reward: "Special trip to the library to check out a giant stack of books", color: rgb(0.20, 0.45, 0.75) },
      { day: "DAY 20", title: "Story Explorer Milestone", reward: "Cozy reading picnic outdoors or on the living room floor", color: rgb(0.80, 0.40, 0.10) },
      { day: "DAY 25", title: "Habit Master Milestone", reward: "Staying up 15 minutes extra for uninterrupted storytime", color: rgb(0.50, 0.25, 0.65) },
      { day: "DAY 30", title: "Grand 30-Day Champion!", reward: "Official Certificate + Family Book Champion Celebration!", color: C_SUNNY },
    ];

    let startY = H - 95;
    rewards.forEach((r, idx) => {
      const boxH = 85;
      const boxY = startY - idx * (boxH + 14);

      p5.drawRectangle({
        x: MARGIN,
        y: boxY,
        width: CONTENT_W,
        height: boxH,
        color: C_WHITE,
        borderColor: r.color,
        borderWidth: 2,
      });

      p5.drawRectangle({
        x: MARGIN + 12,
        y: boxY + 12,
        width: 75,
        height: boxH - 24,
        color: r.color,
      });
      const dayW = fontBold.widthOfTextAtSize(r.day, 10);
      p5.drawText(r.day, {
        x: MARGIN + 12 + (75 - dayW) / 2,
        y: boxY + boxH / 2 - 4,
        size: 10,
        font: fontBold,
        color: C_WHITE,
      });

      p5.drawText(r.title, {
        x: MARGIN + 100,
        y: boxY + boxH - 24,
        size: 12,
        font: fontBold,
        color: C_NAVY,
      });

      p5.drawText(`Reward: ${r.reward}`, {
        x: MARGIN + 100,
        y: boxY + boxH - 42,
        size: 8.5,
        font: fontItalic,
        color: C_GRAY_TEXT,
      });

      p5.drawText("Date Achieved: ____________________   Grown-Up High-Five: ____________________", {
        x: MARGIN + 100,
        y: boxY + 14,
        size: 8,
        font: fontRegular,
        color: C_NAVY,
      });
    });
  }

  /* ──────────────────────────────────────────
     PAGE 6: 30-DAY HABIT CHAMPION CERTIFICATE
  ────────────────────────────────────────── */
  {
    const p6 = doc.addPage([W, H]);
    p6.drawRectangle({ x: 0, y: 0, width: W, height: H, color: C_CREAM });
    p6.drawRectangle({
      x: 20,
      y: 20,
      width: W - 40,
      height: H - 40,
      borderColor: C_EMERALD,
      borderWidth: 4,
    });
    p6.drawRectangle({
      x: 28,
      y: 28,
      width: W - 56,
      height: H - 56,
      borderColor: C_SUNNY,
      borderWidth: 1.5,
    });

    const certTop = H - 90;
    p6.drawText("OFFICIAL LITERACY CITATION OF ACHIEVEMENT", {
      x: (W - fontBold.widthOfTextAtSize("OFFICIAL LITERACY CITATION OF ACHIEVEMENT", 10)) / 2,
      y: certTop,
      size: 10,
      font: fontBold,
      color: C_ORANGE,
    });

    const certTitle = "30-DAY READING HABIT CHAMPION";
    p6.drawText(certTitle, {
      x: (W - fontBold.widthOfTextAtSize(certTitle, 22)) / 2,
      y: certTop - 36,
      size: 22,
      font: fontBold,
      color: C_EMERALD,
    });

    const certSub = "This prestigious honor is proudly awarded to:";
    p6.drawText(certSub, {
      x: (W - fontItalic.widthOfTextAtSize(certSub, 12)) / 2,
      y: certTop - 68,
      size: 12,
      font: fontItalic,
      color: C_NAVY,
    });

    p6.drawLine({
      start: { x: 80, y: certTop - 130 },
      end: { x: W - 80, y: certTop - 130 },
      thickness: 2,
      color: C_SUNNY,
    });
    p6.drawText("(Name of 30-Day Reading Champion)", {
      x: (W - fontRegular.widthOfTextAtSize("(Name of 30-Day Reading Champion)", 9)) / 2,
      y: certTop - 146,
      size: 9,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });

    const certBody = [
      "for displaying exceptional dedication, curiosity, and joyful consistency by reading",
      "FOR THIRTY CONSECUTIVE DAYS!",
      "You have turned daily storytime into a lifelong habit of imagination,",
      "and we are extraordinarily proud of your dedication and reading joy.",
    ];

    certBody.forEach((line, i) => {
      const isHero = i === 1;
      const f = isHero ? fontBold : fontRegular;
      const sz = isHero ? 13 : 9.5;
      const clr = isHero ? C_ORANGE : C_NAVY;
      p6.drawText(line, {
        x: (W - f.widthOfTextAtSize(line, sz)) / 2,
        y: certTop - 185 - i * 24,
        size: sz,
        font: f,
        color: clr,
      });
    });

    // Big Gold Seal
    const sealX = W / 2;
    const sealY = certTop - 330;
    p6.drawCircle({
      x: sealX,
      y: sealY,
      size: 44,
      color: rgb(0.99, 0.95, 0.85),
      borderColor: C_SUNNY,
      borderWidth: 3,
    });
    const s1 = "30 DAYS";
    p6.drawText(s1, {
      x: sealX - fontBold.widthOfTextAtSize(s1, 10) / 2,
      y: sealY + 4,
      size: 10,
      font: fontBold,
      color: C_EMERALD,
    });
    const s2 = "CHAMPION";
    p6.drawText(s2, {
      x: sealX - fontBold.widthOfTextAtSize(s2, 8.5) / 2,
      y: sealY - 12,
      size: 8.5,
      font: fontBold,
      color: C_ORANGE,
    });

    // Signature lines
    const sigY = 120;
    p6.drawLine({
      start: { x: 70, y: sigY },
      end: { x: 230, y: sigY },
      thickness: 1,
      color: C_NAVY,
    });
    p6.drawText("Date Completed", {
      x: 70 + (160 - fontRegular.widthOfTextAtSize("Date Completed", 9)) / 2,
      y: sigY - 16,
      size: 9,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });

    p6.drawLine({
      start: { x: W - 230, y: sigY },
      end: { x: W - 70, y: sigY },
      thickness: 1,
      color: C_NAVY,
    });
    p6.drawText("Parent / Teacher Signature", {
      x: W - 230 + (160 - fontRegular.widthOfTextAtSize("Parent / Teacher Signature", 9)) / 2,
      y: sigY - 16,
      size: 9,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });

    p6.drawText("BestKidBooks.online  *  Early Literacy Habit Formation Excellence", {
      x: (W - fontRegular.widthOfTextAtSize("BestKidBooks.online  *  Early Literacy Habit Formation Excellence", 8)) / 2,
      y: 45,
      size: 8,
      font: fontRegular,
      color: C_GRAY_TEXT,
    });
  }

  const pdfBytes = await doc.save();
  const outPath = path.join("d:", "kids-resource", "public", "downloads", "tiny-triumphs-habit-diary.pdf");
  fs.writeFileSync(outPath, pdfBytes);
  console.log("Successfully generated Tiny Triumphs PDF! File size:", pdfBytes.length, "bytes at", outPath);
}

generateTinyTriumphsPDF().catch((err) => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
