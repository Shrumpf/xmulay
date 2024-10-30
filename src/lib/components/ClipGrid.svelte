<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children?: Snippet;
        columns?: string;
    }

    let { children, columns = "4" }: Props = $props();
</script>

<div
    class="grid"
    style="

--columns: {columns}"
>
    {@render children?.()}
</div>

<style lang="scss">
    .grid {
        display: grid;
        grid-gap: 15px 10px;
        grid-template-columns: repeat(var(--columns, 4), 1fr);
        grid-template-rows: auto;
        place-content: center center;

        padding: 20px 0;
    }

    .grid :global(img) {
        width: 100%;
    }

    @media only screen and (width < 1100px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (width < 768px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>
