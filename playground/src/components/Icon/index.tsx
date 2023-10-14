import React from 'react'
import { tw } from 'tagged-classnames-free'

export interface IIconProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Icon: React.FC<IIconProps> = (props) => {
  const { className, ...rest } = props
  return <span className={tw`w-10 h-10 ${className}`} {...rest} />
}

export default Icon
