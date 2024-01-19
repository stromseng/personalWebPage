<script lang="ts">
    import BackendLogoCard from "./BackendLogoCard.svelte";

    import Icon from "@iconify/svelte";

    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import { Flip } from "gsap/dist/Flip";

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Flip);

    onMount(() => {
        gsap.registerEffect({
            name: "fadeInFromBottom",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            effect: (targets: any, config: { duration: any }) => {
                return gsap.from(targets, {
                    scrollTrigger: {
                        trigger: targets,
                        start: "top 90%",
                        end: "top 70%",
                        scrub: true,
                    },
                    opacity: 0,
                    y: 100,
                    duration: config.duration,
                });
            },
            defaults: { duration: 1 },
            extendTimeline: true,
        });

        gsap.effects.fadeInFromBottom(".experience-header", { duration: 1 });
        // Pin header at the top of the screen when it reaches the top of the screen

        gsap.effects.fadeInFromBottom(".react", { duration: 1 });
        gsap.effects.fadeInFromBottom(".svelte", { duration: 1 });
        gsap.effects.fadeInFromBottom(".mobile-first", { duration: 1 });
    });
</script>

<div class="flex flex-col gap-8 mb-24">
    <div class="text-5xl font-bold mb-8 experience-header">
        I have experience in
    </div>

    <div class="grid lg:grid-cols-2 gap-6">
        <!-- React -->
        <div class="hero bg-base-200 rounded-lg react">
            <div class="hero-content flex-col">
                <div>
                    <div class="flex flex-row">
                        <h1 class="text-5xl font-bold">
                            <Icon
                                icon="logos:react"
                                class="inline"
                                width="50" />
                            <span class="text-info">React</span>
                        </h1>
                    </div>
                    <p class="py-6">
                        Having made multiple full stack projects with React and
                        it's ecosystem, I have a good understanding of the
                        framework and how to use it alongside the most popular
                        libraries.
                    </p>
                </div>
            </div>
        </div>

        <!-- Logo Cloud of React Libraries -->
        <div
            class="grid max-w-sm grid-cols-4 gap-4 px-10 pt-10 md:max-w-none md:gap-6 xl:px-6 xl:pt-0 [&>*:nth-child(2n-1)]:-translate-y-[calc(50%+1rem/2)] md:[&>*:nth-child(2n-1)]:-translate-y-[calc(50%+1.5rem/2)]">
            <Icon icon="simple-icons:vercel" color="white" width="50" />
            <Icon icon="skill-icons:nextjs-dark" color="#ffda44" width="50" />
            <Icon icon="simple-icons:nextui" color="white" width="50" />
            <Icon icon="simple-icons:mui" width="50" color="#007fff" />
            <Icon icon="simple-icons:shadcnui" width="50" />
            <Icon icon="devicon:reactrouter" width="50" />
            <Icon icon="simple-icons:recoil" color="white" width="50" />
            <Icon
                icon="simple-icons:apollographql"
                color="#290ba0"
                width="50" />
        </div>

        <!-- Svelte -->
        <div class="hero bg-base-200 rounded-lg svelte">
            <div class="hero-content flex-col">
                <div>
                    <div class="flex flex-row">
                        <h1 class="text-5xl font-bold">
                            <Icon
                                icon="logos:svelte-icon"
                                class="inline"
                                width="50" />
                            <span class="text-error">Svelte</span>
                        </h1>
                    </div>
                    <p class="py-6">
                        My favourite framework. I have made multiple projects in
                        Svelte & SvelteKit, and love the simplicity of it.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="hero bg-base-200 rounded-lg mobile-first">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Mobile first design</h1>
                <p class="py-6">
                    Using tailwindcss, css flexbox, media queries and
                    javascript.
                </p>

                <div class="mockup-phone">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">Hi.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Backend Showcase -->
    <div class="flex flex-col items-center mt-24">
        <h1
            class="text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Backend's such as
        </h1>
        <div class="flex flex-row gap-8 mt-8 flex-wrap justify-center">
            <BackendLogoCard>
                <Icon icon="devicon:neo4j" width="50" />
                <h2 class="font-semibold">Neo4J</h2>
            </BackendLogoCard>
            <BackendLogoCard
                ><Icon icon="vscode-icons:file-type-firebase" width="50" />
                <h2 class="font-semibold">Firebase</h2>
            </BackendLogoCard>
            <BackendLogoCard
                ><Icon icon="simple-icons:mongodb" color="#12924f" width="50" />
                <h2 class="font-semibold">MongoDB</h2>
            </BackendLogoCard>
            <BackendLogoCard
                ><Icon icon="simple-icons:pocketbase" width="50" />
                <h2 class="font-semibold">Pocketbase</h2>
            </BackendLogoCard>
            <BackendLogoCard
                ><Icon icon="devicon:mysql" width="50" />
                <h2 class="font-semibold">MySQL</h2>
            </BackendLogoCard>
            <BackendLogoCard
                ><Icon icon="simple-icons:sanity" color="#f03e2f" width="50" />
                <h2 class="font-semibold">Sanity</h2>
            </BackendLogoCard>
        </div>
        <h1
            class="text-3xl mt-4 font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-700 inline-block text-transparent bg-clip-text">
            Communicating with
        </h1>
        <div class="flex flex-row gap-8 mt-8">
            <BackendLogoCard>
                <Icon icon="dashicons:rest-api" color="#4283f4" width="50" />
                <h2 class="card-title">REST</h2>
            </BackendLogoCard>
            <BackendLogoCard>
                <Icon icon="mdi:sql-query" color="#ffda44" width="50" />
                <h2 class="card-title">SQL</h2>
            </BackendLogoCard>
            <BackendLogoCard>
                <Icon icon="logos:graphql" width="50" />
                <h2 class="card-title">GraphQL</h2>
            </BackendLogoCard>
        </div>
    </div>
</div>
