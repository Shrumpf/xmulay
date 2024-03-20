<script lang="ts">
	import { page } from "$app/stores";
	import Navigation from "$lib/components/Navigation.svelte";
	import logo from "$lib/images/logo.png";

	import Hamburger from "./Hamburger.svelte";

	export let sidepanel_open = false;
</script>

<header>
	<div class="header-container">
		<Hamburger bind:open={sidepanel_open} />

		<div class="logo-wrapper">
			<a href="/">
				<img alt="logo" height="32px" src={logo} />
			</a>
		</div>
		<div class="search-input-wrapper">
			<input
				class="search-input"
				placeholder="Suche 9,381,193 Videos"
				type="text"
			/>
		</div>
		<div class="header-buttons">
			<button class="button grey">Test</button>
			<button class="button orange">Highlight</button>
		</div>
		<div class="profile-menu">
			{#if $page.data.session}
				<button type="button">
					<svg
						class="feather feather-mail"
						fill="none"
						height="24"
						stroke="#fff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
						></path><polyline points="22,6 12,13 2,6"
						></polyline></svg
					>
				</button>
				<button type="button">
					<svg
						class="feather feather-users"
						fill="none"
						height="24"
						stroke="#fff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
						><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
						></path><circle cx="9" cy="7" r="4"></circle><path
							d="M23 21v-2a4 4 0 0 0-3-3.87"
						></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg
					>
				</button>
				<button type="button">
					<svg
						class="feather feather-info"
						fill="none"
						height="24"
						stroke="#fff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
						><circle cx="12" cy="12" r="10"></circle><line
							x1="12"
							x2="12"
							y1="16"
							y2="12"
						></line><line x1="12" x2="12.01" y1="8" y2="8"
						></line></svg
					>
				</button>
				<a href="/users/">{$page.data.session.user?.name}</a>
				<button type="button">
					<div class="dropdown">
						<img
							alt="profile"
							class="avatar"
							src={$page.data.session.user?.image}
						/>
						<div class="arrow small down"></div>
						<div class="dropdown-button" style="display: none;">
							<a href="/logout">Logout</a>
						</div>
					</div>
				</button>
			{:else}
				<a href="/account">Login / Registrieren</a>
			{/if}
		</div>
	</div>
	<Navigation></Navigation>
</header>

<style lang="scss">
	.header-buttons {
		display: flex;
		align-items: center;
		justify-self: start;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;

		background-color: #1b1b1b;
	}

	.header-container {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: 200px 1fr 250px 220px;
		grid-template-rows: 32px;
		place-items: center center;

		width: 75%;
		padding: 0.875rem;

		& > div {
			height: 100%;
		}
	}

	.search-input-wrapper {
		width: 100%;
	}

	.search-input {
		width: 100%;
		height: 100%;
		padding: 0 5px;

		font-size: 14px;
		color: #cacaca;
		vertical-align: top;

		background: rgb(67 59 54 / 90%);
		background-color: #363636;
		border: none;
		border-radius: 3px 0 0 3px;
		outline: 0;
	}

	.logo-wrapper > a {
		display: flex;
	}

	.button {
		cursor: pointer;

		position: relative;

		display: inline-block;

		box-sizing: border-box;
		height: 26px;
		margin: 0 6px 0 8px;
		padding: 6px 10px;

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
	}

	.button:hover {
		background-color: #3f3f3f;
	}

	.button.grey {
		color: #acacac;
	}

	.button.orange {
		background-color: #ffa31a;
	}

	.profile-menu {
		display: flex;
		gap: 0.5em;
		align-items: center;
	}

	.profile-menu a,
	.profile-menu svg {
		color: #ccc;
		stroke: #ccc;
	}

	.profile-menu a:hover,
	.profile-menu svg:hover {
		color: #fff;
		stroke: #fff;
	}

	.profile-menu .avatar {
		cursor: pointer;
		width: 39px;
		height: 39px;
	}

	.profile-menu button {
		cursor: pointer;
		background-color: transparent;
		border: none;
	}

	.dropdown {
		display: flex;
		align-items: center;
	}

	.dropdown .arrow {
		margin-left: 0.5em;
	}

	@media screen and (width < 934px) {
		.search-input-wrapper,
		.header-buttons,
		.profile-menu {
			display: none;
		}

		.header-container {
			grid-template-columns: 0 1fr;
		}
	}
</style>
