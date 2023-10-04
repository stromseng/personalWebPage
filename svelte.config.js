import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	vitePlugin: {
		inspector: true
	},
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // may differ from host to host
			precompress: false,
			strict: true
		}),
		prerender: {
			// use relative URLs similar to an anchor tag <a href="/test/1"></a>
			// do not include group layout folders in the path such as /(group)/test/1
			entries: [
				'/projects/lendables/',
				'/projects/zd-map/',
				'/projects/my-personal-website/',
				'/projects/onward-heatmap/',
				'/projects/an-a-pathfinding-visualizer/',
				'/projects/airsoft-bb-price-scraper/',
				'*'
			]
		}
	}
};
export default config;
