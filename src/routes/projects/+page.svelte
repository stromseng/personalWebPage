<script lang="ts">
	import BodyDiv from '$lib/components/BodyDiv.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectCardsGrid from '$lib/components/ProjectCardsGrid.svelte';
	let ProfilePic = '/images/profile-pic.jpg';
</script>

<BodyDiv>
	<h1 class="h1">Projects</h1>
	<ProjectCardsGrid />
</BodyDiv>
