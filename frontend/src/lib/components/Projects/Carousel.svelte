<script lang="ts">
    import { onMount } from "svelte";

    export let images = [] as { src: string; alt: string }[];

    //Start slide index to be shown
    let slideIndex = 0;
    let slideRefs = [] as HTMLDivElement[];
    let dotRefs = [] as HTMLButtonElement[];
    let descriptorText = "";

    onMount(() => {
        showSlides(slideIndex);
    });

    // Next/previous controls
    function plusSlides(n: number) {
        showSlides((slideIndex += n));
    }

    // Thumbnail image controls
    function currentSlide(n: number) {
        showSlides((slideIndex = n));
    }

    function showSlides(n: number) {
        let i;
        if (n > slideRefs.length - 1) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slideRefs.length - 1;
        }
        for (i = 0; i < slideRefs.length; i++) {
            slideRefs[i].style.display = "none";
        }
        for (i = 0; i < dotRefs.length; i++) {
            dotRefs[i].className = dotRefs[i].className.replace(" active", "");
        }
        slideRefs[slideIndex].style.display = "block";
        if (dotRefs[slideIndex]) {
            dotRefs[slideIndex].className += " active";
        }
        if (images[slideIndex].alt) {
            descriptorText = images[slideIndex].alt;
        } else {
            descriptorText = "";
        }
    }
</script>

<!-- Slideshow container -->

<div class="slideshow-container w-full aspect-[21/9] bg-base-200">
    <!-- Full-width images with number and caption text -->
    {#each images as image, i}
        <div class="mySlides fade" bind:this={slideRefs[i]}>
            <img src={image.src} alt={image.alt} style="width:100%" />
        </div>
    {/each}

    {#if images.length > 1}
        <!-- Next and previous buttons -->
        <button
            class="prev"
            on:click={() => {
                plusSlides(-1);
            }}
            >&#10094;
        </button>
        <button
            class="next"
            on:click={() => {
                plusSlides(1);
            }}
            >&#10095;
        </button>
    {/if}
</div>

<p class="text-center">{descriptorText}</p>

<!-- The dots/circles -->
{#if images.length > 1}
    <div style="text-align:center">
        {#each images as image, i}
            <button
                class="dot"
                on:click={() => {
                    currentSlide(i);
                }}
                bind:this={dotRefs[i]}
                class:active={i === slideIndex}></button>
        {/each}
    </div>
{/if}

<style>
    /* Slideshow container */
    .slideshow-container {
        width: 100%;
        position: relative;
    }

    /* Hide the images by default */
    .mySlides {
        display: none;
    }

    .mySlides img {
        object-fit: contain;
        max-height: 50vh;
    }

    /* Next & previous buttons */
    .prev,
    .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
    }

    /* Position the "next button" to the right */
    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover,
    .next:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

    /* The dots/bullets/indicators */
    .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
    }

    .active,
    .dot:hover {
        background-color: #474747;
    }

    /* Fading animation */
    .fade {
        animation-name: fade;
        animation-duration: 1s;
    }

    @keyframes fade {
        from {
            opacity: 0.4;
        }
        to {
            opacity: 1;
        }
    }
</style>
