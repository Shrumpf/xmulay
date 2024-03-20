import { type IClip } from "$lib/models/IClip";
import { type HelixClip } from "@twurple/api";

export class Clip implements IClip {
    broadcaster_id: string;
    broadcaster_name: string;
    created_at: string;
    creator_id: string;
    creator_name: string;
    duration: number;
    embed_url: string;
    game_id: null | string;
    id: string;
    is_featured: boolean;
    language: string;
    thumbnail_url: string;
    title: string;
    url: string;
    video_id: null | string;
    view_count: number;
    vod_offset: null | number;

    constructor(data: HelixClip) {
        this.id = data.id;
        this.url = data.url;
        this.embed_url = data.embedUrl;
        this.broadcaster_id = data.broadcasterId;
        this.broadcaster_name = data.broadcasterDisplayName;
        this.creator_id = data.creatorId;
        this.creator_name = data.creatorDisplayName;
        this.video_id = data.videoId || null;
        this.game_id = data.gameId || null;
        this.language = data.language;
        this.title = data.title;
        this.view_count = data.views;
        this.created_at = data.creationDate.toLocaleString();
        this.thumbnail_url = data.thumbnailUrl;
        this.duration = data.duration;
        this.vod_offset = data.vodOffset || null;
        this.is_featured = data.isFeatured;
    }
}
