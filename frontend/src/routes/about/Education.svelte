<script lang="ts">
    import Timeline from "$lib/components/Timeline/Timeline.svelte";
    import TimelineItem from "$lib/components/Timeline/TimelineItem.svelte";
</script>

<div class="prose mb-4"><h2 class="h2">Education 🎓</h2></div>

<Timeline>
    <TimelineItem
        title="Norwegian Institute of Technology and Science"
        date="2021-2024"
        description="Bachelor in Informatics">
        <svelte:fragment slot="icon">
            <span
                class=" w-7 h-7 bg-base-200 rounded-full flex items-center pl-1.5">
                <i
                    class="fa-solid fa-graduation-cap fa-xs"
                    style="color: #57cfa7" />
            </span>
        </svelte:fragment>
    </TimelineItem>
    <TimelineItem
        title="Nydalen VGS"
        date="2017-2020"
        description="Studiespesialiserende">
        <svelte:fragment slot="icon">
            <span
                class=" w-7 h-7 bg-base-200 rounded-full flex items-center pl-1.5">
                <i class="fa-solid fa-school fa-xs" style="color: #57cfa7;" />
            </span>
        </svelte:fragment>
    </TimelineItem>
</Timeline>
