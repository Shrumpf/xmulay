<script lang="ts">
	import type { Snippet } from "svelte";

	import Header from "$lib/components/Header.svelte";
	import NetworkBar from "$lib/components/NetworkBar.svelte";
    import Sidebar from "$lib/components/Sidebar.svelte";

	import "./styles.scss";
	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
	let sidepanel_open = $state(false);
</script>

<div class="app" class:overflow-hidden={sidepanel_open}>
	<Sidebar bind:open={sidepanel_open} />
	<NetworkBar />
	<Header bind:sidepanel_open />

	<main class="content">
		{@render children?.()}
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
