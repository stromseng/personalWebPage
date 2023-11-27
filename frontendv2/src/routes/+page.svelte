<script lang="ts">

    import type { Project } from "$lib/types/sanity";

    /** @type {import("./$types").PageData} */
        // src/routes/+page.js
        //Import Sanity CMS data
    interface sanityData {
        projects: Project[];
    }

    export let data: sanityData;

</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
