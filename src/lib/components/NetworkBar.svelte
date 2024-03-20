<div>
    <ul>
        <li>
            <a href="/">HOME</a>
        </li>
        <li>
            <a href="/">TWITCH PRIME</a>
        </li>
        <li>
            <a href="/">STREAMERHUB</a>
        </li>
        <li>
            <a href="/">MERCH</a>
        </li>
        <li>
            <a href="/">DE</a>
        </li>
    </ul>
</div>

<style lang="scss">
    div {
        display: flex;
        justify-content: center;

        width: 100%;
        height: 1.375rem;
        margin: 0 auto;

        line-height: normal;

        background: #000;

        ul {
            display: flex;
            list-style: none;

            li {
                &:hover {
                    background-color: #333;
                }

                a {
                    cursor: pointer;

                    display: block;

                    box-sizing: border-box;
                    padding: 0.375rem 1.5rem;

                    font-size: 0.688rem;
                    font-weight: normal;
                    color: #bbb;
                    text-decoration: none;
                    text-transform: uppercase;

                    &:hover {
                        color: #fff;
                    }
                }
            }
        }
    }

    @media only screen and (width <= 600px) {
        div {
            display: none;
        }
    }
</style>
