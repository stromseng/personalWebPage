<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";
	import ProjectCardsGrid from "$lib/components/ProjectCardsGrid.svelte";

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
         <a href="mailto: magnus.stromseng+work@gmail.com"><button type="button" class="btn variant-filled-primary">Hire me</button></a>
    </div>
    
    <div class="w-full gap-2">
        <h3 class="h3">About Me</h3>
        <p class="text-l ">I'm a 21 year old Computer Science student from Norway. I'm currently in my 3rd year of my bachelor's degree at the Norwegian University of Technology and Science. I'm passionate about technology and I love to learn new things. I'm also a big fan of open source software and I try to contribute to open source projects whenever I can.</p>
    </div>
    
    <div class="flex flex-col gap-2">
        <h3 class="h3">Projects</h3>
            <ProjectCardsGrid> </ProjectCardsGrid>
    </div>
</div>