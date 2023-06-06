<script lang="ts">
	export let title: string;
	export let appStack: string;
	export let githubUrl: string;
	export let deployedUrl: string;
</script>

<div class="">
	<h1 class="h1">{title}</h1>

	<div class="mb-1"><code class="code">{appStack} </code></div>
	{#if githubUrl}
		<a href={githubUrl}>
			<div class="chip variant-soft-primary p-1">
				<span><i class="fa-brands fa-github fa-lg" /></span>
				<span>GitHub</span>
			</div>
		</a>
	{/if}
	{#if deployedUrl}
		<a href={deployedUrl}>
			<div class="chip variant-soft-primary p-1">
				<span><i class="fa-solid fa-globe fa-lg" /></span>
				<span>Web Page</span>
			</div>
		</a>
	{/if}
</div>
