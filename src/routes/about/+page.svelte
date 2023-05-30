<script lang="ts">
    import BodyDiv from "$lib/components/BodyDiv.svelte";
    import { CodeBlock } from '@skeletonlabs/skeleton';
    import { Avatar } from '@skeletonlabs/skeleton';
    let ProfilePic = "/images/profile-pic.jpg"
</script>

<BodyDiv>
    <h1 class="h1">About</h1>
        <div class="">
            <Avatar src="{ProfilePic}" width="w-32" rounded="rounded-full" class="image-text-wrap" />
            <p class="text-xl">I'm a 21 year old Computer Science student from Norway. I'm currently in my 3rd year of my bachelor's degree at the Norwegian University of Technology and Science. I'm passionate about technology and I love to learn new things. I'm also a big fan of open source software and I try to contribute to open source projects whenever I can.</p>
        </div>
    <h2 class="h2">Education</h2>
        <div class="table-container">
            <!-- Native Table Element -->
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Institute</th>
                        <th>Course</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>Norwegian Institute of Technology and Science</td>
                            <td>Informatics Bachelor</td>
                            <td>2020-2024</td>
                        </tr>
                        <tr>
                            <td>Nydalen VGS</td>
                            <td>General education</td>
                            <td>2017-2020</td>
                        </tr>
                </tbody>
            </table>
        </div>
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