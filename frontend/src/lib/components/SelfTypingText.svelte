<script lang="ts">
	import { onMount } from 'svelte';

	export let text: string[] = ['Testing', 'Testing2', 'Testing3'];

	const typingDelay: number = 150;
	const resetDelay: number = 2000;
	const backSpaceDelay: number = 75;

	let textBuilder: string = '';
	let textIndex: number = 0;
	let builderIndex: number = 0;

	let blinkingCursor: boolean = false;
	let cursorText: string = '│';
	let cursorBlinkDelay: number = 500;
	let cursorVisible: boolean = true;

	onMount(async () => {
		typeText();
	});

	async function blinkCursor() {
		if (blinkingCursor) {
			if (cursorText == '│') {
				cursorText = '';
				cursorVisible = false;
			} else {
				cursorText = '│';
				cursorVisible = true;
			}
			setTimeout(blinkCursor, cursorBlinkDelay);
		} else {
			cursorText = '│';
			cursorVisible = true;
		}
	}

	async function typeText() {
		if (builderIndex < text[textIndex].length) {
			//Type the next character
			textBuilder += text[textIndex].charAt(builderIndex);
			builderIndex++;
			setTimeout(typeText, typingDelay);
		} else if (textIndex < text.length - 1) {
			// Type next word
			blinkingCursor = true;
			blinkCursor();
			await new Promise((r) => setTimeout(r, resetDelay));
			blinkingCursor = false;
			await backSpaceText();
			textIndex++;
			builderIndex = 0;
			setTimeout(typeText, typingDelay);
		} else {
			// Reset to first word
			blinkingCursor = true;
			blinkCursor();
			await new Promise((r) => setTimeout(r, resetDelay));
			blinkingCursor = false;
			await backSpaceText();
			textIndex = 0;
			builderIndex = 0;
			setTimeout(typeText, typingDelay);
		}
	}

	async function backSpaceText() {
		while (textBuilder.length > 0) {
			textBuilder = textBuilder.slice(0, -1);
			await new Promise((r) => setTimeout(r, backSpaceDelay));
		}
	}
</script>

<span>
	{textBuilder}{#if cursorVisible}{cursorText}{:else}&nbsp;{/if}
</span>
