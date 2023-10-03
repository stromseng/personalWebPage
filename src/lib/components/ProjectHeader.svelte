<script lang="ts">
	import type { Project } from '$lib/types/sanity';

	export let project: Project;
</script>

<div class="">
	<h1 class="h1">{project.title}</h1>

	<div class="mb-1"><code class="code">{project.tags} </code></div>
	{#if project.githubLink}
		<a href={project.githubLink}>
			<div class="chip variant-soft-primary p-1">
				<span><i class="fa-brands fa-github fa-lg" /></span>
				<span>GitHub</span>
			</div>
		</a>
	{/if}
	{#if project.hostedLink}
		<a href={project.hostedLink}>
			<div class="chip variant-soft-primary p-1">
				<span><i class="fa-solid fa-globe fa-lg" /></span>
				<span>Web Page</span>
			</div>
		</a>
	{/if}
</div>
