import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { BtnProps } from './types'

export const BtnRegister3D:React.FC<BtnProps> = ({
  onClick,
  type = 'submit',
  disabled,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children ?? 'Registrar'}
    </button>
  )
}
