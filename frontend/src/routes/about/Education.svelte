<script lang="ts">
	import BodyDiv from '$lib/components/BodyDiv.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Timeline, TimelineItem } from 'flowbite-svelte';

	let ProfilePic = '/images/profile-pic.jpg';
</script>

<h2 class="h2">Education 🎓</h2>
<Timeline order="vertical">
	<TimelineItem title="Norwegian Institute of Technology and Science" date="2021-2024">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<i class="fa-solid fa-graduation-cap fa-xs" style="color: #57cfa7" />
			</span>
		</svelte:fragment>
		<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			Bachelor in Informatics
		</p>
	</TimelineItem>
	<TimelineItem title="Nydalen VGS" date="2017-2020">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<i class="fa-solid fa-school fa-xs" style="color: #57cfa7;" />
			</span>
		</svelte:fragment>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">Studiespesialiserende</p>
	</TimelineItem>
</Timeline>
