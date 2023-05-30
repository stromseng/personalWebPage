<script lang="ts">
    export let title: string;
    export let appStack: string[];
</script>

<div class="">
    
    <div class="mb-4">
        <h1 class="h1">{title}</h1>
        <code class="code">Project</code>
    </div>
    {#each appStack as tech}
    <ins class="ins sm:w-[50%]">
        {tech}
    </ins>
    {/each}
    
</div>