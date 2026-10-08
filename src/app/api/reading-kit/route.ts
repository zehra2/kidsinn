import { kitGoals, readingDays, type KitGoal } from "@/lib/reading-kit";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function escapeXml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[character]!);
}

function wrapWords(value: string, length: number) {
  const lines: string[] = [];
  for (const word of value.split(" ")) {
    const last = lines.length - 1;
    if (last >= 0 && `${lines[last]} ${word}`.length <= length) lines[last] += ` ${word}`;
    else lines.push(word);
  }
  return lines;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const requestedMinutes = Number(url.searchParams.get("minutes"));
  const minutes = [5, 10, 15, 20].includes(requestedMinutes) ? requestedMinutes : 10;
  const requestedGoal = url.searchParams.get("goal") ?? "connection";
  const goal: KitGoal = requestedGoal === "confidence" || requestedGoal === "calm" ? requestedGoal : "connection";

  let bearData = "";
  try {
    const bearImg = await readFile(path.join(process.cwd(), "public/images/reading-bear.png"));
    bearData = bearImg.toString("base64");
  } catch {
    // fallback if image reading fails
  }

  const dayCards = readingDays.map((day, index) => {
    const x = 43 + index * 149;
    const lines = wrapWords(day.idea, 20);
    return `<g transform="translate(${x} 221)"><rect width="142" height="207" rx="14" fill="${index % 2 === 0 ? "#e7f0ff" : "#fff0e6"}" stroke="#a7bee0"/><text x="14" y="27" font-size="12" fill="#196ecc" font-weight="700">${escapeXml(day.day.toUpperCase())}</text><text x="14" y="53" font-size="15" font-weight="700">${escapeXml(day.title)}</text>${lines.map((line, lineIndex) => `<text x="14" y="${81 + lineIndex * 19}" font-size="12" fill="#65718a">${escapeXml(line)}</text>`).join("")}<circle cx="71" cy="170" r="20" fill="#fff" stroke="#7295d2" stroke-dasharray="4 3"/><path d="m64 170 5 5 10-12" stroke="#d8e2f1" stroke-width="3" fill="none" stroke-linecap="round"/></g>`;
  }).join("");

  const prompts = readingDays.map((day, index) => {
    const column = index < 4 ? 0 : 1;
    const row = index < 4 ? index : index - 4;
    const x = 43 + column * 531;
    const y = 496 + row * 38;
    return `<g transform="translate(${x} ${y})"><rect width="510" height="31" rx="8" fill="#fff" stroke="#e2e3e9"/><text x="12" y="21" font-size="12" fill="#196ecc" font-weight="700">0${index + 1}</text><text x="40" y="21" font-size="13">${escapeXml(day.prompt)}</text></g>`;
  }).join("");

  const bearElement = bearData
    ? `<image x="975" y="27" width="108" height="108" href="data:image/png;base64,${bearData}"/>`
    : "";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1123" height="794" viewBox="0 0 1123 794"><title>Best Kid Books seven-day reading kit</title><rect width="1123" height="794" fill="#fffaf4"/><g fill="#233c64" font-family="Arial, sans-serif"><text x="43" y="58" fill="#196ecc" font-size="13" font-weight="700" letter-spacing="2">BEST KID BOOKS · THE READING JOY CLUB</text><text x="43" y="115" fill="#196ecc" font-size="39" font-weight="700">Seven little reading moments.</text><text x="43" y="150" font-size="17" fill="#bc3509">${minutes} minutes a day · ${escapeXml(kitGoals[goal].label)} · a plan, not a test</text><text x="43" y="183" font-size="13" fill="#65718a">${escapeXml(kitGoals[goal].note)} Begin on any day. Repeat any favourite.</text>${bearElement}${dayCards}<text x="43" y="465" fill="#196ecc" font-size="20" font-weight="700">One question. A whole conversation.</text>${prompts}<rect x="43" y="681" width="1037" height="56" rx="13" fill="#f9efde"/><text x="60" y="704" font-size="13" font-weight="700">Celebrate connection, not completion.</text><text x="60" y="722" font-size="12" fill="#65718a">Miss a day? Keep the good bit and begin again. A favourite reread, a comic, or listening together all count.</text><text x="43" y="768" font-size="11" fill="#65718a">Free for personal family use · bestkidbooks.online · Educational ideas, not individualized professional advice.</text></g></svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Content-Disposition": 'attachment; filename="best-kid-books-reading-kit.svg"',
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
