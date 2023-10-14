import { getIconsCSS } from '@iconify/utils'
import fse from 'fs-extra'
import pathe from 'pathe'
import { IconSet } from '@iconify/tools'

import { ensureLoadIconSet } from './loader'

import type { IconCSSIconSetOptions } from '@iconify/utils/lib/css/types'
import type { CssGenerator } from '../types'

export function generateIconSetsCss(cssGenerator: CssGenerator) {
  const {
    iconifyJSONs = {},
    iconifyIcons,
    iconSelector,
    outputPath,
  } = cssGenerator

  const getIconsCSSOptions: IconCSSIconSetOptions = {
    iconSelector,
  }

  let cssCode = ''

  if (iconifyIcons) {
    if (Array.isArray(iconifyIcons)) {
      iconifyIcons.forEach((prefix) => {
        const iconSet = ensureLoadIconSet(prefix, { iconSets: iconifyJSONs })
        const css = getIconsCSS(
          iconSet,
          Object.keys(iconSet.icons),
          getIconsCSSOptions,
        )
        cssCode += css
      })
    } else {
      Object.keys(iconifyIcons).forEach((prefix) => {
        const iconSetJson = ensureLoadIconSet(prefix, {
          iconSets: iconifyJSONs,
        })
        const iconSet = new IconSet(iconSetJson)
        const iconNames = iconifyIcons[prefix as keyof typeof iconifyIcons]
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

  const normalizedPath = pathe.normalize(outputPath)

  fse.ensureDir(pathe.dirname(normalizedPath)).then(() => {
    fse.writeFile(normalizedPath, cssCode, 'utf-8')
  })
}
