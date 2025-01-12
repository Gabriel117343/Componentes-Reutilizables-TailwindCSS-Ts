// BtnTeal.jsx
import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { BtnProps } from './types'

export const BtnTealShadow:React.FC<BtnProps> = ({ onClick, className, children, ...props }) => (
  <button
    type='button'
    className={twMerge('text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0', className)}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

export const BtnTealMonochrome:React.FC<BtnProps> = ({
  onClick,
  children,
  className,
  ...props
}) => (
  <button
    type='button'
    className={twMerge('text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0', className)}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)
