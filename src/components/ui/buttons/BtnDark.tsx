// DarkOutline.jsx
import { twMerge } from 'tailwind-merge'
import type { BtnProps } from './types'
export const DarkOutline:React.FC<BtnProps> = ({ onClick, children, className, ...props }) => (
  <button
    type='button'
    className={twMerge('text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0', className)}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)
