
import { twMerge } from 'tailwind-merge'
import type { BtnProps } from './types'
export const BtnGreenShadow:React.FC<BtnProps> = ({ onClick, className, children, ...props }) => (
  <button
    type='button'
    className={twMerge(
      'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0 ',
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

export const BtnGreenMonochrome:React.FC<BtnProps> = ({
  onClick,
  children,
  className,
  ...props
}) => (
  <button
    type='button'
    className={twMerge(
      'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0',
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

export const BtnGreenOutline:React.FC<BtnProps> = ({ onClick, children, className, ...props }) => (
  <button
    type='button'
    className={twMerge(
      'text-green-700 bg-gradient-to-r hover:from-green-500 hover:text-white border border-green-700 hover:bg-green-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0',
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)
