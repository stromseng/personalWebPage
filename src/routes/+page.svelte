<script>
    import ProjectCard from "./ProjectCard.svelte";

    function clickHandler() {
        console.log("Clicked");
    }
</script>

<!-- Intro text -->
<div class="px-5 sm:px-20 md:px-40 xl:px-76 2xl:px-96 flex flex-col gap-10">
    <div class="w-full mt-24 mb-44">
         <div class="">
             <p class="">Hi there 👋 I'm</p>
            <h1 class="h1 text-6xl sm:text-7xl">Magnus <br/> Alexander <br/> Strømseng</h1>
         </div>
         <p class="text-xl my-2 max-w-xs">I'm a Fullstack Developer and Computer Science Student from Norway.</p>
         <button on:click={clickHandler} type="button" class="btn variant-filled-primary">Hire me</button>
    </div>
    
    <div class="w-full gap-2">
        <h3 class="h3">About Me</h3>
        <p class="text-l ">I'm a 21 year old Computer Science student from Norway. I'm currently in my 3rd year of my bachelor's degree at the Norwegian University of Technology and Science. I'm passionate about technology and I love to learn new things. I'm also a big fan of open source software and I try to contribute to open source projects whenever I can.</p>
    </div>
    
    <div class="flex flex-col gap-2">
        <h3 class="h3">Projects</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
                <ProjectCard title="Lendables" picUrl="lendables.png" githubUrl="https://github.com/Thrywyn/Lendables-pu-project"  appStack="React, Pocketbase, NextJS, NextUI, GitLab"  description="A full stack application developed using scrum and agile methods in a group. Allows users to lend out hobby tools and other hardware for limited time periods." />
                <ProjectCard title="ZD Maps" picUrl="zd.png" githubUrl="https://github.com/zeldadungeon/maps" appStack="Leaflet, TypeScript, JS, HTML, GitHub" description="Open Source Project for mapping the game Zelda: Tears of the Kingdom. Contributed to both UI and functionality. "/>
                <ProjectCard title="This Website" picUrl="selfPage.png" appStack="Svelte, Vite, SkeletonUI, Fontawesome" description="My personal website for showcasing my projects and other information about myself."/>
            </div>
    </div>
</div>