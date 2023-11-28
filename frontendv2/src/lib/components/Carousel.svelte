<script lang="ts">
    export let images = [] as { src: string; alt: string }[];
</script>

<div class="carousel w-full">
    {#each images as { src, alt }, i}
        <div id="slide{i}" class="carousel-item relative w-full">
            <img {src} {alt} class="w-full" />
            <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
                {#if i === 0}
                    <a href="#slide{images.length - 1}" class="btn btn-circle"
                        >❮</a
                    >
                {:else}
                    <a href="#slide{i - 1}" class="btn btn-circle">❮</a>
                {/if}
                {#if i === images.length - 1}
                    <a href="#slide0" class="btn btn-circle">❯</a>
                {:else}
                    <a href="#slide{i + 1}" class="btn btn-circle">❯</a>
                {/if}
            </div>
        </div>
    {/each}
</div>
<div class="flex justify-center w-full py-2 gap-2">
    {#each images as { src, alt }, i}
        <a href="#slide{i}" class="btn btn-xs">{i + 1}</a>
    {/each}
</div>
