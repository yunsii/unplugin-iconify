# unplugin-starter

[![NPM version](https://img.shields.io/npm/v/unplugin-starter?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-starter)

Starter template for [unplugin](https://github.com/unjs/unplugin).

## Template Usage

To use this template, clone it down using:

```bash
npx degit yunsii/unplugin-starter my-unplugin
```

And do a global replacement of `unplugin-starter` with your plugin name.

Then you can start developing your unplugin 🔥

To test your plugin, run: `pnpm run dev` To release a new version, run: `pnpm run release`

## Install

```bash
npm i unplugin-starter
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import starter from 'unplugin-starter/vite'

export default defineConfig({
  plugins: [
    starter({
      /* options */
    }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import starter from 'unplugin-starter/rollup'

export default {
  plugins: [
    starter({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-starter/webpack')({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    [
      'unplugin-starter/nuxt',
      {
        /* options */
      },
    ],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-starter/webpack')({
        /* options */
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import starter from 'unplugin-starter/esbuild'

build({
  plugins: [starter()],
})
```

<br></details>
