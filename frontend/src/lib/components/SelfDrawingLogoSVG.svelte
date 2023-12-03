<script>
    import { onMount } from "svelte";
    import { draw } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    let fillOpacity = 0;
    let transition = "fill-opacity 3s ease-in-out ";
    let visible = false;
    let mountDelay = 750;
    let fillDelay = 1750;

    onMount(() => {
        setTimeout(() => {
            fadeIn();
        }, mountDelay);
    });

    function fadeIn() {
        visible = true;
        setTimeout(() => {
            fillOpacity = 1;
        }, fillDelay);
    }
</script>

<div class="">
    {#if visible}
        <svg
            width="65.06356mm"
            height="72.434502mm"
            viewBox="0 0 65.063561 72.434503"
            id="svg5"
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-base-content fill-base-content">
            <!-- fill="white" -->
            <!-- transition:draw={{ duration: 5000, delay: 500, easing: quintOut }} -->
            <!-- 	
			fill="rgba(0,0,0,0)"
			stroke="#000000"
			stroke-width="0.2"
			stroke-opacity="1" 
		-->
            <g id="layer2" transform="translate(0.19142617,-0.00313977)">
                <path
                    in:draw={{ duration: 5000, delay: 250, easing: quintOut }}
                    style="fill-opacity: {fillOpacity}; transition: {transition};"
                    stroke-width="0.2"
                    stroke-opacity="1"
                    d="M 64.772133,21.84199 35.620716,38.605182 35.550743,59.219173 57.378768,46.66553 v 4.473864 l -21.802712,12.599468 0.004,8.525611 29.19208,-16.854271 -3e-6,-20.847563 -21.879055,12.375068 v -4.37901 L 64.772133,29.826012 Z"
                    id="path1091" />
                <path
                    in:draw={{ duration: 5000, delay: 250, easing: quintOut }}
                    style="fill-opacity: {fillOpacity}; transition: {transition};"
                    stroke-width="0.2"
                    stroke-opacity="1"
                    d="M 7.0591093,51.640949 21.860987,59.631769 21.778357,51.159031 7.0942133,42.957468 Z"
                    id="path1089" />
                <path
                    in:draw={{ duration: 5000, delay: 250, easing: quintOut }}
                    style="fill-opacity: {fillOpacity}; transition: {transition};"
                    stroke-width="0.2"
                    stroke-opacity="1"
                    d="M -0.03839721,55.372595 -0.09115495,21.664072 29.153125,38.518324 29.050361,72.22686 21.726517,68.013296 V 42.664062 L 7.1306686,33.939723 7.0269898,59.586158 Z"
                    id="path1087" />
                <path
                    in:draw={{ duration: 5000, delay: 250, easing: quintOut }}
                    style="fill-opacity: {fillOpacity}; transition: {transition};"
                    stroke-width="0.2"
                    stroke-opacity="1"
                    d="M 3.3956797,16.972898 32.588107,0.11864226 61.978806,17.125515 32.551375,33.824404 25.2388,29.573381 47.359035,17.026671 43.690984,14.902896 21.582513,27.447867 14.269938,23.196844 36.341973,10.643722 32.639942,8.5593064 10.613656,21.071324 3.3956797,16.972898"
                    id="path1083" />
            </g>
        </svg>
    {/if}
</div>
