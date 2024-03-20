# create-svelte

## Configuration

Rename the .env.example to .env or set your environment variables otherwise.

```
CLIENT_ID=Your twitch client id
CLIENT_SECRET=Your twitch client secret
AUTH_SECRET=Generated auth secret for auth.js
AUTH_URL=Auth endpoint e.g. http://localhost:5173/auth
PUBLIC_BROADCASTER_ID=The Twitch Id from where you want to get the clips 
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

## Database

```bash
pnpm run db:generate
pnpm run db:up
```

and fill it with clips via `/api/clips`.
