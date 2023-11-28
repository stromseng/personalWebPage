<script lang="ts">
    import BodyDiv from "$lib/components/BodyDiv.svelte";
    import ProjectCardsGrid from "$lib/components/ProjectCardsGrid.svelte";
    import type { Project } from "$lib/types/sanity";

    interface sanityData {
        projects: Project[];
    }

    export let data: sanityData;
</script>

<BodyDiv>
    <h1 class="h1">Projects</h1>
    <ProjectCardsGrid projects={data.projects} />
</BodyDiv>
