import { getClips } from '$lib/server/services/clips.js';

export async function load() {
    return {
        clips: await getClips(20),
    }
}
