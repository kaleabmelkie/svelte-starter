import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import pkg from './package.json'

const isProduction = !process.env.ROLLUP_WATCH
const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase())

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: isProduction,
    },
    {
      file: pkg.main,
      format: 'umd',
      name,
      sourcemap: isProduction,
    },
  ],
  plugins: [
    typescript(),

    svelte({
      preprocess: sveltePreprocess({ postcss: true }),
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !isProduction,
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    postcss({ extract: 'main.css' }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    isProduction && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
