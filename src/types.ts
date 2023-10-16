import type { IconCSSIconSetOptions } from '@iconify/utils/lib/css/types'
import type { IconifyJSON } from '@iconify/types'

export interface CssGenerator
  extends Pick<IconCSSIconSetOptions, 'iconSelector'> {
  /** Add extra icon sets, non-official supported */
  iconSets?: Record<string, IconifyJSON>
  /**
   * Specific iconify icons to export, including `iconSets` to export.
   *
   * For example:
   *
   * ```ts
   * ["bx", "bxs"]
   * ```
   *
   * or
   *
   * ```ts
   * {
   *   "bx": ["badge", "brightness"]
   *   "bxs": ["badge", "brightness"]
   *   "bxs": "*"
   * }
   * ```
   *
   * or
   *
   * ```ts
   * {
   *   "bx": ["badge", "brightness"]
   *   "bxs": "*"
   * }
   * ```
   */
  exportIcons?: string[] | Record<string, string[] | RegExp>
  /**
   * Custom selector for export icons, defaults to ".icon--{prefix}--{name}". Variable "{prefix}" is replaced with icon set prefix, "{name}" with icon name.
   *
   * ref: https://iconify.design/docs/libraries/utils/get-icons-css.html#options
   */
  iconSelector?: string
  /** icons CSS output path, under public directory in common. */
  outputPath: string | ((cssHash: string) => string)
}

export interface Options {
  /** Iconify icon sets CSS generator */
  cssGenerators?: CssGenerator[]
}
