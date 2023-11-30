<script lang="ts">
    import Jobs from "./Jobs.svelte";

    import Skills from "./Skills.svelte";

    import Education from "./Education.svelte";

    import BodyDiv from "$lib/components/Styling/ContentBody.svelte";

    let ProfilePic = "/images/profile-pic.jpg";
</script>

<BodyDiv>
    <div class="flex flex-row mb-24">
        <div class="prose">
            <h1>About 🧑🏻</h1>
            <p class="text-xl">
                I'm a 21 year old Informatics student from Oslo, Norway. I'm
                currently in my 3rd year of my bachelor's degree at the
                Norwegian University of Technology and Science. I'm passionate
                about technology and I love to learn new things. I'm also a big
                fan of open source software and I try to contribute to open
                source projects whenever I can.
            </p>
        </div>
        <div class="avatar not-prose self-center">
            <div class="w-24 h-24 rounded-full mx-auto">
                <img src={ProfilePic} alt="Magnus Strømseng" />
            </div>
        </div>
    </div>
    <Education />
    <Jobs />
    <Skills />
</BodyDiv>
