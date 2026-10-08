import { NextResponse } from "next/server";
import { count, eq } from "drizzle-orm";
import { db } from "@/db";
import { toolRuns } from "@/db/schema";

export const dynamic = "force-dynamic";

const TOOLS = ["screen-time", "million-words", "reading-goal", "questions"];

/** Anonymous per-tool run counters — no personal data leaves the browser. */
export async function GET() {
  const base: Record<string, number> = Object.fromEntries(TOOLS.map((t) => [t, 0]));
  try {
    const rows = await db
      .select({ tool: toolRuns.tool, value: count() })
      .from(toolRuns)
      .groupBy(toolRuns.tool);
    for (const r of rows) base[r.tool] = r.value;
    return NextResponse.json({ tools: base, total: Object.values(base).reduce((a, b) => a + b, 0) });
  } catch {
    return NextResponse.json({ tools: base, total: 0 });
  }
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Malformed payload." }, { status: 400 });
  }

  const tool = String(body.tool ?? "");
  if (!TOOLS.includes(tool)) {
    return NextResponse.json({ error: "Unknown tool." }, { status: 422 });
  }

  try {
    await db.insert(toolRuns).values({ tool });
    const rows = await db
      .select({ tool: toolRuns.tool, value: count() })
      .from(toolRuns)
      .groupBy(toolRuns.tool);
    const tools: Record<string, number> = Object.fromEntries(TOOLS.map((t) => [t, 0]));
    for (const r of rows) tools[r.tool] = r.value;
    return NextResponse.json({
      ok: true,
      tools,
      total: Object.values(tools).reduce((a, b) => a + b, 0),
    });
  } catch {
    return NextResponse.json({ error: "Counter unavailable." }, { status: 503 });
  }
}
