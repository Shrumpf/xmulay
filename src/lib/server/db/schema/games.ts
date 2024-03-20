import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const games = sqliteTable("games", {
    box_art_url: text("box_art_url").notNull(),
    id: text("id").notNull().primaryKey().unique(),
    igdb_id: text("igdb_id"),
    name: text("name").notNull(),
});
