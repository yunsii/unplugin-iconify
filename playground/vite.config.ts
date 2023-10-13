import path from 'node:path'

import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'

import unplugin from '../src/vite'

export default defineConfig({
  plugins: [
    inspect(),
    unplugin({
      cssGenerators: [
        {
          iconifyIcons: {
            bx: ['badge', 'brightness'],
            // bx: /badge/,
          },
          iconSelector: '.i-{prefix}--{name}',
          outputPath: path.join(__dirname, 'public', 'icons.css'),
        },
      ],
    }),
  ],
})
