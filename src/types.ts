import type { IconCSSIconSetOptions } from '@iconify/utils/lib/css/types'
import type { IconifyJSON } from '@iconify/types'

export interface CssGenerator
  extends Pick<IconCSSIconSetOptions, 'iconSelector'> {
  /** Inject extra IconifyJSONs, non-official supported */
  iconifyJSONs?: Record<string, IconifyJSON>
  /**
   * Specific iconify icons to generate. Also you can custom import from `iconifyJSONs`.
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
  iconifyIcons?: string[] | Record<string, string[] | RegExp>
  /**
   * Selector for icon, defaults to ".icon--{prefix}--{name}". Variable "{prefix}" is replaced with icon set prefix, "{name}" with icon name.
   *
   * ref: https://iconify.design/docs/libraries/utils/get-icons-css.html#options
   */
  iconSelector?: string
  /** CSS output path, under public directory in common. */
  outputPath: string
}

export interface Options {
  /** Iconify icon sets CSS generator */
  cssGenerators?: CssGenerator[]
}
