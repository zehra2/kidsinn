import type { Config } from "drizzle-kit";

// Database URL comes from the environment (cPanel Node.js app env vars).
// Never commit a real connection string here — the previous
// drizzle.config.json shipped a hardcoded postgres:// URL.
export default {
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
} satisfies Config;
