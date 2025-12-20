import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), partytown(
    {
      config: {
        forward: ['dataLayer.push', 'GTM-PG4CLJ2'], // Forward these events
      }
    }
  )]
});