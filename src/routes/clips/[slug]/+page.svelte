<script lang="ts">
    let { data } = $props();
</script>

<svelte:head>
    {#await data.clip then clip}
        <title>{clip?.title} | xmulay.com</title>
    {/await}
</svelte:head>

{#await data.clip}
    <p>...loading</p>
{:then clip}
    {#if clip}
        <h2>{clip.title}</h2>
        <div>
            <iframe
                allow="fullscreen"
                frameborder="0"
                height="378"
                src="{clip.embed_url}&parent=localhost"
                title={clip.title}
                width="620"
            ></iframe>
        </div>
        <div>
            <p>
                {clip.view_count} | {clip.created_at}
                {clip.created_at} by
                {clip.creator_name}
            </p>
        </div>
    {/if}
{/await}
