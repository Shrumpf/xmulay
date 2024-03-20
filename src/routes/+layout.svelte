<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import NetworkBar from "$lib/components/NetworkBar.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";

	import "./styles.scss";
	let sidepanel_open = false;

	function prevent_scroll(event: TouchEvent | WheelEvent) {
		if (sidepanel_open) {
			event.preventDefault();
		}
	}
</script>

<svelte:window
	on:touchmove|nonpassive={prevent_scroll}
	on:wheel|nonpassive={prevent_scroll}
/>

<div class="app" class:overflow-hidden={sidepanel_open}>
	<Sidebar bind:open={sidepanel_open} />
	<NetworkBar />
	<Header bind:sidepanel_open />

	<main class="content">
		<slot />
	</main>

	<footer></footer>
</div>

<style lang="scss">
	.content {
		position: relative;
		width: 80%;
		margin: 10px auto;
	}

	.overflow-hidden {
		overflow-y: hidden;
	}
</style>
