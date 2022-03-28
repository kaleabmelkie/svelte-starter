import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),

    package: {
      exports: (filepath) =>
        (filepath.endsWith('.svelte') &&
          !filepath.endsWith('.stories.svelte')) ||
        filepath.endsWith('index.css'),
    },
  },
}

export default config
