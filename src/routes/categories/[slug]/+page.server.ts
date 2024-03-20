import { getClipsByCategory } from "$lib/server/services/clips.js";

export async function load({ params }) {
    return {
        clips: getClipsByCategory(params.slug),
    }
}
