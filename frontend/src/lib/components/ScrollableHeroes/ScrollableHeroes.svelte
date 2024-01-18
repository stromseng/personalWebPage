<script lang="ts">
    import Icon from "@iconify/svelte";

    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        // gsap.to(".hero", {
        //     scrollTrigger: {
        //         trigger: ".hero",
        //         pin: true, // pin the ".hero-content" element while scrolling
        //         start: "top top", // when the top of the trigger hits the top of the viewport
        //         end: "+=100%", // end after scrolling the height of the element
        //         scrub: true, // smooth scrolling effect
        //     },
        // });
    });
</script>

<div class="text-5xl font-bold mb-24 experience-header">
    I have experience in
</div>

<div class="flex flex-col gap-4">
    <div class="flex flex-row items-center gap-12">
        <div class="text-5xl">Svelte</div>
        <Icon icon="logos:svelte-icon" width="100" />
        <div class="mockup-browser border bg-base-300">
            <div class="mockup-browser-toolbar">
                <div class="input">https://daisyui.com</div>
            </div>
            <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
        </div>
    </div>

    <div class="flex flex-row items-center gap-12">
        <div class="text-5xl">React</div>
        <Icon icon="logos:react" width="100" />
        <div class="mockup-browser border bg-base-300">
            <div class="mockup-browser-toolbar">
                <div class="input">https://daisyui.com</div>
            </div>
            <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
        </div>
    </div>
</div>
