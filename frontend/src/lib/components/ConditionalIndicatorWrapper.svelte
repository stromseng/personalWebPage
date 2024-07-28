<script lang="ts">
    export let condition = false;
    export let text = "new";
</script>

{#if condition}
    <div class="indicator">
        <span class="indicator-item badge badge-primary top-[-6px]"
            >{text}</span>
        <slot />
    </div>
{:else}
    <slot />
{/if}
