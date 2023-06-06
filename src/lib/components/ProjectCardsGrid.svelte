<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import {lendables} from "$lib/projects/lendables"; 
    import {zdMap} from "$lib/projects/zdMap";
    import {myWebSite} from "$lib/projects/myWebSite";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
    <ProjectCard {...lendables} />
    <ProjectCard {...zdMap}/>
    <ProjectCard {...myWebSite} />
</div>