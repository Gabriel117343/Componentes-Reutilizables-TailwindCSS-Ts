// BtnLime.jsx
import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { BtnProps } from './types'

export const BtnLimeShadow:React.FC<BtnProps> = ({ onClick, className, children, ...props }) => (
  <button
    type='button'
    className={twMerge('text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0', className)}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

export const BtnLimeMonochrome:React.FC<BtnProps> = ({
  onClick,
  children,
  className,
  ...props
}) => (
  <button
    type='button'
    className={twMerge('text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0', className)}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)
