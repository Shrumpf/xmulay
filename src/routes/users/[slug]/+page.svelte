<script lang="ts">
    import Clip from "$lib/components/Clip.svelte";
    let { data } = $props();
</script>

<svelte:head>
    {#await data.user then user}
        <title>{user?.display_name}'s Profile | xmulay.com</title>
    {/await}
</svelte:head>

{#await data.user}
    <p>...loading</p>
{:then user}
    {#if user}
        <h2>{user.display_name}</h2>
        <img alt="profile" loading="lazy" src={user.profile_image_url} />
        <p>Created at {user.created_at}</p>
        <p><strong>Description: </strong>{user.description}</p>
        <br />
        <h2 class="title">
            <span>Hot Clips created by {user?.display_name}</span><span
                class="arrow right"
            ></span>
        </h2>

        <div class="grid">
            {#await data.clips}
                <p>...loading</p>
            {:then clips_data}
                {#each clips_data as clip}
                    <Clip {clip}></Clip>
                {/each}
            {/await}
        </div>
    {/if}
{/await}

<style lang="scss">
    .title span {
        font-size: 1.25rem;
        color: #fff;
    }

    .grid {
        display: grid;
        grid-gap: 15px 10px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        place-content: center center;

        padding: 20px 0;
    }

    .grid :global(img) {
        width: 100%;
    }
</style>
