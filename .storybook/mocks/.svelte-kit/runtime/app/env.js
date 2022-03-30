export { prerendering } from '../../../../../.svelte-kit/runtime/env.js'

/**
 * @type {import('$app/env').browser}
 */
const browser = !process.env.SSR
/**
 * @type {import('$app/env').dev}
 */
const dev = !!process.env.DEV
/**
 * @type {import('$app/env').mode}
 */
const mode = process.env.MODE
/**
 * @type {import('$app/env').amp}
 */
const amp = !!process.env.VITE_SVELTEKIT_AMP

export { amp, browser, dev, mode }
