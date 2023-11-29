<script lang="ts">
    import BodyDiv from "$lib/components/ContentBody.svelte";
    import ProjectCardsGrid from "$lib/components/ProjectCardsGrid.svelte";
    import type { Project } from "$lib/types/sanity";

    interface sanityData {
        projects: Project[];
    }

    export let data: sanityData;
</script>

<BodyDiv>
    <div class="prose mb-4"><h1 class="h1">Projects</h1></div>
    <ProjectCardsGrid projects={data.projects} />
</BodyDiv>
