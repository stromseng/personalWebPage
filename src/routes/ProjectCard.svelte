<script lang="ts">
import { Avatar } from '@skeletonlabs/skeleton';
	import { stringify } from 'postcss';

const imagesLocation = '/images/';

export let title : string;
export let appStack : string;
export let description : string;
export let url : string | undefined | null;




</script>

<a class="card card-hover overflow-hidden flex flex-col" href="/elements/cards">
    <header>
        <img src={imagesLocation + url} class="bg-black/50 w-full aspect-[21/9] object-cover object-left" alt="Post" />
    </header>
    <div class="p-4 grow">
        <h3 class="h3" data-toc-ignore>{title}</h3>
        <p class="text-xs font-thin mb-4">{appStack}</p>
        <article>
            <p>
                {description}
            </p>
        </article>
    </div>
    <hr class="opacity-50" />
    <footer class="p-4 flex justify-start items-center space-x-4">
        <Avatar src="https://source.unsplash.com/YOErFW8AfkI/32x32" width="w-8" />
        <div class="flex-auto flex justify-between items-center">
            <h6 class="font-bold">By Alex</h6>
            <small>On {new Date().toLocaleDateString()}</small>
        </div>
    </footer>
</a>