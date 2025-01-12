import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { BtnProps } from './types'
export const BtnGrayOutline:React.FC<BtnProps> = ({ onClick, children, className, ...props }) => (
  <button
    type='button'
    className={twMerge(
      'text-gray-700 bg-gradient-to-r border hover:from-gray-100 border-gray-700 hover:bg-gray-200 focus:ring-4 hover:bg-gradient-to-br focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0',
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)
