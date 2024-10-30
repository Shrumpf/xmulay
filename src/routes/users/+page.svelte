<script lang="ts">
    import ClipGrid from "$lib/components/ClipGrid.svelte";

    let { data } = $props();
</script>

<ClipGrid columns="5">
    {#await data.users}
        <p>...loading</p>
    {:then users}
        {#each users as user}
            <a class="game" href="/users/{user.id}">
                <img
                    alt="profile"
                    loading="lazy"
                    src={user.profile_image_url}
                />
                <p class="display-name">{user.display_name}</p>
                <p class="total-views">{user.total_views}</p>
            </a>
        {/each}
    {/await}
</ClipGrid>

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
        font-weight: 700;

        &.display-name {
            left: 0.5rem;
        }

        &.total-views {
            right: 0.5rem;
        }
    }

    a {
        color: inherit;
    }
</style>
