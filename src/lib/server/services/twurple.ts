import { AUTH_TWITCH_ID, AUTH_TWITCH_SECRET } from "$env/static/private";
import { ApiClient } from "@twurple/api";
import { AppTokenAuthProvider } from "@twurple/auth";

export function GetApiClient(): ApiClient {
    const clientId = AUTH_TWITCH_ID;
    const clientSecret = AUTH_TWITCH_SECRET;

    const authProvider = new AppTokenAuthProvider(clientId, clientSecret);
    const api = new ApiClient({ authProvider });

    return api;
}
