<script lang="ts">
	import BodyDiv from '$lib/components/BodyDiv.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	let ProfilePic = '/images/profile-pic.jpg';
</script>

<BodyDiv>
	<h1 class="h1">Contact Me</h1>

	<ul class="list">
		<li>
			<span><i class="fa-solid fa-envelope" /></span>
			<a href="mailto: magnus@strømseng.no" class="anchor"
				><span class="flex-auto">magnus@strømseng.no</span></a
			>
		</li>
		<li>
			<span><i class="fa-brands fa-linkedin" /></span>
			<a
				href="https://www.linkedin.com/in/magnus-alexander-str%C3%B8mseng-063112214/"
				class="anchor"><span class="flex-auto">LinkedIn</span></a
			>
		</li>
	</ul>
</BodyDiv>
