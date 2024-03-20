import { games } from "$db/schema/games";
import { Game } from "$lib/models/Game";
import { eq } from "drizzle-orm";

import { db } from "../services/db";

export function getGamesFromSqlite(): Game[] {
    return db.select().from(games).all();
}

export function getGameFromSqlite(id: string): Game | undefined {
    return db.select().from(games).where(eq(games.id, id)).get();
}

export async function createGame(game: Game): Promise<Game> {
    if (!getGameFromSqlite(game.id)) {
        const g = (await db.insert(games).values({ box_art_url: game.box_art_url, id: game.id, igdb_id: game.igdb_id, name: game.name }).onConflictDoNothing().returning())[0];
        return { box_art_url: g.box_art_url, id: g.id, igdb_id: g.igdb_id, name: g.name };
    }
    return game;
}
