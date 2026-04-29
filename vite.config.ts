import type { UserConfig } from 'vite'

export default {
    root: "src",
    build: {
        sourcemap: true,
        outDir: "../dist",
        minify: false,
        manifest: true
    }
} satisfies UserConfig