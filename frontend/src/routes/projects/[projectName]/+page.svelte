<script lang="ts">
    import ContentBody from "$lib/components/Styling/ContentBody.svelte";
    import ProjectHeader from "$lib/components/Projects/ProjectHeader.svelte";
    import { onMount } from "svelte";
    import Carousel from "$lib/components/Projects/Carousel.svelte";

    import { PortableText } from "@portabletext/svelte";
    import imageUrlBuilder from "@sanity/image-url";
    import client from "$lib/sanityClient";

    import type { Project } from "$lib/types/sanity";

    import CustomParagraph from "$lib/components/Sanity/CustomParagraph.svelte";

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

    for (let i = 0; i < project?.images.length; i++) {
        images.push({
            src: urlFor(project.images[i]).url(),
            alt: project.images[i].alt,
        });
    }

    console.log("Images", images);
</script>

<ContentBody>
    {#if project != null && project !== undefined}
        <ProjectHeader {project} />

        <Carousel {images}></Carousel>

        <div class="prose mt-4">
            <PortableText
                value={project.body}
                components={{
                    block: {
                        normal: CustomParagraph,
                    },
                }}
            />
        </div>
    {:else}
        <p>Error: Project not found</p>
    {/if}
</ContentBody>
