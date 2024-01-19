<script lang="ts">
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
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>

        <div class="mockup-browser border border-black bg-base-300 react card1">
            <div class="mockup-browser-toolbar">
                <div class="input">Lendables</div>
            </div>
            <div class="flex justify-center px-4 py-16 bg-base-200">React!</div>
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
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>

        <div class="mockup-browser border border-black bg-base-300 svelte">
            <div class="mockup-browser-toolbar">
                <div class="input">magnus.stromseng.dev</div>
            </div>
            <div class="flex justify-center px-4 py-16 bg-base-200">
                Svelte!
            </div>
        </div>
    </div>

    <div class="hero min-h-screen bg-base-200 rounded-lg mobile-first">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Mobile first design</h1>
                <p class="py-6">
                    Using tailwindcss, css flexbox, media queries and
                    javascript.
                </p>
                <div class="flex flex-row gap-8">
                    <div class="mockup-phone">
                        <div class="camera"></div>
                        <div class="display">
                            <div class="artboard artboard-demo phone-1">
                                Hi.
                            </div>
                        </div>
                    </div>
                    <div class="mockup-phone">
                        <div class="camera"></div>
                        <div class="display">
                            <div class="artboard artboard-demo phone-1">
                                Hi.
                            </div>
                        </div>
                    </div>
                    <div class="mockup-phone">
                        <div class="camera"></div>
                        <div class="display">
                            <div class="artboard artboard-demo phone-1">
                                Hi.
                            </div>
                        </div>
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
        <div class="flex flex-row gap-8 mt-8">
            <div class="card w-24 h-24 bg-neutral text-neutral-content">
                <div class="flex items-center flex-col justify-center">
                    <Icon icon="devicon:neo4j" width="50" />
                    <h2 class="card-title">Neo4J</h2>
                </div>
            </div>
            <div class="card w-24 h-24 bg-neutral text-neutral-content">
                <div class="flex items-center flex-col justify-center">
                    <Icon icon="vscode-icons:file-type-firebase" width="50" />
                    <h2 class="card-title">Firebase</h2>
                </div>
            </div>
            <div class="card w-24 h-24 bg-neutral text-neutral-content">
                <div class="flex items-center flex-col justify-center">
                    <Icon
                        icon="simple-icons:mongodb"
                        color="#12924f"
                        width="50" />
                    <h2 class="card-title">MongoDB</h2>
                </div>
            </div>
            <div class="card w-24 h-24 bg-neutral text-neutral-content">
                <div class="flex items-center flex-col justify-center">
                    <Icon icon="simple-icons:pocketbase" width="50" />
                    <h2 class="card-title">Pocketbase</h2>
                </div>
            </div>
            <div class="w-24 h-24 bg-neutral text-neutral-content rounded-2xl">
                <div class="flex items-center flex-col justify-end h-full pb-1">
                    <Icon icon="devicon:mysql" width="50" />
                    <h2 class="card-title">MySQL</h2>
                </div>
            </div>
            <div class="w-24 h-24 bg-neutral text-neutral-content rounded-2xl">
                <div class="flex items-center flex-col justify-end h-full pb-1">
                    <Icon
                        icon="simple-icons:sanity"
                        color="#f03e2f"
                        width="50" />
                    <h2 class="card-title">Sanity</h2>
                </div>
            </div>
        </div>
        <h1
            class="text-3xl mt-4 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Communicating with
        </h1>
        <div class="flex flex-row gap-8 mt-8">
            <div class="card w-24 h-24 bg-neutral text-neutral-content">
                <div class="flex items-center flex-col justify-center">
                    <Icon icon="dashicons:rest-api" width="50" />
                    <h2 class="card-title">REST</h2>
                </div>
            </div>
            <div class="card w-24 h-24 bg-neutral text-neutral-content">
                <div class="flex items-center flex-col justify-center">
                    <Icon icon="logos:graphql" width="50" />
                    <h2 class="card-title">GraphQL</h2>
                </div>
            </div>
        </div>
    </div>
</div>
