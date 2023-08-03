import "dotenv/config";

import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle/out",
  dbCredentials: { connectionString: process.env.DATABASE_URL },
} satisfies Config;
