import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
//adds tailwind by running npx astro add tailwind
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});