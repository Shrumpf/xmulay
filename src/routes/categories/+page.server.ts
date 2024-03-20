import { getAllGames } from "$lib/server/services/game";

export async function load() {
    return {
        categories: getAllGames(),
    }
}
