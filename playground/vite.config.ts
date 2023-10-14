import path from 'node:path'

import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'
import react from '@vitejs/plugin-react'
import polishTaggedTemplates from 'unplugin-polish-tagged-templates/vite'

import unplugin from '../src/vite'

import { localIconSets } from './configs/local-icon-sets.js'

export default defineConfig({
  plugins: [
    react(),
    polishTaggedTemplates({
      cssTags: ['cls', 'tw'],
    }),
    inspect(),
    unplugin({
      cssGenerators: [
        {
          iconSets: localIconSets,
          exportIcons: {
            bx: /./,
            // bx: /badge/,
            common: /./,
            test: /./,
          },
          iconSelector: '.i-{prefix}--{name}',
          outputPath: path.join(__dirname, 'public', 'icons.css'),
        },
      ],
    }),
  ],
})
