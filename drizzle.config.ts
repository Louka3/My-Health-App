import { env } from "~/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/server/db/schema.ts",
  dialect: "singlestore",
  tablesFilter: ["my_health_app_*"],
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
