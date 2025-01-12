// BtnCyan.jsx
import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { BtnProps } from './types'

export const BtnCyanShadow:React.FC<BtnProps> = ({ onClick, className, children, ...props }) => (
  <button
    type='button'
    className={twMerge('text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0', className)}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

export const BtnCyanMonochrome:React.FC<BtnProps> = ({ onClick, children, className, ...props }) => (
  <button
    type='button'
    className={twMerge('text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0', className)}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)
