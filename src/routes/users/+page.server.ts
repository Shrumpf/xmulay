import { getUsersSortByClipViewCount } from "$lib/server/services/user";

export async function load() {
    return {
        users: getUsersSortByClipViewCount(),
    }
}
