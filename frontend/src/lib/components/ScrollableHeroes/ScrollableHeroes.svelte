<script lang="ts">
    import Icon from '@iconify/svelte';
    
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        gsap.to(".hero", {
            scrollTrigger: {
                trigger: ".hero",
                pin: true, // pin the ".hero-content" element while scrolling
                start: "top top", // when the top of the trigger hits the top of the viewport
                end: "+=100%", // end after scrolling the height of the element
                scrub: true, // smooth scrolling effect
            },
        });
    });
</script>

<div class="hero min-h-96">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div>
            <h1 class="text-5xl font-bold">I have experience in</h1>
            <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
            </p>
        </div>
    </div>
</div>
