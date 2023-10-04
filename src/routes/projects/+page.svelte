<script lang="ts">
	import BodyDiv from '$lib/components/BodyDiv.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectCardsGrid from '$lib/components/ProjectCardsGrid.svelte';
	import type { Project } from '$lib/types/sanity';
	let ProfilePic = '/images/profile-pic.jpg';

	interface sanityData {
		projects: Project[];
	}

	export let data: sanityData;
</script>

<BodyDiv>
	<h1 class="h1">Projects</h1>
	<ProjectCardsGrid projects={data.projects} />
</BodyDiv>
