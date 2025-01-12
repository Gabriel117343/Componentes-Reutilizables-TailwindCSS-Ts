// YellowOutline.jsx
import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { BtnProps } from './types'

export const YellowOutline:React.FC<BtnProps> = ({ onClick, children, className, ...props }) => (
  <button
    type='button'
    className={twMerge(
      'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0',
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)
