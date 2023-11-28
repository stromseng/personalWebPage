<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$lib/types/sanity';

	export let projects: Project[];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>
