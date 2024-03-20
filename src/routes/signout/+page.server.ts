import { signOut } from "$lib/server/services/auth";

import type { Actions } from "./$types"
export const actions: Actions = { default: signOut }
