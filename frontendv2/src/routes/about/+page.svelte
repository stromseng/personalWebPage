<script lang="ts">
    import Jobs from "./Jobs.svelte";

    import Skills from "./Skills.svelte";

    import Education from "./Education.svelte";

    import BodyDiv from "$lib/components/BodyDiv.svelte";

    let ProfilePic = "/images/profile-pic.jpg";
</script>

<BodyDiv>
    <h1 class="h1">About 🧑🏻</h1>
    <div class="">
        <div class="avatar">
            <div class="w-24 rounded-full">
                <img src={ProfilePic} />
            </div>
        </div>
        <p class="text-xl">
            I'm a 21 year old Informatics student from Oslo, Norway. I'm
            currently in my 3rd year of my bachelor's degree at the Norwegian
            University of Technology and Science. I'm passionate about
            technology and I love to learn new things. I'm also a big fan of
            open source software and I try to contribute to open source projects
            whenever I can.
        </p>
    </div>
    <Education />
    <Jobs />
    <Skills />
</BodyDiv>
