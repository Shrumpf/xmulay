import { PUBLIC_BROADCASTER_ID } from "$env/static/public";
import { Clip } from "$lib/models/Clip";

import { createClip, getClipFromSqlite, getClipsByCategoryFromSqlite, getClipsByUserFromSqlite, getClipsFromSqlite } from "../repositories/clipsSqliteRepo";
import { getGameFromSqlite } from "../repositories/gamesSqliteRepo";
import { createShadowUser, getUserFromSqlite } from "../repositories/usersSqliteRepo";
import { getGame } from "./game";
import { GetApiClient } from "./twurple";
import { getUser } from "./user";

const api = GetApiClient();

export async function getClips(limit: number = 10) {
    return getClipsFromSqlite(limit);
}

export async function getAllClips() {
    return getClipsFromSqlite();
}

export async function getClip(id: string): Promise<Clip | undefined> {
    const clip = getClipFromSqlite(id);
    if (clip) {
        return clip;
    }

    const api_clip = await api.clips.getClipById(id);
    if (api_clip) {
        if (api_clip.broadcasterId !== PUBLIC_BROADCASTER_ID) {
            console.error(`Clip '${api_clip.title}' not by broadcaster: ${PUBLIC_BROADCASTER_ID}`);
            return;
        }

        const creator = getUserFromSqlite(api_clip.creatorId);
        if (!creator) {
            const api_creator = await getUser(api_clip.creatorId);
            if (!api_creator) {
                await createShadowUser(api_clip.creatorId, api_clip.creatorDisplayName);
            }
        }

        const broadcaster = getUserFromSqlite(api_clip.broadcasterId);
        if (!broadcaster) {
            const api_broadcaster = await getUser(api_clip.broadcasterId);
            if (!api_broadcaster) {
                await createShadowUser(api_clip.broadcasterId, api_clip.broadcasterDisplayName);
            }
        }

        const game = getGameFromSqlite(api_clip.gameId);
        if (!game) {
            await getGame(api_clip.gameId);
        }

        return await createClip(new Clip(api_clip));
    }
}

export async function getClipsByCategory(category: string) {
    return getClipsByCategoryFromSqlite(category);
}

export function getClipsByUser(id: string) {
    return getClipsByUserFromSqlite(id);
}
