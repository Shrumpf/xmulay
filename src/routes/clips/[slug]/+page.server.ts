import { getClip } from '$lib/server/services/clips.js';

export async function load({ params }) {
    return {
        clip: await getClip(params.slug),
    }
}
