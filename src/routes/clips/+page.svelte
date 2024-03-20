<script>
    import Clip from "$lib/components/Clip.svelte";
    import ClipGrid from "$lib/components/ClipGrid.svelte";

    export let data;
</script>

<svelte:head>
    <title>Clips | xmulay.com</title>
</svelte:head>

<ClipGrid>
    {#await data.clips}
        <p>...loading</p>
    {:then clips_data}
        {#each clips_data as clip}
            <Clip {clip}></Clip>
        {/each}
    {/await}
</ClipGrid>
