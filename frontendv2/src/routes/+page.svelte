<script lang="ts">
    import LogoSvg from "$lib/components/SelfDrawingLogoSVG.svelte";
    import ProjectCardsGrid from "$lib/components/ProjectCardsGrid.svelte";
    import SelfTypingCode from "$lib/components/SelfTypingCode.svelte";

    import type { Project } from "$lib/types/sanity";
    import ContentBody from "$lib/components/ContentBody.svelte";

    /** @type {import("./$types").PageData} */
    // src/routes/+page.js
    //Import Sanity CMS data
    interface sanityData {
        projects: Project[];
    }

    export let data: sanityData;
</script>

<ContentBody>
    <div class="mt-12 mb-24 md:mb-48 sm:flex sm:flex-col-2">
        <div class="w-full">
            <div class="">
                <div class="prose"><p class="">Hi there 👋 I'm</p></div>
                <h1 class="h1 text-6xl sm:text-7xl code">
                    Magnus <br /> Alexander <br /> Strømseng
                </h1>
            </div>
            <SelfTypingCode
                text={[
                    "Full Stack Developer",
                    "Informatics Student",
                    "Tech Enthusiast",
                    "E-Sports Player",
                ]}
            />
            <div class="">
                <p class="text-xl my-2 max-w-xs">
                    A Fullstack Developer and Informatics Student from Norway.
                </p>
            </div>
            <a href="mailto: magnus.stromseng+work@gmail.com">
                <button type="button" class="btn btn-success">Hire me </button>
            </a>
        </div>

        <div class="w-[400px] justify-normal content-normal hidden md:flex">
            <LogoSvg />
        </div>
    </div>

    <!-- SVG Logo -->
    <div class="mb-24 w-full justify-normal content-normal flex md:hidden">
        <LogoSvg />
    </div>

    <!-- About Me -->
    <div class="w-full gap-2 prose mb-16">
        <h2 class="">About Me</h2>
        <p class="text-l">
            I'm a 21 year old Informatics student from Oslo, Norway. I'm
            currently in my 3rd year of my bachelor's degree at the Norwegian
            University of Technology and Science. I'm passionate about
            technology and I love to learn new things. I'm also a big fan of
            open source software and I try to contribute to open source projects
            whenever I can. You can read more about me <a href="/about">here</a>
        </p>
    </div>

    <!-- Projects -->
    <div class="flex flex-col gap-2">
        <div class="prose mb-6"><h2 class="">Projects</h2></div>
        {#if data.projects && data.projects.length}
            <ProjectCardsGrid projects={data.projects} />
        {:else}
            <p>Error: No projects found...</p>
        {/if}
    </div>
</ContentBody>
