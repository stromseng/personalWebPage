<script lang="ts">
	import BodyDiv from '$lib/components/BodyDiv.svelte';
	import ProjectHeader from '$lib/components/ProjectHeader.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	//Carousel
	import { Carousel } from 'flowbite-svelte';
	let Images: any;
	let showThumbs = false;
	let showCaptions = false;

	//Slugs
	export let data: import('./$types').PageData;

	//Dynamic Import Project
	const modules = import.meta.glob('../../../lib/projects/*.ts');
	let Project: Project;

	for (const path in modules) {
		modules[path]().then((mod) => {
			console.log(mod);
			for (const key in mod as any) {
				console.log(mod[key]);

				if (mod[key].internalName === data.projectName) {
					Project = mod[key];
					Images = Project.images;
				}
			}
		});
	}
</script>

<BodyDiv>
	{#if Project != null}
		<ProjectHeader {...Project} />
		<h2 class="h2">About</h2>
		<p class="text-xl">{Project.desciptionShort}</p>
		<p class="text-xl">{Project.description}</p>
		<div class="max-w-4xl">
			<Carousel
				images={Images}
				{showThumbs}
				{showCaptions}
				divClass="overflow-hidden relative rounded-lg"
			/>
		</div>
	{:else}
		<p>Project not found</p>
	{/if}
</BodyDiv>
