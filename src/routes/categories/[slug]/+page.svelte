<script lang="ts">
    import Clip from "$lib/components/Clip.svelte";

    export let data;
</script>

<svelte:head>
    <title>Categories | xmulay.com</title>
</svelte:head>

<div class="grid">
    {#await data.clips}
        <p>...loading</p>
    {:then clips_data}
        {#each clips_data as clip}
            <Clip {clip}></Clip>
        {/each}
    {/await}
</div>

<style lang="scss">
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
