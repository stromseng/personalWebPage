<script lang="ts">
    export let tags: string[];
</script>

<div class="flex flex-wrap gap-0.5">
    {#each tags as tag}
        <div class="badge badge-success">
            {tag}
        </div>
    {/each}
</div>
