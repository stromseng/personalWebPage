<script lang="ts">
    import client from "$lib/sanityClient";

    import imageUrlBuilder from "@sanity/image-url";

    import type { Image, Project } from "$lib/types/sanity";
    import CodeTags from "./CodeTags.svelte";

    // Get a pre-configured url-builder from your sanity client
    const builder = imageUrlBuilder(client);

    // Then we like to make a simple function like this that gives the
    // builder an image and returns the builder for you to specify additional
    // parameters:
    function urlFor(source: any) {
        return builder.image(source);
    }

    export let project: Project;

    let siteUrl = "/projects/" + project.slug.current;
</script>

<div class="card shadow-xl bg-base-200">
    <figure>
        <a href={siteUrl}
            ><img
                src={urlFor(project.mainImage).url()}
                class="w-full aspect-[21/9] object-cover object-left"
                alt="Post"
            /></a
        >
    </figure>
    <div class="card-body">
        <h2 class="card-title">{project.title}</h2>
        <CodeTags tags={project.tags} />
        <p>
            {project.shortDescription}
        </p>
    </div>
    {#if project.githubLink !== undefined || project.githubLink != null}
        <hr class="opacity-50" />
        <div class="p-4 justify-start space-x-4 card-actions h-14">
            <a href={project.githubLink}
                ><i class="fa-brands fa-github fa-xl" /></a
            >
        </div>
    {/if}
</div>
