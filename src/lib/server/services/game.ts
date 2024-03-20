import { Game } from "$lib/models/Game";

import { createGame, getGameFromSqlite, getGamesFromSqlite } from "../repositories/gamesSqliteRepo";
import { GetApiClient } from "./twurple";

const api = GetApiClient();

export async function getGame(id: string) {
    const game = getGameFromSqlite(id);
    if (!game) {
        const api_game = await api.games.getGameById(id);
        if (api_game) {
            await createGame(new Game(api_game));
            return new Game(api_game);
        } else {
            return null;
        }
    }

    return game;
}

export function getAllGames() {
    return getGamesFromSqlite();
}
