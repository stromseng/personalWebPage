<script lang="ts">
    import Timeline from "$lib/components/Timeline/Timeline.svelte";
    import TimelineItem from "$lib/components/Timeline/TimelineItem.svelte";
</script>

<div class="prose mt-4 mb-4">
    <h2 class="h2">Previous Jobs 💼</h2>
</div>
<Timeline>
    <TimelineItem
        title="Linderud IL, Camp Linderud"
        date="2021-Present"
        description="Team Leader">
        <svelte:fragment slot="icon">
            <span
                class=" w-7 h-7 bg-base-200 rounded-full flex items-center pl-1.5">
                <i
                    class="fa-solid fa-person-running fa-sm"
                    style="color : #78D0E3" />
            </span>
        </svelte:fragment>
    </TimelineItem>
    <TimelineItem
        title="Linderud IL, Camp Linderud"
        date="2017-2020"
        description="Camp Staff">
        <svelte:fragment slot="icon">
            <span
                class=" w-7 h-7 bg-base-200 rounded-full flex items-center pl-1.5">
                <i
                    class="fa-solid fa-person-running fa-sm"
                    style="color : #78D0E3" />
            </span>
        </svelte:fragment>
    </TimelineItem>
</Timeline>
