import { User } from "$lib/models/User";

import { createUser, getUserFromSqlite, getUsersSortByClipViewCountFromSqlite } from "../repositories/usersSqliteRepo";
import { GetApiClient } from "./twurple";

const api = GetApiClient();

export async function getUser(id: string) {
    const user = getUserFromSqlite(id);
    if (!user) {
        const api_user = await api.users.getUserById(id);
        if (api_user) {
            await createUser(new User(api_user));
            return new User(api_user);
        } else {
            // User banned?
            return null;
        }
    }

    return user;
}

export async function getUsersSortByClipViewCount() {
    return getUsersSortByClipViewCountFromSqlite();
}
