import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/** Email signups: newsletter, course waitlist, free workshop. */
export const signups = pgTable("signups", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  kind: text("kind").notNull().default("newsletter"),
  source: text("source"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

/** Anonymous counters for the parent tools (no PII, COPPA-safe). */
export const toolRuns = pgTable("tool_runs", {
  id: serial("id").primaryKey(),
  tool: text("tool").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type Signup = typeof signups.$inferSelect;
