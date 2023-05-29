<script>
    import ProjectCard from "./ProjectCard.svelte";
</script>

<!-- Intro text -->
<div class="p-10">
    <div class="w-full grid grid-cols-8 gap-2 my-24">
         <div class="col-start-2 row-start-1">
             <p>Hi there 👋 I'm</p>
            <h1 class="h1 text-7xl">Magnus <br/> Alexander <br/> Strømseng</h1>
         </div>
         <p class="text-xl col-span-3 row-start-2 col-start-2">I'm a Fullstack Developer and Computer <br> Science Student from Norway.</p>
         <button type="button" class="btn variant-filled-primary row-start-4 col-start-2">Hire me</button>
    </div>
    
    <div class="w-full grid grid-cols-8 gap-2 mt-44">
        <h3 class="h3 col-start-2 col-span-2">About Me</h3>
        <p class="text-l row-start-2 col-start-2 col-span-6">I'm a 21 year old Computer Science student from Norway. I'm currently in my 3rd year of my bachelor's degree at the Norwegian University of Technology and Science. <br> I'm passionate about technology and I love to learn new things. I'm also a big fan of open source software and I try to contribute to open source projects whenever I can.</p>
    </div>
    
    <div class="grid grid-cols-8 gap-4 mt-8">
        <h3 class="col-start-2 h3">Projects</h3>
        <div class="row-start-2 col-start-2 col-span-6">
    
            <div class="grid grid-cols-3 gap-4">
                <ProjectCard title="Lendables" url="lendables.png" appStack="React, Pocketbase, NextJS, NextUI, GitLab"  description="A full stack application developed using scrum and agile methods in a group. Allows users to lend out hobby tools and other hardware for limited time periods." />
                <ProjectCard title="ZD Map" url="zd.png" appStack="Leaflet, TypeScript, JS, HTML, GitHub" description="Open Source Project for mapping the game Zelda: Tears of the Kingdom. Contributed to both UI and functionality. "/>
                <ProjectCard title="This Website" url="selfPage.png" appStack="Svelte, Vite, SkeletonUI, Fontawesome" description="My personal website for showcasing my projects and other information about myself."/>
            </div>
        </div>
    </div>
</div>