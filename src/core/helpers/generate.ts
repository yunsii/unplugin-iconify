import crypto from 'crypto'

import { getIconsCSS } from '@iconify/utils'
import fse from 'fs-extra'
import pathe from 'pathe'
import { IconSet } from '@iconify/tools'

import { logger } from '../log'

import { ensureLoadIconSet } from './loader'

import type { IconCSSIconSetOptions } from '@iconify/utils/lib/css/types'
import type { CSSGenerator } from '../../types'

export interface GenerateIconSetsCSSOptions {
  onCssHashGenerated?: (cssHash: string) => void
}

export async function generateIconSetsCss(
  cssGenerator: CSSGenerator,
  options?: GenerateIconSetsCSSOptions,
) {
  const { iconSets = {}, exportIcons, iconSelector, outputPath } = cssGenerator
  const { onCssHashGenerated } = options || {}

  const getIconsCSSOptions: IconCSSIconSetOptions = {
    iconSelector,
  }

  let cssCode = ''

  if (exportIcons) {
    if (Array.isArray(exportIcons)) {
      exportIcons.forEach((prefix) => {
        const iconSet = ensureLoadIconSet(prefix, { iconSets })
        const css = getIconsCSS(
          iconSet,
          Object.keys(iconSet.icons),
          getIconsCSSOptions,
        )
        cssCode += css
      })
    } else {
      Object.keys(exportIcons).forEach((prefix) => {
        const iconSetJson = ensureLoadIconSet(prefix, {
          iconSets,
        })
        const iconSet = new IconSet(iconSetJson)
        const iconNames = exportIcons[prefix as keyof typeof exportIcons]
        const css = getIconsCSS(
          iconSetJson,
          iconNames instanceof RegExp
            ? iconSet.list(['icon', 'variation']).filter((item) => {
                return iconNames.test(item)
              })
            : iconNames,
          getIconsCSSOptions,
        )
        cssCode += css
      })
    }
  }

  const getCssHash = () => {
    const cssHash = crypto
      .createHash('md5')
      .update(cssCode.replace(/[ \n\t]/g, ''), 'utf8')
      .digest('hex')
      .slice(0, 8)
    onCssHashGenerated?.(cssHash)

    logger.debug('generateIconSetsCss cssHash', cssHash)

    return cssHash
  }

  const normalizedPath = pathe.normalize(
    typeof outputPath === 'string' ? outputPath : outputPath(getCssHash()),
  )

  await fse.ensureDir(pathe.dirname(normalizedPath))
  logger.debug('css output path', normalizedPath)
  await fse.writeFile(normalizedPath, cssCode, 'utf-8')
}
