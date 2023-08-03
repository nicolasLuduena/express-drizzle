import { migrate } from "drizzle-orm/postgres-js/migrator";
import db from "./connection";

export const migrateDb = async () =>
  migrate(db, { migrationsFolder: "drizzle/out" });

migrateDb();
