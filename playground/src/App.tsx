import React, { useEffect, useState } from 'react'
import { cls } from 'tagged-classnames-free'

import Icon from './components/Icon'

const App: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [iconClassNames, setIconClassNames] = useState<string[]>([])

  useEffect(() => {
    const iconClassNames: string[] = []
    Array.from(document.styleSheets).forEach((item) => {
      if (item.href && item.href.endsWith('/icons.css')) {
        for (let i = 0; i < item.cssRules.length; i++) {
          const cssRuleItem = item.cssRules.item(i)
          if (cssRuleItem instanceof CSSStyleRule) {
            const selectorText = cssRuleItem.selectorText
            // 如果类名中存在 "," 不做处理
            if (selectorText.includes(',')) {
              continue
            }

            if (selectorText && selectorText.includes('.i-')) {
              iconClassNames.push(selectorText.replace('.', ''))
            }
          }
        }
      }
    })

    setIconClassNames(iconClassNames)
    setLoading(false)
  }, [])

  return (
    <div className={cls`p-2`}>
      <h1
        className={cls`
          text-2xl font-bold 
          bg-clip-text text-transparent
          mb-3
        `}
        style={{
          backgroundImage: 'linear-gradient(to right, #3494e6, #ec6ead)',
        }}
      >
        unplugin-iconify
      </h1>
      <div
        className={cls`
          [&_h2]:mb-2
          [&_ul]:flex [&_ul]:flex-wrap
          [&_ul:not(:last-child)]:mb-2
        `}
      >
        <h2>Use static class names</h2>
        <ul>
          {[
            cls`i-bx--badge`,
            cls`i-bx--alarm`,
            cls`i-bx--arrow-to-left`,
            cls`i-bx--yen`,
          ].map((item) => {
            return (
              <li key={item}>
                <Icon className={item} title={item} />
              </li>
            )
          })}
        </ul>

        <h2>CSS generators</h2>
        {loading ? (
          <div>individual CSS icons loading...</div>
        ) : (
          <ul>
            {iconClassNames.map((item) => {
              return (
                <li key={item}>
                  <Icon className={item} title={item} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
