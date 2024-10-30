<script>
	import Clip from "$lib/components/Clip.svelte";
	import ClipGrid from "$lib/components/ClipGrid.svelte";

	let { data } = $props();
</script>

<svelte:head>
	<title>Free Stream Clips & Videos - Twitch Clips | xmulay.com</title>
</svelte:head>

<h2 class="title">
	<a href="/clips">Hot Clips in 🇩🇪 Germany</a><span class="arrow right"
	></span>
</h2>

<ClipGrid>
	{#await data.clips}
		<p>...loading</p>
	{:then clips_data}
		{#each clips_data as clip}
			<Clip {clip}></Clip>
		{/each}
	{/await}
</ClipGrid>

<style lang="scss">
	.title a {
		font-size: 1.25rem;
		color: #fff;
	}
</style>
