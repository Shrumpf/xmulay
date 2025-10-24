import type { HelixClip, HelixClipFilter } from '@twurple/api';

import { PUBLIC_BROADCASTER_ID } from "$env/static/public";
import { Clip } from '$lib/models/Clip';
import { createClip, getClipFromSqlite, updateClip } from '$lib/server/repositories/clipsSqliteRepo';
import { getGameFromSqlite } from '$lib/server/repositories/gamesSqliteRepo';
import { createShadowUser, getUserFromSqlite } from '$lib/server/repositories/usersSqliteRepo';
import { getGame } from '$lib/server/services/game';
import { GetApiClient } from '$lib/server/services/twurple.js';
import { getUser } from '$lib/server/services/user';
import { json } from '@sveltejs/kit';

export async function GET({ url }: { url: URL }) {
    const api_clips: HelixClip[] = [];
    let new_created = 0;
    const start = performance.now();

    const api = GetApiClient();

    const filter: HelixClipFilter = {
        startDate: new Date(url.searchParams.get('start_date') || '2025-01-01').toISOString(),
        endDate: new Date(url.searchParams.get('end_date') || Date.now()).toISOString(),
    }

    const clip_request = api.clips.getClipsForBroadcasterPaginated(PUBLIC_BROADCASTER_ID, filter);
    clip_request.reset();

    console.log("🚀 ~ GET ~ start:", start)

    do {
        const data = await clip_request.getNext();
        if (!data.length) {
            break;
        }
        api_clips.push(...data);
        console.log("🚀 ~ GET ~ current:", clip_request.current)
    } while (clip_request.currentCursor)

    console.log("🚀 ~ GET ~ api_clips:", api_clips.length)
    for (const api_clip of api_clips) {

        if (api_clip.gameId) {
            const game = getGameFromSqlite(api_clip.gameId);
            if (!game) {
                await getGame(api_clip.gameId);
            }
        }

        const clip = getClipFromSqlite(api_clip.id);
        if (clip) {
            console.log("🚀 ~ GET ~ clip:", clip.title)
            if (url.searchParams.get('update') === "true") {
                updateClip(new Clip(api_clip));
            }
            continue;
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

        const createdClip = await createClip(new Clip(api_clip));
        console.log("🚀 ~ GET ~ createdClip:", createdClip.title)
        new_created++;
    }

    const end = performance.now();
    console.log("🚀 ~ GET ~ end:", end)
    console.log(`Created ${new_created} new clips in ${end - start}ms!`)

    return json({ created_count: new_created, time_spent_ms: end - start }, {
        status: 200
    });
}
