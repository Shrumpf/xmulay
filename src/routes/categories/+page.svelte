<script lang="ts">
    import ClipGrid from "$lib/components/ClipGrid.svelte";
    import { Game } from "$lib/models/Game.js";

    export let data;
</script>

<svelte:head>
    <title>Categories | xmulay.com</title>
</svelte:head>

{#await data.categories}
    <p>...loading</p>
{:then games}
    <ClipGrid columns="5">
        {#each games.sort((a, b) => a.name.localeCompare(b.name)) as game}
            <a class="game" href="/categories/{game.id}">
                <img
                    alt="Box Art"
                    loading="lazy"
                    src={Game.getBoxArtUrl(game.box_art_url, 188, 255)}
                />
                <p>{game.name}</p>
            </a>
        {/each}
    </ClipGrid>
{/await}

<style lang="scss">
    .game {
        position: relative;
        transition: all 250ms ease;
    }

    .game:hover {
        transform: scale(1.05, 1.05);
    }

    .game > img {
        filter: brightness(0.7);
        transition: all 250ms ease;
    }

    .game:hover > img {
        filter: brightness(1);
    }

    .game > p {
        position: absolute;
        bottom: 0.5rem;
        left: 0.5rem;
        font-weight: 700;
    }

    a {
        color: inherit;
    }
</style>
