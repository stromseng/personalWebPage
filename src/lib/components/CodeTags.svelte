<script lang="ts">
	export let tags: string[];

	let finalString: string = '';

	for (let i = 0; i < tags.length; i++) {
		if (i < tags.length - 1) {
			finalString += tags[i] + ', ';
		} else {
			finalString += tags[i];
		}
	}
</script>

<code class="code whitespace-normal"> {finalString}</code>
