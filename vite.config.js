import { defineConfig } from "vite";
import VitePluginVue from "@vitejs/plugin-vue";
import VitePluginMarkdown from "vite-plugin-md";
import VitePluginVueComponents from "unplugin-vue-components/vite";
import VitePluginSSR from "vite-plugin-ssr/plugin";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  plugins: [
    VitePluginVue({
      include: [/\.vue$/, /\.md$/]
    }),
    VitePluginMarkdown(),
    VitePluginVueComponents({
      dirs: ["components"],
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.md$/]
    }),
    VitePluginSSR({
      prerender: true
    })
  ]
});
