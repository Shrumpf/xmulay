import { CLIENT_ID, CLIENT_SECRET } from "$env/static/private";
import { ApiClient } from "@twurple/api";
import { AppTokenAuthProvider } from "@twurple/auth";

export function GetApiClient(): ApiClient {
    const clientId = CLIENT_ID;
    const clientSecret = CLIENT_SECRET;

    const authProvider = new AppTokenAuthProvider(clientId, clientSecret);
    const api = new ApiClient({ authProvider });

    return api;
}
