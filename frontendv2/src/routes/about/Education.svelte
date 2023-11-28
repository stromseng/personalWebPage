<script lang="ts">
    import Timeline from "$lib/components/Timeline.svelte";
    import TimelineItem from "$lib/components/TimelineItem.svelte";
</script>

<h2 class="h2">Education 🎓</h2>

<Timeline>
    <TimelineItem
        title="Norwegian Institute of Technology and Science"
        date="2021-2024"
        description="Bachelor in Informatics"
    >
        <svelte:fragment slot="icon">
            <span class=" w-6 h-6">
                <i
                    class="fa-solid fa-graduation-cap fa-xs"
                    style="color: #57cfa7"
                />
            </span>
        </svelte:fragment>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Bachelor in Informatics
        </p>
    </TimelineItem>
    <TimelineItem
        title="Nydalen VGS"
        date="2017-2020"
        description="Studiespesialiserende"
    >
        <svelte:fragment slot="icon">
            <span class=" w-6 h-6">
                <i class="fa-solid fa-school fa-xs" style="color: #57cfa7;" />
            </span>
        </svelte:fragment>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
    </TimelineItem>
</Timeline>
