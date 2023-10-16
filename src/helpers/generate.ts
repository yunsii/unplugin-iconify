import crypto from 'crypto'

import { getIconsCSS } from '@iconify/utils'
import fse from 'fs-extra'
import pathe from 'pathe'
import { IconSet } from '@iconify/tools'

import { ensureLoadIconSet } from './loader'

import type { IconCSSIconSetOptions } from '@iconify/utils/lib/css/types'
import type { CssGenerator } from '../types'

export function generateIconSetsCss(cssGenerator: CssGenerator) {
  const { iconSets = {}, exportIcons, iconSelector, outputPath } = cssGenerator

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
    return crypto
      .createHash('md5')
      .update(cssCode.replace(/[ \n\t]/g, ''), 'utf8')
      .digest('hex')
      .slice(0, 8)
  }

  const normalizedPath = pathe.normalize(
    typeof outputPath === 'string' ? outputPath : outputPath(getCssHash()),
  )

  fse.ensureDir(pathe.dirname(normalizedPath)).then(() => {
    fse.writeFile(normalizedPath, cssCode, 'utf-8')
  })
}
