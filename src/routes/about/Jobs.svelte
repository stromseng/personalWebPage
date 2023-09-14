<script lang="ts">
	import Skills from './Skills.svelte';

	import Education from './Education.svelte';

	import BodyDiv from '$lib/components/BodyDiv.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Timeline, TimelineItem } from 'flowbite-svelte';

	let ProfilePic = '/images/profile-pic.jpg';
</script>

<h2 class="h2">Previous Jobs 💼</h2>
<Timeline order="vertical">
	<TimelineItem title="Linderud IL, Camp Linderud" date="2021-Present">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-secondary-900"
			>
				<i class="fa-solid fa-person-running fa-sm" style="color : #78D0E3" />
			</span>
		</svelte:fragment>
		<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Team Leader</p>
	</TimelineItem>
	<TimelineItem title="Linderud IL, Camp Linderud" date="2017-2020">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-secondary-900"
			>
				<i class="fa-solid fa-person-running fa-sm" style="color : #78D0E3" />
			</span>
		</svelte:fragment>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">Camp Staff</p>
	</TimelineItem>
</Timeline>
