import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config

import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind()
    , icon()
  ]
});