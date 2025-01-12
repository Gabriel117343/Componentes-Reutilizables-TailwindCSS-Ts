import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { BtnProps } from './types'

export const BtnRedShadow:React.FC<BtnProps> = ({ onClick, className, children, ...props }) => (
  <button
    type='button'
    className={twMerge(
      'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0',
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

export const BtnRedMonochrome:React.FC<BtnProps> = ({
  onClick,
  children,
  className,
  ...props
}) => (
  <button
    type='button'
    className={twMerge(
      'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0',
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)
export const BtnRedOutline:React.FC<BtnProps> = ({ onClick, children, className, ...props }) => (
  <button
    type='button'
    className={twMerge(
      'text-red-700 hover:text-white bg-gradient-to-r border hover:from-red-500 border-red-700 hover:bg-gradient-to-br hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0',
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)
