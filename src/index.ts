import { createUnplugin } from 'unplugin'

import { generateIconSetsCss } from './helpers/generate'

import type { UnpluginFactory } from 'unplugin'
import type { Options } from './types'

export const unpluginFactory: UnpluginFactory<Options | undefined> = (
  options,
) => ({
  name: 'unplugin-iconify',
  buildStart: () => {
    const { cssGenerators = [] } = options || {}

    cssGenerators.forEach((cssGenerator) => {
      generateIconSetsCss(cssGenerator)
    })
  },
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
