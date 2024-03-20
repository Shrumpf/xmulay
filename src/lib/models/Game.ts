import type { HelixGame } from "@twurple/api";

import type { IGame } from "./IGame";

export class Game implements IGame {
    box_art_url: string;
    id: string;
    igdb_id: null | string;
    name: string;

    constructor(data: HelixGame) {
        this.id = data.id
        this.name = data.name
        this.box_art_url = data.boxArtUrl
        this.igdb_id = data.igdbId
    }

    static getBoxArtUrl(box_art_url: string, width: number, height: number): string {
        return box_art_url
            .replace('{width}', width.toString())
            .replace('{height}', height.toString());
    }
}
