import {
  int,
  text,
  singlestoreTable,
  singlestoreTableCreator,
  timestamp,
} from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator(
  (name) => `my_health_app_${name}`,
);

export const users_table = createTable("users_table", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type DB_UsersType = typeof users_table.$inferSelect;
