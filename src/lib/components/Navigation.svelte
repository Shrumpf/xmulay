<script>
    import NavigationLink from "./NavigationLink.svelte";
</script>

<div class="nav-wrapper">
    <nav id="nav">
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/clips">Clips</NavigationLink>
        <NavigationLink href="/categories">Categories</NavigationLink>
        <NavigationLink href="/live">Livestreams</NavigationLink>
        <NavigationLink href="/users">Clippers</NavigationLink>
        <NavigationLink href="/community">Community</NavigationLink>
        <NavigationLink href="/photos">Photos &amp; GIFs</NavigationLink>
    </nav>
</div>

<style lang="scss">
    .nav-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
        border-top: 1px solid #242424;
    }

    nav {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        place-items: center center;

        width: 75%;
        min-height: 2.5rem;
    }

    @media screen and (width < 934px) {
        .nav-wrapper {
            display: none;
        }
    }
</style>
