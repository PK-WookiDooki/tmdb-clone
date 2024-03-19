import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import jsPathConfig from "vite-jsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), jsPathConfig()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
});
