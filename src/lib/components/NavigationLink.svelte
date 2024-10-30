<script lang="ts">
    import { page } from "$app/stores";
    import type { Snippet } from "svelte";

    interface Props {
        href: string;
        children?: Snippet;
    }

    let { href, children }: Props = $props();
    let active = $derived($page.url.pathname === href);
</script>

<a {href}>
    <span>{@render children?.()}</span>
    {#if active}
        <span class="active-line"></span>
    {/if}
</a>

<style lang="scss">
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;

        border-top: 1px solid transparent;
        border-right: 1px solid transparent;
        border-left: 1px solid transparent;
    }

    a:hover {
        text-decoration: none;

        background: #191919;
        border-top: 1px solid #252525;
        border-right: 1px solid #252525;
        border-left: 1px solid #252525;
    }

    span {
        width: 100%;
        margin: 10.5px 0;

        font-size: 11px;
        color: #fff;
        text-align: center;

        // font-weight: 700;
        text-transform: uppercase;
    }

    .active-line {
        display: block;

        width: 100%;
        height: 2px;
        margin: 0 auto;

        background: var(--orange);
    }
</style>
