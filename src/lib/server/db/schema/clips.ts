import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { games } from "./games";
import { users } from "./users";

export const clips = sqliteTable("clips", {
    broadcaster_id: text("broadcaster_id").notNull().references(() => users.id),
    broadcaster_name: text("broadcaster_name").notNull(),
    created_at: text("created_at").notNull(),
    creator_id: text("creator_id").notNull().references(() => users.id),
    creator_name: text("creator_name").notNull(),
    duration: integer("duration").notNull(),
    embed_url: text("embed_url").notNull(),
    game_id: text("game_id").references(() => games.id),
    id: text('id').notNull().primaryKey().unique(),
    is_featured: integer("is_featured", { mode: "boolean" }).notNull(),
    language: text("language").notNull(),
    thumbnail_url: text("thumbnail_url").notNull(),
    title: text("title").notNull(),
    url: text("url").notNull(),
    video_id: text("video_id"),
    view_count: integer("view_count").notNull(),
    vod_offset: integer("vod_offset"),
});
