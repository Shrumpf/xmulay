import type { Clip } from "$lib/models/Clip";

import { clips } from "$db/schema/clips";
import { desc, eq } from "drizzle-orm";

import { db } from "../services/db";

export function getClipsFromSqlite(limit?: number): Clip[] {
    if (!limit) {
        return db.select().from(clips).all();
    }

    return db.select().from(clips).limit(limit).all();
}

export function getClipFromSqlite(id: string): Clip | undefined {
    return db.select().from(clips).where(eq(clips.id, id)).get();
}

export async function createClip(clip: Clip): Promise<Clip> {
    if (!getClipFromSqlite(clip.id)) {
        return (await db.insert(clips).values(clip).onConflictDoNothing().returning())[0];
    }
    return clip;
}

export function getClipsByCategoryFromSqlite(category: string) {
    return db.select().from(clips).where(eq(clips.game_id, category)).all();
}

export function getClipsByUserFromSqlite(id: string) {
    return db.select().from(clips).where(eq(clips.creator_id, id)).orderBy(desc(clips.view_count)).all()
}
