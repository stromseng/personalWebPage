<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
    <ProjectCard title="Lendables" siteUrl="/projects/lendables" picUrl="lendables.png" githubUrl="https://github.com/Thrywyn/Lendables-pu-project"  appStack="React, Pocketbase, NextJS, NextUI, GitLab"  description="A full stack application developed using scrum and agile methods in a group. Allows users to lend out hobby tools and other hardware for limited time periods." />
    <ProjectCard title="ZD Maps" picUrl="zd.png" githubUrl="https://github.com/zeldadungeon/maps" appStack="Leaflet, TypeScript, JS, HTML, GitHub" description="Open Source Project for mapping the game Zelda: Tears of the Kingdom. Contributed to both UI and functionality. "/>
    <ProjectCard title="This Website" githubUrl="https://github.com/Thrywyn/personalWebPage" picUrl="selfPage.png" appStack="Svelte, Vite, SkeletonUI, Fontawesome" description="My personal website for showcasing my projects and other information about myself."/>
</div>