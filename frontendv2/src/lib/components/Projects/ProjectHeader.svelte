<script lang="ts">
    import type { Project } from "$lib/types/sanity";
    import CodeTags from "../Styling/CodeTags.svelte";

    export let project: Project;
</script>

<div class="mb-4">
    <div class="flex flex-row justify-between">
        <div>
            <div class="prose"><h1>{project.title}</h1></div>
            <div class="mb-1 mt-2">
                <CodeTags tags={project.tags} />
            </div>
        </div>
        <div>
            {#if project.hostedLink}
                <a href={project.hostedLink}>
                    <button class="btn">
                        <i class="fa-solid fa-globe fa-lg" />
                        <span>Visit</span>
                    </button>
                </a>
            {/if}
            {#if project.githubLink}
                <a href={project.githubLink}>
                    <button class="btn">
                        <i class="fa-brands fa-github fa-lg" />
                        <span>GitHub</span>
                    </button>
                </a>
            {/if}
        </div>
    </div>

    <div class="prose">
        <p>{project.shortDescription}</p>
    </div>
</div>
