<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";
	import ProjectCardsGrid from "$lib/components/ProjectCardsGrid.svelte";

    import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	import { expand } from '$lib/custom-transitions.js';
	import { inner, outer } from '$lib/shape.js';

    function clickHandler() {
        console.log("Clicked");
    }

   

    //Timer SVG
    let visible = true;
	let timer = 3;
    startTimer();

  function startTimer() {
    setInterval(() => {
    if (timer > 0) 
    {timer--;}
  }, 1000);
  }

  $: if (timer == 0) {
    if (visible) visible = false;
    else visible = true;
    timer = 3;;
  }

</script>

<!-- Intro text -->
<div class="px-5 sm:px-20 md:px-40 xl:px-76 2xl:px-96 flex flex-col gap-10">
    <div class="mt-24 mb-44 sm:flex sm:flex-col-2">
        <div class="w-full w-fit">
             <div class="">
                 <p class="">Hi there 👋 I'm</p>
                <h1 class="h1 text-6xl sm:text-7xl">Magnus <br/> Alexander <br/> Strømseng</h1>
             </div>
             <p class="text-xl my-2 max-w-xs">I'm a Fullstack Developer and Computer Science Student from Norway.</p>
             <button on:click={clickHandler} type="button" class="btn variant-filled-primary">Hire me</button>
        </div>
        <div class="w-[230px] ml-64 ">
            {#if visible}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
                <g out:fade="{{duration: 200}}" opacity=0.2>
                    <path
                        in:expand="{{duration: 400, delay: 1000, easing: quintOut}}"
                        style="stroke: #ff3e00; fill: #ff3e00; stroke-width: 50;"
                        d={outer}
                    />
                    <path
                        in:draw="{{duration: 1000}}"
                        style="stroke:#ff3e00; stroke-width: 1.5"
                        d={inner}
                    />
                </g>
            </svg>
        {/if}
        </div>
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