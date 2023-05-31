<script lang="ts">
    import BodyDiv from "$lib/components/BodyDiv.svelte";
    import { CodeBlock } from '@skeletonlabs/skeleton';
    import { Avatar } from '@skeletonlabs/skeleton';
    import { Timeline, TimelineItem } from 'flowbite-svelte';

    let ProfilePic = "/images/profile-pic.jpg"
</script>

<BodyDiv>
    <h1 class="h1">About</h1>
        <div class="">
            <Avatar src="{ProfilePic}" width="w-32" rounded="rounded-full" class="image-text-wrap" />
            <p class="text-xl">I'm a 21 year old Computer Science student from Norway. I'm currently in my 3rd year of my bachelor's degree at the Norwegian University of Technology and Science. I'm passionate about technology and I love to learn new things. I'm also a big fan of open source software and I try to contribute to open source projects whenever I can.</p>
        </div>
    <h2 class="h2">Education</h2>
    <Timeline order="vertical">
        <TimelineItem title="Norwegian Institute of Technology and Science" date="2020-2023">
          <svelte:fragment slot="icon">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-primary-600 dark:text-primary-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd" /></svg>
            </span>
          </svelte:fragment>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Bachelor in Informatics
          </p>
        </TimelineItem>
        <TimelineItem title="Nydalen VGS" date="2017-2020">
          <svelte:fragment slot="icon">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-primary-600 dark:text-primary-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd" /></svg>
            </span>
          </svelte:fragment>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Studiespesialiserende 
          </p>
        </TimelineItem>
      </Timeline>
        <h2 class="h2">Skills</h2>
        <CodeBlock language="markdown" 
        code={`
### Web Design
- HTML
- JavaScript
- TypeScript
- CSS
### Div Languages
- Python
- Java
- C
### Frameworks
- React
- Svelte
- NextJS
### UI Libraries
- TailwindCSS
- Bootstrap
- SkeletonUI
- MaterialUI
### Other
- Git
- npm
- Vite
- SQL
- Pocketbase
- LaTeX
- Markdown
- Figma
- OBS
- Notion
- Trello
- Slack
### Methodologies
- Agile
- Scrum
        `}></CodeBlock>


        <h2 class="h2">Want to Learn</h2>
        <CodeBlock language="markdown" code={`- [ ] Unity
- [ ] UnrealEngine
- [ ] C++
- [ ] C#
- [ ] Rust
- [ ] NodeJs`}></CodeBlock>
</BodyDiv>