import { NextResponse } from "next/server";
import { count, eq } from "drizzle-orm";
import { db } from "@/db";
import { signups } from "@/db/schema";

export const dynamic = "force-dynamic";

const KINDS = ["newsletter", "course", "workshop"];

async function total() {
  const rows = await db.select({ value: count() }).from(signups);
  return rows[0]?.value ?? 0;
}

export async function GET() {
  try {
    return NextResponse.json({ count: await total() });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Malformed payload." }, { status: 400 });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  const kind = KINDS.includes(String(body.kind)) ? String(body.kind) : "newsletter";
  const source = String(body.source ?? "").trim().slice(0, 80) || null;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { error: "That address doesn't look like an email." },
      { status: 422 }
    );
  }

  try {
    const inserted = await db
      .insert(signups)
      .values({ email, kind, source })
      .onConflictDoNothing({ target: signups.email })
      .returning({ id: signups.id });

    return NextResponse.json({
      ok: true,
      duplicate: inserted.length === 0,
      count: await total(),
    });
  } catch {
    return NextResponse.json(
      { error: "List unavailable — nothing was saved." },
      { status: 503 }
    );
  }
}
