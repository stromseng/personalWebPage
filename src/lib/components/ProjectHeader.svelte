<script lang="ts">
    export let title: string;
    export let appStack: string;
    export let githubUrl: string;
</script>

<div class="">

        <h1 class="h1">{title}</h1>

    <div class="mb-1"><code class="code">{appStack} </code> </div>
    <a href={githubUrl}>
        <div class="chip variant-soft-primary p-1">
            <span><i class="fa-brands fa-github fa-xl"></i></span>
            <span>GitHub</span>
        </div>
    </a>
    


    
</div>