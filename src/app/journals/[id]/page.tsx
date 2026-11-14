import { notFound, redirect } from "next/navigation";

/**
 * Journals detail fallback.
 *
 * All four real journals have static folders (src/app/journals/<id>/),
 * and static segments beat dynamic ones in Next.js — so this route only
 * ever renders for legacy slugs or unknown ids.
 *
 * Legacy slugs redirect to their current homes; anything else 404s.
 * There is intentionally no page body or metadata here: the static
 * journal pages carry their own.
 */
export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id === "100-book-explorer-log") {
    redirect("/journals/100-book-milestone-explorer-log");
  }
  if (id === "feelings-and-friendships-social-emotional-journal") {
    redirect("/journals/feelings-character-journal");
  }

  notFound();
}
