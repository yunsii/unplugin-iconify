import { addDynamicIconSelectors } from 'tailwindcss-plugin-iconify'

import { localIconSets } from './configs/local-icon-sets.js'

import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors({
      prefix: 'i',
      iconSets: localIconSets,
      preprocessSets: ['bx'],
    }),
  ],
}

export default config
