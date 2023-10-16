import pathe from 'pathe'
import { createUnplugin } from 'unplugin'

import { generateIconSetsCss } from './core/helpers/generate'
import { PLUGIN_CSS_PREFIX } from './core/constants'
import { logger } from './core/log'

import type { UnpluginFactory } from 'unplugin'
import type { Options } from './types'

export const unpluginFactory: UnpluginFactory<Options | undefined> = (
  options,
) => {
  const { debug } = options || {}

  /**
   * {
   *   [id]: cssHash
   * }
   */
  const cssHashes: Record<string, string> = {}
  if (debug) {
    // ref: https://github.com/unjs/consola#log-level
    logger.level = 4
  }

  return {
    name: 'unplugin-iconify',
    buildStart: async () => {
      const { cssGenerators = [] } = options || {}

      await Promise.all(
        cssGenerators.map((cssGenerator) => {
          return generateIconSetsCss(cssGenerator, {
            onCssHashGenerated: (cssHash) => {
              if (cssGenerator.id) {
                cssHashes[cssGenerator.id] = cssHash
              }
            },
          })
        }),
      )
    },
    resolveId(id: string) {
      if (id.startsWith(PLUGIN_CSS_PREFIX)) {
        logger.debug('Got resolveId', id)
        return id
      }
    },
    loadInclude(id) {
      return id.startsWith(PLUGIN_CSS_PREFIX)
    },
    async load(id) {
      const normalizeId = pathe.normalize(id)
      const cssGeneratorKey = id.replace(PLUGIN_CSS_PREFIX, '')
      const cssHash = cssHashes[cssGeneratorKey]

      logger.debug('Got load id', normalizeId)
      logger.debug('cssGeneratorKey', cssGeneratorKey, 'cssHash', cssHash)

      return {
        code: `
          // import { cssHash } from 'unplugin-iconify-css/<key>'
          export const cssHash = '${cssHash}'
        `,
        map: null,
      }
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
