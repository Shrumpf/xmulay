import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    broadcaster_type: text("broadcaster_type"),
    created_at: text("created_at"),
    description: text("description"),
    display_name: text("display_name").notNull(),
    id: text("id").notNull().primaryKey().unique(),
    offline_image_url: text("offline_image_url"),
    profile_image_url: text("profile_image_url"),
    type: text("type"),
});
