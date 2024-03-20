<script lang="ts">
    import type { Clip } from "$lib/models/Clip";
    import type { ObserverEventDetails, Options } from "svelte-inview";

    import { inview } from "svelte-inview";

    let isInView: boolean;
    const options: Options = {
        unobserveOnEnter: true,
    };

    const handle_change = ({ detail }: CustomEvent<ObserverEventDetails>) => {
        isInView = detail.inView;
    };

    export let clip: Clip;
</script>

<div on:inview_change={handle_change} use:inview={options}>
    {#if isInView}
        <div class="clip-thumbnail">
            <a href="/clips/{clip.id}">
                <img
                    alt="clip thumbnail"
                    loading="lazy"
                    src={clip.thumbnail_url}
                />
                <!-- <div class="clip-overlay">asdf</div> -->
            </a>
        </div>
        <div class="clip-title">
            <a href="/clips/{clip.id}">
                <span>{clip.title}</span>
            </a>
        </div>
        <div>
            <p class="clip-creator">
                <a href="/users/{clip.creator_id}"> {clip.creator_name} </a>
            </p>
        </div>
        <div>
            <p class="clip-views">{clip.view_count} Aufrufe</p>
        </div>
    {/if}
</div>

<style lang="scss">
    .clip-title a {
        margin-bottom: 6px;
        color: #c6c6c6;
        text-decoration: none;

        &:hover {
            color: var(--orange);
        }
    }

    .clip-creator a {
        font-size: 14px;
        color: #6a6a6a;

        &:hover {
            color: var(--orange);
        }
    }

    .clip-views {
        color: #6a6a6a;
    }
</style>
