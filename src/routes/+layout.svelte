<script lang="ts">

	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	//Highlight.js
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	let ProfilePic = '/images/profile-pic.jpg';

	//Grab URL
	import { page } from '$app/stores';

	//Drawer
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import NavBar from '$lib/components/navbar/NavBar.svelte';
	import NavBarItem from '$lib/components/navbar/NavBarItem.svelte';



	// Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = {
			id: 'nav-drawer',
			position: 'top',
			width: 'w-full'
		};
		drawerStore.open(s);
	}

	function drawerClose(): void {
		drawerStore.close();
	}

	let currentTile: number = 0;
</script>

<Drawer>
	{#if $drawerStore.id === 'nav-drawer'}
		<NavBar>
			<NavBarItem href="/">
				<svelte:fragment slot="icon"><i class="fa-solid fa-house fa-xl" /></svelte:fragment>
				Home
			</NavBarItem>
			<NavBarItem href="/about/">
				<svelte:fragment slot="icon"><i class="fa-solid fa-circle-user fa-xl" /></svelte:fragment>
				About
			</NavBarItem>
			<NavBarItem href="/projects/">
				<svelte:fragment slot="icon"><i class="fa-solid fa-folder fa-xl" /></svelte:fragment>
				Projects
			</NavBarItem>
			<NavBarItem href="/contact/">
				<svelte:fragment slot="icon"><i class="fa-solid fa-phone fa-xl" /></svelte:fragment>
				Contact Me
			</NavBarItem>
			<NavBarItem href="https://github.com/Thrywyn">
				<svelte:fragment slot="icon"><i class="fa-brands fa-github fa-xl" /></svelte:fragment>
				Github
			</NavBarItem>
			<NavBarItem href="https://www.linkedin.com/in/magnus-alexander-str%C3%B8mseng-063112214/">
				<svelte:fragment slot="icon"><i class="fa-brands fa-linkedin fa-xl" /></svelte:fragment>
				LinkedIn
			</NavBarItem>
		</NavBar>
	{/if}
</Drawer>

<!-- App Shell -->
<AppShell class="">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<Avatar src={ProfilePic} width="w-10" rounded="rounded-full" class="mr-1 hidden sm:block" />
				<strong class="text-xl uppercase font-heading-token">Magnus A. Strømseng</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="hidden lg:flex flex-row items-center">
					<a href="/"
						><button
							type="button"
							class="btn variant-surface no-underline"
							class:anchor={$page.url.pathname === '/'}>Home</button
						></a
					>
					<a href="/about/"
						><button
							type="button"
							class="btn variant-surface no-underline"
							class:anchor={$page.url.pathname === '/about/'}>About</button
						></a
					>
					<a href="/projects/"
						><button
							type="button"
							class="btn variant-surface no-underline"
							class:anchor={$page.url.pathname === '/projects/'}>Projects</button
						></a
					>
					<a href="/contact/"
						><button
							type="button"
							class="btn variant-surface no-underline"
							class:anchor={$page.url.pathname === '/contact/'}>Contact Me</button
						></a
					>
					<a href="https://github.com/Thrywyn" target="_blank">
						<button type="button" class="btn variant-surface">
							<span><i class="fa-brands fa-github fa-xl" /></span>
							<span />
						</button>
					</a>
					<a
						href="https://www.linkedin.com/in/magnus-alexander-str%C3%B8mseng-063112214/"
						target="_blank"
					>
						<button type="button" class="btn variant-surface">
							<span><i class="fa-brands fa-linkedin fa-xl" /></span>
							<span />
						</button>
					</a>
				</div>
				<!-- Hamburger Menu -->
				<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
					<i class="fa-solid fa-bars text-xl" />
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />

	<svelte:fragment slot="pageFooter">
		<AppBar gridColumns="grid-cols-1" slotDefault="place-self-center" class="w-full mt-10">
			<div>
				This website was built using <a class="anchor" href="https://svelte.dev">Svelte</a>,
				<a class="anchor" href="https://vitejs.dev">Vite</a>,
				<a class="anchor" href="https://www.skeleton.dev">Skeleton-UI</a>
				and <a class="anchor" href="https://fontawesome.com">Fontawesome</a>
			</div>
		</AppBar>
	</svelte:fragment>
	<!-- (footer) -->
</AppShell>
