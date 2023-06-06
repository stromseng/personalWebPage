<script lang="ts">
    export let title: string;
    export let appStack: string[];
    export let githubUrl: string;
</script>

<div class="">

        <h1 class="h1">{title}</h1>

    <div class="mb-1"><code class="code">{appStack} </code> </div>
    <a href={githubUrl}>
        <div class="chip variant-filled-tertiary">
            <span><i class="fa-brands fa-github fa-2xl"></i></span>
            <span>GitHub</span>
        </div>
    </a>
    


    
</div>