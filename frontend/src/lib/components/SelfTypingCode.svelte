<script lang="ts">
    export let text: string[] = ["Testing", "Testing2", "Testing3"];
    import SelfTypingText from "./SelfTypingText.svelte";
</script>

<div class="JetBrainsMono font-bold">
    <SelfTypingText {text} />
</div>
