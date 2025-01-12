// BtnBlue.jsx

import { twMerge } from 'tailwind-merge'
import type { BtnProps } from './types'

export const BtnBlueShadow:React.FC<BtnProps> = ({ onClick, className, children, ...props }) => (
  <button
    type='button'
    className={twMerge(
      'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0',
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

export const BtnBlueMonochrome:React.FC<BtnProps> = ({
  onClick,
  children,
  className,
  ...props
}) => (
  <button
    type='button'
    className={twMerge(
      'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0',
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

export const BtnBlueOutline:React.FC<BtnProps> = ({ onClick, children, className, ...props }) => (
  <button
    type='button'
    className={twMerge(
      'text-blue-700  bg-gradient-to-r hover:from-blue-500 hover:text-white border border-blue-700 hover:bg-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0',
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)
