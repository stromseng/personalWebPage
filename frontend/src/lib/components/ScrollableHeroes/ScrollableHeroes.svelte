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

<div class="grid lg:grid-cols-2 gap-6">
    <!-- React -->
    <div class="hero bg-base-200 rounded-lg">
        <div class="hero-content flex-col">
            <div>
                <div class="flex flex-row">
                    <h1 class="text-5xl font-bold">
                        <Icon icon="logos:react" class="inline" width="50" />
                        <span class="text-info">React</span>
                    </h1>
                </div>
                <p class="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                </p>
            </div>
        </div>
    </div>

    <div class="mockup-browser border border-black bg-base-300">
        <div class="mockup-browser-toolbar">
            <div class="input">https://daisyui.com</div>
        </div>
        <div class="flex justify-center px-4 py-16 bg-base-200">React!</div>
    </div>

    <!-- Svelte -->
    <div class="hero bg-base-200 rounded-lg">
        <div class="hero-content flex-col">
            <div>
                <div class="flex flex-row">
                    <h1 class="text-5xl font-bold">
                        <Icon
                            icon="logos:svelte-icon"
                            class="inline"
                            width="50" />
                        <span class="text-error">Svelte</span>
                    </h1>
                </div>
                <p class="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                </p>
            </div>
        </div>
    </div>

    <div class="mockup-browser border border-black bg-base-300">
        <div class="mockup-browser-toolbar">
            <div class="input">https://daisyui.com</div>
        </div>
        <div class="flex justify-center px-4 py-16 bg-base-200">Svelte!</div>
    </div>
</div>
