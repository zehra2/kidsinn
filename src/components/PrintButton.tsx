"use client";

import { Printer } from "lucide-react";

/**
 * Print button for the server-rendered detail pages.
 * window.print() is the only client interactivity those pages need,
 * so it lives in this small client component instead of making the
 * whole page a client component (which would block metadata).
 */
export function PrintButton({
  label = "Print",
  className = "",
  size = 16,
}: {
  label?: string;
  className?: string;
  size?: number;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={className}
    >
      <Printer size={size} />
      {label}
    </button>
  );
}
