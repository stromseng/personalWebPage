<script lang="ts">
	import Skills from './Skills.svelte';

	import Education from './Education.svelte';

	import BodyDiv from '$lib/components/BodyDiv.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Timeline, TimelineItem } from 'flowbite-svelte';

	let ProfilePic = '/images/profile-pic.jpg';
</script>

<h2 class="h2">Want to Learn 📚</h2>
<CodeBlock
	language="markdown"
	code={`- [ ] Unity
- [ ] UnrealEngine
- [ ] C++
- [ ] C#
- [ ] Rust
- [ ] NodeJs`}
/>
