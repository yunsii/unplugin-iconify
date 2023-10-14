# unplugin-iconify

[Unplugin](https://github.com/unjs/unplugin) for [iconify](https://iconify.design/).

[![NPM version](https://img.shields.io/npm/v/unplugin-iconify?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-iconify) [![Download monthly](https://img.shields.io/npm/dm/unplugin-iconify.svg)](https://www.npmjs.com/package/unplugin-iconify)

## Features

- ✨ `cssGenerators` - Easy to generate icons CSS as your expected

## Install

```bash
npm i unplugin-iconify
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import starter from 'unplugin-iconify/vite'

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
import starter from 'unplugin-iconify/rollup'

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
    require('unplugin-iconify/webpack')({
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
      'unplugin-iconify/nuxt',
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
      require('unplugin-iconify/webpack')({
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
import starter from 'unplugin-iconify/esbuild'

build({
  plugins: [starter()],
})
```

<br></details>

## Related

- [tailwindcss-plugin-iconify](https://github.com/yunsii/tailwindcss-plugin-iconify) - Use any SVG icon powered by Iconify for Tailwind CSS, easy to use local icons and figma icons in particular.

## License

[MIT](./LICENSE) License © 2023 [Yuns](https://github.com/yunsii)
