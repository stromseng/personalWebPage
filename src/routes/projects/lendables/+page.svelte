<script lang="ts">
    import BodyDiv from "$lib/components/BodyDiv.svelte";
	import ProjectHeader from "$lib/components/ProjectHeader.svelte";
    import { CodeBlock } from '@skeletonlabs/skeleton';
    import { Avatar } from '@skeletonlabs/skeleton';
    let ProfilePic = "/images/profile-pic.jpg"

    let project = {
        title: "Lendables",
        description: "A web app for lending and borrowing items.",
        appStack: ["React", "NextJS", "NextUI", "Pocketbase"],
        githubUrl: "https://github.com/Thrywyn/Lendables-pu-project",
        imageUrl: "/images/lendables.png"
        }
</script>

<BodyDiv>
    <ProjectHeader {...project}></ProjectHeader>
    <a href={project.githubUrl}><i class="fa-brands fa-github fa-2xl"></i></a>
    <h2 class="h2">About</h2>
    <p class="text-xl">Lendables is a web app for lending and borrowing items. It's built with NextJS and NextUI. The backend is built with Pocketbase.</p>
    <img src={project.imageUrl} class="bg-black/50 w-max" alt="Post" />
</BodyDiv>