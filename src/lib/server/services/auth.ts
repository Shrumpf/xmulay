import { CLIENT_ID, CLIENT_SECRET } from "$env/static/private";
import { SvelteKitAuth } from "@auth/sveltekit"
import Twitch from "@auth/sveltekit/providers/twitch"

export const { handle, signIn, signOut } = SvelteKitAuth({
    providers: [Twitch({ clientId: CLIENT_ID, clientSecret: CLIENT_SECRET })],
})
