import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://mamadjadali.github.io/alimaagency/",
	base: "/",
  integrations: [react(), tailwind()]
});