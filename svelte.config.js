import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        csp: {
            mode: "hash",
            directives: {
                "script-src": ["self", "unsafe-inline", "www.googletagmanager.com"],
                "object-src": ["none"],
            },
        },
    },
};

export default config;
