import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/ITS_Global_JP/",
    build: {
        outDir: "docs",
    },
});
