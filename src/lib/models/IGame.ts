export interface IGame {
    box_art_url: string;
    getBoxArtUrl?(width: number, height: number): string;
    id: string;
    igdb_id: null | string;
    name: string;
}
