<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Avatar  } from '@skeletonlabs/skeleton';

	//Grab URL
	import { page } from '$app/stores';
	
	let path : string;

    function getPath(currentPath : string) {
        path = currentPath;
        console.log(path);
    }

    $: getPath($page.url.pathname);

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<Avatar src="/public/images/profile-pic.jpg" width="w-10" rounded="rounded-full" class="mr-1" />
				<strong class="text-xl uppercase font-heading-token">Magnus A. Strømseng</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/"><button type="button" class="btn variant-surface no-underline" class:anchor={$page.url.pathname === path}>Home</button></a>
				<a href="/about"><button type="button" class="btn variant-surface no-underline class:anchor={$page.url.pathname === path}">About</button></a>
				<a href="/portfolio"><button type="button" class="btn variant-surface no-underline class:anchor={$page.url.pathname === path}">Portfolio</button></a>
				<button type="button" class="btn variant-surface no-underline class:anchor={$page.url.pathname === path}">Contact Me</button>
				<button type="button" class="btn variant-surface">
					<span><i class="fa-brands fa-github fa-xl" /></span>
					<span />
				</button>
				<button type="button" class="btn variant-surface">
					<span><i class="fa-brands fa-linkedin fa-xl" /></span>
					<span />
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<AppBar gridColumns="grid-cols-1" slotDefault="place-self-center" class="w-full mt-10">
			<div>This website was built using <a class="anchor" href="https://svelte.dev">Svelte</a>, <a class="anchor" href="https://vitejs.dev">Vite</a>, <a class="anchor" href="https://www.skeleton.dev">Skeleton-UI</a> and <a class="anchor" href="https://fontawesome.com">Fontawesome</a></div>
		</AppBar>
		</svelte:fragment>
	<!-- (footer) -->
</AppShell>
