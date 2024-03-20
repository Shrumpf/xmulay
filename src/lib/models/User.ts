import type { HelixUser } from "@twurple/api";

import { type IUser } from "$lib/models/IUser";

export class User implements IUser {
    broadcaster_type: null | string;
    created_at: null | string;
    description: null | string;
    display_name: string;
    id: string;
    offline_image_url: null | string;
    profile_image_url: null | string;
    type: null | string;

    constructor(
        data: HelixUser
    ) {
        this.id = data.id
        this.display_name = data.displayName
        this.description = data.description
        this.type = data.type
        this.broadcaster_type = data.broadcasterType
        this.profile_image_url = data.profilePictureUrl
        this.offline_image_url = data.offlinePlaceholderUrl
        this.created_at = data.creationDate.toLocaleString()
    }
}
