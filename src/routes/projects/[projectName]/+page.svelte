<script lang="ts">
	import BodyDiv from '$lib/components/BodyDiv.svelte';
	import ProjectHeader from '$lib/components/ProjectHeader.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	import imageUrlBuilder from '@sanity/image-url';
	import client from '$lib/sanityClient';

	//Carousel
	import { Carousel } from 'flowbite-svelte';
	import type { Project } from '$lib/types/sanity';

	let showThumbs = false;
	let showCaptions = false;

	export let data;

	console.log('data', data);

	let project: Project = data.project[0];

	// Get a pre-configured url-builder from your sanity client
	const builder = imageUrlBuilder(client);

	// Then we like to make a simple function like this that gives the
	// builder an image and returns the builder for you to specify additional
	// parameters:
	function urlFor(source: any) {
		return builder.image(source);
	}

	//Create Images array
	let images: Array<{}> = [];

	for (let i = 0; i < project.images.length; i++) {
		images.push({
			imgurl: urlFor(project.images[i]).url(),
			name: 'Image ' + i,
			attribution: 'Image ' + i
		});
	}

	console.log('Images', images);
</script>

<BodyDiv>
	{#if project != null}
		<ProjectHeader {project} />
		<h2 class="h2">About</h2>
		<p class="text-xl">{project.shortDescription}</p>
		<p class="text-xl">{project.longDescription}</p>
		<div class="max-w-4xl">
			<Carousel
				{images}
				{showThumbs}
				{showCaptions}
				divClass="overflow-hidden relative rounded-lg"
			/>
		</div>
	{:else}
		<p>Project not found</p>
	{/if}
</BodyDiv>
