<script>
    export let open = false;
</script>

<button class:open on:click={() => (open = !open)}>
    <svg height="10" width="16">
        <line id="top" x1="0" x2="16" y1="1" y2="1" />
        <line id="middle" x1="0" x2="12" y1="6" y2="6" />
        <line id="bottom" x1="0" x2="16" y1="11" y2="11" />
    </svg>
</button>

<style>
    svg {
        min-height: 13px;
        transition: transform 0.3s ease-in-out;
    }

    svg line {
        stroke: white;
        stroke-width: 3;
        transition: transform 0.3s ease-in-out;
    }

    button {
        cursor: pointer;

        /* position: relative; */

        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;

        /* height: 26px; */

        /* margin: 0 6px 0 8px; */
        padding: 6px;

        font-family: inherit;
        font-size: 12px;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        vertical-align: top;

        appearance: none;
        background-color: #2f2f2f;
        border: none;
        border-radius: 4px;
        outline: 0 none;

        /* z-index: 20; */

        /* position: absolute; */

        /* left: 1rem; */

        /* top: 1rem; */
    }

    button:hover {
        background-color: #3f3f3f;
    }

    .open svg {
        transform: scale(0.7);
    }

    .open #top {
        transform: translate(3px, 1px) rotate(45deg);
    }

    .open #middle {
        opacity: 0;
    }

    .open #bottom {
        transform: translate(-6px, 5px) rotate(-45deg);
    }

    @media screen and (width > 934px) {
        button {
            display: none;
        }
    }
</style>
