import { getClipsByUser } from '$lib/server/services/clips.js';
import { getUser } from '$lib/server/services/user.js';

export async function load({ params }) {
    return {
        clips: getClipsByUser(params.slug),
        user: getUser(params.slug)
    }
}
