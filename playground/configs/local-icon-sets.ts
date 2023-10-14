import path from 'node:path'

import { getLocalIconSets } from 'tailwindcss-plugin-iconify/local-icon-sets'

export const localIconSets = getLocalIconSets({
  define: {
    common: {
      iconifyJsonPath: path.join(
        __dirname,
        '..',
        'src',
        'assets',
        'figma',
        'common',
        'icons.json',
      ),
    },
    test: {
      iconifyJsonPath: path.join(
        __dirname,
        '..',
        'src',
        'assets',
        'figma',
        'test',
        'icons.json',
      ),
    },
  },
})
