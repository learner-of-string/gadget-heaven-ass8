import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        // Obfuscate the build
        minify: true,
        // Remove source maps in production
        sourcemap: false,
        // Customize chunk names
        rollupOptions: {
            output: {
                manualChunks: undefined,
                chunkFileNames: "assets/[hash].js",
                entryFileNames: "assets/[hash].js",
                assetFileNames: "assets/[hash].[ext]",
            },
        },
    },
});
