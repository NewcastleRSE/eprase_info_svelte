import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            precompress: false,
            strict: true,
            fallback: '404.html'
        }),
        paths: {
            // Set base to empty string so assets resolve relative to domain root (eprase.info)
            base: '',
            relative: true
        }
    }
};

export default config;