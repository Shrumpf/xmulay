import type { User } from "$lib/models/User";

import { clips } from "$db/schema/clips";
import { users } from "$lib/server/db/schema/users";
import { desc, eq, sum } from "drizzle-orm";
import { isNotNull } from "drizzle-orm";

import { db } from "../services/db";

export async function getUsersFromSqlite(): Promise<User[]> {
    return db.select().from(users).where(isNotNull(users.created_at)).orderBy(users.display_name).all();
}

export function getUserFromSqlite(id: string): User | undefined {
    return db.select().from(users).where(eq(users.id, id)).limit(1).get()
}

export async function createUser(user: User): Promise<User | undefined> {
    if (!getUserFromSqlite(user.id)) {
        return (await db.insert(users).values(user).onConflictDoNothing().returning())[0];
    }
}

export async function createShadowUser(id: string, display_name: string): Promise<User> {
    const user = getUserFromSqlite(id);
    if (!user) {
        return (await db.insert(users).values({ display_name, id }).onConflictDoNothing().returning())[0];
    }
    return user;
}

export async function getUsersSortByClipViewCountFromSqlite() {
    const { broadcaster_type, created_at, description, display_name, id, offline_image_url, profile_image_url, type } = users;
    const total_views = sum(clips.view_count)
    const result = await db
        .select({ broadcaster_type, created_at, description, display_name, id, offline_image_url, profile_image_url, total_views, type })
        .from(users)
        .leftJoin(clips, eq(clips.creator_id, users.id))
        .groupBy(users.id, users.display_name)
        .orderBy(desc(total_views)).all();
    return result;
}
