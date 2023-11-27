<script lang="ts">
    import LogoSvg from "$lib/components/SelfDrawingLogoSVG.svelte";
    import ProjectCardsGrid from "$lib/components/ProjectCardsGrid.svelte";
    import SelfTypingCode from "$lib/components/SelfTypingCode.svelte";
    import type { Project } from "$lib/types/sanity";
    import { draw, fade } from "svelte/transition";

    /** @type {import("./$types").PageData} */

    interface sanityData {
        projects: Project[];
    }

    export let data: sanityData;

    $: console.log("sanity data", data);
</script>

<div class="px-5 sm:px-20 md:px-40 xl:px-76 2xl:px-96 flex flex-col gap-10">
    <div class="mt-24 mb-44 sm:flex sm:flex-col-2">
        <div class="w-full w-fit">
            <div class="">
                <p class="">Hi there 👋 I'm</p>
                <h1 class="h1 text-6xl sm:text-7xl">Magnus <br /> Alexander <br /> Strømseng</h1>
            </div>
            <SelfTypingCode
                text={['Full Stack Developer', 'Informatics Student', 'Tech Enthusiast', 'E-Sports Player']}
            />
            <p class="text-xl my-2 max-w-xs">
                I'm a Fullstack Developer and Informatics Student from Norway.
            </p>
            <a href="mailto: magnus.stromseng+work@gmail.com"
            >
                <button type="button" class="btn variant-filled-primary">Hire me</button>
            </a
            >
        </div>

        <div class="w-[400px] justify-normal content-normal hidden lg:flex">
            <LogoSvg />
        </div>
    </div>

    <!-- SVG Logo -->
    <div class="w-full justify-normal content-normal flex lg:hidden">
        <LogoSvg />
    </div>

    <!-- About Me -->
    <div class="w-full gap-2">
        <h3 class="h3">About Me</h3>
        <p class="text-l">
            I'm a 21 year old Informatics student from Oslo, Norway. I'm currently in my 3rd year of my
            bachelor's degree at the Norwegian University of Technology and Science. I'm passionate about
            technology and I love to learn new things. I'm also a big fan of open source software and I
            try to contribute to open source projects whenever I can.
        </p>
    </div>

    <!-- Projects -->
    <div class="flex flex-col gap-2">
        <h3 class="h3">Projects</h3>
        {#if data.projects && data.projects.length}
            <ProjectCardsGrid projects={data.projects} />
        {:else}
            <p>Error: No projects found...</p>
        {/if}
    </div>
</div>
