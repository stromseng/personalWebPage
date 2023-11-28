<script lang="ts">
    import BodyDiv from "$lib/components/BodyDiv.svelte";
    import ProjectHeader from "$lib/components/ProjectHeader.svelte";
    import { onMount } from "svelte";
    import Carousel from "$lib/components/Carousel.svelte";

    import { PortableText } from "@portabletext/svelte";
    import imageUrlBuilder from "@sanity/image-url";
    import client from "$lib/sanityClient";

    import type { Project } from "$lib/types/sanity";

    import CustomParagraph from "$lib/components/CustomParagraph.svelte";

    let showThumbs = false;
    let showCaptions = false;

    export let data;

    console.log("data", data);

    let project: Project = data.project[0];

    // Get a pre-configured url-builder from your sanity client
    const builder = imageUrlBuilder(client);

    // Then we like to make a simple function like this that gives the
    // builder an image and returns the builder for you to specify additional
    // parameters:
    function urlFor(source: any) {
        return builder.image(source);
    }

    //Create Images array
    let images = [] as { src: string; alt: string }[];

    for (let i = 0; i < project.images.length; i++) {
        images.push({
            src: urlFor(project.images[i]).url(),
            alt: "Image " + i,
        });
    }

    console.log("Images", images);
</script>

<BodyDiv>
    {#if project != null}
        <ProjectHeader {project} />
        <h2 class="h2">About</h2>
        <p class="text-xl">{project.shortDescription}</p>
        <PortableText
            value={project.body}
            components={{
                block: {
                    normal: CustomParagraph,
                },
            }}
        />
        <div class="max-w-4xl">
            <Carousel {images}></Carousel>
        </div>
    {:else}
        <p>Project not found</p>
    {/if}
</BodyDiv>
