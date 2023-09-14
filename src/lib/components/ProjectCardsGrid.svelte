<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { lendables } from '$lib/projects/lendables';
	import { zdMap } from '$lib/projects/zdMap';
	import { myWebSite } from '$lib/projects/myWebSite';
	import { heatmap } from '$lib/projects/heatmap';
	import { airsoftScraper } from '$lib/projects/airsoftScraper';
	import { aStar } from '$lib/projects/aStar';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
	<ProjectCard {...lendables} />
	<ProjectCard {...zdMap} />
	<ProjectCard {...myWebSite} />
	<ProjectCard {...heatmap} />
	<ProjectCard {...airsoftScraper} />
	<ProjectCard {...aStar} />
</div>
