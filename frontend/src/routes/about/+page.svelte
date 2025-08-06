<script lang="ts">
    import Jobs from "./Jobs.svelte";

    import Skills from "./Skills.svelte";

    import Education from "./Education.svelte";

    import BodyDiv from "$lib/components/Styling/ContentBody.svelte";
    import AboutSection from "$lib/components/AboutSection.svelte";

    let ProfilePic = "/images/profile-pic.jpg";
</script>

<BodyDiv>
    <div class="flex flex-row mb-4 gap-4 md:mb-24">
        <div class="prose">
            <h1>About 🧑🏻</h1>
            <AboutSection />
        </div>
        <div class="avatar not-prose self-center hidden md:block">
            <div class="w-24 h-24 rounded-full mx-auto">
                <img src={ProfilePic} alt="Magnus Strømseng" />
            </div>
        </div>
    </div>
    <div class="avatar not-prose self-center md:hidden">
        <div class="w-24 h-24 rounded-full mx-auto">
            <img src={ProfilePic} alt="Magnus Strømseng" />
        </div>
    </div>
    <Education />
    <Jobs />
    <Skills />
</BodyDiv>
