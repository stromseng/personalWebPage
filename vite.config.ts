import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

    server: {
        fs: {
            allow: ["/Repos/myWebPage/my-skeleton-app/public"]
            }
        }
});
