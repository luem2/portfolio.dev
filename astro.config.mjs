import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'

import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), robotsTxt()],
	site: 'https://pinol.dev/',
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
})
