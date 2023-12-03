<script lang="ts">
    import client from "$lib/sanityClient";

    import imageUrlBuilder from "@sanity/image-url";

    import type { Project } from "$lib/types/sanity";
    import CodeTags from "../Styling/CodeTags.svelte";

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
    <a href={siteUrl}>
        <figure>
            <img
                src={urlFor(project.mainImage).url()}
                class="w-full aspect-[21/9] object-cover object-left"
                alt="Post"
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{project.title}</h2>
            <CodeTags tags={project.tags} />
            <p>
                {project.shortDescription}
            </p>
        </div>
    </a>
    {#if project.githubLink || project.hostedLink}
        <hr class="opacity-50" />
        <div class="flex flex-row">
            {#if project.githubLink}

                <div class="p-4 card-actions">
                    <div class="tooltip" data-tip="GitHub Repo">
                    <a href={project.githubLink} target="_blank"
                    ><i class="fa-brands fa-github fa-xl" /></a
                    ></div>
                </div>

            {/if}
            {#if project.hostedLink}
                <div class="p-4 card-actions">
                    <div class="tooltip" data-tip="Hosted here">
                    <a href={project.hostedLink} target="_blank"
                    ><i class="fa-solid fa-globe fa-xl" /></a
                    >
                        </div>
                </div>
            {/if}
        </div>
    {/if}

</div>
