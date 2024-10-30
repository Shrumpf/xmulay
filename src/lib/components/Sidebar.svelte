<script>
    import { run } from 'svelte/legacy';

    import { navigating } from "$app/stores";

    import Hamburger from "./Hamburger.svelte";
    import NavigationLink from "./NavigationLink.svelte";

    /**
     * @typedef {Object} Props
     * @property {boolean} [open]
     */

    /** @type {Props} */
    let { open = $bindable(false) } = $props();

    run(() => {
        if ($navigating) {
            open = false;
        }
    });
</script>

<aside class:open>
    <Hamburger bind:open />
    <nav>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/clips">Clips</NavigationLink>
        <NavigationLink href="/categories">Categories</NavigationLink>
        <NavigationLink href="/live">Livestreams</NavigationLink>
        <NavigationLink href="/users">Clippers</NavigationLink>
        <NavigationLink href="/community">Community</NavigationLink>
        <NavigationLink href="/photos">Photos &amp; GIFs</NavigationLink>
    </nav>
</aside>

<style>
    aside {
        position: fixed;
        z-index: 10;
        left: -101%;

        /* padding: 1rem 0 0 1rem; */
        overflow: hidden;

        width: 100%;
        height: 100%;

        background-color: #1b1b1b;
        border-right-width: 2px;
        box-shadow:
            0 10px 15px -3px rgb(0 0 0 / 10%),
            0 4px 6px -2px rgb(0 0 0 / 5%);

        transition: left 0.3s ease-in-out;
    }

    .open {
        left: 0;
    }
</style>
