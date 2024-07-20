import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://alima.agency",
	base: "/",
  integrations: [react(), tailwind()]
});