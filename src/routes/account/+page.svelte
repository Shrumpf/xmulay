<script>
    import { dev } from "$app/environment";
    import { page } from "$app/stores";
    import { SignIn, SignOut } from "@auth/sveltekit/components";
</script>

<svelte:head>
    {#if $page.data.session?.user}
        <title
            >{$page.data.session.user?.name}'s (your) Profile | xmulay.com</title
        >
    {:else}
        <title>Empty profile - Login to see your profile | xmulay.com</title>
    {/if}
</svelte:head>

<h1>
    {$page.data.session
        ? `${$page.data.session.user?.name}'s (your) Profile`
        : "Empty profile"}
</h1>
{#if dev}
    <div>
        {#if $page.data.session}
            {#if $page.data.session.user?.image}
                <img
                    alt="User Avatar"
                    class="avatar"
                    src={$page.data.session.user.image}
                />
            {/if}
            <p class="signedInText">
                <small>Signed in as</small>
                <strong>{$page.data.session.user?.name ?? "User"}</strong>
            </p>
            <SignOut>
                <div class="buttonPrimary" slot="submitButton">Sign out</div>
            </SignOut>
        {:else}
            <span class="notSignedInText">You are not signed in</span>
            <SignIn>
                <div slot="submitButton">Sign in</div>
            </SignIn>
        {/if}
    </div>
{:else}
    <h2>Coming soon</h2>
{/if}
