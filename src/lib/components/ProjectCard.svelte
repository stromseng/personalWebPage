<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { stringify } from 'postcss';

	import client from '$lib/sanityClient';

	import imageUrlBuilder from '@sanity/image-url';

	import type { Image, Project } from '$lib/types/sanity';
	import CodeTags from './CodeTags.svelte';

	// Get a pre-configured url-builder from your sanity client
	const builder = imageUrlBuilder(client);

	// Then we like to make a simple function like this that gives the
	// builder an image and returns the builder for you to specify additional
	// parameters:
	function urlFor(source: any) {
		return builder.image(source);
	}

	export let project: Project;

	let siteUrl = '/projects/' + project.slug.current;
</script>

<div class="card card-hover overflow-hidden flex flex-col">
	<a href={siteUrl} class="grow">
		<header>
			<img
				src={urlFor(project.mainImage).url()}
				class="bg-black/50 w-full aspect-[21/9] object-cover object-left"
				alt="Post"
			/>
		</header>
		<div class="p-4">
			<div class="mb-2">
				<h3 class="h3" data-toc-ignore>{project.title}</h3>
				<CodeTags tags={project.tags} />
			</div>
			<article>
				<p>
					{project.shortDescription}
				</p>
			</article>
		</div>
	</a>
	<hr class="opacity-50" />
	<footer class="p-4 flex justify-start items-center space-x-4">
		{#if project.githubLink != undefined || project.githubLink != null}
			<a href={project.githubLink}><i class="fa-brands fa-github fa-xl" /></a>
		{/if}
		<div class="flex-auto flex justify-between items-center">
			<h6 class="font-bold">{''}</h6>
		</div>
	</footer>
</div>
