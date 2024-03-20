import { getAllClips } from '$lib/server/services/clips.js';

export async function load() {
    return {
        clips: await getAllClips(),
    }
}
