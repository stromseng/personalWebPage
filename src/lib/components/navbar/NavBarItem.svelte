<script lang='ts'>
    import { Drawer,  drawerStore } from '@skeletonlabs/skeleton';
    export let href: string = "";


    function drawerClose() {
        drawerStore.close();
    }
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<a href={href} on:click={drawerClose}>
    <div class="w-full hover:bg-primary-hover-token h-24 flex flex-row place-content-center items-center">
            <span class="mr-1">
                <slot name="icon"><span></span></slot>
            </span>
            <slot><!-- optional fallback --></slot>
    </div>
</a>